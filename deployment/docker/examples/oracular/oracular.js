/**
 * Oracular Examples for Test Environment
 *
 * These oracular posts demonstrate:
 * - Tarot cards, astrology charts, divination tools
 * - Save spell for adding to carrierBag "oracular" collection
 * - Interpretations, meanings, and guidance
 */

import sessionless from 'sessionless-node';

export const oracularPosts = [
  {
    id: 'tarot-the-tower-001',
    uuid: sessionless.generateUUID(),
    type: 'tarot',
    category: 'major-arcana',
    name: 'The Tower',
    number: 'XVI',
    description: 'A dramatic card depicting a tall tower struck by lightning, with figures falling from its heights. The Tower represents sudden upheaval, revelation, and the breaking down of false structures.',
    uprightMeaning: {
      keywords: ['Upheaval', 'Sudden change', 'Revelation', 'Awakening', 'Destruction of illusions'],
      interpretation: 'The Tower signals a sudden, dramatic change that may feel disruptive or uncomfortable. However, this destruction is necessary to clear away false beliefs and outdated structures. What falls away was built on unstable foundations. Though initially shocking, this change ultimately leads to liberation and truth.',
      advice: 'Embrace the change rather than resist it. What is falling apart was never truly stable. Use this opportunity to rebuild on a stronger, more authentic foundation.'
    },
    reversedMeaning: {
      keywords: ['Avoiding disaster', 'Fear of change', 'Resisting transformation', 'Delayed upheaval'],
      interpretation: 'Reversed, The Tower suggests you may be resisting necessary change or trying to avoid an inevitable transformation. You might be clinging to structures that need to fall, or experiencing ongoing anxiety about potential upheaval.',
      advice: 'Consider what changes you are avoiding. Sometimes delaying the inevitable only makes it more difficult. Face necessary transformations with courage.'
    },
    symbolism: [
      'Lightning: Divine intervention and sudden revelation',
      'Falling figures: Loss of ego and false security',
      'Crown falling: Destruction of false authority',
      'Gray sky: Spiritual storm and awakening',
      'Mountain: Solid ground of truth beneath illusion'
    ],
    elements: {
      element: 'Fire',
      astrology: 'Mars',
      numerology: '16 (1+6=7: spiritual awakening)'
    },
    imageUrl: 'https://images.unsplash.com/photo-1633269540827-728aabbb7646?w=400',
    tags: ['tarot', 'major-arcana', 'tower', 'transformation', 'awakening'],
    metadata: {
      deck: 'Rider-Waite-Smith',
      readingType: 'major-arcana',
      energyLevel: 'intense'
    }
  },
  {
    id: 'tarot-ace-of-cups-002',
    uuid: sessionless.generateUUID(),
    type: 'tarot',
    category: 'minor-arcana',
    name: 'Ace of Cups',
    suit: 'Cups',
    number: 'I',
    description: 'A hand emerging from a cloud holds a golden chalice overflowing with water. The Ace of Cups represents new emotional beginnings, love, compassion, and spiritual abundance.',
    uprightMeaning: {
      keywords: ['New love', 'Emotional awakening', 'Compassion', 'Creativity', 'Intuition'],
      interpretation: 'The Ace of Cups heralds new emotional and spiritual beginnings. This could manifest as a new relationship, renewed passion in existing connections, creative inspiration, or a spiritual awakening. Your heart is open and receptive to the flow of love and compassion.',
      advice: 'Open your heart to new possibilities. This is a time of emotional abundance and spiritual connection. Trust your intuition and allow yourself to feel deeply.'
    },
    reversedMeaning: {
      keywords: ['Emotional blockage', 'Repressed feelings', 'Creative block', 'Emptiness'],
      interpretation: 'Reversed, the Ace of Cups suggests emotional blockages or difficulty expressing feelings. You may be holding back love, creativity, or spiritual connection out of fear or past hurt.',
      advice: 'Explore what is blocking your emotional flow. Healing old wounds can reopen your heart to love and joy.'
    },
    symbolism: [
      'Overflowing cup: Abundance of emotion and love',
      'Dove: Holy Spirit and divine love',
      'Five streams: The five senses awakening',
      'Lotus flowers: Spiritual awakening and purity',
      'Sea: The subconscious and emotions'
    ],
    elements: {
      element: 'Water',
      astrology: 'Cancer, Scorpio, Pisces',
      numerology: '1: new beginnings'
    },
    imageUrl: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400',
    tags: ['tarot', 'minor-arcana', 'cups', 'love', 'emotion'],
    metadata: {
      deck: 'Rider-Waite-Smith',
      readingType: 'minor-arcana',
      energyLevel: 'gentle'
    }
  },
  {
    id: 'astrology-birth-chart-003',
    uuid: sessionless.generateUUID(),
    type: 'astrology',
    category: 'natal-chart',
    name: 'Birth Chart Reading',
    chartType: 'Natal Chart',
    description: 'A comprehensive astrological birth chart analysis revealing your cosmic blueprint. This chart maps the exact positions of planets at your moment of birth, offering deep insights into your personality, life path, and potential.',
    chartDetails: {
      sunSign: 'Aries',
      moonSign: 'Pisces',
      risingSign: 'Gemini',
      date: 'March 25, 1995',
      time: '6:42 AM',
      location: 'New York, NY'
    },
    sunSignInterpretation: {
      sign: 'Aries ♈',
      element: 'Fire',
      modality: 'Cardinal',
      ruler: 'Mars',
      keywords: ['Initiative', 'Courage', 'Leadership', 'Independence', 'Passion'],
      description: 'With Sun in Aries, you possess natural leadership abilities and a pioneering spirit. You approach life with enthusiasm and directness, unafraid to take the initiative. Your challenge is to balance your impulsive nature with patience and consideration for others.'
    },
    moonSignInterpretation: {
      sign: 'Pisces ♓',
      element: 'Water',
      modality: 'Mutable',
      ruler: 'Neptune',
      keywords: ['Empathy', 'Intuition', 'Creativity', 'Spirituality', 'Compassion'],
      description: 'Moon in Pisces gives you extraordinary emotional sensitivity and intuitive abilities. You feel deeply and may absorb others\' emotions like a sponge. Your emotional fulfillment comes through creative expression, spiritual connection, and helping others.'
    },
    risingSignInterpretation: {
      sign: 'Gemini ♊',
      element: 'Air',
      modality: 'Mutable',
      ruler: 'Mercury',
      keywords: ['Communication', 'Curiosity', 'Adaptability', 'Wit', 'Versatility'],
      description: 'Gemini rising gives you a quick, curious, and communicative approach to life. You appear youthful, intellectual, and socially adaptable. You approach new situations with curiosity and are skilled at gathering and sharing information.'
    },
    keyThemes: [
      'Balance fire (Aries) with water (Pisces) - action with compassion',
      'Communicate (Gemini) your intuitive insights (Pisces)',
      'Channel pioneering energy (Aries) into creative/spiritual pursuits',
      'Use versatility (Gemini) to navigate emotional depth (Pisces)',
      'Lead (Aries) with empathy and wisdom'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=400',
    tags: ['astrology', 'birth-chart', 'aries', 'pisces', 'gemini'],
    metadata: {
      chartSystem: 'Tropical/Western',
      houseSystem: 'Placidus',
      readingType: 'Natal'
    }
  },
  {
    id: 'astrology-transit-reading-004',
    uuid: sessionless.generateUUID(),
    type: 'astrology',
    category: 'transit',
    name: 'Current Planetary Transits',
    chartType: 'Transit Reading',
    description: 'An analysis of current planetary movements and how they affect your natal chart. Understanding transits helps you navigate opportunities and challenges with cosmic awareness.',
    transitDate: 'December 2024',
    majorTransits: [
      {
        transit: 'Jupiter in Gemini',
        impact: 'Expansion through communication and learning',
        duration: 'May 2024 - May 2025',
        description: 'Jupiter expands your mental horizons and social connections. Great time for education, writing, travel, and networking. Opportunities come through ideas and communication.'
      },
      {
        transit: 'Saturn in Pisces',
        impact: 'Spiritual discipline and boundaries',
        duration: 'March 2023 - February 2026',
        description: 'Saturn asks you to give structure to your spiritual life and creative pursuits. This is about making dreams real through consistent effort and healthy boundaries.'
      },
      {
        transit: 'Pluto in Aquarius',
        impact: 'Transformation of collective systems',
        duration: 'November 2024 - January 2044',
        description: 'Major generational shift. Technology, community structures, and humanitarian concerns undergo profound transformation. Your role in collective change emerges.'
      }
    ],
    currentGuidance: [
      'Embrace learning opportunities (Jupiter in Gemini)',
      'Structure your spiritual practice (Saturn in Pisces)',
      'Engage with community transformation (Pluto in Aquarius)',
      'Balance expansion with discipline',
      'Trust the timing of cosmic cycles'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=400',
    tags: ['astrology', 'transits', 'jupiter', 'saturn', 'pluto'],
    metadata: {
      chartSystem: 'Tropical/Western',
      readingType: 'Transit',
      timeframe: 'December 2024'
    }
  }
];

/**
 * Generate SVG for tarot card
 * Single button with save spell to oracular collection
 *
 * @param {Object} card - Tarot card object
 * @param {string} cardBDOPubKey - PubKey of this card's BDO
 * @returns {string} SVG string
 */
export function generateTarotSVG(card, cardBDOPubKey) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 360" width="400" height="360">
  <defs>
    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#5b21b6;stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#7c3aed" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .tarot-name {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 20px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .tarot-number {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      fill: #c4b5fd;
      text-anchor: middle;
    }
    .tarot-category {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #a78bfa;
      text-anchor: middle;
    }
    .tarot-description {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #d1d5db;
      text-anchor: start;
    }
    .section-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      font-weight: bold;
      fill: #c4b5fd;
      text-anchor: start;
    }
    .keyword-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: #9ca3af;
      text-anchor: start;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: #7c3aed;
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
  <rect x="0" y="0" width="400" height="360" fill="#1a0033" rx="12"/>

  <!-- Icon -->
  <text x="200" y="35" text-anchor="middle" font-size="30">🔮</text>

  <!-- Card Info -->
  <text class="tarot-name" x="200" y="70">${card.name}</text>
  <text class="tarot-number" x="200" y="90">${card.number}</text>
  <text class="tarot-category" x="200" y="105">${card.category.replace('-', ' ').toUpperCase()}</text>

  <!-- Description -->
  <text class="tarot-description" x="20" y="130">${card.description.substring(0, 60)}...</text>
  <text class="tarot-description" x="20" y="145">${card.description.substring(60, 120)}...</text>

  <!-- Upright meaning -->
  <text class="section-title" x="20" y="170">Upright Keywords:</text>
  ${card.uprightMeaning.keywords.slice(0, 3).map((keyword, i) =>
    `<text class="keyword-text" x="20" y="${185 + (i * 14)}">• ${keyword}</text>`
  ).join('\n  ')}

  <!-- Interpretation preview -->
  <text class="section-title" x="20" y="240">Interpretation:</text>
  <text class="tarot-description" x="20" y="255">${card.uprightMeaning.interpretation.substring(0, 65)}...</text>
  <text class="tarot-description" x="20" y="270">${card.uprightMeaning.interpretation.substring(65, 130)}...</text>

  <!-- Element -->
  <text class="keyword-text" x="20" y="295">Element: ${card.elements.element} • ${card.elements.astrology}</text>

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
    spell-components='{"bdoPubKey":"${cardBDOPubKey}","collection":"oracular"}'
  />
  <text class="button-text" x="200" y="330">🔮 Save to Oracular</text>
