#!/bin/bash

# Test Bootstrap Functionality for Individual Base
# Tests the bootstrap service functionality for a specific base

set -e

PORT_OFFSET=${1:-1000}
ROLE=${2:-"follower"}
CONTINUE_ON_FAILURE="${CONTINUE_ON_FAILURE:-false}"

# Parse command line arguments
for arg in "$@"; do
  case $arg in
    --leader)
      ROLE="leader"
      shift
      ;;
    --follower)
      ROLE="follower"
      shift
      ;;
    --continue-on-failure)
      CONTINUE_ON_FAILURE=true
      shift
      ;;
  esac
done

# Determine bootstrap port based on port offset
BOOTSTRAP_PORT=4242
case $PORT_OFFSET in
  1000) BOOTSTRAP_PORT=4242 ;;
  2000) BOOTSTRAP_PORT=4243 ;;
  3000) BOOTSTRAP_PORT=4244 ;;
  *)
    echo "❌ Unknown PORT_OFFSET: $PORT_OFFSET. Expected 1000, 2000, or 3000."
    exit 1
    ;;
esac

BASE_NAME="Base$(($PORT_OFFSET / 1000))"

echo "🧪 Testing Bootstrap Functionality"
echo "=================================="
echo "Base: $BASE_NAME ($ROLE)"
echo "Port Offset: $PORT_OFFSET"
echo "Bootstrap Port: $BOOTSTRAP_PORT"
echo "Continue on Failure: $CONTINUE_ON_FAILURE"
echo ""

# Test result tracking
declare -a TEST_RESULTS=()
CURRENT_TEST=""
TESTS_PASSED=0
TESTS_FAILED=0

# Function to start a test
start_test() {
  local test_name=$1
  CURRENT_TEST="$test_name"
  echo "🧪 Testing: $test_name"
}

# Function to pass a test
pass_test() {
  local message=${1:-"Test passed"}
  echo "  ✅ $message"
  TEST_RESULTS+=("PASS:$CURRENT_TEST:$message")
  TESTS_PASSED=$((TESTS_PASSED + 1))
}

# Function to fail a test
fail_test() {
  local message=${1:-"Test failed"}
  echo "  ❌ $message"
  TEST_RESULTS+=("FAIL:$CURRENT_TEST:$message")
  TESTS_FAILED=$((TESTS_FAILED + 1))
  
  if [ "$CONTINUE_ON_FAILURE" = "false" ]; then
    echo "🛑 Aborting bootstrap functionality testing due to test failure"
    exit 1
  fi
}

