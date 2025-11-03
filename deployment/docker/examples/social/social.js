/**
 * Social & Marketplace Examples for Test Environment
 *
 * These social posts demonstrate:
 * - Marketplace models and trading patterns
 * - Economic relationships between buyers, sellers, and platforms
 * - Different commerce structures
 */

import sessionless from 'sessionless-node';

export const socialPosts = [
  {
    id: 'marketplace-traditional-001',
    uuid: sessionless.generateUUID(),
    type: 'marketplace',
    category: 'platform-marketplace',
    name: 'Platform Marketplace Model',
    subtitle: 'Connecting Buyers & Sellers',
    description: 'A traditional marketplace platform connects independent buyers and sellers. The platform provides infrastructure, trust mechanisms, and discovery while taking a commission on transactions.',
    colors: {
      primary: '#FF6B35',
      secondary: '#F7931E',
      accent: '#FFD23F',
      buyerColor: '#4ECDC4',
      sellerColor: '#95E1D3'
    },
    actors: [
      {
        role: 'Marketplace Platform',
        icon: '🏪',
        responsibilities: [
          'Provide discovery & search',
          'Facilitate transactions',
          'Build trust & reputation',
          'Handle disputes',
          'Take 10-15% commission'
        ]
      },
      {
        role: 'Sellers',
        icon: '👨‍💼',
        responsibilities: [
          'List products/services',
          'Set prices',
          'Fulfill orders',
          'Maintain inventory',
          'Provide customer service'
        ]
      },
      {
        role: 'Buyers',
        icon: '🛍️',
        responsibilities: [
          'Search & discover',
          'Compare options',
          'Make purchases',
          'Leave reviews',
          'Report issues'
        ]
      }
    ],
    benefits: {
      forBuyers: ['Wide selection', 'Price comparison', 'Review systems', 'Buyer protection'],
      forSellers: ['Ready-made audience', 'Payment processing', 'Marketing tools', 'Analytics'],
      forPlatform: ['Commission revenue', 'Network effects', 'Data insights', 'Brand value']
    },
    examples: ['Amazon Marketplace', 'eBay', 'Etsy', 'Fiverr', 'Upwork'],
    flow: [
      { step: 1, actor: 'Seller', action: 'Lists product on platform', icon: '📦' },
      { step: 2, actor: 'Buyer', action: 'Discovers through search/browse', icon: '🔍' },
      { step: 3, actor: 'Platform', action: 'Processes payment & takes fee', icon: '💳' },
      { step: 4, actor: 'Seller', action: 'Fulfills order', icon: '📬' },
      { step: 5, actor: 'Buyer', action: 'Receives & reviews', icon: '⭐' }
    ],
    tags: ['marketplace', 'platform', 'e-commerce', 'buyers', 'sellers']
  },
  {
    id: 'merchant-traveling-002',
    uuid: sessionless.generateUUID(),
    type: 'marketplace',
    category: 'direct-seller',
    name: 'Traveling Merchant Model',
    subtitle: 'Seller IS the Marketplace',
    description: 'A traveling merchant is both the marketplace and the seller. They curate products, set prices, manage inventory, and directly serve customers. Full control but also full responsibility.',
    colors: {
      primary: '#9B59B6',
      secondary: '#8E44AD',
      accent: '#E74C3C',
      merchantColor: '#3498DB',
      goodsColor: '#F39C12'
    },
    actors: [
      {
        role: 'Traveling Merchant',
        icon: '🎒',
        responsibilities: [
          'Source & curate products',
          'Set all prices',
          'Carry inventory',
          'Travel to customers',
          'Build direct relationships',
          'Keep 100% of profit'
        ]
      },
      {
        role: 'Customers',
        icon: '🏘️',
        responsibilities: [
          'Wait for merchant arrival',
          'Browse available goods',
          'Negotiate prices',
          'Pay directly',
          'Trust merchant reputation'
        ]
      }
    ],
    characteristics: {
      advantages: [
        'No platform fees or commissions',
        'Direct customer relationships',
        'Flexible pricing & negotiation',
        'Complete control over offering',
        'Personal touch & trust'
      ],
      challenges: [
        'Limited by physical capacity',
        'Must manage all logistics',
        'Travel time & costs',
        'Harder to scale',
        'Building initial trust'
      ]
    },
    modernExamples: [
      'Food trucks (mobile restaurant)',
      'Pop-up shops',
      'Farmers at markets',
      'Door-to-door sales',
      'Mobile repair services',
      'Artisan fair vendors'
    ],
    historicalExamples: [
      'Silk Road merchants',
      'Medieval peddlers',
      'Spice traders',
      'Tinkers & craftspeople'
    ],
    flow: [
      { step: 1, actor: 'Merchant', action: 'Sources goods to sell', icon: '📦' },
      { step: 2, actor: 'Merchant', action: 'Travels to customers', icon: '🗺️' },
      { step: 3, actor: 'Merchant', action: 'Sets up & displays wares', icon: '🏪' },
      { step: 4, actor: 'Customer', action: 'Browses & negotiates', icon: '💬' },
      { step: 5, actor: 'Both', action: 'Direct transaction', icon: '🤝' }
    ],
    tags: ['traveling-merchant', 'direct-sales', 'mobile-commerce', 'artisan', 'independent']
  }
];

