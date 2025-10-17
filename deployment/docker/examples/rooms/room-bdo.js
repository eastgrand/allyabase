/**
 * Room Product Generator for Roomz
 * Creates Sanora product entries for rental listings
 */

/**
 * Generates a room rental product for Ninefy/Sanora
 * @param {Object} roomData - Room details
 * @param {string} roomData.name - Room/property name
 * @param {Date|string} roomData.dateAvailable - When the room becomes available
 * @param {number} roomData.beds - Number of bedrooms
 * @param {number} roomData.baths - Number of bathrooms
 * @param {number} roomData.size - Size in square feet
 * @param {number} roomData.monthlyRent - Monthly rent in cents (e.g., 120000 = $1200)
 * @param {number} roomData.deposit - Security deposit in cents
 * @param {string} roomData.roomPic - URL or path to room image
 * @param {string} [roomData.description] - Room description
 * @param {Array<string>} [roomData.amenities] - List of amenities
 * @param {string} [roomData.address] - Property address
 * @param {string} [roomData.neighborhood] - Neighborhood name
 * @returns {Object} Sanora product structure for room
 */
export function generateRoomProduct(roomData) {
  const {
    name,
    dateAvailable,
    beds,
    baths,
    size,
    monthlyRent,
    deposit,
    roomPic,
    description = '',
    amenities = [],
    address = '',
    neighborhood = ''
  } = roomData;

  // Validate required fields
  if (!name || !dateAvailable || beds === undefined || baths === undefined ||
      !size || !monthlyRent || !deposit) {
    throw new Error('Missing required room fields');
  }

  // Format date available
  const availableDate = new Date(dateAvailable);
  const formattedDate = availableDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Generate product ID from name
  const productId = `room-${name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;

  // Build description
  const fullDescription = description ||
    `${beds} bed${beds !== 1 ? 's' : ''}, ${baths} bath${baths !== 1 ? 's' : ''} • ${size} sq ft\n` +
    `Available ${formattedDate}\n` +
    (amenities.length > 0 ? `Amenities: ${amenities.join(', ')}\n` : '') +
    (neighborhood ? `Located in ${neighborhood}` : '');

  return {
    title: name,
    description: fullDescription,
    price: monthlyRent, // Monthly rent in cents
    tags: [
      'rental',
      'housing',
      'roomz',
      `${beds}-bed`,
      `${baths}-bath`,
      neighborhood.toLowerCase().replace(/\s+/g, '-')
    ].filter(Boolean),
    category: 'rental',
    contentType: 'room',
    productId,
    metadata: {
      beds,
      baths,
      size,
      monthlyRent,
      deposit,
      dateAvailable: availableDate.toISOString(),
      roomPic,
      amenities,
      address,
      neighborhood,
      depositFormatted: `$${(deposit / 100).toFixed(2)}`,
      rentFormatted: `$${(monthlyRent / 100).toFixed(2)}/mo`,
      createdAt: Date.now()
    }
  };
}

/**
 * Generates horizontal SVG content for a room BDO (optimized for AdvanceKey)
 * @param {Object} roomData - Room details (same as generateRoomProduct)
 * @returns {string} Horizontal SVG content for AdvanceKey display
 */
export function generateRoomHorizontalSVG(roomData) {
  const {
    name,
    dateAvailable,
    beds,
    baths,
    size,
    monthlyRent,
    deposit,
    neighborhood = ''
  } = roomData;

  const availableDate = new Date(dateAvailable);
  const formattedDate = availableDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });

  const rentFormatted = `$${(monthlyRent / 100).toFixed(0)}`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 120" width="350" height="120">
  <defs>
    <style>
      .card-bg { fill: #1a1a2e; }
      .title-text { font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 16px; font-weight: 700; fill: white; }
      .spec-text { font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 11px; fill: #a8b2d1; }
      .price-text { font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 20px; font-weight: 700; fill: #4ade80; }
      .location-text { font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 10px; fill: #94a3b8; }
      .button-text { font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 12px; font-weight: 600; fill: white; }
    </style>
  </defs>

  <!-- Background -->
  <rect class="card-bg" width="350" height="120" rx="8"/>

  <!-- Header -->
  <text class="title-text" x="12" y="22">🏠 ${name}</text>
  ${neighborhood ? `<text class="location-text" x="12" y="36">📍 ${neighborhood}</text>` : ''}

  <!-- Specs Row -->
  <g transform="translate(12, ${neighborhood ? 52 : 45})">
    <text class="spec-text" x="0" y="0">🛏️ ${beds} bed${beds !== 1 ? 's' : ''}</text>
    <text class="spec-text" x="70" y="0">🚿 ${baths} bath${baths !== 1 ? 's' : ''}</text>
    <text class="spec-text" x="140" y="0">📐 ${size} sq ft</text>
  </g>

  <!-- Price and Availability -->
  <g transform="translate(12, ${neighborhood ? 75 : 68})">
    <text class="price-text" x="0" y="0">${rentFormatted}/mo</text>
    <text class="spec-text" x="0" y="16">📅 Available ${formattedDate}</text>
  </g>

  <!-- Save Button -->
  <rect spell="saveToStacks" spell-components="roomData:${encodeURIComponent(JSON.stringify(roomData))}"
        x="220" y="75" width="115" height="32" rx="6"
        fill="#6366f1" stroke="#4f46e5" stroke-width="2" cursor="pointer">
    <title>Save to Stacks</title>
  </rect>
  <text spell="saveToStacks" spell-components="roomData:${encodeURIComponent(JSON.stringify(roomData))}"
        class="button-text" x="277.5" y="95" text-anchor="middle">💾 SAVE</text>
</svg>`;
}

