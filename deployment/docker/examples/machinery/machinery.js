/**
 * Machinery Examples for Test Environment
 *
 * These machinery posts demonstrate:
 * - Tools, equipment, and machines
 * - Save spell for adding to carrierBag "machinery" collection
 * - Specifications, capabilities, and use cases
 */

import sessionless from 'sessionless-node';

export const machineryPosts = [
  {
    id: 'machine-3d-printer-001',
    uuid: sessionless.generateUUID(),
    type: 'fabrication',
    name: 'Maker Pro 500 3D Printer',
    manufacturer: 'TechCraft Industries',
    description: 'Professional-grade FDM 3D printer with large build volume and dual extrusion. Perfect for prototyping, manufacturing, and creative projects.',
    price: 149900, // $1,499.00
    specifications: {
      buildVolume: '300 x 300 x 400mm',
      layerResolution: '50-400 microns',
      nozzleDiameter: '0.4mm (upgradeable)',
      printSpeed: 'Up to 150mm/s',
      materials: 'PLA, ABS, PETG, TPU, Nylon',
      connectivity: 'WiFi, USB, SD Card',
      display: '5" Color Touchscreen'
    },
    features: [
      'Dual extrusion system',
      'Auto bed leveling',
      'Filament runout sensor',
      'Resume print after power loss',
      'Enclosed build chamber',
      'HEPA air filtration'
    ],
    capabilities: [
      'Prototyping and product development',
      'Custom manufacturing',
      'Educational projects',
      'Art and sculpture',
      'Replacement parts fabrication'
    ],
    included: [
      '3D Printer unit',
      'Power supply',
      'Sample filament (PLA)',
      'Tool kit',
      'USB cable',
      'Software license'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400',
    tags: ['3d-printer', 'fabrication', 'manufacturing', 'prototyping', 'maker'],
    metadata: {
      warranty: '2 years',
      weight: '35kg',
      powerRequirement: '110-240V AC',
      dimensions: '450 x 450 x 600mm'
    }
  },
  {
    id: 'machine-espresso-machine-002',
    uuid: sessionless.generateUUID(),
    type: 'kitchen',
    name: 'Barista Elite Espresso Machine',
    manufacturer: 'Café Perfetto',
    description: 'Semi-automatic espresso machine with professional-grade components. Dual boiler system ensures perfect temperature for both espresso extraction and milk steaming.',
    price: 89900, // $899.00
    specifications: {
      boilerCapacity: 'Dual boiler (0.5L brew, 1.5L steam)',
      pressure: '9 bar pump',
      waterTank: '2.5L removable',
      cupWarmer: 'Active heating element',
      portafilter: '58mm commercial grade',
      powerOutput: '1400W',
      display: 'LCD temperature display'
    },
    features: [
      'PID temperature control',
      'Pre-infusion function',
      'Volumetric shot programming',
      'Commercial steam wand',
      'Cup warming tray',
      'Pressure gauge'
    ],
    capabilities: [
      'Perfect espresso extraction',
      'Microfoam milk texturing',
      'Multiple drinks simultaneously',
      'Temperature stability',
      'Cafe-quality beverages at home'
    ],
    included: [
      'Espresso machine',
      'Portafilter (single & double)',
      'Tamper',
      'Cleaning brush',
      'Blind filter',
      'Water hardness test strip'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
    tags: ['espresso', 'coffee', 'kitchen', 'barista', 'machine'],
    metadata: {
      warranty: '1 year',
      weight: '18kg',
      powerRequirement: '110V AC',
      dimensions: '350 x 400 x 450mm'
    }
  },
  {
    id: 'machine-pottery-wheel-003',
    uuid: sessionless.generateUUID(),
    type: 'craft',
    name: 'ArtSpin Professional Pottery Wheel',
    manufacturer: 'CeramicCraft Co.',
    description: 'Heavy-duty electric pottery wheel with variable speed control and reversible rotation. Ideal for beginners and professional ceramicists alike.',
    price: 54900, // $549.00
    specifications: {
      wheelDiameter: '12 inches (30cm)',
      motor: '1/2 HP variable speed',
      speedRange: '0-300 RPM',
      direction: 'Forward and reverse',
      clayCapacity: 'Up to 25 lbs (11kg)',
      wheelhead: 'Cast aluminum',
      control: 'Foot pedal'
    },
    features: [
      'Smooth variable speed control',
      'Reversible rotation',
      'Heavy-duty construction',
      'Removable splash pan',
      'Large wheelhead',
      'Portable design'
    ],
    capabilities: [
      'Throwing vessels and bowls',
      'Creating plates and platters',
      'Sculpting and trimming',
      'Teaching and learning',
      'Production pottery'
    ],
    included: [
      'Pottery wheel',
      'Foot pedal',
      'Splash pan',
      'Bat pins (3)',
      'Instruction manual',
      'Basic clay sample'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400',
    tags: ['pottery', 'ceramics', 'craft', 'art', 'wheel'],
    metadata: {
      warranty: '3 years',
      weight: '45kg',
      powerRequirement: '110V AC',
      dimensions: '550 x 600 x 350mm'
    }
  }
];

/**
 * Generate SVG for machinery card
 * Single button with save spell to machinery collection
 *
 * @param {Object} machine - Machine object
 * @param {string} machineBDOPubKey - PubKey of this machine's BDO
 * @returns {string} SVG string
 */
export function generateMachinerySVG(machine, machineBDOPubKey) {
  const priceDisplay = `$${(machine.price / 100).toFixed(2)}`;
  const icon = machine.type === 'fabrication' ? '🖨️' : machine.type === 'kitchen' ? '☕' : '⚙️';

  // Get first 3 features
  const displayFeatures = machine.features.slice(0, 3);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" width="400" height="320">
  <defs>
    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f97316;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ea580c;stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#f97316" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .machine-name {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .machine-manufacturer {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: #fdba74;
      text-anchor: middle;
    }
    .machine-meta {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #fb923c;
      text-anchor: start;
    }
    .machine-description {
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
      stroke: #f97316;
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

  <!-- Machine Info -->
  <text class="machine-name" x="200" y="70">${machine.name.length > 35 ? machine.name.substring(0, 32) + '...' : machine.name}</text>
  <text class="machine-manufacturer" x="200" y="88">${machine.manufacturer}</text>

  <!-- Price -->
  <text class="price-text" x="200" y="115">${priceDisplay}</text>

  <!-- Description -->
  <text class="machine-description" x="20" y="140">${machine.description.substring(0, 65)}...</text>
  <text class="machine-description" x="20" y="155">${machine.description.substring(65, 130)}...</text>

  <!-- Key features -->
  <text class="machine-meta" x="20" y="180">Key Features:</text>
  ${displayFeatures.map((feature, i) =>
    `<text class="feature-text" x="20" y="${195 + (i * 15)}">✓ ${feature.length > 50 ? feature.substring(0, 47) + '...' : feature}</text>`
  ).join('\n  ')}

  <!-- Specs preview -->
  <text class="machine-meta" x="20" y="245">${Object.keys(machine.specifications)[0]}: ${Object.values(machine.specifications)[0]}</text>

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
    spell-components='{"bdoPubKey":"${machineBDOPubKey}","collection":"machinery"}'
  />
  <text class="button-text" x="200" y="285">🔧 Save to Machinery</text>
</svg>`;
}
