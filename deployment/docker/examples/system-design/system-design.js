/**
 * System Design Examples for Test Environment
 *
 * These designs demonstrate:
 * - The Stack: Protocol layers
 * - allyabase: Backend-as-a-Service
 * - The Nullary: No cruft applications
 */

import sessionless from 'sessionless-node';

export const systemDesigns = [
  {
    id: 'stack-protocols-001',
    uuid: sessionless.generateUUID(),
    type: 'system-design',
    category: 'the-stack',
    name: 'The Stack',
    subtitle: 'Protocol Layers',
    description: 'The foundational protocols that power Planet Nine - from Sessionless authentication to Teleportation.',
    layers: [
      { name: 'Teleportation', emoji: '🌀', color: '#4c1d95' },
      { name: 'MAGIC', emoji: '✨', color: '#5b21b6' },
      { name: 'Sessionless', emoji: '🔑', color: '#6d28d9' }
    ],
    colors: {
      primary: '#7c3aed',
      secondary: '#6d28d9',
      accent: '#a78bfa',
      background: '#4c1d95'
    },
    tags: ['protocols', 'stack', 'infrastructure', 'magic', 'sessionless', 'teleportation']
  },
  {
    id: 'stack-flow-002',
    uuid: sessionless.generateUUID(),
    type: 'system-design',
    category: 'the-stack-flow',
    name: 'Protocol Flow',
    subtitle: 'From User to Sessionless',
    description: 'How user interactions flow through the protocol stack - from high-level teleportation down to cryptographic authentication.',
    flow: [
      { step: 'User Action', emoji: '👤', color: '#8b5cf6' },
      { step: 'Teleportation', emoji: '🌀', color: '#7c3aed' },
      { step: 'MAGIC', emoji: '✨', color: '#6d28d9' },
      { step: 'Sessionless', emoji: '🔑', color: '#5b21b6' }
    ],
    colors: {
      primary: '#7c3aed',
      secondary: '#6d28d9',
      accent: '#a78bfa',
      background: '#4c1d95'
    },
    tags: ['protocols', 'flow', 'user-experience', 'sessionless']
  },
  {
    id: 'allyabase-infrastructure-001',
    uuid: sessionless.generateUUID(),
    type: 'system-design',
    category: 'allyabase',
    name: 'allyabase',
    subtitle: '12 Core Miniservices',
    description: 'Complete backend infrastructure with 12 specialized miniservices - each doing one thing well.',
    miniservices: [
      { name: 'Addie', emoji: '💰', color: '#10b981', desc: 'Accountant' },
      { name: 'Aretha', emoji: '🎫', color: '#059669', desc: 'Nineum allocation' },
      { name: 'BDO', emoji: '💎', color: '#047857', desc: 'Big Dumb Objects' },
      { name: 'Continuebee', emoji: '🔄', color: '#065f46', desc: 'State verification' },
      { name: 'Covenant', emoji: '📜', color: '#10b981', desc: 'Contracts' },
      { name: 'Dolores', emoji: '🎬', color: '#059669', desc: 'Videos' },
      { name: 'Fount', emoji: '⛲', color: '#047857', desc: 'MAGIC protocol' },
      { name: 'Joan', emoji: '🔓', color: '#065f46', desc: 'Recovery' },
      { name: 'Julia', emoji: '💬', color: '#10b981', desc: 'Peer associations' },
      { name: 'Minnie', emoji: '📧', color: '#059669', desc: 'Email server' },
      { name: 'Pref', emoji: '⚙️', color: '#047857', desc: 'Preferences' },
      { name: 'Sanora', emoji: '🛍️', color: '#065f46', desc: 'Products' }
    ],
    colors: {
      primary: '#059669',
      secondary: '#047857',
      accent: '#34d399',
      background: '#064e3b'
    },
    tags: ['backend', 'baas', 'infrastructure', 'miniservices']
  },
  {
    id: 'allyabase-developer-001',
    uuid: sessionless.generateUUID(),
    type: 'system-design',
    category: 'allyabase-dev',
    name: 'Developer Experience',
    subtitle: 'Ship Faster',
    description: 'allyabase handles the backend so developers can focus on building great user experiences.',
    split: {
      you: {
        title: 'You Build',
        items: ['User Interface', 'Features', 'Experience'],
        emoji: '🎨',
        color: '#10b981'
      },
      allyabase: {
        title: 'allyabase Handles',
        items: ['Authentication', 'Data Storage', 'API Management'],
        emoji: '⚡',
        color: '#059669'
      }
    },
    colors: {
      primary: '#059669',
      secondary: '#047857',
      accent: '#34d399',
      background: '#064e3b'
    },
    tags: ['developer-experience', 'productivity', 'backend']
  },
  {
    id: 'nullary-minimal-001',
    uuid: sessionless.generateUUID(),
    type: 'system-design',
    category: 'the-nullary',
    name: 'The Nullary',
    subtitle: 'No Cruft Apps',
    description: 'Applications with zero unnecessary complexity - just the essential features users need, nothing more.',
    concept: {
      traditional: {
        title: 'Traditional App',
        cruft: ['Bloated Features', 'Endless Settings', 'Confusing UI', 'Slow Performance'],
        emoji: '📦',
        color: '#ef4444'
      },
      nullary: {
        title: 'Nullary App',
        clean: ['Essential Features', 'Simple Interface', 'Fast & Light'],
        emoji: '✨',
        color: '#06b6d4'
      }
    },
    colors: {
      primary: '#0891b2',
      secondary: '#0e7490',
      accent: '#22d3ee',
      background: '#164e63'
    },
    tags: ['minimalism', 'simplicity', 'no-cruft', 'essential']
  },
  {
    id: 'nullary-philosophy-001',
    uuid: sessionless.generateUUID(),
    type: 'system-design',
    category: 'nullary-philosophy',
    name: 'Zero Cruft Philosophy',
    subtitle: 'Less is More',
    description: 'The Nullary approach: start with nothing, add only what\'s essential, remove everything else.',
    principles: [
      { text: 'Start with Zero', emoji: '∅', color: '#06b6d4' },
      { text: 'Add Essential', emoji: '➕', color: '#0891b2' },
      { text: 'Remove Cruft', emoji: '✂️', color: '#0e7490' },
      { text: 'Ship Fast', emoji: '🚀', color: '#164e63' }
    ],
    colors: {
      primary: '#0891b2',
      secondary: '#0e7490',
      accent: '#22d3ee',
      background: '#164e63'
    },
    tags: ['philosophy', 'minimalism', 'principles', 'design']
  }
];

