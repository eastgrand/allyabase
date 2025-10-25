/**
 * Familiar Pen Examples for Test Environment
 *
 * These familiar posts demonstrate:
 * - Pet and companion profiles
 * - Save spell for adding to carrierBag "familiarPen" collection
 * - Personality traits, abilities, and care requirements
 */

import sessionless from 'sessionless-node';

export const familiarPenPosts = [
  {
    id: 'familiar-luna-cat-001',
    uuid: sessionless.generateUUID(),
    type: 'cat',
    name: 'Luna',
    species: 'Domestic Cat',
    breed: 'Tuxedo',
    age: '3 years',
    description: 'An elegant tuxedo cat with striking green eyes and a regal demeanor. Luna is both independent and affectionate, choosing her cuddle moments carefully.',
    personality: [
      'Independent',
      'Curious',
      'Playful at night',
      'Selective with affection',
      'Excellent mouser'
    ],
    abilities: [
      'Silent stalking',
      'Night vision',
      'Acrobatic jumping',
      'Purr therapy',
      'Window watching expert'
    ],
    care: [
      'Dry food twice daily',
      'Fresh water always',
      'Daily playtime with feather toys',
      'Weekly brushing',
      'Clean litter box daily'
    ],
    favoriteActivities: [
      'Chasing red laser dots',
      'Bird watching from windows',
      'Midnight zoomies',
      'Cardboard box exploration',
      'Napping in sunbeams'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=400',
    tags: ['cat', 'tuxedo', 'familiar', 'pet', 'independent'],
    metadata: {
      adoption: 'Shelter rescue, 2021',
      spayedNeutered: true,
      microchipped: true,
      goodWithKids: true,
      goodWithPets: 'selective'
    }
  },
  {
    id: 'familiar-merlin-owl-002',
    uuid: sessionless.generateUUID(),
    type: 'bird',
    name: 'Merlin',
    species: 'Barn Owl',
    breed: 'Tyto alba',
    age: '5 years',
    description: 'A wise and majestic barn owl with heart-shaped facial disc and golden plumage. Merlin is a mystical companion with exceptional hunting skills and silent flight.',
    personality: [
      'Wise and observant',
      'Nocturnal',
      'Patient hunter',
      'Loyal companion',
      'Calm demeanor'
    ],
    abilities: [
      'Silent flight',
      'Night hunting',
      'Exceptional hearing',
      'Head rotation (270°)',
      'Message delivery'
    ],
    care: [
      'Fresh mice or appropriate prey',
      'Clean water',
      'Large aviary or free flight',
      'Perching branches',
      'Regular health checks'
    ],
    favoriteActivities: [
      'Twilight hunting',
      'Perching on high places',
      'Grooming feathers',
      'Hooting at dawn',
      'Watching the moon'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551847677-dc82d764e1eb?w=400',
    tags: ['owl', 'barn-owl', 'familiar', 'magical', 'nocturnal'],
    metadata: {
      wildRescue: true,
      rehabilitated: true,
      permits: 'Licensed for falconry',
      habitat: 'Outdoor aviary with indoor roost',
      specialNeeds: 'Requires specialized care'
    }
  },
  {
    id: 'familiar-shadowpaw-dog-003',
    uuid: sessionless.generateUUID(),
    type: 'dog',
    name: 'Shadowpaw',
    species: 'Domestic Dog',
    breed: 'Black German Shepherd',
    age: '4 years',
    description: 'A loyal and protective black German Shepherd with an all-black coat and amber eyes. Shadowpaw is intelligent, trainable, and forms deep bonds with their human.',
    personality: [
      'Loyal and protective',
      'Highly intelligent',
      'Energetic',
      'Eager to please',
      'Gentle with family'
    ],
    abilities: [
      'Advanced obedience',
      'Scent tracking',
      'Protective instincts',
      'Agility training',
      'Emotional support'
    ],
    care: [
      'High-quality dog food twice daily',
      'Daily exercise (2+ hours)',
      'Mental stimulation',
      'Weekly brushing',
      'Regular vet checkups'
    ],
    favoriteActivities: [
      'Running in open fields',
      'Fetch and retrieve games',
      'Training sessions',
      'Swimming',
      'Protecting the family'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=400',
    tags: ['dog', 'german-shepherd', 'familiar', 'loyal', 'protective'],
    metadata: {
      training: 'Advanced obedience certified',
      spayedNeutered: true,
      microchipped: true,
      goodWithKids: true,
      activityLevel: 'very high'
    }
  }
];

/**
 * Generate SVG for familiar card
 * Single button with save spell to familiarPen collection
 *
 * @param {Object} familiar - Familiar object
 * @param {string} familiarBDOPubKey - PubKey of this familiar's BDO
 * @returns {string} SVG string
 */
export function generateFamiliarSVG(familiar, familiarBDOPubKey) {
  const icon = familiar.type === 'cat' ? '🐱' : familiar.type === 'bird' ? '🦉' : '🐕';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 340" width="400" height="340">
  <defs>
    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#14b8a6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0d9488;stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#14b8a6" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .familiar-name {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 20px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .familiar-breed {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: #5eead4;
      text-anchor: middle;
    }
    .familiar-meta {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #2dd4bf;
      text-anchor: start;
    }
    .familiar-description {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #d1d5db;
      text-anchor: start;
    }
    .trait-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: #9ca3af;
      text-anchor: start;
    }
    .section-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      font-weight: bold;
      fill: #5eead4;
      text-anchor: start;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: #14b8a6;
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .save-button:hover {
      filter: url(#saveGlow);
    }
    .button-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 16px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
      dominant-baseline: middle;
      pointer-events: none;
    }
  </style>

  <!-- Background -->
  <rect x="0" y="0" width="400" height="340" fill="#1a0033" rx="12"/>

  <!-- Icon -->
  <text x="200" y="35" text-anchor="middle" font-size="32">${icon}</text>

  <!-- Familiar Info -->
  <text class="familiar-name" x="200" y="70">${familiar.name}</text>
  <text class="familiar-breed" x="200" y="88">${familiar.breed}</text>

  <!-- Meta info -->
  <text class="familiar-meta" x="20" y="110">${familiar.species} • ${familiar.age}</text>

  <!-- Description -->
  <text class="familiar-description" x="20" y="130">${familiar.description.substring(0, 65)}...</text>
  <text class="familiar-description" x="20" y="145">${familiar.description.substring(65, 130)}...</text>

  <!-- Personality traits -->
  <text class="section-title" x="20" y="170">Personality:</text>
  ${familiar.personality.slice(0, 3).map((trait, i) =>
    `<text class="trait-text" x="20" y="${185 + (i * 14)}">✓ ${trait}</text>`
  ).join('\n  ')}

  <!-- Abilities -->
  <text class="section-title" x="20" y="235">Abilities:</text>
  ${familiar.abilities.slice(0, 3).map((ability, i) =>
    `<text class="trait-text" x="20" y="${250 + (i * 14)}">⚡ ${ability}</text>`
  ).join('\n  ')}

  <!-- Single centered save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="280"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${familiarBDOPubKey}","collection":"familiarPen"}'
  />
  <text class="button-text" x="200" y="305">🐾 Add to Familiar Pen</text>
</svg>`;
}
