#!/bin/bash

# Comprehensive script to test all three bases with integrated service+test containers
# Usage: ./test-all-bases.sh [--continue-on-failure] [--keep-running] [--build]

set -e

CONTINUE_ON_FAILURE=false
KEEP_RUNNING=false
BUILD_IMAGE=false

# Parse command line arguments
for arg in "$@"; do
  case $arg in
    --continue-on-failure)
      CONTINUE_ON_FAILURE=true
      shift
      ;;
    --keep-running)
      KEEP_RUNNING=true
      shift
      ;;
    --build)
      BUILD_IMAGE=true
      shift
      ;;
    *)
      echo "Unknown option: $arg"
      echo "Usage: $0 [--continue-on-failure] [--keep-running] [--build]"
      exit 1
      ;;
  esac
done

echo "🚀 Planet Nine Ecosystem - Complete Base Testing"
echo "==============================================="
echo "CONTINUE_ON_FAILURE: $CONTINUE_ON_FAILURE"
echo "KEEP_RUNNING: $KEEP_RUNNING"
echo "BUILD_IMAGE: $BUILD_IMAGE"
echo ""

# Clean up any existing test containers
echo "🧹 Cleaning up existing containers..."
for container in test-base1 test-base2 test-base3; do
  if docker ps -a --format '{{.Names}}' | grep -q "^$container$"; then
    docker stop $container >/dev/null 2>&1 || true
    docker rm $container >/dev/null 2>&1 || true
  fi
done

# Build image if requested
if [ "$BUILD_IMAGE" = "true" ]; then
  echo "🔨 Building test image..."
  ./build-with-tests.sh
  echo ""
fi

# Function to test a base
test_base() {
  local base_num=$1
  local port_offset=$2
  local container_name="test-base$base_num"
  
  echo "🧪 Testing Base $base_num (PORT_OFFSET=$port_offset)..."
  
  # Set environment variables
  local env_vars=(
    "-e PORT_OFFSET=$port_offset"
    "-e RUN_MODE=both"
    "-e CONTINUE_ON_FAILURE=$CONTINUE_ON_FAILURE"
  )
  
  if [ "$KEEP_RUNNING" = "true" ]; then
    env_vars+=("-e KEEP_SERVICES_RUNNING=true")
  fi
  
  # Run the container
  local run_cmd="docker run --name $container_name ${env_vars[*]}"
  
  if [ "$KEEP_RUNNING" = "true" ]; then
    # Run in detached mode and expose ports for external access
    # Internal Docker ports stay the same, but host ports start at 5111 to avoid conflicts
    case $base_num in
      1)
        # Base 1: Host ports 5111-5124 → Docker ports 3000-3011, 2999, 2525, 7277, 7243
        run_cmd="$run_cmd -d -p 5111:3000 -p 5112:2999 -p 5113:3002 -p 5114:3003 -p 5115:3004 -p 5116:3005 -p 5117:3006 -p 5118:3007 -p 5119:2525 -p 5120:7277 -p 5121:7243 -p 5122:3011"
        ;;
      2)
        # Base 2: Host ports 5211-5224 → Docker ports 3000-3011, 2999, 2525, 7277, 7243 (with +1000 offset inside Docker)
        run_cmd="$run_cmd -d -p 5211:4000 -p 5212:3999 -p 5213:4002 -p 5214:4003 -p 5215:4004 -p 5216:4005 -p 5217:4006 -p 5218:4007 -p 5219:3525 -p 5220:8277 -p 5221:8243 -p 5222:4011"
        ;;
      3)
        # Base 3: Host ports 5311-5324 → Docker ports 3000-3011, 2999, 2525, 7277, 7243 (with +2000 offset inside Docker)
        run_cmd="$run_cmd -d -p 5311:5000 -p 5312:4999 -p 5313:5002 -p 5314:5003 -p 5315:5004 -p 5316:5005 -p 5317:5006 -p 5318:5007 -p 5319:4525 -p 5320:9277 -p 5321:9243 -p 5322:5011"
        ;;
    esac
  fi
  
  run_cmd="$run_cmd allyabase-with-tests"
  
  echo "  Running: $run_cmd"
  local test_result=0
  eval $run_cmd || test_result=$?
  
  if [ $test_result -eq 0 ]; then
    echo "  ✅ Base $base_num tests passed"
    return 0
  else
    echo "  ❌ Base $base_num tests failed (exit code: $test_result)"
    
    # Show container logs on failure
    echo "  📋 Container logs:"
    docker logs $container_name | tail -20
    
    if [ "$CONTINUE_ON_FAILURE" = "false" ]; then
      echo "  🛑 Aborting due to Base $base_num failure"
      exit $test_result
    else
      echo "  ⏭️  Continuing despite failure..."
      return $test_result
    fi
  fi
}

# Test all three bases sequentially
declare -a FAILED_BASES=()

echo "🏁 Starting sequential base testing..."
echo ""

# Test Base 1 (PORT_OFFSET=1000)
if ! test_base 1 1000; then
  FAILED_BASES+=(1)
fi
echo ""

# Test Base 2 (PORT_OFFSET=2000) 
if ! test_base 2 2000; then
  FAILED_BASES+=(2)
fi
echo ""

# Test Base 3 (PORT_OFFSET=3000)
if ! test_base 3 3000; then
  FAILED_BASES+=(3)
fi
echo ""

# Final results
echo "📊 Final Test Results"
echo "===================="

if [ ${#FAILED_BASES[@]} -eq 0 ]; then
  echo "🎉 All 3 bases passed their tests!"
  
  if [ "$KEEP_RUNNING" = "true" ]; then
    echo ""
    echo "🏃 All bases are still running with services exposed:"
    echo "  Base 1: julia(:5111), continuebee(:5112), pref(:5113), bdo(:5114), joan(:5115), addie(:5116), fount(:5117), dolores(:5118), minnie(:5119), aretha(:5120), sanora(:5121), covenant(:5122)"
    echo "  Base 2: julia(:5211), continuebee(:5212), pref(:5213), bdo(:5214), joan(:5215), addie(:5216), fount(:5217), dolores(:5218), minnie(:5219), aretha(:5220), sanora(:5221), covenant(:5222)"
    echo "  Base 3: julia(:5311), continuebee(:5312), pref(:5313), bdo(:5314), joan(:5315), addie(:5316), fount(:5317), dolores(:5318), minnie(:5319), aretha(:5320), sanora(:5321), covenant(:5322)"
    echo ""
    echo "Stop all: docker stop test-base1 test-base2 test-base3"
    echo "Remove all: docker rm test-base1 test-base2 test-base3"
  fi
  
  exit 0
else
  echo "❌ Failed bases: ${FAILED_BASES[*]}"
  
  if [ "$CONTINUE_ON_FAILURE" = "true" ]; then
    echo "⚠️  Some bases failed, but completed testing due to --continue-on-failure"
    exit 0
  else
    echo "🛑 Testing aborted due to failures"
    exit 1
  fi
fi