#!/bin/bash

# Comprehensive script to spin up 3 allyabase instances for ecosystem testing
# Usage: ./spin-up-bases.sh [--clean] [--build] [--env=local|test] [--seed] [--seed-base=1|2|3]

set -e  # Exit on any error

CLEAN=false
BUILD=false
ENVIRONMENT="test"
SEED=false
SEED_BASE="1"
ENABLE_PROF=false
ENABLE_ADVANCEMENT=false

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
    --env=*)
      ENVIRONMENT="${arg#*=}"
      shift
      ;;
    --seed)
      SEED=true
      shift
      ;;
    --seed-base=*)
      SEED_BASE="${arg#*=}"
      shift
      ;;
    --enable-prof)
      ENABLE_PROF=true
      shift
      ;;
    --enable-advancement)
      ENABLE_ADVANCEMENT=true
      shift
      ;;
    -h|--help)
      echo "Planet Nine Ecosystem - Base Startup Script"
      echo "Usage: $0 [OPTIONS]"
      echo ""
      echo "Options:"
      echo "  --clean              Clean up existing containers before starting"
      echo "  --build              Build Docker image before starting"
      echo "  --env=ENV            Environment: local or test (default: test)"
      echo "  --seed               Seed the environment with sample data"
      echo "  --seed-base=BASE     Which base to seed (1, 2, or 3, default: 1)"
      echo "  --enable-prof        Enable prof service (profile management)"
      echo "  --enable-advancement Enable The Advancement test server"
      echo "  -h, --help           Show this help message"
      echo ""
      echo "Examples:"
      echo "  $0 --clean --build --env=test --seed"
      echo "  $0 --env=local --seed --seed-base=2"
      echo "  $0 --clean --build --enable-prof --enable-advancement"
      exit 0
      ;;
    *)
      echo "Unknown option: $arg"
      echo "Usage: $0 [--clean] [--build] [--env=local|test] [--seed] [--seed-base=1|2|3] [--enable-prof] [--enable-advancement]"
      echo "Use --help for detailed options"
      exit 1
      ;;
  esac
done

# Validate environment
if [[ "$ENVIRONMENT" != "local" && "$ENVIRONMENT" != "test" ]]; then
  echo "❌ Invalid environment: $ENVIRONMENT"
  echo "   Must be 'local' or 'test'"
  exit 1
fi

# Validate seed base
if [[ "$SEED_BASE" != "1" && "$SEED_BASE" != "2" && "$SEED_BASE" != "3" ]]; then
  echo "❌ Invalid seed base: $SEED_BASE"
  echo "   Must be 1, 2, or 3"
  exit 1
fi

echo "🚀 Planet Nine Ecosystem - Base Startup Script"
echo "============================================="
echo "Environment: $ENVIRONMENT"
if [ "$SEED" = true ]; then
  echo "Seeding: Enabled (Base $SEED_BASE)"
else
  echo "Seeding: Disabled"
fi
if [ "$ENABLE_PROF" = true ]; then
  echo "Prof Service: Enabled"
else
  echo "Prof Service: Disabled"
fi
if [ "$ENABLE_ADVANCEMENT" = true ]; then
  echo "The Advancement Test Server: Enabled"
else
  echo "The Advancement Test Server: Disabled"
fi
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

  # Clean up The Advancement test server if it exists
  if docker ps -a --format 'table {{.Names}}' | grep -q "^advancement-test-server$"; then
    echo "  Stopping and removing advancement-test-server..."
    docker stop advancement-test-server >/dev/null 2>&1 || true
    docker rm advancement-test-server >/dev/null 2>&1 || true
  fi
  
  echo "✅ Cleanup completed"
  echo ""
fi

# Build Docker image if requested (only for test environment)
if [ "$BUILD" = true ] && [ "$ENVIRONMENT" = "test" ]; then
  echo "🔨 Building flexible allyabase Docker image..."
  # Build from planet-nine root directory so COPY paths work correctly
  cd ../../../
  docker build -f allyabase/deployment/docker/Dockerfile-flexible -t allyabase-flexible .
  cd allyabase/deployment/docker
  echo "✅ Docker image built successfully"
  echo ""
