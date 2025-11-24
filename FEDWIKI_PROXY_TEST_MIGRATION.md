# Fedwiki Proxy Test Environment Migration Plan

## Overview

Migrate the Planet Nine test environment from direct port access to federated wiki proxy routing. This will make the test environment architecture match production, enable proper cross-base federation testing, and support the linkitylink base resolution feature.

## Current State

### Test Environment (Direct Port Access)
- BDO: `http://127.0.0.1:5114` (base 1), `5214` (base 2), `5314` (base 3)
- Fount: `http://127.0.0.1:5117`, `5217`, `5317`
- Addie: `http://127.0.0.1:5116`, `5216`, `5316`
- Covenant: `http://127.0.0.1:5122`, `5222`, `5322`
- Sanora: `http://127.0.0.1:5121`, `5221`, `5321`
- Dolores: `http://127.0.0.1:5118`, `5218`, `5318`
- Linkitylink: `http://127.0.0.1:3010` (standalone, not per-base yet)

### Production Architecture (Wiki Proxy)
- All services accessed via: `https://{subdomain}.allyabase.com/plugin/allyabase/{service}/...`
- Wiki-plugin-allyabase handles routing to backend services
- Base discovery via federated wiki network

## Target State

### Test Environment (Wiki Proxy)
- Base 1 Wiki: `http://127.0.0.1:4001` → routes to services on 51xx ports
- Base 2 Wiki: `http://127.0.0.1:4002` → routes to services on 52xx ports
- Base 3 Wiki: `http://127.0.0.1:4003` → routes to services on 53xx ports

Example routes:
- `http://127.0.0.1:4001/plugin/allyabase/bdo/...` → `http://127.0.0.1:5114/...`
- `http://127.0.0.1:4001/plugin/allyabase/fount/...` → `http://127.0.0.1:5117/...`
- `http://127.0.0.1:4001/plugin/allyabase/linkitylink/...` → `http://127.0.0.1:3010/...`

## Migration Steps

### Phase 1: Setup Fedwiki on Test Bases

1. **Add fedwiki to Docker/ecosystem config**
   - Location: `/Users/zachbabb/Work/planet-nine/allyabase/src/docker/`
   - Add wiki service to each of the 3 base containers
   - Configure wiki-plugin-allyabase with correct backend URLs
   - Ports: 4001, 4002, 4003 for wiki on bases 1, 2, 3

2. **Configure wiki-plugin-allyabase**
   - Each wiki instance needs config pointing to its base's services
   - Base 1 wiki config: BDO=5114, Fount=5117, Addie=5116, etc.
   - Base 2 wiki config: BDO=5214, Fount=5217, Addie=5216, etc.
   - Base 3 wiki config: BDO=5314, Fount=5317, Addie=5316, etc.

3. **Add linkitylink routing to wiki-plugin-allyabase**
   - Currently wiki-plugin-allyabase doesn't route to linkitylink
   - Need to add linkitylink service to plugin's route handlers
   - File: `/Users/zachbabb/Work/planet-nine/allyabase/src/wiki/wiki-plugin-allyabase/server/server.js`

### Phase 2: Update SDK Configurations

1. **bdo-js**
   - Support wiki proxy URL format
   - Auto-detect proxy vs direct based on URL pattern

2. **fount-js**
   - Same updates as bdo-js

3. **addie-js**
   - Same updates as bdo-js

4. **sessionless-node**
   - Shouldn't need changes (doesn't do HTTP)

5. **Other SDKs as needed**

### Phase 3: Update Test Scripts

1. **Sharon test suite**
   - Location: `/Users/zachbabb/Work/planet-nine/sharon/`
   - Update all service URLs to use wiki proxy format
   - Or add environment detection for proxy vs direct

2. **Integration tests**
   - Search for hardcoded port references
   - Update to use configurable base URLs

3. **CLAUDE.md test examples**
   - Update curl/fetch examples in documentation

### Phase 4: Update iOS/Android Configuration

