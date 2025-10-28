/**
 * Bundles Examples for Test Environment
 *
 * These bundle posts demonstrate:
 * - Multi-item collections that work together
 * - Outfit bundles, experience bundles, furniture sets
 * - Save spell for adding to carrierBag "bundles" collection
 * - Complete packages with pricing and descriptions
 */

import sessionless from 'sessionless-node';

export const bundlesPosts = [
  {
    id: 'bundle-fall-date-night-outfit-001',
    uuid: sessionless.generateUUID(),
    type: 'outfit-bundle',
    category: 'fashion',
    name: 'Fall Date Night Ensemble',
    subtitle: 'Complete 5-Piece Outfit',
    description: 'A sophisticated yet romantic outfit perfect for autumn evening dates. This carefully curated ensemble combines classic pieces with modern touches for an effortlessly stylish look.',
    occasion: 'Date night, dinner, theater, upscale casual',
    season: 'Fall/Autumn',
    items: [
      {
        name: 'Burgundy Cashmere Sweater',
        description: 'Soft V-neck sweater with ribbed cuffs',
        price: 12800,
        size: 'S-XL'
      },
      {
        name: 'Dark Wash Slim-Fit Jeans',
        description: 'Premium denim with stretch comfort',
        price: 8900,
        size: 'US 26-34'
      },
      {
        name: 'Cognac Leather Ankle Boots',
        description: 'Block heel, side zipper closure',
        price: 16500,
        size: 'US 6-11'
      },
      {
        name: 'Gold Layered Necklace',
        description: 'Delicate chain with pendant accents',
        price: 4500,
        size: 'Adjustable'
      },
      {
        name: 'Tan Suede Crossbody Bag',
        description: 'Compact bag with leather strap',
        price: 7800,
        size: '8" x 6"'
      }
    ],
    totalValue: 58500, // $585.00
    bundlePrice: 49900, // $499.00 (15% discount)
    savings: 8600, // $86.00
    colors: {
      primary: '#9D2235',
      secondary: '#D4A574',
      accent: '#8B4513'
    },
    styleNotes: [
      'Burgundy and cognac create a warm, rich palette',
      'Mix of textures: cashmere, denim, leather, suede',
      'Gold jewelry adds subtle elegance',
      'Boots provide comfortable height',
      'Versatile pieces work for multiple occasions'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400',
    tags: ['outfit', 'fashion', 'date-night', 'fall', 'bundle'],
    metadata: {
      pieceCount: 5,
      genderPresentation: 'Feminine',
      washCare: 'Dry clean sweater, machine wash jeans'
    }
  },
  {
    id: 'bundle-romantic-evening-date-002',
    uuid: sessionless.generateUUID(),
    type: 'experience-bundle',
    category: 'date-night',
    name: 'Romantic Evening in the City',
    subtitle: '3-Part Date Experience',
    description: 'An unforgettable evening designed for romance. Start with an exquisite dinner, enjoy world-class entertainment, then cap off the night with a magical carriage ride through the city\'s historic district.',
    duration: '5-6 hours',
    recommendedTime: 'Evening (6:00 PM start)',
    experiences: [
      {
        name: 'Fine Dining at La Maison Rouge',
        description: 'Prix fixe dinner for two with wine pairing',
        includes: [
          'Amuse-bouche and bread service',
          '4-course tasting menu',
          'Sommelier-selected wine pairing (3 glasses each)',
          'Dessert and coffee/tea',
          'Private corner table with city views'
        ],
        duration: '2.5 hours',
        price: 35000,
        location: 'Downtown - Reservations for 6:00 PM'
      },
      {
        name: 'Symphony Orchestra Performance',
        description: 'Premium orchestra seats for classical concert',
        includes: [
          'Two premium orchestra section tickets',
          'Program featuring Tchaikovsky & Rachmaninoff',
          'Intermission champagne service',
          'Commemorative program booklet'
        ],
        duration: '2 hours (with intermission)',
        price: 24000,
        location: 'Concert Hall - Performance at 8:30 PM'
      },
      {
        name: 'Horse-Drawn Carriage Ride',
        description: 'Private carriage tour through historic district',
        includes: [
          '45-minute private carriage ride',
          'Cozy blankets and warm beverages',
          'Knowledgeable driver/tour guide',
          'Route through illuminated landmarks',
          'Photo opportunity at fountain square'
        ],
        duration: '45 minutes',
        price: 15000,
        location: 'Pickup from Concert Hall at 11:00 PM'
      }
    ],
    totalValue: 74000, // $740.00
    bundlePrice: 64900, // $649.00 (12% discount)
    savings: 9100, // $91.00
    colors: {
      primary: '#DC143C',
      secondary: '#FFD700',
      accent: '#8B0000'
    },
    includedExtras: [
      'Complimentary coat check at restaurant',
      'Valet parking voucher',
      'Digital photo album from carriage ride',
      'Printed itinerary with reservations'
    ],
    tips: [
      'Dress code: Smart casual to formal',
      'Restaurant reservation automatically confirmed',
      'Concert tickets available for pickup at will-call',
      'Carriage ride weather-dependent (rain checks available)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464996750766-7f2dc9a8e46b?w=400',
    tags: ['date', 'romance', 'dinner', 'concert', 'carriage-ride', 'experience'],
    metadata: {
      experienceCount: 3,
      suitableFor: 'Couples, anniversaries, special occasions',
      advanceBooking: '2 weeks recommended'
    }
  },
  {
    id: 'bundle-cozy-modern-living-room-003',
    uuid: sessionless.generateUUID(),
    type: 'furniture-bundle',
    category: 'home-decor',
    name: 'Cozy Modern Living Room Set',
    subtitle: 'Complete 5-Piece Furniture Collection',
    description: 'Transform your living space with this thoughtfully curated collection. Combining mid-century modern aesthetics with contemporary comfort, this set creates a welcoming room perfect for relaxation and entertaining.',
    style: 'Mid-Century Modern with Scandinavian influences',
    colorScheme: 'Warm neutrals with navy and brass accents',
    furniture: [
      {
        name: 'Boucle Cloud Sofa',
        description: '3-seater sofa in cream boucle fabric',
        dimensions: '84"W x 36"D x 32"H',
        materials: 'Boucle upholstery, hardwood frame, foam cushions',
        features: [
          'Deep seating for comfort',
          'Removable cushion covers',
          'Seats 3-4 people',
          'Neutral cream color'
        ],
        price: 189900,
        assembly: 'Minimal - legs attach'
      },
      {
        name: 'Live Edge Coffee Table',
        description: 'Walnut wood with natural edge and brass legs',
        dimensions: '48"W x 28"D x 18"H',
        materials: 'Solid walnut, brass-finished steel legs',
        features: [
          'Natural wood grain patterns',
          'Lower shelf for storage',
          'Sealed finish',
          'Unique live edge detail'
        ],
        price: 79900,
        assembly: 'Simple - legs attach'
      },
      {
        name: 'Handwoven Wool Area Rug',
        description: 'Geometric pattern in navy and cream',
        dimensions: '8\' x 10\'',
        materials: '100% New Zealand wool, cotton backing',
        features: [
          'Hand-tufted construction',
          'Low-profile design',
          'Reversible pattern',
          'Non-slip backing included'
        ],
        price: 64900,
        care: 'Professional cleaning recommended'
      },
      {
        name: 'Arched Floor Lamp',
        description: 'Brass arc lamp with marble base',
        dimensions: '75"H with 50" reach',
        materials: 'Brass-finished metal, white marble base, linen shade',
        features: [
          'Adjustable arc',
          'Dimmer switch',
          'LED compatible',
          'Reaches over sofa'
        ],
        price: 34900,
        assembly: 'Minimal - base attaches to pole'
      },
      {
        name: 'Abstract Canvas Art Pair',
        description: 'Two large-scale gallery-wrapped canvases',
        dimensions: 'Each 36"W x 48"H',
        materials: 'Canvas, wooden frame, archival inks',
        features: [
          'Abstract geometric design',
          'Navy, cream, gold palette',
          'Ready to hang',
          'Coordinates with room palette'
        ],
        price: 45900,
        artist: 'Original design by Studio Maven'
      }
    ],
    totalValue: 415500, // $4,155.00
    bundlePrice: 349900, // $3,499.00 (16% discount)
    savings: 65600, // $656.00
    colors: {
      primary: '#1e3a5f',
      secondary: '#f5f5dc',
      accent: '#b8860b'
    },
    roomDimensions: 'Ideal for rooms 12\'x14\' or larger',
    designTips: [
      'Sofa creates focal point along main wall',
      'Rug grounds the seating area',
      'Arc lamp provides ambient lighting over sofa',
      'Coffee table centered on rug',
      'Artwork hung on wall behind sofa at 57" center height',
      'Add plants and throw pillows for personality'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400',
    tags: ['furniture', 'living-room', 'home-decor', 'modern', 'bundle'],
    metadata: {
      pieceCount: 5,
      deliveryTime: '4-6 weeks',
      whiteGloveDelivery: 'Available for additional fee',
      warranty: '1 year manufacturer warranty on furniture'
    }
  },
  {
    id: 'bundle-coffee-lovers-kit-004',
    uuid: sessionless.generateUUID(),
    type: 'specialty-bundle',
    category: 'food-beverage',
    name: 'Coffee Connoisseur\'s Collection',
    subtitle: 'Complete Home Barista Kit',
    description: 'Everything you need to brew café-quality coffee at home. This expertly curated collection brings together premium beans, professional-grade equipment, and artisan treats for the ultimate coffee experience.',
    perfectFor: 'Coffee enthusiasts, gifts, home baristas, morning rituals',
    items: [
      {
        name: 'Ethiopian Yirgacheffe Coffee Beans',
        description: 'Single-origin medium roast (2 lbs)',
        details: 'Floral, citrus notes with wine-like acidity',
        source: 'Direct trade, shade-grown',
        roastDate: 'Fresh roasted within 7 days',
        price: 3200
      },
      {
        name: 'Burr Coffee Grinder',
        description: 'Conical burr grinder with 15 grind settings',
        details: 'Stainless steel construction, 8oz capacity',
        features: [
          'Uniform grind consistency',
          'Quiet operation',
          'Easy to clean',
          'Grind timer'
        ],
        price: 8900
      },
      {
        name: 'French Press (34 oz)',
        description: 'Borosilicate glass with bamboo handle',
        details: 'Makes 4 cups, heat-resistant glass',
        features: [
          'Double-filter system',
          'Dishwasher safe',
          'Sustainable bamboo',
          'Includes measuring scoop'
        ],
        price: 4500
      },
      {
        name: 'Artisan Ceramic Mugs (Set of 2)',
        description: 'Handcrafted stoneware in matte glaze',
        details: '12 oz capacity, microwave and dishwasher safe',
        features: [
          'Hand-thrown by local artisan',
          'Comfortable handle design',
          'Keeps coffee warm',
          'Unique reactive glaze patterns'
        ],
        price: 5600
      },
      {
        name: 'Italian Almond Biscotti (16 oz)',
        description: 'Traditional twice-baked cookies',
        details: 'Handmade with almonds, perfect for dunking',
        features: [
          'Made with real butter and vanilla',
          'No artificial flavors',
          'Stays fresh 3 weeks',
          'Gift-box packaging'
        ],
        price: 1800
      }
    ],
    totalValue: 24000, // $240.00
    bundlePrice: 19900, // $199.00 (17% discount)
    savings: 4100, // $41.00
    colors: {
      primary: '#6F4E37',
      secondary: '#D2691E',
      accent: '#FFE4B5'
    },
    brewingGuide: [
      'Grind beans just before brewing for maximum freshness',
      'Use 1:15 coffee to water ratio (1g coffee per 15ml water)',
      'Water temperature: 195-205°F',
      'French press steep time: 4 minutes',
      'Serve immediately for best flavor'
    ],
    bonusIncludes: [
      'Coffee brewing guide booklet',
      'Tasting notes card for beans',
      'Storage tips and tricks',
      'Recipe card for cold brew method'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    tags: ['coffee', 'beverage', 'breakfast', 'gift', 'bundle'],
    metadata: {
      itemCount: 5,
      shelfLife: 'Beans best within 4 weeks of opening',
      giftWrapping: 'Available upon request',
      dietaryInfo: 'Biscotti contains gluten, dairy, tree nuts'
    }
  }
];

/**
 * Generate SVG for bundle card
 * Shows all items in bundle with pricing and save button
 *
 * @param {Object} bundle - Bundle object
 * @param {string} bundleBDOPubKey - PubKey of this bundle's BDO
 * @returns {string} SVG string
 */
export function generateBundleSVG(bundle, bundleBDOPubKey) {
  const { primary, secondary, accent } = bundle.colors;

  // Determine icon based on bundle type
  let icon = '📦';
  if (bundle.type === 'outfit-bundle') icon = '👗';
  if (bundle.type === 'experience-bundle') icon = '🎭';
  if (bundle.type === 'furniture-bundle') icon = '🛋️';
  if (bundle.type === 'specialty-bundle') icon = '☕';

  // Get item count
  const itemCount = bundle.items?.length || bundle.experiences?.length || bundle.furniture?.length || 0;

  // Format prices
  const totalValue = `$${(bundle.totalValue / 100).toFixed(2)}`;
  const bundlePrice = `$${(bundle.bundlePrice / 100).toFixed(2)}`;
  const savings = `$${(bundle.savings / 100).toFixed(2)}`;
  const savingsPercent = Math.round((bundle.savings / bundle.totalValue) * 100);

  // Get first few items to display
  const displayItems = bundle.items || bundle.experiences || bundle.furniture || [];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 520" width="400" height="520">
  <defs>
    <linearGradient id="bgGradient-${bundle.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${secondary};stop-opacity:1" />
    </linearGradient>

    <linearGradient id="savingsGrad-${bundle.id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad-${bundle.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${primary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${secondary};stop-opacity:1" />
    </linearGradient>

    <filter id="glow-${bundle.id}" x="-50%" y="-50%" width="200%" height="200%">
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
    .bundle-bg {
      fill: url(#bgGradient-${bundle.id});
    }
    .bundle-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 20px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .bundle-subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: ${accent};
      text-anchor: middle;
      font-weight: 600;
    }
    .bundle-description {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: rgba(255,255,255,0.9);
      text-anchor: start;
    }
    .item-name {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      font-weight: 600;
      fill: white;
      text-anchor: start;
    }
    .item-desc {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9px;
      fill: rgba(255,255,255,0.7);
      text-anchor: start;
    }
    .price-label {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: rgba(255,255,255,0.8);
      text-anchor: start;
    }
    .price-value {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 16px;
      font-weight: bold;
      fill: white;
      text-anchor: end;
    }
    .price-strike {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: rgba(255,255,255,0.5);
      text-anchor: end;
      text-decoration: line-through;
    }
    .savings-badge {
      fill: url(#savingsGrad-${bundle.id});
    }
    .savings-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .save-button {
      fill: url(#saveGrad-${bundle.id});
      stroke: ${accent};
      stroke-width: 3;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .save-button:hover {
      filter: url(#glow-${bundle.id});
    }
    .button-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
      dominant-baseline: middle;
      pointer-events: none;
    }
  </style>

  <!-- Background -->
  <rect class="bundle-bg" x="0" y="0" width="400" height="520" rx="16"/>

  <!-- Header -->
  <text x="200" y="35" text-anchor="middle" font-size="40">${icon}</text>
  <text class="bundle-title" x="200" y="70">${bundle.name}</text>
  <text class="bundle-subtitle" x="200" y="88">${bundle.subtitle}</text>

  <!-- Description -->
  <text class="bundle-description" x="20" y="110">${bundle.description.substring(0, 65)}</text>
  <text class="bundle-description" x="20" y="123">${bundle.description.substring(65, 130)}</text>
  ${bundle.description.length > 130 ? `<text class="bundle-description" x="20" y="136">${bundle.description.substring(130, 195)}...</text>` : ''}

  <!-- Divider -->
  <line x1="20" y1="150" x2="380" y2="150" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>

  <!-- Items included -->
  <text class="bundle-subtitle" x="20" y="170">Includes ${itemCount} Items:</text>

  ${displayItems.slice(0, 4).map((item, i) => `
  <text class="item-name" x="30" y="${190 + (i * 30)}">• ${item.name}</text>
  <text class="item-desc" x="35" y="${202 + (i * 30)}">${(item.description || item.details || '').substring(0, 50)}</text>
  `).join('')}

  ${itemCount > 4 ? `<text class="item-desc" x="30" y="${310}" font-style="italic">+ ${itemCount - 4} more item${itemCount - 4 > 1 ? 's' : ''}...</text>` : ''}

  <!-- Pricing section -->
  <rect x="15" y="330" width="370" height="120" fill="rgba(0,0,0,0.2)" rx="12"/>

  <!-- Original price -->
  <text class="price-label" x="30" y="355">Total Value:</text>
  <text class="price-strike" x="370" y="355">${totalValue}</text>

  <!-- Bundle price -->
  <text class="price-label" x="30" y="385">Bundle Price:</text>
  <text class="price-value" x="370" y="388">${bundlePrice}</text>

  <!-- Savings badge -->
  <rect class="savings-badge" x="120" y="405" width="160" height="35" rx="18"/>
  <text class="savings-text" x="200" y="425">Save ${savings} (${savingsPercent}%)</text>

  <!-- Save button -->
  <rect
    class="save-button"
    id="button1"
    x="30"
    y="460"
    width="340"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${bundleBDOPubKey}","collection":"bundles"}'
  />
  <text class="button-text" x="200" y="485">🛒 Add Bundle to Collection</text>
</svg>`;
}
