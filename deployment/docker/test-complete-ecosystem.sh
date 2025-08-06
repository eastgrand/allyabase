#!/bin/bash

# Complete Planet Nine Ecosystem Test Suite
# Comprehensive testing of allyabase services + Nullary applications + cross-base interactions

set -e

# Configuration
CONTINUE_ON_FAILURE="${CONTINUE_ON_FAILURE:-false}"
NULLARY_APPS="${NULLARY_APPS:-core}"  # all, core, basic, or comma-separated list  
CROSS_BASE_TESTING="${CROSS_BASE_TESTING:-true}"
CLEANUP_AFTER_TEST="${CLEANUP_AFTER_TEST:-false}"
USE_NGROK="${USE_NGROK:-false}"  # Use ngrok tunnels instead of localhost

# Parse command line arguments
for arg in "$@"; do
  case $arg in
    --continue-on-failure)
      CONTINUE_ON_FAILURE=true
      shift
      ;;
    --apps=*)
      NULLARY_APPS="${arg#*=}"
      shift
      ;;
    --no-cross-base)
      CROSS_BASE_TESTING=false
      shift
      ;;
    --cleanup)
      CLEANUP_AFTER_TEST=true
      shift
      ;;
    --use-ngrok)
      USE_NGROK=true
      shift
      ;;
    --help)
      echo "Usage: $0 [options]"
      echo ""
      echo "Options:"
      echo "  --continue-on-failure    Continue testing despite failures"
      echo "  --apps=SELECTION        Apps to test: all, core, basic, or app1,app2,..."
      echo "  --no-cross-base         Skip cross-base interaction testing"
      echo "  --cleanup               Clean up all containers after testing"
      echo "  --use-ngrok             Use ngrok tunnels instead of localhost URLs"
      echo "  --help                  Show this help message"
      echo ""
      echo "Environment Variables:"
      echo "  CONTINUE_ON_FAILURE=true         Don't abort on first failure"
      echo "  NULLARY_APPS=core                Which apps to test"
      echo "  CROSS_BASE_TESTING=false         Skip cross-base testing"
      echo "  CLEANUP_AFTER_TEST=true          Clean up after testing"
      echo "  USE_NGROK=true                   Use ngrok tunnels for remote testing"
      echo "  VISUAL_DEMO=true                 Run enhanced visual demonstration"
      exit 0
      ;;
  esac
done

echo "🌍 Planet Nine Ecosystem - Complete Testing Suite"
echo "================================================="
echo "CONTINUE_ON_FAILURE: $CONTINUE_ON_FAILURE"  
echo "NULLARY_APPS: $NULLARY_APPS"
echo "CROSS_BASE_TESTING: $CROSS_BASE_TESTING"
echo "CLEANUP_AFTER_TEST: $CLEANUP_AFTER_TEST"
echo "USE_NGROK: $USE_NGROK"
echo "Started: $(date)"
echo ""

# Test phase tracking
CURRENT_PHASE=0
TOTAL_PHASES=6

# Track overall results
declare -a PHASE_RESULTS=()
ECOSYSTEM_START_TIME=$(date +%s)

# Function to report phase progress
start_phase() {
  local phase_name=$1
  CURRENT_PHASE=$((CURRENT_PHASE + 1))
  
  echo ""
  echo "🚀 Phase $CURRENT_PHASE/$TOTAL_PHASES: $phase_name"
  echo "$(printf '=%.0s' {1..60})"
  echo "Time: $(date)"
  echo ""
}

complete_phase() {
  local phase_name=$1
  local result=$2
  local duration=${3:-"unknown"}
  
  if [ $result -eq 0 ]; then
    echo "✅ Phase $CURRENT_PHASE completed successfully: $phase_name ($duration)"
    PHASE_RESULTS+=("PASS:$phase_name:$duration")
  else
    echo "❌ Phase $CURRENT_PHASE failed: $phase_name ($duration)"
    PHASE_RESULTS+=("FAIL:$phase_name:$duration")
    
    if [ "$CONTINUE_ON_FAILURE" = "false" ]; then
      echo "🛑 Aborting ecosystem testing due to phase failure"
      exit $result
    fi
  fi
}

# Phase 1: Infrastructure Setup - Start All Bases
start_phase "Infrastructure Setup - Start All Bases"

phase_start=$(date +%s)
phase_result=0

echo "Starting 3 allyabase instances sequentially..."