</svg>`;
}

/**
 * Generate SVG for astrology chart
 * Single button with save spell to oracular collection
 *
 * @param {Object} chart - Astrology chart object
 * @param {string} chartBDOPubKey - PubKey of this chart's BDO
 * @returns {string} SVG string
 */
export function generateAstrologySVG(chart, chartBDOPubKey) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 340" width="400" height="340">
  <defs>
    <linearGradient id="astroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color="#4338ca;stop-opacity:1" />
    </linearGradient>

    <filter id="astroGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#6366f1" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .astro-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .astro-type {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: #a5b4fc;
      text-anchor: middle;
    }
    .astro-description {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #d1d5db;
      text-anchor: start;
    }
    .sign-label {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      font-weight: bold;
      fill: #818cf8;
      text-anchor: start;
    }
    .sign-value {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      font-weight: bold;
      fill: white;
      text-anchor: start;
    }
    .theme-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: #9ca3af;
      text-anchor: start;
    }
    .save-button {
      fill: url(#astroGrad);
      stroke: #6366f1;
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .save-button:hover {
      filter: url(#astroGlow);
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
  <rect x="0" y="0" width="400" height="340" fill="#1a0033" rx="12"/>

  <!-- Icon -->
  <text x="200" y="35" text-anchor="middle" font-size="30">✨</text>

  <!-- Chart Info -->
  <text class="astro-title" x="200" y="70">${chart.name}</text>
  <text class="astro-type" x="200" y="88">${chart.chartType}</text>

  <!-- Description -->
  <text class="astro-description" x="20" y="110">${chart.description.substring(0, 65)}...</text>
  <text class="astro-description" x="20" y="125">${chart.description.substring(65, 130)}...</text>

  ${chart.chartDetails ? `
  <!-- Birth details for natal chart -->
  <text class="sign-label" x="20" y="155">Sun Sign:</text>
  <text class="sign-value" x="100" y="155">${chart.chartDetails.sunSign}</text>

  <text class="sign-label" x="20" y="175">Moon Sign:</text>
  <text class="sign-value" x="100" y="175">${chart.chartDetails.moonSign}</text>

  <text class="sign-label" x="20" y="195">Rising Sign:</text>
  <text class="sign-value" x="100" y="195">${chart.chartDetails.risingSign}</text>

  <!-- Key themes -->
  ${chart.keyThemes ? chart.keyThemes.slice(0, 2).map((theme, i) =>
    `<text class="theme-text" x="20" y="${220 + (i * 14)}">⭐ ${theme.substring(0, 55)}...</text>`
  ).join('\n  ') : ''}
  ` : `
  <!-- Transit info -->
  <text class="sign-label" x="20" y="155">Reading Date:</text>
  <text class="sign-value" x="130" y="155">${chart.transitDate}</text>

  ${chart.currentGuidance ? chart.currentGuidance.slice(0, 3).map((guidance, i) =>
    `<text class="theme-text" x="20" y="${180 + (i * 16)}">⭐ ${guidance.substring(0, 50)}...</text>`
  ).join('\n  ') : ''}
  `}

  <!-- Single centered save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="280"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${chartBDOPubKey}","collection":"oracular"}'
  />
  <text class="button-text" x="200" y="305">⭐ Save to Oracular</text>
</svg>`;
}