1. **Configuration.swift**
   - Already has `wiki` environment mode
   - May need `test-wiki` mode for local wiki proxy testing
   - Update port mappings for wiki ports (4001, 4002, 4003)

2. **Android equivalent**
   - Similar configuration updates

### Phase 5: Linkitylink Per-Base Setup

1. **Run linkitylink per base**
   - Currently single instance on port 3010
   - Need instance per base: 3010 (base 1), 3011 (base 2), 3012 (base 3)
   - Or single instance with base-aware routing

2. **Add to wiki-plugin-allyabase**
   - Create `linkitylink.js` route handler
   - Add to server.js exports

## Files to Modify

### Docker/Infrastructure
- `/Users/zachbabb/Work/planet-nine/allyabase/src/docker/docker-compose.yml` (or equivalent)
- `/Users/zachbabb/Work/planet-nine/allyabase/src/docker/ecosystem.config.js` (pm2 config)

### Wiki Plugin
- `/Users/zachbabb/Work/planet-nine/allyabase/src/wiki/wiki-plugin-allyabase/server/server.js`
- `/Users/zachbabb/Work/planet-nine/allyabase/src/wiki/wiki-plugin-allyabase/server/linkitylink.js` (new file)

### SDKs
- `/Users/zachbabb/Work/planet-nine/allyabase/src/sdks/bdo-js/`
- `/Users/zachbabb/Work/planet-nine/allyabase/src/sdks/fount-js/`
- `/Users/zachbabb/Work/planet-nine/allyabase/src/sdks/addie-js/`

### Test Scripts
- `/Users/zachbabb/Work/planet-nine/sharon/` (test suite)
- Various `test.js` or `*.test.js` files across repos

### iOS App
- `/Users/zachbabb/Work/planet-nine/the-advancement/src/The Advancement/Shared (App)/Configuration.swift`

### Linkitylink
- `/Users/zachbabb/Work/planet-nine/linkitylink/server.js` (if multi-base support needed)

## Backward Compatibility

Keep the current direct-port test mode available:
- `test` environment = direct port access (current)
- `test-wiki` environment = wiki proxy routing (new)

This allows gradual migration and fallback if issues arise.

## Testing Checklist

