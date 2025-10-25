/**
 * GreenHouse Examples for Test Environment
 *
 * These greenhouse posts demonstrate:
 * - Plant care guides, botanical specimens
 * - Save spell for adding to carrierBag "greenHouse" collection
 * - Care instructions, growing conditions, and plant properties
 */

import sessionless from 'sessionless-node';

export const greenHousePosts = [
  {
    id: 'plant-monstera-deliciosa-001',
    uuid: sessionless.generateUUID(),
    type: 'houseplant',
    commonName: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    otherNames: ['Swiss Cheese Plant', 'Split-Leaf Philodendron', 'Hurricane Plant'],
    description: 'A stunning tropical plant known for its large, glossy leaves with distinctive splits and holes. Native to Central American rainforests, it makes a dramatic statement in any indoor space.',
    origin: 'Central America (Mexico to Panama)',
    difficulty: 'Easy to Moderate',
    careRequirements: {
      light: 'Bright, indirect light (tolerates medium light)',
      water: 'Water when top 2 inches of soil are dry',
      humidity: '60-80% (tolerates average household humidity)',
      temperature: '65-85°F (18-29°C)',
      soil: 'Well-draining potting mix with perlite',
      fertilizer: 'Monthly during growing season (spring/summer)'
    },
    characteristics: {
      matureHeight: '6-10 feet indoors (30+ feet in nature)',
      growthRate: 'Fast',
      foliageType: 'Evergreen, glossy, fenestrated',
      petFriendly: false,
      airPurifying: true,
      toxicity: 'Toxic to cats, dogs, and humans if ingested'
    },
    careTips: [
      'Provide a moss pole or trellis for climbing',
      'Wipe leaves regularly to remove dust',
      'Rotate plant monthly for even growth',
      'Fenestrations develop with age and proper light',
      'Prune to control size and promote bushiness',
      'Propagate via stem cuttings in water'
    ],
    commonProblems: [
      'Yellow leaves: Overwatering or poor drainage',
      'Brown leaf edges: Low humidity or inconsistent watering',
      'No fenestrations: Insufficient light or young plant',
      'Leggy growth: Not enough light',
      'Pests: Spider mites, scale, mealybugs'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400',
    tags: ['monstera', 'houseplant', 'tropical', 'easy-care', 'climbing'],
    metadata: {
      season: 'Year-round growing',
      propagation: 'Stem cuttings, air layering',
      repotting: 'Every 1-2 years',
      price: 2500 // $25.00 for 6" pot
    }
  },
  {
    id: 'plant-basil-sweet-002',
    uuid: sessionless.generateUUID(),
    type: 'herb',
    commonName: 'Sweet Basil',
    scientificName: 'Ocimum basilicum',
    otherNames: ['Great Basil', 'Saint Joseph\'s Wort', 'Genovese Basil'],
    description: 'A fragrant culinary herb with bright green, aromatic leaves. Essential for Italian cuisine and beloved in gardens worldwide. Fresh basil transforms any dish with its sweet, slightly peppery flavor.',
    origin: 'Tropical regions of central Africa to Southeast Asia',
    difficulty: 'Easy',
    careRequirements: {
      light: 'Full sun (6-8 hours direct sunlight)',
      water: 'Keep soil consistently moist but not waterlogged',
      humidity: '50-70%',
      temperature: '65-85°F (18-29°C)',
      soil: 'Rich, well-draining potting mix',
      fertilizer: 'Every 2-4 weeks with balanced liquid fertilizer'
    },
    characteristics: {
      matureHeight: '12-24 inches',
      growthRate: 'Fast',
      foliageType: 'Aromatic, tender leaves',
      petFriendly: true,
      edible: true,
      toxicity: 'Safe for cats, dogs, and humans'
    },
    careTips: [
      'Pinch off flowers to encourage leaf production',
      'Harvest regularly to promote bushy growth',
      'Pinch stem tips to prevent legginess',
      'Best flavor when harvested before flowering',
      'Can be grown indoors on sunny windowsill',
      'Companion plant with tomatoes'
    ],
    harvestAndUse: [
      'Harvest leaves as needed once plant reaches 6 inches',
      'Use fresh in salads, pasta, pizza',
      'Make pesto, infused oils, or herbal tea',
      'Dry or freeze for long-term storage',
      'Flowers are edible and attract pollinators'
    ],
    commonProblems: [
      'Wilting: Underwatering or excessive heat',
      'Yellow leaves: Overwatering or nutrient deficiency',
      'Leggy growth: Insufficient light',
      'Pests: Aphids, Japanese beetles, slugs',
      'Fungal issues: Too much moisture on leaves'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400',
    tags: ['basil', 'herb', 'culinary', 'edible', 'easy-care'],
    metadata: {
      season: 'Annual (summer) or year-round indoors',
      propagation: 'Seeds, stem cuttings',
      harvestTime: '3-4 weeks from seed',
      price: 400 // $4.00 for starter plant
    }
  },
  {
    id: 'plant-peace-lily-003',
    uuid: sessionless.generateUUID(),
    type: 'houseplant',
    commonName: 'Peace Lily',
    scientificName: 'Spathiphyllum wallisii',
    otherNames: ['Spath', 'White Sails', 'Spathe Flower'],
    description: 'An elegant houseplant with glossy dark green leaves and striking white flower-like bracts. Renowned for its air-purifying qualities and ability to thrive in low light conditions.',
    origin: 'Tropical rainforests of Central and South America',
    difficulty: 'Easy',
    careRequirements: {
      light: 'Low to medium indirect light (tolerates shade)',
      water: 'Water when soil surface feels dry; drooping leaves signal thirst',
      humidity: '40-60% (tolerates average household humidity)',
      temperature: '65-80°F (18-27°C)',
      soil: 'Well-draining, peat-based potting mix',
      fertilizer: 'Every 6 weeks during spring and summer'
    },
    characteristics: {
      matureHeight: '1-4 feet depending on variety',
      growthRate: 'Moderate',
      foliageType: 'Evergreen, glossy, lance-shaped',
      petFriendly: false,
      airPurifying: true,
      toxicity: 'Toxic to cats, dogs, and humans if ingested'
    },
    careTips: [
      'Plant will droop dramatically when thirsty (recovers quickly)',
      'Brown leaf tips indicate chlorine in water - use filtered',
      'Wipe leaves monthly to maximize air purification',
      'Remove spent flowers to encourage new blooms',
      'Ideal for bathrooms (loves humidity)',
      'Divide plant when rootbound for propagation'
    ],
    airPurifyingBenefits: [
      'Removes formaldehyde, benzene, and carbon monoxide',
      'Increases humidity through transpiration',
      'NASA Clean Air Study approved',
      'Filters trichloroethylene and ammonia',
      'One of the best plants for bedroom air quality'
    ],
    commonProblems: [
      'Brown leaf tips: Chlorine/fluoride in water or low humidity',
      'Yellow leaves: Overwatering',
      'No flowers: Insufficient light',
      'Drooping: Needs water or too much direct sun',
      'Pests: Spider mites, mealybugs (rare)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1593482892540-73c6e5826f80?w=400',
    tags: ['peace-lily', 'houseplant', 'low-light', 'air-purifying', 'easy-care'],
    metadata: {
      season: 'Year-round growing',
      propagation: 'Division',
      repotting: 'Every 1-2 years',
      price: 1800 // $18.00 for 6" pot
    }
  }
];

/**
 * Generate SVG for plant card
 * Single button with save spell to greenHouse collection
 *
 * @param {Object} plant - Plant object
 * @param {string} plantBDOPubKey - PubKey of this plant's BDO
 * @returns {string} SVG string
 */
export function generatePlantSVG(plant, plantBDOPubKey) {
  const icon = plant.type === 'herb' ? '🌿' : '🪴';
  const priceDisplay = plant.metadata.price ? `$${(plant.metadata.price / 100).toFixed(2)}` : 'Price varies';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 340" width="400" height="340">
  <defs>
    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#22c55e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#16a34a;stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#22c55e" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .plant-name {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .plant-scientific {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      font-style: italic;
      fill: #86efac;
      text-anchor: middle;
    }
    .plant-meta {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #4ade80;
      text-anchor: start;
    }
    .plant-description {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #d1d5db;
      text-anchor: start;
    }
    .care-label {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      font-weight: bold;
      fill: #86efac;
      text-anchor: start;
    }
    .care-value {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: #9ca3af;
      text-anchor: start;
    }
    .price-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      font-weight: bold;
      fill: #fbbf24;
      text-anchor: middle;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: #22c55e;
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
  <text x="200" y="35" text-anchor="middle" font-size="30">${icon}</text>

  <!-- Plant Info -->
  <text class="plant-name" x="200" y="70">${plant.commonName}</text>
  <text class="plant-scientific" x="200" y="85">${plant.scientificName}</text>

  <!-- Meta info -->
  <text class="plant-meta" x="20" y="105">${plant.origin}</text>
  <text class="plant-meta" x="20" y="120">Difficulty: ${plant.difficulty}</text>

  <!-- Description -->
  <text class="plant-description" x="20" y="140">${plant.description.substring(0, 65)}...</text>
  <text class="plant-description" x="20" y="155">${plant.description.substring(65, 130)}...</text>

  <!-- Care requirements -->
  <text class="care-label" x="20" y="180">☀️ Light:</text>
  <text class="care-value" x="20" y="193">${plant.careRequirements.light.substring(0, 45)}</text>

  <text class="care-label" x="20" y="213">💧 Water:</text>
  <text class="care-value" x="20" y="226">${plant.careRequirements.water.substring(0, 45)}</text>

  <text class="care-label" x="20" y="246">🌡️ Temperature:</text>
  <text class="care-value" x="20" y="259">${plant.careRequirements.temperature}</text>

  <!-- Price -->
  <text class="price-text" x="200" y="280">${priceDisplay}</text>

  <!-- Single centered save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="290"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${plantBDOPubKey}","collection":"greenHouse"}'
  />
  <text class="button-text" x="200" y="315">🌱 Save to GreenHouse</text>
</svg>`;
}
