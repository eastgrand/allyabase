#!/usr/bin/env node

/**
 * Test script for profile generator
 * Validates the profile structure and tag usage
 */

import { generateProfiles } from './examples/profiles/profile-generator.js';

console.log('🧪 Testing Profile Generator\n');

const profiles = generateProfiles();

console.log(`📊 Total profiles generated: ${profiles.length}`);
console.log('');

// Validate structure
console.log('✅ Validating profile structure...');
const firstProfile = profiles[0];
const requiredFields = ['name', 'email', 'bio', 'skills', 'website', 'location', 'tags', 'idothis'];
const missingFields = requiredFields.filter(field => !firstProfile[field]);

if (missingFields.length > 0) {
  console.log(`❌ Missing fields in profile: ${missingFields.join(', ')}`);
  process.exit(1);
} else {
  console.log('   All required fields present');
}

// Count profiles by tag
console.log('');
console.log('📈 Profiles by primary tag:');
const tagCounts = {};
profiles.forEach(profile => {
  const primaryTag = profile.tags[0];
  tagCounts[primaryTag] = (tagCounts[primaryTag] || 0) + 1;
});

Object.entries(tagCounts).sort((a, b) => b[1] - a[1]).forEach(([tag, count]) => {
  console.log(`   ${tag}: ${count} profiles`);
});

// Show sample profiles from different categories
console.log('');
console.log('🎭 Sample profiles by category:');
const categories = ['developer', 'designer', 'writer', 'artist', 'musician', 'consultant', 'teacher', 'healthcare', 'legal', 'finance', 'trades', 'realtor', 'chef', 'manager'];

categories.forEach(category => {
  const profile = profiles.find(p => p.tags.includes(category));
  if (profile) {
    console.log(`\n   ${category.toUpperCase()}: ${profile.name}`);
    console.log(`   Tags: ${profile.tags.join(', ')}`);
    console.log(`   IDothis: ${profile.idothis}`);
  }
});

console.log('\n✅ Profile generator test passed!');