/**
 * Generates SVG content for a room BDO (vertical layout for full display)
 * @param {Object} roomData - Room details (same as generateRoomProduct)
 * @returns {string} SVG content for the room listing
 */
export function generateRoomSVG(roomData) {
  const {
    name,
    dateAvailable,
    beds,
    baths,
    size,
    monthlyRent,
    deposit,
    roomPic,
    description = '',
    amenities = [],
    address = '',
    neighborhood = ''
  } = roomData;

  const availableDate = new Date(dateAvailable);
  const formattedDate = availableDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const rentFormatted = `$${(monthlyRent / 100).toFixed(2)}/mo`;
  const depositFormatted = `$${(deposit / 100).toFixed(2)}`;

  // Format amenities as bullet points
  const amenitiesList = amenities.map(a => `• ${a}`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
    <style>
      .room-card {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      .title {
        font-size: 36px;
        font-weight: 700;
        fill: white;
      }
      .subtitle {
        font-size: 18px;
        fill: white;
        opacity: 0.9;
      }
      .section-title {
        font-size: 20px;
        font-weight: 600;
        fill: white;
      }
      .spec-text {
        font-size: 24px;
        font-weight: 600;
        fill: white;
      }
      .detail-text {
        font-size: 16px;
        fill: white;
        opacity: 0.95;
      }
      .price-text {
        font-size: 48px;
        font-weight: 700;
        fill: #4CAF50;
      }
      .amenity-text {
        font-size: 14px;
        fill: white;
        opacity: 0.9;
      }
    </style>
  </defs>

  <!-- Background -->
  <rect width="800" height="1000" fill="url(#bgGradient)"/>

  <!-- Header -->
  <text x="400" y="60" class="title" text-anchor="middle">🏠 ${name}</text>
  <text x="400" y="90" class="subtitle" text-anchor="middle">Available on Planet Nine</text>

  <!-- Divider -->
  <line x1="100" y1="110" x2="700" y2="110" stroke="white" stroke-width="2" opacity="0.3"/>

  <!-- Specs -->
  <g transform="translate(400, 160)">
    <text x="-150" y="0" class="spec-text">🛏️ ${beds} Bed${beds !== 1 ? 's' : ''}</text>
    <text x="0" y="0" class="spec-text" text-anchor="middle">🚿 ${baths} Bath${baths !== 1 ? 's' : ''}</text>
    <text x="150" y="0" class="spec-text" text-anchor="end">📐 ${size} sq ft</text>
  </g>

  <!-- Price -->
  <g transform="translate(400, 240)">
    <text x="0" y="0" class="price-text" text-anchor="middle">${rentFormatted}</text>
    <text x="0" y="30" class="detail-text" text-anchor="middle">💰 Deposit: ${depositFormatted}</text>
  </g>

  <!-- Availability -->
  <g transform="translate(400, 320)">
    <rect x="-150" y="-20" width="300" height="40" rx="20" fill="#4CAF50" opacity="0.9"/>
    <text x="0" y="5" class="detail-text" text-anchor="middle" font-weight="600">📅 Available ${formattedDate}</text>
  </g>

  <!-- Location -->
  ${neighborhood ? `
  <g transform="translate(400, 380)">
    <text x="0" y="0" class="section-title" text-anchor="middle">📍 ${neighborhood}</text>
    ${address ? `<text x="0" y="25" class="detail-text" text-anchor="middle">${address}</text>` : ''}
  </g>
  ` : ''}

  <!-- Amenities -->
  ${amenities.length > 0 ? `
  <g transform="translate(100, ${neighborhood ? 450 : 410})">
    <text x="0" y="0" class="section-title">✨ Amenities</text>
    ${amenities.map((amenity, i) => `
      <text x="0" y="${35 + i * 25}" class="amenity-text">${amenity}</text>
    `).join('')}
  </g>
  ` : ''}

  <!-- Footer -->
  <g transform="translate(400, 950)">
    <text x="0" y="0" class="detail-text" text-anchor="middle">🌌 Powered by Roomz on Planet Nine</text>
  </g>
</svg>`;
}

/**
 * Example room listings for seeding
 */
export const exampleRooms = [
  {
    name: 'Cozy Downtown Studio',
    dateAvailable: new Date('2025-11-01'),
    beds: 1,
    baths: 1,
    size: 650,
    monthlyRent: 55000, // $550/month
    deposit: 55000, // $550 deposit
    roomPic: 'room1.png',
    description: 'Beautiful studio apartment in the heart of downtown with modern finishes and natural light.',
    amenities: ['In-unit laundry', 'Dishwasher', 'Hardwood floors', 'High-speed internet', 'Pet-friendly'],
    address: '123 Main Street, Apt 4B',
    neighborhood: 'Downtown'
  },
  {
    name: 'Spacious 2BR Near Transit',
    dateAvailable: new Date('2025-11-15'),
    beds: 2,
    baths: 1.5,
    size: 950,
    monthlyRent: 65000, // $650/month
    deposit: 65000, // $650 deposit
    roomPic: 'room2.png',
    description: 'Bright 2-bedroom apartment just steps from the metro station. Perfect for commuters!',
    amenities: ['Central AC', 'Balcony', 'Parking space', 'Storage unit', 'Gym access'],
    address: '456 Transit Ave, Unit 12',
    neighborhood: 'Midtown'
  },
  {
    name: 'Luxury 3BR Penthouse',
    dateAvailable: new Date('2025-12-01'),
    beds: 3,
    baths: 2,
    size: 1400,
    monthlyRent: 70000, // $700/month
    deposit: 70000, // $700 deposit
    roomPic: 'room3.png',
    description: 'Stunning penthouse with panoramic city views, chef\'s kitchen, and modern amenities throughout.',
    amenities: [
      'Roof deck access',
      'Stainless appliances',
      'Walk-in closets',
      'Concierge service',
      'In-unit W/D',
      'Smart home features'
    ],
    address: '789 Skyline Blvd, Penthouse',
    neighborhood: 'Uptown'
  }
];
