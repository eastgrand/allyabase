/**
 * Apothecary Examples for Test Environment
 *
 * These apothecary posts demonstrate:
 * - Cosmetic items (makeup, beauty products, toiletries)
 * - Remedy items (herbal remedies, tinctures, wellness)
 * - Save spell for adding to carrierBag "apothecary" collection
 * - Product details with ingredients and usage instructions
 */

import sessionless from 'sessionless-node';

export const apothecaryPosts = [
  {
    id: 'cosmetic-rose-gold-highlighter-001',
    uuid: sessionless.generateUUID(),
    type: 'cosmetic',
    category: 'makeup',
    title: 'Rose Gold Highlighter',
    brand: 'Luminous Beauty',
    description: 'A silky-smooth powder highlighter that adds a radiant, rose-gold glow to your complexion. Perfect for cheekbones, brow bones, and décolletage.',
    price: 2800, // $28.00
    size: '0.35 oz / 10g',
    shade: 'Rose Gold',
    ingredients: [
      'Mica',
      'Titanium Dioxide',
      'Iron Oxides',
      'Silica',
      'Dimethicone',
      'Jojoba Oil',
      'Vitamin E'
    ],
    usage: [
      'Apply to high points of face where light naturally hits',
      'Use a fan brush for subtle glow',
      'Use fingertip for intense shine',
      'Layer over blush for multi-dimensional look'
    ],
    features: [
      'Finely-milled powder',
      'Buildable coverage',
      'Long-lasting formula',
      'Cruelty-free',
      'Paraben-free'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
    tags: ['makeup', 'highlighter', 'glow', 'rose-gold', 'cruelty-free'],
    metadata: {
      skinType: 'all',
      finish: 'shimmer',
      coverage: 'buildable',
      vegan: true,
      crueltyfree: true
    }
  },
  {
    id: 'cosmetic-lavender-body-butter-002',
    uuid: sessionless.generateUUID(),
    type: 'cosmetic',
    category: 'skincare',
    title: 'Lavender Dreams Body Butter',
    brand: 'Botanical Luxe',
    description: 'Rich, whipped body butter infused with organic lavender essential oil. Deeply nourishes dry skin while promoting relaxation and calm.',
    price: 3200, // $32.00
    size: '8 oz / 227g',
    scent: 'Lavender',
    ingredients: [
      'Shea Butter',
      'Cocoa Butter',
      'Coconut Oil',
      'Sweet Almond Oil',
      'Lavender Essential Oil',
      'Vitamin E',
      'Beeswax'
    ],
    usage: [
      'Apply to clean, damp skin after shower',
      'Massage gently until fully absorbed',
      'Focus on dry areas like elbows and knees',
      'Use before bed for aromatherapy benefits'
    ],
    features: [
      'Organic ingredients',
      'Hand-whipped texture',
      '24-hour moisture',
      'Calming lavender scent',
      'Non-greasy formula'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400',
    tags: ['skincare', 'body-butter', 'lavender', 'moisturizer', 'organic'],
    metadata: {
      skinType: 'dry',
      organic: true,
      vegan: false, // contains beeswax
      crueltyfree: true
    }
  },
  {
    id: 'remedy-chamomile-sleep-tea-003',
    uuid: sessionless.generateUUID(),
    type: 'remedy',
    category: 'herbal-tea',
    title: 'Chamomile Sleep Tea Blend',
    brand: 'Moonlight Apothecary',
    description: 'A soothing herbal blend designed to promote restful sleep and relaxation. Combines chamomile, lavender, and passionflower for maximum calming effect.',
    price: 1800, // $18.00
    size: '20 tea bags',
    ingredients: [
      'Chamomile Flowers',
      'Lavender Buds',
      'Passionflower',
      'Lemon Balm',
      'Valerian Root',
      'Spearmint'
    ],
    usage: [
      'Steep one tea bag in hot water for 5-7 minutes',
      'Drink 30-60 minutes before bedtime',
      'Cover cup while steeping to preserve essential oils',
      'Add honey if desired'
    ],
    benefits: [
      'Promotes relaxation',
      'Supports restful sleep',
      'Calms nervous system',
      'Reduces anxiety',
      'Caffeine-free'
    ],
    warnings: [
      'Consult doctor if pregnant or nursing',
      'May cause drowsiness',
      'Not for children under 12'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400',
    tags: ['tea', 'sleep', 'chamomile', 'herbal-remedy', 'relaxation'],
    metadata: {
      organic: true,
      vegan: true,
      caffeineFree: true,
      glutenFree: true
    }
  },
  {
    id: 'remedy-elderberry-immune-syrup-004',
    uuid: sessionless.generateUUID(),
    type: 'remedy',
    category: 'supplement',
    title: 'Elderberry Immune Syrup',
    brand: 'Herbal Wellness Co.',
    description: 'Powerful immune-supporting syrup made from organic elderberries, echinacea, and raw honey. Rich in antioxidants and vitamin C.',
    price: 2400, // $24.00
    size: '8 fl oz / 237ml',
    ingredients: [
      'Organic Elderberry Extract',
      'Echinacea',
      'Raw Honey',
      'Ginger Root',
      'Vitamin C (Rose Hips)',
      'Zinc'
    ],
    usage: [
      'Adults: 1 tablespoon daily',
      'Children (2-12): 1 teaspoon daily',
      'During illness: Double the dose',
      'Shake well before use',
      'Refrigerate after opening'
    ],
    benefits: [
      'Supports immune function',
      'Rich in antioxidants',
      'Seasonal wellness support',
      'Natural vitamin C source',
      'Anti-inflammatory properties'
    ],
    warnings: [
      'Not for children under 2 (contains honey)',
      'Consult doctor if pregnant or on medication',
      'Keep refrigerated',
      'Use within 60 days of opening'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400',
    tags: ['elderberry', 'immune-support', 'syrup', 'herbal-remedy', 'wellness'],
    metadata: {
      organic: true,
      vegan: false, // contains honey
      glutenFree: true,
      nonGMO: true
    }
  }
];

/**
 * Generate SVG for cosmetic product
 * Single button with save spell to apothecary collection
 *
 * @param {Object} cosmetic - Cosmetic product object
 * @param {string} cosmeticBDOPubKey - PubKey of this cosmetic's BDO
 * @returns {string} SVG string
 */
export function generateCosmeticSVG(cosmetic, cosmeticBDOPubKey) {
  const priceDisplay = `$${(cosmetic.price / 100).toFixed(2)}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#be185d;stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#ec4899" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .cosmetic-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .cosmetic-brand {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: #f9a8d4;
      text-anchor: middle;
    }
    .cosmetic-meta {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #fbbf24;
      text-anchor: start;
    }
    .cosmetic-description {
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
      fill: url(#saveGrad);
      stroke: #ec4899;
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
  <text x="200" y="35" text-anchor="middle" font-size="30">💄</text>

  <!-- Product Info -->
  <text class="cosmetic-title" x="200" y="70">${cosmetic.title}</text>
  <text class="cosmetic-brand" x="200" y="88">${cosmetic.brand}</text>

  <!-- Meta info -->
  <text class="cosmetic-meta" x="20" y="110">${cosmetic.size}</text>
  <text class="price-text" x="200" y="135">${priceDisplay}</text>

  <!-- Description -->
  <text class="cosmetic-description" x="20" y="160">${cosmetic.description.substring(0, 60)}...</text>
  <text class="cosmetic-description" x="20" y="175">${cosmetic.description.substring(60, 120)}...</text>

  <!-- Features -->
  ${cosmetic.features.slice(0, 3).map((feature, i) =>
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
    spell-components='{"bdoPubKey":"${cosmeticBDOPubKey}","collection":"apothecary"}'
  />
  <text class="button-text" x="200" y="265">💅 Save to Apothecary</text>
</svg>`;
}

/**
 * Generate SVG for remedy product
 * Single button with save spell to apothecary collection
 *
 * @param {Object} remedy - Remedy product object
 * @param {string} remedyBDOPubKey - PubKey of this remedy's BDO
 * @returns {string} SVG string
 */
export function generateRemedySVG(remedy, remedyBDOPubKey) {
  const priceDisplay = `$${(remedy.price / 100).toFixed(2)}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <linearGradient id="remedyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
    </linearGradient>

    <filter id="remedyGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#10b981" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .remedy-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .remedy-brand {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: #6ee7b7;
      text-anchor: middle;
    }
    .remedy-meta {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #fbbf24;
      text-anchor: start;
    }
    .remedy-description {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #d1d5db;
      text-anchor: start;
    }
    .benefit-text {
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
      fill: url(#remedyGrad);
      stroke: #10b981;
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .save-button:hover {
      filter: url(#remedyGlow);
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
  <text x="200" y="35" text-anchor="middle" font-size="30">🌿</text>

  <!-- Product Info -->
  <text class="remedy-title" x="200" y="70">${remedy.title}</text>
  <text class="remedy-brand" x="200" y="88">${remedy.brand}</text>

  <!-- Meta info -->
  <text class="remedy-meta" x="20" y="110">${remedy.size}</text>
  <text class="price-text" x="200" y="135">${priceDisplay}</text>

  <!-- Description -->
  <text class="remedy-description" x="20" y="160">${remedy.description.substring(0, 60)}...</text>
  <text class="remedy-description" x="20" y="175">${remedy.description.substring(60, 120)}...</text>

  <!-- Benefits -->
  ${remedy.benefits.slice(0, 3).map((benefit, i) =>
    `<text class="benefit-text" x="20" y="${195 + (i * 15)}">✓ ${benefit}</text>`
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
    spell-components='{"bdoPubKey":"${remedyBDOPubKey}","collection":"apothecary"}'
  />
  <text class="button-text" x="200" y="265">🌿 Save to Apothecary</text>
</svg>`;
}
