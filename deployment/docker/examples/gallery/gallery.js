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
  }
];

/**
 * Generate SVG for artwork card
 * Single button with save spell to gallery collection
 *
 * @param {Object} artwork - Artwork object
 * @param {string} artworkBDOPubKey - PubKey of this artwork's BDO
 * @returns {string} SVG string
 */
export function generateArtworkSVG(artwork, artworkBDOPubKey) {
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
