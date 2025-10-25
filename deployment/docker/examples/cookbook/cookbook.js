/**
 * Cookbook Examples for Test Environment
 *
 * These recipe posts demonstrate:
 * - Recipe cards with ingredients, instructions, and cooking times
 * - Save spell for adding to carrierBag "cookbook" collection
 * - Different difficulty levels and cuisines
 */

import sessionless from 'sessionless-node';

export const cookbookPosts = [
  {
    id: 'recipe-chocolate-chip-cookies-001',
    uuid: sessionless.generateUUID(),
    type: 'recipe',
    title: 'Classic Chocolate Chip Cookies',
    author: 'Chef Sarah Baker',
    description: 'Perfectly chewy cookies with crispy edges and gooey chocolate chips. A timeless favorite that never disappoints.',
    cuisine: 'American',
    difficulty: 'Easy',
    prepTime: '15 minutes',
    cookTime: '12 minutes',
    totalTime: '27 minutes',
    servings: 24,
    ingredients: [
      '2¼ cups all-purpose flour',
      '1 tsp baking soda',
      '1 tsp salt',
      '1 cup butter, softened',
      '¾ cup granulated sugar',
      '¾ cup packed brown sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '2 cups chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C)',
      'Mix flour, baking soda, and salt in a bowl',
      'Beat butter and sugars until creamy',
      'Add eggs and vanilla, beat well',
      'Gradually blend in flour mixture',
      'Stir in chocolate chips',
      'Drop rounded tablespoons onto ungreased baking sheets',
      'Bake 9-11 minutes until golden brown',
      'Cool on baking sheet for 2 minutes before transferring'
    ],
    category: 'dessert',
    tags: ['cookies', 'chocolate', 'baking', 'classic', 'dessert'],
    imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400',
    metadata: {
      caloriesPerServing: 185,
      dietary: ['vegetarian'],
      equipment: ['mixing bowl', 'baking sheet', 'electric mixer']
    }
  },
  {
    id: 'recipe-roasted-vegetable-soup-002',
    uuid: sessionless.generateUUID(),
    type: 'recipe',
    title: 'Roasted Vegetable Soup',
    author: 'Chef Marcus Green',
    description: 'A hearty, warming soup packed with seasonal vegetables, roasted to perfection for deep, caramelized flavors.',
    cuisine: 'Mediterranean',
    difficulty: 'Medium',
    prepTime: '20 minutes',
    cookTime: '45 minutes',
    totalTime: '1 hour 5 minutes',
    servings: 6,
    ingredients: [
      '3 carrots, chopped',
      '2 red bell peppers, chopped',
      '1 large onion, quartered',
      '4 cloves garlic',
      '2 tbsp olive oil',
      '6 cups vegetable stock',
      '1 can (14oz) diced tomatoes',
      '1 tsp smoked paprika',
      '½ tsp cumin',
      'Fresh basil for garnish',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C)',
      'Toss vegetables with olive oil, salt, and pepper',
      'Spread on baking sheet and roast for 30 minutes',
      'Transfer roasted vegetables to large pot',
      'Add stock, tomatoes, and spices',
      'Bring to boil, then simmer for 15 minutes',
      'Blend until smooth (or leave chunky if preferred)',
      'Adjust seasoning and garnish with fresh basil'
    ],
    category: 'soup',
    tags: ['soup', 'vegetables', 'healthy', 'vegan', 'comfort-food'],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400',
    metadata: {
      caloriesPerServing: 145,
      dietary: ['vegan', 'gluten-free', 'dairy-free'],
      equipment: ['baking sheet', 'large pot', 'immersion blender']
    }
  }
];

/**
 * Generate SVG for recipe card
 * Single button with save spell to cookbook collection
 *
 * @param {Object} recipe - Recipe object
 * @param {string} recipeBDOPubKey - PubKey of this recipe's BDO
 * @returns {string} SVG string
 */
export function generateRecipeSVG(recipe, recipeBDOPubKey) {
  // Truncate ingredients list for display
  const displayIngredients = recipe.ingredients.slice(0, 3);
  const moreIngredients = recipe.ingredients.length > 3 ? `+ ${recipe.ingredients.length - 3} more` : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" width="400" height="320">
  <defs>
    <linearGradient id="saveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
    </linearGradient>

    <filter id="saveGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood flood-color="#f59e0b" flood-opacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .recipe-title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 18px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
    }
    .recipe-author {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12px;
      fill: #fb923c;
      text-anchor: middle;
    }
    .recipe-meta {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #fbbf24;
      text-anchor: start;
    }
    .recipe-description {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      fill: #d1d5db;
      text-anchor: start;
    }
    .ingredient-text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10px;
      fill: #9ca3af;
      text-anchor: start;
    }
    .save-button {
      fill: url(#saveGrad);
      stroke: #f59e0b;
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
  <rect x="0" y="0" width="400" height="320" fill="#1a0033" rx="12"/>

  <!-- Recipe icon -->
  <text x="200" y="35" text-anchor="middle" font-size="30">🍪</text>

  <!-- Recipe Info -->
  <text class="recipe-title" x="200" y="70">${recipe.title.length > 40 ? recipe.title.substring(0, 37) + '...' : recipe.title}</text>
  <text class="recipe-author" x="200" y="88">${recipe.author}</text>

  <!-- Meta info -->
  <text class="recipe-meta" x="20" y="110">⏱️ ${recipe.totalTime}</text>
  <text class="recipe-meta" x="150" y="110">👥 ${recipe.servings} servings</text>
  <text class="recipe-meta" x="280" y="110">📊 ${recipe.difficulty}</text>

  <!-- Description -->
  <text class="recipe-description" x="20" y="135">${recipe.description.substring(0, 65)}...</text>
  <text class="recipe-description" x="20" y="150">${recipe.description.substring(65, 130)}...</text>

  <!-- Ingredients preview -->
  <text class="recipe-meta" x="20" y="175">Ingredients:</text>
  ${displayIngredients.map((ing, i) =>
    `<text class="ingredient-text" x="20" y="${190 + (i * 15)}">• ${ing.length > 50 ? ing.substring(0, 47) + '...' : ing}</text>`
  ).join('\n  ')}
  ${moreIngredients ? `<text class="ingredient-text" x="20" y="${190 + (displayIngredients.length * 15)}">${moreIngredients}</text>` : ''}

  <!-- Single centered save button -->
  <rect
    class="save-button"
    id="button1"
    x="50"
    y="250"
    width="300"
    height="50"
    rx="12"
    spell="save"
    spell-components='{"bdoPubKey":"${recipeBDOPubKey}","collection":"cookbook"}'
  />
  <text class="button-text" x="200" y="275">📖 Save Recipe</text>
</svg>`;
}
