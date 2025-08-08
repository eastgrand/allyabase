#!/bin/bash

# Verify Bootstrap Announcements for Three-Base Testing
# Validates that followers have announced to leader and leader has received announcements

set -e

BOOTSTRAP_LOGS_DIR="/tmp/bootstrap-test-logs"
BOOTSTRAP_CODE_DIR="$(dirname "$0")/../bootstrap"

echo "🔍 Verifying bootstrap announcements for three-base testing..."
echo "============================================================="
echo ""

# Function to check if service is responding
check_service() {
  local port=$1
  local service_name=$2
  
  if curl -s http://localhost:$port/health >/dev/null 2>&1; then
    echo "✅ $service_name is responding"
    return 0
  else
    echo "❌ $service_name is not responding"
    return 1
  fi
}

# Function to get service status
get_service_status() {
  local port=$1
  curl -s http://localhost:$port/status 2>/dev/null || echo "{}"
}

# Function to check for announcements in logs
check_announcements_in_logs() {
  local log_file=$1
  local service_name=$2
  
  if [ ! -f "$log_file" ]; then
    echo "❌ Log file not found: $log_file"
    return 1
  fi
  
  echo "  📝 Checking $service_name log for announcement activity..."
  
  # Check for successful announcements (in follower logs)
  local successful_announcements=$(grep -c "Successfully announced to" "$log_file" 2>/dev/null || echo "0")
  
  # Check for received announcements (in leader logs)
  local received_announcements=$(grep -c "Received valid announcement from" "$log_file" 2>/dev/null || echo "0")
  
  # Check for failed announcements
  local failed_announcements=$(grep -c "Failed to announce to" "$log_file" 2>/dev/null || echo "0")
  
  echo "    📤 Sent announcements: $successful_announcements"
  echo "    📥 Received announcements: $received_announcements"
  echo "    ❌ Failed announcements: $failed_announcements"
  
  return 0
}

# Function to check announcement files
check_announcement_files() {
  local service_port=$1
  local expected_announcements=$2
  
  echo "  📁 Checking for announcement files in bootstrap service..."
  
  # Try to find announcement files in the bootstrap service directory
  local announcements_dir="$BOOTSTRAP_CODE_DIR/announcements"
  
  if [ -d "$announcements_dir" ]; then
    local announcement_count=$(ls -1 "$announcements_dir"/announcement_*.json 2>/dev/null | wc -l)
    echo "    📄 Found $announcement_count announcement files"
    
    if [ "$announcement_count" -ge "$expected_announcements" ]; then
      echo "    ✅ Expected number of announcements received ($expected_announcements)"
      return 0
    else
      echo "    ⚠️ Expected $expected_announcements announcements, found $announcement_count"
      return 1
    fi
  else
    echo "    ⚠️ Announcements directory not found: $announcements_dir"
    return 1
  fi
}

echo "🏥 Step 1: Health Check - Verify all bootstrap services are running"
echo "=================================================================="

all_services_running=true

# Check Base 1 (Leader)
if check_service 4242 "Base 1 (Leader)"; then
  leader_status=$(get_service_status 4242)
else
  echo "❌ Base 1 (Leader) bootstrap service is not responding"
  all_services_running=false
fi

# Check Base 2 (Follower)
if check_service 4243 "Base 2 (Follower)"; then
  follower2_status=$(get_service_status 4243)
else
  echo "❌ Base 2 (Follower) bootstrap service is not responding"
  all_services_running=false
fi

# Check Base 3 (Follower)
if check_service 4244 "Base 3 (Follower)"; then
  follower3_status=$(get_service_status 4244)
else
  echo "❌ Base 3 (Follower) bootstrap service is not responding"  
  all_services_running=false
fi

if [ "$all_services_running" = false ]; then
  echo ""
  echo "❌ Not all bootstrap services are running. Please start them first:"
  echo "   ./start-all-bootstrap-services.sh"
  exit 1
fi

echo ""
echo "✅ All bootstrap services are running"

echo ""
echo "📊 Step 2: Service Status - Check service configurations"
echo "======================================================="

echo ""
echo "🎯 Base 1 (Leader) Status:"
echo "$leader_status" | jq '.' 2>/dev/null || echo "$leader_status"

echo ""
echo "🎯 Base 2 (Follower) Status:"
echo "$follower2_status" | jq '.' 2>/dev/null || echo "$follower2_status"

echo ""
echo "🎯 Base 3 (Follower) Status:"
echo "$follower3_status" | jq '.' 2>/dev/null || echo "$follower3_status"

echo ""
echo "📝 Step 3: Log Analysis - Check announcement activity in logs"
echo "==========================================================="

# Check Base 1 (Leader) logs for received announcements
echo ""
echo "🔍 Base 1 (Leader) - Should have RECEIVED announcements:"
check_announcements_in_logs "$BOOTSTRAP_LOGS_DIR/Base1-Leader-bootstrap.log" "Base 1 (Leader)"

