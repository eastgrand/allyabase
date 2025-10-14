/**
 * Product Generator for Sanora/Ninefy
 * Sample products for seeding e-commerce marketplace
 */

export const generateSampleProducts = () => [
  {
    title: 'Peace Love and Redistribution T-Shirt',
    description: 'Classic unisex t-shirt promoting equality and social justice. 100% organic cotton, ethically made.',
    price: 2900,
    tags: ['apparel', 't-shirt', 'social-justice', 'organic'],
    category: 'apparel',
    contentType: 'physical',
    productId: 'peace-love-redistribution-tshirt'
  },
  {
    title: 'UI Design System Template',
    description: 'Complete Figma template with components, tokens, and documentation for building consistent user interfaces.',
    price: 4900,
    tags: ['figma', 'design-system', 'ui', 'templates'],
    category: 'template',
    contentType: 'figma',
    productId: 'ui-design-system-template'
  },
  {
    title: 'Python Data Analysis Toolkit',
    description: 'Collection of Python scripts and Jupyter notebooks for data cleaning, visualization, and statistical analysis.',
    price: 2900,
    tags: ['python', 'data-analysis', 'jupyter', 'statistics'],
    category: 'toolkit',
    contentType: 'code',
    productId: 'python-data-analysis-toolkit'
  },
  {
    title: 'SEO Audit Checklist',
    description: 'Comprehensive 50-point checklist for conducting thorough SEO audits of websites and web applications.',
    price: 1900,
    tags: ['seo', 'marketing', 'audit', 'checklist'],
    category: 'ebook',
    contentType: 'pdf',
    productId: 'seo-audit-checklist'
  },
  {
    title: 'Cybersecurity Assessment Framework',
    description: 'Professional framework for conducting security assessments, including templates, checklists, and reporting tools.',
    price: 14900,
    tags: ['cybersecurity', 'assessment', 'framework', 'enterprise'],
    category: 'framework',
    contentType: 'pdf',
    productId: 'cybersecurity-assessment-framework'
  },
  {
    title: 'Agile Project Planning Templates',
    description: 'Set of project planning templates for Scrum teams, including sprint planning, retrospectives, and roadmaps.',
    price: 3900,
    tags: ['agile', 'scrum', 'project-management', 'templates'],
    category: 'template',
    contentType: 'spreadsheet',
    productId: 'agile-project-planning-templates'
  },
  {
    title: 'Docker & Kubernetes Workshop',
    description: 'Hands-on workshop covering containerization with Docker and orchestration with Kubernetes.',
    price: 19900,
    tags: ['docker', 'kubernetes', 'devops', 'containers'],
    category: 'workshop',
    contentType: 'video',
    productId: 'docker-kubernetes-workshop'
  },
  {
    title: 'API Documentation Starter Kit',
    description: 'Complete starter kit for creating beautiful API documentation with examples, templates, and best practices.',
    price: 2900,
    tags: ['api', 'documentation', 'technical-writing', 'templates'],
    category: 'toolkit',
    contentType: 'markdown',
    productId: 'api-documentation-starter-kit'
  },
  {
    title: 'Startup Growth Strategy Guide',
    description: 'Comprehensive guide covering growth strategies, metrics, and frameworks for scaling early-stage startups.',
    price: 7900,
    tags: ['startup', 'growth', 'strategy', 'business'],
    category: 'ebook',
    contentType: 'pdf',
    productId: 'startup-growth-strategy-guide'
  }
];

/**
 * Blog Post Generator for Sanora/Rhapsold
 * Sample blog posts for content seeding
 */
export const generateBlogPosts = () => [
  {
    title: 'The Future of Web Development in 2025',
    description: 'Exploring emerging trends in web development, from AI-powered tools to new frameworks and developer experiences.',
    url: 'https://example.com/future-web-dev-2025',
    tags: ['web-development', 'trends', '2025', 'ai'],
    category: 'blog',
    price: 0 // Blog posts are free
  },
  {
    title: 'Building Accessible UIs: A Complete Guide',
    description: 'Learn how to create user interfaces that work for everyone, including best practices for accessibility and inclusive design.',
    url: 'https://example.com/accessible-ui-guide',
    tags: ['accessibility', 'ui', 'inclusive-design', 'a11y'],
    category: 'blog',
    price: 0
  },
  {
    title: 'Data Privacy in the Age of AI',
    description: 'Examining the challenges and opportunities of maintaining data privacy while leveraging artificial intelligence.',
    url: 'https://example.com/data-privacy-ai',
    tags: ['data-privacy', 'ai', 'security', 'ethics'],
    category: 'blog',
    price: 0
  },
  {
    title: 'Remote Team Management Best Practices',
    description: 'Strategies for effectively managing distributed teams, maintaining culture, and ensuring productivity.',
    url: 'https://example.com/remote-team-management',
    tags: ['remote-work', 'team-management', 'productivity', 'culture'],
    category: 'blog',
    price: 0
  },
  {
    title: 'Understanding Modern CI/CD Pipelines',
    description: 'A deep dive into continuous integration and deployment practices for modern software development.',
    url: 'https://example.com/modern-cicd-pipelines',
    tags: ['ci-cd', 'devops', 'automation', 'software-development'],
    category: 'blog',
    price: 0
  },
  {
    title: 'Creating Technical Documentation That Developers Love',
    description: 'Tips and techniques for writing technical documentation that is clear, useful, and maintainable.',
    url: 'https://example.com/technical-documentation-tips',
    tags: ['technical-writing', 'documentation', 'developer-experience', 'communication'],
    category: 'blog',
    price: 0
  },
  {
    title: 'Scaling Startups: Lessons from the Trenches',
    description: 'Real-world insights and lessons learned from helping startups navigate growth challenges.',
    url: 'https://example.com/scaling-startups-lessons',
    tags: ['startup', 'scaling', 'growth', 'lessons-learned'],
    category: 'blog',
    price: 0
  },
  {
    title: 'The Psychology of User Experience Design',
    description: 'How psychological principles can inform better UX design decisions and improve user satisfaction.',
    url: 'https://example.com/psychology-ux-design',
    tags: ['ux', 'psychology', 'user-behavior', 'design-principles'],
    category: 'blog',
    price: 0
  },
  {
    title: 'Cybersecurity for Small Businesses',
    description: 'Essential cybersecurity practices that small businesses can implement without breaking the bank.',
    url: 'https://example.com/cybersecurity-small-business',
    tags: ['cybersecurity', 'small-business', 'security-practices', 'budget-friendly'],
    category: 'blog',
    price: 0
  }
];

export default {
  generateSampleProducts,
  generateBlogPosts
};
