/**
 * Literary Examples for Test Environment
 *
 * These literary posts demonstrate:
 * - Book cards with cover images, descriptions, and buy/save buttons
 * - Article cards linking to external content (e.g., Medium)
 * - Save spell for adding to carrierBag "bookshelf" collection
 * - Purchase spell for buying books
 */

import sessionless from 'sessionless-node';

export const literaryPosts = [
  {
    id: 'book-the-digital-garden-001',
    uuid: sessionless.generateUUID(),
    type: 'book',
    title: 'The Digital Garden: Cultivating Creativity in the Information Age',
    author: 'Sarah Chen',
    description: 'A philosophical exploration of how we organize, nurture, and share knowledge in the digital age. Learn to build your own digital garden and cultivate ideas that flourish.',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    price: 1999, // $19.99
    isbn: '978-1234567890',
    publisher: 'TechThought Press',
    publishDate: '2024-03-15',
    pages: 284,
    category: 'technology',
    tags: ['digital-garden', 'knowledge-management', 'creativity', 'productivity'],
    purchaseUrl: 'https://example.com/buy/digital-garden',
    metadata: {
      available: true,
      format: 'Hardcover & eBook',
      rating: 4.7,
      reviews: 342
    }
  },
  {
    id: 'book-quiet-revolution-002',
    uuid: sessionless.generateUUID(),
    type: 'book',
    title: 'The Quiet Revolution: Finding Peace in a Noisy World',
    author: 'Marcus Williams',
    description: 'In a world of constant notifications and endless noise, discover the transformative power of silence and stillness. A practical guide to reclaiming your inner peace.',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
    price: 2499, // $24.99
    isbn: '978-0987654321',
    publisher: 'Mindful Books',
    publishDate: '2024-01-20',
    pages: 312,
    category: 'self-help',
    tags: ['mindfulness', 'meditation', 'mental-health', 'peace'],
    purchaseUrl: 'https://example.com/buy/quiet-revolution',
    metadata: {
      available: true,
      format: 'Paperback & eBook',
      rating: 4.9,
      reviews: 1024
    }
  },
  {
    id: 'book-code-poetry-003',
    uuid: sessionless.generateUUID(),
    type: 'book',
    title: 'Code as Poetry: The Art of Elegant Programming',
    author: 'Elena Rodriguez',
    description: 'Programming is more than logic—it\'s an art form. Explore the aesthetic dimensions of code and learn to write programs that are both functional and beautiful.',
    coverImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400',
    price: 0, // Free/Open Source
    isbn: '978-1122334455',
    publisher: 'Open Source Press',
    publishDate: '2023-11-10',
    pages: 256,
    category: 'programming',
    tags: ['programming', 'software-design', 'clean-code', 'art'],
    purchaseUrl: null, // No purchase - it's free
    metadata: {
      available: true,
      format: 'eBook (Free)',
      rating: 4.8,
      reviews: 567
    }
  },
  {
    id: 'article-medium-write-another-word-004',
    uuid: sessionless.generateUUID(),
    type: 'article',
    title: 'If I Write Another Word',
    author: 'From Medium/Illumination',
    description: 'A thoughtful piece about the creative process, writing, and the struggle to find the perfect words. Sometimes the best thing to do is to keep writing, even when you think you have nothing left to say.',
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400',
    externalUrl: 'https://medium.com/illumination/if-i-write-another-word-dd1e64a8cc5e',
    publishDate: '2024-02-14',
    category: 'writing',
    tags: ['writing', 'creativity', 'medium', 'essay'],
    metadata: {
      platform: 'Medium',
      readTime: '5 min',
      publication: 'Illumination'
    }
  }
];

/**
 * Generate two-button SVG for books with purchase option
 * Button 1: Buy (purchase spell)
 * Button 2: Save (save spell to bookshelf)
 *
 * @param {Object} book - Book object
 * @param {string} bookBDOPubKey - PubKey of this book's BDO
 * @returns {string} SVG string
 */
