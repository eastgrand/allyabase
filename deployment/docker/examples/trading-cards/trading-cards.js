/**
 * Trading Cards Examples for Test Environment
 *
 * These trading card posts demonstrate:
 * - Biographical cards for notable figures
 * - Women in STEM pioneers
 * - Save spell for adding to carrierBag "trading-cards" collection
 * - Educational content with visual card design
 */

import sessionless from 'sessionless-node';

export const tradingCardsPosts = [
  {
    id: 'trading-card-ada-lovelace-001',
    uuid: sessionless.generateUUID(),
    type: 'stem-pioneer',
    category: 'mathematician-programmer',
    name: 'Ada Lovelace',
    fullName: 'Augusta Ada King, Countess of Lovelace',
    born: '1815',
    died: '1852',
    nationality: 'British',
    field: 'Mathematics & Computer Science',
    knownFor: 'First Computer Programmer',
    description: 'Ada Lovelace is considered the first computer programmer for her work on Charles Babbage\'s Analytical Engine. She wrote the first algorithm intended to be processed by a machine.',
    majorContributions: [
      'Wrote the first algorithm for a computing machine (1843)',
      'Recognized the potential of computers beyond calculation',
      'Envisioned computers creating music and art',
      'Published detailed notes on the Analytical Engine',
      'Understood concepts of looping and subroutines'
    ],
    achievements: [
      'First to publish a computer algorithm',
      'Visionary who saw computers as more than calculators',
      'Ada programming language named in her honor (1980)',
      'Ada Lovelace Day celebrates women in STEM (October)'
    ],
    famousQuote: 'The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.',
    funFacts: [
      'Daughter of poet Lord Byron',
      'Tutored by mathematician Mary Somerville',
      'Died at age 36, same age as her father',
      'Her notes were three times longer than the original article'
    ],
    colors: {
      primary: '#9333ea',
      secondary: '#c084fc',
      accent: '#fbbf24'
    },
    imageUrl: 'https://collectionimages.npg.org.uk/std/mw304536/Ada-Lovelace.jpg',
    tags: ['ada-lovelace', 'computer-science', 'mathematics', 'programming', 'pioneer'],
    metadata: {
      era: 'Victorian Era',
      decade: '1840s',
      legacy: 'Foundation of computer programming'
    }
  },
  {
    id: 'trading-card-rosalind-franklin-002',
    uuid: sessionless.generateUUID(),
    type: 'stem-pioneer',
    category: 'chemist-crystallographer',
    name: 'Rosalind Franklin',
    fullName: 'Rosalind Elsie Franklin',
    born: '1920',
    died: '1958',
    nationality: 'British',
    field: 'Chemistry & Molecular Biology',
    knownFor: 'DNA Structure Discovery',
    description: 'Rosalind Franklin\'s X-ray crystallography work was crucial to understanding the structure of DNA. Her Photo 51 provided key evidence for the double helix structure.',
    majorContributions: [
      'Captured Photo 51: critical image of DNA structure (1952)',
      'Advanced X-ray crystallography techniques',
      'Research on molecular structure of viruses',
      'Pioneering work on coal and graphite structure',
      'Tobacco mosaic virus research'
    ],
    achievements: [
      'Photo 51 revealed DNA\'s helical structure',
      'Published groundbreaking papers on DNA and RNA',
      'Made fundamental contributions to virology',
      'Laid groundwork for understanding genetic material',
      'Her data was crucial to Watson & Crick\'s model'
    ],
    famousQuote: 'Science and everyday life cannot and should not be separated.',
    funFacts: [
      'Her work was used without her knowledge or permission',
      'Died at 37 from ovarian cancer, likely from X-ray exposure',
      'Nobel Prize cannot be awarded posthumously',
      'Overlooked during her lifetime, now widely recognized',
      'Several universities have buildings named after her'
    ],
    colors: {
      primary: '#0ea5e9',
      secondary: '#38bdf8',
      accent: '#ec4899'
    },
    imageUrl: 'https://collectionimages.npg.org.uk/std/mw62979/Rosalind-Franklin.jpg',
    tags: ['rosalind-franklin', 'dna', 'chemistry', 'x-ray-crystallography', 'pioneer'],
    metadata: {
      era: 'Post-War Era',
      decade: '1950s',
      legacy: 'DNA structure discovery'
    }
  },
  {
    id: 'trading-card-marie-curie-003',
    uuid: sessionless.generateUUID(),
    type: 'stem-pioneer',
    category: 'physicist-chemist',
    name: 'Marie Curie',
    fullName: 'Maria Skłodowska-Curie',
    born: '1867',
    died: '1934',
    nationality: 'Polish-French',
    field: 'Physics & Chemistry',
    knownFor: 'Radioactivity Research',
    description: 'Marie Curie was a pioneering physicist and chemist who conducted groundbreaking research on radioactivity. She was the first woman to win a Nobel Prize and remains the only person to win Nobel Prizes in two different sciences.',
    majorContributions: [
      'Discovered radioactive elements polonium and radium',
      'Coined the term "radioactivity"',
      'Developed theory of radioactivity',
      'Pioneered techniques for isolating radioactive isotopes',
      'Developed mobile X-ray units for WWI (petites Curies)'
    ],
    achievements: [
      'First woman to win a Nobel Prize (Physics, 1903)',
      'Only person to win Nobel Prizes in two sciences (Chemistry, 1911)',
      'First female professor at University of Paris',
      'First woman entombed in Paris Panthéon on her own merits',
      'Founded Curie Institutes in Paris and Warsaw'
    ],
    famousQuote: 'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.',
    funFacts: [
      'Carried test tubes of radium in her pockets',
      'Her papers are still radioactive and stored in lead boxes',
      'Died from aplastic anemia due to radiation exposure',
      'Both her daughters won scientific honors',
      'Element Curium (96) named after her and Pierre'
    ],
    colors: {
      primary: '#22c55e',
      secondary: '#4ade80',
      accent: '#fbbf24'
    },
    imageUrl: 'https://www.nobelprize.org/images/curie-marie-irene-lab-photo-3515-landscape-gallery.jpg',
    tags: ['marie-curie', 'physics', 'chemistry', 'radioactivity', 'nobel-prize'],
    metadata: {
      era: 'Early 20th Century',
      decade: '1900s-1930s',
      legacy: 'Radioactivity and nuclear physics'
    }
  },
  {
    id: 'trading-card-emmy-noether-004',
    uuid: sessionless.generateUUID(),
    type: 'stem-pioneer',
    category: 'mathematician-physicist',
    name: 'Emmy Noether',
    fullName: 'Amalie Emmy Noether',
    born: '1882',
    died: '1935',
    nationality: 'German',
    field: 'Mathematics & Theoretical Physics',
    knownFor: 'Abstract Algebra & Noether\'s Theorem',
    description: 'Emmy Noether was a groundbreaking mathematician who made fundamental contributions to abstract algebra and theoretical physics. Einstein called her "the most significant creative mathematical genius since the higher education of women began."',
    majorContributions: [
      'Noether\'s Theorem: symmetry and conservation laws',
      'Revolutionized abstract algebra and ring theory',
      'Founded modern algebraic topology',
      'Advanced understanding of chain complexes',
      'Mentored generation of prominent mathematicians'
    ],
    achievements: [
      'Noether\'s Theorem fundamental to modern physics',
      'Described as "mother of modern algebra"',
      'Overcame gender barriers to teach at universities',
      'Praised by Einstein, Weyl, and other giants',
      'Published groundbreaking paper on invariant theory (1918)',
      'Developed ascending chain condition (Noetherian rings)'
    ],
    famousQuote: 'My methods are really methods of working and thinking; this is why they have crept in everywhere anonymously.',
    funFacts: [
      'Not allowed to officially teach for years due to being a woman',
      'Students called themselves "Noether\'s boys"',
      'Fled Nazi Germany in 1933 to teach at Bryn Mawr College',
      'Died suddenly from surgery complications at age 53',
      'Crater on Moon and asteroid 7001 named after her',
      'Google Doodle honored her 133rd birthday'
    ],
    colors: {
      primary: '#ef4444',
      secondary: '#f87171',
      accent: '#a78bfa'
    },
    imageUrl: 'https://mathshistory.st-andrews.ac.uk/Biographies/Noether_Emmy/noether_emmy_4.jpg',
    tags: ['emmy-noether', 'mathematics', 'physics', 'algebra', 'theorem'],
    metadata: {
      era: 'Early 20th Century',
      decade: '1910s-1930s',
      legacy: 'Abstract algebra and symmetry in physics'
    }
  }
];