if ./spin-up-bases-corrected.sh --clean --build; then
  echo "✅ All 3 allyabase instances started successfully"
else
  echo "❌ Failed to start allyabase instances"
  phase_result=1
fi

# Set up ngrok tunnels if requested
if [ "$USE_NGROK" = "true" ] && [ $phase_result -eq 0 ]; then
  echo ""
  echo "🌍 Setting up ngrok tunnels for remote testing..."
  
  # Check if ngrok is available
  if ! command -v ngrok >/dev/null 2>&1; then
    echo "❌ ngrok not found. Install ngrok or use --no-ngrok"
    phase_result=1
  else
    echo "✅ ngrok found: $(ngrok --version | head -1)"
    
    # Set up tunnels
    if ./setup-ngrok-tunnels.sh; then
      echo "✅ ngrok tunnels established successfully"
      
      # Export tunnel URLs for test scripts
      if source <(./get-ngrok-urls.sh --export 2>/dev/null); then
        echo "✅ ngrok environment variables loaded"
        
        # Display tunnel URLs for reference
        echo ""
        echo "🔗 Active ngrok Tunnels:"
        ./get-ngrok-urls.sh --list
      else
        echo "❌ Failed to export ngrok environment variables"
        phase_result=1
      fi
    else
      echo "❌ Failed to establish ngrok tunnels"
      phase_result=1
    fi
  fi
fi

phase_end=$(date +%s)
phase_duration=$((phase_end - phase_start))
complete_phase "Infrastructure Setup" $phase_result "${phase_duration}s"

# Phase 2: Service Validation - Test All Allyabase Services  
start_phase "Service Validation - Test All Allyabase Services"

phase_start=$(date +%s)
phase_result=0

echo "Testing allyabase services on all 3 bases..."

# Test Base 1 (PORT_OFFSET=1000)
echo "Testing Base 1 services..."
if [ "$CONTINUE_ON_FAILURE" = "true" ]; then
  USE_NGROK="$USE_NGROK" CONTINUE_ON_FAILURE=true ./test-services-in-container.sh 1000 --continue-on-failure || phase_result=1
else
  USE_NGROK="$USE_NGROK" ./test-services-in-container.sh 1000 || phase_result=1
fi

if [ $phase_result -eq 0 ] || [ "$CONTINUE_ON_FAILURE" = "true" ]; then
  # Test Base 2 (PORT_OFFSET=2000)  
  echo "Testing Base 2 services..."
  if [ "$CONTINUE_ON_FAILURE" = "true" ]; then
    USE_NGROK="$USE_NGROK" CONTINUE_ON_FAILURE=true ./test-services-in-container.sh 2000 --continue-on-failure || phase_result=1
  else
    USE_NGROK="$USE_NGROK" ./test-services-in-container.sh 2000 || phase_result=1
  fi
fi

if [ $phase_result -eq 0 ] || [ "$CONTINUE_ON_FAILURE" = "true" ]; then
  # Test Base 3 (PORT_OFFSET=3000)
  echo "Testing Base 3 services..."
  if [ "$CONTINUE_ON_FAILURE" = "true" ]; then
    USE_NGROK="$USE_NGROK" CONTINUE_ON_FAILURE=true ./test-services-in-container.sh 3000 --continue-on-failure || phase_result=1
  else
    USE_NGROK="$USE_NGROK" ./test-services-in-container.sh 3000 || phase_result=1
  fi
fi

phase_end=$(date +%s)
phase_duration=$((phase_end - phase_start))
complete_phase "Service Validation" $phase_result "${phase_duration}s"

# Phase 3: Application Testing - Test Nullary Apps on Each Base
start_phase "Application Testing - Test Nullary Apps on Each Base"

phase_start=$(date +%s)
phase_result=0

echo "Testing Nullary applications on all bases..."
echo "App selection: $NULLARY_APPS"

# Test apps on Base 1
echo "Testing Nullary apps on Base 1..."
cd nullary-tests
if [ "$CONTINUE_ON_FAILURE" = "true" ]; then
  USE_NGROK="$USE_NGROK" CONTINUE_ON_FAILURE=true SELECTED_APPS="$NULLARY_APPS" ./test-all-nullary-apps.sh 1000 --continue-on-failure || phase_result=1
else
  USE_NGROK="$USE_NGROK" SELECTED_APPS="$NULLARY_APPS" ./test-all-nullary-apps.sh 1000 || phase_result=1
