#!/bin/bash

# Comprehensive script to spin up 3 allyabase instances for ecosystem testing
# Usage: ./spin-up-bases-corrected.sh [--clean] [--build]

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
  local timeout=${3:-30}
  
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
  local base_ports=("${@:2}")
  
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

# Start Base 1 (Host ports 5111-5122 → Standard Docker internal ports)
echo "🏗️  Starting Base 1 (Host ports 5111-5122)..."
docker run -d \
  --name allyabase-base1 \
  -p 5111:3000 \
  -p 5112:2999 \
  -p 5113:3002 \
  -p 5114:3003 \
  -p 5115:3004 \
  -p 5116:3005 \
  -p 5117:3006 \
  -p 5118:3007 \
  -p 5119:2525 \
  -p 5120:7277 \
  -p 5121:7243 \
  -p 5122:3011 \
  allyabase-flexible

# Wait for Base 1 services (check host ports)
BASE1_PORTS=(5111 5112 5113 5114 5115 5116 5117 5118 5119 5120 5121 5122)
if ! wait_for_base "Base 1" "${BASE1_PORTS[@]}"; then
  echo "❌ Base 1 startup failed"
  exit 1
fi

echo "✅ Base 1 started successfully!"
echo ""

# Start Base 2 (Host ports 5211-5222 → Standard Docker internal ports)
echo "🏗️  Starting Base 2 (Host ports 5211-5222)..."
docker run -d \
  --name allyabase-base2 \
  -p 5211:3000 \
  -p 5212:2999 \
  -p 5213:3002 \
  -p 5214:3003 \
  -p 5215:3004 \
  -p 5216:3005 \
  -p 5217:3006 \
  -p 5218:3007 \
  -p 5219:2525 \
  -p 5220:7277 \
  -p 5221:7243 \
  -p 5222:3011 \
  allyabase-flexible

# Wait for Base 2 services (check host ports)
BASE2_PORTS=(5211 5212 5213 5214 5215 5216 5217 5218 5219 5220 5221 5222)
if ! wait_for_base "Base 2" "${BASE2_PORTS[@]}"; then
  echo "❌ Base 2 startup failed"
  exit 1
fi

echo "✅ Base 2 started successfully!"
echo ""

# Start Base 3 (Host ports 5311-5322 → Standard Docker internal ports)
echo "🏗️  Starting Base 3 (Host ports 5311-5322)..."
docker run -d \
  --name allyabase-base3 \
  -p 5311:3000 \
  -p 5312:2999 \
  -p 5313:3002 \
  -p 5314:3003 \
  -p 5315:3004 \
  -p 5316:3005 \
  -p 5317:3006 \
  -p 5318:3007 \
  -p 5319:2525 \
  -p 5320:7277 \
  -p 5321:7243 \
  -p 5322:3011 \
  allyabase-flexible

# Wait for Base 3 services (check host ports)
BASE3_PORTS=(5311 5312 5313 5314 5315 5316 5317 5318 5319 5320 5321 5322)
if ! wait_for_base "Base 3" "${BASE3_PORTS[@]}"; then
  echo "❌ Base 3 startup failed"
  exit 1
fi

echo "✅ Base 3 started successfully!"
echo ""

# Final status report
echo "🎉 All 3 allyabase instances are running!"
echo ""
echo "📋 Service Port Mapping (Host → Docker):"
echo ""
echo "Base 1:"
echo "  julia: http://localhost:5111 → docker:3000"
echo "  continuebee: http://localhost:5112 → docker:2999" 
echo "  pref: http://localhost:5113 → docker:3002"
echo "  bdo: http://localhost:5114 → docker:3003"
echo "  joan: http://localhost:5115 → docker:3004"
echo "  addie: http://localhost:5116 → docker:3005"
echo "  fount: http://localhost:5117 → docker:3006"
echo "  dolores: http://localhost:5118 → docker:3007"
echo "  minnie: http://localhost:5119 → docker:2525"
echo "  aretha: http://localhost:5120 → docker:7277"
echo "  sanora: http://localhost:5121 → docker:7243"
echo "  covenant: http://localhost:5122 → docker:3011"
echo ""
echo "Base 2:"
echo "  julia: http://localhost:5211 → docker:3000"
echo "  continuebee: http://localhost:5212 → docker:2999"
echo "  pref: http://localhost:5213 → docker:3002"
echo "  bdo: http://localhost:5214 → docker:3003"
echo "  joan: http://localhost:5215 → docker:3004"
echo "  addie: http://localhost:5216 → docker:3005"
echo "  fount: http://localhost:5217 → docker:3006"
echo "  dolores: http://localhost:5218 → docker:3007"
echo "  minnie: http://localhost:5219 → docker:2525"
echo "  aretha: http://localhost:5220 → docker:7277"
echo "  sanora: http://localhost:5221 → docker:7243"
echo "  covenant: http://localhost:5222 → docker:3011"
echo ""
echo "Base 3:"
echo "  julia: http://localhost:5311 → docker:3000"
echo "  continuebee: http://localhost:5312 → docker:2999"
echo "  pref: http://localhost:5313 → docker:3002"
echo "  bdo: http://localhost:5314 → docker:3003"
echo "  joan: http://localhost:5315 → docker:3004"
echo "  addie: http://localhost:5316 → docker:3005"
echo "  fount: http://localhost:5317 → docker:3006"
echo "  dolores: http://localhost:5318 → docker:3007"
echo "  minnie: http://localhost:5319 → docker:2525"
echo "  aretha: http://localhost:5320 → docker:7277"
echo "  sanora: http://localhost:5321 → docker:7243"
echo "  covenant: http://localhost:5322 → docker:3011"
echo ""
echo "🛠️  Management Commands:"
echo "  View logs: docker logs <container-name>"
echo "  Stop all: docker stop allyabase-base1 allyabase-base2 allyabase-base3"
echo "  Remove all: docker rm allyabase-base1 allyabase-base2 allyabase-base3"
echo "  Restart: ./spin-up-bases-corrected.sh --clean --build"