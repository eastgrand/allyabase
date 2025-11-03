/**
 * Gallery Examples for Test Environment
 *
 * These gallery posts demonstrate:
 * - Digital artwork, photography, illustrations
 * - Save spell for adding to carrierBag "gallery" collection
 * - Artist information and artwork details
 */

import sessionless from 'sessionless-node';

export const galleryPosts = [
  {
    id: 'artwork-sunset-mountains-001',
    uuid: sessionless.generateUUID(),
    type: 'digital-art',
    title: 'Sunset Over the Mountains',
    artist: 'Elena Riviera',
    description: 'A breathtaking digital painting capturing the serene beauty of a mountain sunset. Vibrant oranges and purples blend seamlessly across the sky while silhouetted peaks stand in quiet majesty.',
    medium: 'Digital Painting',
    year: '2024',
    dimensions: '3840 x 2160 pixels',
    artworkUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    price: 15000, // $150.00
    edition: 'Limited Edition 1/50',
    tags: ['landscape', 'digital-art', 'mountains', 'sunset', 'nature'],
    metadata: {
      style: 'landscape',
      colorPalette: ['#FF6B35', '#F7931E', '#9B59B6', '#2C3E50'],
      available: true,
      printOptions: ['Canvas', 'Metal', 'Acrylic', 'Digital Download'],
      resolution: '4K'
    }
  },
  {
    id: 'artwork-abstract-waves-002',
    uuid: sessionless.generateUUID(),
    type: 'digital-art',
    title: 'Ocean Whispers',
    artist: 'Marcus Chen',
    description: 'An abstract interpretation of ocean waves using flowing forms and a cool color palette. This piece evokes the rhythm and movement of the sea through digital brushwork.',
    medium: 'Digital Abstract',
    year: '2024',
    dimensions: '4000 x 3000 pixels',
    artworkUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800',
    price: 12000, // $120.00
    edition: 'Limited Edition 1/100',
    tags: ['abstract', 'ocean', 'waves', 'digital-art', 'contemporary'],
    metadata: {
      style: 'abstract',
      colorPalette: ['#1A535C', '#4ECDC4', '#F7FFF7', '#FFE66D'],
      available: true,
      printOptions: ['Canvas', 'Fine Art Paper', 'Digital Download'],
      resolution: '4K'
    }
  },
  {
    id: 'photo-city-lights-003',
    uuid: sessionless.generateUUID(),
    type: 'photography',
    title: 'Neon Dreams',
    artist: 'Yuki Tanaka',
    description: 'Night photography capturing the electric energy of a bustling city. Neon signs reflect off rain-slicked streets, creating a cyberpunk aesthetic.',
    medium: 'Photography',
    year: '2024',
    dimensions: '6000 x 4000 pixels',
    artworkUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800',
    price: 9500, // $95.00
    edition: 'Limited Edition 1/25',
    camera: 'Sony A7R IV',
    lens: '24mm f/1.4',
    settings: 'ISO 3200, f/2.0, 1/60s',
    tags: ['photography', 'urban', 'night', 'neon', 'cityscape'],
    metadata: {
      style: 'urban-photography',
      colorPalette: ['#FF006E', '#8338EC', '#3A86FF', '#FB5607'],
      available: true,
      printOptions: ['Fine Art Paper', 'Metal', 'Canvas'],
      resolution: '6K'
    }
  },
  {
    id: 'illustration-cosmic-cat-004',
    uuid: sessionless.generateUUID(),
    type: 'illustration',
    title: 'Cosmic Cat Explorer',
    artist: 'Zoe Martinez',
    description: 'A whimsical illustration of an adventurous cat in a space suit, floating among stars and planets. Perfect for those who love cats and cosmic wonder.',
    medium: 'Digital Illustration',
    year: '2024',
    dimensions: '2400 x 3000 pixels',
    artworkUrl: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800',
    price: 8000, // $80.00
    edition: 'Open Edition',
    tags: ['illustration', 'cat', 'space', 'whimsical', 'cute'],
    metadata: {
      style: 'illustration',
      colorPalette: ['#4A148C', '#E91E63', '#00BCD4', '#FFC107'],
      available: true,
      printOptions: ['Poster', 'Canvas', 'Sticker', 'Digital Download'],
      resolution: 'Print Quality'
    }
  },
  {
    id: 'logo-ecommerce-platforms-005',
    uuid: sessionless.generateUUID(),
    type: 'logo-design',
    category: 'marketplace-logos',
    title: 'Top Ecommerce Marketplace Platforms',
    artist: 'Digital Commerce Archive',
    description: 'A visual collection showcasing the iconic branding of the world\'s leading ecommerce marketplaces. Each platform revolutionized online commerce in its own way, from general retail to handmade goods to global B2B trade.',
    medium: 'Vector Graphics',
    year: '2024',
    dimensions: '1600 x 1200 pixels',
    platforms: [
      {
        name: 'Amazon',
        founded: '1994',
        color: '#FF9900',
        description: 'World\'s largest online retailer',
        symbol: 'A→Z'
      },
      {
        name: 'eBay',
        founded: '1995',
        color: '#E53238',
        description: 'Pioneer of online auctions',
        symbol: 'e'
      },
      {
        name: 'Etsy',
        founded: '2005',
        color: '#F1641E',
        description: 'Handmade & vintage marketplace',
        symbol: 'E'
      },
      {
        name: 'Alibaba',
        founded: '1999',
        color: '#FF6A00',
        description: 'Global B2B marketplace leader',
        symbol: 'Ali'
      }
    ],
    price: 0, // Free educational content
    edition: 'Open Edition',
    tags: ['logos', 'ecommerce', 'marketplace', 'branding', 'digital-commerce'],
    metadata: {
      style: 'logo-collection',
      colorPalette: ['#FF9900', '#E53238', '#F1641E', '#FF6A00'],
      available: true,
      printOptions: ['Digital Download', 'Poster', 'Educational Use'],
      resolution: 'Vector'
    }
  },
  {
    id: 'artwork-billionaire-rocket-006',
    uuid: sessionless.generateUUID(),
    type: 'political-art',
    category: 'social-commentary',
    title: 'Billionaire D***head Fund',
    artist: 'Anonymous Collective',
    description: 'A satirical commentary on billionaire vanity projects and the privatization of space exploration while pressing social issues remain underfunded. The rocket symbolizes misplaced priorities and ego-driven ventures.',
    medium: 'Digital Illustration',
    year: '2024',
    dimensions: '2000 x 3000 pixels',
    colors: {
      primary: '#FF4444',
      secondary: '#FFD700',
      accent: '#FFFFFF',
      background: '#0A0A0A'
    },
    message: 'BILLIONAIRE D***HEAD FUND',
    subtext: 'Funding ego trips since 2000s',
    price: 0, // Free to share
    edition: 'Open Edition',
    tags: ['political-art', 'satire', 'billionaires', 'space', 'social-commentary', 'wealth-inequality'],
    metadata: {
      style: 'satirical-illustration',
      colorPalette: ['#FF4444', '#FFD700', '#0A0A0A', '#FFFFFF'],
      available: true,
      printOptions: ['Poster', 'Digital Download', 'Sticker', 'T-Shirt'],
      resolution: 'Print Quality',
      contentWarning: 'Political satire'
    }
  },
  {
    id: 'artwork-capitol-taxes-007',
    uuid: sessionless.generateUUID(),
    type: 'political-art',
    category: 'social-commentary',
    title: 'Taxes',
    description: 'The Capitol building represents the legislative power of taxation.',
    medium: 'Digital Illustration',
    year: '2024',
    dimensions: '2000 x 2500 pixels',
    colors: {
      primary: '#1E3A8A',
      secondary: '#DC2626',
      accent: '#F59E0B',
      background: '#F3F4F6'
    },
    message: 'TAXES',
    price: 0, // Free to share
    edition: 'Open Edition',
    tags: ['political-art', 'taxes', 'social-commentary', 'capitol'],
    metadata: {
      style: 'political-illustration',
      colorPalette: ['#1E3A8A', '#DC2626', '#F59E0B', '#F3F4F6'],
      available: true,
      printOptions: ['Poster', 'Digital Download', 'Sticker', 'T-Shirt', 'Yard Sign'],
      resolution: 'Print Quality',
      contentWarning: 'Political advocacy'
    }
  },
  {
    id: 'illustration-discovery-pathways-008',
    uuid: sessionless.generateUUID(),
    type: 'illustration',
    category: 'discovery-pathways',
    title: 'Discovery Pathways',
    description: 'Four ways to discover content online: Search engines for finding what you need, Social Media for what your friends share, Push notifications for what apps want you to see, and Recommendation Engines for what algorithms think you\'ll like.',
    medium: 'Digital Illustration',
    year: '2025',
    dimensions: '800 x 800 pixels',
    pathways: [
      { name: 'Search', emoji: '🔍', color: '#0891b2' },
      { name: 'SoMa', emoji: '📱', color: '#06b6d4' },
      { name: 'Push', emoji: '🔔', color: '#22d3ee' },
      { name: 'Engines', emoji: '⚙️', color: '#0e7490' }
    ],
    colors: {
      primary: '#0891b2',
      secondary: '#06b6d4',
      accent: '#22d3ee',
      background: '#0a3240'
    },
    price: 0,
    edition: 'Open Edition',
    tags: ['illustration', 'discovery', 'search', 'social-media', 'algorithms'],
    metadata: {
      style: 'informational-graphic',
      colorPalette: ['#0891b2', '#06b6d4', '#22d3ee', '#0e7490'],
      available: true,
      printOptions: ['Digital Download', 'Poster'],
      resolution: 'High Resolution'
    }
  },
  {
    id: 'illustration-friends-009',
    uuid: sessionless.generateUUID(),
    type: 'illustration',
    category: 'social-connection',
    title: 'Friends',
    description: 'Two friends giving each other a high five - celebrating connection, friendship, and the joy of human interaction.',
    medium: 'Digital Illustration',
    year: '2025',
    dimensions: '800 x 800 pixels',
    colors: {
      primary: '#ec4899',
      secondary: '#f472b6',
      accent: '#fbcfe8',
      background: '#831843'
    },
    price: 0,
    edition: 'Open Edition',
    tags: ['illustration', 'friends', 'friendship', 'social', 'connection'],
    metadata: {
      style: 'simple-illustration',
      colorPalette: ['#ec4899', '#f472b6', '#fbcfe8', '#831843'],
      available: true,
      printOptions: ['Digital Download', 'Poster', 'Greeting Card'],
      resolution: 'High Resolution'
    }
  }
];