/**
 * Generate SVG for The Stack protocol layers
 */
export function generateStackLayersSVG(design, designBDOPubKey) {
  if (design.category !== 'the-stack') {
    return null;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="bgGrad-${design.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${design.colors.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${design.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${design.colors.accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
    </linearGradient>
  </defs>

  <style>
    .title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 28px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      fill: ${design.colors.accent};
      text-anchor: middle;
    }
    .layer-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 16px;
      font-weight: 600;
      fill: white;
      text-anchor: start;
    }
    .save-button {
      fill: url(#saveGrad-${design.id});
      stroke: ${design.colors.accent};
      stroke-width: 2;
      cursor: pointer;
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
  <rect x="0" y="0" width="400" height="400" fill="url(#bgGrad-${design.id})" rx="12"/>

  <!-- Title -->
  <text class="title" x="200" y="45">The Stack</text>
  <text class="subtitle" x="200" y="65">Protocol Layers</text>

  <!-- Stack Layers (bottom to top) with dark backgrounds -->
  ${design.layers.reverse().map((layer, i) => `
  <rect x="50" y="${100 + (i * 70)}" width="300" height="60" fill="rgba(0,0,0,0.3)" rx="8"/>
  <rect x="55" y="${105 + (i * 70)}" width="290" height="50" fill="${layer.color}" rx="6"/>
  <text x="75" y="${138 + (i * 70)}" font-size="28">${layer.emoji}</text>
  <text class="layer-text" x="120" y="${138 + (i * 70)}">${layer.name}</text>
  `).join('')}

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
    spell-components='{"bdoPubKey":"${designBDOPubKey}","collection":"system-design"}'
  />
  <text class="button-text" x="200" y="370">🪄 Save The Stack</text>
</svg>`;
}

/**
 * Generate SVG for The Stack protocol flow
 */
export function generateStackFlowSVG(design, designBDOPubKey) {
  if (design.category !== 'the-stack-flow') {
    return null;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="bgGrad-${design.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${design.colors.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${design.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${design.colors.accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
    </linearGradient>

    <marker id="arrowhead-${design.id}" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="${design.colors.accent}" />
    </marker>
  </defs>

  <style>
    .title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 28px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      fill: ${design.colors.accent};
      text-anchor: middle;
    }
    .step-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 13px;
      font-weight: 600;
      fill: white;
      text-anchor: middle;
    }
    .save-button {
      fill: url(#saveGrad-${design.id});
      stroke: ${design.colors.accent};
      stroke-width: 2;
      cursor: pointer;
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
  <rect x="0" y="0" width="400" height="400" fill="url(#bgGrad-${design.id})" rx="12"/>

  <!-- Title -->
  <text class="title" x="200" y="45">Protocol Flow</text>
  <text class="subtitle" x="200" y="65">From User to MAGIC</text>

  <!-- Flow Steps -->
  ${design.flow.map((step, i) => `
  <!-- Step ${i + 1} -->
  <circle cx="200" cy="${100 + (i * 50)}" r="30" fill="${step.color}"/>
  <text x="200" y="${110 + (i * 50)}" text-anchor="middle" font-size="28">${step.emoji}</text>
  <text class="step-text" x="200" y="${145 + (i * 50)}">${step.step}</text>
  ${i < design.flow.length - 1 ? `<line x1="200" y1="${135 + (i * 50)}" x2="200" y2="${145 + (i * 50)}" stroke="${design.colors.accent}" stroke-width="3" marker-end="url(#arrowhead-${design.id})"/>` : ''}
  `).join('')}

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
    spell-components='{"bdoPubKey":"${designBDOPubKey}","collection":"system-design"}'
  />
  <text class="button-text" x="200" y="370">🌀 Save Protocol Flow</text>
</svg>`;
}

/**
 * Generate SVG for allyabase infrastructure
 */
export function generateAllyabaseInfrastructureSVG(design, designBDOPubKey) {
  if (design.category !== 'allyabase') {
    return null;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="400" height="500">
  <defs>
    <linearGradient id="bgGrad-${design.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${design.colors.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${design.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${design.colors.accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
    </linearGradient>
  </defs>

  <style>
    .title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 32px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 13px;
      fill: ${design.colors.accent};
      text-anchor: middle;
    }
    .service-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      font-weight: 600;
      fill: white;
      text-anchor: middle;
    }
    .save-button {
      fill: url(#saveGrad-${design.id});
      stroke: ${design.colors.accent};
      stroke-width: 2;
      cursor: pointer;
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
  <rect x="0" y="0" width="400" height="500" fill="url(#bgGrad-${design.id})" rx="12"/>

  <!-- Title -->
  <text class="title" x="200" y="40">allyabase</text>
  <text class="subtitle" x="200" y="58">12 Core Miniservices</text>

  <!-- 12 Miniservices in 4x3 grid -->
  ${design.miniservices.map((service, i) => {
    const row = Math.floor(i / 4);
    const col = i % 4;
    const x = 50 + (col * 75) + 37.5;
    const y = 90 + (row * 95);

    return `
  <!-- ${service.name} -->
  <circle cx="${x}" cy="${y}" r="30" fill="${service.color}"/>
  <text x="${x}" y="${y + 8}" text-anchor="middle" font-size="28">${service.emoji}</text>
  <text class="service-text" x="${x}" y="${y + 45}">${service.name}</text>
    `;
  }).join('')}

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
    spell-components='{"bdoPubKey":"${designBDOPubKey}","collection":"system-design"}'
  />
  <text class="button-text" x="200" y="470">⚡ Save allyabase</text>
</svg>`;
}

/**
 * Generate SVG for allyabase developer experience
 */
export function generateAllyabaseDeveloperSVG(design, designBDOPubKey) {
  if (design.category !== 'allyabase-dev') {
    return null;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="bgGrad-${design.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${design.colors.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${design.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${design.colors.accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
    </linearGradient>
  </defs>

  <style>
    .title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 24px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      fill: ${design.colors.accent};
      text-anchor: middle;
    }
    .section-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 16px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .item-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: white;
      text-anchor: start;
      opacity: 0.9;
    }
    .save-button {
      fill: url(#saveGrad-${design.id});
      stroke: ${design.colors.accent};
      stroke-width: 2;
      cursor: pointer;
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
  <rect x="0" y="0" width="400" height="400" fill="url(#bgGrad-${design.id})" rx="12"/>

  <!-- Title -->
  <text class="title" x="200" y="40">Developer Experience</text>
  <text class="subtitle" x="200" y="60">Ship Faster</text>

  <!-- You Build Section -->
  <rect x="30" y="85" width="160" height="180" fill="rgba(255,255,255,0.1)" rx="8"/>
  <text x="110" y="110" text-anchor="middle" font-size="36">${design.split.you.emoji}</text>
  <text class="section-title" x="110" y="140">${design.split.you.title}</text>
  ${design.split.you.items.map((item, i) => `
  <text class="item-text" x="40" y="${165 + (i * 22)}">• ${item}</text>
  `).join('')}

  <!-- allyabase Handles Section -->
  <rect x="210" y="85" width="160" height="180" fill="rgba(255,255,255,0.1)" rx="8"/>
  <text x="290" y="110" text-anchor="middle" font-size="36">${design.split.allyabase.emoji}</text>
  <text class="section-title" x="290" y="140">${design.split.allyabase.title}</text>
  ${design.split.allyabase.items.map((item, i) => `
  <text class="item-text" x="220" y="${165 + (i * 22)}">• ${item}</text>
  `).join('')}

  <!-- Divider -->
  <line x1="200" y1="95" x2="200" y2="255" stroke="${design.colors.accent}" stroke-width="2" stroke-dasharray="5,5"/>

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
    spell-components='{"bdoPubKey":"${designBDOPubKey}","collection":"system-design"}'
  />
  <text class="button-text" x="200" y="370">🚀 Save Developer Experience</text>
</svg>`;
}

/**
 * Generate SVG for The Nullary concept
 */
export function generateNullaryConceptSVG(design, designBDOPubKey) {
  if (design.category !== 'the-nullary') {
    return null;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="bgGrad-${design.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${design.colors.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${design.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${design.colors.accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
    </linearGradient>
  </defs>

  <style>
    .title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 32px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      fill: ${design.colors.accent};
      text-anchor: middle;
    }
    .section-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .item-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: white;
      text-anchor: start;
    }
    .save-button {
      fill: url(#saveGrad-${design.id});
      stroke: ${design.colors.accent};
      stroke-width: 2;
      cursor: pointer;
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
  <rect x="0" y="0" width="400" height="400" fill="url(#bgGrad-${design.id})" rx="12"/>

  <!-- Title -->
  <text class="title" x="200" y="45">The Nullary</text>
  <text class="subtitle" x="200" y="65">No Cruft Apps</text>

  <!-- Traditional App (with X) -->
  <rect x="30" y="95" width="160" height="180" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2" rx="8"/>
  <text x="110" y="125" text-anchor="middle" font-size="32">${design.concept.traditional.emoji}</text>
  <text class="section-title" x="110" y="150" fill="#ef4444">${design.concept.traditional.title}</text>
  ${design.concept.traditional.cruft.map((item, i) => `
  <text class="item-text" x="40" y="${170 + (i * 18)}" fill="#fca5a5">✗ ${item}</text>
  `).join('')}

  <!-- Nullary App (with checkmarks) -->
  <rect x="210" y="95" width="160" height="180" fill="rgba(255,255,255,0.1)" rx="8"/>
  <text x="290" y="125" text-anchor="middle" font-size="32">${design.concept.nullary.emoji}</text>
  <text class="section-title" x="290" y="150">${design.concept.nullary.title}</text>
  ${design.concept.nullary.clean.map((item, i) => `
  <text class="item-text" x="220" y="${170 + (i * 22)}">✓ ${item}</text>
  `).join('')}

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
    spell-components='{"bdoPubKey":"${designBDOPubKey}","collection":"system-design"}'
  />
  <text class="button-text" x="200" y="370">✨ Save The Nullary</text>
</svg>`;
}

/**
 * Generate SVG for Nullary philosophy
 */
export function generateNullaryPhilosophySVG(design, designBDOPubKey) {
  if (design.category !== 'nullary-philosophy') {
    return null;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="bgGrad-${design.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${design.colors.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${design.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${design.colors.accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${design.colors.secondary};stop-opacity:1" />
    </linearGradient>
  </defs>

  <style>
    .title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 26px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      fill: ${design.colors.accent};
      text-anchor: middle;
    }
    .principle-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 15px;
      font-weight: 600;
      fill: white;
      text-anchor: middle;
    }
    .save-button {
      fill: url(#saveGrad-${design.id});
      stroke: ${design.colors.accent};
      stroke-width: 2;
      cursor: pointer;
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
  <rect x="0" y="0" width="400" height="400" fill="url(#bgGrad-${design.id})" rx="12"/>

  <!-- Title -->
  <text class="title" x="200" y="40">Zero Cruft Philosophy</text>
  <text class="subtitle" x="200" y="60">Less is More</text>

  <!-- Four Principles in 2x2 grid -->
  ${design.principles.map((principle, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 100 + (col * 200);
    const y = 120 + (row * 130);

    return `
  <!-- ${principle.text} -->
  <circle cx="${x}" cy="${y}" r="45" fill="${principle.color}"/>
  <text x="${x}" y="${y + 15}" text-anchor="middle" font-size="45">${principle.emoji}</text>
  <text class="principle-text" x="${x}" y="${y + 65}">${principle.text}</text>
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
    spell-components='{"bdoPubKey":"${designBDOPubKey}","collection":"system-design"}'
  />
  <text class="button-text" x="200" y="370">∅ Save Philosophy</text>
</svg>`;
}
