#!/bin/bash

# Stop and clean up allyabase instances
# Usage: ./stop-all-bases.sh [--env=local|test]

set -e  # Exit on any error

ENVIRONMENT="test"

# Parse command line arguments
for arg in "$@"; do
  case $arg in
    --env=*)
      ENVIRONMENT="${arg#*=}"
      shift
      ;;
    -h|--help)
      echo "Planet Nine Ecosystem - Stop All Bases Script"
      echo "Usage: $0 [OPTIONS]"
      echo ""
      echo "Options:"
      echo "  --env=ENV            Environment: local or test (default: test)"
      echo "  -h, --help           Show this help message"
      echo ""
      echo "Examples:"
      echo "  $0 --env=test        # Stop Docker test containers"
      echo "  $0 --env=local       # Display local service stop instructions"
      echo "  $0                   # Stop test containers (default)"
      exit 0
      ;;
    *)
      echo "Unknown option: $arg"
      echo "Usage: $0 [--env=local|test]"
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

echo "🛑 Planet Nine Ecosystem - Stop All Bases"
echo "========================================="
echo "Environment: $ENVIRONMENT"
echo ""

if [ "$ENVIRONMENT" = "local" ]; then
  echo "🏠 Local environment detected"
  echo ""
  echo "📋 To stop local Planet Nine services, use these commands:"
  echo ""
  echo "Standard local services:"
  echo "  # Stop individual services (if running in separate terminals)"
  echo "  # Press Ctrl+C in each service terminal"
  echo ""
  echo "  # Or if using PM2 process manager:"
  echo "  pm2 stop all"
  echo "  pm2 delete all"
  echo ""
  echo "  # Or if using docker-compose locally:"
  echo "  docker-compose down"
  echo ""
  echo "Common local service processes to check:"
  echo "  - Node.js processes on ports 3000-3008, 7243, etc."
  echo "  - Any custom startup scripts you're using"
  echo ""
  echo "💡 Use 'ps aux | grep node' to find running Node.js processes"
  echo "💡 Use 'lsof -i :3007' to check specific ports"
  
  exit 0
fi

# Test environment - stop Docker containers
echo "🐳 Stopping Docker test environment..."

# Check if Docker is running
if ! docker info >/dev/null 2>&1; then
  echo "❌ Docker is not running or accessible"
  echo "   Please start Docker and try again"
  exit 1
fi

# Stop containers
containers_stopped=0
for base in allyabase-base1 allyabase-base2 allyabase-base3; do
  if docker ps --format 'table {{.Names}}' | grep -q "^$base$"; then
    echo "  🛑 Stopping $base..."
    docker stop $base >/dev/null 2>&1
    containers_stopped=$((containers_stopped + 1))
  else
    echo "  ⚪ $base is not running"
  fi
done

# Remove containers  
containers_removed=0
for base in allyabase-base1 allyabase-base2 allyabase-base3; do
  if docker ps -a --format 'table {{.Names}}' | grep -q "^$base$"; then
    echo "  🗑️  Removing $base..."
    docker rm $base >/dev/null 2>&1
    containers_removed=$((containers_removed + 1))
  fi
done

echo ""
if [ $containers_stopped -eq 0 ] && [ $containers_removed -eq 0 ]; then
  echo "💡 No allyabase containers were running"
else
  echo "✅ Docker cleanup complete:"
  echo "   - Stopped: $containers_stopped containers"
  echo "   - Removed: $containers_removed containers"
fi

echo ""
echo "🧹 Additional cleanup options:"
echo "  # Remove Docker image:"
echo "  docker rmi allyabase-flexible"
echo ""
echo "  # Remove all unused Docker resources:"
echo "  docker system prune"
echo ""
echo "  # View remaining containers:"
echo "  docker ps -a"