elif [ "$BUILD" = true ] && [ "$ENVIRONMENT" = "local" ]; then
  echo "⚠️  Build flag ignored for local environment"
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

# Handle local environment
if [ "$ENVIRONMENT" = "local" ]; then
  echo "🏠 Local environment selected"
  echo "   Assuming services are running on localhost:3000-3008, 7243, etc."
  echo "   Skipping Docker container setup"
  echo ""
  
  # Skip to seeding if requested
  if [ "$SEED" = true ]; then
    echo "🌱 Starting local environment seeding..."
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
      echo "❌ Node.js is required for seeding but not found"
      echo "   Please install Node.js to use the seeding feature"
      exit 1
    fi
    
    # Check if seed script exists
    if [ ! -f "seed-ecosystem.js" ]; then
      echo "❌ Seed script not found: seed-ecosystem.js"
      echo "   Please ensure you're running from the correct directory"
      exit 1
    fi
    
    # Run seeding for local environment
    echo "🌱 Running ecosystem seeder for local environment..."
    node seed-ecosystem.js local
    
    echo ""
    echo "🎉 Local environment seeding complete!"
  else
    echo "🎉 Local environment ready!"
    echo ""
    echo "📋 Expected Local Service URLs:"
    echo "  dolores: http://localhost:3007"
    if [ "$ENABLE_PROF" = true ]; then
      echo "  prof: http://localhost:3008 (enabled)"
    else
      echo "  prof: http://localhost:3008 (disabled - use --enable-prof)"
    fi
    echo "  sanora: http://localhost:7243"
    echo "  bdo: http://localhost:3003"
    echo "  covenant: http://localhost:3011"
    echo "  julia: http://localhost:3000"
    echo "  continuebee: http://localhost:2999"
    echo "  fount: http://localhost:3002"
    echo "  wiki: http://localhost:3333"
    if [ "$ENABLE_ADVANCEMENT" = true ]; then
      echo "  advancement-test: http://localhost:3456 (enabled)"
    else
      echo "  advancement-test: http://localhost:3456 (disabled - use --enable-advancement)"
    fi
    echo ""
    echo "💡 Use --seed flag to populate with sample data"
  fi
  
  exit 0
fi

# Check for Addie API keys configuration
ADDIE_ENV_VARS=""
ADDIE_KEYS_FILE="../../addie-keys.env"

if [ -f "$ADDIE_KEYS_FILE" ]; then
  echo "🔑 Found Addie API keys configuration"

  # Source the file to load variables
  source "$ADDIE_KEYS_FILE"

  # Build environment variable arguments for Docker
  if [ -n "$OPENAI_API_KEY" ]; then
    ADDIE_ENV_VARS="$ADDIE_ENV_VARS -e OPENAI_API_KEY=$OPENAI_API_KEY"
    echo "   ✅ OpenAI API key configured"
  fi

  if [ -n "$ANTHROPIC_API_KEY" ]; then
    ADDIE_ENV_VARS="$ADDIE_ENV_VARS -e ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY"
    echo "   ✅ Anthropic API key configured"
  fi

  if [ -z "$ADDIE_ENV_VARS" ]; then
    echo "   ⚠️  addie-keys.env found but no API keys configured"
  fi
  echo ""
else
  echo "ℹ️  No Addie API keys found (optional)"
  echo "   Create addie-keys.env from template to enable AI features"
  echo ""
fi

# Build prof port arguments
PROF_PORTS=""
if [ "$ENABLE_PROF" = true ]; then
  PROF_PORTS="-p 5123:3008"
fi

# Start Base 1 (Host ports 5111-5124 → Standard Docker internal ports)
echo "🏗️  Starting Base 1 (Host ports 5111-5124)..."
if [ "$ENABLE_PROF" = true ]; then
  echo "   Prof enabled on port 5123"