/**
 * Generate SVG for artwork card
 * Single button with save spell to gallery collection
 *
 * @param {Object} artwork - Artwork object
 * @param {string} artworkBDOPubKey - PubKey of this artwork's BDO
 * @returns {string} SVG string or null if wrong type
 */
export function generateArtworkSVG(artwork, artworkBDOPubKey) {
  // Skip marketplace logos - they use generateMarketplaceLogosSVG
  if (artwork.type === 'logo-design' && artwork.category === 'marketplace-logos') {
    return null;
  }

  // Skip political art - they use generatePoliticalArtSVG
  if (artwork.type === 'political-art' && artwork.category === 'social-commentary') {
    return null;
  }

  // Skip discovery pathways - they use generateDiscoveryPathwaysSVG
  if (artwork.category === 'discovery-pathways') {
    return null;
  }

  // Skip friends illustration - they use generateFriendsIllustrationSVG
  if (artwork.category === 'social-connection') {
    return null;
  }

  const priceDisplay = artwork.price ? `$${(artwork.price / 100).toFixed(2)}` : 'Price on Request';
  const icon = artwork.type === 'photography' ? '📷' : artwork.type === 'illustration' ? '🎨' : '🖼️';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" width="400" height="320">
  <defs>
    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#6d28d9;stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#8b5cf6" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .artwork-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .artwork-artist {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: #c4b5fd;
      text-anchor: middle;
    }
    .artwork-meta {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #a78bfa;
      text-anchor: start;
    }
    .artwork-description {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #d1d5db;
      text-anchor: start;
    }
    .price-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 16px;
      font-weight: bold;
      fill: #fbbf24;
      text-anchor: middle;
    }
    .edition-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: #9ca3af;
      text-anchor: middle;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: #8b5cf6;
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

  <!-- Artwork Info -->
  <text class="artwork-title" x="200" y="70">${artwork.title.length > 40 ? artwork.title.substring(0, 37) + '...' : artwork.title}</text>
  <text class="artwork-artist" x="200" y="88">by ${artwork.artist}</text>

  <!-- Meta info -->
  <text class="artwork-meta" x="20" y="110">${artwork.medium} • ${artwork.year}</text>
  <text class="artwork-meta" x="20" y="125">${artwork.dimensions}</text>

  <!-- Description -->
  <text class="artwork-description" x="20" y="150">${artwork.description.substring(0, 65)}...</text>
  <text class="artwork-description" x="20" y="165">${artwork.description.substring(65, 130)}...</text>
  <text class="artwork-description" x="20" y="180">${artwork.description.substring(130, 195)}...</text>

  <!-- Price and edition -->
  <text class="price-text" x="200" y="210">${priceDisplay}</text>
  <text class="edition-text" x="200" y="227">${artwork.edition || 'Original'}</text>

  <!-- Single centered save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="250"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${artworkBDOPubKey}","collection":"gallery"}'
  />
  <text class="button-text" x="200" y="275">🎨 Save to Gallery</text>
