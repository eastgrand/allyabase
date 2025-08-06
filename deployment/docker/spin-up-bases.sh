#!/bin/bash

# Comprehensive script to spin up 3 allyabase instances for ecosystem testing
# Usage: ./spin-up-bases.sh [--clean] [--build]
# Options:
#   --clean: Stop and remove existing containers before starting
#   --build: Rebuild the Docker image before starting containers

set -e  # Exit on any error

CLEAN=false
BUILD=false

# Parse command line arguments
for arg in "$@"; do
  case $arg in
    --clean)
      CLEAN=true
      shift
      ;;
    --build)
      BUILD=true
      shift
      ;;
    *)
      echo "Unknown option: $arg"
      echo "Usage: $0 [--clean] [--build]"
      exit 1
      ;;
  esac
done

echo "🚀 Planet Nine Ecosystem - Base Startup Script"
echo "============================================="
echo ""

# Clean up existing containers if requested
if [ "$CLEAN" = true ]; then
  echo "🧹 Cleaning up existing containers..."
  
  # Stop and remove containers if they exist
  for base in allyabase-base1 allyabase-base2 allyabase-base3; do
    if docker ps -a --format 'table {{.Names}}' | grep -q "^$base$"; then
      echo "  Stopping and removing $base..."
      docker stop $base >/dev/null 2>&1 || true
      docker rm $base >/dev/null 2>&1 || true
    fi
  done
  
  echo "✅ Cleanup completed"
  echo ""
fi

# Build Docker image if requested
if [ "$BUILD" = true ]; then
  echo "🔨 Building flexible allyabase Docker image..."
  docker build -f Dockerfile-flexible -t allyabase-flexible .
  echo "✅ Docker image built successfully"
  echo ""
fi

# Function to check if a port is responding
check_port() {
  local host=$1
  local port=$2
  local timeout=${3:-30}  # Default 30 second timeout
  
  for i in $(seq 1 $timeout); do
    if nc -z $host $port 2>/dev/null; then
      return 0
    fi
    sleep 1
  done
  return 1
}

# Function to wait for all services in a base to be ready
wait_for_base() {
  local base_name=$1
  local base_ports=("${@:2}")  # All remaining arguments are ports
  
  echo "  ⏳ Waiting for $base_name services to be ready..."
  
  for port in "${base_ports[@]}"; do
    if ! check_port localhost $port 60; then
      echo "  ❌ $base_name service on port $port failed to start"
      return 1
    fi
  done
  
  echo "  ✅ All $base_name services are ready"
  return 0
}

# Start Base 1 (40xx ports)
echo "🏗️  Starting Base 1 (40xx ports)..."
docker run -d \
  --name allyabase-base1 \
  -e PORT_OFFSET=1000 \
  -p 4000:4000 \
  -p 3999:3999 \
  -p 4002:4002 \
  -p 4003:4003 \
  -p 4004:4004 \
  -p 4005:4005 \
  -p 4006:4006 \
  -p 4007:4007 \
  -p 4011:4011 \
  -p 3525:3525 \
  -p 8277:8277 \
  -p 8243:8243 \
  allyabase-flexible

BASE1_PORTS=(4000 3999 4002 4003 4004 4005 4006 4007 4011 3525 8277 8243)
if ! wait_for_base "Base 1" "${BASE1_PORTS[@]}"; then
  echo "❌ Base 1 startup failed"
  exit 1
fi

echo "✅ Base 1 started successfully!"
echo ""

# Start Base 2 (50xx ports) 
echo "🏗️  Starting Base 2 (50xx ports)..."
docker run -d \
  --name allyabase-base2 \
  -e PORT_OFFSET=2000 \
  -p 5000:5000 \
  -p 4999:4999 \
  -p 5002:5002 \
  -p 5003:5003 \
  -p 5004:5004 \
  -p 5005:5005 \
  -p 5006:5006 \
  -p 5007:5007 \
  -p 5011:5011 \
  -p 4525:4525 \
  -p 9277:9277 \
  -p 9243:9243 \
  allyabase-flexible

BASE2_PORTS=(5000 4999 5002 5003 5004 5005 5006 5007 5011 4525 9277 9243)
if ! wait_for_base "Base 2" "${BASE2_PORTS[@]}"; then
  echo "❌ Base 2 startup failed"
  exit 1
fi

echo "✅ Base 2 started successfully!"
echo ""

# Start Base 3 (60xx ports)
echo "🏗️  Starting Base 3 (60xx ports)..."
docker run -d \
  --name allyabase-base3 \
  -e PORT_OFFSET=3000 \
  -p 6000:6000 \
  -p 5999:5999 \
  -p 6002:6002 \
  -p 6003:6003 \
  -p 6004:6004 \
  -p 6005:6005 \
  -p 6006:6006 \
  -p 6007:6007 \
  -p 6011:6011 \
  -p 5525:5525 \
  -p 10277:10277 \
  -p 10243:10243 \
  allyabase-flexible

BASE3_PORTS=(6000 5999 6002 6003 6004 6005 6006 6007 6011 5525 10277 10243)
if ! wait_for_base "Base 3" "${BASE3_PORTS[@]}"; then
  echo "❌ Base 3 startup failed"
  exit 1
fi

echo "✅ Base 3 started successfully!"
echo ""

# Final status report
echo "🎉 All 3 allyabase instances are running!"
echo ""
echo "📋 Service URLs:"
echo ""
echo "Base 1 (40xx):"
echo "  julia: http://localhost:4000"
echo "  continuebee: http://localhost:3999"
echo "  pref: http://localhost:4002"
echo "  bdo: http://localhost:4003"
echo "  joan: http://localhost:4004"
echo "  addie: http://localhost:4005"
echo "  fount: http://localhost:4006"
echo "  dolores: http://localhost:4007"
echo "  covenant: http://localhost:4011"
echo "  minnie: http://localhost:3525"
echo "  aretha: http://localhost:8277"
echo "  sanora: http://localhost:8243"
echo ""
echo "Base 2 (50xx):"
echo "  julia: http://localhost:5000"
echo "  continuebee: http://localhost:4999"
echo "  pref: http://localhost:5002"
echo "  bdo: http://localhost:5003"
echo "  joan: http://localhost:5004"
echo "  addie: http://localhost:5005"
echo "  fount: http://localhost:5006"
echo "  dolores: http://localhost:5007"
echo "  covenant: http://localhost:5011"
echo "  minnie: http://localhost:4525"
echo "  aretha: http://localhost:9277"
echo "  sanora: http://localhost:9243"
echo ""
echo "Base 3 (60xx):"
echo "  julia: http://localhost:6000"
echo "  continuebee: http://localhost:5999"
echo "  pref: http://localhost:6002"
echo "  bdo: http://localhost:6003"
echo "  joan: http://localhost:6004"
echo "  addie: http://localhost:6005"
echo "  fount: http://localhost:6006"
echo "  dolores: http://localhost:6007"
echo "  covenant: http://localhost:6011"
echo "  minnie: http://localhost:5525"
echo "  aretha: http://localhost:10277"
echo "  sanora: http://localhost:10243"
echo ""
echo "🛠️  Management Commands:"
echo "  View logs: docker logs <container-name>"
echo "  Stop all: docker stop allyabase-base1 allyabase-base2 allyabase-base3"
echo "  Remove all: docker rm allyabase-base1 allyabase-base2 allyabase-base3"
echo "  Restart: ./spin-up-bases.sh --clean --build"