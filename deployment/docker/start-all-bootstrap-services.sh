#!/bin/bash

# Start All Bootstrap Services for Three-Base Testing
# Starts bootstrap services for leader and follower bases

set -e

BOOTSTRAP_DIR="$(dirname "$0")/bootstrap-configs"
BOOTSTRAP_CODE_DIR="$(dirname "$0")/../bootstrap"
BOOTSTRAP_LOGS_DIR="/tmp/bootstrap-test-logs"

echo "🚀 Starting all bootstrap services for three-base testing..."
echo "=========================================================="
echo ""

# Create logs directory
mkdir -p "$BOOTSTRAP_LOGS_DIR"

# Check if bootstrap configurations exist
if [ ! -d "$BOOTSTRAP_DIR" ]; then
  echo "❌ Bootstrap configurations not found. Run ./setup-bootstrap-configs.sh first."
  exit 1
fi

# Check if bootstrap code directory exists
if [ ! -d "$BOOTSTRAP_CODE_DIR" ]; then
  echo "❌ Bootstrap code directory not found: $BOOTSTRAP_CODE_DIR"
  echo "   Expected to find bootstrap service code there."
  exit 1
fi

# Navigate to bootstrap code directory and ensure dependencies are installed
echo "📦 Ensuring bootstrap dependencies are installed..."
cd "$BOOTSTRAP_CODE_DIR"

if [ ! -d "node_modules" ]; then
  echo "  Installing dependencies..."
  npm install > "$BOOTSTRAP_LOGS_DIR/npm-install.log" 2>&1
  if [ $? -eq 0 ]; then
    echo "  ✅ Dependencies installed successfully"
  else
    echo "  ❌ Failed to install dependencies"
    echo "  Check log: $BOOTSTRAP_LOGS_DIR/npm-install.log"
    exit 1
  fi
else
  echo "  ✅ Dependencies already installed"
fi

# Function to check if port is available
check_port() {
  local port=$1
  if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
    return 1  # Port is in use
  else
    return 0  # Port is available
  fi
}

# Function to wait for service to be ready
wait_for_service() {
  local service_name=$1
  local port=$2
  local max_attempts=${3:-30}
  
  echo "  ⏳ Waiting for $service_name to be ready on port $port..."
  
  for i in $(seq 1 $max_attempts); do
    if curl -s http://localhost:$port/health >/dev/null 2>&1; then
      echo "  ✅ $service_name is ready"
      return 0
    fi
    sleep 2
    if [ $i -eq $max_attempts ]; then
      echo "  ❌ $service_name failed to start after $max_attempts attempts"
      return 1
    fi
  done
}

# Function to start a bootstrap service
start_bootstrap_service() {
  local base_name=$1
  local config_file=$2
  local port=$3
  local role=$4
  
  echo "🔄 Starting bootstrap service for $base_name ($role)..."
  
  # Check if port is available
  if ! check_port $port; then
    echo "  ❌ Port $port is already in use"
    return 1
  fi
  
  # Set environment variables
  export BOOTSTRAP_CONFIG="$BOOTSTRAP_DIR/$config_file"
  export BOOTSTRAP_PORT="$port"
  export LOG_LEVEL="info"
  export PUBLIC_HOSTNAME="${PUBLIC_HOSTNAME:-localhost}"
  
  # Start the bootstrap service in background
  local log_file="$BOOTSTRAP_LOGS_DIR/${base_name}-bootstrap.log"
  echo "  📝 Logs: $log_file"
  
  node bootstrap-service.js > "$log_file" 2>&1 &
  local pid=$!
  
  echo "  🆔 PID: $pid"
  
  # Store PID for cleanup
  echo "$pid" > "$BOOTSTRAP_LOGS_DIR/${base_name}-bootstrap.pid"
  
  # Wait for service to be ready
  if wait_for_service "$base_name Bootstrap" $port 30; then
    echo "  ✅ $base_name bootstrap service started successfully"
    return 0
  else
    echo "  ❌ $base_name bootstrap service failed to start"
    echo "  Last log entries:"
    tail -10 "$log_file" | sed 's/^/    /'
    return 1
  fi
}

echo "🏁 Starting bootstrap services..."
echo ""

# Start Base 1 (Leader) Bootstrap Service
if start_bootstrap_service "Base1-Leader" "base1-config.json" 4242 "leader"; then
  echo ""
else
  echo "❌ Failed to start Base 1 (Leader) bootstrap service"
  exit 1
fi

# Start Base 2 (Follower) Bootstrap Service  
if start_bootstrap_service "Base2-Follower" "base2-config.json" 4243 "follower"; then
  echo ""
else
  echo "❌ Failed to start Base 2 (Follower) bootstrap service"
  exit 1
fi

# Start Base 3 (Follower) Bootstrap Service
if start_bootstrap_service "Base3-Follower" "base3-config.json" 4244 "follower"; then
  echo ""
else
  echo "❌ Failed to start Base 3 (Follower) bootstrap service"
  exit 1
fi

echo "🎉 All bootstrap services started successfully!"
echo ""
echo "📊 Service Status:"
echo "  • Base 1 (Leader):   http://localhost:4242/status"
echo "  • Base 2 (Follower): http://localhost:4243/status"  
echo "  • Base 3 (Follower): http://localhost:4244/status"
echo ""
echo "🔍 Health Checks:"
echo "  • Base 1: curl http://localhost:4242/health"
echo "  • Base 2: curl http://localhost:4243/health"
echo "  • Base 3: curl http://localhost:4244/health"
echo ""
echo "📝 Log Files:"
echo "  • Base 1: $BOOTSTRAP_LOGS_DIR/Base1-Leader-bootstrap.log"
echo "  • Base 2: $BOOTSTRAP_LOGS_DIR/Base2-Follower-bootstrap.log"
echo "  • Base 3: $BOOTSTRAP_LOGS_DIR/Base3-Follower-bootstrap.log"
echo ""
echo "🔄 Process Management:"
echo "  • PIDs stored in: $BOOTSTRAP_LOGS_DIR/*-bootstrap.pid"
echo "  • Stop all: ./stop-all-bootstrap-services.sh"
echo ""

# Wait a moment for services to initialize
echo "⏳ Waiting for initial bootstrap initialization..."
sleep 10

# Show initial status
echo "📡 Initial Bootstrap Status Check:"
for port in 4242 4243 4244; do
  if curl -s http://localhost:$port/health >/dev/null 2>&1; then
    service_status=$(curl -s http://localhost:$port/status 2>/dev/null)
    if [ $? -eq 0 ]; then
      base_name=$(echo "$service_status" | grep -o '"name":"[^"]*"' | cut -d'"' -f4)
      echo "  ✅ Port $port: $base_name"
    else
      echo "  ✅ Port $port: Service running (status unavailable)"
    fi
  else
    echo "  ❌ Port $port: Service not responding"
  fi
done

echo ""
echo "💡 Next Steps:"
echo "  1. Wait 15-30 seconds for announcement protocol to complete"
echo "  2. Run: ./verify-bootstrap-announcements.sh"
echo "  3. Check announcement logs in the log files above"
echo ""
echo "🚀 Bootstrap services are now running and ready for testing!"