export function generateBookTwoButtonSVG(book, bookBDOPubKey) {
  const priceDisplay = book.price > 0
    ? `$${(book.price / 100).toFixed(2)}`
    : 'Free';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="400" height="280">
  <defs>
    <linearGradient id="buyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#6d28d9;stop-opacity:1" />
    </linearGradient>

    <filter id="buttonGlow1" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#f59e0b" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="buttonGlow2" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#8b5cf6" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .book-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .book-author {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      fill: #a78bfa;
      text-anchor: middle;
    }
    .book-description {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #d1d5db;
      text-anchor: start;
    }
    .book-price {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 16px;
      font-weight: bold;
      fill: #fbbf24;
      text-anchor: middle;
    }
    .button-rect {
      stroke-width: 2;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .button1 {
      fill: url(#buyGrad);
      stroke: #f59e0b;
    }
    .button1:hover {
      filter: url(#buttonGlow1);
    }
    .button2 {
      fill: url(#saveGrad);
      stroke: #8b5cf6;
    }
    .button2:hover {
      filter: url(#buttonGlow2);
    }
    .button-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
      dominant-baseline: middle;
      pointer-events: none;
    }
  </style>

  <!-- Background -->
  <rect x="0" y="0" width="400" height="280" fill="#1a0033" rx="12"/>

  <!-- Book icon -->
  <text x="200" y="35" text-anchor="middle" font-size="30">📚</text>

  <!-- Book Info -->
  <text class="book-title" x="200" y="70">${book.title.length > 50 ? book.title.substring(0, 47) + '...' : book.title}</text>
  <text class="book-author" x="200" y="90">by ${book.author}</text>

  <!-- Description (wrapped) -->
  <text class="book-description" x="20" y="115">${book.description.substring(0, 80)}...</text>
  <text class="book-description" x="20" y="130">${book.description.substring(80, 160)}...</text>

  <!-- Price -->
  <text class="book-price" x="200" y="165">${priceDisplay}</text>

  <!-- Two buttons side-by-side -->

  <!-- Button 1: Buy -->
  <rect
    class="button-rect button1"
    id="button1"
    x="20"
    y="190"
    width="175"
    height="70"
    rx="12"
    spell="purchase"
    spell-components='{"bdoPubKey":"${bookBDOPubKey}","amount":${book.price},"productId":"${book.id}","name":"${book.title}"}'
  />
  <text class="button-text" x="107.5" y="225">💰 Buy Now</text>

  <!-- Button 2: Save -->
  <rect
    class="button-rect button2"
    id="button2"
    x="205"
    y="190"
    width="175"
    height="70"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${bookBDOPubKey}","collection":"bookshelf"}'
  />
  <text class="button-text" x="292.5" y="225">📖 Save</text>
</svg>`;
}

/**
 * Generate one-button SVG for free books/articles (save only)
 * Single button with save spell
 *
 * @param {Object} item - Book or article object
 * @param {string} itemBDOPubKey - PubKey of this item's BDO
 * @returns {string} SVG string
 */
export function generateLiteraryOneButtonSVG(item, itemBDOPubKey) {
  const itemType = item.type === 'article' ? '📄' : '📚';
  const buttonText = item.type === 'article' ? '📖 Read & Save' : '📖 Save to Bookshelf';

  // For articles, include external URL in spell components
  const spellComponents = item.type === 'article'
    ? `{"bdoPubKey":"${itemBDOPubKey}","collection":"bookshelf","externalUrl":"${item.externalUrl || ''}"}`
    : `{"bdoPubKey":"${itemBDOPubKey}","collection":"bookshelf"}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="400" height="280">
  <defs>
    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#6d28d9;stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#8b5cf6" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .item-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .item-author {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      fill: #a78bfa;
      text-anchor: middle;
    }
    .item-description {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #d1d5db;
      text-anchor: start;
    }
    .item-badge {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      font-weight: bold;
      fill: #10b981;
      text-anchor: middle;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: #8b5cf6;
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
  <rect x="0" y="0" width="400" height="280" fill="#1a0033" rx="12"/>

  <!-- Item icon -->
  <text x="200" y="35" text-anchor="middle" font-size="30">${itemType}</text>

  <!-- Item Info -->
  <text class="item-title" x="200" y="70">${item.title.length > 50 ? item.title.substring(0, 47) + '...' : item.title}</text>
  <text class="item-author" x="200" y="90">${item.author}</text>

  <!-- Description (wrapped) -->
  <text class="item-description" x="20" y="115">${item.description.substring(0, 80)}...</text>
  <text class="item-description" x="20" y="130">${item.description.substring(80, 160)}...</text>

  <!-- Badge (FREE or platform) -->
  <text class="item-badge" x="200" y="165">${item.type === 'article' ? item.metadata.platform : 'FREE'}</text>

  <!-- Single centered save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="190"
    width="300"
    height="70"
    rx="12"
    spell="save"
    spell-components='${spellComponents}'
  />
  <text class="button-text" x="200" y="225">${buttonText}</text>
</svg>`;
}
