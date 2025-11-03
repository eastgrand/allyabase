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
  },
  {
    id: 'puerto-rico-food-bank-005',
    uuid: sessionless.generateUUID(),
    type: 'food-bank',
    category: 'hunger-relief',
    name: 'Banco de Alimentos de Puerto Rico',
    subtitle: 'Food Bank of Puerto Rico',
    description: 'The Food Bank of Puerto Rico works to ensure no one in Puerto Rico goes without food. Through community partnerships and support programs, they distribute food and create a more just future for all Puerto Ricans.',
    mission: 'To ensure that no one in Puerto Rico goes without eating',
    website: 'https://alimentospr.org/en/',
    donationUrl: 'https://alimentospr.org/en/donate/',
    location: {
      state: 'Puerto Rico',
      region: 'Island-wide',
      headquarters: 'San Juan, PR'
    },
    colors: {
      primary: '#00A5E0',
      accent: '#FF6B35'
    },
    services: [
      'Food distribution programs',
      'Community partnerships',
      'Disaster relief and recovery',
      'Partner agency network',
      'Hunger advocacy',
      'Emergency food assistance'
    ],
    impact: [
      'Serving communities across Puerto Rico',
      'Building partnerships for food security',
      'Responding to natural disasters',
      'Working toward a hunger-free future'
    ],
    founded: '2001',
    tags: ['food-bank', 'puerto-rico', 'hunger-relief', 'charity', 'disaster-relief']
  },
  {
    id: 'three-square-nevada-006',
    uuid: sessionless.generateUUID(),
    type: 'food-bank',
    category: 'hunger-relief',
    name: 'Three Square Food Bank',
    subtitle: 'Southern Nevada\'s Only Food Bank',
    description: 'Three Square is the only food bank serving Southern Nevada. As a member of Feeding America, they provide wholesome food to hungry people while passionately pursuing a hunger-free community through programs like SNAP assistance and TEFAP.',
    mission: 'To provide wholesome food to hungry people, while passionately pursuing a hunger-free community',
    website: 'https://www.threesquare.org',
    donationUrl: 'https://www.threesquare.org/donate',
    location: {
      state: 'Nevada',
      region: 'Southern Nevada',
      headquarters: 'Las Vegas, NV'
    },
    colors: {
      primary: '#D4AF37',
      accent: '#E74C3C'
    },
    services: [
      'Food distribution programs',
      'SNAP application assistance',
      'TEFAP emergency food program',
      'Mobile food pantries',
      'School feeding programs',
      'Senior nutrition programs'
    ],
    impact: [
      'Only food bank serving Southern Nevada',
      'Member of Feeding America network',
      '$1 provides 6 meals to neighbors in need',
      'Serving Las Vegas and surrounding communities'
    ],
    founded: '2007',
    tags: ['food-bank', 'nevada', 'las-vegas', 'hunger-relief', 'charity']
  },
  {
    id: 'central-pa-food-bank-007',
    uuid: sessionless.generateUUID(),
    type: 'food-bank',
    category: 'hunger-relief',
    name: 'Central Pennsylvania Food Bank',
    subtitle: 'Feeding 27 Counties in Central PA',
    description: 'Central Pennsylvania Food Bank serves 27 counties across Central Pennsylvania, providing meals to children, families, and seniors facing hunger. Through a network of partner agencies and programs, they work to eliminate food insecurity in their region.',
    mission: 'To provide meals to children, families, and seniors facing hunger in Central Pennsylvania',
    website: 'https://www.centralpafoodbank.org',
    donationUrl: 'https://www.centralpafoodbank.org/donate',
    location: {
      state: 'Pennsylvania',
      region: '27 counties in Central PA',
      headquarters: 'Harrisburg, PA'
    },
    colors: {
      primary: '#1E5A8E',
      accent: '#67B346'
    },
    services: [
      'Food distribution network',
      'Child nutrition programs',
      'Senior food assistance',
      'Mobile food pantries',
      'Partner agency support',
      'Volunteer opportunities'
    ],
    impact: [
      'Serving 27 counties in Central Pennsylvania',
      'Providing meals to children and families',
      'Supporting seniors facing hunger',
      'Network of community partner agencies'
    ],
    founded: '1982',
    tags: ['food-bank', 'pennsylvania', 'hunger-relief', 'charity', 'harrisburg']
  },
  {
    id: 'snap-monthly-benefits-008',
    uuid: sessionless.generateUUID(),
    type: 'snap-benefits',
    category: 'benefits-info',
    name: 'SNAP Monthly Benefits 2024',
    subtitle: 'Understanding Your Food Assistance',
    description: 'The Supplemental Nutrition Assistance Program (SNAP) provides monthly benefits to help low-income families purchase food. Benefit amounts are based on household size, income, and expenses.',
    colors: {
      primary: '#2E7D32',
      accent: '#4CAF50',
      background: '#1B5E20'
    },
    benefitAmounts: [
      { householdSize: 1, maxMonthly: 291, average: 195 },
      { householdSize: 2, maxMonthly: 535, average: 357 },
      { householdSize: 3, maxMonthly: 766, average: 511 },
      { householdSize: 4, maxMonthly: 973, average: 649 },
      { householdSize: 5, maxMonthly: 1155, average: 771 },
      { householdSize: 6, maxMonthly: 1386, average: 924 },
      { householdSize: 7, maxMonthly: 1532, average: 1022 },
      { householdSize: 8, maxMonthly: 1751, average: 1168 }
    ],
    keyFacts: [
      'Benefits are loaded monthly on EBT card',
      'Amounts adjust based on income and expenses',
      'Can purchase food at authorized retailers',
      'Average benefit: $195/person per month',
      'Recertification required every 6-12 months'
    ],
    eligibility: [
      'U.S. citizen or qualified non-citizen',
      'Meet income guidelines (130% of poverty level)',
      'Meet resource limits ($2,750 general, $4,250 elderly/disabled)',
      'Work requirements apply for able-bodied adults'
    ],
    applyUrl: 'https://www.fns.usda.gov/snap/state-directory',
    tags: ['snap', 'benefits', 'food-assistance', 'government', 'nutrition']
  },
  {
    id: 'snap-how-it-works-009',
    uuid: sessionless.generateUUID(),
    type: 'snap-benefits',
    category: 'benefits-info',
    name: 'How SNAP Works',
    subtitle: 'From Application to Purchase',
    description: 'SNAP (Supplemental Nutrition Assistance Program) helps millions of Americans buy healthy food. Understanding the process from application to purchase helps families access the nutrition assistance they need.',
    colors: {
      primary: '#1565C0',
      accent: '#42A5F5',
      background: '#0D47A1'
    },
    processSteps: [
      {
        step: 1,
        title: 'Apply',
        description: 'Submit application online, by mail, or in person at local SNAP office',
        icon: '📝',
        timeframe: 'Day 1'
      },
      {
        step: 2,
        title: 'Interview',
        description: 'Complete phone or in-person interview with caseworker',
        icon: '💬',
        timeframe: 'Within 7 days'
      },
      {
        step: 3,
        title: 'Verification',
        description: 'Provide documents: ID, income proof, residency, expenses',
        icon: '🔍',
        timeframe: 'Within 10 days'
      },
      {
        step: 4,
        title: 'Determination',
        description: 'Receive approval or denial notice with benefit amount',
        icon: '✅',
        timeframe: 'Within 30 days'
      },
      {
        step: 5,
        title: 'EBT Card',
        description: 'Receive Electronic Benefit Transfer card by mail',
        icon: '💳',
        timeframe: 'Within 7-10 days'
      },
      {
        step: 6,
        title: 'Shop',
        description: 'Use EBT card at authorized stores, farmers markets, online',
        icon: '🛒',
        timeframe: 'Monthly benefits'
      }
    ],
    whatYouCanBuy: [
      '✅ Fruits and vegetables',
      '✅ Meat, poultry, and fish',
      '✅ Dairy products',
      '✅ Breads and cereals',
      '✅ Seeds and plants (for growing food)',
      '❌ Alcohol and tobacco',
      '❌ Hot prepared foods',
      '❌ Non-food items (soap, paper products)'
    ],
    emergencyBenefits: 'Expedited service available for qualifying households within 7 days',
    moreInfoUrl: 'https://www.fns.usda.gov/snap/recipient',
    tags: ['snap', 'how-it-works', 'food-assistance', 'ebt', 'application']
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
  // Only handle food-bank type (not SNAP benefits)
  if (foodBank.type === 'snap-benefits') {
    return null;
  }

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

/**
 * Generate SVG for SNAP monthly benefits
 * Shows benefit amounts by household size
 *
 * @param {Object} snap - SNAP benefits object
 * @param {string} snapBDOPubKey - PubKey of this SNAP benefits BDO
 * @returns {string} SVG string or null if not right type
 */
export function generateSNAPBenefitsSVG(snap, snapBDOPubKey) {
  // Only handle SNAP monthly benefits
  if (snap.type !== 'snap-benefits' || !snap.benefitAmounts) {
    return null;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="bgGradient-${snap.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${snap.colors.background};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${snap.colors.primary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${snap.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${snap.colors.primary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${snap.colors.accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${snap.colors.primary};stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow-${snap.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="${snap.colors.accent}" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 22px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 13px;
      fill: ${snap.colors.accent};
      text-anchor: middle;
      font-weight: 600;
    }
    .header-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: ${snap.colors.accent};
      font-weight: bold;
      text-anchor: start;
    }
    .benefit-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: white;
      text-anchor: start;
    }
    .info-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: white;
      text-anchor: start;
      opacity: 0.9;
    }
    .save-button {
      fill: url(#saveGrad-${snap.id});
      stroke: ${snap.colors.accent};
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .save-button:hover {
      filter: url(#saveGlow-${snap.id});
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
  <rect x="0" y="0" width="400" height="400" fill="url(#bgGradient-${snap.id})" rx="12"/>

  <!-- Icon -->
  <text x="200" y="40" text-anchor="middle" font-size="36">💳</text>

  <!-- Title -->
  <text class="title" x="200" y="75">${snap.name}</text>
  <text class="subtitle" x="200" y="92">${snap.subtitle}</text>

  <!-- Benefit amounts table header -->
  <rect x="20" y="105" width="360" height="18" fill="rgba(255,255,255,0.15)" rx="4"/>
  <text class="header-text" x="30" y="117">Household Size</text>
  <text class="header-text" x="200" y="117">Max Monthly</text>
  <text class="header-text" x="310" y="117">Average</text>

  <!-- Benefit amounts (first 6 rows) -->
  ${snap.benefitAmounts.slice(0, 6).map((benefit, i) => `
  <rect x="20" y="${128 + (i * 22)}" width="360" height="20" fill="rgba(255,255,255,${i % 2 === 0 ? 0.08 : 0.04})" rx="3"/>
  <text class="benefit-text" x="30" y="${142 + (i * 22)}">${benefit.householdSize} ${benefit.householdSize === 1 ? 'person' : 'people'}</text>
  <text class="benefit-text" x="200" y="${142 + (i * 22)}">$${benefit.maxMonthly}</text>
  <text class="benefit-text" x="310" y="${142 + (i * 22)}">$${benefit.average}</text>
  `).join('')}

  <!-- Key facts -->
  <text class="header-text" x="20" y="270">Key Information:</text>
  ${snap.keyFacts.slice(0, 3).map((fact, i) =>
    `<text class="info-text" x="20" y="${285 + (i * 13)}">• ${fact}</text>`
  ).join('\n  ')}

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
    spell-components='{"bdoPubKey":"${snapBDOPubKey}","collection":"charity"}'
  />
  <text class="button-text" x="200" y="370">📋 Save Benefits Info</text>
</svg>`;
}

/**
 * Generate SVG for SNAP process explanation
 * Shows how SNAP works step by step
 *
 * @param {Object} snap - SNAP process object
 * @param {string} snapBDOPubKey - PubKey of this SNAP process BDO
 * @returns {string} SVG string or null if not right type
 */
export function generateSNAPProcessSVG(snap, snapBDOPubKey) {
  // Only handle SNAP process/how-it-works
  if (snap.type !== 'snap-benefits' || !snap.processSteps) {
    return null;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 440" width="400" height="440">
  <defs>
    <linearGradient id="bgGradient-${snap.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${snap.colors.background};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${snap.colors.primary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${snap.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${snap.colors.primary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${snap.colors.accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${snap.colors.primary};stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow-${snap.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="${snap.colors.accent}" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 22px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 13px;
      fill: ${snap.colors.accent};
      text-anchor: middle;
      font-weight: 600;
    }
    .step-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: white;
      font-weight: bold;
      text-anchor: start;
    }
    .step-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: white;
      text-anchor: start;
      opacity: 0.9;
    }
    .timeframe-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: ${snap.colors.accent};
      text-anchor: start;
      font-style: italic;
    }
    .header-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: ${snap.colors.accent};
      font-weight: bold;
      text-anchor: start;
    }
    .info-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: white;
      text-anchor: start;
      opacity: 0.9;
    }
    .save-button {
      fill: url(#saveGrad-${snap.id});
      stroke: ${snap.colors.accent};
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .save-button:hover {
      filter: url(#saveGlow-${snap.id});
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
  <rect x="0" y="0" width="400" height="440" fill="url(#bgGradient-${snap.id})" rx="12"/>

  <!-- Icon -->
  <text x="200" y="40" text-anchor="middle" font-size="36">🛒</text>

  <!-- Title -->
  <text class="title" x="200" y="75">${snap.name}</text>
  <text class="subtitle" x="200" y="92">${snap.subtitle}</text>

  <!-- Process steps -->
  ${snap.processSteps.map((step, i) => `
  <!-- Step ${step.step} -->
  <rect x="20" y="${105 + (i * 48)}" width="360" height="44" fill="rgba(255,255,255,0.1)" rx="6"/>
  <text x="35" y="${122 + (i * 48)}" font-size="24">${step.icon}</text>
  <text class="step-title" x="70" y="${122 + (i * 48)}">${step.step}. ${step.title}</text>
  <text class="step-text" x="70" y="${135 + (i * 48)}">${(step.description || '').substring(0, 50)}</text>
  ${(step.description || '').length > 50 ? `<text class="step-text" x="70" y="${144 + (i * 48)}">${step.description.substring(50, 100)}</text>` : ''}
  <text class="timeframe-text" x="320" y="${122 + (i * 48)}">${step.timeframe}</text>
  `).join('')}

  <!-- Save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="385"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${snapBDOPubKey}","collection":"charity"}'
  />
  <text class="button-text" x="200" y="410">📖 Save Process Guide</text>
</svg>`;
}