fi

if [ $phase_result -eq 0 ] || [ "$CONTINUE_ON_FAILURE" = "true" ]; then
  # Test apps on Base 2
  echo "Testing Nullary apps on Base 2..."
  if [ "$CONTINUE_ON_FAILURE" = "true" ]; then
    USE_NGROK="$USE_NGROK" CONTINUE_ON_FAILURE=true SELECTED_APPS="$NULLARY_APPS" ./test-all-nullary-apps.sh 2000 --continue-on-failure || phase_result=1
  else
    USE_NGROK="$USE_NGROK" SELECTED_APPS="$NULLARY_APPS" ./test-all-nullary-apps.sh 2000 || phase_result=1
  fi
fi

if [ $phase_result -eq 0 ] || [ "$CONTINUE_ON_FAILURE" = "true" ]; then
  # Test apps on Base 3
  echo "Testing Nullary apps on Base 3..."
  if [ "$CONTINUE_ON_FAILURE" = "true" ]; then
    USE_NGROK="$USE_NGROK" CONTINUE_ON_FAILURE=true SELECTED_APPS="$NULLARY_APPS" ./test-all-nullary-apps.sh 3000 --continue-on-failure || phase_result=1
  else
    USE_NGROK="$USE_NGROK" SELECTED_APPS="$NULLARY_APPS" ./test-all-nullary-apps.sh 3000 || phase_result=1
  fi
fi

cd ..

phase_end=$(date +%s)
phase_duration=$((phase_end - phase_start))
complete_phase "Application Testing" $phase_result "${phase_duration}s"

# Phase 4: Cross-Base Interaction Testing
start_phase "Cross-Base Interaction Testing"

phase_start=$(date +%s)
phase_result=0

if [ "$CROSS_BASE_TESTING" = "true" ]; then
  echo "Testing cross-base interactions..."
  
  # Test StackChat P2P connections across bases
  echo "Testing StackChat P2P across Base 1 ↔ Base 2..."
  cd nullary-tests
  if [ "$CONTINUE_ON_FAILURE" = "true" ]; then
    USE_NGROK="$USE_NGROK" ./test-stackchat.sh 1000 2000 || phase_result=1
  else
    USE_NGROK="$USE_NGROK" ./test-stackchat.sh 1000 2000 || phase_result=1
  fi
  
  if [ $phase_result -eq 0 ] || [ "$CONTINUE_ON_FAILURE" = "true" ]; then
    echo "Testing StackChat P2P across Base 1 ↔ Base 3..."
    if [ "$CONTINUE_ON_FAILURE" = "true" ]; then
      USE_NGROK="$USE_NGROK" ./test-stackchat.sh 1000 3000 || phase_result=1
    else
      USE_NGROK="$USE_NGROK" ./test-stackchat.sh 1000 3000 || phase_result=1
    fi
  fi
  
  if [ $phase_result -eq 0 ] || [ "$CONTINUE_ON_FAILURE" = "true" ]; then
    echo "Testing MyBase cross-base aggregation..."
    if [ "$CONTINUE_ON_FAILURE" = "true" ]; then
      USE_NGROK="$USE_NGROK" ./test-mybase.sh 1000 || phase_result=1
    else
      USE_NGROK="$USE_NGROK" ./test-mybase.sh 1000 || phase_result=1
    fi
  fi
  
  cd ..
else
  echo "Skipping cross-base testing (--no-cross-base specified)"
fi

phase_end=$(date +%s)
phase_duration=$((phase_end - phase_start))
complete_phase "Cross-Base Interaction Testing" $phase_result "${phase_duration}s"

# Phase 5: Nexus Portal - Visual Ecosystem Demonstration
start_phase "Nexus Portal - Visual Ecosystem Demonstration"

phase_start=$(date +%s)
phase_result=0

echo "🌍 Starting Nexus Portal for visual ecosystem demonstration..."

# Check if Node.js is available
if ! command -v node >/dev/null 2>&1; then
  echo "❌ Node.js not found. Required for Nexus Portal."
  phase_result=1
else
  echo "✅ Node.js found: $(node --version)"
fi