- [ ] Wiki starts on port 4001 for base 1
- [ ] Wiki starts on port 4002 for base 2
- [ ] Wiki starts on port 4003 for base 3
- [ ] BDO routes work through wiki proxy
- [ ] Fount routes work through wiki proxy
- [ ] Addie routes work through wiki proxy
- [ ] Linkitylink routes work through wiki proxy
- [ ] Cross-base resolution works (base 1 can find base 2's services)
- [ ] Sharon tests pass with wiki proxy URLs
- [ ] iOS app can use wiki proxy mode
- [ ] Linkitylink handoff flow works with base emojicode resolution

## Estimated Effort

- Phase 1 (Wiki Setup): 2-4 hours
- Phase 2 (SDK Updates): 2-3 hours
- Phase 3 (Test Scripts): 3-4 hours
- Phase 4 (iOS/Android): 1-2 hours
- Phase 5 (Linkitylink Per-Base): 1-2 hours
- Testing & Debugging: 2-4 hours

**Total: 1-2 days of focused work**

## Context for Resuming

This migration was planned while implementing the linkitylink web-to-app handoff feature. The handoff needs to resolve base emojicodes (like `💚☮️💚🏴‍☠️`) to find the correct linkitylink instance. This requires:

1. The app queries its home Fount for base info
2. Fount returns the base's wiki URL
3. App accesses linkitylink via wiki proxy: `{wiki-url}/plugin/allyabase/linkitylink/...`

Without the wiki proxy in test environment, we can't properly test cross-base federation and base discovery.

### Related Files Already Modified

- `WebHandoffViewController.swift` - Has base emojicode resolution via Fount
- `Configuration.swift` - Has linkitylink service and wiki environment mode
- `linkitylink/server.js` - Has handoff endpoints
- `linkitylink/lib/app-handoff.js` - Has handoff state management

### Current Workaround

Users can click "Use Default Base" in the handoff UI to skip base resolution and use the hardcoded default linkitylink URL. This works for single-base testing but not for cross-base scenarios.

## Phase 6: Per-Base Visual Theming

### Overview

To easily distinguish between the three test bases during development and testing, each wiki instance will have a distinct color theme. This prevents confusion when working with multiple bases and makes it immediately obvious which base you're viewing.

### Central Configuration

All base configuration (ports, emojicodes, theme colors) is defined in:
```
allyabase/test-bases-config.json
```

CSS files are generated from this config using:
```bash
node scripts/generate-theme-css.js
```

### Theme Files Location

```
allyabase/
├── test-bases-config.json       # Central config - edit colors here
├── scripts/
│   └── generate-theme-css.js    # CSS generator script
└── test-themes/
    ├── custom-style-base1.css   # Generated - DO NOT EDIT DIRECTLY
    ├── custom-style-base2.css   # Generated - DO NOT EDIT DIRECTLY
    └── custom-style-base3.css   # Generated - DO NOT EDIT DIRECTLY
```

### Color Schemes (from test-bases-config.json)

| Base | Theme Name | Emojicode | Background | Accent |
|------|-----------|-----------|------------|--------|
| 1 | Allyabase | 💚☮️💚🏴‍☠️ | `#1a0033` | `#7fff7f` (green) |
| 2 | Ocean | 🌊💙🐋🦈 | `#0a1a3a` | `#7fffff` (cyan) |
| 3 | Ember | 🔥❤️‍🔥🌋⚔️ | `#3a0a1a` | `#ffd700` (gold) |

### Implementation Steps

1. **Copy theme files during wiki setup**
   - Base 1: Copy `custom-style-base1.css` to `/root/.wiki/client/custom-style.css`
   - Base 2: Copy `custom-style-base2.css` to `/root/.wiki/client/custom-style.css`
   - Base 3: Copy `custom-style-base3.css` to `/root/.wiki/client/custom-style.css`

2. **Inject CSS into wiki-client HTML**
   - Add `<link rel="stylesheet" href="/client/custom-style.css">` to default.html
   - This is done by the setup script after npm install

3. **Configure pm2/Docker to use correct theme per base**
   - Update ecosystem config to copy base-specific CSS during startup
   - Or bake CSS into each base's container image

### Theme Features

Each theme includes:
- **Gradient backgrounds**: Deep, rich colors for dark mode
- **Glowing text**: Accent color text-shadow effects
- **Button styling**: Gradient buttons with glow on hover
- **Code blocks**: Dark backgrounds with accent-colored text
- **Scrollbars**: Custom styled to match theme
- **Base identifier banner**: Optional fixed banner at top showing base number
- **Plugin styling**: Allyabase-specific component styles

### Visual Quick Reference

```
Base 1 (Purple/Green):
┌─────────────────────────────┐
│ ████ BASE 1 - ALLYABASE ████│ <- Green banner
├─────────────────────────────┤
│ Deep purple background      │
│ Green glowing text          │
│ Purple borders              │
└─────────────────────────────┘

Base 2 (Blue/Cyan):
┌─────────────────────────────┐
│ ████ BASE 2 - OCEAN █████████│ <- Cyan banner
├─────────────────────────────┤
│ Deep blue background        │
│ Cyan glowing text           │
│ Blue borders                │
└─────────────────────────────┘

Base 3 (Red/Gold):
┌─────────────────────────────┐
│ ████ BASE 3 - EMBER █████████│ <- Gold banner
├─────────────────────────────┤
│ Dark red background         │
│ Gold glowing text           │
│ Red borders                 │
└─────────────────────────────┘
```

### Estimated Effort

- Theme CSS files: 30 minutes (DONE)
- Setup script modifications: 30 minutes
- Testing: 30 minutes

**Total: 1-2 hours**