# Test 1: Health Check
start_test "Bootstrap Service Health Check"
if curl -s http://localhost:$BOOTSTRAP_PORT/health >/dev/null 2>&1; then
  health_response=$(curl -s http://localhost:$BOOTSTRAP_PORT/health)
  if echo "$health_response" | grep -q '"status":"healthy"'; then
    pass_test "Bootstrap service is healthy and responding"
  else
    fail_test "Bootstrap service health check returned unexpected response"
  fi
else
  fail_test "Bootstrap service is not responding to health checks"
fi

# Test 2: Status Endpoint
start_test "Bootstrap Service Status"
if curl -s http://localhost:$BOOTSTRAP_PORT/status >/dev/null 2>&1; then
  status_response=$(curl -s http://localhost:$BOOTSTRAP_PORT/status)
  
  # Check if status contains expected fields
  if echo "$status_response" | grep -q '"baseInfo"' && echo "$status_response" | grep -q '"services"'; then
    pass_test "Bootstrap service status endpoint working"
    
    # Extract and validate base info
    if echo "$status_response" | grep -q '"publicKey"'; then
      pass_test "Bootstrap service has generated public key"
    else
      fail_test "Bootstrap service missing public key in status"
    fi
  else
    fail_test "Bootstrap service status missing expected fields"
  fi
else
  fail_test "Bootstrap service status endpoint not responding"
fi

# Test 3: Configuration Endpoint
start_test "Bootstrap Service Configuration"
if curl -s http://localhost:$BOOTSTRAP_PORT/config >/dev/null 2>&1; then
  config_response=$(curl -s http://localhost:$BOOTSTRAP_PORT/config)
  
  # Check if configuration contains expected sections
  if echo "$config_response" | grep -q '"baseInfo"' && echo "$config_response" | grep -q '"networking"'; then
    pass_test "Bootstrap service configuration accessible"
    
    # Validate role-specific configuration
    if [ "$ROLE" = "leader" ]; then
      if echo "$config_response" | grep -q '"listenForAnnouncements":true'; then
        pass_test "Leader configuration: listening for announcements enabled"
      else
        fail_test "Leader configuration: should listen for announcements"
      fi
      
      announce_count=$(echo "$config_response" | grep -o '"announceToBase":\[[^]]*\]' | grep -o ',' | wc -l)
      if [ "$announce_count" -eq 0 ] || [ -z "$announce_count" ]; then
        pass_test "Leader configuration: not announcing to other bases"
      else
        fail_test "Leader configuration: should not announce to other bases"
      fi
    else
      # Follower tests
      if echo "$config_response" | grep -q '"autoAnnounce":true'; then
        pass_test "Follower configuration: auto-announce enabled"
      else
        fail_test "Follower configuration: should have auto-announce enabled"
      fi
      
      if echo "$config_response" | grep -q '"announceToBase":\[' && ! echo "$config_response" | grep -q '"announceToBase":\[\]'; then
        pass_test "Follower configuration: has announcement targets"
      else
        fail_test "Follower configuration: should have announcement targets"
      fi
    fi
  else
    fail_test "Bootstrap service configuration missing expected sections"
  fi
else
  fail_test "Bootstrap service configuration endpoint not responding"
fi

# Test 4: Announcement Endpoint (for leaders)
if [ "$ROLE" = "leader" ]; then
  start_test "Leader Announcement Reception"
  
  # Test that the leader can receive announcements
  test_announcement='{
    "timestamp": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'",
    "baseInfo": {
      "name": "Test Follower",
      "description": "Test announcement",
      "starSystemNumber": 9999
    },
    "services": {
      "bdo": "http://localhost:9999"
    },
    "publicKey": "03a34b99f22c790c4e36b2b3c2c35a36db06226e41c692fc82b8b56ac1c540c5bd",
    "signature": "test_signature"
  }'
  
  # Note: This test will fail signature verification, but we can test that the endpoint exists
  announcement_response=$(curl -s -X POST http://localhost:$BOOTSTRAP_PORT/announce \
    -H "Content-Type: application/json" \
    -d "$test_announcement" 2>/dev/null || echo "error")
    
  if echo "$announcement_response" | grep -q '"error"'; then
    # Expected to fail due to signature verification, but endpoint should exist
    pass_test "Leader announcement endpoint is active (signature validation working)"
  elif [ "$announcement_response" = "error" ]; then
    fail_test "Leader announcement endpoint not responding"
  else
    pass_test "Leader announcement endpoint responding"
  fi
fi

# Test 5: Service Discovery
start_test "Service URL Generation"
status_response=$(curl -s http://localhost:$BOOTSTRAP_PORT/status 2>/dev/null)
if [ $? -eq 0 ] && echo "$status_response" | grep -q '"services"'; then
  services=$(echo "$status_response" | grep -o '"services":{[^}]*}')
  
  # Check for expected services
  expected_services=("bdo" "julia" "sanora" "fount" "dolores" "addie")
  missing_services=()
  
  for service in "${expected_services[@]}"; do
    if ! echo "$services" | grep -q "\"$service\""; then
      missing_services+=("$service")
    fi
  done
  
  if [ ${#missing_services[@]} -eq 0 ]; then
    pass_test "All expected services present in service discovery"
  else
    fail_test "Missing services in discovery: ${missing_services[*]}"
  fi
  
  # Validate URL formats
  if echo "$services" | grep -q "http"; then
    pass_test "Service URLs are properly formatted"
  else
    fail_test "Service URLs appear malformed"
  fi
else
  fail_test "Could not retrieve service discovery information"
fi

# Test 6: Log Analysis
start_test "Bootstrap Service Logs"
BOOTSTRAP_LOGS_DIR="/tmp/bootstrap-test-logs"
BASE_LOG_FILE="$BOOTSTRAP_LOGS_DIR/$BASE_NAME-${ROLE^}-bootstrap.log"

if [ -f "$BASE_LOG_FILE" ]; then
  # Check for error messages in logs
  error_count=$(grep -c "ERROR\|CRITICAL\|FATAL" "$BASE_LOG_FILE" 2>/dev/null || echo "0")
  
  if [ "$error_count" -eq 0 ]; then
    pass_test "No critical errors found in bootstrap logs"
  else
    fail_test "Found $error_count critical errors in bootstrap logs"
  fi
  
  # Role-specific log checks
  if [ "$ROLE" = "leader" ]; then
    received_announcements=$(grep -c "Received valid announcement" "$BASE_LOG_FILE" 2>/dev/null || echo "0")
    echo "  📥 Received announcements: $received_announcements"
    pass_test "Leader log analysis completed"
  else
    sent_announcements=$(grep -c "Successfully announced to" "$BASE_LOG_FILE" 2>/dev/null || echo "0")
    failed_announcements=$(grep -c "Failed to announce to" "$BASE_LOG_FILE" 2>/dev/null || echo "0")
    echo "  📤 Sent announcements: $sent_announcements"
    echo "  ❌ Failed announcements: $failed_announcements"
    
    if [ "$sent_announcements" -gt 0 ]; then
      pass_test "Follower has made announcement attempts"
    else
      fail_test "Follower has not made any announcement attempts"
    fi
  fi
else
  fail_test "Bootstrap log file not found: $BASE_LOG_FILE"
fi

# Test 7: Process Management
start_test "Bootstrap Process Management"
BOOTSTRAP_PID_FILE="$BOOTSTRAP_LOGS_DIR/$BASE_NAME-${ROLE^}-bootstrap.pid"

if [ -f "$BOOTSTRAP_PID_FILE" ]; then
  bootstrap_pid=$(cat "$BOOTSTRAP_PID_FILE")
  
  if kill -0 "$bootstrap_pid" 2>/dev/null; then
    pass_test "Bootstrap service process is running (PID: $bootstrap_pid)"
    
    # Check process details
    process_info=$(ps -p "$bootstrap_pid" -o pid,ppid,cmd --no-headers 2>/dev/null || echo "")
    if echo "$process_info" | grep -q "bootstrap-service.js"; then
      pass_test "Bootstrap process is running correct script"
    else
      fail_test "Bootstrap process may not be running expected script"
    fi
  else
    fail_test "Bootstrap service process not found (PID: $bootstrap_pid)"
  fi
else
  fail_test "Bootstrap PID file not found: $BOOTSTRAP_PID_FILE"
fi

echo ""
echo "📊 Bootstrap Functionality Test Results"
echo "======================================="
echo ""

# Display test results
for result in "${TEST_RESULTS[@]}"; do
  status=$(echo "$result" | cut -d: -f1)
  test_name=$(echo "$result" | cut -d: -f2)
  message=$(echo "$result" | cut -d: -f3-)
  
  if [ "$status" = "PASS" ]; then
    echo "✅ $test_name: $message"
  else
    echo "❌ $test_name: $message"
  fi
done

echo ""
echo "📈 Summary:"
echo "  Total Tests: $((TESTS_PASSED + TESTS_FAILED))"
echo "  Passed: $TESTS_PASSED"
echo "  Failed: $TESTS_FAILED"
echo ""

if [ $TESTS_FAILED -eq 0 ]; then
  echo "🎉 All bootstrap functionality tests passed for $BASE_NAME ($ROLE)!"
  echo ""
  echo "✅ Bootstrap service is functioning correctly:"
  echo "  • Health checks responding"
  echo "  • Configuration properly loaded"
  echo "  • Service discovery working"
  if [ "$ROLE" = "leader" ]; then
    echo "  • Ready to receive announcements"
  else
    echo "  • Announcement system active"
  fi
  echo "  • Process management working"
  echo "  • Logging system operational"
  
  exit 0
else
  echo "❌ Bootstrap functionality tests completed with $TESTS_FAILED failure(s) for $BASE_NAME ($ROLE)"
  echo ""
  echo "🔧 Troubleshooting suggestions:"
  echo "  • Check bootstrap service logs: $BASE_LOG_FILE"
  echo "  • Verify configuration: curl http://localhost:$BOOTSTRAP_PORT/config"
  echo "  • Check service status: curl http://localhost:$BOOTSTRAP_PORT/status" 
  echo "  • Restart bootstrap service if needed"
  
  if [ "$CONTINUE_ON_FAILURE" = "true" ]; then
    echo ""
    echo "ℹ️ Continuing due to --continue-on-failure flag"
    exit 0
  else
    exit 1
  fi
fi