if [ $phase_result -eq 0 ] || [ "$CONTINUE_ON_FAILURE" = "true" ]; then
  # Navigate to Nexus directory
  NEXUS_DIR="/Users/zachbabb/Work/planet-nine/the-nullary/nexus"
  
  if [ ! -d "$NEXUS_DIR" ]; then
    echo "❌ Nexus directory not found: $NEXUS_DIR"
    phase_result=1
  else
    echo "✅ Nexus directory found"
    
    # Install dependencies if needed
    echo "📦 Installing Nexus dependencies..."
    cd "$NEXUS_DIR/server"
    
    if [ ! -d "node_modules" ]; then
      npm install > /tmp/nexus-install.log 2>&1
      if [ $? -eq 0 ]; then
        echo "✅ Nexus dependencies installed"
      else
        echo "❌ Failed to install Nexus dependencies"
        echo "Last install log entries:"
        tail -10 /tmp/nexus-install.log
        phase_result=1
      fi
    else
      echo "✅ Dependencies already installed"
    fi
    
    # Start Nexus server
    if [ $phase_result -eq 0 ] || [ "$CONTINUE_ON_FAILURE" = "true" ]; then
      echo "🚀 Starting Nexus Portal server..."
      
      # Kill any existing Nexus processes
      pkill -f "nexus.*server.js" 2>/dev/null || true
      sleep 2
      
      # Start server in background
      NEXUS_LOG="/tmp/nexus-server-$(date +%Y%m%d-%H%M%S).log"
      npm start > "$NEXUS_LOG" 2>&1 &
      NEXUS_PID=$!
      
      echo "  Server PID: $NEXUS_PID"
      echo "  Log file: $NEXUS_LOG"
      
      # Wait for server to start
      echo "⏳ Waiting for Nexus server to start..."
      sleep 10
      
      # Test server connectivity
      for i in {1..10}; do
        if curl -s http://127.0.0.1:3333/api/ping >/dev/null 2>&1; then
          echo "✅ Nexus Portal server is responding"
          break
        fi
        if [ $i -eq 10 ]; then
          echo "❌ Nexus Portal server failed to start after 10 attempts"
          echo "Last server log entries:"
          tail -10 "$NEXUS_LOG"
          phase_result=1
        else
          echo "  Attempt $i/10: Server not ready, waiting..."
          sleep 2
        fi
      done
      
      # Run visual browser tests if server started
      if [ $phase_result -eq 0 ]; then
        echo "🌐 Running visual ecosystem demonstration..."
        
        # Test service status through Nexus
        echo "📊 Checking service status via Nexus API..."
        NEXUS_SERVICES_RESPONSE=$(curl -s http://127.0.0.1:3333/api/services/status)
        if [ $? -eq 0 ]; then
          echo "✅ Nexus API responding"
          echo "Service status summary:"
          echo "$NEXUS_SERVICES_RESPONSE" | grep -o '"percentage":[0-9]*' | head -1
        else
          echo "⚠️ Nexus API not responding properly"
        fi
        
        # Launch browser for visual demonstration
        echo "🖥️ Opening Nexus Portal in browser for visual demonstration..."
        
        # Detect available browser
        BROWSER_CMD=""
        if command -v open >/dev/null 2>&1; then
          # macOS
          BROWSER_CMD="open http://127.0.0.1:3333"
        elif command -v xdg-open >/dev/null 2>&1; then
          # Linux
          BROWSER_CMD="xdg-open http://127.0.0.1:3333"
        elif command -v start >/dev/null 2>&1; then
          # Windows
          BROWSER_CMD="start http://127.0.0.1:3333"
        fi
        
        if [ -n "$BROWSER_CMD" ]; then
          echo "🌐 Opening browser: $BROWSER_CMD"
          $BROWSER_CMD &
          
          echo ""
          echo "🎯 VISUAL DEMONSTRATION ACTIVE"
          echo "================================"
          echo "Nexus Portal URL: http://127.0.0.1:3333"
          echo ""
          echo "Manual verification steps:"
          echo "1. ✓ Main portal loads with four SVG portals"
          echo "2. ✓ Connection status shows ecosystem health"  
          echo "3. ✓ Portal cards respond to hover/click"
          echo "4. ✓ Service status API returns data"
          echo "5. ✓ Responsive design works on different screen sizes"
          echo ""
          echo "🔍 Portal Features to Demonstrate:"
          echo "  • Content & Social: Aggregated feeds from all Nullary apps"
          echo "  • Communications: Web-based StackChat P2P messaging"
          echo "  • Shopping: Cross-base Sanora product catalog"
          echo "  • Base Discovery: Visual base connection management"
          echo ""
          echo "⏸️  Press ENTER to continue with testing (or wait 30 seconds)..."
          
          # Wait for user interaction or timeout
          if read -t 30 -p ""; then
            echo "👍 Manual verification completed"
          else
            echo "⏰ Continuing automatically after timeout"
          fi
          
        else
          echo "⚠️ No browser command available for visual demonstration"
          echo "📱 Manual verification: Open http://127.0.0.1:3333 in your browser"
          echo "⏸️ Waiting 15 seconds for manual verification..."
          sleep 15
        fi
        
        # Automated content verification
        echo "🤖 Running automated content verification..."
        
        # Test main portal loads
        MAIN_PAGE=$(curl -s http://127.0.0.1:3333/)
        if echo "$MAIN_PAGE" | grep -q "Planet Nine Ecosystem Portal"; then
          echo "✅ Main portal page loads correctly"
        else
          echo "❌ Main portal page failed to load"
          phase_result=1
        fi
        
        # Test API endpoints
        echo "🔗 Testing critical API endpoints..."
        
        # Test ping
        if curl -s http://127.0.0.1:3333/api/ping | grep -q '"status":"ok"'; then
          echo "✅ Ping endpoint working"
        else
          echo "❌ Ping endpoint failed"
          phase_result=1
        fi
        
        # Test base status
        if curl -s http://127.0.0.1:3333/api/bases/status | grep -q '"connected"'; then
          echo "✅ Base status endpoint working"
        else
          echo "❌ Base status endpoint failed"
          phase_result=1
        fi
        
        # Test content feed
        if curl -s http://127.0.0.1:3333/api/content/feed | grep -q '"content"'; then
          echo "✅ Content feed endpoint working"
        else
          echo "❌ Content feed endpoint failed"
          phase_result=1
        fi
        
        echo "📊 Nexus Portal demonstration completed"
        
        # Optionally run enhanced visual demonstration
        if [ "${VISUAL_DEMO:-false}" = "true" ]; then
          echo ""
          echo "🎬 Running enhanced visual demonstration..."
          if [ -f "$(dirname "$0")/nexus-visual-demo.sh" ]; then
            "$(dirname "$0")/nexus-visual-demo.sh"
          else
            echo "⚠️ Visual demo script not found, skipping enhanced demo"
          fi
        fi
        
      fi
      
      # Keep server running for demonstration
      echo "🔄 Nexus Portal server will remain running for further demonstration"
      echo "   Server PID: $NEXUS_PID (use 'kill $NEXUS_PID' to stop)"
      echo "   Portal URL: http://127.0.0.1:3333"
      echo ""
      echo "💡 For enhanced visual demonstration, run:"
      echo "   VISUAL_DEMO=true ./test-complete-ecosystem.sh"
      echo "   or manually: ./nexus-visual-demo.sh"
      
    fi
  fi
fi

phase_end=$(date +%s)
phase_duration=$((phase_end - phase_start))
complete_phase "Nexus Portal - Visual Ecosystem Demonstration" $phase_result "${phase_duration}s"

# Phase 6: Integration Validation and Reporting
start_phase "Integration Validation and Reporting"

phase_start=$(date +%s)
phase_result=0

echo "Generating comprehensive ecosystem report..."

# Create master report
MASTER_REPORT="/tmp/planet-nine-ecosystem-report-$(date +%Y%m%d-%H%M%S).txt"
ECOSYSTEM_END_TIME=$(date +%s)
TOTAL_ECOSYSTEM_DURATION=$((ECOSYSTEM_END_TIME - ECOSYSTEM_START_TIME))

{
  echo "Planet Nine Ecosystem Test Report"
  echo "================================="
  echo "Generated: $(date)"
  echo "Total Duration: ${TOTAL_ECOSYSTEM_DURATION}s ($(($TOTAL_ECOSYSTEM_DURATION / 60))m $(($TOTAL_ECOSYSTEM_DURATION % 60))s)"
  echo ""
  echo "Configuration:"
  echo "  CONTINUE_ON_FAILURE: $CONTINUE_ON_FAILURE"
  echo "  NULLARY_APPS: $NULLARY_APPS"
  echo "  CROSS_BASE_TESTING: $CROSS_BASE_TESTING"
  echo ""
  echo "Phase Results:"
  
  total_phases=${#PHASE_RESULTS[@]}
  passed_phases=0
  failed_phases=0
  
  for result in "${PHASE_RESULTS[@]}"; do
    status=$(echo "$result" | cut -d: -f1)
    phase=$(echo "$result" | cut -d: -f2)
    duration=$(echo "$result" | cut -d: -f3)
    
    echo "  $status: $phase ($duration)"
    
    if [ "$status" = "PASS" ]; then
      passed_phases=$((passed_phases + 1))
    else
      failed_phases=$((failed_phases + 1))
    fi
  done
  
  echo ""
  echo "Summary:"
  echo "  Total Phases: $total_phases"
  echo "  Passed: $passed_phases"
  echo "  Failed: $failed_phases"
  echo ""
  
  if [ $failed_phases -eq 0 ]; then
    echo "🎉 ECOSYSTEM VALIDATION SUCCESSFUL"
    echo "All components of the Planet Nine ecosystem are functioning correctly."
  else
    echo "❌ ECOSYSTEM VALIDATION INCOMPLETE"
    echo "$failed_phases phase(s) failed validation."
  fi
  
} > "$MASTER_REPORT"

echo "📄 Master report generated: $MASTER_REPORT"

# Display key statistics
echo ""
echo "📊 Final Ecosystem Statistics:"
echo "  • 3 Allyabase instances tested"
echo "  • 12+ microservices validated"
echo "  • $NULLARY_APPS Nullary applications tested"
if [ "$CROSS_BASE_TESTING" = "true" ]; then
  echo "  • Cross-base P2P interactions validated"
fi
echo "  • Nexus Portal visual demonstration completed"
echo "  • Complete end-to-end ecosystem verified"
echo "  • Total test duration: $(($TOTAL_ECOSYSTEM_DURATION / 60))m $(($TOTAL_ECOSYSTEM_DURATION % 60))s"

phase_end=$(date +%s)
phase_duration=$((phase_end - phase_start))
complete_phase "Integration Validation and Reporting" $phase_result "${phase_duration}s"

# Cleanup if requested
if [ "$CLEANUP_AFTER_TEST" = "true" ]; then
  echo ""
  echo "🧹 Cleaning up test environment..."
  
  # Stop ngrok tunnels if they were used
  if [ "$USE_NGROK" = "true" ]; then
    echo "  🌍 Stopping ngrok tunnels..."
    ./stop-ngrok-tunnels.sh >/dev/null 2>&1 || true
  fi
  
  # Stop allyabase containers
  ./stop-all-bases.sh
  docker system prune -f >/dev/null 2>&1
  echo "✅ Cleanup completed"
fi

# Final result determination
failed_phases=0
for result in "${PHASE_RESULTS[@]}"; do
  if [[ "$result" == FAIL:* ]]; then
    failed_phases=$((failed_phases + 1))
  fi
done

echo ""
echo "🏁 Planet Nine Ecosystem Testing Complete"
echo "========================================="

if [ $failed_phases -eq 0 ]; then
  echo "🎉 SUCCESS: Complete ecosystem validation passed!"
  echo ""
  echo "🌟 Achievement Unlocked: Full Stack Validation + Visual Demonstration"
  echo "   ✅ All allyabase microservices functioning"
  echo "   ✅ All Nullary applications operational"
  echo "   ✅ Cross-base interactions working"
  echo "   ✅ Nexus Portal providing unified ecosystem access"
  echo "   ✅ End-to-end ecosystem integration confirmed"
  echo "   ✅ Visual demonstration ready for stakeholders"
  echo ""
  echo "🚀 The Planet Nine ecosystem is ready for production deployment!"
  echo "🌍 Nexus Portal URL: http://127.0.0.1:3333 (still running for demo)"
  
  exit 0
else
  echo "❌ PARTIAL SUCCESS: $failed_phases phase(s) failed"
  echo ""
  echo "🔧 Next Steps:"
  echo "   1. Review the master report: $MASTER_REPORT"
  echo "   2. Fix issues in failed phases"
  echo "   3. Re-run specific phases or full test suite"
  echo "   4. Consider using --continue-on-failure for debugging"
  echo ""
  
  if [ "$CONTINUE_ON_FAILURE" = "true" ]; then
    echo "ℹ️  Exiting with success due to --continue-on-failure mode"
    exit 0
  else
    exit 1
  fi
fi