/**
 * Generate SVG for platform marketplace model
 * Shows buyers, sellers, and platform relationships
 *
 * @param {Object} market - Marketplace object
 * @param {string} marketBDOPubKey - PubKey of this marketplace's BDO
 * @returns {string} SVG string or null if wrong type
 */
export function generateMarketplaceSVG(market, marketBDOPubKey) {
  // Only handle platform marketplace
  if (market.type !== 'marketplace' || market.category !== 'platform-marketplace') {
    return null;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 460" width="400" height="460">
  <defs>
    <linearGradient id="bgGrad-${market.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${market.colors.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${market.colors.secondary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${market.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${market.colors.secondary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${market.colors.accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${market.colors.secondary};stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow-${market.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="${market.colors.accent}" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 20px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: ${market.colors.accent};
      text-anchor: middle;
      font-weight: 600;
    }
    .actor-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 13px;
      fill: white;
      font-weight: bold;
      text-anchor: start;
    }
    .actor-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: white;
      text-anchor: start;
      opacity: 0.9;
    }
    .example-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: white;
      text-anchor: middle;
      opacity: 0.9;
    }
    .save-button {
      fill: url(#saveGrad-${market.id});
      stroke: ${market.colors.accent};
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .save-button:hover {
      filter: url(#saveGlow-${market.id});
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
  <rect x="0" y="0" width="400" height="460" fill="url(#bgGrad-${market.id})" rx="12"/>

  <!-- Icon -->
  <text x="200" y="40" text-anchor="middle" font-size="36">🏪</text>

  <!-- Title -->
  <text class="title" x="200" y="75">${market.name}</text>
  <text class="subtitle" x="200" y="92">${market.subtitle}</text>

  <!-- Three Actors -->
  ${market.actors.map((actor, i) => `
  <!-- Actor ${i + 1}: ${actor.role} -->
  <rect x="${20 + (i * 125)}" y="110" width="115" height="130" fill="rgba(255,255,255,0.1)" rx="8"/>
  <text x="${77 + (i * 125)}" y="133" text-anchor="middle" font-size="32">${actor.icon}</text>
  <text class="actor-title" x="${30 + (i * 125)}" y="155">${actor.role}</text>
  ${actor.responsibilities.slice(0, 4).map((resp, j) =>
    `<text class="actor-text" x="${25 + (i * 125)}" y="${170 + (j * 12)}">• ${resp.substring(0, 14)}</text>`
  ).join('\n  ')}
  `).join('')}

  <!-- Flow diagram -->
  <text class="actor-title" x="20" y="265">Transaction Flow:</text>
  ${market.flow.map((step, i) => `
  <rect x="20" y="${275 + (i * 28)}" width="360" height="24" fill="rgba(255,255,255,0.08)" rx="4"/>
  <text x="30" y="${291 + (i * 28)}" font-size="16">${step.icon}</text>
  <text class="actor-text" x="55" y="${291 + (i * 28)}">${step.step}. ${step.actor}: ${step.action.substring(0, 40)}</text>
  `).join('')}

  <!-- Examples -->
  <text class="actor-title" x="20" y="425">Examples:</text>
  <text class="example-text" x="200" y="440">${market.examples.join(' • ')}</text>

  <!-- Save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="405"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${marketBDOPubKey}","collection":"social"}'
  />
  <text class="button-text" x="200" y="430">💼 Save Marketplace Model</text>
</svg>`;
}

/**
 * Generate SVG for traveling merchant model
 * Shows the classic traveling merchant meme image
 *
 * @param {Object} market - Marketplace object
 * @param {string} marketBDOPubKey - PubKey of this marketplace's BDO
 * @returns {string} SVG string or null if wrong type
 */
export function generateTravelingMerchantSVG(market, marketBDOPubKey) {
  // Only handle traveling merchant
  if (market.type !== 'marketplace' || market.category !== 'direct-seller') {
    return null;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="bgGrad-${market.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${market.colors.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${market.colors.secondary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${market.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${market.colors.secondary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${market.colors.accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${market.colors.secondary};stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow-${market.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feFlood flood-color="${market.colors.accent}" flood-opacity="0.8"/>
      <feComposite in2="SourceAlpha" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 24px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .save-button {
      fill: url(#saveGrad-${market.id});
      stroke: ${market.colors.accent};
      stroke-width: 2;
      cursor: pointer;
    }
    .save-button:hover {
      filter: url(#saveGlow-${market.id});
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
  <rect x="0" y="0" width="400" height="400" fill="url(#bgGrad-${market.id})" rx="12"/>

  <!-- Title -->
  <text class="title" x="200" y="35">Traveling Merchant</text>

  <!-- Meme Image -->
  <image x="50" y="55" width="300" height="280" href="https://i.kym-cdn.com/photos/images/newsfeed/001/062/268/f71.png" preserveAspectRatio="xMidYMid meet"/>

  <!-- Save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="345"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${marketBDOPubKey}","collection":"social"}'
  />
  <text class="button-text" x="200" y="370">🎒 Save Traveling Merchant</text>
</svg>`;
}