fi
echo "   Wiki enabled on port 5124"

docker run -d \
  --name allyabase-base1 \
  -e ENABLE_PROF=$ENABLE_PROF \
  $ADDIE_ENV_VARS \
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
  -p 5124:3333 \
  $PROF_PORTS \
  allyabase-flexible

# Wait for Base 1 services (check host ports)
BASE1_PORTS=(5111 5112 5113 5114 5115 5116 5117 5118 5119 5120 5121 5122 5124)
if [ "$ENABLE_PROF" = true ]; then
  BASE1_PORTS+=(5123)
fi
if ! wait_for_base "Base 1" "${BASE1_PORTS[@]}"; then
  echo "❌ Base 1 startup failed"
  exit 1
fi

echo "✅ Base 1 started successfully!"
echo ""

# Update prof ports for Base 2
PROF_PORTS_BASE2=""
if [ "$ENABLE_PROF" = true ]; then
  PROF_PORTS_BASE2="-p 5223:3008"
fi

# Start Base 2 (Host ports 5211-5224 → Standard Docker internal ports)
echo "🏗️  Starting Base 2 (Host ports 5211-5224)..."
if [ "$ENABLE_PROF" = true ]; then
  echo "   Prof enabled on port 5223"
fi
echo "   Wiki enabled on port 5224"

docker run -d \
  --name allyabase-base2 \
  -e ENABLE_PROF=$ENABLE_PROF \
  $ADDIE_ENV_VARS \
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
  -p 5224:3333 \
  $PROF_PORTS_BASE2 \
  allyabase-flexible

# Wait for Base 2 services (check host ports)
BASE2_PORTS=(5211 5212 5213 5214 5215 5216 5217 5218 5219 5220 5221 5222 5224)
if [ "$ENABLE_PROF" = true ]; then
  BASE2_PORTS+=(5223)
fi
if ! wait_for_base "Base 2" "${BASE2_PORTS[@]}"; then
  echo "❌ Base 2 startup failed"
  exit 1
fi

echo "✅ Base 2 started successfully!"
echo ""

# Update prof ports for Base 3
PROF_PORTS_BASE3=""
if [ "$ENABLE_PROF" = true ]; then
  PROF_PORTS_BASE3="-p 5323:3008"
fi

# Start Base 3 (Host ports 5311-5324 → Standard Docker internal ports)
echo "🏗️  Starting Base 3 (Host ports 5311-5324)..."
if [ "$ENABLE_PROF" = true ]; then
  echo "   Prof enabled on port 5323"
fi
echo "   Wiki enabled on port 5324"

docker run -d \
  --name allyabase-base3 \
  -e ENABLE_PROF=$ENABLE_PROF \
  $ADDIE_ENV_VARS \
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
  -p 5324:3333 \
  $PROF_PORTS_BASE3 \
  allyabase-flexible

# Wait for Base 3 services (check host ports)
BASE3_PORTS=(5311 5312 5313 5314 5315 5316 5317 5318 5319 5320 5321 5322 5324)
if [ "$ENABLE_PROF" = true ]; then
  BASE3_PORTS+=(5323)
fi
if ! wait_for_base "Base 3" "${BASE3_PORTS[@]}"; then
  echo "❌ Base 3 startup failed"
  exit 1
fi

echo "✅ Base 3 started successfully!"
echo ""