# Check Base 2 (Follower) logs for sent announcements  
echo ""
echo "🔍 Base 2 (Follower) - Should have SENT announcements:"
check_announcements_in_logs "$BOOTSTRAP_LOGS_DIR/Base2-Follower-bootstrap.log" "Base 2 (Follower)"

# Check Base 3 (Follower) logs for sent announcements
echo ""
echo "🔍 Base 3 (Follower) - Should have SENT announcements:"
check_announcements_in_logs "$BOOTSTRAP_LOGS_DIR/Base3-Follower-bootstrap.log" "Base 3 (Follower)"

echo ""
echo "📁 Step 4: Announcement Files - Check for received announcement files"
echo "=================================================================="

# Check if leader has received announcement files
echo ""
echo "🔍 Base 1 (Leader) - Checking received announcement files:"
if check_announcement_files 4242 2; then
  echo "✅ Leader has received expected announcements"
  leader_announcements_ok=true
else
  echo "⚠️ Leader announcement reception may be incomplete"
  leader_announcements_ok=false
fi

echo ""
echo "🔬 Step 5: Detailed Verification - Cross-reference announcement data"
echo "=================================================================="

# Try to get more detailed information from the services
echo ""
echo "🔍 Attempting to get detailed announcement information..."

# Function to show recent log entries
show_recent_logs() {
  local log_file=$1
  local service_name=$2
  local lines=${3:-20}
  
  echo ""
  echo "📄 Recent $service_name log entries (last $lines lines):"
  echo "$(printf '%.0s-' {1..50})"
  
  if [ -f "$log_file" ]; then
    tail -$lines "$log_file" | sed 's/^/  /'
  else
    echo "  Log file not found: $log_file"
  fi
  echo "$(printf '%.0s-' {1..50})"
}

# Show recent logs for analysis
show_recent_logs "$BOOTSTRAP_LOGS_DIR/Base1-Leader-bootstrap.log" "Base 1 (Leader)" 15
show_recent_logs "$BOOTSTRAP_LOGS_DIR/Base2-Follower-bootstrap.log" "Base 2 (Follower)" 10  
show_recent_logs "$BOOTSTRAP_LOGS_DIR/Base3-Follower-bootstrap.log" "Base 3 (Follower)" 10

echo ""
echo "📊 Step 6: Final Verification Summary"
echo "===================================="

# Determine overall success
verification_success=true
issues=()

if [ "$all_services_running" = false ]; then
  verification_success=false
  issues+=("Some bootstrap services are not running")
fi

if [ "$leader_announcements_ok" = false ]; then
  verification_success=false
  issues+=("Leader may not have received all expected announcements")  
fi

# Check for any critical errors in logs
for log_file in "$BOOTSTRAP_LOGS_DIR"/*-bootstrap.log; do
  if [ -f "$log_file" ]; then
    critical_errors=$(grep -c "ERROR\|CRITICAL\|FATAL" "$log_file" 2>/dev/null || echo "0")
    if [ "$critical_errors" -gt 0 ]; then
      verification_success=false
      issues+=("Critical errors found in $(basename "$log_file")")
    fi
  fi
done

echo ""
if [ "$verification_success" = true ]; then
  echo "🎉 BOOTSTRAP ANNOUNCEMENT VERIFICATION SUCCESSFUL!"
  echo ""
  echo "✅ All bootstrap services are running properly"
  echo "✅ Followers have announced to leader successfully"
  echo "✅ Leader has received and processed announcements"
  echo "✅ Cross-base discovery architecture is functional"
  echo ""
  echo "🚀 The three-base bootstrap system is ready for ecosystem testing!"
  echo ""
  echo "📋 Verification Summary:"
  echo "  • Base 1 (Leader):   ✅ Running and receiving announcements"
  echo "  • Base 2 (Follower): ✅ Running and announcing to leader"
  echo "  • Base 3 (Follower): ✅ Running and announcing to leader"
  echo "  • Architecture:      ✅ Leader/Follower model working"
  
  exit 0
else
  echo "⚠️ BOOTSTRAP ANNOUNCEMENT VERIFICATION COMPLETED WITH ISSUES"
  echo ""
  echo "❌ Issues found:"
  for issue in "${issues[@]}"; do
    echo "  • $issue"
  done
  echo ""
  echo "🔧 Troubleshooting Steps:"
  echo "  1. Check service logs in: $BOOTSTRAP_LOGS_DIR/"
  echo "  2. Verify service configurations in bootstrap-configs/"
  echo "  3. Restart services: ./stop-all-bootstrap-services.sh && ./start-all-bootstrap-services.sh"
  echo "  4. Wait longer for announcements to complete (30-60 seconds)"
  echo "  5. Check network connectivity between services"
  echo ""
  echo "📝 Manual verification:"
  echo "  • Check logs: tail -f $BOOTSTRAP_LOGS_DIR/*-bootstrap.log"
  echo "  • Test connectivity: curl http://localhost:4242/health"
  echo "  • View status: curl http://localhost:4242/status"
  
  exit 1
fi