/**
 * Generate SVG for STEM pioneer trading card
 * Portrait-style card with biographical information
 *
 * @param {Object} card - Trading card object
 * @param {string} cardBDOPubKey - PubKey of this card's BDO
 * @returns {string} SVG string
 */
export function generateSTEMPioneerCardSVG(card, cardBDOPubKey) {
  const { primary, secondary, accent } = card.colors;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560" width="400" height="560">
  <defs>
    <linearGradient id="cardBg-${card.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${secondary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="headerGrad-${card.id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${accent};stop-opacity:0.3" />
      <stop offset="50%" style="stop-color:${accent};stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:${accent};stop-opacity:0.3" />
    </linearGradient>

    <linearGradient id="saveGrad-${card.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${primary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${secondary};stop-opacity:1" />
    </linearGradient>

    <filter id="cardGlow-${card.id}" x="-50%" y="-50%" width="200%" height="200%">
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
    .card-border {
      fill: url(#cardBg-${card.id});
      stroke: ${accent};
      stroke-width: 4;
    }
    .card-name {
      font-family: Georgia, serif;
      font-size: 26px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .card-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      font-weight: 600;
      fill: ${accent};
      text-anchor: middle;
    }
    .card-dates {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: rgba(255,255,255,0.8);
      text-anchor: middle;
    }
    .section-header {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      font-weight: bold;
      fill: ${accent};
      text-anchor: start;
    }
    .info-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: white;
      text-anchor: start;
    }
    .quote-text {
      font-family: Georgia, serif;
      font-size: 9px;
      font-style: italic;
      fill: rgba(255,255,255,0.9);
      text-anchor: start;
    }
    .save-button {
      fill: url(#saveGrad-${card.id});
      stroke: ${accent};
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .save-button:hover {
      filter: url(#cardGlow-${card.id});
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

  <!-- Card Border -->
  <rect class="card-border" x="10" y="10" width="380" height="540" rx="16"/>

  <!-- Header Banner -->
  <rect x="20" y="20" width="360" height="60" fill="url(#headerGrad-${card.id})" rx="8"/>

  <!-- Portrait placeholder (decorative circle) -->
  <circle cx="200" cy="50" r="25" fill="rgba(255,255,255,0.2)" stroke="white" stroke-width="2"/>
  <text x="200" y="60" text-anchor="middle" font-size="28">👤</text>

  <!-- Name -->
  <text class="card-name" x="200" y="110">${card.name}</text>
  <text class="card-title" x="200" y="130">${card.knownFor}</text>
  <text class="card-dates" x="200" y="145">${card.born}–${card.died} • ${card.nationality}</text>

  <!-- Divider -->
  <line x1="30" y1="160" x2="370" y2="160" stroke="${accent}" stroke-width="2" opacity="0.5"/>

  <!-- Field -->
  <text class="section-header" x="30" y="180">Field</text>
  <text class="info-text" x="30" y="195">${card.field}</text>

  <!-- Major Contributions -->
  <text class="section-header" x="30" y="220">Major Contributions</text>
  ${card.majorContributions.slice(0, 3).map((contrib, i) =>
    `<text class="info-text" x="30" y="${238 + (i * 14)}">• ${contrib.substring(0, 52)}${contrib.length > 52 ? '...' : ''}</text>`
  ).join('\n  ')}

  <!-- Achievements -->
  <text class="section-header" x="30" y="300">Achievements</text>
  ${card.achievements.slice(0, 3).map((achievement, i) =>
    `<text class="info-text" x="30" y="${318 + (i * 14)}">★ ${achievement.substring(0, 50)}${achievement.length > 50 ? '...' : ''}</text>`
  ).join('\n  ')}

  <!-- Famous Quote -->
  <text class="section-header" x="30" y="380">Famous Quote</text>
  <rect x="25" y="388" width="350" height="60" fill="rgba(0,0,0,0.2)" rx="6"/>
  ${wrapQuoteText(card.famousQuote, 30, 402, 46)}

  <!-- Fun Fact -->
  <text class="section-header" x="30" y="470">Fun Fact</text>
  <text class="info-text" x="30" y="485">💡 ${card.funFacts[0].substring(0, 52)}</text>
  ${card.funFacts[0].length > 52 ? `<text class="info-text" x="30" y="498">${card.funFacts[0].substring(52, 104)}${card.funFacts[0].length > 104 ? '...' : ''}</text>` : ''}

  <!-- Save Button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="510"
    width="300"
    height="40"
    rx="10"
    spell="save"
    spell-components='{"bdoPubKey":"${cardBDOPubKey}","collection":"trading-cards"}'
  />
  <text class="button-text" x="200" y="530">🌟 Collect This Card</text>
</svg>`;
}

/**
 * Helper function to wrap quote text
 * @param {string} quote - Quote text to wrap
 * @param {number} x - X position
 * @param {number} y - Starting Y position
 * @param {number} maxChars - Max characters per line
 * @returns {string} SVG text elements
 */
function wrapQuoteText(quote, x, y, maxChars) {
  const words = quote.split(' ');
  const lines = [];
  let currentLine = '';

  words.forEach(word => {
    if ((currentLine + word).length <= maxChars) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  });
  if (currentLine) lines.push(currentLine);

  return lines.slice(0, 3).map((line, i) =>
    `<text class="quote-text" x="${x}" y="${y + (i * 13)}">"${line}${i === 2 && lines.length > 3 ? '..."' : i === lines.length - 1 ? '"' : ''}</text>`
  ).join('\n  ');
}
