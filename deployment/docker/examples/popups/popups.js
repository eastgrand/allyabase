/**
 * Popup Post Examples for Test Environment
 *
 * These popup posts demonstrate:
 * - SaVaGe two-button template integration
 * - Magicard spell navigation to location views
 * - Save spell for collecting popups
 * - One-button template for navigation back
 */

import sessionless from 'sessionless-node';

export const popupPosts = [
  {
    id: 'popup-coffee-meetup-001',
    uuid: sessionless.generateUUID(),
    name: 'Coffee & Code Meetup',
    description: 'Join us for an informal gathering of developers and tech enthusiasts. Share your projects, discuss the latest in web development, and enjoy great coffee. All skill levels welcome!',
    location: 'Stumptown Coffee Roasters, 128 SW 3rd Ave, Portland, OR 97204',
    dateTimes: [
      {
        startDateTime: '2025-11-15T10:00:00Z',
        endDateTime: '2025-11-15T12:00:00Z'
      }
    ],
    coordinates: {
      latitude: 45.5202,
      longitude: -122.6742
    },
    layout: 'mixed',
    imageUri: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400',
    category: 'tech-meetup',
    tags: ['coffee', 'coding', 'meetup', 'portland', 'tech'],
    creatorName: 'Portland Dev Community',
    metadata: {
      capacity: 30,
      cost: 'Free',
      created_at: '2025-10-20T10:00:00Z'
    }
  },
  {
    id: 'popup-art-walk-002',
    uuid: sessionless.generateUUID(),
    name: 'Pearl District Art Walk',
    description: 'Explore the vibrant Pearl District art scene with guided tours through local galleries. Meet artists, view new exhibitions, and enjoy complimentary wine and appetizers. A perfect evening for art lovers!',
    location: 'Pearl District Art Hub, 1000 NW Lovejoy St, Portland, OR 97209',
    dateTimes: [
      {
        startDateTime: '2025-11-22T17:00:00Z',
        endDateTime: '2025-11-22T21:00:00Z'
      }
    ],
    coordinates: {
      latitude: 45.5289,
      longitude: -122.6832
    },
    layout: 'mixed',
    imageUri: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400',
    category: 'art-culture',
    tags: ['art', 'gallery', 'wine', 'pearl-district', 'culture'],
    creatorName: 'Pearl Arts Collective',
    metadata: {
      capacity: 75,
      cost: 'Free',
      created_at: '2025-10-20T11:00:00Z'
    }
  },
  {
    id: 'popup-food-cart-fest-003',
    uuid: sessionless.generateUUID(),
    name: 'Food Cart Festival',
    description: 'Experience Portland\'s famous food cart culture at its finest! Sample dishes from 20+ award-winning carts featuring cuisines from around the world. Live music, craft beverages, and family-friendly atmosphere.',
    location: 'Cartlandia Food Cart Pod, SE 82nd Ave & Foster Rd, Portland, OR 97266',
    dateTimes: [
      {
        startDateTime: '2025-12-03T11:00:00Z',
        endDateTime: '2025-12-03T20:00:00Z'
      },
      {
        startDateTime: '2025-12-04T11:00:00Z',
        endDateTime: '2025-12-04T20:00:00Z'
      }
    ],
    coordinates: {
      latitude: 45.4793,
      longitude: -122.5785
    },
    layout: 'mixed',
    imageUri: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
    category: 'food-drink',
    tags: ['food', 'festival', 'food-carts', 'music', 'family-friendly'],
    creatorName: 'Portland Food Cart Association',
    metadata: {
      capacity: 500,
      cost: 'Free entry, pay per cart',
      created_at: '2025-10-20T12:00:00Z'
    }
  }
];

/**
 * Generate two-button SVG using SaVaGe template style
 * Button 1: Magicard spell to view location
 * Button 2: Save spell to save popup
 *
 * @param {Object} popup - Popup post object
 * @param {string} locationBDOPubKey - PubKey of the location view BDO
 * @param {string} popupBDOPubKey - PubKey of this popup's BDO
 * @returns {string} SVG string
 */
