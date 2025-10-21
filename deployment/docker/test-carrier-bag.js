#!/usr/bin/env node

/**
 * CarrierBag Headless Test
 *
 * Fetches all seeded BDOs by emojicode and tests save spell collection mapping.
 *
 * Usage: node test-carrier-bag.js [environment] [base_number]
 * Environment: 'local' or 'test' (default: test)
 * Base number: 1, 2, or 3 for test environment (default: 1)
 */

import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

// Configuration
const ENVIRONMENT = process.argv[2] || 'test';
const BASE_NUMBER = process.argv[3] || '1';

console.log(`🧪 CarrierBag Headless Test`);
console.log(`📍 Environment: ${ENVIRONMENT}`);
console.log(`🏠 Base: ${BASE_NUMBER}`);
console.log('==========================================\n');

// Get BDO service URL
const getBDOServiceURL = (env, baseNum) => {
  if (env === 'local') {
    return 'http://localhost:3003';
  } else if (env === 'test') {
    const portBase = 5000 + (parseInt(baseNum) * 100);
    return `http://localhost:${portBase + 14}`;
  } else {
    return `https://${env}.bdo.allyabase.com`;
  }
};

const BDO_URL = getBDOServiceURL(ENVIRONMENT, BASE_NUMBER);

// Create empty carrier bag
function createEmptyCarrierBag() {
  return {
    cookbook: [],
    apothecary: [],
    gallery: [],
    bookshelf: [],
    familiarPen: [],
    machinery: [],
    metallics: [],
    music: [],
    oracular: [],
    greenHouse: [],
    closet: [],
    games: [],
    events: [],
    contracts: [],
    stacks: []
  };
}

// Infer collection from BDO type
function inferCollection(type) {
  const typeMap = {
    'recipe': 'cookbook',
    'ebook': 'bookshelf',
    'book': 'bookshelf',
    'article': 'bookshelf',
    'room': 'stacks',
    'popup': 'events',
    'popup-post': 'events',
    'popup-location': 'events',
    'event': 'events',
    'music-player': 'music',
    'music': 'music',
    'contract': 'contracts',
    'contract-signing-ui': 'contracts',
    'service-provider': 'stacks', // IDothis providers
    'product': 'stacks'
  };

  return typeMap[type] || 'stacks';
}

// Extract collection from save spell components
function extractCollection(svgContent, bdoType) {
  if (!svgContent) return null;

  // Find save spell elements
  const saveSpellRegex = /spell="save"[^>]*spell-components='({[^']+})'/g;
  const collectSpellRegex = /spell="collect"[^>]*spell-components='({[^']+})'/g;

  let match;

  // Try save spell first
  match = saveSpellRegex.exec(svgContent);
  if (!match) {
    // Try collect spell (old name for save)
    match = collectSpellRegex.exec(svgContent);
  }

  if (match && match[1]) {
    try {
      const components = JSON.parse(match[1]);
      return components.collection || components.carrierBag || null;
    } catch (error) {
      console.warn(`  ⚠️  Failed to parse spell-components: ${error.message}`);
      return null;
    }
  }

  return null;
}

