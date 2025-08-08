#!/bin/bash

# Stop All Bootstrap Services for Three-Base Testing

set -e

BOOTSTRAP_LOGS_DIR="/tmp/bootstrap-test-logs"

echo "🛑 Stopping all bootstrap services for three-base testing..."
echo "==========================================================="
echo ""

# Function to stop service by PID
stop_service_by_pid() {
  local service_name=$1
  local pid_file=$2
  
  if [ -f "$pid_file" ]; then
    local pid=$(cat "$pid_file")
    
    if kill -0 "$pid" 2>/dev/null; then
      echo "🔌 Stopping $service_name (PID: $pid)..."
      
      # Try graceful shutdown first
      kill "$pid" 2>/dev/null
      sleep 3
      
      # Check if still running
      if kill -0 "$pid" 2>/dev/null; then
        echo "  ⚠️ Forcing shutdown for $service_name..."
        kill -9 "$pid" 2>/dev/null
        sleep 1
      fi
      
      # Verify it's stopped
      if ! kill -0 "$pid" 2>/dev/null; then
        echo "  ✅ $service_name stopped successfully"
      else
        echo "  ❌ Failed to stop $service_name"
      fi
    else
      echo "⚠️ $service_name process not found (PID: $pid)"
    fi
    
    # Remove PID file
    rm -f "$pid_file"
  else
    echo "⚠️ PID file not found for $service_name: $pid_file"
  fi
}

# Function to stop services by process name (fallback)
stop_services_by_name() {
  echo "🔍 Checking for remaining bootstrap-service processes..."
  
  local pids=$(pgrep -f "bootstrap-service.js" 2>/dev/null || true)
  
  if [ -n "$pids" ]; then
    echo "Found remaining processes: $pids"
    echo "$pids" | xargs kill 2>/dev/null || true
    sleep 2
    
    # Force kill if still running
    local remaining_pids=$(pgrep -f "bootstrap-service.js" 2>/dev/null || true)
    if [ -n "$remaining_pids" ]; then
      echo "Force killing remaining processes: $remaining_pids"
      echo "$remaining_pids" | xargs kill -9 2>/dev/null || true
    fi
  fi
  
  # Final check
  local final_pids=$(pgrep -f "bootstrap-service.js" 2>/dev/null || true)
  if [ -z "$final_pids" ]; then
    echo "✅ All bootstrap-service processes stopped"
  else
    echo "⚠️ Some processes may still be running: $final_pids"
  fi
}

# Stop services by PID files
if [ -d "$BOOTSTRAP_LOGS_DIR" ]; then
  
  # Stop Base 1 (Leader)
  stop_service_by_pid "Base 1 (Leader)" "$BOOTSTRAP_LOGS_DIR/Base1-Leader-bootstrap.pid"
  
  # Stop Base 2 (Follower)
  stop_service_by_pid "Base 2 (Follower)" "$BOOTSTRAP_LOGS_DIR/Base2-Follower-bootstrap.pid"
  
  # Stop Base 3 (Follower)  
  stop_service_by_pid "Base 3 (Follower)" "$BOOTSTRAP_LOGS_DIR/Base3-Follower-bootstrap.pid"
  
else
  echo "⚠️ Bootstrap logs directory not found: $BOOTSTRAP_LOGS_DIR"
  echo "  Attempting to stop by process name..."
fi

# Fallback: stop any remaining processes
stop_services_by_name

echo ""
echo "🧹 Cleaning up resources..."

# Check if ports are now free
echo "🔍 Verifying ports are free..."
for port in 4242 4243 4244; do
  if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "  ⚠️ Port $port is still in use"
  else
    echo "  ✅ Port $port is free"
  fi
done

# Clean up any temporary announcement files
if [ -d "$(dirname "$0")/../bootstrap" ]; then
  BOOTSTRAP_CODE_DIR="$(dirname "$0")/../bootstrap"
  
  # Clean up announcements directory
  if [ -d "$BOOTSTRAP_CODE_DIR/announcements" ]; then
    echo "🗑️ Cleaning up announcement files..."
    rm -rf "$BOOTSTRAP_CODE_DIR/announcements"
    echo "  ✅ Announcement files cleaned up"
  fi
  
  # Clean up failed announcements directory
  if [ -d "$BOOTSTRAP_CODE_DIR/failed_announcements" ]; then
    echo "🗑️ Cleaning up failed announcement files..."
    rm -rf "$BOOTSTRAP_CODE_DIR/failed_announcements" 
    echo "  ✅ Failed announcement files cleaned up"
  fi
fi

echo ""
echo "📊 Final Status Check:"
echo "====================="

# Check if any bootstrap services are still running
local remaining_services=()
for port in 4242 4243 4244; do
  if curl -s http://localhost:$port/health >/dev/null 2>&1; then
    remaining_services+=("Port $port")
  fi
done

if [ ${#remaining_services[@]} -eq 0 ]; then
  echo "✅ All bootstrap services stopped successfully"
  echo ""
  echo "🧹 Cleanup Summary:"
  echo "  • All bootstrap service processes terminated"
  echo "  • All service ports (4242, 4243, 4244) are free"
  echo "  • Temporary announcement files cleaned up"
  echo "  • PID files removed"
  echo ""
  echo "💡 Bootstrap services can be restarted with:"
  echo "   ./start-all-bootstrap-services.sh"
  
else
  echo "⚠️ Some services may still be running:"
  for service in "${remaining_services[@]}"; do
    echo "  • $service"
  done
  echo ""
  echo "🔧 Manual cleanup may be required:"
  echo "  • Check processes: ps aux | grep bootstrap-service"
  echo "  • Kill manually: pkill -f bootstrap-service.js"
  echo "  • Check ports: lsof -i :4242,4243,4244"
fi

echo ""
echo "📝 Log Files Preserved:"
if [ -d "$BOOTSTRAP_LOGS_DIR" ]; then
  echo "  Logs available at: $BOOTSTRAP_LOGS_DIR/"
  ls -la "$BOOTSTRAP_LOGS_DIR"/*.log 2>/dev/null || echo "  (No log files found)"
else
  echo "  No log files found"
fi

echo ""
echo "🏁 Bootstrap service shutdown complete"