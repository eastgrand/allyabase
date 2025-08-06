#!/bin/bash

# Stop all ngrok tunnels for Planet Nine ecosystem testing

set -e

TUNNEL_URLS_FILE="/tmp/ngrok-tunnel-urls.txt"
TUNNEL_LOG_DIR="/tmp/ngrok-tunnels"

echo "🛑 Planet Nine Ecosystem - Stop ngrok Tunnels"
echo "============================================="

# Function to stop tunnels by PID
stop_tunnels_by_pid() {
    if [ -f "$TUNNEL_URLS_FILE" ]; then
        echo "📋 Stopping tunnels from tracking file..."
        
        while IFS=: read -r base tunnel_url ports pid; do
            if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
                echo "  🔌 Stopping $base tunnel (PID $pid)..."
                kill "$pid" 2>/dev/null || true
                
                # Wait for process to terminate
                for i in {1..5}; do
                    if ! kill -0 "$pid" 2>/dev/null; then
                        echo "    ✅ $base tunnel stopped"
                        break
                    fi
                    sleep 1
                    if [ $i -eq 5 ]; then
                        echo "    ⚠️  $base tunnel didn't stop gracefully, force killing..."
                        kill -9 "$pid" 2>/dev/null || true
                    fi
                done
            else
                echo "  ⚠️  $base tunnel (PID $pid) not running or invalid PID"
            fi
        done < "$TUNNEL_URLS_FILE"
        
        # Clean up tracking file
        rm -f "$TUNNEL_URLS_FILE"
        echo "    🗑️  Removed tunnel tracking file"
    else
        echo "⚠️  No tunnel tracking file found at $TUNNEL_URLS_FILE"
    fi
}

# Function to stop any remaining ngrok processes
stop_remaining_ngrok_processes() {
    echo ""
    echo "🔍 Checking for remaining ngrok processes..."
    
    # Find ngrok processes
    ngrok_pids=$(pgrep -f "ngrok" 2>/dev/null || true)
    
    if [ -n "$ngrok_pids" ]; then
        echo "  Found remaining ngrok processes: $ngrok_pids"
        echo "  🔌 Stopping remaining ngrok processes..."
        
        echo "$ngrok_pids" | xargs kill 2>/dev/null || true
        sleep 2
        
        # Force kill if still running
        remaining_pids=$(pgrep -f "ngrok" 2>/dev/null || true)
        if [ -n "$remaining_pids" ]; then
            echo "  ⚠️  Force killing stubborn processes: $remaining_pids"
            echo "$remaining_pids" | xargs kill -9 2>/dev/null || true
        fi
        
        echo "  ✅ All ngrok processes stopped"
    else
        echo "  ✅ No ngrok processes found running"
    fi
}

# Function to clean up log files
cleanup_logs() {
    echo ""
    echo "🧹 Cleaning up tunnel logs..."
    
    if [ -d "$TUNNEL_LOG_DIR" ]; then
        log_count=$(ls -1 "$TUNNEL_LOG_DIR"/*.log 2>/dev/null | wc -l || echo "0")
        if [ "$log_count" -gt 0 ]; then
            echo "  🗑️  Removing $log_count log files from $TUNNEL_LOG_DIR"
            rm -f "$TUNNEL_LOG_DIR"/*.log
        fi
        
        # Remove directory if empty
        if [ -z "$(ls -A "$TUNNEL_LOG_DIR" 2>/dev/null)" ]; then
            rmdir "$TUNNEL_LOG_DIR"
            echo "  🗑️  Removed empty log directory"
        fi
    else
        echo "  ✅ No tunnel log directory to clean up"
    fi
}

# Execute cleanup steps
stop_tunnels_by_pid
stop_remaining_ngrok_processes  
cleanup_logs

echo ""
echo "✅ ngrok Tunnel Cleanup Complete!"
echo ""

# Verify no ngrok processes remain
if pgrep -f "ngrok" >/dev/null 2>&1; then
    echo "⚠️  Warning: Some ngrok processes may still be running"
    echo "   Active ngrok processes:"
    ps aux | grep ngrok | grep -v grep
    echo "   You may need to kill them manually"
else
    echo "🎉 All ngrok tunnels stopped successfully!"
fi

echo ""
echo "💡 To restart tunnels:"
echo "   ./setup-ngrok-tunnels.sh"