# Start The Advancement test server if enabled
if [ "$ENABLE_ADVANCEMENT" = true ]; then
  echo "🚀 Starting The Advancement test server..."

  cd ../../the-advancement/test-server

  # Check if package.json exists
  if [ ! -f "package.json" ]; then
    echo "❌ The Advancement test server not found at ../../the-advancement/test-server"
    echo "   Skipping The Advancement test server startup"
    cd ../../allyabase/deployment/docker
  else
    # Install dependencies if node_modules doesn't exist
    if [ ! -d "node_modules" ]; then
      echo "  📦 Installing dependencies..."
      npm install >/dev/null 2>&1
    fi

    # Start the server in background
    echo "  🔧 Starting server on port 3456..."
    nohup npm start > advancement-test-server.log 2>&1 &
    ADVANCEMENT_PID=$!

    # Wait a moment for startup
    sleep 3

    # Check if it's running
    if ps -p $ADVANCEMENT_PID > /dev/null 2>&1; then
      echo "  ✅ The Advancement test server started (PID: $ADVANCEMENT_PID)"
      echo "  📋 Test server: http://localhost:3456"
    else
      echo "  ❌ The Advancement test server failed to start"
      echo "  📋 Check advancement-test-server.log for details"
    fi

    cd ../../allyabase/deployment/docker
  fi
  echo ""
fi

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
if [ "$ENABLE_PROF" = true ]; then
  echo "  prof: http://localhost:5123 → docker:3008"
fi
echo "  wiki: http://localhost:5124 → docker:3333"
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
if [ "$ENABLE_PROF" = true ]; then
  echo "  prof: http://localhost:5223 → docker:3008"
fi
echo "  wiki: http://localhost:5224 → docker:3333"
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
if [ "$ENABLE_PROF" = true ]; then
  echo "  prof: http://localhost:5323 → docker:3008"
fi
echo "  wiki: http://localhost:5324 → docker:3333"
echo ""
if [ "$ENABLE_ADVANCEMENT" = true ]; then
  echo "The Advancement Test Server:"
  echo "  test-server: http://localhost:3456 (native)"
  echo ""
fi
echo "🛠️  Management Commands:"
echo "  View logs: docker logs <container-name>"
if [ "$ENABLE_ADVANCEMENT" = true ]; then
  echo "  View advancement logs: cat ../../the-advancement/test-server/advancement-test-server.log"
fi
echo "  Stop all: docker stop allyabase-base1 allyabase-base2 allyabase-base3"
echo "  Remove all: docker rm allyabase-base1 allyabase-base2 allyabase-base3"
if [ "$ENABLE_ADVANCEMENT" = true ]; then
  echo "  Stop advancement: pkill -f 'node server.js'"
fi
echo "  Restart: ./spin-up-bases.sh --clean --build"

# Handle seeding for test environment
if [ "$SEED" = true ]; then
  echo ""
  echo "🌱 Starting ecosystem seeding for test environment..."
  
  # Check if Node.js is available
  if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required for seeding but not found"
    echo "   Please install Node.js to use the seeding feature"
    exit 1
  fi
  
  # Check if seed script exists
  if [ ! -f "seed-ecosystem.js" ]; then
    echo "❌ Seed script not found: seed-ecosystem.js"
    echo "   Please ensure you're running from the correct directory"
    exit 1
  fi
  
  # Wait a moment for services to fully stabilize
  echo "⏳ Waiting 10 seconds for services to stabilize..."
  sleep 10
  
  # Run seeding for test environment
  echo "🌱 Running ecosystem seeder for Base $SEED_BASE..."
  node seed-ecosystem.js test $SEED_BASE
  
  if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Test environment seeding complete!"
    echo "   Base $SEED_BASE has been populated with sample data"
    echo ""
    echo "🔗 Seeded Base $SEED_BASE URLs:"
    BASE_PORT=$((5000 + SEED_BASE * 100))
    echo "  BDO: http://localhost:$((BASE_PORT + 14))"
    echo "  Sanora: http://localhost:$((BASE_PORT + 21))"
    echo "  Dolores: http://localhost:$((BASE_PORT + 18))"
    echo "  Covenant: http://localhost:$((BASE_PORT + 22))"
  else
    echo "❌ Seeding failed. Please check the output above for errors."
    echo "   Services may need more time to start or there may be connection issues."
  fi
fi

echo ""
echo "✨ Setup complete! Your Planet Nine ecosystem is ready."
if [ "$SEED" = false ]; then
  echo "💡 Tip: Use --seed flag next time to populate with sample data"
fi