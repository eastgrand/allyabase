/**
 * Simulations Examples for Test Environment
 *
 * These simulation posts demonstrate:
 * - Scientific simulations, astronomical events, physics demonstrations
 * - Save spell for adding to carrierBag collection (typically "games" or custom)
 * - Educational content with visual representations
 */

import sessionless from 'sessionless-node';

export const simulationsPosts = [
  {
    id: 'simulation-andromeda-collision-001',
    uuid: sessionless.generateUUID(),
    type: 'astronomical-simulation',
    category: 'galaxy-collision',
    name: 'Andromeda-Milky Way Collision',
    subtitle: 'The Great Galactic Merger',
    description: 'A visualization of the predicted collision between the Andromeda Galaxy (M31) and our Milky Way Galaxy. This cosmic event will reshape both galaxies over billions of years.',
    eventDate: '~4.5 billion years from now',
    timeline: [
      {
        time: 'Present Day',
        description: 'Andromeda is 2.5 million light-years away, approaching at 110 km/s'
      },
      {
        time: '+3.75 billion years',
        description: 'First close approach - galaxies begin to interact gravitationally'
      },
      {
        time: '+4.5 billion years',
        description: 'Peak collision - galactic disks interpenetrate'
      },
      {
        time: '+5-6 billion years',
        description: 'Galaxies merge into single elliptical galaxy "Milkomeda"'
      }
    ],
    facts: [
      'Stars are so spread out that stellar collisions are extremely unlikely',
      'Our solar system will likely be flung to outer regions of merged galaxy',
      'Sky will be filled with bright star-forming regions',
      'Supermassive black holes will eventually merge',
      'New bursts of star formation from compressed gas clouds',
      'Sun will already be expanding into red giant by this time'
    ],
    scientificDetails: {
      andromedaMass: '1.5 trillion solar masses',
      milkyWayMass: '1.5 trillion solar masses',
      currentSeparation: '2.537 million light-years',
      approachVelocity: '110 km/s toward us',
      mergerDuration: '~2 billion years',
      resultingGalaxy: 'Elliptical galaxy (Milkomeda/Milkdromeda)'
    },
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800',
    tags: ['astronomy', 'simulation', 'galaxies', 'andromeda', 'milky-way', 'collision'],
    metadata: {
      simulation: true,
      educational: true,
      timeScale: 'billions of years',
      dataSource: 'NASA/ESA Hubble observations'
    }
  },
  {
    id: 'simulation-planet-nine-spaceship-002',
    uuid: sessionless.generateUUID(),
    type: '3d-visualization',
    category: 'planet-visualization',
    name: 'Planet Nine Is A Spaceship',
    subtitle: 'Interactive 3D Planet Visualization',
    description: 'A rotating 3D visualization of a mysterious blue planet with glowing purple rings and atmospheric effects. This celestial body represents the hypothetical ninth planet at the edge of our solar system.',
    facts: [
      'Hypothetical ninth planet beyond Neptune',
      'Estimated mass: 5-10 times Earth',
      'Orbital period: 10,000-20,000 years',
      'Distance: 200-800 AU from Sun',
      'Could explain clustering of trans-Neptunian objects',
      'Or maybe... it\'s a spaceship'
    ],
    visualization: {
      planetColor: '#4a90e2',
      ringColor: '#8b5cf6',
      glowColor: '#fbbf24',
      rotation: 'continuous',
      atmosphere: true
    },
    imageUrl: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800',
    tags: ['3d', 'planet', 'visualization', 'space', 'simulation', 'planet-nine'],
    metadata: {
      interactive: true,
      realtime: true,
      scientific: false,
      artistic: true
    }
  }
];

/**
 * Generate SVG for Andromeda-Milky Way collision simulation
 * Visual representation of two galaxies colliding
 *
 * @param {Object} simulation - Simulation object
 * @param {string} simulationBDOPubKey - PubKey of this simulation's BDO
 * @returns {string} SVG string
 */
