/**
 * Network Topology Examples for Test Environment
 *
 * These network topology posts demonstrate:
 * - Different network architectures (centralized, decentralized, federated)
 * - Hub-and-spoke, federated systems, game servers, overlay networks
 * - Save spell for adding to carrierBag "network-topology" collection
 * - Visual representations of how networks interconnect
 */

import sessionless from 'sessionless-node';

export const networkTopologyPosts = [
  {
    id: 'topology-hub-spoke-001',
    uuid: sessionless.generateUUID(),
    type: 'network-topology',
    category: 'centralized',
    name: 'Hub and Spoke Topology',
    subtitle: 'Centralized Network Architecture',
    description: 'A classic network topology where all nodes connect to a central hub. Simple to manage but creates a single point of failure. Common in traditional client-server architectures and early internet services.',
    architecture: 'Centralized',
    characteristics: [
      'Single central hub manages all connections',
      'All communication flows through the hub',
      'Spokes (nodes) do not communicate directly',
      'Easy to add or remove spokes',
      'Hub is a single point of failure'
    ],
    advantages: [
      'Simple network design and implementation',
      'Easy centralized management and monitoring',
      'Straightforward troubleshooting',
      'Lower initial cost for small networks',
      'Centralized security and access control'
    ],
    disadvantages: [
      'Single point of failure - hub down = network down',
      'Hub can become a bottleneck',
      'Scalability limited by hub capacity',
      'Higher latency for spoke-to-spoke communication',
      'All traffic visible to hub (privacy concerns)'
    ],
    realWorldExamples: [
      'Traditional corporate networks',
      'Airport flight patterns (hub airports)',
      'ATM networks connecting to central bank',
      'Classic client-server web applications',
      'Early AOL/CompuServe models'
    ],
    components: {
      hub: {
        name: 'Central Hub',
        role: 'Routes all traffic between spokes',
        emoji: '🎯'
      },
      spokes: [
        { name: 'Client A', emoji: '💻' },
        { name: 'Client B', emoji: '💻' },
        { name: 'Client C', emoji: '💻' },
        { name: 'Client D', emoji: '💻' },
        { name: 'Client E', emoji: '💻' },
        { name: 'Client F', emoji: '💻' },
        { name: 'Client G', emoji: '💻' },
        { name: 'Client H', emoji: '💻' }
      ]
    },
    colors: {
      primary: '#dc2626',
      secondary: '#ef4444',
      accent: '#fbbf24'
    },
    tags: ['network', 'topology', 'hub-spoke', 'centralized', 'architecture'],
    metadata: {
      complexity: 'Low',
      resilience: 'Low (single point of failure)',
      scalability: 'Limited by hub capacity'
    }
  },
  {
    id: 'topology-fediverse-002',
    uuid: sessionless.generateUUID(),
    type: 'network-topology',
    category: 'federated',
    name: 'Fediverse Network',
    subtitle: 'Federated Social Network Topology',
    description: 'The Fediverse is a collection of federated social networks that can communicate with each other using ActivityPub protocol. Each instance is independently operated but can connect and share content across the network. Think Mastodon, Pixelfed, PeerTube.',
    architecture: 'Federated/Decentralized',
    protocol: 'ActivityPub (W3C Standard)',
    characteristics: [
      'Independent instances (servers) run by different operators',
      'Each instance has its own users and local community',
      'Instances federate to share content across network',
      'No single entity controls the entire network',
      'Users on one instance can follow users on other instances'
    ],
    advantages: [
      'No single point of failure',
      'Instance admins control their own moderation',
      'Users can choose or run their own instance',
      'Open protocols enable innovation',
      'Data sovereignty - choose where your data lives',
      'Resistant to corporate takeover'
    ],
    challenges: [
      'Discovery can be harder across instances',
      'Quality varies by instance operator',
      'Defederation can fragment communities',
      'Requires technical knowledge to self-host',
      'No central customer support'
    ],
    majorPlatforms: [
      {
        name: 'Mastodon',
        type: 'Microblogging',
        emoji: '🐘',
        description: 'Twitter-like federated social network'
      },
      {
        name: 'Pixelfed',
        type: 'Photo sharing',
        emoji: '📷',
        description: 'Instagram-like federated photo sharing'
      },
      {
        name: 'PeerTube',
        type: 'Video hosting',
        emoji: '📹',
        description: 'YouTube-like federated video platform'
      },
      {
        name: 'Lemmy',
        type: 'Link aggregation',
        emoji: '🔗',
        description: 'Reddit-like federated communities'
      }
    ],
    networkStructure: {
      instances: [
        { name: 'mastodon.social', users: 250000, emoji: '🐘' },
        { name: 'fosstodon.org', users: 45000, emoji: '🐧' },
        { name: 'pixelfed.social', users: 15000, emoji: '📷' },
        { name: 'instance.example', users: 5000, emoji: '🌐' },
        { name: 'community.local', users: 2000, emoji: '🏘️' }
      ],
      connections: 'Each instance federates with others via ActivityPub'
    },
    emojicode: '🌐🔗',
    colors: {
      primary: '#6366f1',
      secondary: '#818cf8',
      accent: '#a78bfa'
    },
    tags: ['fediverse', 'activitypub', 'mastodon', 'federated', 'decentralized'],
    metadata: {
      complexity: 'Medium',
      resilience: 'High (distributed)',
      scalability: 'High (add more instances)'
    }
  },
  {
    id: 'topology-matrix-003',
    uuid: sessionless.generateUUID(),
    type: 'network-topology',
    category: 'federated',
    name: 'Matrix Server Network',
    subtitle: 'Federated Real-Time Communication',
    description: 'Matrix is an open standard for decentralized, real-time communication. Homeservers federate to create a global network for chat, VoIP, and collaboration. Like email, but for instant messaging - you can chat with anyone on any Matrix server.',
    architecture: 'Federated/Decentralized',
    protocol: 'Matrix Protocol (Open Standard)',
    characteristics: [
      'Independent homeservers federate together',
      'Users belong to a homeserver (like email domains)',
      'End-to-end encryption by default',
      'Rooms are shared across servers',
      'Decentralized conversation history',
      'Bridge to other networks (Slack, Discord, IRC)'
    ],
    advantages: [
      'True decentralization - no single owner',
      'End-to-end encrypted by default',
      'Choose your homeserver or run your own',
      'Bridges to proprietary platforms',
      'Open protocol enables innovation',
      'Conversation history is distributed'
    ],
    challenges: [
      'Larger homeservers can be resource intensive',
      'Room state synchronization complexity',
      'Homeserver reliability varies',
      'Learning curve for non-technical users',
      'Federation can be complicated to set up'
    ],
    majorClients: [
      {
        name: 'Element',
        platform: 'Web, Desktop, Mobile',
        emoji: '💬',
        description: 'Full-featured Matrix client'
      },
      {
        name: 'FluffyChat',
        platform: 'Mobile',
        emoji: '🦙',
        description: 'Privacy-focused mobile client'
      },
      {
        name: 'Nheko',
        platform: 'Desktop',
        emoji: '🐱',
        description: 'Lightweight desktop client'
      }
    ],
    networkStructure: {
      homeservers: [
        { name: 'matrix.org', type: 'Public', emoji: '🏢' },
        { name: 'mozilla.org', type: 'Organization', emoji: '🦊' },
        { name: 'example.com', type: 'Private', emoji: '🏠' },
        { name: 'community.chat', type: 'Community', emoji: '👥' },
        { name: 'self-hosted.local', type: 'Personal', emoji: '🔐' }
      ],
      rooms: 'Users from different homeservers can join the same rooms',
      synchronization: 'Room state synchronized across all participating servers'
    },
    useCases: [
      'Team collaboration (alternative to Slack)',
      'Secure messaging with E2E encryption',
      'Open source community chat',
      'Government and healthcare (data sovereignty)',
      'Bridge between different chat platforms'
    ],
    emojicode: '💬🔐',
    colors: {
      primary: '#059669',
      secondary: '#10b981',
      accent: '#34d399'
    },
    tags: ['matrix', 'chat', 'federated', 'encryption', 'homeserver'],
    metadata: {
      complexity: 'Medium-High',
      resilience: 'High (distributed)',
      scalability: 'High (add more homeservers)',
      privacy: 'Excellent (E2E encryption)'
    }
  },
  {
    id: 'topology-fedwiki-004',
    uuid: sessionless.generateUUID(),
    type: 'network-topology',
    category: 'federated',
    name: 'Federated Wiki Network',
    subtitle: 'Distributed Knowledge Topology (Placeholder)',
    description: 'Federated Wiki (Smallest Federated Wiki) is a distributed wiki system where each person has their own wiki that can fork and share content with others. Knowledge flows through a network of personal wikis rather than accumulating in a single central database.',
    architecture: 'Federated/Distributed',
    concept: 'Personal Wikis that Fork and Share',
    characteristics: [
      'Each user runs their own wiki instance',
      'Pages can be forked from other wikis',
      'Content attribution through lineage',
      'No central authority or canonical version',
      'Version history shows page evolution',
      'Decentralized knowledge creation'
    ],
    advantages: [
      'True ownership of your knowledge',
      'Fork any page and modify it',
      'See how ideas evolved across network',
      'No edit wars - multiple versions coexist',
      'Encourages experimentation',
      'Resilient - distributed across many sites'
    ],
    challenges: [
      'Discovering content across network',
      'No single "truth" - many versions exist',
      'Requires technical setup to host',
      'Smaller community than traditional wikis',
      'Novel paradigm takes time to understand'
    ],
    howItWorks: [
      'You run a personal wiki on your own server',
      'You can fork pages from other people\'s wikis',
      'Each page shows its lineage (where it came from)',
      'Changes stay on your wiki unless others fork from you',
      'Knowledge spreads organically through the network',
      'No central Wikipedia - many interconnected wikis'
    ],
    networkStructure: {
      wikis: [
        { name: 'ward.example', owner: 'Ward Cunningham', emoji: '📝' },
        { name: 'alice.wiki', owner: 'Alice', emoji: '📘' },
        { name: 'bob.wiki', owner: 'Bob', emoji: '📗' },
        { name: 'carol.wiki', owner: 'Carol', emoji: '📙' },
        { name: 'dave.wiki', owner: 'Dave', emoji: '📕' }
      ],
      forkingPattern: 'Pages flow through network as users fork and modify',
      lineage: 'Each page knows where it came from'
    },
    creator: 'Ward Cunningham (inventor of the wiki)',
    philosophy: 'Distributed, federated, personal knowledge management',
    status: 'PLACEHOLDER - Full implementation details to be added',
    emojicode: '📝🔀',
    colors: {
      primary: '#f59e0b',
      secondary: '#fbbf24',
      accent: '#fde68a'
    },
    tags: ['fedwiki', 'wiki', 'federated', 'knowledge', 'distributed'],
    metadata: {
      complexity: 'High',
      resilience: 'Very High (fully distributed)',
      scalability: 'Excellent (every user adds capacity)',
      novelty: 'Paradigm shift from traditional wikis'
    }
  },
  {
    id: 'topology-ffxiv-servers-005',
    uuid: sessionless.generateUUID(),
    type: 'network-topology',
    category: 'game-servers',
    name: 'Final Fantasy XIV Server Architecture',
    subtitle: 'MMORPG Infrastructure Topology',
    description: 'Final Fantasy XIV uses a hierarchical server architecture with regional data centers, logical worlds within each data center, and instanced zones within worlds. Players can visit other worlds in their data center, creating a complex but scalable topology.',
    architecture: 'Hierarchical/Regional',
    gameTitle: 'Final Fantasy XIV',
    developer: 'Square Enix',
    hierarchy: [
      {
        level: 'Data Centers',
        description: 'Regional server clusters (NA, EU, JP, OCE)',
        connectivity: 'Isolated - no cross-DC travel (yet)'
      },
      {
        level: 'Worlds',
        description: 'Individual servers within a data center',
        connectivity: 'Can visit other worlds in same DC'
      },
      {
        level: 'Instances',
        description: 'Multiple copies of same zone for crowding',
        connectivity: 'Can switch between instances in same world'
      }
    ],
    dataCenters: [
      {
        name: 'North America',
        emoji: '🌎',
        worlds: [
          'Aether: Adamantoise, Cactuar, Faerie, Gilgamesh, Jenova, Midgardsormr, Sargatanas, Siren',
          'Crystal: Balmung, Brynhildr, Coeurl, Diabolos, Goblin, Malboro, Mateus, Zalera',
          'Primal: Behemoth, Excalibur, Exodus, Famfrit, Hyperion, Lamia, Leviathan, Ultros',
          'Dynamis: Cuchulainn, Golem, Halicarnassus, Kraken, Maduin, Marilith, Rafflesia, Seraph'
        ]
      },
      {
        name: 'Europe',
        emoji: '🌍',
        worlds: [
          'Chaos: Cerberus, Louisoix, Moogle, Omega, Phantom, Ragnarok, Sagittarius, Spriggan',
          'Light: Alpha, Lich, Odin, Phoenix, Raiden, Shiva, Twintania, Zodiark'
        ]
      },
      {
        name: 'Japan',
        emoji: '🌏',
        worlds: [
          'Elemental: Aegis, Atomos, Carbuncle, Garuda, Gungnir, Kujata, Tonberry, Typhon',
          'Gaia: Alexander, Bahamut, Durandal, Fenrir, Ifrit, Ridill, Tiamat, Ultima',
          'Mana: Anima, Asura, Chocobo, Hades, Ixion, Masamune, Pandaemonium, Titan'
        ]
      },
      {
        name: 'Oceania',
        emoji: '🌏',
        worlds: [
          'Materia: Bismarck, Ravana, Sephirot, Sophia, Zurvan'
        ]
      }
    ],
    features: {
      worldVisit: 'Travel to any world in your data center',
      dataCenter: 'Play with friends across worlds (same DC)',
      instances: 'Multiple copies of zones to reduce crowding',
      crossWorld: 'Party Finder works across entire data center',
      housing: 'Tied to home world only',
      marketBoard: 'Separate per world'
    },
    scalabilityFeatures: [
      'Instancing prevents zone overcrowding',
      'Data center structure distributes load',
      'World visit system increases player pool',
      'Duty finder matchmaking across data center',
      'Separate market boards maintain economy'
    ],
    emojicode: '⚔️🌐',
    colors: {
      primary: '#b91c1c',
      secondary: '#dc2626',
      accent: '#fbbf24'
    },
    tags: ['ffxiv', 'mmorpg', 'game-servers', 'data-center', 'instancing'],
    metadata: {
      complexity: 'High',
      resilience: 'High (redundant data centers)',
      scalability: 'Excellent (instancing + world structure)',
      playerCapacity: 'Millions simultaneously'
    }
  },
  {
    id: 'topology-overlay-network-006',
    uuid: sessionless.generateUUID(),
    type: 'network-topology',
    category: 'overlay-network',
    name: 'Emojicode Overlay Network',
    subtitle: 'Interconnecting Federated Systems',
    description: 'An overlay network that connects different federated architectures (Fediverse, Matrix, Federated Wiki, and FFXIV) through a shared protocol using emojicodes as network identifiers. This demonstrates how different topologies can interoperate through a common abstraction layer.',
    architecture: 'Overlay/Meta-Network',
    concept: 'Unified Layer Across Diverse Topologies',
    overlayProtocol: {
      name: 'Emojicode Protocol',
      purpose: 'Universal addressing across different network types',
      mechanism: 'Emoji sequences serve as network identifiers and routing keys'
    },
    connectedNetworks: [
      {
        name: 'Fediverse',
        emojicode: '🌐🔗',
        type: 'Federated Social',
        nodes: 'ActivityPub instances',
        emoji: '🐘'
      },
      {
        name: 'Matrix',
        emojicode: '💬🔐',
        type: 'Federated Chat',
        nodes: 'Matrix homeservers',
        emoji: '💬'
      },
      {
        name: 'Federated Wiki',
        emojicode: '📝🔀',
        type: 'Federated Knowledge',
        nodes: 'Personal wiki instances',
        emoji: '📝'
      },
      {
        name: 'FFXIV Network',
        emojicode: '⚔️🌐',
        type: 'Game Servers',
        nodes: 'Data centers and worlds',
        emoji: '⚔️'
      }
    ],
    overlayFeatures: [
      'Emojicode addressing: Network-agnostic identifiers',
      'Cross-topology routing: Bridge between different architectures',
      'Protocol translation: Convert between network-specific formats',
      'Unified discovery: Find resources across all networks',
      'Federated identity: Single identity across systems'
    ],
    emojiRouting: {
      socialPost: '🌐🔗 → Fediverse instance',
      chatMessage: '💬🔐 → Matrix homeserver',
      wikiPage: '📝🔀 → Federated wiki',
      gameWorld: '⚔️🌐 → FFXIV data center',
      overlayNode: '🔮🕸️ → Overlay routing node'
    },
    howItWorks: [
      'Each network type registers its emojicode prefix',
      'Overlay nodes translate between network protocols',
      'Users address resources using emoji sequences',
      'Routing layer finds appropriate network and node',
      'Protocol bridges handle network-specific translation',
      'Responses follow same routing back to requester'
    ],
    exampleUseCases: [
      'Share FFXIV raid strategy from Federated Wiki to Fediverse',
      'Coordinate game sessions via Matrix, post to Fediverse',
      'Document game lore in Fedwiki, discuss in Matrix',
      'Cross-network notifications and presence',
      'Unified search across all four networks'
    ],
    architecture_visual: {
      center: {
        name: 'Overlay Routing Core',
        emoji: '🔮',
        role: 'Central routing and protocol translation'
      },
      spokes: [
        {
          network: 'Fediverse',
          emojicode: '🌐🔗',
          bridge: 'ActivityPub Bridge',
          emoji: '🐘'
        },
        {
          network: 'Matrix',
          emojicode: '💬🔐',
          bridge: 'Matrix Bridge',
          emoji: '💬'
        },
        {
          network: 'Fedwiki',
          emojicode: '📝🔀',
          bridge: 'Fedwiki Bridge',
          emoji: '📝'
        },
        {
          network: 'FFXIV',
          emojicode: '⚔️🌐',
          bridge: 'Game API Bridge',
          emoji: '⚔️'
        }
      ]
    },
    philosophicalNote: 'Different topologies serve different purposes. An overlay network allows them to coexist and interoperate while maintaining their unique characteristics. Emojicodes provide a universal, human-readable addressing scheme.',
    colors: {
      primary: '#7c3aed',
      secondary: '#a78bfa',
      accent: '#fbbf24'
    },
    tags: ['overlay-network', 'emojicodes', 'federation', 'interoperability', 'meta-network'],
    metadata: {
      complexity: 'Very High',
      resilience: 'Depends on underlying networks',
      scalability: 'Excellent (leverages all networks)',
      innovation: 'Novel approach to network interoperability'
    }
  }
];