// Fetch BDO by emojicode
async function fetchBDOByEmojicode(emojicode) {
  try {
    const encodedEmojicode = encodeURIComponent(emojicode);
    const url = `${BDO_URL}/emoji/${encodedEmojicode}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`  ❌ Failed to fetch BDO for ${emojicode}: ${error.message}`);
    return null;
  }
}

// Read seed output file to get emojicodes
function getSeedEmojicodes() {
  const seedOutputPath = path.join(process.cwd(), 'seed-output.json');

  if (!fs.existsSync(seedOutputPath)) {
    console.log('⚠️  No seed-output.json found. Please run seed-ecosystem.js first.');
    console.log('   This test needs the emojicodes from the seed script.');
    return null;
  }

  try {
    const seedData = JSON.parse(fs.readFileSync(seedOutputPath, 'utf8'));
    return seedData.emojicodedReferences || [];
  } catch (error) {
    console.error('❌ Failed to read seed-output.json:', error.message);
    return null;
  }
}

// Main test function
async function testCarrierBag() {
  console.log(`🔍 Fetching seeded BDOs from ${BDO_URL}...\n`);

  // Get emojicodes from seed output
  const seedReferences = getSeedEmojicodes();

  if (!seedReferences || seedReferences.length === 0) {
    console.log('❌ No seed references found. Run this instead:');
    console.log('   1. node seed-ecosystem.js test 1');
    console.log('   2. node test-carrier-bag.js test 1\n');
    process.exit(1);
  }

  console.log(`📦 Found ${seedReferences.length} seeded BDOs\n`);

  // Initialize carrier bag
  const carrierBag = createEmptyCarrierBag();
  let successCount = 0;
  let failCount = 0;

  // Process each BDO
  for (const ref of seedReferences) {
    console.log(`\n📖 Processing: ${ref.type} - ${ref.title}`);
    console.log(`   Emojicode: ${ref.emojiShortcode || ref.emojicode}`);

    const emojicode = ref.emojiShortcode || ref.emojicode;
    if (!emojicode) {
      console.log('   ❌ No emojicode found, skipping');
      failCount++;
      continue;
    }

    // Fetch BDO
    const bdoData = await fetchBDOByEmojicode(emojicode);

    if (!bdoData || !bdoData.bdo) {
      console.log('   ❌ Failed to fetch BDO');
      failCount++;
      continue;
    }

    // Determine collection
    let collection = extractCollection(bdoData.bdo.svgContent, bdoData.bdo.type);

    if (!collection) {
      // Infer from type
      collection = inferCollection(bdoData.bdo.type);
      console.log(`   🔍 Inferred collection from type: ${bdoData.bdo.type} → ${collection}`);
    } else {
      console.log(`   ✅ Found collection in save spell: ${collection}`);
    }

    // Create item for carrier bag
    const item = {
      title: bdoData.bdo.title || ref.title || 'Untitled Item',
      type: bdoData.bdo.type || 'item',
      emojicode: emojicode,
      bdoPubKey: bdoData.pubKey,
      savedAt: new Date().toISOString(),
      description: bdoData.bdo.description || ''
    };

    // Add type-specific metadata
    if (bdoData.bdo.metadata) {
      item.metadata = bdoData.bdo.metadata;
    }

    // Save to collection
    if (!carrierBag[collection]) {
      console.log(`   ⚠️  Unknown collection "${collection}", using stacks`);
      collection = 'stacks';
    }

    carrierBag[collection].push(item);
    successCount++;
    console.log(`   💾 Saved to ${collection}`);
  }

  // Print results
  console.log('\n');
  console.log('='.repeat(80));
  console.log('🎉 CarrierBag Test Complete!');
  console.log('='.repeat(80));
  console.log(`✅ Success: ${successCount} items`);
  console.log(`❌ Failed: ${failCount} items`);
  console.log('');

  // Print collection summary
  console.log('📊 CarrierBag Summary:');
  console.log('─'.repeat(80));

  const collectionIcons = {
    cookbook: '🍳',
    apothecary: '🧪',
    gallery: '🖼️',
    bookshelf: '📚',
    familiarPen: '🐾',
    machinery: '⚙️',
    metallics: '💎',
    music: '🎵',
    oracular: '🔮',
    greenHouse: '🌿',
    closet: '👔',
    games: '🎮',
    events: '🎫',
    contracts: '📜',
    stacks: '🏠'
  };

  for (const [collectionName, items] of Object.entries(carrierBag)) {
    const icon = collectionIcons[collectionName] || '📦';
    const count = items.length;

    if (count > 0) {
      console.log(`\n${icon} ${collectionName} (${count} items):`);
      items.forEach((item, index) => {
        console.log(`   ${index + 1}. ${item.title}`);
        console.log(`      Type: ${item.type}`);
        console.log(`      Emojicode: ${item.emojicode}`);
      });
    } else {
      console.log(`\n${icon} ${collectionName}: Empty`);
    }
  }

  // Save to file
  const outputPath = path.join(process.cwd(), 'carrier-bag-test-output.json');
  fs.writeFileSync(outputPath, JSON.stringify(carrierBag, null, 2), 'utf8');
  console.log('\n');
  console.log('─'.repeat(80));
  console.log(`📁 CarrierBag saved to: ${outputPath}`);
  console.log('─'.repeat(80));
  console.log('');

  // Validate collection mappings
  console.log('🔍 Collection Mapping Validation:');
  console.log('─'.repeat(80));

  const expectedMappings = {
    'recipe': 'cookbook',
    'music': 'music',
    'music-player': 'music',
    'room': 'stacks',
    'event': 'events',
    'popup-post': 'events',
    'book': 'bookshelf',
    'article': 'bookshelf',
    'contract-signing-ui': 'contracts'
  };

  for (const [collectionName, items] of Object.entries(carrierBag)) {
    items.forEach(item => {
      const expectedCollection = expectedMappings[item.type];
      if (expectedCollection && expectedCollection !== collectionName) {
        console.log(`❌ Mapping Error: ${item.type} in ${collectionName}, expected ${expectedCollection}`);
        console.log(`   Item: ${item.title}`);
      } else if (expectedCollection) {
        console.log(`✅ ${item.type} → ${collectionName} (correct)`);
      }
    });
  }

  console.log('');
}

// Run the test
testCarrierBag().catch(error => {
  console.error('💥 Fatal error:', error);
  process.exit(1);
});
