/**
 * Geometry Examples for Test Environment
 *
 * These geometry posts demonstrate:
 * - Historical progression of geometric understanding
 * - From Euclidean to non-Euclidean to relativistic geometry
 * - Save spell for adding to carrierBag "geometry" collection
 * - Educational content showing evolution of spatial understanding
 */

import sessionless from 'sessionless-node';

export const geometryPosts = [
  {
    id: 'geometry-euclid-postulates-001',
    uuid: sessionless.generateUUID(),
    type: 'classical-geometry',
    category: 'euclidean-geometry',
    name: 'Euclid\'s Five Postulates',
    subtitle: 'The Foundation of Classical Geometry',
    period: '~300 BCE',
    location: 'Alexandria, Egypt',
    mathematician: 'Euclid of Alexandria',
    description: 'Euclid\'s Elements laid the foundation for geometry with five elegant postulates. For over 2,000 years, these axioms were considered absolute truths about the nature of space itself.',
    postulates: [
      {
        number: 1,
        statement: 'A straight line segment can be drawn joining any two points.',
        explanation: 'Between any two points, there exists a unique straight line.'
      },
      {
        number: 2,
        statement: 'Any straight line segment can be extended indefinitely in a straight line.',
        explanation: 'Lines continue forever in both directions.'
      },
      {
        number: 3,
        statement: 'Given any straight line segment, a circle can be drawn having the segment as radius and one endpoint as center.',
        explanation: 'Circles can be constructed from any line segment.'
      },
      {
        number: 4,
        statement: 'All right angles are congruent.',
        explanation: 'A right angle is always 90 degrees, everywhere.'
      },
      {
        number: 5,
        statement: 'If two lines are drawn which intersect a third in such a way that the sum of the inner angles on one side is less than two right angles, then the two lines inevitably must intersect each other on that side if extended far enough.',
        explanation: 'The famous Parallel Postulate - through a point not on a line, exactly one parallel line exists. This would later prove to be the key to non-Euclidean geometry.'
      }
    ],
    keyTheorems: [
      'Sum of angles in a triangle equals 180°',
      'Pythagorean theorem: a² + b² = c²',
      'Parallel lines never intersect',
      'Circumference = 2πr'
    ],
    historicalImpact: [
      'Dominated mathematical thought for 2,000+ years',
      'Model of logical deduction and proof',
      'The 5th postulate troubled mathematicians for centuries',
      'Attempts to prove the parallel postulate led to revolutionary discoveries',
      'Foundation for architecture, engineering, surveying'
    ],
    funFacts: [
      'Euclid\'s Elements was the most published textbook after the Bible',
      'Abraham Lincoln studied Euclid to sharpen his mind',
      'The parallel postulate is much more complex than the other four',
      'Flat space assumption works perfectly for everyday scales'
    ],
    colors: {
      primary: '#2563eb',
      secondary: '#60a5fa',
      accent: '#fbbf24'
    },
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400',
    tags: ['euclid', 'geometry', 'mathematics', 'classical', 'postulates'],
    metadata: {
      era: 'Ancient Greece',
      influence: 'Foundation of Western mathematics',
      geometryType: 'Flat space (Euclidean)'
    }
  },
  {
    id: 'geometry-non-euclidean-002',
    uuid: sessionless.generateUUID(),
    type: 'non-euclidean-geometry',
    category: 'hyperbolic-geometry',
    name: 'The Non-Euclidean Revolution',
    subtitle: 'Gauss, Lobachevsky, and Bolyai',
    period: '1820s-1830s',
    location: 'Germany, Russia, Hungary',
    mathematicians: [
      {
        name: 'Carl Friedrich Gauss',
        contribution: 'Developed ideas privately, never published',
        years: '1777-1855',
        location: 'Germany'
      },
      {
        name: 'Nikolai Lobachevsky',
        contribution: 'First to publish non-Euclidean geometry (1829)',
        years: '1792-1856',
        location: 'Russia'
      },
      {
        name: 'János Bolyai',
        contribution: 'Independently discovered hyperbolic geometry (1832)',
        years: '1802-1860',
        location: 'Hungary'
      }
    ],
    description: 'Three mathematicians independently discovered that Euclid\'s parallel postulate could be replaced with alternatives, creating entirely consistent but radically different geometries. This shattered the 2,000-year assumption that Euclidean geometry was the only possible description of space.',
    keyRevelation: 'What if through a point not on a line, there are INFINITELY MANY parallel lines?',
    hyperbolicGeometry: {
      parallelPostulate: 'Through a point not on a line, there are infinitely many lines parallel to the given line.',
      properties: [
        'Space has negative curvature (saddle-shaped)',
        'Sum of angles in a triangle is LESS than 180°',
        'Circumference of circle grows exponentially with radius',
        'No similar triangles of different sizes',
        'Parallel lines diverge from each other'
      ]
    },
    sphericalGeometry: {
      parallelPostulate: 'There are NO parallel lines - all lines eventually intersect.',
      properties: [
        'Space has positive curvature (sphere-shaped)',
        'Sum of angles in a triangle is MORE than 180°',
        'Lines are great circles on sphere',
        'Triangles can have three 90° angles',
        'Used in navigation and astronomy'
      ]
    },
    philosophicalImpact: [
      'Mathematical truth is not absolute - axioms are choices',
      'Different geometries are equally valid mathematically',
      'Opened question: which geometry describes our universe?',
      'Paved way for Einstein\'s curved spacetime',
      'Showed pure mathematics can reveal unexpected possibilities'
    ],
    resistance: [
      'Gauss feared ridicule and never published his work',
      'Lobachevsky called "Copernicus of Geometry" but mocked in lifetime',
      'Bolyai\'s father warned: "For God\'s sake, please give it up"',
      'Mathematicians struggled to accept multiple geometries',
      'Full acceptance took decades after publication'
    ],
    colors: {
      primary: '#7c3aed',
      secondary: '#a78bfa',
      accent: '#ec4899'
    },
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400',
    tags: ['non-euclidean', 'hyperbolic-geometry', 'gauss', 'lobachevsky', 'bolyai'],
    metadata: {
      era: 'Early 19th Century',
      influence: 'Revolutionized understanding of mathematical truth',
      geometryType: 'Curved space (Hyperbolic & Spherical)'
    }
  },
  {
    id: 'geometry-general-relativity-003',
    uuid: sessionless.generateUUID(),
    type: 'relativistic-geometry',
    category: 'spacetime-geometry',
    name: 'Einstein\'s General Relativity',
    subtitle: 'Gravity as Curved Spacetime',
    period: '1915',
    location: 'Berlin, Germany',
    physicist: 'Albert Einstein',
    description: 'Einstein\'s general theory of relativity revealed that gravity is not a force, but the curvature of spacetime itself. Massive objects bend the fabric of space and time, and this curvature tells matter how to move. Non-Euclidean geometry went from mathematical curiosity to physical reality.',
    revolutionaryIdea: 'Matter tells spacetime how to curve. Spacetime tells matter how to move.',
    einsteinFieldEquations: {
      equation: 'Gμν + Λgμν = (8πG/c⁴)Tμν',
      leftSide: 'Geometry of spacetime (how it curves)',
      rightSide: 'Energy and matter content',
      meaning: 'The presence of mass-energy curves spacetime, creating what we perceive as gravity'
    },
    keyPredictions: [
      {
        prediction: 'Gravitational time dilation',
        explanation: 'Time runs slower in stronger gravitational fields',
        confirmed: 'Atomic clocks, GPS satellites'
      },
      {
        prediction: 'Gravitational lensing',
        explanation: 'Light bends around massive objects',
        confirmed: '1919 solar eclipse, modern telescopes'
      },
      {
        prediction: 'Perihelion precession of Mercury',
        explanation: 'Mercury\'s orbit shifts in ways Newton couldn\'t explain',
        confirmed: 'Matched observations perfectly'
      },
      {
        prediction: 'Gravitational waves',
        explanation: 'Ripples in spacetime from accelerating masses',
        confirmed: 'LIGO 2015 - merging black holes'
      },
      {
        prediction: 'Black holes',
        explanation: 'Regions where spacetime curvature becomes infinite',
        confirmed: 'Event Horizon Telescope 2019'
      },
      {
        prediction: 'Expanding universe',
        explanation: 'Space itself is expanding',
        confirmed: 'Hubble 1929, cosmic microwave background'
      }
    ],
    geometryConnection: [
      'Uses Riemannian geometry (generalized curved spaces)',
      'Locally, space looks Euclidean (flat)',
      'Globally, space curves around massive objects',
      'Universe\'s large-scale geometry is non-Euclidean',
      'Validates Gauss\'s work on curved surfaces',
      'Hyperbolic, Euclidean, or spherical - universe picks one'
    ],
    philosophicalImpact: [
      'Space and time are not fixed backgrounds',
      'Geometry is a physical property, not abstract truth',
      'The universe has a shape that can be measured',
      'Abstract mathematics describes physical reality',
      'Unified space and time into single entity'
    ],
    famousQuote: 'The most incomprehensible thing about the universe is that it is comprehensible.',
    colors: {
      primary: '#0ea5e9',
      secondary: '#38bdf8',
      accent: '#fbbf24'
    },
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400',
    tags: ['einstein', 'general-relativity', 'spacetime', 'gravity', 'physics'],
    metadata: {
      era: 'Early 20th Century',
      influence: 'Revolutionized physics and cosmology',
      geometryType: 'Dynamic curved spacetime (Riemannian)'
    }
  },
  {
    id: 'geometry-jwst-lensing-004',
    uuid: sessionless.generateUUID(),
    type: 'observational-evidence',
    category: 'gravitational-lensing',
    name: 'JWST Gravitational Lensing',
    subtitle: 'Seeing Curved Spacetime',
    period: '2022-Present',
    location: 'L2 Lagrange Point, 1 million miles from Earth',
    telescope: 'James Webb Space Telescope (JWST)',
    description: 'The James Webb Space Telescope captures stunning images of gravitational lensing - direct visual proof of Einstein\'s curved spacetime. Massive galaxy clusters bend spacetime so dramatically that background galaxies appear stretched, distorted, and multiplied into arcs and rings of light.',
    gravitationalLensing: {
      phenomenon: 'Light follows curved paths through warped spacetime',
      cause: 'Massive objects (galaxy clusters) curve spacetime',
      effect: 'Background galaxies appear magnified, distorted, and multiplied',
      utility: 'Natural telescope - lets us see the most distant galaxies'
    },
    jwstCapabilities: [
      {
        feature: 'Infrared vision',
        benefit: 'Sees through dust, observes redshifted distant galaxies',
        wavelength: '0.6-28 micrometers'
      },
      {
        feature: '6.5-meter primary mirror',
        benefit: 'Gathers more light than any previous space telescope',
        segments: '18 gold-coated beryllium hexagons'
      },
      {
        feature: 'Deep field imaging',
        benefit: 'Reveals galaxies from 13+ billion years ago',
        lookback: 'Within 400 million years of Big Bang'
      },
      {
        feature: 'Precision pointing',
        benefit: 'Resolves fine details in lensed galaxy arcs',
        stability: 'Measures distortions to test GR predictions'
      }
    ],
    famousImages: [
      {
        name: 'JWST First Deep Field',
        target: 'Galaxy cluster SMACS 0723',
        phenomenon: 'Hundreds of background galaxies lensed into arcs',
        redshift: 'Galaxies from 13.1 billion years ago',
        released: 'July 2022'
      },
      {
        name: 'Einstein Rings',
        description: 'Nearly perfect circles when alignment is exact',
        significance: 'Background galaxy directly behind lensing mass',
        beauty: 'Stunning validation of Einstein\'s predictions'
      },
      {
        name: 'Giant Arcs',
        description: 'Stretched galaxies forming spectacular arcs',
        useCase: 'Magnifies distant galaxies for detailed study',
        science: 'Study early universe star formation'
      }
    ],
    whatWeLearn: [
      'Distribution of dark matter in galaxy clusters',
      'Properties of galaxies in the early universe',
      'Confirmation of General Relativity at cosmic scales',
      'Mass of galaxy clusters from lensing strength',
      'Discovery of most distant galaxies ever observed',
      'Direct visualization of spacetime curvature'
    ],
    geometricJourney: [
      'Euclid: Geometry is flat, absolute, eternal',
      'Gauss/Lobachevsky/Bolyai: Geometry can curve',
      'Einstein: Geometry IS physics - spacetime curves',
      'JWST: Here\'s a photograph of that curvature'
    ],
    mindBlowingFact: 'You are looking at a photograph of curved spacetime. The arcs and rings are not illusions - they are light following the actual geometric structure of the universe, bent by the mass of galaxy clusters containing trillions of stars.',
    colors: {
      primary: '#dc2626',
      secondary: '#f87171',
      accent: '#fbbf24'
    },
    imageUrl: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400',
    tags: ['jwst', 'gravitational-lensing', 'cosmology', 'astronomy', 'spacetime'],
    metadata: {
      era: 'Present Day',
      influence: 'Visual confirmation of curved spacetime',
      geometryType: 'Observable curvature in deep space imaging'
    }
  }
];

