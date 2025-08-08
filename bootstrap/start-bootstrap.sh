#!/bin/bash

# Allyabase Bootstrap Startup Script
# Starts both the bootstrap service and fedwiki configuration interface

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="${BOOTSTRAP_CONFIG:-$SCRIPT_DIR/../bootstrap-config.json}"
DEFAULT_CONFIG_FILE="$SCRIPT_DIR/../bootstrap-config-default.json"

# Configuration
BOOTSTRAP_PORT="${BOOTSTRAP_PORT:-4242}"
FEDWIKI_PORT="${FEDWIKI_PORT:-3030}"
LOG_LEVEL="${LOG_LEVEL:-info}"

echo "🚀 Allyabase Bootstrap System"
echo "============================="
echo "Bootstrap Service Port: $BOOTSTRAP_PORT"
echo "Fedwiki Config Port: $FEDWIKI_PORT"
echo "Configuration File: $CONFIG_FILE"
echo "Log Level: $LOG_LEVEL"
echo ""

# Function to check if port is in use
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        return 0  # Port is in use
    else
        return 1  # Port is free
    fi
}

# Function to wait for service to be ready
wait_for_service() {
    local service_name=$1
    local port=$2
    local max_attempts=${3:-30}
    
    echo "⏳ Waiting for $service_name to be ready on port $port..."
    
    for i in $(seq 1 $max_attempts); do
        if curl -s http://localhost:$port/health >/dev/null 2>&1; then
            echo "✅ $service_name is ready"
            return 0
        fi
        sleep 2
        if [ $i -eq $max_attempts ]; then
            echo "❌ $service_name failed to start after $max_attempts attempts"
            return 1
        fi
    done
}

# Function to cleanup background processes
cleanup() {
    echo ""
    echo "🛑 Shutting down bootstrap system..."
    
    if [ -n "$BOOTSTRAP_PID" ]; then
        echo "  Stopping bootstrap service (PID: $BOOTSTRAP_PID)..."
        kill $BOOTSTRAP_PID 2>/dev/null || true
    fi
    
    if [ -n "$FEDWIKI_PID" ]; then
        echo "  Stopping fedwiki config server (PID: $FEDWIKI_PID)..."
        kill $FEDWIKI_PID 2>/dev/null || true
    fi
    
    # Clean up any remaining processes
    pkill -f "bootstrap-service.js" 2>/dev/null || true
    pkill -f "fedwiki-config-server.js" 2>/dev/null || true
    
    echo "✅ Bootstrap system shutdown complete"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Check if Node.js is available
if ! command -v node >/dev/null 2>&1; then
    echo "❌ Node.js not found. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Check if we're in the bootstrap directory
cd "$SCRIPT_DIR"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Create default configuration if none exists
if [ ! -f "$CONFIG_FILE" ]; then
    echo "📝 Creating default configuration..."
    cp "$DEFAULT_CONFIG_FILE" "$CONFIG_FILE"
    echo "✅ Default configuration created at $CONFIG_FILE"
    echo ""
    echo "💡 You can edit the configuration using the fedwiki interface at:"
    echo "   http://localhost:$FEDWIKI_PORT"
    echo ""
fi

# Check for port conflicts
if check_port $BOOTSTRAP_PORT; then
    echo "❌ Port $BOOTSTRAP_PORT is already in use"
    echo "   Change BOOTSTRAP_PORT environment variable or stop the conflicting service"
    exit 1
fi

if check_port $FEDWIKI_PORT; then
    echo "❌ Port $FEDWIKI_PORT is already in use"
    echo "   Change FEDWIKI_PORT environment variable or stop the conflicting service"
    exit 1
fi

API_PORT=$((FEDWIKI_PORT + 1))
if check_port $API_PORT; then
    echo "❌ Port $API_PORT is already in use (needed for configuration API)"
    echo "   This port is automatically calculated as FEDWIKI_PORT + 1"
    exit 1
fi

echo "✅ All required ports are available"
echo ""

# Start fedwiki configuration server
echo "🌍 Starting fedwiki configuration server..."
LOG_LEVEL="$LOG_LEVEL" FEDWIKI_PORT="$FEDWIKI_PORT" BOOTSTRAP_CONFIG="$CONFIG_FILE" \
node fedwiki-config-server.js > fedwiki-config.log 2>&1 &
FEDWIKI_PID=$!
echo "  Started with PID: $FEDWIKI_PID"
echo "  Logs: $SCRIPT_DIR/fedwiki-config.log"

# Wait for fedwiki config server to be ready
if wait_for_service "Fedwiki Config Server" $API_PORT 15; then
    echo "✅ Fedwiki configuration interface ready"
    echo "  📝 Wiki Interface: http://localhost:$FEDWIKI_PORT"
    echo "  🔧 API Interface: http://localhost:$API_PORT"
else
    echo "❌ Failed to start fedwiki configuration server"
    cleanup
fi

echo ""

# Start bootstrap service
echo "🔄 Starting bootstrap service..."
LOG_LEVEL="$LOG_LEVEL" BOOTSTRAP_PORT="$BOOTSTRAP_PORT" BOOTSTRAP_CONFIG="$CONFIG_FILE" \
node bootstrap-service.js > bootstrap-service.log 2>&1 &
BOOTSTRAP_PID=$!
echo "  Started with PID: $BOOTSTRAP_PID"
echo "  Logs: $SCRIPT_DIR/bootstrap-service.log"

# Wait for bootstrap service to be ready
if wait_for_service "Bootstrap Service" $BOOTSTRAP_PORT 30; then
    echo "✅ Bootstrap service ready"
    echo "  🔍 Health Check: http://localhost:$BOOTSTRAP_PORT/health"
    echo "  📊 Status: http://localhost:$BOOTSTRAP_PORT/status"
else
    echo "❌ Failed to start bootstrap service"
    cleanup
fi

echo ""
echo "🎉 Allyabase Bootstrap System Started Successfully!"
echo "================================================="
echo ""
echo "📋 Service Overview:"
echo "  • Bootstrap Service: http://localhost:$BOOTSTRAP_PORT"
echo "  • Fedwiki Config UI: http://localhost:$FEDWIKI_PORT"
echo "  • Configuration API: http://localhost:$API_PORT"
echo ""
echo "📝 Configuration:"
echo "  • Config File: $CONFIG_FILE"
echo "  • Edit via: http://localhost:$FEDWIKI_PORT"
echo ""
echo "📊 Monitoring:"
echo "  • Bootstrap Logs: tail -f $SCRIPT_DIR/bootstrap-service.log"
echo "  • Config Logs: tail -f $SCRIPT_DIR/fedwiki-config.log" 
echo "  • Health Check: curl http://localhost:$BOOTSTRAP_PORT/health"
echo ""
echo "🛑 To stop: Press Ctrl+C or run: pkill -f bootstrap"
echo ""

# Keep script running and show real-time status
echo "📡 Real-time Status (Press Ctrl+C to stop):"
echo "============================================"

# Function to show status
show_status() {
    echo "$(date): Bootstrap=$(curl -s http://localhost:$BOOTSTRAP_PORT/health >/dev/null 2>&1 && echo "✅" || echo "❌") Config=$(curl -s http://localhost:$API_PORT/health >/dev/null 2>&1 && echo "✅" || echo "❌")"
}

# Show status every 30 seconds
while true; do
    show_status
    sleep 30
done