</svg>`;
}

/**
 * Generate SVG for marketplace logos collection
 * Shows stylized logos of major ecommerce platforms
 *
 * @param {Object} artwork - Artwork object with platforms array
 * @param {string} artworkBDOPubKey - PubKey of this artwork's BDO
 * @returns {string} SVG string or null if wrong type
 */
export function generateMarketplaceLogosSVG(artwork, artworkBDOPubKey) {
  // Only handle marketplace logos
  if (artwork.type !== 'logo-design' || artwork.category !== 'marketplace-logos') {
    return null;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="400" height="480">
  <defs>
    <linearGradient id="bgGrad-${artwork.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#16213e;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${artwork.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#6d28d9;stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow-${artwork.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#8b5cf6" flood-opacity="0.8"/>
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
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #c4b5fd;
      text-anchor: middle;
    }
    .platform-name {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 20px;
      font-weight: bold;
      text-anchor: middle;
      dominant-baseline: middle;
    }
    .platform-symbol {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 32px;
      font-weight: 900;
      text-anchor: middle;
      dominant-baseline: middle;
    }
    .platform-info {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: #d1d5db;
      text-anchor: middle;
    }
    .platform-desc {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 8px;
      fill: #9ca3af;
      text-anchor: middle;
    }
    .save-button {
      fill: url(#saveGrad-${artwork.id});
      stroke: #8b5cf6;
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .save-button:hover {
      filter: url(#saveGlow-${artwork.id});
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
  <rect x="0" y="0" width="400" height="480" fill="url(#bgGrad-${artwork.id})" rx="12"/>

  <!-- Icon -->
  <text x="200" y="35" text-anchor="middle" font-size="30">🏪</text>

  <!-- Title -->
  <text class="title" x="200" y="65">${artwork.title}</text>
  <text class="subtitle" x="200" y="80">${artwork.description.substring(0, 60)}...</text>

  <!-- Four platform logos in 2x2 grid -->
  ${artwork.platforms.map((platform, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 70 + (col * 180);
    const y = 110 + (row * 160);

    return `
  <!-- ${platform.name} -->
  <rect x="${x - 60}" y="${y}" width="140" height="140" fill="rgba(255,255,255,0.05)" rx="12" stroke="${platform.color}" stroke-width="2"/>
  <text class="platform-symbol" x="${x}" y="${y + 50}" fill="${platform.color}">${platform.symbol}</text>
  <text class="platform-name" x="${x}" y="${y + 90}" fill="${platform.color}">${platform.name}</text>
  <text class="platform-info" x="${x}" y="${y + 108}">Founded ${platform.founded}</text>
  <text class="platform-desc" x="${x}" y="${y + 120}">${platform.description}</text>
    `;
  }).join('')}

  <!-- Save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="425"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${artworkBDOPubKey}","collection":"gallery"}'
  />
  <text class="button-text" x="200" y="450">🏪 Save to Gallery</text>
</svg>`;
}