/**
 * Generate SVG for Euclid's postulates
 * Classic geometric diagrams
 *
 * @param {Object} geometry - Geometry object
 * @param {string} geometryBDOPubKey - PubKey of this geometry's BDO
 * @returns {string} SVG string
 */
export function generateEuclidPostulatesSVG(geometry, geometryBDOPubKey) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560" width="400" height="560">
  <defs>
    <linearGradient id="euclidBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e3a8a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2563eb;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#fbbf24;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#60a5fa;stop-opacity:1" />
    </linearGradient>

    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feFlood flood-color="#fbbf24" flood-opacity="0.8"/>
      <feComposite in2="SourceGraphic" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .euclid-title {
      font-family: Georgia, serif;
      font-size: 24px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .euclid-subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: #fbbf24;
      text-anchor: middle;
    }
    .euclid-period {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: rgba(255,255,255,0.7);
      text-anchor: middle;
      font-style: italic;
    }
    .postulate-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      font-weight: bold;
      fill: #fbbf24;
      text-anchor: start;
    }
    .postulate-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: rgba(255,255,255,0.9);
      text-anchor: start;
    }
    .geometric-line {
      stroke: #fbbf24;
      stroke-width: 2;
      fill: none;
    }
    .geometric-point {
      fill: #fbbf24;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: #fbbf24;
      stroke-width: 2;
      cursor: pointer;
    }
    .save-button:hover {
      filter: url(#glow);
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
  <rect x="0" y="0" width="400" height="560" fill="url(#euclidBg)" rx="12"/>

  <!-- Header -->
  <text class="euclid-title" x="200" y="35">Euclid's Five Postulates</text>
  <text class="euclid-subtitle" x="200" y="52">Foundation of Classical Geometry</text>
  <text class="euclid-period" x="200" y="68">~300 BCE • Alexandria, Egypt</text>

  <!-- Decorative geometric diagrams -->
  <!-- Triangle (Postulate 1: connecting points) -->
  <circle class="geometric-point" cx="80" cy="100" r="3"/>
  <circle class="geometric-point" cx="140" cy="100" r="3"/>
  <line class="geometric-line" x1="80" y1="100" x2="140" y2="100"/>
  <text class="postulate-text" x="85" y="118" font-size="8">Postulate 1</text>

  <!-- Extended line (Postulate 2) -->
  <line class="geometric-line" x1="190" y1="105" x2="310" y2="95" stroke-dasharray="5,5"/>
  <circle class="geometric-point" cx="220" cy="102" r="2"/>
  <circle class="geometric-point" cx="280" cy="98" r="2"/>
  <text class="postulate-text" x="235" y="118" font-size="8">Postulate 2</text>

  <!-- Circle (Postulate 3) -->
  <circle class="geometric-line" cx="340" cy="100" r="20" fill="none"/>
  <circle class="geometric-point" cx="340" cy="100" r="3"/>
  <text class="postulate-text" x="323" y="135" font-size="8">Postulate 3</text>

  <!-- Divider -->
  <line x1="20" y1="145" x2="380" y2="145" stroke="rgba(251,191,36,0.3)" stroke-width="1"/>

  <!-- The Five Postulates -->
  <text class="postulate-title" x="30" y="170">Postulate 1: Two Points Determine a Line</text>
  <text class="postulate-text" x="30" y="183">A straight line can be drawn between any two points.</text>

  <text class="postulate-title" x="30" y="210">Postulate 2: Lines Extend Forever</text>
  <text class="postulate-text" x="30" y="223">Any line segment can be extended indefinitely.</text>

  <text class="postulate-title" x="30" y="250">Postulate 3: Circles from Any Radius</text>
  <text class="postulate-text" x="30" y="263">A circle can be drawn with any center and radius.</text>

  <text class="postulate-title" x="30" y="290">Postulate 4: All Right Angles Equal</text>
  <text class="postulate-text" x="30" y="303">All right angles are congruent (90 degrees).</text>

  <text class="postulate-title" x="30" y="330">Postulate 5: The Parallel Postulate ⭐</text>
  <text class="postulate-text" x="30" y="343">Through a point not on a line, exactly one</text>
  <text class="postulate-text" x="30" y="355">parallel line exists. (This one was trouble!)</text>

  <!-- Parallel lines diagram -->
  <line class="geometric-line" x1="50" y1="385" x2="350" y2="385"/>
  <line class="geometric-line" x1="50" y1="410" x2="350" y2="410"/>
  <circle class="geometric-point" cx="200" cy="397.5" r="3"/>
  <text class="postulate-text" x="140" y="435" fill="#fbbf24" font-weight="600">Exactly one parallel line</text>

  <!-- Historical note -->
  <rect x="25" y="455" width="350" height="45" fill="rgba(0,0,0,0.3)" rx="6"/>
  <text class="postulate-text" x="35" y="472" font-style="italic">For 2,000 years, these postulates were considered</text>
  <text class="postulate-text" x="35" y="484" font-style="italic">absolute truths. Attempts to prove the 5th postulate</text>
  <text class="postulate-text" x="35" y="496" font-style="italic">from the others led to revolutionary discoveries...</text>

  <!-- Save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="510"
    width="300"
    height="40"
    rx="10"
    spell="save"
    spell-components='{"bdoPubKey":"${geometryBDOPubKey}","collection":"geometry"}'
  />
  <text class="button-text" x="200" y="530">📐 Save to Collection</text>
</svg>`;
}

/**
 * Generate SVG for non-Euclidean geometry
 * Show contrast between flat and curved geometries
 *
 * @param {Object} geometry - Geometry object
 * @param {string} geometryBDOPubKey - PubKey of this geometry's BDO
 * @returns {string} SVG string
 */
export function generateNonEuclideanSVG(geometry, geometryBDOPubKey) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 580" width="400" height="580">
  <defs>
    <linearGradient id="nonEuclidBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#581c87;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#ec4899;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#a78bfa;stop-opacity:1" />
    </linearGradient>

    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feFlood flood-color="#ec4899" flood-opacity="0.8"/>
      <feComposite in2="SourceGraphic" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .title {
      font-family: Georgia, serif;
      font-size: 22px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #ec4899;
      text-anchor: middle;
    }
    .period {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: rgba(255,255,255,0.7);
      text-anchor: middle;
    }
    .header-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      font-weight: bold;
      fill: #ec4899;
      text-anchor: middle;
    }
    .info-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: rgba(255,255,255,0.9);
      text-anchor: start;
    }
    .name-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      font-weight: 600;
      fill: white;
      text-anchor: start;
    }
    .curved-line {
      stroke: #ec4899;
      stroke-width: 2;
      fill: none;
    }
    .flat-line {
      stroke: #60a5fa;
      stroke-width: 2;
      fill: none;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: #ec4899;
      stroke-width: 2;
      cursor: pointer;
    }
    .save-button:hover {
      filter: url(#glow);
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
  <rect x="0" y="0" width="400" height="580" fill="url(#nonEuclidBg)" rx="12"/>

  <!-- Header -->
  <text class="title" x="200" y="30">The Non-Euclidean Revolution</text>
  <text class="subtitle" x="200" y="46">Three Minds, One Discovery</text>
  <text class="period" x="200" y="60">1820s-1830s</text>

  <!-- Visual comparison -->
  <rect x="20" y="75" width="170" height="110" fill="rgba(0,0,0,0.2)" rx="6"/>
  <text class="header-text" x="105" y="92">Euclidean</text>
  <text class="info-text" x="30" y="108">Flat space</text>
  <!-- Flat triangle -->
  <path class="flat-line" d="M 55 125 L 155 125 L 105 165 Z"/>
  <text class="info-text" x="30" y="178" fill="#60a5fa">Angles = 180°</text>

  <rect x="210" y="75" width="170" height="110" fill="rgba(0,0,0,0.2)" rx="6"/>
  <text class="header-text" x="295" y="92">Hyperbolic</text>
  <text class="info-text" x="220" y="108">Curved (saddle)</text>
  <!-- Curved triangle (hyperbolic - sides curve inward) -->
  <path class="curved-line" d="M 245 125 Q 295 135 345 125 Q 330 145 320 165 Q 295 160 270 165 Q 260 145 245 125 Z"/>
  <text class="info-text" x="220" y="178" fill="#ec4899">Angles &lt; 180°</text>

  <!-- Divider -->
  <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(236,72,153,0.3)" stroke-width="1"/>

  <!-- The Three Pioneers -->
  <text class="header-text" x="200" y="220">The Three Pioneers</text>

  <text class="name-text" x="30" y="240">🇩🇪 Carl Friedrich Gauss (1777-1855)</text>
  <text class="info-text" x="40" y="253">Developed privately, feared ridicule, never published</text>

  <text class="name-text" x="30" y="275">🇷🇺 Nikolai Lobachevsky (1792-1856)</text>
  <text class="info-text" x="40" y="288">First to publish (1829) - mocked as "Copernicus of Geometry"</text>

  <text class="name-text" x="30" y="310">🇭🇺 János Bolyai (1802-1860)</text>
  <text class="info-text" x="40" y="323">Independent discovery (1832) - father warned him to stop</text>

  <!-- Key insight -->
  <rect x="25" y="340" width="350" height="75" fill="rgba(236,72,153,0.2)" rx="8" stroke="#ec4899" stroke-width="2"/>
  <text class="header-text" x="200" y="360">Revolutionary Insight</text>
  <text class="info-text" x="35" y="378" font-weight="600">What if the parallel postulate could be replaced?</text>
  <text class="info-text" x="35" y="392">Instead of ONE parallel line through a point,</text>
  <text class="info-text" x="35" y="404">what if there were INFINITELY MANY?</text>

  <!-- Parallel lines in hyperbolic space -->
  <line class="curved-line" x1="50" y1="435" x2="350" y2="435"/>
  <path class="curved-line" d="M 50 445 Q 200 440 350 445"/>
  <path class="curved-line" d="M 50 455 Q 200 448 350 455"/>
  <path class="curved-line" d="M 50 465 Q 200 456 350 465"/>
  <circle cx="200" cy="435" r="3" fill="#ec4899"/>
  <text class="info-text" x="105" y="482" fill="#ec4899" font-style="italic">Infinitely many "parallel" lines!</text>

  <!-- Impact -->
  <text class="header-text" x="200" y="505">Impact on Mathematics</text>
  <text class="info-text" x="30" y="520">✓ Shattered 2,000 years of assumed truth</text>
  <text class="info-text" x="30" y="533">✓ Mathematical truth depends on axiom choices</text>
  <text class="info-text" x="30" y="546">✓ Paved the way for Einstein's curved spacetime</text>

  <!-- Save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="555"
    width="300"
    height="20"
    rx="10"
    spell="save"
    spell-components='{"bdoPubKey":"${geometryBDOPubKey}","collection":"geometry"}'
  />
  <text class="button-text" x="200" y="565" font-size="12">🌀 Save to Collection</text>
</svg>`;
}

/**
 * Generate SVG for Einstein's General Relativity
 * Curved spacetime grid visualization
 *
 * @param {Object} geometry - Geometry object
 * @param {string} geometryBDOPubKey - PubKey of this geometry's BDO
 * @returns {string} SVG string
 */
export function generateGeneralRelativitySVG(geometry, geometryBDOPubKey) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560" width="400" height="560">
  <defs>
    <linearGradient id="einsteinBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c4a6e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0ea5e9;stop-opacity:1" />
    </linearGradient>

    <radialGradient id="massGlow" cx="50%" cy="50%">
      <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#f59e0b;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:0" />
    </radialGradient>

    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0ea5e9;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#fbbf24;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#38bdf8;stop-opacity:1" />
    </linearGradient>

    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feFlood flood-color="#fbbf24" flood-opacity="0.8"/>
      <feComposite in2="SourceGraphic" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .title {
      font-family: Georgia, serif;
      font-size: 24px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: #fbbf24;
      text-anchor: middle;
    }
    .period {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: rgba(255,255,255,0.7);
      text-anchor: middle;
    }
    .equation-text {
      font-family: 'Courier New', monospace;
      font-size: 14px;
      font-weight: bold;
      fill: #fbbf24;
      text-anchor: middle;
    }
    .header-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      font-weight: bold;
      fill: #fbbf24;
      text-anchor: start;
    }
    .info-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: rgba(255,255,255,0.9);
      text-anchor: start;
    }
    .grid-line {
      stroke: rgba(255,255,255,0.3);
      stroke-width: 1;
      fill: none;
    }
    .curved-grid {
      stroke: #fbbf24;
      stroke-width: 1.5;
      fill: none;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: #fbbf24;
      stroke-width: 2;
      cursor: pointer;
    }
    .save-button:hover {
      filter: url(#glow);
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
  <rect x="0" y="0" width="400" height="560" fill="url(#einsteinBg)" rx="12"/>

  <!-- Header -->
  <text class="title" x="200" y="30">Einstein's General Relativity</text>
  <text class="subtitle" x="200" y="48">Gravity as Curved Spacetime</text>
  <text class="period" x="200" y="62">1915 • Berlin, Germany</text>

  <!-- Einstein Field Equation -->
  <rect x="50" y="75" width="300" height="30" fill="rgba(0,0,0,0.3)" rx="6"/>
  <text class="equation-text" x="200" y="95">Gμν + Λgμν = (8πG/c⁴)Tμν</text>

  <!-- Curved spacetime visualization -->
  <rect x="20" y="120" width="360" height="140" fill="rgba(0,0,0,0.2)" rx="8"/>

  <!-- Flat grid (top) -->
  ${[0,1,2,3,4].map(i => `<line class="grid-line" x1="${50 + i*60}" y1="130" x2="${50 + i*60}" y2="180"/>`).join('\n  ')}
  ${[0,1,2].map(i => `<line class="grid-line" x1="50" y1="${140 + i*20}" x2="290" y2="${140 + i*20}"/>`).join('\n  ')}
  <text class="info-text" x="310" y="157" fill="#60a5fa">Flat spacetime</text>

  <!-- Massive object -->
  <circle cx="170" cy="215" r="20" fill="url(#massGlow)"/>
  <circle cx="170" cy="215" r="15" fill="#f59e0b"/>
  <text x="170" y="221" text-anchor="middle" font-size="20">⭐</text>

  <!-- Curved grid (bottom) - showing warping -->
  <path class="curved-grid" d="M 50 200 Q 100 200 130 205 Q 150 210 170 220 Q 190 210 210 205 Q 240 200 290 200"/>
  <path class="curved-grid" d="M 50 220 Q 100 220 130 228 Q 150 240 170 250 Q 190 240 210 228 Q 240 220 290 220"/>
  <path class="curved-grid" d="M 50 240 Q 100 240 130 245 Q 150 250 170 255 Q 190 250 210 245 Q 240 240 290 240"/>

  ${[0,1,2,3,4].map(i => {
    const x = 50 + i*60;
    const curve = Math.abs(i - 2) < 1.5 ? 25 : 10;
    return `<path class="curved-grid" d="M ${x} 200 Q ${x} 220 ${x + (i === 2 ? 0 : (i < 2 ? 5 : -5))} ${220 + curve} Q ${x} 240 ${x} 250"/>`;
  }).join('\n  ')}

  <text class="info-text" x="310" y="225" fill="#fbbf24">Curved by mass</text>

  <text class="info-text" x="30" y="273" font-style="italic" fill="white">Mass curves spacetime. Objects follow curved paths.</text>

  <!-- Key idea -->
  <rect x="25" y="285" width="350" height="50" fill="rgba(251,191,36,0.2)" rx="8" stroke="#fbbf24" stroke-width="2"/>
  <text class="info-text" x="200" y="302" text-anchor="middle" font-size="11" font-weight="bold" fill="white">Revolutionary Idea</text>
  <text class="info-text" x="35" y="318" font-weight="600">Matter tells spacetime how to curve.</text>
  <text class="info-text" x="35" y="330">Spacetime tells matter how to move.</text>

  <!-- Predictions -->
  <text class="header-text" x="30" y="360">Confirmed Predictions</text>
  <text class="info-text" x="30" y="375">⏱️  Gravitational time dilation (GPS satellites)</text>
  <text class="info-text" x="30" y="388">🔭 Gravitational lensing (light bends around stars)</text>
  <text class="info-text" x="30" y="401">☿  Mercury's orbit precession (unexplained by Newton)</text>
  <text class="info-text" x="30" y="414">〰️  Gravitational waves (LIGO 2015)</text>
  <text class="info-text" x="30" y="427">⚫ Black holes (Event Horizon Telescope 2019)</text>
  <text class="info-text" x="30" y="440">🌌 Expanding universe (Hubble, CMB)</text>

  <!-- Geometry connection -->
  <rect x="25" y="455" width="350" height="55" fill="rgba(0,0,0,0.3)" rx="6"/>
  <text class="info-text" x="35" y="472" font-style="italic">Gauss, Lobachevsky, and Bolyai showed geometry</text>
  <text class="info-text" x="35" y="484" font-style="italic">could curve. Einstein showed our universe DOES</text>
  <text class="info-text" x="35" y="496" font-style="italic">curve. Geometry went from math to physics.</text>

  <!-- Save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="520"
    width="300"
    height="35"
    rx="10"
    spell="save"
    spell-components='{"bdoPubKey":"${geometryBDOPubKey}","collection":"geometry"}'
  />
  <text class="button-text" x="200" y="537.5">🌐 Save to Collection</text>
</svg>`;
}

/**
 * Generate SVG for JWST gravitational lensing
 * Show dramatic lensing arcs
 *
 * @param {Object} geometry - Geometry object
 * @param {string} geometryBDOPubKey - PubKey of this geometry's BDO
 * @returns {string} SVG string
 */
export function generateGravitationalLensingSVG(geometry, geometryBDOPubKey) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560" width="400" height="560">
  <defs>
    <radialGradient id="spaceGrad" cx="50%" cy="50%">
      <stop offset="0%" style="stop-color:#1e1b4b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
    </radialGradient>

    <radialGradient id="galaxyCluster" cx="50%" cy="50%">
      <stop offset="0%" style="stop-color:#fef3c7;stop-opacity:1" />
      <stop offset="30%" style="stop-color:#fbbf24;stop-opacity:0.8" />
      <stop offset="70%" style="stop-color:#f59e0b;stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:#dc2626;stop-opacity:0" />
    </radialGradient>

    <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#60a5fa;stop-opacity:0.8" />
      <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2563eb;stop-opacity:0.8" />
    </linearGradient>

    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#dc2626;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#fbbf24;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f87171;stop-opacity:1" />
    </linearGradient>

    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
      <feFlood flood-color="#fbbf24" flood-opacity="0.8"/>
      <feComposite in2="SourceGraphic" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="starGlow" x="-200%" y="-200%" width="500%" height="500%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
      <feFlood flood-color="white" flood-opacity="0.8"/>
      <feComposite in2="SourceGraphic" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Star pattern -->
    <circle id="star" r="0.8" fill="white" opacity="0.8"/>
  </defs>

  <style>
    .title {
      font-family: Georgia, serif;
      font-size: 22px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #fbbf24;
      text-anchor: middle;
    }
    .period {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: rgba(255,255,255,0.7);
      text-anchor: middle;
    }
    .header-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      font-weight: bold;
      fill: #fbbf24;
      text-anchor: start;
    }
    .info-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: rgba(255,255,255,0.9);
      text-anchor: start;
    }
    .label-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 8px;
      fill: white;
      text-anchor: middle;
    }
    .lensed-arc {
      stroke: url(#arcGrad);
      stroke-width: 3;
      fill: none;
      opacity: 0.9;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: #fbbf24;
      stroke-width: 2;
      cursor: pointer;
    }
    .save-button:hover {
      filter: url(#glow);
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

  <!-- Deep space background -->
  <rect x="0" y="0" width="400" height="560" fill="url(#spaceGrad)" rx="12"/>

  <!-- Scattered stars -->
  <use href="#star" x="45" y="95" opacity="0.6" filter="url(#starGlow)"/>
  <use href="#star" x="130" y="85" opacity="0.4"/>
  <use href="#star" x="290" y="100" opacity="0.7" filter="url(#starGlow)"/>
  <use href="#star" x="350" y="110" opacity="0.5"/>
  <use href="#star" x="70" y="140" opacity="0.4"/>
  <use href="#star" x="360" y="155" opacity="0.6"/>
  <use href="#star" x="40" y="200" opacity="0.5" filter="url(#starGlow)"/>
  <use href="#star" x="370" y="190" opacity="0.4"/>
  <use href="#star" x="85" y="315" opacity="0.7"/>
  <use href="#star" x="330" y="305" opacity="0.5" filter="url(#starGlow)"/>

  <!-- Header -->
  <text class="title" x="200" y="30">JWST Gravitational Lensing</text>
  <text class="subtitle" x="200" y="46">Seeing Curved Spacetime</text>
  <text class="period" x="200" y="60">2022-Present • L2 Lagrange Point</text>

  <!-- Lensing visualization -->
  <rect x="20" y="80" width="360" height="210" fill="rgba(0,0,0,0.3)" rx="8"/>

  <!-- Massive galaxy cluster (lensing mass) -->
  <circle cx="200" cy="185" r="35" fill="url(#galaxyCluster)" opacity="0.8"/>
  <circle cx="200" cy="185" r="25" fill="#fbbf24" opacity="0.6"/>
  <circle cx="200" cy="185" r="15" fill="#fef3c7"/>
  <text class="label-text" x="200" y="235" fill="#fbbf24">Galaxy Cluster</text>
  <text class="label-text" x="200" y="245" fill="#fbbf24">(Massive lens)</text>

  <!-- Lensed galaxy arcs -->
  <!-- Upper arc -->
  <path class="lensed-arc" d="M 150 130 Q 200 115 250 130"/>
  <text class="label-text" x="280" y="125" fill="#60a5fa">Lensed</text>
  <text class="label-text" x="280" y="134" fill="#60a5fa">galaxy arc</text>

  <!-- Lower arc -->
  <path class="lensed-arc" d="M 145 240 Q 200 255 255 240"/>

  <!-- Side arcs -->
  <path class="lensed-arc" d="M 130 165 Q 120 185 130 205" stroke-width="2"/>
  <path class="lensed-arc" d="M 270 165 Q 280 185 270 205" stroke-width="2"/>

  <!-- Background galaxies (smaller, distorted) -->
  <ellipse cx="165" cy="150" rx="8" ry="3" fill="#3b82f6" opacity="0.6" transform="rotate(-30 165 150)"/>
  <ellipse cx="235" cy="150" rx="8" ry="3" fill="#60a5fa" opacity="0.6" transform="rotate(30 235 150)"/>
  <ellipse cx="165" cy="220" rx="8" ry="3" fill="#2563eb" opacity="0.6" transform="rotate(30 165 220)"/>
  <ellipse cx="235" cy="220" rx="8" ry="3" fill="#3b82f6" opacity="0.6" transform="rotate(-30 235 220)"/>

  <text class="info-text" x="30" y="275" font-style="italic" fill="white">Light from distant galaxies bends around massive cluster</text>

  <!-- Divider -->
  <line x1="20" y1="300" x2="380" y2="300" stroke="rgba(251,191,36,0.3)" stroke-width="1"/>

  <!-- What we see -->
  <text class="header-text" x="30" y="320">What JWST Reveals</text>
  <text class="info-text" x="30" y="335">🔭 Direct visual proof of curved spacetime</text>
  <text class="info-text" x="30" y="348">🌌 Background galaxies stretched into arcs & rings</text>
  <text class="info-text" x="30" y="361">📐 "Einstein Rings" when alignment is perfect</text>
  <text class="info-text" x="30" y="374">🕰️  Seeing 13+ billion years into the past</text>
  <text class="info-text" x="30" y="387">⚖️  Mapping invisible dark matter distribution</text>

  <!-- The Journey -->
  <rect x="25" y="400" width="350" height="110" fill="rgba(251,191,36,0.15)" rx="8" stroke="#fbbf24" stroke-width="2"/>
  <text class="header-text" x="200" y="418" text-anchor="middle">The Geometric Journey</text>

  <text class="info-text" x="35" y="435" font-weight="600">300 BCE - Euclid:</text>
  <text class="info-text" x="120" y="435">"Space is flat and absolute"</text>

  <text class="info-text" x="35" y="452" font-weight="600">1830s - Gauss/Lobachevsky/Bolyai:</text>
  <text class="info-text" x="205" y="452">"Space CAN curve"</text>

  <text class="info-text" x="35" y="469" font-weight="600">1915 - Einstein:</text>
  <text class="info-text" x="120" y="469">"Space DOES curve around mass"</text>

  <text class="info-text" x="35" y="486" font-weight="600">2022 - JWST:</text>
  <text class="info-text" x="120" y="486">"Here's a photograph of that curvature"</text>

  <text class="info-text" x="200" y="502" text-anchor="middle" fill="#fbbf24" font-style="italic">You are looking at bent spacetime.</text>

  <!-- Save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="520"
    width="300"
    height="35"
    rx="10"
    spell="save"
    spell-components='{"bdoPubKey":"${geometryBDOPubKey}","collection":"geometry"}'
  />
  <text class="button-text" x="200" y="537.5">🔭 Save to Collection</text>
</svg>`;
}
