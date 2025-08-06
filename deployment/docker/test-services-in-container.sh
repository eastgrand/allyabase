#!/bin/bash

# Test services inside running Docker containers
# Usage: ./test-services-in-container.sh [PORT_OFFSET] [--continue-on-failure]

set -e

PORT_OFFSET=${1:-1000}
CONTINUE_ON_FAILURE=${CONTINUE_ON_FAILURE:-false}

# Parse command line arguments
for arg in "$@"; do
  case $arg in
    --continue-on-failure)
      CONTINUE_ON_FAILURE=true
      shift
      ;;
    [0-9]*)
      PORT_OFFSET=$arg
      shift
      ;;
  esac
done

echo "🧪 Testing Services Inside Docker Container"
echo "==========================================="
echo "PORT_OFFSET: $PORT_OFFSET"
echo "CONTINUE_ON_FAILURE: $CONTINUE_ON_FAILURE"
echo ""

# Determine container name based on PORT_OFFSET
case $PORT_OFFSET in
  1000)
    CONTAINER_NAME="allyabase-base1"
    ;;
  2000)
    CONTAINER_NAME="allyabase-base2"
    ;;
  3000)
    CONTAINER_NAME="allyabase-base3"
    ;;
  *)
    echo "❌ Unknown PORT_OFFSET: $PORT_OFFSET. Expected 1000, 2000, or 3000."
    exit 1
    ;;
esac

echo "Testing services in container: $CONTAINER_NAME"
echo ""

# Check if container is running
if ! docker ps --format 'table {{.Names}}' | grep -q "^$CONTAINER_NAME$"; then
  echo "❌ Container $CONTAINER_NAME is not running"
  echo "   Please start containers first with: ./spin-up-bases-corrected.sh"
  exit 1
fi

# No global setup needed - each service handles its own test dependencies
echo ""

