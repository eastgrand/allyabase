/**
 * Products with Purchase Buttons
 *
 * Demonstrates products that can be purchased with:
 * - Price embedded in SVG
 * - Payees array in spell components
 * - Support for affiliate links (duplicate with added payee)
 */

import sessionless from 'sessionless-node';

// Generate a creator pubKey for test products
const testCreatorKeys = sessionless.generateKeys();
const CREATOR_PUBKEY = testCreatorKeys.pubKey;

export const productsPosts = [
  {
    id: 'course-react-001',
    uuid: sessionless.generateUUID(),
    type: 'product',
    category: 'course',
    name: 'Advanced React Course',
    subtitle: 'Master React Patterns',
    description: 'Learn advanced React patterns including hooks, context, suspense, and concurrent features. Build production-ready applications.',
    price: 4999, // $49.99
    currency: 'usd',
    creator: CREATOR_PUBKEY,
    // Empty payees array - creator is NOT in payees (can't be removed)
    // Affiliates will be added to this array when creating affiliate links
    payees: [],
    colors: {
      primary: '#61DAFB',
      secondary: '#282C34',
      accent: '#20232A'
    }
  },
  {
    id: 'ebook-planetnine-001',
    uuid: sessionless.generateUUID(),
    type: 'product',
    category: 'ebook',
    name: 'Planet Nine Developer Guide',
    subtitle: 'Complete Ecosystem Documentation',
    description: 'Comprehensive guide to building on Planet Nine. Covers Sessionless auth, MAGIC protocol, BDOs, and all microservices.',
    price: 1999, // $19.99
    currency: 'usd',
    creator: CREATOR_PUBKEY,
    // Empty payees array - creator payment handled separately
    payees: [],
    colors: {
      primary: '#9B59B6',
      secondary: '#8E44AD',
      accent: '#E91E63'
    }
  },
  {
    id: 'wand-flames-001',
    uuid: sessionless.generateUUID(),
    type: 'product',
    category: 'magical_item',
    name: 'Wand of Eternal Flames',
    subtitle: 'Phoenix Feather Core',
    description: 'A powerful magical wand crafted from phoenix feather and obsidian. Channel the elemental power of fire.',
    price: 2499, // $24.99
    currency: 'usd',
    creator: CREATOR_PUBKEY,
    // Empty payees array - only affiliates go here
    payees: [],
    colors: {
      primary: '#E74C3C',
      secondary: '#C0392B',
      accent: '#F39C12'
    }
  }
];

/**
 * Generate SVG for a product with purchase button
 * Includes price and payees in spell components
 *
 * @param {Object} product - Product object
 * @param {string} productBDOPubKey - PubKey of this product's BDO
 * @returns {string} SVG string
 */
export function generateProductSVG(product, productBDOPubKey) {
  const priceDisplay = `$${(product.price / 100).toFixed(2)}`;

  // Build spell components with price and payees
  const spellComponents = {
    bdoPubKey: productBDOPubKey,
    productName: product.name,
    price: product.price,
    currency: product.currency,
    payees: product.payees
  };

  // Escape JSON for SVG attribute
  const spellComponentsJSON = JSON.stringify(spellComponents)
    .replace(/"/g, '&quot;');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="400" height="500">
  <defs>
    <linearGradient id="bgGrad-${product.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${product.colors.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${product.colors.secondary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="purchaseGrad-${product.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2ECC71;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#27AE60;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2ECC71;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${product.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${product.colors.secondary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${product.colors.accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${product.colors.secondary};stop-opacity:1" />
    </linearGradient>

    <filter id="buttonGlow-${product.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="${product.colors.accent}" flood-opacity="0.8"/>
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
      font-size: 22px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      fill: ${product.colors.accent};
      text-anchor: middle;
      font-weight: 600;
    }
    .description {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: white;
      opacity: 0.9;
    }
    .price {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 36px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .currency {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      fill: ${product.colors.accent};
      text-anchor: middle;
    }
    .purchase-button {
      fill: url(#purchaseGrad-${product.id});
      stroke: #27AE60;
      stroke-width: 3;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .purchase-button:hover {
      filter: url(#buttonGlow-${product.id});
    }
    .save-button {
      fill: url(#saveGrad-${product.id});
      stroke: ${product.colors.accent};
      stroke-width: 2;
      cursor: pointer;
    }
    .save-button:hover {
      filter: url(#buttonGlow-${product.id});
    }
    .button-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
      dominant-baseline: middle;
      pointer-events: none;
    }
    .small-button-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      font-weight: 600;
      fill: white;
      text-anchor: middle;
      dominant-baseline: middle;
      pointer-events: none;
    }
  </style>

  <!-- Background -->
  <rect x="0" y="0" width="400" height="500" fill="url(#bgGrad-${product.id})" rx="12"/>

  <!-- Product Icon (based on category) -->
  <text x="200" y="50" text-anchor="middle" font-size="48">${getProductIcon(product.category)}</text>

  <!-- Title & Subtitle -->
  <text class="title" x="200" y="90">${product.name}</text>
  <text class="subtitle" x="200" y="110">${product.subtitle}</text>

  <!-- Description (word-wrapped) -->
  ${wrapText(product.description, 360, 20, 140, 'description')}

  <!-- Price Display -->
  <rect x="100" y="230" width="200" height="80" fill="rgba(255,255,255,0.1)" rx="12"/>
  <text class="price" x="200" y="275">${priceDisplay}</text>
  <text class="currency" x="200" y="295">${product.currency.toUpperCase()}</text>

  <!-- Purchase Button -->
  <rect
    class="purchase-button"
    id="button1"
    x="50"
    y="330"
    width="300"
    height="60"
    rx="12"
    spell="purchase"
    spell-components="${spellComponentsJSON}"
  />
  <text class="button-text" x="200" y="360">💳 Purchase Now</text>

  <!-- Save Button -->
  <rect
    class="save-button"
    id="button2"
    x="50"
    y="405"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${productBDOPubKey}","collection":"products"}'
  />
  <text class="small-button-text" x="200" y="430">📦 Save to Carrier Bag</text>

  <!-- Category Badge -->
  <rect x="20" y="460" width="100" height="25" fill="rgba(255,255,255,0.2)" rx="4"/>
  <text x="70" y="476" text-anchor="middle" font-size="11" fill="white" font-weight="600">${product.category.toUpperCase()}</text>
</svg>`;
}

/**
 * Get emoji icon for product category
 */
function getProductIcon(category) {
  const icons = {
    'course': '🎓',
    'ebook': '📚',
    'magical_item': '✨',
    'software': '💻',
    'tool': '🔧',
    'service': '🛠️',
    'physical': '📦'
  };
  return icons[category] || '🎁';
}

/**
 * Word wrap text for SVG
 */
function wrapText(text, maxWidth, x, y, className) {
  const words = text.split(' ');
  let lines = [];
  let currentLine = '';
  const maxCharsPerLine = Math.floor(maxWidth / 7); // Approximate

  words.forEach(word => {
    if ((currentLine + word).length <= maxCharsPerLine) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  });
  if (currentLine) lines.push(currentLine);

  return lines.slice(0, 4).map((line, i) =>
    `<text class="${className}" x="${x}" y="${y + (i * 16)}">${line}</text>`
  ).join('\n  ');
}
