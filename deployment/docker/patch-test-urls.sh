#!/bin/bash

# Script to patch service test files to use BASE_URL environment variable
# This enables testing against different port configurations

echo "🔧 Patching service test files for flexible URL configuration..."

# Function to patch a test file
patch_test_file() {
  local service=$1
  local default_port=$2
  local test_file="/usr/src/app/$service/test/mocha/server.js"
  
  if [ -f "$test_file" ]; then
    echo "  Patching $service test (default port: $default_port)..."
    
    # Create backup
    cp "$test_file" "$test_file.bak"
    
    # Update the baseURL line to use BASE_URL environment variable with fallback
    sed -i "s|const baseURL = process.env.SUB_DOMAIN.*|const baseURL = process.env.BASE_URL \|\| (process.env.SUB_DOMAIN ? \`https://\${process.env.SUB_DOMAIN}.$service.allyabase.com/\` : 'http://127.0.0.1:$default_port/');|" "$test_file"
    
    echo "    ✅ $service test patched"
  else
    echo "    ⚠️  Test file not found: $test_file"
  fi
}

# Patch all service test files with their default ports
patch_test_file "addie" "3005"
patch_test_file "aretha" "7277"
patch_test_file "bdo" "3003"
patch_test_file "continuebee" "2999"
patch_test_file "dolores" "3007"
patch_test_file "fount" "3006"
patch_test_file "joan" "3004"
patch_test_file "julia" "3000"
patch_test_file "pref" "3002"
patch_test_file "sanora" "7243"

echo "✅ All test files patched successfully!"
echo ""
echo "Test files now support:"
echo "  BASE_URL environment variable (highest priority)"
echo "  SUB_DOMAIN environment variable (fallback to production)"
echo "  Default localhost URLs (fallback to development)"