export function generatePopupTwoButtonSVG(popup, locationBDOPubKey, popupBDOPubKey) {
  // Calculate date display
  const firstDateTime = popup.dateTimes[0];
  const dateDisplay = new Date(firstDateTime.startDateTime).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="400" height="200">
  <defs>
    <!-- Gradients for buttons -->
    <linearGradient id="viewLocationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#6d28d9;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0d9488;stop-opacity:1" />
    </linearGradient>

    <!-- Glow filters for hover effects -->
    <filter id="buttonGlow1" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#8b5cf6" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="buttonGlow2" x="-50%" y="-50%" width="200%" height="200%">
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
    .popup-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 20px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .popup-info {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: #a78bfa;
      text-anchor: middle;
    }
    .button-rect {
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .button1 {
      fill: url(#viewLocationGrad);
      stroke: #8b5cf6;
    }
    .button1:hover {
      filter: url(#buttonGlow1);
    }
    .button2 {
      fill: url(#saveGrad);
      stroke: #10b981;
    }
    .button2:hover {
      filter: url(#buttonGlow2);
    }
    .button-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
      dominant-baseline: middle;
      pointer-events: none;
    }
  </style>

  <!-- Background -->
  <rect x="0" y="0" width="400" height="200" fill="#1a0033" rx="12"/>

  <!-- Event Info Header -->
  <text class="popup-title" x="200" y="30">${popup.name}</text>
  <text class="popup-info" x="200" y="50">${dateDisplay}</text>
  <text class="popup-info" x="200" y="68">${popup.location.split(',')[0]}</text>

  <!-- Two buttons side-by-side (SaVaGe two-button template style) -->

  <!-- Button 1: View Location (magicard spell) -->
  <rect
    class="button-rect button1"
    id="button1"
    x="20"
    y="100"
    width="175"
    height="80"
    rx="12"
    spell="magicard"
    spell-component="${locationBDOPubKey}"
  />
  <text class="button-text" x="107.5" y="140">📍 View Location</text>

  <!-- Button 2: Save (save spell) -->
  <rect
    class="button-rect button2"
    id="button2"
    x="205"
    y="100"
    width="175"
    height="80"
    rx="12"
    spell="save"
    spell-component="${popupBDOPubKey}"
  />
  <text class="button-text" x="292.5" y="140">💾 Save</text>
</svg>`;
}

/**
 * Generate one-button SVG for location view using SaVaGe template style
 * Single button with magicard spell to navigate back to original popup
 *
 * @param {Object} popup - Popup post object
 * @param {string} popupBDOPubKey - PubKey of the popup BDO to navigate back to
 * @returns {string} SVG string
 */
export function generateLocationViewSVG(popup, popupBDOPubKey) {
  // Format the location for display
  const locationParts = popup.location.split(',');
  const venueName = locationParts[0].trim();
  const address = locationParts.slice(1).join(',').trim();

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="400" height="200">
  <defs>
    <!-- Gradient for back button -->
    <linearGradient id="backButtonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#db2777;stop-opacity:1" />
    </linearGradient>

    <!-- Glow filter -->
    <filter id="backGlow" x="-50%" y="-50%" width="200%" height="200%">
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
    .location-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .location-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: #a78bfa;
      text-anchor: middle;
    }
    .coords-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: #6d28d9;
      text-anchor: middle;
    }
    .back-button {
      fill: url(#backButtonGrad);
      stroke: #ec4899;
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .back-button:hover {
      filter: url(#backGlow);
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
  <rect x="0" y="0" width="400" height="200" fill="#1a0033" rx="12"/>

  <!-- Location icon -->
  <text x="200" y="35" text-anchor="middle" font-size="30">📍</text>

  <!-- Location Info -->
  <text class="location-title" x="200" y="65">${venueName}</text>
  <text class="location-text" x="200" y="85">${address}</text>
  ${popup.coordinates ? `<text class="coords-text" x="200" y="100">${popup.coordinates.latitude.toFixed(4)}, ${popup.coordinates.longitude.toFixed(4)}</text>` : ''}

  <!-- Single centered back button (SaVaGe one-button template style) -->
  <rect
    class="back-button"
    id="button1"
    x="50"
    y="130"
    width="300"
    height="50"
    rx="12"
    spell="magicard"
    spell-component="${popupBDOPubKey}"
  />
  <text class="button-text" x="200" y="155">← Back to Event</text>
</svg>`;
}
