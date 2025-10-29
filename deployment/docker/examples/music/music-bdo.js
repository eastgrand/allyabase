/**
 * Music BDO Examples for Test Environment
 *
 * These music posts demonstrate:
 * - Embedded music players (Mirlo, Bandcamp, etc.)
 * - Save spell for adding to carrierBag "music" collection
 * - Visual music player cards
 */

import sessionless from 'sessionless-node';

export const exampleMusicTracks = [
  {
    id: 'music-digital-dreams-001',
    uuid: sessionless.generateUUID(),
    type: 'music-track',
    title: 'Digital Dreams',
    artist: 'The Synthesizers',
    platform: 'mirlo',
    embedUrl: 'https://mirlo.space/widget/track/12216',
    artworkUrl: 'https://via.placeholder.com/300x300/667eea/ffffff?text=Digital+Dreams',
    genre: 'Electronic',
    duration: '4:32',
    releaseYear: '2024',
    description: 'A dreamy electronic journey through digital soundscapes.',
    tags: ['electronic', 'synthwave', 'ambient', 'mirlo'],
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
      accent: '#f093fb'
    }
  },
  {
    id: 'music-night-drive-002',
    uuid: sessionless.generateUUID(),
    type: 'music-track',
    title: 'Night Drive',
    artist: 'Retro Wave Collective',
    platform: 'mirlo',
    embedUrl: 'https://mirlo.space/widget/track/12216',
    artworkUrl: 'https://via.placeholder.com/300x300/f093fb/ffffff?text=Night+Drive',
    genre: 'Synthwave',
    duration: '5:18',
    releaseYear: '2024',
    description: 'Cruise through neon-lit streets with retro synthwave vibes.',
    tags: ['synthwave', 'retro', '80s', 'mirlo'],
    colors: {
      primary: '#f093fb',
      secondary: '#f5576c',
      accent: '#4facfe'
    }
  },
  {
    id: 'music-coffee-shop-jazz-003',
    uuid: sessionless.generateUUID(),
    type: 'music-track',
    title: 'Coffee Shop Jazz',
    artist: 'Smooth Trio',
    platform: 'bandcamp',
    embedUrl: 'https://bandcamp.com/EmbeddedPlayer/track=12345',
    artworkUrl: 'https://via.placeholder.com/300x300/4facfe/ffffff?text=Coffee+Shop',
    genre: 'Jazz',
    duration: '6:45',
    releaseYear: '2023',
    description: 'Relax with smooth jazz perfect for your morning coffee.',
    tags: ['jazz', 'smooth', 'relaxing', 'bandcamp'],
    colors: {
      primary: '#4facfe',
      secondary: '#00f2fe',
      accent: '#43e97b'
    }
  }
];

/**
 * Generate SVG for music player using Mirlo
 * Single button with save spell to music collection
 *
 * @param {Object} track - Music track object
 * @param {string} trackBDOPubKey - PubKey of this track's BDO
 * @returns {string} SVG string
 */
export function generateMusicBDO(track, trackBDOPubKey) {
  const { primary, secondary, accent } = track.colors;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 360" width="400" height="360">
  <defs>
    <linearGradient id="bgGrad-${track.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${secondary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${track.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${primary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${secondary};stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow-${track.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="${accent}" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .track-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 22px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .track-artist {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      fill: rgba(255,255,255,0.8);
      text-anchor: middle;
    }
    .track-info {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: rgba(255,255,255,0.7);
      text-anchor: middle;
    }
    .platform-badge {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      font-weight: bold;
      fill: ${accent};
      text-anchor: middle;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .save-button {
      fill: url(#saveGrad-${track.id});
      stroke: ${accent};
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .save-button:hover {
      filter: url(#saveGlow-${track.id});
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
  <rect x="0" y="0" width="400" height="360" fill="url(#bgGrad-${track.id})" rx="12"/>

  <!-- Album artwork placeholder -->
  <rect x="50" y="30" width="300" height="150" fill="rgba(0,0,0,0.3)" rx="8"/>
  <text x="200" y="105" text-anchor="middle" font-size="60" opacity="0.6">🎵</text>

  <!-- Track info -->
  <text class="track-title" x="200" y="210">${track.title}</text>
  <text class="track-artist" x="200" y="230">by ${track.artist}</text>
  <text class="track-info" x="200" y="250">${track.genre} • ${track.duration} • ${track.releaseYear}</text>
  <text class="platform-badge" x="200" y="270">${track.platform}</text>

  <!-- Note about embedding -->
  <text class="track-info" x="200" y="290" font-style="italic">🎧 Playable on ${track.platform.charAt(0).toUpperCase() + track.platform.slice(1)}</text>

  <!-- Single centered save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="305"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${trackBDOPubKey}","collection":"music"}'
  />
  <text class="button-text" x="200" y="330">💾 Save to Music</text>
</svg>`;
}

/**
 * Helper for Mirlo tracks
 * @param {Object} track - Music track object
 * @param {string} trackBDOPubKey - PubKey of this track's BDO
 * @returns {string} SVG string
 */
export function generateMirloBDO(track, trackBDOPubKey) {
  return generateMusicBDO(track, trackBDOPubKey);
}

/**
 * Helper for Bandcamp tracks
 * @param {Object} track - Music track object
 * @param {string} trackBDOPubKey - PubKey of this track's BDO
 * @returns {string} SVG string
 */
export function generateBandcampBDO(track, trackBDOPubKey) {
  return generateMusicBDO(track, trackBDOPubKey);
}
