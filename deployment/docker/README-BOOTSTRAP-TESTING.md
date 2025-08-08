# Bootstrap + Ecosystem Testing for Planet Nine

Complete testing system that combines allyabase bootstrap functionality with comprehensive ecosystem testing, creating a three-base leader/follower architecture and validating the entire distributed system.

## 🚀 Quick Start

### Single Command - Complete Bootstrap + Ecosystem Test
```bash
# Complete test with bootstrap functionality
./test-bootstrap-ecosystem.sh --continue-on-failure --apps=core

# With ngrok for remote testing
./test-bootstrap-ecosystem.sh --use-ngrok --continue-on-failure

# Production readiness test
./test-bootstrap-ecosystem.sh --apps=all --cleanup
```

## 🏗️ Architecture

### Three-Base Leader/Follower Setup
```
┌─────────────────┐    announce    ┌─────────────────┐
│   Base 2        │───────────────▶│   Base 1        │
│   (Follower)    │                │   (Leader)      │
│   Port: 2000    │                │   Port: 1000    │
│   Star: 2000    │                │   Star: 1000    │
└─────────────────┘                └─────────────────┘
                                            ▲
                                            │ announce
                                            │
                                   ┌─────────────────┐
                                   │   Base 3        │
                                   │   (Follower)    │
                                   │   Port: 3000    │
                                   │   Star: 3000    │
                                   └─────────────────┘
```

### Bootstrap Integration
- **Base 1 (Leader)**: Receives announcements, manages base discovery
- **Base 2 (Follower)**: Announces to leader every 5 minutes
- **Base 3 (Follower)**: Announces to leader every 7.5 minutes
- **Cross-Base Discovery**: Apps can discover all bases through bootstrap system
- **Cryptographic Security**: All announcements are signed and verified

## 📋 Test Phases

### Phase 1: Infrastructure Setup
- Starts 3 allyabase Docker containers
- Sets up ngrok tunnels (if requested)
- Creates bootstrap configurations
- Starts bootstrap services
- Waits for initial announcements

### Phase 2: Bootstrap Validation
- Tests leader bootstrap functionality
- Tests follower bootstrap functionality  
- Validates cross-base announcements
- Verifies signature validation

### Phase 3: Service Validation
- Tests all 12+ allyabase services on each base
- Validates service discovery through bootstrap
- Tests with localhost or ngrok URLs

### Phase 4: Application Testing
- Tests Nullary applications on all bases
- Uses bootstrap for base discovery
- Validates cross-base application communication

### Phase 5: Cross-Base Interactions
- StackChat P2P between all base combinations
- MyBase aggregation from multiple bases
- Content discovery across the network

### Phase 6: Bootstrap Discovery
- Validates leader has received announcements
- Tests application-based base discovery
- Cross-base content aggregation via bootstrap

### Phase 7: Visual Demonstration
- Nexus Portal with bootstrap integration
- Visual validation of distributed architecture
- Browser-based ecosystem showcase

### Phase 8: Comprehensive Reporting
- Complete test report with bootstrap metrics
- Architecture validation summary
- Performance and reliability metrics

## 🔧 Configuration

### Environment Variables
```bash
# Test configuration
CONTINUE_ON_FAILURE=true     # Continue despite failures
NULLARY_APPS=core           # Which apps to test
CROSS_BASE_TESTING=true     # Test cross-base interactions
USE_NGROK=true              # Use ngrok for remote testing
BOOTSTRAP_TESTING=true      # Include bootstrap functionality

# Cleanup
CLEANUP_AFTER_TEST=true     # Clean up after testing
```

### Command Line Options
```bash
# Test scope
--apps=core                 # Test core apps only
--apps=all                  # Test all applications
--apps=rhapsold,ninefy      # Test specific apps

# Testing modes
--continue-on-failure       # Don't stop on first failure
--use-ngrok                 # Use ngrok tunnels
--no-bootstrap             # Skip bootstrap testing
--no-cross-base            # Skip cross-base testing

# Management
--cleanup                  # Clean up after completion
--help                     # Show help message
```

## 📁 Files Structure

### Main Test Scripts
- **`test-bootstrap-ecosystem.sh`** - Main comprehensive test script
- **`setup-bootstrap-configs.sh`** - Creates bootstrap configurations
- **`start-all-bootstrap-services.sh`** - Starts bootstrap services
- **`verify-bootstrap-announcements.sh`** - Validates announcements
- **`stop-all-bootstrap-services.sh`** - Stops bootstrap services
- **`test-bootstrap-functionality.sh`** - Tests individual base bootstrap

### Generated Files
- **`bootstrap-configs/`** - Bootstrap configuration files
- **`/tmp/bootstrap-test-logs/`** - Bootstrap service logs
- **`/tmp/ngrok-tunnels/`** - ngrok tunnel logs (if using ngrok)

## 🔍 Bootstrap Configuration Details

### Base 1 (Leader) Configuration
```json
{
  "baseInfo": {
    "name": "Planet Nine Test Leader Base",
    "starSystemNumber": 1000
  },
  "networking": {
    "announceToBase": [],
    "listenForAnnouncements": true
  },
  "bootstrap": {
    "autoAnnounce": false,
    "announcementInterval": 0
  }
}
```

