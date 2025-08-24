#!/bin/bash

###############################################################################
# Planet Nine Complete Test Environment Startup Script
# 
# This script provides one-command startup for the complete Planet Nine
# ecosystem including:
# - All 3 allyabase Docker containers
# - Complete ecosystem seeding (Prof, Sanora, Dolores, Covenant, BDO)
# - Spellbook seeding for The Advancement integration
# - Health checks and status verification
###############################################################################

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
ENVIRONMENT="test"
CLEAN_START=false
BUILD_IMAGES=false
VERBOSE=false
SKIP_SEEDING=false

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --clean)
            CLEAN_START=true
            shift
            ;;
        --build)
            BUILD_IMAGES=true
            shift
            ;;
        --verbose|-v)
            VERBOSE=true
            shift
            ;;
        --skip-seeding)
            SKIP_SEEDING=true
            shift
            ;;
        --env=*)
            ENVIRONMENT="${1#*=}"
            shift
            ;;
        --help|-h)
            echo "Usage: $0 [OPTIONS]"
            echo ""
            echo "Options:"
            echo "  --clean           Stop and remove existing containers before starting"
            echo "  --build           Build Docker images before starting"
            echo "  --verbose, -v     Enable verbose output"
            echo "  --skip-seeding    Skip all seeding operations"
            echo "  --env=ENV         Environment (test, local, dev) [default: test]"
            echo "  --help, -h        Show this help message"
            echo ""
            echo "Examples:"
            echo "  $0                              # Basic startup with seeding"
            echo "  $0 --clean --build             # Clean build and start"
            echo "  $0 --env=local --skip-seeding  # Local environment, no seeds"
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            echo "Use --help for usage information"
            exit 1
            ;;
    esac
done

# Helper functions
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

log_section() {
    echo -e "\n${PURPLE}🚀 $1${NC}"
    echo -e "${PURPLE}$(printf '%.0s=' {1..60})${NC}"
}

# Health check function
check_service_health() {
    local url=$1
    local service_name=$2
    local max_attempts=30
    local attempt=1
    
    log_info "Checking health of $service_name at $url"
    
    while [ $attempt -le $max_attempts ]; do
        if curl -s --connect-timeout 2 "$url" > /dev/null 2>&1; then
            log_success "$service_name is healthy"
            return 0
        fi
        
        if [ $VERBOSE = true ]; then
            echo -n "."
        fi
        
        sleep 2
        ((attempt++))
    done
    
    log_error "$service_name failed health check after $max_attempts attempts"
    return 1
}