/**
 * Generate SVG for hub and spoke topology
 * Classic centralized network diagram
 *
 * @param {Object} topology - Topology object
 * @param {string} topologyBDOPubKey - PubKey of this topology's BDO
 * @returns {string} SVG string
 */
export function generateHubSpokeSVG(topology, topologyBDOPubKey) {
  const { primary, secondary, accent } = topology.colors;

  // Calculate spoke positions in circle
  const spokeCount = topology.components.spokes.length;
  const centerX = 200;
  const centerY = 220;
  const radius = 100;

  const spokePositions = topology.components.spokes.map((_, i) => {
    const angle = (i / spokeCount) * 2 * Math.PI - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 520" width="400" height="520">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7f1d1d;stop-opacity:1" />
      <stop offset="100%" style="stop-color:${primary};stop-opacity:1" />
    </linearGradient>

    <radialGradient id="hubGlow" cx="50%" cy="50%">
      <stop offset="0%" style="stop-color:${accent};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${primary};stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:${primary};stop-opacity:0" />
    </radialGradient>

    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${primary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${secondary};stop-opacity:1" />
    </linearGradient>

    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feFlood flood-color="${accent}" flood-opacity="0.8"/>
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
      fill: ${accent};
      text-anchor: middle;
    }
    .info-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: rgba(255,255,255,0.9);
      text-anchor: start;
    }
    .header-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      font-weight: bold;
      fill: ${accent};
      text-anchor: start;
    }
    .connection-line {
      stroke: ${accent};
      stroke-width: 2;
      stroke-dasharray: 4,4;
      opacity: 0.6;
    }
    .spoke-node {
      fill: ${secondary};
      stroke: white;
      stroke-width: 2;
    }
    .hub-node {
      fill: url(#hubGlow);
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: ${accent};
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
  <rect x="0" y="0" width="400" height="520" fill="url(#bgGrad)" rx="12"/>

  <!-- Header -->
  <text class="title" x="200" y="30">Hub and Spoke Topology</text>
  <text class="subtitle" x="200" y="48">Centralized Network Architecture</text>

  <!-- Network diagram -->
  <rect x="20" y="70" width="360" height="280" fill="rgba(0,0,0,0.3)" rx="8"/>

  <!-- Connection lines from spokes to hub -->
  ${spokePositions.map(pos =>
    `<line class="connection-line" x1="${pos.x}" y1="${pos.y}" x2="${centerX}" y2="${centerY}"/>`
  ).join('\n  ')}

  <!-- Spoke nodes -->
  ${spokePositions.map((pos, i) => `
  <circle class="spoke-node" cx="${pos.x}" cy="${pos.y}" r="18"/>
  <text x="${pos.x}" y="${pos.y + 6}" text-anchor="middle" font-size="20">${topology.components.spokes[i].emoji}</text>
  `).join('')}

  <!-- Hub node (on top) -->
  <circle class="hub-node" cx="${centerX}" cy="${centerY}" r="35"/>
  <circle cx="${centerX}" cy="${centerY}" r="25" fill="${accent}"/>
  <text x="${centerX}" y="${centerY + 8}" text-anchor="middle" font-size="32">${topology.components.hub.emoji}</text>

  <text class="info-text" x="200" y="365" text-anchor="middle" fill="${accent}" font-weight="600">All traffic flows through the central hub</text>

  <!-- Characteristics -->
  <text class="header-text" x="30" y="390">Characteristics</text>
  <text class="info-text" x="30" y="405">✓ Simple to manage and configure</text>
  <text class="info-text" x="30" y="418">✗ Single point of failure</text>
  <text class="info-text" x="30" y="431">✗ Hub can become bottleneck</text>
  <text class="info-text" x="30" y="444">✓ Easy centralized control</text>

  <!-- Examples -->
  <text class="header-text" x="30" y="465">Real-World Examples</text>
  <text class="info-text" x="30" y="480">• Traditional client-server applications</text>
  <text class="info-text" x="30" y="493">• Airport hub systems (hub airports)</text>

  <!-- Save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="500"
    width="300"
    height="15"
    rx="8"
    spell="save"
    spell-components='{"bdoPubKey":"${topologyBDOPubKey}","collection":"network-topology"}'
  />
  <text class="button-text" x="200" y="507.5" font-size="10">🔗 Save to Collection</text>
</svg>`;
}

/**
 * Generate SVG for federated network topologies
 * Used for Fediverse, Matrix, and Fedwiki
 *
 * @param {Object} topology - Topology object
 * @param {string} topologyBDOPubKey - PubKey of this topology's BDO
 * @returns {string} SVG string
 */
export function generateFederatedNetworkSVG(topology, topologyBDOPubKey) {
  const { primary, secondary, accent } = topology.colors;

  // Determine specific network type
  const isFediverse = topology.name.includes('Fediverse');
  const isMatrix = topology.name.includes('Matrix');
  const isFedwiki = topology.name.includes('Wiki');

  // Get nodes based on network type
  const nodes = isFediverse ? topology.networkStructure.instances :
                isMatrix ? topology.networkStructure.homeservers :
                topology.networkStructure.wikis;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560" width="400" height="560">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${secondary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${primary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${secondary};stop-opacity:1" />
    </linearGradient>

    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feFlood flood-color="${accent}" flood-opacity="0.8"/>
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
      fill: ${accent};
      text-anchor: middle;
    }
    .emojicode {
      font-size: 24px;
      text-anchor: middle;
    }
    .info-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: rgba(255,255,255,0.9);
      text-anchor: start;
    }
    .header-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      font-weight: bold;
      fill: ${accent};
      text-anchor: start;
    }
    .connection-line {
      stroke: ${accent};
      stroke-width: 1.5;
      opacity: 0.4;
    }
    .node-circle {
      fill: ${secondary};
      stroke: white;
      stroke-width: 2;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: ${accent};
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
  <rect x="0" y="0" width="400" height="560" fill="url(#bgGrad)" rx="12"/>

  <!-- Header -->
  <text class="title" x="200" y="28">${topology.name}</text>
  <text class="subtitle" x="200" y="44">${topology.subtitle}</text>
  <text class="emojicode" x="200" y="72">${topology.emojicode}</text>

  <!-- Network diagram -->
  <rect x="20" y="90" width="360" height="200" fill="rgba(0,0,0,0.3)" rx="8"/>

  <!-- Mesh network connections (each node connects to several others) -->
  <line class="connection-line" x1="100" y1="140" x2="150" y2="160"/>
  <line class="connection-line" x1="100" y1="140" x2="200" y2="130"/>
  <line class="connection-line" x1="150" y1="160" x2="250" y2="170"/>
  <line class="connection-line" x1="150" y1="160" x2="200" y2="130"/>
  <line class="connection-line" x1="200" y1="130" x2="300" y2="145"/>
  <line class="connection-line" x1="200" y1="130" x2="250" y2="170"/>
  <line class="connection-line" x1="250" y1="170" x2="300" y2="145"/>
  <line class="connection-line" x1="80" y1="230" x2="150" y2="160"/>
  <line class="connection-line" x1="80" y1="230" x2="180" y1="245"/>
  <line class="connection-line" x1="180" y1="245" x2="250" y2="170"/>
  <line class="connection-line" x1="180" y1="245" x2="320" y2="230"/>
  <line class="connection-line" x1="300" y1="145" x2="320" y2="230"/>

  <!-- Node circles -->
  <circle class="node-circle" cx="100" cy="140" r="16"/>
  <text x="100" y="146" text-anchor="middle" font-size="18">${nodes[0]?.emoji || '🌐'}</text>

  <circle class="node-circle" cx="150" cy="160" r="16"/>
  <text x="150" y="166" text-anchor="middle" font-size="18">${nodes[1]?.emoji || '🌐'}</text>

  <circle class="node-circle" cx="200" cy="130" r="16"/>
  <text x="200" y="136" text-anchor="middle" font-size="18">${nodes[2]?.emoji || '🌐'}</text>

  <circle class="node-circle" cx="250" cy="170" r="16"/>
  <text x="250" y="176" text-anchor="middle" font-size="18">${nodes[3]?.emoji || '🌐'}</text>

  <circle class="node-circle" cx="300" cy="145" r="16"/>
  <text x="300" y="151" text-anchor="middle" font-size="18">${nodes[4]?.emoji || '🌐'}</text>

  <circle class="node-circle" cx="80" cy="230" r="16"/>
  <text x="80" y="236" text-anchor="middle" font-size="18">${nodes[0]?.emoji || '🌐'}</text>

  <circle class="node-circle" cx="180" cy="245" r="16"/>
  <text x="180" y="251" text-anchor="middle" font-size="18">${nodes[1]?.emoji || '🌐'}</text>

  <circle class="node-circle" cx="320" cy="230" r="16"/>
  <text x="320" y="236" text-anchor="middle" font-size="18">${nodes[2]?.emoji || '🌐'}</text>

  <text class="info-text" x="200" y="275" text-anchor="middle" fill="${accent}" font-weight="600">No central authority - nodes federate as peers</text>

  <!-- Protocol/Architecture info -->
  <text class="header-text" x="30" y="305">${isMatrix ? 'Protocol' : isFediverse ? 'Protocol' : 'Concept'}</text>
  <text class="info-text" x="30" y="320">${isMatrix ? 'Matrix Protocol (Open Standard)' : isFediverse ? 'ActivityPub (W3C Standard)' : 'Personal Wikis that Fork and Share'}</text>

  <!-- Advantages -->
  <text class="header-text" x="30" y="345">Advantages</text>
  <text class="info-text" x="30" y="360">✓ No single point of failure</text>
  <text class="info-text" x="30" y="373">✓ Choose or run your own instance</text>
  <text class="info-text" x="30" y="386">✓ Data sovereignty and control</text>
  <text class="info-text" x="30" y="399">✓ Open protocols enable innovation</text>
  ${isMatrix ? `<text class="info-text" x="30" y="412">✓ End-to-end encryption by default</text>` : ''}

  <!-- Challenges -->
  <text class="header-text" x="30" y="${isMatrix ? 435 : 422}">Challenges</text>
  <text class="info-text" x="30" y="${isMatrix ? 450 : 437}">• Discovery across network can be harder</text>
  <text class="info-text" x="30" y="${isMatrix ? 463 : 450}">• Requires technical knowledge to self-host</text>
  <text class="info-text" x="30" y="${isMatrix ? 476 : 463}">• Instance quality varies by operator</text>

  <!-- Examples/Platforms -->
  <text class="header-text" x="30" y="${isMatrix ? 500 : 487}">${isFediverse ? 'Major Platforms' : isMatrix ? 'Major Clients' : 'Philosophy'}</text>
  ${isFediverse ? `
  <text class="info-text" x="30" y="515">🐘 Mastodon (microblogging) • 📷 Pixelfed (photos)</text>
  <text class="info-text" x="30" y="528">📹 PeerTube (videos) • 🔗 Lemmy (communities)</text>
  ` : isMatrix ? `
  <text class="info-text" x="30" y="515">💬 Element • 🦙 FluffyChat • 🐱 Nheko</text>
  ` : `
  <text class="info-text" x="30" y="502">Distributed, personal knowledge management.</text>
  <text class="info-text" x="30" y="515" font-style="italic">Creator: Ward Cunningham (inventor of wiki)</text>
  `}

  <!-- Save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="${isFediverse ? 540 : isMatrix ? 530 : 530}"
    width="300"
    height="${isFediverse ? 15 : 25}"
    rx="8"
    spell="save"
    spell-components='{"bdoPubKey":"${topologyBDOPubKey}","collection":"network-topology"}'
  />
  <text class="button-text" x="200" y="${isFediverse ? 547.5 : isMatrix ? 542.5 : 542.5}" font-size="${isFediverse ? 10 : 14}">🔗 Save to Collection</text>
</svg>`;
}

/**
 * Generate SVG for FFXIV server architecture
 * Hierarchical game server topology
 *
 * @param {Object} topology - Topology object
 * @param {string} topologyBDOPubKey - PubKey of this topology's BDO
 * @returns {string} SVG string
 */
export function generateFFXIVServersSVG(topology, topologyBDOPubKey) {
  const { primary, secondary, accent } = topology.colors;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 580" width="400" height="580">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7f1d1d;stop-opacity:1" />
      <stop offset="100%" style="stop-color:${primary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${primary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${secondary};stop-opacity:1" />
    </linearGradient>

    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feFlood flood-color="${accent}" flood-opacity="0.8"/>
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
      font-size: 20px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: ${accent};
      text-anchor: middle;
    }
    .emojicode {
      font-size: 24px;
      text-anchor: middle;
    }
    .info-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: rgba(255,255,255,0.9);
      text-anchor: start;
    }
    .header-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      font-weight: bold;
      fill: ${accent};
      text-anchor: middle;
    }
    .label-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 8px;
      fill: white;
      text-anchor: middle;
      font-weight: 600;
    }
    .connection-line {
      stroke: ${accent};
      stroke-width: 2;
      opacity: 0.5;
    }
    .dc-node {
      fill: ${primary};
      stroke: ${accent};
      stroke-width: 3;
    }
    .world-node {
      fill: ${secondary};
      stroke: white;
      stroke-width: 2;
    }
    .instance-node {
      fill: #fbbf24;
      stroke: white;
      stroke-width: 1;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: ${accent};
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
  <rect x="0" y="0" width="400" height="580" fill="url(#bgGrad)" rx="12"/>

  <!-- Header -->
  <text class="title" x="200" y="28">Final Fantasy XIV Servers</text>
  <text class="subtitle" x="200" y="44">MMORPG Infrastructure Topology</text>
  <text class="emojicode" x="200" y="72">${topology.emojicode}</text>

  <!-- Hierarchical diagram -->
  <rect x="20" y="90" width="360" height="300" fill="rgba(0,0,0,0.3)" rx="8"/>

  <!-- Level 1: Data Centers -->
  <text class="header-text" x="200" y="110">Data Centers (Regional)</text>

  <rect class="dc-node" x="40" y="120" rx="6" width="70" height="30"/>
  <text class="label-text" x="75" y="138">🌎 NA</text>

  <rect class="dc-node" x="120" y="120" rx="6" width="70" height="30"/>
  <text class="label-text" x="155" y="138">🌍 EU</text>

  <rect class="dc-node" x="210" y="120" rx="6" width="70" height="30"/>
  <text class="label-text" x="245" y="138">🌏 JP</text>

  <rect class="dc-node" x="290" y="120" rx="6" width="70" height="30"/>
  <text class="label-text" x="325" y="138">🌏 OCE</text>

  <!-- Level 2: Worlds (focus on NA) -->
  <text class="header-text" x="200" y="175">Worlds (Servers)</text>

  <!-- Lines from NA DC to worlds -->
  <line class="connection-line" x1="75" y1="150" x2="60" y2="190"/>
  <line class="connection-line" x1="75" y1="150" x2="110" y2="190"/>
  <line class="connection-line" x1="75" y1="150" x2="160" y2="190"/>
  <line class="connection-line" x1="75" y1="150" x2="210" y2="190"/>

  <circle class="world-node" cx="60" cy="200" r="12"/>
  <text x="60" y="205" text-anchor="middle" font-size="14">⚔️</text>
  <text class="label-text" x="60" y="218">Aether</text>

  <circle class="world-node" cx="110" cy="200" r="12"/>
  <text x="110" y="205" text-anchor="middle" font-size="14">💎</text>
  <text class="label-text" x="110" y="218">Crystal</text>

  <circle class="world-node" cx="160" cy="200" r="12"/>
  <text x="160" y="205" text-anchor="middle" font-size="14">🔱</text>
  <text class="label-text" x="160" y="218">Primal</text>

  <circle class="world-node" cx="210" cy="200" r="12"/>
  <text x="210" y="205" text-anchor="middle" font-size="14">⚡</text>
  <text class="label-text" x="210" y="218">Dynamis</text>

  <!-- Level 3: Individual worlds (expand Aether) -->
  <text class="header-text" x="200" y="250">Individual Worlds</text>

  <!-- Lines from Aether to individual worlds -->
  <line class="connection-line" x1="60" y1="212" x2="50" y2="270" stroke-width="1.5"/>
  <line class="connection-line" x1="60" y1="212" x2="80" y2="270" stroke-width="1.5"/>
  <line class="connection-line" x1="60" y1="212" x2="110" y2="270" stroke-width="1.5"/>
  <line class="connection-line" x1="60" y1="212" x2="140" y2="270" stroke-width="1.5"/>

  <circle class="world-node" cx="50" cy="280" r="8" opacity="0.8"/>
  <text class="label-text" x="50" y="294" font-size="7">Gilgamesh</text>

  <circle class="world-node" cx="80" cy="280" r="8" opacity="0.8"/>
  <text class="label-text" x="80" y="294" font-size="7">Cactuar</text>

  <circle class="world-node" cx="110" cy="280" r="8" opacity="0.8"/>
  <text class="label-text" x="110" y="294" font-size="7">Sargatanas</text>

  <circle class="world-node" cx="140" cy="280" r="8" opacity="0.8"/>
  <text class="label-text" x="140" y="294" font-size="7">Jenova</text>

  <!-- Level 4: Instances -->
  <text class="header-text" x="290" y="250">Instances</text>
  <text class="info-text" x="230" y="268">(Multiple copies</text>
  <text class="info-text" x="235" y="279">of same zone)</text>

  <line class="connection-line" x1="80" y1="288" x2="260" y2="310" stroke-width="1"/>

  <circle class="instance-node" cx="260" cy="320" r="6"/>
  <text class="label-text" x="275" y="322" font-size="6">Instance 1</text>

  <circle class="instance-node" cx="260" cy="335" r="6"/>
  <text class="label-text" x="275" y="337" font-size="6">Instance 2</text>

  <circle class="instance-node" cx="260" cy="350" r="6"/>
  <text class="label-text" x="275" y="352" font-size="6">Instance 3</text>

  <text class="info-text" x="30" y="375" font-style="italic">Hierarchy: Data Center → World Group → World → Instance</text>

  <!-- Features -->
  <text class="header-text" x="200" y="405">Key Features</text>
  <text class="info-text" x="30" y="420">🌐 World Visit: Travel to worlds in your data center</text>
  <text class="info-text" x="30" y="433">🎮 Instancing: Multiple zone copies reduce crowding</text>
  <text class="info-text" x="30" y="446">👥 Cross-world: Party finder spans data center</text>
  <text class="info-text" x="30" y="459">🏠 Housing: Tied to home world only</text>

  <!-- Architecture benefits -->
  <rect x="25" y="475" width="350" height="60" fill="rgba(0,0,0,0.3)" rx="6"/>
  <text class="info-text" x="35" y="492" font-weight="600">Hierarchical Architecture Benefits:</text>
  <text class="info-text" x="35" y="505">• Regional data centers minimize latency</text>
  <text class="info-text" x="35" y="518">• World groups balance population</text>
  <text class="info-text" x="35" y="531">• Instancing scales capacity dynamically</text>

  <!-- Save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="545"
    width="300"
    height="30"
    rx="10"
    spell="save"
    spell-components='{"bdoPubKey":"${topologyBDOPubKey}","collection":"network-topology"}'
  />
  <text class="button-text" x="200" y="560">⚔️ Save to Collection</text>
</svg>`;
}

/**
 * Generate SVG for overlay network
 * Shows interconnection via emojicodes
 *
 * @param {Object} topology - Topology object
 * @param {string} topologyBDOPubKey - PubKey of this topology's BDO
 * @returns {string} SVG string
 */
export function generateOverlayNetworkSVG(topology, topologyBDOPubKey) {
  const { primary, secondary, accent } = topology.colors;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 580" width="400" height="580">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#581c87;stop-opacity:1" />
      <stop offset="100%" style="stop-color:${primary};stop-opacity:1" />
    </linearGradient>

    <radialGradient id="coreGlow" cx="50%" cy="50%">
      <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#a78bfa;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:${primary};stop-opacity:0" />
    </radialGradient>

    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${primary};stop-opacity:1" />
      <stop offset="33%" style="stop-color:#ec4899;stop-opacity:1" />
      <stop offset="66%" style="stop-color:${accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${secondary};stop-opacity:1" />
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
      font-size: 22px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: ${accent};
      text-anchor: middle;
    }
    .info-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: rgba(255,255,255,0.9);
      text-anchor: start;
    }
    .header-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      font-weight: bold;
      fill: ${accent};
      text-anchor: start;
    }
    .emojicode-text {
      font-size: 16px;
      text-anchor: middle;
    }
    .label-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 8px;
      fill: white;
      text-anchor: middle;
      font-weight: 600;
    }
    .connection-line {
      stroke: ${accent};
      stroke-width: 3;
      opacity: 0.6;
    }
    .overlay-core {
      fill: url(#coreGlow);
    }
    .network-node {
      fill: ${secondary};
      stroke: ${accent};
      stroke-width: 3;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: ${accent};
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
  <rect x="0" y="0" width="400" height="580" fill="url(#bgGrad)" rx="12"/>

  <!-- Header -->
  <text class="title" x="200" y="28">Emojicode Overlay Network</text>
  <text class="subtitle" x="200" y="44">Interconnecting Federated Systems</text>

  <!-- Main overlay diagram -->
  <rect x="20" y="60" width="360" height="240" fill="rgba(0,0,0,0.3)" rx="8"/>

  <!-- Central overlay core -->
  <circle class="overlay-core" cx="200" cy="180" r="35"/>
  <circle cx="200" cy="180" r="25" fill="${accent}"/>
  <text x="200" y="190" text-anchor="middle" font-size="32">🔮</text>
  <text class="label-text" x="200" y="225">Overlay Core</text>

  <!-- Four network types around the core -->
  <!-- Fediverse (top-left) -->
  <line class="connection-line" x1="200" y1="180" x2="90" y2="100"/>
  <circle class="network-node" cx="90" cy="100" r="25"/>
  <text class="emojicode-text" x="90" y="90">🌐🔗</text>
  <text x="90" y="108" text-anchor="middle" font-size="24">🐘</text>
  <text class="label-text" x="90" y="135">Fediverse</text>

  <!-- Matrix (top-right) -->
  <line class="connection-line" x1="200" y1="180" x2="310" y2="100"/>
  <circle class="network-node" cx="310" cy="100" r="25"/>
  <text class="emojicode-text" x="310" y="90">💬🔐</text>
  <text x="310" y="108" text-anchor="middle" font-size="24">💬</text>
  <text class="label-text" x="310" y="135">Matrix</text>

  <!-- Fedwiki (bottom-left) -->
  <line class="connection-line" x1="200" y1="180" x2="90" y2="260"/>
  <circle class="network-node" cx="90" cy="260" r="25"/>
  <text class="emojicode-text" x="90" y="250">📝🔀</text>
  <text x="90" y="268" text-anchor="middle" font-size="24">📝</text>
  <text class="label-text" x="90" y="295">Fedwiki</text>

  <!-- FFXIV (bottom-right) -->
  <line class="connection-line" x1="200" y1="180" x2="310" y2="260"/>
  <circle class="network-node" cx="310" cy="260" r="25"/>
  <text class="emojicode-text" x="310" y="250">⚔️🌐</text>
  <text x="310" y="268" text-anchor="middle" font-size="24">⚔️</text>
  <text class="label-text" x="310" y="295">FFXIV</text>

  <!-- Concept explanation -->
  <text class="header-text" x="30" y="325">Overlay Network Concept</text>
  <text class="info-text" x="30" y="340">Different topologies (federated, hierarchical, distributed)</text>
  <text class="info-text" x="30" y="353">connected through unified overlay protocol layer.</text>

  <!-- Emojicode routing -->
  <text class="header-text" x="30" y="378">Emojicode Routing</text>
  <text class="info-text" x="30" y="393">🌐🔗 → Routes to Fediverse instances</text>
  <text class="info-text" x="30" y="406">💬🔐 → Routes to Matrix homeservers</text>
  <text class="info-text" x="30" y="419">📝🔀 → Routes to Federated Wiki nodes</text>
  <text class="info-text" x="30" y="432">⚔️🌐 → Routes to FFXIV data centers</text>
  <text class="info-text" x="30" y="445">🔮🕸️ → Overlay routing nodes</text>

  <!-- Benefits -->
  <rect x="25" y="460" width="350" height="75" fill="rgba(0,0,0,0.3)" rx="6"/>
  <text class="header-text" x="35" y="478">Benefits of Overlay Approach</text>
  <text class="info-text" x="35" y="493">• Network-agnostic addressing via emojicodes</text>
  <text class="info-text" x="35" y="506">• Protocol translation between different systems</text>
  <text class="info-text" x="35" y="519">• Unified identity across diverse networks</text>
  <text class="info-text" x="35" y="532">• Discover resources across all topologies</text>

  <!-- Save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="545"
    width="300"
    height="30"
    rx="10"
    spell="save"
    spell-components='{"bdoPubKey":"${topologyBDOPubKey}","collection":"network-topology"}'
  />
  <text class="button-text" x="200" y="560">🔮 Save to Collection</text>
</svg>`;
}