/**
 * Generate SVG for political art / social commentary
 * Rocket illustration with satirical message
 *
 * @param {Object} artwork - Artwork object with message and colors
 * @param {string} artworkBDOPubKey - PubKey of this artwork's BDO
 * @returns {string} SVG string or null if wrong type
 */
export function generatePoliticalArtSVG(artwork, artworkBDOPubKey) {
  // Only handle political art / social commentary
  if (artwork.type !== 'political-art' || artwork.category !== 'social-commentary') {
    return null;
  }

  // Check if this is the Capitol/taxes artwork
  if (artwork.id === 'artwork-capitol-taxes-007') {
    return generateCapitolTaxesSVG(artwork, artworkBDOPubKey);
  }

  // Otherwise, render the rocket SVG
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="400" height="500">
  <defs>
    <linearGradient id="bgGrad-${artwork.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${artwork.colors.background};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="rocketGrad-${artwork.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#CCCCCC;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#666666;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="flameGrad-${artwork.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#FFFF00;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#FF6600;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF0000;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${artwork.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${artwork.colors.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#CC0000;stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow-${artwork.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="${artwork.colors.primary}" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="glow-${artwork.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="${artwork.colors.secondary}" flood-opacity="0.6"/>
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
      font-size: 28px;
      font-weight: 900;
      fill: ${artwork.colors.primary};
      text-anchor: middle;
      letter-spacing: 2px;
      filter: url(#glow-${artwork.id});
    }
    .subtext {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: ${artwork.colors.secondary};
      text-anchor: middle;
      font-style: italic;
    }
    .artist {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: #999999;
      text-anchor: middle;
    }
    .save-button {
      fill: url(#saveGrad-${artwork.id});
      stroke: ${artwork.colors.primary};
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .save-button:hover {
      filter: url(#saveGlow-${artwork.id});
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
  <rect x="0" y="0" width="400" height="500" fill="url(#bgGrad-${artwork.id})" rx="12"/>

  <!-- Stars background -->
  <circle cx="50" cy="50" r="1.5" fill="white" opacity="0.8"/>
  <circle cx="120" cy="80" r="1" fill="white" opacity="0.6"/>
  <circle cx="350" cy="60" r="1.5" fill="white" opacity="0.7"/>
  <circle cx="300" cy="120" r="1" fill="white" opacity="0.5"/>
  <circle cx="80" cy="150" r="1.2" fill="white" opacity="0.8"/>
  <circle cx="370" cy="180" r="1" fill="white" opacity="0.6"/>
  <circle cx="30" cy="200" r="1.5" fill="white" opacity="0.7"/>
  <circle cx="330" cy="240" r="1.2" fill="white" opacity="0.5"/>

  <!-- Rocket body -->
  <g transform="translate(200, 220)">
    <!-- Main body -->
    <ellipse cx="0" cy="0" rx="30" ry="80" fill="url(#rocketGrad-${artwork.id})" stroke="#333333" stroke-width="2"/>

    <!-- Nose cone -->
    <path d="M -30,-80 L 0,-120 L 30,-80 Z" fill="#888888" stroke="#333333" stroke-width="2"/>

    <!-- Window -->
    <circle cx="0" cy="-40" r="12" fill="#003366" stroke="#333333" stroke-width="2"/>
    <circle cx="0" cy="-40" r="8" fill="#0066CC" opacity="0.5"/>

    <!-- Dollar sign on body -->
    <text x="0" y="20" text-anchor="middle" font-size="40" font-weight="bold" fill="${artwork.colors.secondary}" opacity="0.8">$</text>

    <!-- Fins -->
    <path d="M -30,40 L -60,80 L -30,70 Z" fill="#666666" stroke="#333333" stroke-width="2"/>
    <path d="M 30,40 L 60,80 L 30,70 Z" fill="#666666" stroke="#333333" stroke-width="2"/>

    <!-- Flames -->
    <ellipse cx="0" cy="85" rx="25" ry="35" fill="url(#flameGrad-${artwork.id})" opacity="0.9"/>
    <ellipse cx="-5" cy="90" rx="15" ry="25" fill="#FFFF00" opacity="0.7"/>
    <ellipse cx="5" cy="95" rx="12" ry="20" fill="#FFFFFF" opacity="0.6"/>
  </g>

  <!-- Title (two lines) -->
  <text class="title" x="200" y="360">BILLIONAIRE D***HEAD</text>
  <text class="title" x="200" y="390">FUND</text>

  <!-- Subtext -->
  <text class="subtext" x="200" y="410">${artwork.subtext}</text>

  <!-- Artist -->
  <text class="artist" x="200" y="420">by ${artwork.artist}</text>

  <!-- Save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="445"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${artworkBDOPubKey}","collection":"gallery"}'
  />
  <text class="button-text" x="200" y="470">🚀 Save to Gallery</text>
</svg>`;
}

/**
 * Generate SVG for Capitol/taxes political art
 * Capitol building illustration with simple tax message
 *
 * @param {Object} artwork - Artwork object with message
 * @param {string} artworkBDOPubKey - PubKey of this artwork's BDO
 * @returns {string} SVG string
 */
function generateCapitolTaxesSVG(artwork, artworkBDOPubKey) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="bgGrad-${artwork.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#E0E7FF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:${artwork.colors.background};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="domeGrad-${artwork.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#F3F4F6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#9CA3AF;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${artwork.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${artwork.colors.secondary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#991B1B;stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow-${artwork.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="${artwork.colors.secondary}" flood-opacity="0.8"/>
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
      font-size: 48px;
      font-weight: 900;
      fill: ${artwork.colors.secondary};
      text-anchor: middle;
      letter-spacing: 4px;
    }
    .save-button {
      fill: url(#saveGrad-${artwork.id});
      stroke: ${artwork.colors.secondary};
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .save-button:hover {
      filter: url(#saveGlow-${artwork.id});
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
  <rect x="0" y="0" width="400" height="400" fill="url(#bgGrad-${artwork.id})" rx="12"/>

  <!-- Capitol Building -->
  <g transform="translate(200, 130)">
    <!-- Dome -->
    <ellipse cx="0" cy="-40" rx="50" ry="20" fill="url(#domeGrad-${artwork.id})" stroke="${artwork.colors.primary}" stroke-width="2"/>
    <rect x="-50" y="-40" width="100" height="10" fill="#D1D5DB" stroke="${artwork.colors.primary}" stroke-width="1"/>

    <!-- Top of dome -->
    <ellipse cx="0" cy="-60" rx="30" ry="15" fill="#E5E7EB" stroke="${artwork.colors.primary}" stroke-width="2"/>
    <rect x="-5" y="-85" width="10" height="25" fill="#9CA3AF" stroke="${artwork.colors.primary}" stroke-width="1"/>
    <polygon points="0,-90 -8,-85 8,-85" fill="${artwork.colors.accent}" stroke="${artwork.colors.primary}" stroke-width="1"/>

    <!-- Main building body -->
    <rect x="-80" y="-30" width="160" height="70" fill="#F9FAFB" stroke="${artwork.colors.primary}" stroke-width="2"/>

    <!-- Columns (6 columns) -->
    <rect x="-70" y="-30" width="8" height="70" fill="#E5E7EB" stroke="${artwork.colors.primary}" stroke-width="1"/>
    <rect x="-42" y="-30" width="8" height="70" fill="#E5E7EB" stroke="${artwork.colors.primary}" stroke-width="1"/>
    <rect x="-14" y="-30" width="8" height="70" fill="#E5E7EB" stroke="${artwork.colors.primary}" stroke-width="1"/>
    <rect x="14" y="-30" width="8" height="70" fill="#E5E7EB" stroke="${artwork.colors.primary}" stroke-width="1"/>
    <rect x="42" y="-30" width="8" height="70" fill="#E5E7EB" stroke="${artwork.colors.primary}" stroke-width="1"/>
    <rect x="70" y="-30" width="8" height="70" fill="#E5E7EB" stroke="${artwork.colors.primary}" stroke-width="1"/>

    <!-- Base/steps -->
    <rect x="-90" y="40" width="180" height="8" fill="#D1D5DB" stroke="${artwork.colors.primary}" stroke-width="2"/>
    <rect x="-95" y="48" width="190" height="6" fill="#9CA3AF" stroke="${artwork.colors.primary}" stroke-width="1"/>
  </g>

  <!-- Title -->
  <text class="title" x="200" y="260">${artwork.message}</text>

  <!-- Save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="310"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${artworkBDOPubKey}","collection":"gallery"}'
  />
  <text class="button-text" x="200" y="335">🏛️ Save to Gallery</text>
</svg>`;
}

/**
 * Generate SVG for Discovery Pathways illustration
 * Four labeled icons showing content discovery methods
 *
 * @param {Object} artwork - Artwork object with pathways array
 * @param {string} artworkBDOPubKey - PubKey of this artwork's BDO
 * @returns {string} SVG string or null if wrong type
 */
export function generateDiscoveryPathwaysSVG(artwork, artworkBDOPubKey) {
  if (artwork.category !== 'discovery-pathways') {
    return null;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="bgGrad-${artwork.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${artwork.colors.background};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#051923;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${artwork.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${artwork.colors.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${artwork.colors.secondary};stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow-${artwork.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feFlood flood-color="${artwork.colors.accent}" flood-opacity="0.8"/>
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
      font-size: 28px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .pathway-label {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 16px;
      font-weight: 600;
      text-anchor: middle;
      fill: white;
    }
    .save-button {
      fill: url(#saveGrad-${artwork.id});
      stroke: ${artwork.colors.accent};
      stroke-width: 2;
      cursor: pointer;
    }
    .save-button:hover {
      filter: url(#saveGlow-${artwork.id});
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
  <rect x="0" y="0" width="400" height="400" fill="url(#bgGrad-${artwork.id})" rx="12"/>

  <!-- Title -->
  <text class="title" x="200" y="40">Discovery Pathways</text>

  <!-- Four pathways in 2x2 grid with labeled icons -->
  ${artwork.pathways.map((pathway, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 100 + (col * 200);
    const y = 90 + (row * 150);

    return `
  <!-- ${pathway.name} -->
  <circle cx="${x}" cy="${y}" r="50" fill="${pathway.color}" opacity="0.2" stroke="${pathway.color}" stroke-width="3"/>
  <text x="${x}" y="${y + 15}" text-anchor="middle" font-size="50">${pathway.emoji}</text>
  <text class="pathway-label" x="${x}" y="${y + 75}" fill="${pathway.color}">${pathway.name}</text>
    `;
  }).join('')}

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
    spell-components='{"bdoPubKey":"${artworkBDOPubKey}","collection":"gallery"}'
  />
  <text class="button-text" x="200" y="370">🔍 Save to Gallery</text>
</svg>`;
}

/**
 * Generate SVG for Friends illustration
 * Two people giving high five
 *
 * @param {Object} artwork - Artwork object
 * @param {string} artworkBDOPubKey - PubKey of this artwork's BDO
 * @returns {string} SVG string or null if wrong type
 */
export function generateFriendsIllustrationSVG(artwork, artworkBDOPubKey) {
  if (artwork.category !== 'social-connection') {
    return null;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="bgGrad-${artwork.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${artwork.colors.background};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4a0e2d;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${artwork.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${artwork.colors.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${artwork.colors.secondary};stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow-${artwork.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feFlood flood-color="${artwork.colors.accent}" flood-opacity="0.8"/>
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
      font-size: 32px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .save-button {
      fill: url(#saveGrad-${artwork.id});
      stroke: ${artwork.colors.accent};
      stroke-width: 2;
      cursor: pointer;
    }
    .save-button:hover {
      filter: url(#saveGlow-${artwork.id});
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
  <rect x="0" y="0" width="400" height="400" fill="url(#bgGrad-${artwork.id})" rx="12"/>

  <!-- Title -->
  <text class="title" x="200" y="45">Friends</text>

  <!-- Two friends giving high five -->
  <g transform="translate(200, 200)">
    <!-- Left person (body) -->
    <circle cx="-70" cy="0" r="25" fill="${artwork.colors.secondary}"/>
    <ellipse cx="-70" cy="40" rx="20" ry="35" fill="${artwork.colors.secondary}"/>

    <!-- Left person (head) -->
    <circle cx="-70" cy="-35" r="18" fill="${artwork.colors.primary}"/>

    <!-- Left arm raised for high five -->
    <rect x="-55" y="-10" width="12" height="40" fill="${artwork.colors.secondary}" transform="rotate(-45, -49, 10)"/>
    <circle cx="-30" cy="-20" r="8" fill="${artwork.colors.accent}"/>

    <!-- Right person (body) -->
    <circle cx="70" cy="0" r="25" fill="${artwork.colors.secondary}"/>
    <ellipse cx="70" cy="40" rx="20" ry="35" fill="${artwork.colors.secondary}"/>

    <!-- Right person (head) -->
    <circle cx="70" cy="-35" r="18" fill="${artwork.colors.primary}"/>

    <!-- Right arm raised for high five -->
    <rect x="43" y="-10" width="12" height="40" fill="${artwork.colors.secondary}" transform="rotate(45, 49, 10)"/>
    <circle cx="30" cy="-20" r="8" fill="${artwork.colors.accent}"/>

    <!-- High five impact sparkles -->
    <text x="0" y="-25" text-anchor="middle" font-size="30" fill="${artwork.colors.accent}">✨</text>
    <circle cx="0" cy="-20" r="15" fill="${artwork.colors.accent}" opacity="0.3"/>
  </g>

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
    spell-components='{"bdoPubKey":"${artworkBDOPubKey}","collection":"gallery"}'
  />
  <text class="button-text" x="200" y="370">👋 Save to Gallery</text>
</svg>`;
}