### Base 2 & 3 (Followers) Configuration  
```json
{
  "baseInfo": {
    "name": "Planet Nine Test Follower Base X",
    "starSystemNumber": 2000/3000
  },
  "networking": {
    "announceToBase": [
      {
        "name": "Planet Nine Test Leader Base",
        "baseUrl": "http://localhost:5114",
        "enabled": true
      }
    ],
    "listenForAnnouncements": true
  },
  "bootstrap": {
    "autoAnnounce": true,
    "announcementInterval": 300/450
  }
}
```

## 🧪 Individual Test Components

### Bootstrap Service Testing
```bash
# Test leader functionality
./test-bootstrap-functionality.sh 1000 --leader

# Test follower functionality  
./test-bootstrap-functionality.sh 2000 --follower
./test-bootstrap-functionality.sh 3000 --follower
```

### Manual Bootstrap Management
```bash
# Setup configurations
./setup-bootstrap-configs.sh

# Start services
./start-all-bootstrap-services.sh

# Check announcements
./verify-bootstrap-announcements.sh

# Stop services
./stop-all-bootstrap-services.sh
```

### Service Health Checks
```bash
# Bootstrap service health
curl http://localhost:4242/health  # Base 1 (Leader)
curl http://localhost:4243/health  # Base 2 (Follower)
curl http://localhost:4244/health  # Base 3 (Follower)

# Bootstrap service status
curl http://localhost:4242/status
curl http://localhost:4243/status  
curl http://localhost:4244/status
```

## 📊 Expected Test Results

### Successful Test Run
```
🎉 SUCCESS: Complete bootstrap + ecosystem validation passed!

🌟 Achievement Unlocked: Full Bootstrap + Distributed System Validation
   ✅ All allyabase microservices functioning
   ✅ Leader/follower bootstrap architecture established
   ✅ Cross-base announcements and discovery working
   ✅ All Nullary applications operational on all bases
   ✅ Cross-base interactions working
   ✅ End-to-end distributed ecosystem integration confirmed
```

### Key Metrics Validated
- **3 Allyabase instances** tested (Leader + 2 Followers)
- **12+ microservices** validated across all bases
- **Bootstrap announcements** working correctly
- **Leader/follower architecture** established
- **Cross-base discovery** functional
- **All Nullary applications** tested on all bases
- **P2P cross-base interactions** validated

## 🔧 Troubleshooting

### Common Issues

**Bootstrap services not starting**
```bash
# Check port availability
lsof -i :4242,4243,4244

# Check logs
tail -f /tmp/bootstrap-test-logs/*-bootstrap.log

# Restart services
./stop-all-bootstrap-services.sh
./start-all-bootstrap-services.sh
```

**Announcements not working**
```bash
# Check leader logs for received announcements
grep "Received valid announcement" /tmp/bootstrap-test-logs/Base1-Leader-bootstrap.log

# Check follower logs for sent announcements  
grep "Successfully announced" /tmp/bootstrap-test-logs/Base2-Follower-bootstrap.log
grep "Successfully announced" /tmp/bootstrap-test-logs/Base3-Follower-bootstrap.log

# Manual announcement verification
./verify-bootstrap-announcements.sh
```

**Docker containers not starting**
```bash
# Check existing containers
docker ps -a | grep allyabase

# Clean restart
./spin-up-bases-corrected.sh --clean --build
```

**ngrok tunnel issues**
```bash
# Check tunnel status
./get-ngrok-urls.sh --list

# Restart tunnels
./stop-ngrok-tunnels.sh
./setup-ngrok-tunnels.sh
```

### Debug Mode
```bash
# Enable verbose logging
LOG_LEVEL=debug ./test-bootstrap-ecosystem.sh --continue-on-failure

# Check all logs
tail -f /tmp/bootstrap-test-logs/*.log
tail -f /tmp/ngrok-tunnels/*.log
```

## 🚀 Production Deployment

### Bootstrap Configuration
The test system creates production-ready bootstrap configurations:
- **Cryptographic security** with secp256k1 signatures
- **Configurable announcement intervals** 
- **User management** with public key whitelists
- **Content feed integration** for external sources
- **Service discovery** with automatic URL generation

### Scaling Beyond Testing
```bash
# Production deployment with more bases
# 1. Copy and modify bootstrap configurations
# 2. Adjust port offsets and service URLs
# 3. Update announcement targets
# 4. Deploy with proper security configurations
```

## 📚 Integration with Existing Systems

### Ecosystem Testing Integration
This system extends the existing Planet Nine ecosystem testing with:
- **Bootstrap functionality** as a new test phase
- **Leader/follower architecture** validation
- **Cross-base discovery** testing
- **Enhanced reporting** with bootstrap metrics

### Nullary Application Integration
All Nullary applications now automatically:
- **Discover bases** through bootstrap system
- **Use bootstrap URLs** for service connections
- **Support distributed testing** across multiple bases
- **Validate cross-base functionality**

## 🌟 Key Features

✅ **Complete Integration** - Bootstrap + ecosystem in single command
✅ **Leader/Follower Architecture** - Realistic distributed setup  
✅ **Cryptographic Security** - Signed announcements and verification
✅ **Cross-Base Discovery** - Applications discover bases automatically
✅ **ngrok Support** - Remote testing capabilities
✅ **Comprehensive Validation** - 8-phase testing process
✅ **Production Ready** - Real bootstrap configurations
✅ **Detailed Reporting** - Complete metrics and validation

---

The bootstrap testing system provides a complete validation of Planet Nine's distributed architecture, ensuring that bases can discover each other, applications can connect across the network, and the entire ecosystem functions as a cohesive distributed system.