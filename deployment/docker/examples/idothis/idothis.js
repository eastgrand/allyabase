/**
 * IDothis.biz Examples for Test Environment
 *
 * These service provider posts demonstrate:
 * - Professional service listings (plumbers, babysitters, etc.)
 * - Single "Book Now" button for scheduling
 * - Provider profiles with ratings and pricing
 * - Book spell for appointment scheduling
 */

import sessionless from 'sessionless-node';

export const idothisPosts = [
  {
    id: 'plumber-mike-001',
    uuid: sessionless.generateUUID(),
    type: 'service-provider',
    serviceType: 'plumbing',
    providerName: 'Mike\'s Plumbing Services',
    contactName: 'Mike Rodriguez',
    description: 'Licensed plumber with 15+ years experience. Specializing in emergency repairs, drain cleaning, water heater installation, and bathroom remodels. Available 24/7 for emergencies.',
    profileImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400',
    hourlyRate: 8500, // $85.00/hour
    services: [
      'Emergency Repairs',
      'Drain Cleaning',
      'Water Heater Installation',
      'Bathroom Remodels',
      'Leak Detection',
      'Pipe Replacement'
    ],
    availability: '24/7 Emergency Service',
    serviceArea: 'Portland Metro Area',
    yearsExperience: 15,
    licensed: true,
    insured: true,
    phone: '(503) 555-0123',
    email: 'mike@mikesplumbing.com',
    category: 'home-services',
    tags: ['plumbing', 'emergency-service', 'licensed', 'insured', 'portland'],
    metadata: {
      rating: 4.9,
      reviewCount: 247,
      responseTime: '< 1 hour',
      completedJobs: 1500
    }
  },
  {
    id: 'babysitter-sarah-002',
    uuid: sessionless.generateUUID(),
    type: 'service-provider',
    serviceType: 'childcare',
    providerName: 'Sarah\'s Childcare',
    contactName: 'Sarah Chen',
    description: 'Experienced and certified babysitter with CPR/First Aid training. Patient, creative, and nurturing care for children ages 6 months to 12 years. References available upon request.',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    hourlyRate: 2500, // $25.00/hour
    services: [
      'Evening Babysitting',
      'Weekend Care',
      'Homework Help',
      'Meal Preparation',
      'Light Housekeeping',
      'Bedtime Routines'
    ],
    availability: 'Evenings & Weekends',
    serviceArea: 'Portland, Beaverton, Hillsboro',
    yearsExperience: 8,
    certified: true,
    backgroundCheck: true,
    phone: '(503) 555-0456',
    email: 'sarah@sarahschildcare.com',
    category: 'childcare',
    tags: ['babysitter', 'childcare', 'certified', 'cpr-trained', 'portland'],
    metadata: {
      rating: 5.0,
      reviewCount: 89,
      responseTime: '< 2 hours',
      ageRange: '6 months - 12 years',
      specialties: ['Toddlers', 'School-age', 'Multiple children']
    }
  }
];

/**
 * Generate one-button SVG for service providers with "Book Now" button
 *
 * @param {Object} provider - Service provider object
 * @param {string} providerBDOPubKey - PubKey of this provider's BDO
 * @returns {string} SVG string
 */
export function generateIdothisBookNowSVG(provider, providerBDOPubKey) {
  const rateDisplay = `$${(provider.hourlyRate / 100).toFixed(2)}/hr`;
  const serviceIcon = provider.serviceType === 'plumbing' ? '🔧' : '👶';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" width="400" height="320">
  <defs>
    <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3498db;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2980b9;stop-opacity:1" />
    </linearGradient>

    <filter id="bookGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#3498db" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .provider-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 20px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .provider-name {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      fill: #a78bfa;
      text-anchor: middle;
    }
    .provider-description {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #d1d5db;
      text-anchor: start;
    }
    .provider-rate {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: #10b981;
      text-anchor: middle;
    }
    .provider-badge {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #fbbf24;
      text-anchor: middle;
    }
    .book-button {
      fill: url(#bookGrad);
      stroke: #3498db;
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .book-button:hover {
      filter: url(#bookGlow);
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

  <!-- Service icon -->
  <text x="200" y="35" text-anchor="middle" font-size="30">${serviceIcon}</text>

  <!-- Provider Info -->
  <text class="provider-title" x="200" y="70">${provider.providerName}</text>
  <text class="provider-name" x="200" y="90">by ${provider.contactName}</text>

  <!-- Description (wrapped) -->
  <text class="provider-description" x="20" y="115">${provider.description.substring(0, 75)}...</text>
  <text class="provider-description" x="20" y="130">${provider.description.substring(75, 150)}...</text>
  <text class="provider-description" x="20" y="145">${provider.description.substring(150, 225)}...</text>

  <!-- Badges -->
  <text class="provider-badge" x="100" y="175">⭐ ${provider.metadata.rating} (${provider.metadata.reviewCount} reviews)</text>
  <text class="provider-badge" x="300" y="175">${provider.availability}</text>

  <!-- Services -->
  <text class="provider-description" x="20" y="200">Services: ${provider.services.slice(0, 3).join(', ')}</text>

  <!-- Rate -->
  <text class="provider-rate" x="200" y="230">${rateDisplay}</text>

  <!-- Book Now button (centered) -->
  <rect
    class="book-button"
    id="button1"
    x="50"
    y="250"
    width="300"
    height="60"
    rx="12"
    spell="book"
    spell-components='{"bdoPubKey":"${providerBDOPubKey}","providerName":"${provider.providerName}","serviceType":"${provider.serviceType}","hourlyRate":${provider.hourlyRate},"phone":"${provider.phone}","email":"${provider.email}"}'
  />
  <text class="button-text" x="200" y="280">📅 Book Now</text>
</svg>`;
}
