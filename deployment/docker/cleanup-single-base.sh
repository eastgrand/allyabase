#!/bin/bash

# Cleanup script for single-base allyabase deployment
# Usage: ./cleanup-single-base.sh [--volumes]

REMOVE_VOLUMES=false

# Parse command line arguments
for arg in "$@"; do
  case $arg in
    --volumes)
      REMOVE_VOLUMES=true
      shift
      ;;
    -h|--help)
      echo "Cleanup Single-Base Allyabase Deployment"
      echo "Usage: $0 [OPTIONS]"
      echo ""
      echo "Options:"
      echo "  --volumes    Also remove Docker volumes (delete all data)"
      echo "  -h, --help   Show this help message"
      echo ""
      echo "Examples:"
      echo "  $0                # Stop and remove container only"
      echo "  $0 --volumes      # Stop, remove container, and delete volumes"
      exit 0
      ;;
    *)
      echo "Unknown option: $arg"
      echo "Usage: $0 [--volumes]"
      echo "Use --help for detailed options"
      exit 1
      ;;
  esac
done

echo "🧹 Cleaning up single-base allyabase deployment..."
echo ""

# Stop and remove container
if docker ps -a --format 'table {{.Names}}' | grep -q "^allyabase-single$"; then
  echo "  Stopping container..."
  docker stop allyabase-single >/dev/null 2>&1 || true

  echo "  Removing container..."
  docker rm allyabase-single >/dev/null 2>&1 || true

  echo "  ✅ Container removed"
else
  echo "  ℹ️  No allyabase-single container found"
fi

# Remove volumes if requested
if [ "$REMOVE_VOLUMES" = true ]; then
  echo ""
  echo "  Removing Docker volumes..."

  # List and remove volumes related to allyabase-single
  VOLUMES=$(docker volume ls -q | grep allyabase-single 2>/dev/null || true)

  if [ -n "$VOLUMES" ]; then
    echo "$VOLUMES" | xargs docker volume rm 2>/dev/null || true
    echo "  ✅ Volumes removed"
  else
    echo "  ℹ️  No volumes found"
  fi
fi

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "💡 To start a fresh deployment:"
echo "   ./start-single-base.sh --build --seed"