export function generateGalaxyCollisionSVG(simulation, simulationBDOPubKey) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 360" width="400" height="360">
  <defs>
    <!-- Galaxy gradients -->
    <radialGradient id="andromedaGlow" cx="50%" cy="50%">
      <stop offset="0%" style="stop-color:#a78bfa;stop-opacity:1" />
      <stop offset="30%" style="stop-color:#7c3aed;stop-opacity:0.8" />
      <stop offset="70%" style="stop-color:#5b21b6;stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:#1a0033;stop-opacity:0" />
    </radialGradient>

    <radialGradient id="milkyWayGlow" cx="50%" cy="50%">
      <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
      <stop offset="30%" style="stop-color:#f59e0b;stop-opacity:0.8" />
      <stop offset="70%" style="stop-color:#d97706;stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:#1a0033;stop-opacity:0" />
    </radialGradient>

    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#a78bfa" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Star pattern -->
    <circle id="star" r="0.8" fill="white" opacity="0.9"/>
  </defs>

  <style>
    .title-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #c4b5fd;
      text-anchor: middle;
    }
    .event-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      font-weight: bold;
      fill: #fbbf24;
      text-anchor: middle;
    }
    .info-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: #d1d5db;
      text-anchor: start;
    }
    .galaxy-label {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: #a78bfa;
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

  <!-- Background - Deep space -->
  <rect x="0" y="0" width="400" height="360" fill="#0a0015" rx="12"/>

  <!-- Scattered stars in background -->
  <use href="#star" x="45" y="25" opacity="0.6"/>
  <use href="#star" x="120" y="35" opacity="0.4"/>
  <use href="#star" x="280" y="30" opacity="0.7"/>
  <use href="#star" x="340" y="45" opacity="0.5"/>
  <use href="#star" x="60" y="80" opacity="0.4"/>
  <use href="#star" x="350" y="90" opacity="0.6"/>
  <use href="#star" x="30" y="150" opacity="0.5"/>
  <use href="#star" x="370" y="160" opacity="0.4"/>
  <use href="#star" x="80" y="250" opacity="0.7"/>
  <use href="#star" x="320" y="240" opacity="0.5"/>
  <use href="#star" x="150" y="280" opacity="0.6"/>
  <use href="#star" x="290" y="290" opacity="0.4"/>

  <!-- Title -->
  <text class="title-text" x="200" y="25">Andromeda-Milky Way Collision</text>
  <text class="subtitle-text" x="200" y="40">The Great Galactic Merger</text>

  <!-- Milky Way Galaxy (right, golden) -->
  <ellipse cx="260" cy="130" rx="50" ry="15" fill="url(#milkyWayGlow)" transform="rotate(-25 260 130)"/>
  <ellipse cx="260" cy="130" rx="35" ry="10" fill="#fbbf24" opacity="0.6" transform="rotate(-25 260 130)"/>
  <ellipse cx="260" cy="130" rx="20" ry="6" fill="#f59e0b" opacity="0.8" transform="rotate(-25 260 130)"/>
  <circle cx="260" cy="130" r="3" fill="#fef3c7"/>
  <text class="galaxy-label" x="260" y="170" fill="#fbbf24">MILKY WAY</text>

  <!-- Andromeda Galaxy (left, purple) -->
  <ellipse cx="140" cy="120" rx="55" ry="18" fill="url(#andromedaGlow)" transform="rotate(20 140 120)"/>
  <ellipse cx="140" cy="120" rx="38" ry="12" fill="#a78bfa" opacity="0.6" transform="rotate(20 140 120)"/>
  <ellipse cx="140" cy="120" rx="22" ry="7" fill="#7c3aed" opacity="0.8" transform="rotate(20 140 120)"/>
  <circle cx="140" cy="120" r="3" fill="#e9d5ff"/>
  <text class="galaxy-label" x="140" y="95" fill="#a78bfa">ANDROMEDA</text>

  <!-- Motion arrows -->
  <path d="M 170 125 L 230 128" stroke="#ec4899" stroke-width="2" fill="none" stroke-dasharray="4,4" opacity="0.8"/>
  <path d="M 225 125 L 230 128 L 225 131" fill="#ec4899" opacity="0.8"/>

  <!-- Event date -->
  <text class="event-text" x="200" y="195">T + 4.5 Billion Years</text>

  <!-- Information -->
  <text class="info-text" x="20" y="220">• Stars so spread out - collisions extremely rare</text>
  <text class="info-text" x="20" y="235">• Solar system likely flung to outer regions</text>
  <text class="info-text" x="20" y="250">• Supermassive black holes will merge</text>
  <text class="info-text" x="20" y="265">• Result: Elliptical galaxy "Milkomeda"</text>

  <!-- Timeline note -->
  <text class="subtitle-text" x="200" y="285">(Sun will already be a red giant by then)</text>

  <!-- Single centered save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="300"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${simulationBDOPubKey}","collection":"games"}'
  />
  <text class="button-text" x="200" y="325">🌌 Save Simulation</text>
</svg>`;
}

/**
 * Generate SVG for Planet Nine spaceship visualization
 * 3D planet with rotating rings and atmospheric effects
 *
 * @param {Object} simulation - Simulation object
 * @param {string} simulationBDOPubKey - PubKey of this simulation's BDO
 * @returns {string} SVG string
 */
export function generatePlanetNineSpaceshipSVG(simulation, simulationBDOPubKey) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 380" width="400" height="380">
  <defs>
    <!-- Planet gradients -->
    <radialGradient id="planetGradient" cx="40%" cy="40%">
      <stop offset="0%" style="stop-color:#6eb5ff;stop-opacity:1" />
      <stop offset="40%" style="stop-color:#4a90e2;stop-opacity:1" />
      <stop offset="80%" style="stop-color:#2563eb;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1e3a8a;stop-opacity:1" />
    </radialGradient>

    <radialGradient id="atmosphereGlow" cx="50%" cy="50%">
      <stop offset="0%" style="stop-color:#4a90e2;stop-opacity:0" />
      <stop offset="70%" style="stop-color:#4a90e2;stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:#60a5fa;stop-opacity:0.6" />
    </radialGradient>

    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0" />
      <stop offset="20%" style="stop-color:#8b5cf6;stop-opacity:0.8" />
      <stop offset="50%" style="stop-color:#a78bfa;stop-opacity:1" />
      <stop offset="80%" style="stop-color:#8b5cf6;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0" />
    </linearGradient>

    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4a90e2;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4a90e2;stop-opacity:1" />
    </linearGradient>

    <filter id="planetGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#60a5fa" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

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

    <!-- Star pattern -->
    <circle id="star" r="0.8" fill="white" opacity="0.9"/>
  </defs>

  <style>
    .title-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 20px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #93c5fd;
      text-anchor: middle;
    }
    .info-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: #d1d5db;
      text-anchor: start;
    }
    .rotation-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: #a78bfa;
      text-anchor: middle;
      font-style: italic;
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

  <!-- Background - Deep space -->
  <rect x="0" y="0" width="400" height="380" fill="#0a0015" rx="12"/>

  <!-- Scattered stars -->
  <use href="#star" x="50" y="30" opacity="0.6"/>
  <use href="#star" x="130" y="45" opacity="0.4"/>
  <use href="#star" x="290" y="35" opacity="0.7"/>
  <use href="#star" x="350" y="50" opacity="0.5"/>
  <use href="#star" x="70" y="90" opacity="0.4"/>
  <use href="#star" x="360" y="100" opacity="0.6"/>
  <use href="#star" x="40" y="180" opacity="0.5"/>
  <use href="#star" x="370" y="170" opacity="0.4"/>
  <use href="#star" x="90" y="270" opacity="0.7"/>
  <use href="#star" x="330" y="260" opacity="0.5"/>

  <!-- Title -->
  <text class="title-text" x="200" y="25">Planet Nine Is A Spaceship</text>
  <text class="subtitle-text" x="200" y="40">3D Planetary Visualization</text>

  <!-- Atmospheric glow (outer) -->
  <circle cx="200" cy="160" r="75" fill="url(#atmosphereGlow)" opacity="0.6"/>

  <!-- Ring (behind planet) -->
  <ellipse cx="200" cy="160" rx="90" ry="20" fill="url(#ringGradient)" opacity="0.6" transform="rotate(-20 200 160)"/>

  <!-- Planet body -->
  <circle cx="200" cy="160" r="60" fill="url(#planetGradient)" filter="url(#planetGlow)"/>

  <!-- Surface features (continents/clouds) -->
  <ellipse cx="185" cy="145" rx="15" ry="8" fill="#3b82f6" opacity="0.3"/>
  <ellipse cx="210" cy="155" rx="12" ry="10" fill="#2563eb" opacity="0.4"/>
  <ellipse cx="195" cy="175" rx="18" ry="6" fill="#60a5fa" opacity="0.2"/>

  <!-- Highlight -->
  <ellipse cx="180" cy="140" rx="20" ry="15" fill="white" opacity="0.15"/>

  <!-- Ring (in front of planet) -->
  <ellipse cx="200" cy="160" rx="90" ry="20" fill="none" stroke="url(#ringGradient)" stroke-width="3" opacity="0.8" transform="rotate(-20 200 160)"/>
  <ellipse cx="200" cy="160" rx="90" ry="20" fill="url(#ringGradient)" opacity="0.4" transform="rotate(-20 200 160)"/>

  <!-- Rotation indicator -->
  <text class="rotation-text" x="200" y="245">⟲ Continuous rotation</text>

  <!-- Information -->
  <text class="info-text" x="20" y="270">• Hypothetical ninth planet beyond Neptune</text>
  <text class="info-text" x="20" y="285">• Mass: 5-10 times Earth</text>
  <text class="info-text" x="20" y="300">• Orbital period: 10,000-20,000 years</text>
  <text class="info-text" x="20" y="315">• Or maybe... it's a spaceship 🚀</text>

  <!-- Single centered save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="325"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${simulationBDOPubKey}","collection":"games"}'
  />
  <text class="button-text" x="200" y="350">🪐 Save Visualization</text>
</svg>`;
}
