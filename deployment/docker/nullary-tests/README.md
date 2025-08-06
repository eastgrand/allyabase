# The Nullary Application Test Scripts

## Overview

This directory contains comprehensive test scripts for all Nullary applications, designed to work with the multi-base allyabase testing infrastructure. Each app test validates core functionality, content creation, and cross-base interactions.

## Applications Tested

1. **blogary** - Blog creation and reading
2. **eventary** - Event management and scheduling  
3. **idothis** - Business service listings
4. **lexary** - Microblogging and short posts
5. **mybase** - Social networking aggregation
6. **ninefy** - Marketplace and commerce
7. **photary** - Photo sharing and galleries
8. **postary** - General posting and sharing
9. **rhapsold** - Minimalist blogging platform
10. **screenary** - Multi-purpose social app
11. **stackchat** - P2P messaging
12. **viewaris** - Video content (TikTok-style)
13. **viewary** - Video sharing
14. **wikiary** - Wiki and knowledge sharing

## Test Strategy

### Core Test Areas
- **Application Launch**: Verify Tauri app starts correctly
- **Base Connection**: Connect to allyabase services (BDO, Fount, Sanora)
- **Content Creation**: Create posts/content specific to each app
- **Content Retrieval**: Fetch and display created content
- **Cross-Base Interaction**: Test content sharing across different bases

### Multi-Base Testing
Each test script supports testing against different base configurations:
- Base 1: localhost:40xx ports
- Base 2: localhost:50xx ports  
- Base 3: localhost:60xx ports

## Usage

```bash
# Test all Nullary apps against Base 1
./test-all-nullary-apps.sh 1000

# Test specific app against Base 2
./test-lexary.sh 2000

# Test with failure tolerance
./test-all-nullary-apps.sh 1000 --continue-on-failure
```