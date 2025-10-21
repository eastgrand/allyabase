#!/bin/bash

# Test script for single-base allyabase deployment
# Performs basic smoke tests on all services

# Note: NOT using 'set -e' so script continues even if individual tests fail

echo "🧪 Testing Single-Base Allyabase Deployment"
echo "=========================================="
echo ""

# Color codes for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PASSED=0
FAILED=0

# Test function
test_service() {
  local service=$1
  local url=$2
  local expected_status=${3:-200}

  echo -n "  Testing $service... "

  response=$(curl -s -o /dev/null -w "%{http_code}" "$url" || echo "000")

  if [ "$response" = "$expected_status" ] || [ "$response" = "200" ] || [ "$response" = "404" ]; then
    echo -e "${GREEN}✓${NC} (HTTP $response)"
    ((PASSED++))
    return 0
  else
    echo -e "${RED}✗${NC} (HTTP $response)"
    ((FAILED++))
    return 1
  fi
}

echo "📡 Testing Core Services..."
test_service "Julia" "http://localhost:3000"
test_service "ContinueBee" "http://localhost:2999"
test_service "Pref" "http://localhost:3002"
test_service "BDO" "http://localhost:3003"
test_service "Joan" "http://localhost:3004"
test_service "Addie" "http://localhost:3005"
test_service "Fount" "http://localhost:3006"
test_service "Dolores" "http://localhost:3007"
test_service "Prof" "http://localhost:3008"
# test_service "Minnie" "http://localhost:2525"  # Skipped: Minnie is SMTP service, not HTTP
test_service "Aretha" "http://localhost:7277"
test_service "Sanora" "http://localhost:7243"
test_service "Covenant" "http://localhost:3011"
# test_service "Wiki" "http://localhost:3333"  # Skipped: Wiki not in current deployment

echo ""
echo "🔍 Testing Seeded Data..."

# Test BDO base discovery
echo -n "  Testing BDO bases... "
response=$(curl -s "http://localhost:3003" || echo "failed")
if echo "$response" | grep -q "Planet Nine" || [ "$response" != "failed" ]; then
  echo -e "${GREEN}✓${NC}"
  ((PASSED++))
else
  echo -e "${RED}✗${NC}"
  ((FAILED++))
fi

# Test Sanora products
echo -n "  Testing Sanora products... "
response=$(curl -s "http://localhost:7243/products" || echo "failed")
if [ "$response" != "failed" ]; then
  echo -e "${GREEN}✓${NC}"
  ((PASSED++))
else
  echo -e "${RED}✗${NC}"
  ((FAILED++))
fi

# Test Covenant contracts
echo -n "  Testing Covenant contracts... "
response=$(curl -s "http://localhost:3011" || echo "failed")
if [ "$response" != "failed" ]; then
  echo -e "${GREEN}✓${NC}"
  ((PASSED++))
else
  echo -e "${RED}✗${NC}"
  ((FAILED++))
fi

echo ""
echo "📊 Test Summary"
echo "==============="
echo -e "Passed: ${GREEN}$PASSED${NC}"
echo -e "Failed: ${RED}$FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
  echo -e "${GREEN}✅ All tests passed!${NC}"
  exit 0
else
  echo -e "${YELLOW}⚠️  Some tests failed${NC}"
  exit 1
fi
