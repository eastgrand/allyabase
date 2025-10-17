#!/bin/bash

# Complete Docker cleanup, rebuild, and seed script for fresh test environment
# This script completely wipes Docker state and rebuilds from scratch

set -e  # Exit on any error

echo "🧹 Starting complete Docker cleanup..."

# Stop all running containers
echo "⏹️  Stopping all containers..."
docker stop $(docker ps -aq) 2>/dev/null || echo "  No containers to stop"

# Remove all containers
echo "🗑️  Removing all containers..."
docker rm $(docker ps -aq) 2>/dev/null || echo "  No containers to remove"

# Remove all images
echo "🗑️  Removing all images..."
docker rmi $(docker images -q) -f 2>/dev/null || echo "  No images to remove"

# Prune volumes
echo "🗑️  Pruning volumes..."
docker volume prune -f

# Prune networks
echo "🗑️  Pruning networks..."
docker network prune -f

# Prune builder cache
echo "🗑️  Pruning builder cache..."
docker builder prune -af

# Final system prune
echo "🗑️  Final system prune..."
docker system prune -af --volumes

echo "✅ Docker cleanup complete!"
echo ""
echo "🔨 Building Docker images..."

# Build the images
./build-flexible.sh

echo "✅ Build complete!"
echo ""
echo "🚀 Spinning up containers..."

# Start the containers
./spin-up-bases.sh

echo "✅ Containers started!"
echo ""
echo "⏳ Waiting for services to be ready..."

# Wait for services to be fully ready (30 seconds should be enough)
sleep 30

echo "🌱 Seeding ecosystem..."

# Seed the ecosystem
node seed-ecosystem.js

echo "✅ Ecosystem seeded!"
echo ""
echo "✅ Fresh environment ready for testing!"
