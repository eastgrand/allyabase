/**
 * Food Banks Examples for Test Environment
 *
 * These food bank posts demonstrate:
 * - Charitable organizations fighting hunger
 * - Save spell for adding to carrierBag collection
 * - Donation support links
 */

import sessionless from 'sessionless-node';

export const foodBanksPosts = [
  {
    id: 'oregon-food-bank-001',
    uuid: sessionless.generateUUID(),
    type: 'food-bank',
    category: 'hunger-relief',
    name: 'Oregon Food Bank',
    subtitle: 'Fighting Hunger in Oregon & SW Washington',
    description: 'Oregon Food Bank works to eliminate hunger and its root causes. Through a statewide network of partner agencies, they provide food assistance and advocate for policies that address food insecurity.',
    mission: 'To eliminate hunger and its root causes because no one should be hungry',
    website: 'https://www.oregonfoodbank.org',
    donationUrl: 'https://www.oregonfoodbank.org/donate',
    location: {
      state: 'Oregon',
      region: 'Oregon & SW Washington',
      headquarters: 'Portland, OR'
    },
    colors: {
      primary: '#4DA00F',
      accent: '#F59420'
    },
    services: [
      'Emergency food assistance',
      'Network of 1,400+ partner agencies',
      'Nutrition education programs',
      'Policy advocacy',
      'Community partnerships',
      'Fresh produce distribution'
    ],
    impact: [
      'Serving communities across Oregon and SW Washington',
      'Distributing millions of pounds of food annually',
      '1 in 8 Oregonians faces hunger',
      'Working toward food security for all'
    ],
    founded: '1982',
    tags: ['food-bank', 'oregon', 'hunger-relief', 'charity', 'community']
  },
  {
    id: 'second-harvest-tennessee-002',
    uuid: sessionless.generateUUID(),
    type: 'food-bank',
    category: 'hunger-relief',
    name: 'Second Harvest Food Bank of Middle Tennessee',
    subtitle: 'Feeding Hope in Tennessee',
    description: 'Second Harvest Food Bank serves 46 counties across Middle and West Tennessee, providing food assistance to hundreds of thousands of neighbors facing hunger through a network of partner agencies.',
    mission: 'To feed hungry people and work to solve hunger issues in our community',
    website: 'https://www.secondharvestetn.org',
    donationUrl: 'https://donate.secondharvestetn.org/site/Donation2?df_id=1480&mfc_pref=T&1480.donation=form1',
    location: {
      state: 'Tennessee',
      region: 'Middle & West Tennessee',
      headquarters: 'Nashville, TN'
    },
    colors: {
      primary: '#0066CC',
      accent: '#FF6600'
    },
    services: [
      'Food distribution programs',
      'School feeding programs',
      'Senior nutrition assistance',
      'Emergency food boxes',
      'Mobile food pantries',
      'SNAP application assistance'
    ],
    impact: [
      'Serving 46 counties in Tennessee',
      'Distributing over 40 million meals annually',
      '1 in 7 Tennesseans faces hunger',
      'Supporting 400+ partner agencies'
    ],
    founded: '1978',
    tags: ['food-bank', 'tennessee', 'hunger-relief', 'charity', 'nashville']
  },
  {
    id: 'feeding-illinois-003',
    uuid: sessionless.generateUUID(),
    type: 'food-bank-network',
    category: 'hunger-relief',
    name: 'Illinois Food Bank Network',
    subtitle: 'Feeding Illinois Communities',
    description: 'The Illinois food bank network consists of eight regional food banks working together to fight hunger across the state. These food banks serve every county in Illinois through thousands of partner agencies.',
    mission: 'To lead a unified response to hunger in Illinois',
    website: 'https://www.feedingillinois.org/food-banks',
    donationUrl: 'https://www.feedingillinois.org/get-involved/donate',
    location: {
      state: 'Illinois',
      region: 'Statewide',
      headquarters: 'Springfield, IL'
    },
    colors: {
      primary: '#1B5BA6',
      accent: '#E84A27'
    },
    services: [
      '8 regional food banks statewide',
      'Mobile food pantry programs',
      'School-based programs',
      'Senior food programs',
      'SNAP outreach',
      'Nutrition education'
    ],
    impact: [
      'Serving all 102 counties in Illinois',
      'Providing over 100 million meals annually',
      '1 in 8 Illinois residents faces food insecurity',
      'Network of 3,000+ partner agencies'
    ],
    memberFoodBanks: [
      'Northern Illinois Food Bank',
      'Greater Chicago Food Depository',
      'Feeding America Eastern Illinois',
      'Central Illinois Foodbank',
      'River Bend Foodbank',
      'Tri-State Food Bank',
      'St. Louis Area Foodbank (serving southern IL)',
      'Feeding America Heartland (serving western IL)'
    ],
    founded: '2009',
    tags: ['food-bank', 'illinois', 'hunger-relief', 'charity', 'network']
  },
  {
    id: 'texas-food-banks-004',
    uuid: sessionless.generateUUID(),
    type: 'food-bank-network',
    category: 'hunger-relief',
    name: 'Texas Food Bank Network',
    subtitle: 'Feeding Texas Families',
    description: 'Texas has a network of 21 food banks serving all 254 counties across the state. These food banks work together to fight hunger and provide food assistance to millions of Texans through thousands of partner agencies.',
    mission: 'To lead a unified effort for a hunger-free Texas',
    website: 'https://squaremeals.org/Public-Resources/Texas-Food-Banks',
    donationUrl: 'https://www.feedingtexas.org/take-action/donate/',
    location: {
      state: 'Texas',
      region: 'Statewide',
      headquarters: 'Austin, TX'
    },
    colors: {
      primary: '#BF5700',
      accent: '#005F86'
    },
    services: [
      '21 regional food banks statewide',
      'Mobile food pantries',
      'School feeding programs',
      'Senior nutrition programs',
      'Disaster response',
      'Benefits enrollment assistance'
    ],
    impact: [
      'Serving all 254 counties in Texas',
      'Providing over 500 million meals annually',
      '1 in 7 Texans faces food insecurity',
      'Network of 4,000+ partner agencies'
    ],
    memberFoodBanks: [
      'Houston Food Bank',
      'North Texas Food Bank',
      'San Antonio Food Bank',
      'Central Texas Food Bank',
      'Tarrant Area Food Bank',
      'El Paso Food Bank',
      'Galveston County Food Bank',
      'And 14 more regional food banks'
    ],
    founded: '1986',
    tags: ['food-bank', 'texas', 'hunger-relief', 'charity', 'network']
  }
];

