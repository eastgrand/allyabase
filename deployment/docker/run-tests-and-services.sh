#!/bin/bash

# Main script that starts services and runs tests
# Usage: ./run-tests-and-services.sh [--test-only] [--services-only]
# Environment variables:
#   PORT_OFFSET: Port offset (1000, 2000, 3000)
#   CONTINUE_ON_FAILURE: Continue testing despite failures (true/false)
#   RUN_MODE: "services", "tests", or "both" (default: "both")

set -e

PORT_OFFSET=${PORT_OFFSET:-0}
CONTINUE_ON_FAILURE=${CONTINUE_ON_FAILURE:-false}
RUN_MODE=${RUN_MODE:-both}

# Parse command line arguments
for arg in "$@"; do
  case $arg in
    --test-only)
      RUN_MODE="tests"
      shift
      ;;
    --services-only)
      RUN_MODE="services"
      shift
      ;;
    --both)
      RUN_MODE="both"
      shift
      ;;
  esac
done

echo "🚀 Planet Nine Allyabase - Docker Test Runner"
echo "============================================="
echo "PORT_OFFSET: $PORT_OFFSET"
echo "CONTINUE_ON_FAILURE: $CONTINUE_ON_FAILURE"
echo "RUN_MODE: $RUN_MODE"
echo ""

# Function to start services
start_services() {
  echo "🏗️  Starting allyabase services..."
  ./start-with-ports.sh $PORT_OFFSET &
  
  # Wait for services to be ready
  sleep 10
  
  # Calculate key service ports for health checking
  local bdo_port=$((3003 + PORT_OFFSET))
  local fount_port=$((3006 + PORT_OFFSET))
  local julia_port=$((3000 + PORT_OFFSET))
  
  echo "⏳ Waiting for key services to be ready..."
  
  # Wait for BDO service
  for i in {1..30}; do
    if nc -z localhost $bdo_port 2>/dev/null; then
      echo "✅ BDO service ready on port $bdo_port"
      break
    fi
    if [ $i -eq 30 ]; then
      echo "❌ BDO service failed to start on port $bdo_port"
      exit 1
    fi
    sleep 2
  done
  
  # Wait for Fount service
  for i in {1..30}; do
    if nc -z localhost $fount_port 2>/dev/null; then
      echo "✅ Fount service ready on port $fount_port"
      break
    fi
    if [ $i -eq 30 ]; then
      echo "❌ Fount service failed to start on port $fount_port"
      exit 1
    fi
    sleep 2
  done
  
  # Wait for Julia service
  for i in {1..30}; do
    if nc -z localhost $julia_port 2>/dev/null; then
      echo "✅ Julia service ready on port $julia_port"
      break
    fi
    if [ $i -eq 30 ]; then
      echo "❌ Julia service failed to start on port $julia_port"
      exit 1
    fi
    sleep 2
  done
  
  echo "✅ Core services are ready"
}

# Function to run tests
run_tests() {
  echo "🧪 Running service tests..."
  
  # Export environment variables for testing
  export CONTINUE_ON_FAILURE
  export PORT_OFFSET
  
  if [ "$CONTINUE_ON_FAILURE" = "true" ]; then
    ./test-all-services.sh $PORT_OFFSET --continue-on-failure
  else
    ./test-all-services.sh $PORT_OFFSET
  fi
}

# Execute based on run mode
case $RUN_MODE in
  "services")
    echo "🏗️  Services-only mode"
    start_services
    echo "✅ Services started. Container will keep running..."
    
    # Keep container alive
    while true; do
      sleep 60
    done
    ;;
    
  "tests")
    echo "🧪 Tests-only mode (assumes services are already running)"
    run_tests
    ;;
    
  "both")
    echo "🔄 Both services and tests mode"
    
    # Start services in background
    start_services
    
    # Wait a bit more for all services to be fully ready
    echo "⏳ Waiting for all services to stabilize..."
    sleep 15
    
    # Run tests
    run_tests
    
    echo "✅ Services and tests completed successfully!"
    
    # Optionally keep services running after tests
    if [ "${KEEP_SERVICES_RUNNING:-false}" = "true" ]; then
      echo "🏃 Keeping services running (KEEP_SERVICES_RUNNING=true)..."
      while true; do
        sleep 60
      done
    fi
    ;;
    
  *)
    echo "❌ Unknown run mode: $RUN_MODE"
    echo "Valid modes: services, tests, both"
    exit 1
    ;;
esac