# Function to run test inside container
run_container_test() {
  local service=$1
  local test_path=$2
  local base_url=$3
  
  echo "🧪 Testing $service..."
  echo "  Container: $CONTAINER_NAME"
  echo "  Test path: $test_path"
  echo "  Base URL: $base_url"
  
  # Create a test script inside the container
  local test_script="/tmp/test_${service}.sh"
  
  docker exec $CONTAINER_NAME bash -c "cat > $test_script << 'EOF'
#!/bin/bash
export BASE_URL=\"$base_url\"
export SERVICE_NAME=\"$service\"

# Extract service directory from test path
SERVICE_DIR=\$(dirname \$(dirname \"$test_path\"))
TEST_DIR=\$(dirname \"$test_path\")

echo \"Service directory: \$SERVICE_DIR\"
echo \"Test directory: \$TEST_DIR\"

# Check if test file exists
if [ ! -f \"$test_path\" ]; then
  echo \"❌ Test file not found: $test_path\"
  exit 1
fi

# Install test dependencies in the service's test directory
cd \$TEST_DIR
if [ -f \"package.json\" ]; then
  echo \"📦 Installing test dependencies from \$TEST_DIR/package.json...\"
  npm install || {
    echo \"❌ Failed to install test dependencies in \$TEST_DIR\"
    exit 1
  }
  echo \"✅ Test dependencies installed successfully\"
elif [ ! -d \"node_modules\" ]; then
  echo \"📦 Installing common test dependencies in \$TEST_DIR...\"
  npm install --no-save chai mocha supertest || {
    echo \"❌ Failed to install test dependencies in \$TEST_DIR\"  
    exit 1
  }
  echo \"✅ Test dependencies installed successfully\"
else
  echo \"✅ Test dependencies already available\"
fi

# Run the test from the test directory
echo \"Running: npx mocha $test_path\"
npx mocha \"$test_path\"
EOF"

  # Make script executable and run it
  docker exec $CONTAINER_NAME chmod +x $test_script
  local test_result=0
  docker exec $CONTAINER_NAME bash $test_script || test_result=$?
  
  # Clean up test script
  docker exec $CONTAINER_NAME rm -f $test_script
  
  if [ $test_result -eq 0 ]; then
    echo "✅ $service tests passed"
    return 0
  else
    echo "❌ $service tests failed (exit code: $test_result)"
    return $test_result
  fi
}

# Override exit on error if continue-on-failure is enabled
if [ "$CONTINUE_ON_FAILURE" = "true" ]; then
  set +e
fi

# Track test results
declare -a FAILED_TESTS=()
TOTAL_TESTS=0
PASSED_TESTS=0

# Test each service
services=(
  "addie:/usr/src/app/addie/test/mocha/server.js"
  "aretha:/usr/src/app/aretha/test/mocha/server.js"
  "bdo:/usr/src/app/bdo/test/mocha/server.js"
  "continuebee:/usr/src/app/continuebee/test/mocha/server.js"
  "dolores:/usr/src/app/dolores/test/mocha/server.js"
  "fount:/usr/src/app/fount/test/mocha/server.js"
  "joan:/usr/src/app/joan/test/mocha/server.js"
  "julia:/usr/src/app/julia/test/mocha/server.js"
  "pref:/usr/src/app/pref/test/mocha/server.js"
  "sanora:/usr/src/app/sanora/test/mocha/server.js"
)

for service_info in "${services[@]}"; do
  service_name="${service_info%%:*}"
  test_path="${service_info##*:}"
  
  # Calculate base URL using internal Docker ports (not host-mapped ports)
  # Inside Docker containers, services listen on their original ports + PORT_OFFSET
  case $service_name in
    "julia")
      internal_port=$((3000 + PORT_OFFSET))
      base_url="http://127.0.0.1:$internal_port/"
      ;;
    "continuebee")
      internal_port=$((2999 + PORT_OFFSET))
      base_url="http://127.0.0.1:$internal_port/"
      ;;
    "pref")
      internal_port=$((3002 + PORT_OFFSET))
      base_url="http://127.0.0.1:$internal_port/"
      ;;
    "bdo")
      internal_port=$((3003 + PORT_OFFSET))
      base_url="http://127.0.0.1:$internal_port/"
      ;;
    "joan")
      internal_port=$((3004 + PORT_OFFSET))
      base_url="http://127.0.0.1:$internal_port/"
      ;;
    "addie")
      internal_port=$((3005 + PORT_OFFSET))
      base_url="http://127.0.0.1:$internal_port/"
      ;;
    "fount")
      internal_port=$((3006 + PORT_OFFSET))
      base_url="http://127.0.0.1:$internal_port/"
      ;;
    "dolores")
      internal_port=$((3007 + PORT_OFFSET))
      base_url="http://127.0.0.1:$internal_port/"
      ;;
    "aretha")
      internal_port=$((7277 + PORT_OFFSET))
      base_url="http://127.0.0.1:$internal_port/"
      ;;
    "sanora")
      internal_port=$((7243 + PORT_OFFSET))
      base_url="http://127.0.0.1:$internal_port/"
      ;;
  esac
  
  TOTAL_TESTS=$((TOTAL_TESTS + 1))
  
  if run_container_test "$service_name" "$test_path" "$base_url"; then
    PASSED_TESTS=$((PASSED_TESTS + 1))
  else
    FAILED_TESTS+=("$service_name")
    
    if [ "$CONTINUE_ON_FAILURE" = "false" ]; then
      echo "🛑 Aborting due to test failure. Use --continue-on-failure to override."
      exit 1
    fi
  fi
  
  echo ""
done

# Final results
echo "📊 Service Test Results"
echo "======================"
echo "Container: $CONTAINER_NAME (PORT_OFFSET=$PORT_OFFSET)"
echo "Total tests: $TOTAL_TESTS" 
echo "Passed: $PASSED_TESTS"
echo "Failed: ${#FAILED_TESTS[@]}"

if [ ${#FAILED_TESTS[@]} -gt 0 ]; then
  echo ""
  echo "❌ Failed services: ${FAILED_TESTS[*]}"
  
  if [ "$CONTINUE_ON_FAILURE" = "true" ]; then
    echo "⚠️  Some tests failed, but completed due to --continue-on-failure"
    exit 0
  else
    exit 1
  fi
else
  echo ""
  echo "🎉 All service tests passed!"
  exit 0
fi