/**
 * Generate SVG for food bank organization
 * Visual representation with brand colors and mission
 *
 * @param {Object} foodBank - Food bank object
 * @param {string} foodBankBDOPubKey - PubKey of this food bank's BDO
 * @returns {string} SVG string
 */
export function generateFoodBankSVG(foodBank, foodBankBDOPubKey) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 360" width="400" height="360">
  <defs>
    <linearGradient id="bgGradient-${foodBank.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${foodBank.colors.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${foodBank.colors.primary};stop-opacity:0.8" />
    </linearGradient>

    <linearGradient id="saveGrad-${foodBank.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${foodBank.colors.primary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${foodBank.colors.accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${foodBank.colors.primary};stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow-${foodBank.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="${foodBank.colors.accent}" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .org-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 20px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .org-subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: ${foodBank.colors.accent};
      text-anchor: middle;
      font-weight: 600;
    }
    .mission-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: white;
      text-anchor: middle;
      font-style: italic;
    }
    .info-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: white;
      text-anchor: start;
    }
    .link-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: ${foodBank.colors.accent};
      text-anchor: middle;
      text-decoration: underline;
    }
    .save-button {
      fill: url(#saveGrad-${foodBank.id});
      stroke: ${foodBank.colors.accent};
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .save-button:hover {
      filter: url(#saveGlow-${foodBank.id});
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
  <rect x="0" y="0" width="400" height="360" fill="url(#bgGradient-${foodBank.id})" rx="12"/>

  <!-- Decorative food icons at top -->
  <text x="80" y="30" font-size="24" opacity="0.3">🍎</text>
  <text x="140" y="30" font-size="24" opacity="0.3">🥕</text>
  <text x="200" y="30" font-size="24" opacity="0.3">🍞</text>
  <text x="260" y="30" font-size="24" opacity="0.3">🥬</text>
  <text x="320" y="30" font-size="24" opacity="0.3">🥫</text>

  <!-- Main icon -->
  <text x="200" y="85" text-anchor="middle" font-size="48">🤝</text>

  <!-- Organization name -->
  <text class="org-title" x="200" y="118">${foodBank.name}</text>
  <text class="org-subtitle" x="200" y="135">${foodBank.subtitle}</text>

  <!-- Mission statement -->
  <rect x="30" y="150" width="340" height="28" fill="rgba(255,255,255,0.1)" rx="6"/>
  <text class="mission-text" x="200" y="165">"${foodBank.mission.substring(0, 55)}</text>
  <text class="mission-text" x="200" y="175">${foodBank.mission.substring(55, 110)}${foodBank.mission.length > 110 ? '..."' : '"'}</text>

  <!-- Impact stats -->
  ${foodBank.impact.slice(0, 4).map((stat, i) =>
    `<text class="info-text" x="30" y="${198 + (i * 16)}">📍 ${stat}</text>`
  ).join('\n  ')}

  <!-- Location -->
  <text class="info-text" x="30" y="270">🏢 ${foodBank.location.headquarters} • Founded ${foodBank.founded}</text>

  <!-- Website link -->
  <text class="link-text" x="200" y="290">${foodBank.website.replace('https://', '').replace('www.', '')}</text>

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
    spell-components='{"bdoPubKey":"${foodBankBDOPubKey}","collection":"charity"}'
  />
  <text class="button-text" x="200" y="330">💚 Support This Cause</text>
</svg>`;
}