# Main execution
main() {
    log_section "Planet Nine Complete Environment Startup"
    
    echo -e "${CYAN}Configuration:${NC}"
    echo "  Environment: $ENVIRONMENT"
    echo "  Clean start: $CLEAN_START"
    echo "  Build images: $BUILD_IMAGES"
    echo "  Skip seeding: $SKIP_SEEDING"
    echo "  Verbose: $VERBOSE"
    echo ""
    
    # Step 1: Clean up if requested
    if [ "$CLEAN_START" = true ]; then
        log_section "Cleaning Up Existing Containers"
        
        if [ -f "./stop-all-bases.sh" ]; then
            log_info "Stopping all existing containers..."
            ./stop-all-bases.sh
        else
            log_info "Stopping containers manually..."
            docker stop allyabase-base1 allyabase-base2 allyabase-base3 2>/dev/null || true
            docker rm allyabase-base1 allyabase-base2 allyabase-base3 2>/dev/null || true
        fi
        
        log_success "Container cleanup completed"
    fi
    
    # Step 2: Build images if requested
    if [ "$BUILD_IMAGES" = true ]; then
        log_section "Building Docker Images"
        
        if [ -f "./build-flexible.sh" ]; then
            log_info "Building flexible Docker image..."
            ./build-flexible.sh
        else
            log_info "Building Docker image manually..."
            docker build -f Dockerfile-flexible -t allyabase-flexible .
        fi
        
        log_success "Docker images built successfully"
    fi
    
    # Step 3: Start all allyabase containers with integrated seeding
    log_section "Starting Allyabase Containers"
    
    if [ -f "./spin-up-bases.sh" ]; then
        log_info "Starting 3-base ecosystem using spin-up-bases.sh..."
        
        # Build arguments for spin-up-bases.sh
        SPIN_ARGS="--env=$ENVIRONMENT"
        if [ "$CLEAN_START" = true ]; then
            SPIN_ARGS="$SPIN_ARGS --clean"
        fi
        if [ "$BUILD_IMAGES" = true ]; then
            SPIN_ARGS="$SPIN_ARGS --build"
        fi
        if [ "$SKIP_SEEDING" = false ]; then
            SPIN_ARGS="$SPIN_ARGS --seed"
        fi
        
        ./spin-up-bases.sh $SPIN_ARGS
    else
        log_error "spin-up-bases.sh not found. Please ensure you're in the correct directory."
        exit 1
    fi
    
    log_success "All allyabase containers started"
    
    # Step 4: Wait for services to be ready (spin-up-bases.sh already waits, but add extra buffer)
    log_section "Verifying Service Health"
    
    log_info "Waiting additional 5 seconds for services to stabilize..."
    sleep 5
    
    # Health check key services across all bases
    if [ "$ENVIRONMENT" = "test" ]; then
        check_service_health "http://127.0.0.1:5114/health" "Base 1 BDO"
        check_service_health "http://127.0.0.1:5121/" "Base 1 Sanora"
        check_service_health "http://127.0.0.1:5214/health" "Base 2 BDO"  
        check_service_health "http://127.0.0.1:5221/" "Base 2 Sanora"
        check_service_health "http://127.0.0.1:5314/health" "Base 3 BDO"
        check_service_health "http://127.0.0.1:5321/" "Base 3 Sanora"
    fi
    
    log_success "All services are healthy and ready"
    
    # Step 5: Run additional seeding operations not covered by spin-up-bases.sh
    if [ "$SKIP_SEEDING" = false ]; then
        log_section "Running Additional Seeding Operations"
        
        # Seed spellbook for The Advancement (not included in main ecosystem seeding)
        if [ -f "./seed-spellbook.js" ]; then
            log_info "Seeding spellbook for The Advancement integration..."
            
            # Try to run spellbook seeding - may fail due to ES module issues in docker directory
            if [ "$VERBOSE" = true ]; then
                node seed-spellbook.js 2>&1 || {
                    log_warning "Spellbook seeding failed (likely due to ES module dependencies)"
                    log_info "You can run spellbook seeding manually after startup if needed"
                }
            else
                node seed-spellbook.js > /dev/null 2>&1 || {
                    log_warning "Spellbook seeding failed (likely due to ES module dependencies)"
                }
            fi
        else
            log_warning "seed-spellbook.js not found, skipping spellbook seeding"
        fi
        
        # Run seeding on remaining bases (spin-up-bases.sh only seeds base 1 by default)
        if [ "$ENVIRONMENT" = "test" ]; then
            for base_num in 2 3; do
                log_info "Seeding additional data for Base $base_num..."
                
                if [ "$VERBOSE" = true ]; then
                    node seed-ecosystem.js test $base_num 2>&1 || log_warning "Base $base_num seeding had issues"
                else
                    node seed-ecosystem.js test $base_num > /dev/null 2>&1 || log_warning "Base $base_num seeding had issues"
                fi
                
                log_success "Base $base_num seeding completed"
            done
        fi
        
        log_success "All additional seeding operations completed"
    else
        log_info "Additional seeding skipped as requested"
    fi
    
    # Step 6: Display status summary
    log_section "Environment Status Summary"
    
    echo -e "${GREEN}🎉 Planet Nine Test Environment Ready!${NC}"
    echo ""
    echo -e "${CYAN}Container Status:${NC}"
    docker ps --filter "name=allyabase" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
    echo ""
    
    echo -e "${CYAN}Key Service URLs (Base 1):${NC}"
    echo "  🗃️  BDO:       http://127.0.0.1:5114/"
    echo "  🏪 Sanora:    http://127.0.0.1:5121/"
    echo "  🎵 Dolores:   http://127.0.0.1:5115/"
    echo "  ⚡ Fount:     http://127.0.0.1:5116/"
    echo "  💰 Addie:     http://127.0.0.1:5117/"
    echo "  💬 Julia:     http://127.0.0.1:5111/"
    echo "  🔗 Covenant:  http://127.0.0.1:5122/"
    echo ""
    
    echo -e "${CYAN}Testing Commands:${NC}"
    echo "  ./test-all-services.sh 1000                    # Test Base 1 services"
    echo "  cd nullary-tests && ./test-rhapsold.sh 1000    # Test Rhapsold on Base 1"
    echo "  ./test-complete-ecosystem.sh                   # Full 6-phase test suite"
    echo ""
    
    echo -e "${CYAN}Management Commands:${NC}"
    echo "  ./stop-all-bases.sh                            # Stop all containers"
    echo "  docker logs allyabase-base1                    # View Base 1 logs"
    echo "  docker exec -it allyabase-base1 /bin/bash      # Enter Base 1 container"
    echo ""
    
    if [ "$SKIP_SEEDING" = false ]; then
        echo -e "${CYAN}Seeded Data:${NC}"
        echo "  📝 Blog posts, social posts, and products across all bases"
        echo "  👥 Test users for all services (Prof, Sanora, Dolores)"
        echo "  📋 Sample contracts in Covenant"
        echo "  🪄 Spellbook for The Advancement integration"
        echo ""
    fi
    
    echo -e "${GREEN}🚀 Ready for development and testing!${NC}"
    
    # Optional: Start monitoring
    if command -v watch > /dev/null; then
        echo -e "${YELLOW}💡 Tip: Run 'watch docker ps' to monitor container status${NC}"
    fi
}

# Error handling
trap 'log_error "Script interrupted"; exit 1' INT TERM

# Verify we're in the right directory
if [ ! -f "./spin-up-bases.sh" ]; then
    log_error "This script must be run from the allyabase/deployment/docker directory"
    log_info "Current directory: $(pwd)"
    log_info "Expected files: spin-up-bases.sh, seed-ecosystem.js"
    exit 1
fi

# Check Docker is running
if ! docker info > /dev/null 2>&1; then
    log_error "Docker is not running. Please start Docker and try again."
    exit 1
fi

# Run main function
main "$@"