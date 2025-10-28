/**
 * Closet Examples for Test Environment
 *
 * These closet posts demonstrate:
 * - Clothing items, fashion, wardrobe pieces
 * - Save spell for adding to carrierBag "closet" collection
 * - Style details, sizing, care instructions
 */

import sessionless from 'sessionless-node';

export const closetPosts = [
  {
    id: 'clothing-denim-jacket-001',
    uuid: sessionless.generateUUID(),
    type: 'jacket',
    category: 'outerwear',
    name: 'Vintage Denim Jacket',
    brand: 'Classic American Denim Co.',
    description: 'Authentic vintage-style denim jacket with a perfectly broken-in feel. Features classic brass buttons, chest pockets, and a timeless silhouette that pairs with everything.',
    era: '1980s-inspired',
    price: 8900, // $89.00
    sizing: {
      fit: 'Regular/Relaxed',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      measurements: {
        chest: '42 inches (M)',
        length: '25 inches (M)',
        sleeve: '25.5 inches (M)'
      }
    },
    materials: {
      fabric: '100% Cotton Denim',
      weight: '12 oz denim',
      lining: 'None',
      hardware: 'Brass buttons and rivets'
    },
    features: [
      'Classic point collar',
      'Two chest button pockets',
      'Two side welt pockets',
      'Adjustable button cuffs',
      'Vintage wash finish',
      'Unisex styling'
    ],
    styleWith: [
      'White t-shirt and black jeans',
      'Floral dress for contrast',
      'Hoodie for layering',
      'Button-up shirt, casual or dressy',
      'Band t-shirt for vintage vibe'
    ],
    care: [
      'Machine wash cold with like colors',
      'Tumble dry low or hang to dry',
      'Avoid bleach',
      'Iron on medium if needed',
      'Wash inside out to preserve color'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
    tags: ['denim', 'jacket', 'vintage', 'casual', 'unisex'],
    metadata: {
      sustainable: 'Organic cotton option available',
      season: 'Spring/Fall/Year-round layering',
      condition: 'New with vintage finish'
    }
  },
  {
    id: 'clothing-leather-boots-002',
    uuid: sessionless.generateUUID(),
    type: 'shoes',
    category: 'footwear',
    name: 'Black Leather Chelsea Boots',
    brand: 'Heritage Boot Co.',
    description: 'Timeless Chelsea boots crafted from premium full-grain leather. Featuring elastic side panels and a subtle heel, these boots are equally at home in the office or on the weekend.',
    style: 'Chelsea Boot',
    price: 24900, // $249.00
    sizing: {
      fit: 'True to size',
      sizes: ['US 6-13 (whole and half sizes)'],
      width: 'Medium (D)',
      heelHeight: '1.5 inches'
    },
    materials: {
      upper: 'Full-grain leather',
      sole: 'Rubber lug sole',
      lining: 'Leather',
      insole: 'Cushioned leather footbed'
    },
    features: [
      'Elastic side goring for easy on/off',
      'Pull tabs at heel and front',
      'Goodyear welt construction',
      'Water-resistant leather treatment',
      'Non-slip rubber sole',
      'Handcrafted details'
    ],
    styleWith: [
      'Slim jeans or chinos',
      'Tailored trousers for work',
      'Dress or skirt with tights',
      'Joggers for casual look',
      'Suit for formal events'
    ],
    care: [
      'Wipe clean with damp cloth',
      'Condition leather monthly',
      'Use shoe trees when not wearing',
      'Apply water repellent spray',
      'Professional cobbler for resoling'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400',
    tags: ['boots', 'leather', 'chelsea', 'footwear', 'classic'],
    metadata: {
      sustainable: 'Ethically sourced leather',
      season: 'Fall/Winter/Year-round',
      warranty: '1 year craftsmanship warranty'
    }
  },
  {
    id: 'clothing-silk-dress-003',
    uuid: sessionless.generateUUID(),
    type: 'dress',
    category: 'dresses',
    name: 'Silk Floral Midi Dress',
    brand: 'Elegant Threads',
    description: 'Luxurious silk dress featuring a vibrant floral print. The flowing midi length and delicate fabric make this piece perfect for garden parties, weddings, or romantic evenings.',
    style: 'Midi Dress',
    price: 15800, // $158.00
    sizing: {
      fit: 'Regular/Slightly relaxed',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      measurements: {
        bust: '36 inches (M)',
        waist: '30 inches (M)',
        length: '46 inches (M)'
      }
    },
    materials: {
      fabric: '100% Silk',
      lining: 'Slip lining included',
      closure: 'Hidden back zipper',
      pattern: 'Floral print'
    },
    features: [
      'V-neckline',
      'Short flutter sleeves',
      'Elastic waist for comfort',
      'Midi length (below knee)',
      'Flowy, romantic silhouette',
      'Side seam pockets'
    ],
    styleWith: [
      'Strappy sandals for summer',
      'Ankle boots for cooler weather',
      'Denim jacket for casual look',
      'Statement earrings',
      'Clutch and heels for events'
    ],
    care: [
      'Dry clean only',
      'Or hand wash cold with silk detergent',
      'Hang to dry away from direct sunlight',
      'Iron on lowest setting (silk setting)',
      'Store on padded hanger'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
    tags: ['dress', 'silk', 'floral', 'midi', 'elegant'],
    metadata: {
      sustainable: 'Peace silk (ahimsa silk)',
      season: 'Spring/Summer',
      occasion: 'Wedding guest, garden party, date night'
    }
  }
];

/**
 * Generate SVG for clothing item card
 * Single button with save spell to closet collection
 *
 * @param {Object} item - Clothing item object
 * @param {string} itemBDOPubKey - PubKey of this item's BDO
 * @returns {string} SVG string
 */
export function generateClothingSVG(item, itemBDOPubKey) {
  const priceDisplay = `$${(item.price / 100).toFixed(2)}`;
  const icon = item.type === 'jacket' ? '🧥' : item.type === 'shoes' ? '👢' : '👗';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" width="400" height="320">
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
    .item-name {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .item-brand {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: #f9a8d4;
      text-anchor: middle;
    }
    .item-meta {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #f472b6;
      text-anchor: start;
    }
    .item-description {
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
  <rect x="0" y="0" width="400" height="320" fill="#1a0033" rx="12"/>

  <!-- Icon -->
  <text x="200" y="35" text-anchor="middle" font-size="30">${icon}</text>

  <!-- Item Info -->
  <text class="item-name" x="200" y="70">${item.name.length > 35 ? item.name.substring(0, 32) + '...' : item.name}</text>
  <text class="item-brand" x="200" y="88">${item.brand}</text>

  <!-- Meta info -->
  <text class="item-meta" x="20" y="110">${item.materials.fabric}</text>
  <text class="price-text" x="200" y="135">${priceDisplay}</text>

  <!-- Description -->
  <text class="item-description" x="20" y="160">${item.description.substring(0, 60)}...</text>
  <text class="item-description" x="20" y="175">${item.description.substring(60, 120)}...</text>

  <!-- Sizing -->
  <text class="item-meta" x="20" y="200">Sizes: ${Array.isArray(item.sizing.sizes) ? item.sizing.sizes.join(', ').substring(0, 30) : item.sizing.sizes}</text>
  <text class="item-meta" x="20" y="215">Fit: ${item.sizing.fit}</text>

  <!-- Features -->
  ${item.features.slice(0, 2).map((feature, i) =>
    `<text class="feature-text" x="20" y="${235 + (i * 15)}">✓ ${feature.substring(0, 50)}</text>`
  ).join('\n  ')}

  <!-- Single centered save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="260"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${itemBDOPubKey}","collection":"closet"}'
  />
  <text class="button-text" x="200" y="285">👔 Save to Closet</text>
</svg>`;
}
