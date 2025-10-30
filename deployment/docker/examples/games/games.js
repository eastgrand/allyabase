/**
 * Games Examples for Test Environment
 *
 * These games posts demonstrate:
 * - Board games, video games, entertainment
 * - Save spell for adding to carrierBag "games" collection
 * - Game details, player info, and gameplay description
 */

import sessionless from 'sessionless-node';

export const gamesPosts = [
  {
    id: 'game-wingspan-001',
    uuid: sessionless.generateUUID(),
    type: 'board-game',
    category: 'strategy',
    name: 'Wingspan',
    designer: 'Elizabeth Hargrave',
    publisher: 'Stonemaier Games',
    description: 'A competitive, medium-weight, card-driven, engine-building board game about birds. You are bird enthusiasts seeking to discover and attract the best birds to your wildlife preserves.',
    year: '2019',
    price: 5999, // $59.99
    playerCount: {
      min: 1,
      max: 5,
      best: '2-3 players'
    },
    playTime: {
      estimate: '40-70 minutes',
      perPlayer: '~20 minutes'
    },
    ageRange: '10+',
    complexity: 'Medium (2.5/5)',
    mechanics: [
      'Engine building',
      'Hand management',
      'Card drafting',
      'Dice rolling',
      'Set collection'
    ],
    features: [
      '170 unique bird cards',
      'Beautiful watercolor artwork',
      'Educational - learn about real birds',
      'Solo mode included',
      'Multiple expansions available',
      'Award-winning design'
    ],
    awards: [
      'Kennerspiel des Jahres 2019 (Winner)',
      'Golden Geek Best Board Game 2019',
      'Dice Tower Best Game 2019'
    ],
    whatYouGet: [
      '170 bird cards',
      '103 food tokens',
      '75 egg miniatures',
      '5 player mats',
      'Birdfeeder dice tower',
      'Rulebook and quick reference'
    ],
    gameplay: 'Over 4 rounds, players take turns playing birds from their hand, gathering food, laying eggs, and drawing cards. Each bird has unique abilities that trigger when played or activated. Build the most impressive bird collection to win!',
    imageUrl: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400',
    tags: ['board-game', 'strategy', 'birds', 'engine-building', 'award-winning'],
    metadata: {
      languageDependent: 'Moderate (card text)',
      replayability: 'Very high',
      theme: 'Nature/Birds',
      skillLevel: 'Intermediate'
    }
  },
  {
    id: 'game-catan-002',
    uuid: sessionless.generateUUID(),
    type: 'board-game',
    category: 'strategy',
    name: 'Settlers of Catan',
    designer: 'Klaus Teuber',
    publisher: 'Catan Studio',
    description: 'The classic game of resource management and trading. Build settlements, cities, and roads while trading resources with other players to become the dominant force on the island of Catan.',
    year: '1995',
    price: 4499, // $44.99
    playerCount: {
      min: 3,
      max: 4,
      best: '4 players'
    },
    playTime: {
      estimate: '60-120 minutes',
      perPlayer: '~25 minutes'
    },
    ageRange: '10+',
    complexity: 'Medium (2.3/5)',
    mechanics: [
      'Dice rolling',
      'Trading and negotiation',
      'Resource management',
      'Modular board',
      'Network building'
    ],
    features: [
      'Modular hexagonal board (different every game)',
      'Player-driven economy through trading',
      'Multiple paths to victory',
      'Extensions for 5-6 players available',
      'Gateway game to modern board gaming',
      'Over 30 million copies sold'
    ],
    awards: [
      'Spiel des Jahres 1995 (Winner)',
      'Origins Award Best Board Game',
      'Board Game Hall of Fame Inductee'
    ],
    whatYouGet: [
      '19 terrain hexes',
      '6 sea frame pieces',
      '95 resource cards',
      '25 development cards',
      '4 building cost cards',
      '2 dice',
      '16 cities, 20 settlements, 60 roads',
      'Robber piece',
      'Rulebook'
    ],
    gameplay: 'Players collect resources (wood, brick, wheat, sheep, ore) from the terrain hexes where they have settlements. Trade with other players to get what you need, then build roads, settlements, and cities. First to 10 victory points wins!',
    imageUrl: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400',
    tags: ['board-game', 'strategy', 'trading', 'classic', 'gateway-game'],
    metadata: {
      languageDependent: 'Low',
      replayability: 'Very high',
      theme: 'Medieval/Settlement',
      skillLevel: 'Beginner to Intermediate'
    }
  },
  {
    id: 'game-zelda-botw-003',
    uuid: sessionless.generateUUID(),
    type: 'video-game',
    category: 'action-adventure',
    name: 'The Legend of Zelda: Breath of the Wild',
    developer: 'Nintendo EPD',
    publisher: 'Nintendo',
    description: 'An open-world action-adventure game that redefines the Zelda series. Explore a vast kingdom, solve environmental puzzles, battle enemies, and discover the secrets of Hyrule in this masterpiece.',
    year: '2017',
    price: 5999, // $59.99
    platform: ['Nintendo Switch', 'Wii U'],
    playerCount: {
      min: 1,
      max: 1,
      best: 'Single-player experience'
    },
    playTime: {
      mainStory: '~50 hours',
      completionist: '~200+ hours'
    },
    ageRating: 'E10+ (Everyone 10+)',
    genre: 'Open-world Action-Adventure',
    features: [
      'Massive open world to explore',
      'Physics-based puzzle solving',
      'Complete freedom of approach',
      'Dynamic weather and time systems',
      'Cooking and crafting systems',
      'Shrine challenges (120+)',
      'Korok seed collection (900)'
    ],
    awards: [
      'Game of the Year 2017 (Multiple outlets)',
      'The Game Awards - Game of the Year',
      'BAFTA Best Game',
      'Golden Joystick Ultimate Game of the Year',
      'Perfect scores from major reviewers'
    ],
    gameplay: 'Wake as Link with no memory in a ruined Hyrule. Climb anything, glide with a paraglider, cook meals for bonuses, solve shrine puzzles for spirit orbs, and prepare to face Calamity Ganon. Approach objectives in any order you choose.',
    keyGameplay: [
      'Complete freedom - go anywhere from the start',
      'Environmental puzzle solving',
      'Weapon durability system',
      'Cooking for buffs and health',
      'Climbing and paragliding',
      'Stealth and combat options',
      'Shrines and Divine Beasts'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400',
    tags: ['video-game', 'zelda', 'open-world', 'adventure', 'nintendo'],
    metadata: {
      singlePlayer: true,
      multiPlayer: false,
      dlcAvailable: true,
      criticalAcclaim: 'Universal acclaim (97 Metacritic)'
    }
  },
  {
    id: 'game-stardew-valley-004',
    uuid: sessionless.generateUUID(),
    type: 'video-game',
    category: 'simulation',
    name: 'Stardew Valley',
    developer: 'ConcernedApe (Eric Barone)',
    publisher: 'ConcernedApe',
    description: 'A beloved farming simulation RPG. Inherit your grandfather\'s old farm and turn it into a thriving homestead. Grow crops, raise animals, craft goods, explore caves, and build relationships with townsfolk.',
    year: '2016',
    price: 1499, // $14.99
    platform: ['PC', 'Mac', 'Linux', 'Nintendo Switch', 'PlayStation', 'Xbox', 'Mobile'],
    playerCount: {
      min: 1,
      max: 4,
      best: '1-2 players co-op'
    },
    playTime: {
      mainStory: '~50 hours',
      completionist: '~200+ hours (endless replayability)'
    },
    ageRating: 'E10+ (Everyone 10+)',
    genre: 'Farming Simulation RPG',
    features: [
      'Farming and animal husbandry',
      'Fishing, mining, and foraging',
      '12 marriage candidates',
      'Seasonal festivals',
      'Community Center restoration',
      'Cave exploration and combat',
      'Crafting and cooking',
      'Multiplayer co-op (1-4 players)',
      'Mod support on PC'
    ],
    awards: [
      'Best Independent Game (IGN)',
      'IndieCade Audience Choice Award',
      'BAFTA Games Award Nominee',
      'Over 20 million copies sold'
    ],
    gameplay: 'Escape the corporate grind and rebuild your grandfather\'s farm. Plant and harvest crops, raise chickens and cows, fish in rivers and oceans, mine for ores and gems, befriend villagers, fall in love, get married, and create your perfect farm life.',
    keyGameplay: [
      'Seasonal crop planning',
      'Relationship building',
      'Mine exploration for resources',
      'Fishing mini-game',
      'Crafting and automation',
      'Town restoration projects',
      'Multiple farm map types',
      'Endless customization'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400',
    tags: ['video-game', 'farming', 'simulation', 'indie', 'relaxing'],
    metadata: {
      singlePlayer: true,
      multiPlayer: true,
      dlcAvailable: false,
      freeUpdates: 'Regular free content updates',
      crossPlatform: 'Some platforms support cross-play'
    }
  },
  {
    id: 'game-ftp-bears-005',
    uuid: sessionless.generateUUID(),
    type: 'ftp',
    name: 'FTP',
    team: 'Chicago Bears',
    colors: {
      primary: '#0B162A',
      secondary: '#C83803'
    },
    tags: ['nfc-north', 'bears', 'ftp']
  },
  {
    id: 'game-ftp-packers-006',
    uuid: sessionless.generateUUID(),
    type: 'ftp',
    name: 'FTP',
    team: 'Green Bay Packers',
    colors: {
      primary: '#203731',
      secondary: '#FFB612'
    },
    tags: ['nfc-north', 'packers', 'ftp']
  },
  {
    id: 'game-ftp-lions-007',
    uuid: sessionless.generateUUID(),
    type: 'ftp',
    name: 'FTP',
    team: 'Detroit Lions',
    colors: {
      primary: '#0076B6',
      secondary: '#B0B7BC'
    },
    tags: ['nfc-north', 'lions', 'ftp']
  },
  {
    id: 'game-ftp-vikings-008',
    uuid: sessionless.generateUUID(),
    type: 'ftp',
    name: 'FTP',
    team: 'Minnesota Vikings',
    colors: {
      primary: '#4F2683',
      secondary: '#FFC62F'
    },
    tags: ['nfc-north', 'vikings', 'ftp']
  }
];

/**
 * Generate SVG for game card
 * Single button with save spell to games collection
 *
 * @param {Object} game - Game object
 * @param {string} gameBDOPubKey - PubKey of this game's BDO
 * @returns {string} SVG string
 */
export function generateGameSVG(game, gameBDOPubKey) {
  // Skip FTP games - they use generateFTPSVG instead
  if (game.type === 'ftp') {
    return null;
  }

  const priceDisplay = `$${(game.price / 100).toFixed(2)}`;
  const icon = game.type === 'board-game' ? '🎲' : '🎮';
  const playerInfo = game.type === 'board-game'
    ? `${game.playerCount.min}-${game.playerCount.max} players`
    : game.playerCount.max === 1 ? 'Single-player' : `1-${game.playerCount.max} players`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 340" width="400" height="340">
  <defs>
    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#3b82f6" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .game-name {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .game-designer {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #93c5fd;
      text-anchor: middle;
    }
    .game-meta {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #60a5fa;
      text-anchor: start;
    }
    .game-description {
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
    .award-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: #fbbf24;
      text-anchor: start;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: #3b82f6;
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
  <rect x="0" y="0" width="400" height="340" fill="#1a0033" rx="12"/>

  <!-- Icon -->
  <text x="200" y="35" text-anchor="middle" font-size="30">${icon}</text>

  <!-- Game Info -->
  <text class="game-name" x="200" y="70">${game.name.length > 40 ? game.name.substring(0, 37) + '...' : game.name}</text>
  <text class="game-designer" x="200" y="88">${game.type === 'board-game' ? 'by ' + game.designer : game.developer}</text>

  <!-- Meta info -->
  <text class="game-meta" x="20" y="110">${playerInfo} • ${game.playTime.estimate || game.playTime.mainStory}</text>
  <text class="price-text" x="200" y="135">${priceDisplay}</text>

  <!-- Description -->
  <text class="game-description" x="20" y="160">${game.description.substring(0, 65)}...</text>
  <text class="game-description" x="20" y="175">${game.description.substring(65, 130)}...</text>

  <!-- Key features -->
  ${game.features.slice(0, 4).map((feature, i) =>
    `<text class="feature-text" x="20" y="${195 + (i * 15)}">• ${feature.substring(0, 50)}</text>`
  ).join('\n  ')}

  <!-- Awards -->
  ${game.awards.length > 0 ? `<text class="award-text" x="20" y="265">🏆 ${game.awards[0].substring(0, 45)}...</text>` : ''}

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
    spell-components='{"bdoPubKey":"${gameBDOPubKey}","collection":"games"}'
  />
  <text class="button-text" x="200" y="305">🎮 Save to Games</text>
</svg>`;
}

/**
 * Generate SVG for FTP (NFC North teams)
 * Simple design with team colors displaying "FTP" in large text
 *
 * @param {Object} ftp - FTP object with team colors
 * @param {string} ftpBDOPubKey - PubKey of this FTP's BDO
 * @returns {string} SVG string
 */
export function generateFTPSVG(ftp, ftpBDOPubKey) {
  // Only handle FTP type games
  if (ftp.type !== 'ftp') {
    return null;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="400" height="280">
  <defs>
    <linearGradient id="saveGrad-${ftp.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${ftp.colors.secondary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${ftp.colors.primary};stop-opacity:1" />
    </linearGradient>

    <filter id="textGlow-${ftp.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="white" flood-opacity="0.6"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="saveGlow-${ftp.id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="${ftp.colors.secondary}" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .ftp-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 140px;
      font-weight: 900;
      fill: white;
      text-anchor: middle;
      dominant-baseline: middle;
      letter-spacing: 12px;
      filter: url(#textGlow-${ftp.id});
    }
    .save-button {
      fill: url(#saveGrad-${ftp.id});
      stroke: ${ftp.colors.secondary};
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .save-button:hover {
      filter: url(#saveGlow-${ftp.id});
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

  <!-- Card border with rounded corners -->
  <rect x="0" y="0" width="400" height="280" fill="none" rx="12"/>

  <!-- Color bands: dark on sides, light in middle -->
  <rect x="0" y="0" width="120" height="280" fill="${ftp.colors.primary}" rx="12" />
  <rect x="120" y="0" width="160" height="280" fill="${ftp.colors.secondary}" />
  <rect x="280" y="0" width="120" height="280" fill="${ftp.colors.primary}" rx="12" />

  <!-- FTP Text centered over the light band -->
  <text class="ftp-text" x="200" y="120">FTP</text>

  <!-- Single centered save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="210"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${ftpBDOPubKey}","collection":"games"}'
  />
  <text class="button-text" x="200" y="235">🏈 Save to Games</text>
</svg>`;
}
