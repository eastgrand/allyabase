#!/bin/bash

# Stop and clean up all allyabase test instances
echo "🛑 Stopping all allyabase test instances..."

# Stop containers
for base in allyabase-base1 allyabase-base2 allyabase-base3; do
  if docker ps --format 'table {{.Names}}' | grep -q "^$base$"; then
    echo "  Stopping $base..."
    docker stop $base
  else
    echo "  $base is not running"
  fi
done

# Remove containers
for base in allyabase-base1 allyabase-base2 allyabase-base3; do
  if docker ps -a --format 'table {{.Names}}' | grep -q "^$base$"; then
    echo "  Removing $base..."
    docker rm $base
  fi
done

echo "✅ All allyabase instances stopped and removed"
echo ""
echo "🧹 To also remove the Docker image, run:"
echo "    docker rmi allyabase-flexible"