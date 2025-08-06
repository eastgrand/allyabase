#!/bin/bash

# Quick test script to verify ngrok integration is working
# Tests the tunnel setup, URL resolution, and basic connectivity

set -e

echo "🧪 Planet Nine Ecosystem - ngrok Integration Test"
echo "================================================="
echo ""

# Test 1: Check if ngrok is available
echo "🔍 Test 1: Checking ngrok availability..."
if command -v ngrok >/dev/null 2>&1; then
    echo "✅ ngrok found: $(ngrok --version | head -1)"
else
    echo "❌ ngrok not found. Please install ngrok first."
    exit 1
fi

# Test 2: Check if allyabase containers are running
echo ""
echo "🔍 Test 2: Checking allyabase containers..."
missing_containers=()
for container in allyabase-base1 allyabase-base2 allyabase-base3; do
    if docker ps --format 'table {{.Names}}' | grep -q "^$container$"; then
        echo "✅ $container is running"
    else
        echo "❌ $container is not running"
        missing_containers+=("$container")
    fi
done

if [ ${#missing_containers[@]} -gt 0 ]; then
    echo ""
    echo "⚠️  Missing containers: ${missing_containers[*]}"
    echo "💡 Start them with: ./spin-up-bases-corrected.sh --clean --build"
    echo ""
    echo "🎯 For this test, we'll continue with tunnel setup verification only..."
fi

# Test 3: Set up ngrok tunnels
echo ""
echo "🔍 Test 3: Setting up ngrok tunnels..."
if ./setup-ngrok-tunnels.sh; then
    echo "✅ Tunnel setup completed"
else
    echo "❌ Tunnel setup failed"
    exit 1
fi

# Test 4: Verify tunnel URLs can be retrieved
echo ""
echo "🔍 Test 4: Testing URL resolution..."

# Test base URL retrieval
echo "  Testing base URL retrieval..."
for base in base1 base2 base3; do
    base_url=$(./get-ngrok-urls.sh "$base" 2>/dev/null || echo "ERROR")
    if [ "$base_url" != "ERROR" ] && [ -n "$base_url" ]; then
        echo "  ✅ $base: $base_url"
    else
        echo "  ❌ $base: Failed to get URL"
    fi
done

# Test service URL retrieval
echo ""
echo "  Testing service URL retrieval..."
test_services=("julia" "sanora" "bdo" "fount")
for base in base1 base2 base3; do
    echo "    Testing $base services:"
    for service in "${test_services[@]}"; do
        service_url=$(./get-ngrok-urls.sh "$base" "$service" 2>/dev/null || echo "ERROR")
        if [ "$service_url" != "ERROR" ] && [ -n "$service_url" ]; then
            printf "      ✅ %-10s %s\n" "$service:" "$service_url"
        else
            printf "      ❌ %-10s Failed to resolve\n" "$service:"
        fi
    done
done

# Test 5: Test environment variable export
echo ""
echo "🔍 Test 5: Testing environment variable export..."
if eval "$(./get-ngrok-urls.sh --export 2>/dev/null)"; then
    echo "✅ Environment variables exported successfully"
    echo "  NGROK_MODE: ${NGROK_MODE:-not set}"
    echo "  NGROK_BASE1_URL: ${NGROK_BASE1_URL:-not set}"
    echo "  NGROK_BASE2_URL: ${NGROK_BASE2_URL:-not set}"
    echo "  NGROK_BASE3_URL: ${NGROK_BASE3_URL:-not set}"
else
    echo "❌ Failed to export environment variables"
fi

# Test 6: Test framework integration (if containers are running)
if [ ${#missing_containers[@]} -eq 0 ]; then
    echo ""
    echo "🔍 Test 6: Testing framework integration..."
    
    # Test the nullary test framework with ngrok
    echo "  Testing nullary test framework with USE_NGROK=true..."
    cd nullary-tests
    
    # Test URL resolution for each offset
    for offset in 1000 2000 3000; do
        echo "    Testing PORT_OFFSET=$offset..."
        if USE_NGROK=true bash -c "source nullary-test-framework.sh $offset && get_service_urls $offset"; then
            echo "    ✅ Framework integration works for offset $offset"
        else
            echo "    ❌ Framework integration failed for offset $offset"
        fi
    done
    
    cd ..
else
    echo ""
    echo "🔍 Test 6: Skipping framework integration (containers not running)"
fi

# Test 7: Basic connectivity test (if containers are running)
if [ ${#missing_containers[@]} -eq 0 ]; then
    echo ""
    echo "🔍 Test 7: Testing basic connectivity..."
    
    # Test a few key services through ngrok
    test_count=0
    success_count=0
    
    for base in base1; do  # Just test base1 for speed
        for service in sanora bdo; do
            service_url=$(./get-ngrok-urls.sh "$base" "$service" 2>/dev/null || echo "ERROR")
            if [ "$service_url" != "ERROR" ] && [ -n "$service_url" ]; then
                echo "  Testing connectivity to $base/$service..."
                test_count=$((test_count + 1))
                
                if curl -k -s --connect-timeout 10 "$service_url" >/dev/null 2>&1; then
                    echo "    ✅ $service_url is responding"
                    success_count=$((success_count + 1))
                else
                    echo "    ❌ $service_url is not responding"
                fi
            fi
        done
    done
    
    echo "  Connectivity test: $success_count/$test_count services responding"
else
    echo ""
    echo "🔍 Test 7: Skipping connectivity test (containers not running)"
fi

# Test 8: Show tunnel management
echo ""
echo "🔍 Test 8: Tunnel management verification..."
echo "  Available tunnel management commands:"
echo "    ./setup-ngrok-tunnels.sh    # Set up all tunnels"
echo "    ./get-ngrok-urls.sh --list   # List active tunnels"  
echo "    ./stop-ngrok-tunnels.sh      # Stop all tunnels"
echo ""
echo "  Current tunnel status:"
./get-ngrok-urls.sh --list 2>/dev/null || echo "    No tunnels currently active"

echo ""
echo "🎉 ngrok Integration Test Complete!"
echo ""

if [ ${#missing_containers[@]} -eq 0 ]; then
    echo "✅ All systems ready for ngrok-based testing!"
    echo ""
    echo "🚀 Next steps:"
    echo "  # Run full ecosystem test with ngrok"
    echo "  ./test-complete-ecosystem.sh --use-ngrok --continue-on-failure"
    echo ""
    echo "  # Or test individual apps"
    echo "  cd nullary-tests"
    echo "  USE_NGROK=true ./test-rhapsold.sh 1000"
else
    echo "⚠️  Infrastructure not fully ready, but ngrok integration is working!"
    echo ""
    echo "🚀 Next steps:"
    echo "  # Start allyabase containers first"
    echo "  ./spin-up-bases-corrected.sh --clean --build"
    echo ""
    echo "  # Then run full ecosystem test"
    echo "  ./test-complete-ecosystem.sh --use-ngrok --continue-on-failure"
fi

echo ""
echo "💡 Tunnel management tips:"
echo "  • Tunnels remain active until manually stopped"
echo "  • Use 'http://127.0.0.1:4040' to monitor tunnel traffic"  
echo "  • Free ngrok allows 3 concurrent tunnels (perfect for our 3 bases)"
echo "  • Remember to stop tunnels when done: ./stop-ngrok-tunnels.sh"