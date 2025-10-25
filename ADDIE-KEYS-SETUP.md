# Addie API Keys Setup

## Overview

The Addie service can use AI providers (OpenAI and Anthropic) for enhanced functionality. API keys are configured via a gitignored configuration file for security.

## Setup Instructions

### 1. Copy the Template

```bash
cp addie-keys.env.template addie-keys.env
```

### 2. Add Your API Keys

Edit `addie-keys.env` and add your actual API keys:

```bash
# OpenAI API Key
OPENAI_API_KEY=sk-your-actual-openai-key-here

# Anthropic API Key
ANTHROPIC_API_KEY=sk-ant-your-actual-anthropic-key-here
```

### 3. Get API Keys

**OpenAI:**
- Visit: https://platform.openai.com/api-keys
- Create a new API key
- Copy and paste into `addie-keys.env`

**Anthropic:**
- Visit: https://console.anthropic.com/settings/keys
- Create a new API key
- Copy and paste into `addie-keys.env`

## Usage

Once configured, the keys will be automatically loaded when running:

```bash
cd deployment/docker
./spin-up-bases.sh --clean --build
```

You'll see:
```
🔑 Found Addie API keys configuration
   ✅ OpenAI API key configured
   ✅ Anthropic API key configured
```

## Security Notes

- ✅ `addie-keys.env` is gitignored and will **never** be committed
- ✅ Keys are only passed as environment variables to Docker containers
- ✅ Keys are stored locally on your development machine
- ⚠️  Never share your `addie-keys.env` file
- ⚠️  Never commit API keys to git

## Optional

API keys are **optional**. If you don't configure them:
- The spin-up script will show: `ℹ️  No Addie API keys found (optional)`
- Addie service will run without AI provider functionality
- All other services will work normally

## Troubleshooting

### Keys not being detected

Make sure:
1. File is named exactly `addie-keys.env` (not `.txt` or other extension)
2. File is in the `/allyabase` directory
3. Environment variables are exported (no spaces around `=`):
   ```bash
   OPENAI_API_KEY=sk-...
   # NOT: OPENAI_API_KEY = sk-...
   ```

### Keys not working in Addie

Check Docker container logs:
```bash
docker logs allyabase-base1 | grep -i "api.*key"
```

Verify environment variables are set in container:
```bash
docker exec allyabase-base1 env | grep -E "(OPENAI|ANTHROPIC)"
```
