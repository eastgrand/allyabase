/**
 * Metallics Examples for Test Environment
 *
 * These metallics posts demonstrate:
 * - Gems, crystals, metals, and jewelry
 * - Save spell for adding to carrierBag "metallics" collection
 * - Properties, value, and crafting details
 */

import sessionless from 'sessionless-node';

export const metallicsPosts = [
  {
    id: 'gem-amethyst-cluster-001',
    uuid: sessionless.generateUUID(),
    type: 'gemstone',
    category: 'crystal',
    name: 'Raw Amethyst Cluster',
    origin: 'Uruguay',
    description: 'A stunning natural amethyst cluster with deep purple crystalline formations. This specimen features exceptional clarity and vibrant color, perfect for collectors or energy work.',
    weight: '2.3 kg (5.1 lbs)',
    dimensions: '18cm x 12cm x 9cm',
    price: 28500, // $285.00
    properties: {
      mohsHardness: '7',
      color: 'Deep purple with white quartz matrix',
      clarity: 'Transparent to translucent',
      luster: 'Vitreous',
      formation: 'Natural geode formation'
    },
    metaphysicalProperties: [
      'Promotes calm and clarity',
      'Enhances intuition',
      'Protects against negative energy',
      'Aids meditation',
      'Crown chakra alignment'
    ],
    uses: [
      'Crystal healing',
      'Meditation focal point',
      'Home decoration',
      'Mineral collection',
      'Jewelry making (smaller pieces)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596380981545-449bdeface6f?w=400',
    tags: ['amethyst', 'crystal', 'gemstone', 'uruguay', 'healing'],
    metadata: {
      authentic: true,
      treatment: 'Natural, untreated',
      rarity: 'High quality specimen',
      certification: 'Certificate of Authenticity included'
    }
  },
  {
    id: 'gem-rough-ruby-002',
    uuid: sessionless.generateUUID(),
    type: 'gemstone',
    category: 'precious-stone',
    name: 'Rough Cut Ruby',
    origin: 'Myanmar (Burma)',
    description: 'Uncut ruby specimen displaying the characteristic pigeon blood red color. Perfect for custom jewelry or as a collector\'s piece. Can be faceted into a stunning gemstone.',
    weight: '12.5 carats',
    dimensions: '15mm x 12mm x 8mm',
    price: 185000, // $1,850.00
    properties: {
      mohsHardness: '9',
      color: 'Pigeon blood red',
      clarity: 'Eye-clean when cut',
      luster: 'Adamantine',
      treatment: 'Unheated'
    },
    metaphysicalProperties: [
      'Promotes passion and vitality',
      'Enhances courage',
      'Attracts prosperity',
      'Heart chakra activation',
      'Protection stone'
    ],
    uses: [
      'Custom jewelry design',
      'Investment gemstone',
      'Mineral collection',
      'Heirloom piece',
      'Gift for July birthdays'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400',
    tags: ['ruby', 'gemstone', 'myanmar', 'precious', 'unheated'],
    metadata: {
      authentic: true,
      treatment: 'Unheated, natural',
      rarity: 'Investment grade',
      certification: 'GIA certification available'
    }
  },
  {
    id: 'jewelry-moon-phase-necklace-003',
    uuid: sessionless.generateUUID(),
    type: 'jewelry',
    category: 'necklace',
    name: 'Silver Moon Phase Necklace',
    designer: 'Luna Artisan Jewelry',
    description: 'Handcrafted sterling silver necklace featuring the 8 phases of the moon. Each phase is meticulously detailed with oxidized accents to highlight the craters and shadows.',
    price: 12800, // $128.00
    materials: {
      chain: '925 Sterling Silver',
      pendant: '925 Sterling Silver',
      finish: 'Oxidized and polished',
      clasp: 'Lobster claw'
    },
    dimensions: {
      chainLength: '18 inches (adjustable to 20")',
      pendantWidth: '45mm',
      pendantHeight: '8mm',
      weight: '12g'
    },
    features: [
      'Handcrafted design',
      'Adjustable chain length',
      'Hypoallergenic',
      'Comes in gift box',
      'Tarnish resistant'
    ],
    care: [
      'Store in provided pouch',
      'Clean with silver polishing cloth',
      'Avoid contact with chemicals',
      'Remove before swimming',
      'Polish regularly to maintain shine'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400',
    tags: ['necklace', 'moon', 'silver', 'handmade', 'celestial'],
    metadata: {
      handmade: true,
      giftWrapping: true,
      hypoallergenic: true,
      sustainable: 'Recycled silver'
    }
  },
  {
    id: 'jewelry-opal-ring-004',
    uuid: sessionless.generateUUID(),
    type: 'jewelry',
    category: 'ring',
    name: 'Australian Opal Rose Gold Ring',
    designer: 'Ethereal Gems',
    description: 'Stunning 14k rose gold ring featuring a natural Australian opal with incredible play-of-color. The opal displays vibrant flashes of blue, green, and orange against a white background.',
    price: 245000, // $2,450.00
    materials: {
      metal: '14k Rose Gold',
      stone: 'Australian Opal (3.2ct)',
      setting: 'Bezel setting',
      band: 'Solid rose gold'
    },
    dimensions: {
      opalSize: '10mm x 8mm oval',
      bandWidth: '2mm',
      ringSize: '7 (resizable)',
      weight: '4.2g'
    },
    features: [
      'Natural Australian opal',
      'Conflict-free sourcing',
      'Custom sizing available',
      'Certificate of authenticity',
      'Lifetime warranty on setting'
    ],
    care: [
      'Avoid harsh chemicals',
      'Remove when washing hands',
      'Store separately to prevent scratches',
      'Clean with soft, damp cloth',
      'Avoid extreme temperature changes'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400',
    tags: ['ring', 'opal', 'rose-gold', 'australian', 'luxury'],
    metadata: {
      handmade: true,
      resizable: true,
      ethicalSourcing: true,
      giftWrapping: true
    }
  }
];

/**
 * Generate SVG for gemstone card
 * Single button with save spell to metallics collection
 *
 * @param {Object} gem - Gemstone object
 * @param {string} gemBDOPubKey - PubKey of this gem's BDO
 * @returns {string} SVG string
 */
export function generateGemstoneSVG(gem, gemBDOPubKey) {
  const priceDisplay = `$${(gem.price / 100).toFixed(2)}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#7e22ce;stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#a855f7" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .gem-name {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .gem-origin {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: #d8b4fe;
      text-anchor: middle;
    }
    .gem-meta {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #c084fc;
      text-anchor: start;
    }
    .gem-description {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #d1d5db;
      text-anchor: start;
    }
    .property-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: #9ca3af;
      text-anchor: start;
    }
    .price-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 16px;
      font-weight: bold;
      fill: #fbbf24;
      text-anchor: middle;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: #a855f7;
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
  <rect x="0" y="0" width="400" height="300" fill="#1a0033" rx="12"/>

  <!-- Icon -->
  <text x="200" y="35" text-anchor="middle" font-size="30">💎</text>

  <!-- Gem Info -->
  <text class="gem-name" x="200" y="70">${gem.name}</text>
  <text class="gem-origin" x="200" y="88">Origin: ${gem.origin}</text>

  <!-- Weight and dimensions -->
  <text class="gem-meta" x="20" y="110">${gem.weight} • ${gem.dimensions}</text>

  <!-- Price -->
  <text class="price-text" x="200" y="135">${priceDisplay}</text>

  <!-- Description -->
  <text class="gem-description" x="20" y="160">${gem.description.substring(0, 60)}...</text>
  <text class="gem-description" x="20" y="175">${gem.description.substring(60, 120)}...</text>

  <!-- Properties -->
  ${(gem.metaphysicalProperties || []).slice(0, 3).map((prop, i) =>
    `<text class="property-text" x="20" y="${195 + (i * 15)}">✦ ${prop}</text>`
  ).join('\n  ')}

  <!-- Single centered save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="240"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${gemBDOPubKey}","collection":"metallics"}'
  />
  <text class="button-text" x="200" y="265">💎 Save to Metallics</text>
</svg>`;
}

/**
 * Generate SVG for jewelry card
 * Single button with save spell to metallics collection
 *
 * @param {Object} jewelry - Jewelry object
 * @param {string} jewelryBDOPubKey - PubKey of this jewelry's BDO
 * @returns {string} SVG string
 */
export function generateJewelrySVG(jewelry, jewelryBDOPubKey) {
  const priceDisplay = `$${(jewelry.price / 100).toFixed(2)}`;
  const icon = jewelry.category === 'necklace' ? '📿' : jewelry.category === 'ring' ? '💍' : '✨';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <linearGradient id="jewelryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
    </linearGradient>

    <filter id="jewelryGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#fbbf24" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .jewelry-name {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .jewelry-designer {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: #fde68a;
      text-anchor: middle;
    }
    .jewelry-meta {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #fcd34d;
      text-anchor: start;
    }
    .jewelry-description {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #d1d5db;
      text-anchor: start;
    }
    .feature-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: #9ca3af;
      text-anchor: start;
    }
    .price-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 16px;
      font-weight: bold;
      fill: #fbbf24;
      text-anchor: middle;
    }
    .save-button {
      fill: url(#jewelryGrad);
      stroke: #fbbf24;
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .save-button:hover {
      filter: url(#jewelryGlow);
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
  <rect x="0" y="0" width="400" height="300" fill="#1a0033" rx="12"/>

  <!-- Icon -->
  <text x="200" y="35" text-anchor="middle" font-size="30">${icon}</text>

  <!-- Jewelry Info -->
  <text class="jewelry-name" x="200" y="70">${jewelry.name.length > 35 ? jewelry.name.substring(0, 32) + '...' : jewelry.name}</text>
  <text class="jewelry-designer" x="200" y="88">${jewelry.designer}</text>

  <!-- Materials -->
  <text class="jewelry-meta" x="20" y="110">${jewelry.materials?.metal || 'Metal'}${jewelry.materials?.stone ? ' • ' + jewelry.materials.stone : ''}</text>

  <!-- Price -->
  <text class="price-text" x="200" y="135">${priceDisplay}</text>

  <!-- Description -->
  <text class="jewelry-description" x="20" y="160">${jewelry.description.substring(0, 60)}...</text>
  <text class="jewelry-description" x="20" y="175">${jewelry.description.substring(60, 120)}...</text>

  <!-- Features -->
  ${(jewelry.features || []).slice(0, 3).map((feature, i) =>
    `<text class="feature-text" x="20" y="${195 + (i * 15)}">✓ ${feature}</text>`
  ).join('\n  ')}

  <!-- Single centered save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="240"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${jewelryBDOPubKey}","collection":"metallics"}'
  />
  <text class="button-text" x="200" y="265">✨ Save to Metallics</text>
</svg>`;
}
