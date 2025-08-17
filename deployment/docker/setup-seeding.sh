#!/bin/bash

# Setup script for Planet Nine ecosystem seeding
# Installs Node.js dependencies required for data seeding

echo "🌱 Planet Nine Ecosystem Seeding Setup"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    echo "   Please install Node.js 16+ from https://nodejs.org/"
    echo "   Or use a version manager like nvm:"
    echo "     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
    echo "     nvm install 18"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version $NODE_VERSION is too old"
    echo "   Please upgrade to Node.js 16 or later"
    exit 1
fi

echo "✅ Node.js $(node --version) found"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    echo "   npm usually comes with Node.js. Please reinstall Node.js."
    exit 1
fi

echo "✅ npm $(npm --version) found"

# Install dependencies
echo ""
echo "📦 Installing seeding dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
    echo ""
    echo "🎉 Ecosystem seeding is ready!"
    echo ""
    echo "Usage examples:"
    echo "  # Seed local environment"
    echo "  ./spin-up-bases.sh --env=local --seed"
    echo ""
    echo "  # Seed test environment Base 1"
    echo "  ./spin-up-bases.sh --env=test --seed --seed-base=1"
    echo ""
    echo "  # Full test setup with seeding"
    echo "  ./spin-up-bases.sh --clean --build --env=test --seed"
    echo ""
    echo "  # Run seeding directly"
    echo "  npm run seed:local"
    echo "  npm run seed:test:base1"
else
    echo "❌ Failed to install dependencies"
    echo "   Please check your internet connection and try again"
    exit 1
fi