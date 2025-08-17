#!/usr/bin/env node

/**
 * Planet Nine Ecosystem Data Seeder
 * 
 * Seeds local/test environments with sample data across all services:
 * - Dolores: Social posts  
 * - Prof: Profiles for IDothis and MyBase
 * - Sanora: Products for Ninefy, blog posts for Rhapsold
 * - Covenant: Sample contracts
 * - Julia: Messages for StackChat
 * - BDO: Base discovery data
 * 
 * Usage: node seed-ecosystem.js [environment] [base_number]
 * Environment: 'local' or 'test' (default: test)
 * Base number: 1, 2, or 3 for test environment (default: 1)
 */

import sessionless from 'sessionless-node';
import fetch from 'node-fetch';

// Configuration
const ENVIRONMENT = process.argv[2] || 'test';
const BASE_NUMBER = process.argv[3] || '1';

console.log(`🌱 Planet Nine Ecosystem Seeder`);
console.log(`📍 Environment: ${ENVIRONMENT}`);
console.log(`🏠 Base: ${BASE_NUMBER}`);
console.log('==========================================\n');

// Environment-specific service URLs
const getServiceURLs = (env, baseNum) => {
  if (env === 'local') {
    return {
      dolores: 'http://localhost:3007',
      prof: 'http://localhost:3008',
      sanora: 'http://localhost:7243',
      bdo: 'http://localhost:3003',
      covenant: 'http://localhost:3011',
      julia: 'http://localhost:3000',
      continuebee: 'http://localhost:2999',
      fount: 'http://localhost:3002'
    };
  } else if (env === 'test') {
    const portBase = 5000 + (parseInt(baseNum) * 100);
    return {
      dolores: `http://localhost:${portBase + 18}`,
      prof: `http://localhost:${portBase + 18}`, // Prof is actually dolores port in test
      sanora: `http://localhost:${portBase + 21}`,
      bdo: `http://localhost:${portBase + 14}`,
      covenant: `http://localhost:${portBase + 22}`,
      julia: `http://localhost:${portBase + 11}`,
      continuebee: `http://localhost:${portBase + 12}`,
      fount: `http://localhost:${portBase + 17}`
    };
  } else {
    throw new Error(`Unknown environment: ${env}`);
  }
};

const SERVICES = getServiceURLs(ENVIRONMENT, BASE_NUMBER);

// HTTP helper functions
const post = async (url, payload) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`HTTP ${response.status}: ${error}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`❌ POST ${url} failed:`, error.message);
    throw error;
  }
};

const put = async (url, payload) => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`HTTP ${response.status}: ${error}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`❌ PUT ${url} failed:`, error.message);
    throw error;
  }
};

const get = async (url) => {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`HTTP ${response.status}: ${error}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`❌ GET ${url} failed:`, error.message);
    throw error;
  }
};

// Sample data generators
const generateSampleUsers = () => [
  {
    name: 'Alice Developer',
    email: 'alice@example.com',
    bio: 'Full-stack developer passionate about web technologies and user experience.',
    skills: ['JavaScript', 'React', 'Node.js', 'Python'],
    website: 'https://alice-dev.com',
    location: 'San Francisco, CA',
    idothis: 'Full-stack web development'
  },
  {
    name: 'Bob Designer',
    email: 'bob@example.com',
    bio: 'UI/UX designer creating beautiful and intuitive user interfaces.',
    skills: ['Figma', 'Sketch', 'Adobe Creative Suite'],
    website: 'https://bob-design.com',
    location: 'New York, NY',
    idothis: 'UI/UX design and prototyping'
  },
  {
    name: 'Charlie Analytics',
    email: 'charlie@example.com',
    bio: 'Data analyst helping businesses make informed decisions through data insights.',
    skills: ['Python', 'SQL', 'Tableau', 'Machine Learning'],
    website: 'https://charlie-data.com',
    location: 'Austin, TX',
    idothis: 'Data analysis and business intelligence'
  },
  {
    name: 'Diana Marketing',
    email: 'diana@example.com',
    bio: 'Digital marketing strategist specializing in content marketing and SEO.',
    skills: ['Content Strategy', 'SEO', 'Google Analytics', 'Social Media'],
    website: 'https://diana-marketing.com',
    location: 'Los Angeles, CA',
    idothis: 'Digital marketing and content strategy'
  },
  {
    name: 'Eve Security',
    email: 'eve@example.com',
    bio: 'Cybersecurity expert protecting digital assets and infrastructure.',
    skills: ['Penetration Testing', 'Network Security', 'Incident Response'],
    website: 'https://eve-security.com',
    location: 'Washington, DC',
    idothis: 'Cybersecurity consulting and auditing'
  },
  {
    name: 'Frank Project Manager',
    email: 'frank@example.com',
    bio: 'Agile project manager coordinating teams to deliver successful software projects.',
    skills: ['Scrum', 'Kanban', 'Risk Management', 'Team Leadership'],
    website: 'https://frank-pm.com',
    location: 'Seattle, WA',
    idothis: 'Agile project management and team coordination'
  },
  {
    name: 'Grace DevOps',
    email: 'grace@example.com',
    bio: 'DevOps engineer automating infrastructure and deployment processes.',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD'],
    website: 'https://grace-devops.com',
    location: 'Portland, OR',
    idothis: 'DevOps engineering and cloud infrastructure'
  },
  {
    name: 'Henry Writer',
    email: 'henry@example.com',
    bio: 'Technical writer creating clear documentation and engaging content.',
    skills: ['Technical Writing', 'Content Creation', 'API Documentation'],
    website: 'https://henry-writes.com',
    location: 'Boston, MA',
    idothis: 'Technical writing and documentation'
  },
  {
    name: 'Iris Consultant',
    email: 'iris@example.com',
    bio: 'Business consultant helping startups scale and optimize operations.',
    skills: ['Strategic Planning', 'Process Optimization', 'Market Analysis'],
    website: 'https://iris-consulting.com',
    location: 'Chicago, IL',
    idothis: 'Business strategy and operations consulting'
  }
];

const generateSampleProducts = () => [
  {
    title: 'React Mastery Course',
    description: 'Comprehensive course covering React fundamentals to advanced patterns. Learn hooks, context, testing, and performance optimization.',
    price: 9900, // $99.00 in cents
    tags: ['react', 'javascript', 'frontend', 'web-development'],
    category: 'course',
    contentType: 'video'
  },
  {
    title: 'UI Design System Template',
    description: 'Complete Figma template with components, tokens, and documentation for building consistent user interfaces.',
    price: 4900,
    tags: ['figma', 'design-system', 'ui', 'templates'],
    category: 'template',
    contentType: 'figma'
  },
  {
    title: 'Python Data Analysis Toolkit',
    description: 'Collection of Python scripts and Jupyter notebooks for data cleaning, visualization, and statistical analysis.',
    price: 2900,
    tags: ['python', 'data-analysis', 'jupyter', 'statistics'],
    category: 'toolkit',
    contentType: 'code'
  },
  {
    title: 'SEO Audit Checklist',
    description: 'Comprehensive 50-point checklist for conducting thorough SEO audits of websites and web applications.',
    price: 1900,
    tags: ['seo', 'marketing', 'audit', 'checklist'],
    category: 'ebook',
    contentType: 'pdf'
  },
  {
    title: 'Cybersecurity Assessment Framework',
    description: 'Professional framework for conducting security assessments, including templates, checklists, and reporting tools.',
    price: 14900,
    tags: ['cybersecurity', 'assessment', 'framework', 'enterprise'],
    category: 'framework',
    contentType: 'pdf'
  },
  {
    title: 'Agile Project Planning Templates',
    description: 'Set of project planning templates for Scrum teams, including sprint planning, retrospectives, and roadmaps.',
    price: 3900,
    tags: ['agile', 'scrum', 'project-management', 'templates'],
    category: 'template',
    contentType: 'spreadsheet'
  },
  {
    title: 'Docker & Kubernetes Workshop',
    description: 'Hands-on workshop covering containerization with Docker and orchestration with Kubernetes.',
    price: 19900,
    tags: ['docker', 'kubernetes', 'devops', 'containers'],
    category: 'workshop',
    contentType: 'video'
  },
  {
    title: 'API Documentation Starter Kit',
    description: 'Complete starter kit for creating beautiful API documentation with examples, templates, and best practices.',
    price: 2900,
    tags: ['api', 'documentation', 'technical-writing', 'templates'],
    category: 'toolkit',
    contentType: 'markdown'
  },
  {
    title: 'Startup Growth Strategy Guide',
    description: 'Comprehensive guide covering growth strategies, metrics, and frameworks for scaling early-stage startups.',
    price: 7900,
    tags: ['startup', 'growth', 'strategy', 'business'],
    category: 'ebook',
    contentType: 'pdf'
  }
];

const generateBlogPosts = () => [
  {
    title: 'The Future of Web Development in 2025',
    description: 'Exploring emerging trends in web development, from AI-powered tools to new frameworks and developer experiences.',
    url: 'https://example.com/future-web-dev-2025',
    tags: ['web-development', 'trends', '2025', 'ai'],
    category: 'blog'
  },
  {
    title: 'Building Accessible UIs: A Complete Guide',
    description: 'Learn how to create user interfaces that work for everyone, including best practices for accessibility and inclusive design.',
    url: 'https://example.com/accessible-ui-guide',
    tags: ['accessibility', 'ui', 'inclusive-design', 'a11y'],
    category: 'blog'
  },
  {
    title: 'Data Privacy in the Age of AI',
    description: 'Examining the challenges and opportunities of maintaining data privacy while leveraging artificial intelligence.',
    url: 'https://example.com/data-privacy-ai',
    tags: ['data-privacy', 'ai', 'security', 'ethics'],
    category: 'blog'
  },
  {
    title: 'Remote Team Management Best Practices',
    description: 'Strategies for effectively managing distributed teams, maintaining culture, and ensuring productivity.',
    url: 'https://example.com/remote-team-management',
    tags: ['remote-work', 'team-management', 'productivity', 'culture'],
    category: 'blog'
  },
  {
    title: 'Understanding Modern CI/CD Pipelines',
    description: 'A deep dive into continuous integration and deployment practices for modern software development.',
    url: 'https://example.com/modern-cicd-pipelines',
    tags: ['ci-cd', 'devops', 'automation', 'software-development'],
    category: 'blog'
  },
  {
    title: 'Creating Technical Documentation That Developers Love',
    description: 'Tips and techniques for writing technical documentation that is clear, useful, and maintainable.',
    url: 'https://example.com/technical-documentation-tips',
    tags: ['technical-writing', 'documentation', 'developer-experience', 'communication'],
    category: 'blog'
  },
  {
    title: 'Scaling Startups: Lessons from the Trenches',
    description: 'Real-world insights and lessons learned from helping startups navigate growth challenges.',
    url: 'https://example.com/scaling-startups-lessons',
    tags: ['startup', 'scaling', 'growth', 'lessons-learned'],
    category: 'blog'
  },
  {
    title: 'The Psychology of User Experience Design',
    description: 'How psychological principles can inform better UX design decisions and improve user satisfaction.',
    url: 'https://example.com/psychology-ux-design',
    tags: ['ux', 'psychology', 'user-behavior', 'design-principles'],
    category: 'blog'
  },
  {
    title: 'Cybersecurity for Small Businesses',
    description: 'Essential cybersecurity practices that small businesses can implement without breaking the bank.',
    url: 'https://example.com/cybersecurity-small-business',
    tags: ['cybersecurity', 'small-business', 'security-practices', 'budget-friendly'],
    category: 'blog'
  }
];

const generateSocialPosts = () => [
  {
    content: '🚀 Just shipped a new feature using React 18\'s concurrent features! The user experience improvements are incredible. Anyone else experimenting with the new APIs?',
    author: 'Alice Developer',
    tags: ['react', 'web-development', 'javascript'],
    type: 'text'
  },
  {
    content: '✨ Finished designing a new design system for our team. Consistency across products has improved dramatically. The power of systematic design! 🎨',
    author: 'Bob Designer',
    tags: ['design-system', 'ui-ux', 'design'],
    type: 'text'
  },
  {
    content: '📊 Analyzed user behavior data and found some surprising insights about mobile vs desktop usage patterns. Data never ceases to amaze me!',
    author: 'Charlie Analytics',
    tags: ['data-analysis', 'user-behavior', 'insights'],
    type: 'text'
  },
  {
    content: '🎯 Latest SEO campaign resulted in 150% increase in organic traffic! Content strategy and technical SEO working hand in hand.',
    author: 'Diana Marketing',
    tags: ['seo', 'marketing', 'content-strategy'],
    type: 'text'
  },
  {
    content: '🔒 Completed a penetration test that revealed critical vulnerabilities. The importance of regular security audits cannot be overstated.',
    author: 'Eve Security',
    tags: ['cybersecurity', 'penetration-testing', 'security-audit'],
    type: 'text'
  },
  {
    content: '⚡ Successfully migrated our entire infrastructure to Kubernetes. The scalability and reliability improvements are game-changing!',
    author: 'Grace DevOps',
    tags: ['kubernetes', 'devops', 'infrastructure'],
    type: 'text'
  },
  {
    content: '📝 Just published comprehensive API documentation that reduced support tickets by 40%. Good docs = happy developers!',
    author: 'Henry Writer',
    tags: ['technical-writing', 'api-documentation', 'developer-experience'],
    type: 'text'
  },
  {
    content: '💡 Helped a startup optimize their operations and reduce costs by 30%. Strategic thinking + execution = results!',
    author: 'Iris Consultant',
    tags: ['business-consulting', 'startup', 'optimization'],
    type: 'text'
  },
  {
    content: '🎉 Team successfully delivered project 2 weeks ahead of schedule using agile methodologies. Clear communication is key!',
    author: 'Frank Project Manager',
    tags: ['project-management', 'agile', 'team-success'],
    type: 'text'
  }
];

const generateContracts = () => [
  {
    title: 'Website Development Agreement',
    description: 'Contract for developing a modern e-commerce website with payment integration',
    participants: 2,
    steps: [
      'Requirements gathering and wireframing',
      'UI/UX design and client approval',
      'Frontend development',
      'Backend and payment integration',
      'Testing and quality assurance',
      'Deployment and training'
    ]
  },
  {
    title: 'Digital Marketing Campaign',
    description: 'Three-month digital marketing campaign for startup launch',
    participants: 2,
    steps: [
      'Market research and competitor analysis',
      'Content strategy development',
      'Campaign creation and setup',
      'Performance monitoring and optimization',
      'Final reporting and recommendations'
    ]
  },
  {
    title: 'Security Audit Engagement',
    description: 'Comprehensive cybersecurity assessment for enterprise client',
    participants: 3,
    steps: [
      'Initial security assessment',
      'Penetration testing',
      'Vulnerability analysis',
      'Report generation',
      'Remediation guidance',
      'Follow-up verification'
    ]
  },
  {
    title: 'DevOps Infrastructure Setup',
    description: 'Cloud infrastructure setup with CI/CD pipeline implementation',
    participants: 2,
    steps: [
      'Requirements analysis',
      'Infrastructure planning',
      'CI/CD pipeline setup',
      'Monitoring implementation',
      'Documentation and training'
    ]
  },
  {
    title: 'Business Strategy Consulting',
    description: 'Strategic planning engagement for scaling technology startup',
    participants: 2,
    steps: [
      'Business model analysis',
      'Market opportunity assessment',
      'Growth strategy development',
      'Implementation roadmap',
      'Success metrics definition'
    ]
  },
  {
    title: 'API Documentation Project',
    description: 'Complete API documentation overhaul for developer platform',
    participants: 2,
    steps: [
      'API inventory and analysis',
      'Documentation structure planning',
      'Content creation and examples',
      'Review and feedback integration',
      'Publication and developer onboarding'
    ]
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Custom analytics dashboard development for business intelligence',
    participants: 2,
    steps: [
      'Data requirements gathering',
      'Dashboard design and mockups',
      'Data pipeline development',
      'Visualization implementation',
      'User training and handoff'
    ]
  },
  {
    title: 'UX Research and Design',
    description: 'User experience research and redesign for mobile application',
    participants: 2,
    steps: [
      'User research and interviews',
      'Usability testing',
      'Design concept development',
      'Prototype creation',
      'Final design delivery'
    ]
  },
  {
    title: 'Project Management Consulting',
    description: 'Agile transformation and project management process improvement',
    participants: 2,
    steps: [
      'Current process assessment',
      'Agile framework selection',
      'Team training and onboarding',
      'Process implementation',
      'Performance measurement and optimization'
    ]
  }
];

// Service interaction classes
class ProfSeeder {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.users = [];
  }

  async createUser() {
    const keys = await sessionless.generateKeys();
    return {
      uuid: keys.uuid,
      pubKey: keys.pubKey,
      privateKey: keys.privateKey
    };
  }

  async createProfile(user, profileData) {
    try {
      const timestamp = new Date().getTime();
      const hash = sessionless.generateUUID();
      const signature = sessionless.sign(user.privateKey, user.uuid, timestamp);

      const response = await post(`${this.baseURL}/user/${user.uuid}/profile`, {
        uuid: user.uuid,
        timestamp,
        hash,
        signature,
        profileData: {
          ...profileData,
          additional_fields: {
            idothis: profileData.idothis
          }
        }
      });

      return response;
    } catch (error) {
      console.error(`Failed to create profile for ${profileData.name}:`, error.message);
      return null;
    }
  }

  async seedProfiles() {
    console.log('👥 Seeding Prof service with user profiles...');
    
    const sampleUsers = generateSampleUsers();
    
    for (const userData of sampleUsers) {
      try {
        const user = await this.createUser();
        const profile = await this.createProfile(user, userData);
        
        if (profile) {
          this.users.push({ ...user, profile: userData });
          console.log(`  ✅ Created profile: ${userData.name}`);
        }
      } catch (error) {
        console.error(`  ❌ Failed to create profile for ${userData.name}:`, error.message);
      }
    }
    
    console.log(`📊 Prof seeding complete: ${this.users.length} profiles created\n`);
    return this.users;
  }
}

class SanoraSeeder {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.products = [];
    this.blogPosts = [];
  }

  async createUser() {
    const keys = await sessionless.generateKeys();
    const timestamp = new Date().getTime();
    const signature = sessionless.sign(keys.privateKey, timestamp + keys.pubKey);

    try {
      const response = await put(`${this.baseURL}/user/create`, {
        timestamp: timestamp.toString(),
        pubKey: keys.pubKey,
        signature
      });

      return {
        uuid: response.uuid,
        pubKey: keys.pubKey,
        privateKey: keys.privateKey
      };
    } catch (error) {
      console.error('Failed to create Sanora user:', error.message);
      return null;
    }
  }

  async createProduct(user, productData) {
    try {
      const timestamp = new Date().getTime();
      const message = timestamp + user.uuid + productData.title + productData.description + productData.price;
      const signature = sessionless.sign(user.privateKey, message);

      const response = await put(`${this.baseURL}/user/${user.uuid}/product/${encodeURIComponent(productData.title)}`, {
        ...productData,
        timestamp: timestamp.toString(),
        signature
      });

      return response;
    } catch (error) {
      console.error(`Failed to create product ${productData.title}:`, error.message);
      return null;
    }
  }

  async seedProducts() {
    console.log('🛍️ Seeding Sanora service with products...');
    
    try {
      const user = await this.createUser();
      if (!user) {
        throw new Error('Failed to create Sanora user');
      }

      const sampleProducts = generateSampleProducts();
      
      for (const productData of sampleProducts) {
        const product = await this.createProduct(user, productData);
        if (product) {
          this.products.push(product);
          console.log(`  ✅ Created product: ${productData.title}`);
        }
      }
      
      console.log(`📊 Sanora product seeding complete: ${this.products.length} products created\n`);
    } catch (error) {
      console.error('❌ Sanora seeding failed:', error.message);
    }
    
    return this.products;
  }

  async seedBlogPosts() {
    console.log('📝 Seeding Sanora service with blog posts...');
    
    try {
      const user = await this.createUser();
      if (!user) {
        throw new Error('Failed to create Sanora user for blog posts');
      }

      const blogPosts = generateBlogPosts();
      
      for (const postData of blogPosts) {
        const blogPost = await this.createProduct(user, {
          ...postData,
          price: 0, // Blog posts are free
          tags: postData.tags || [],
          contentType: 'external'
        });
        
        if (blogPost) {
          this.blogPosts.push(blogPost);
          console.log(`  ✅ Created blog post: ${postData.title}`);
        }
      }
      
      console.log(`📊 Sanora blog seeding complete: ${this.blogPosts.length} blog posts created\n`);
    } catch (error) {
      console.error('❌ Sanora blog seeding failed:', error.message);
    }
    
    return this.blogPosts;
  }
}

class DoloresSeeder {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.posts = [];
  }

  async createUser() {
    const keys = await sessionless.generateKeys();
    const timestamp = new Date().getTime();
    const signature = sessionless.sign(keys.privateKey, timestamp + keys.pubKey);

    try {
      const response = await put(`${this.baseURL}/user/create`, {
        timestamp: timestamp.toString(),
        pubKey: keys.pubKey,
        signature,
        dolores: {} // Empty dolores object for new user
      });

      return {
        uuid: response.uuid,
        pubKey: keys.pubKey,
        privateKey: keys.privateKey
      };
    } catch (error) {
      console.error('Failed to create Dolores user:', error.message);
      return null;
    }
  }

  async seedPosts() {
    console.log('📱 Seeding Dolores service with social posts...');
    
    try {
      const user = await this.createUser();
      if (!user) {
        throw new Error('Failed to create Dolores user');
      }

      const socialPosts = generateSocialPosts();
      
      // Note: Dolores API doesn't have post creation endpoint in the client SDK
      // This is a placeholder for when that functionality is added
      for (const postData of socialPosts) {
        // For now, just store the posts data
        this.posts.push({
          ...postData,
          uuid: sessionless.generateUUID(),
          timestamp: new Date().getTime(),
          userUuid: user.uuid
        });
        console.log(`  ✅ Prepared post: ${postData.content.substring(0, 50)}...`);
      }
      
      console.log(`📊 Dolores seeding complete: ${this.posts.length} posts prepared\n`);
    } catch (error) {
      console.error('❌ Dolores seeding failed:', error.message);
    }
    
    return this.posts;
  }
}

class CovenantSeeder {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.contracts = [];
  }

  async createUser() {
    const keys = await sessionless.generateKeys();
    return {
      uuid: keys.uuid,
      pubKey: keys.pubKey,
      privateKey: keys.privateKey
    };
  }

  async createContract(user, contractData) {
    try {
      const timestamp = new Date().getTime();
      const message = timestamp + user.uuid;
      const signature = sessionless.sign(user.privateKey, message);

      // Create participant UUIDs
      const participants = [];
      for (let i = 0; i < contractData.participants; i++) {
        participants.push(sessionless.generateUUID());
      }

      // Create steps with UUIDs
      const steps = contractData.steps.map((description, index) => ({
        id: `step-${index + 1}`,
        description,
        signatures: {},
        completed: false,
        magicSpell: null
      }));

      const response = await post(`${this.baseURL}/contract`, {
        signature,
        timestamp: timestamp.toString(),
        userUUID: user.uuid,
        pubKey: user.pubKey,
        title: contractData.title,
        description: contractData.description,
        participants,
        steps
      });

      return response;
    } catch (error) {
      console.error(`Failed to create contract ${contractData.title}:`, error.message);
      return null;
    }
  }

  async seedContracts() {
    console.log('📜 Seeding Covenant service with contracts...');
    
    try {
      const user = await this.createUser();
      const contractsData = generateContracts();
      
      for (const contractData of contractsData) {
        const contract = await this.createContract(user, contractData);
        if (contract) {
          this.contracts.push(contract);
          console.log(`  ✅ Created contract: ${contractData.title}`);
        }
      }
      
      console.log(`📊 Covenant seeding complete: ${this.contracts.length} contracts created\n`);
    } catch (error) {
      console.error('❌ Covenant seeding failed:', error.message);
    }
    
    return this.contracts;
  }
}

class BDOSeeder {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.bases = [];
  }

  async createUser() {
    const keys = await sessionless.generateKeys();
    const timestamp = new Date().getTime();
    const hash = sessionless.generateUUID();
    const signature = sessionless.sign(keys.privateKey, timestamp + keys.pubKey + hash);

    try {
      const response = await put(`${this.baseURL}/user/create`, {
        timestamp: timestamp.toString(),
        pubKey: keys.pubKey,
        hash,
        signature,
        bdo: { bases: [], discoveryData: {} }
      });

      return {
        uuid: response,
        pubKey: keys.pubKey,
        privateKey: keys.privateKey,
        hash
      };
    } catch (error) {
      console.error('Failed to create BDO user:', error.message);
      return null;
    }
  }

  async seedBaseDiscovery() {
    console.log('🌍 Seeding BDO service with base discovery data...');
    
    try {
      const user = await this.createUser();
      if (!user) {
        throw new Error('Failed to create BDO user');
      }

      // Sample base discovery data
      const basesData = [
        {
          name: 'Tech Hub Base',
          description: 'A community focused on technology, programming, and innovation',
          url: `http://localhost:${SERVICES.bdo.split(':')[2]}`,
          lexary: ['technology', 'programming', 'innovation', 'startups'],
          photary: ['tech-demos', 'code-screenshots', 'office-spaces'],
          viewary: ['coding-tutorials', 'tech-talks', 'product-demos']
        },
        {
          name: 'Creative Collective',
          description: 'Artists, designers, and creative professionals sharing their work',
          url: `http://localhost:${parseInt(SERVICES.bdo.split(':')[2]) + 100}`,
          lexary: ['design', 'art', 'creativity', 'inspiration'],
          photary: ['artwork', 'design-process', 'creative-spaces'],
          viewary: ['design-timelapses', 'art-tutorials', 'creative-interviews']
        },
        {
          name: 'Business Network',
          description: 'Entrepreneurs and business professionals collaborating and networking',
          url: `http://localhost:${parseInt(SERVICES.bdo.split(':')[2]) + 200}`,
          lexary: ['business', 'entrepreneurship', 'networking', 'growth'],
          photary: ['team-photos', 'office-tours', 'event-coverage'],
          viewary: ['pitch-presentations', 'business-talks', 'success-stories']
        }
      ];

      // Save bases to BDO
      const timestamp = new Date().getTime();
      const signature = sessionless.sign(user.privateKey, timestamp + user.uuid + user.hash);

      await put(`${this.baseURL}/user/${user.uuid}/bases`, {
        timestamp: timestamp.toString(),
        uuid: user.uuid,
        hash: user.hash,
        signature,
        bases: basesData
      });

      this.bases = basesData;
      console.log(`  ✅ Created base discovery data: ${basesData.length} bases`);
      console.log(`📊 BDO seeding complete: ${this.bases.length} bases saved\n`);
    } catch (error) {
      console.error('❌ BDO seeding failed:', error.message);
    }
    
    return this.bases;
  }
}

// Health check function
const checkServiceHealth = async (serviceName, url) => {
  try {
    const healthUrl = `${url}/health`;
    await fetch(healthUrl, { timeout: 5000 });
    console.log(`  ✅ ${serviceName}: ${url}`);
    return true;
  } catch (error) {
    console.log(`  ❌ ${serviceName}: ${url} - ${error.message}`);
    return false;
  }
};

// Main seeding function
const seedEcosystem = async () => {
  console.log('🏥 Health checking services...');
  
  const healthChecks = await Promise.all([
    checkServiceHealth('Prof', SERVICES.prof),
    checkServiceHealth('Sanora', SERVICES.sanora),
    checkServiceHealth('Dolores', SERVICES.dolores),
    checkServiceHealth('Covenant', SERVICES.covenant),
    checkServiceHealth('BDO', SERVICES.bdo)
  ]);

  const healthyServices = healthChecks.filter(Boolean).length;
  console.log(`\n📊 ${healthyServices}/${healthChecks.length} services healthy\n`);

  if (healthyServices === 0) {
    console.log('❌ No services available. Please start the services first.');
    process.exit(1);
  }

  console.log('🌱 Starting ecosystem seeding...\n');

  try {
    // Seed all services in parallel
    const seeders = [
      new ProfSeeder(SERVICES.prof).seedProfiles(),
      new SanoraSeeder(SERVICES.sanora).seedProducts(),
      new SanoraSeeder(SERVICES.sanora).seedBlogPosts(),
      new DoloresSeeder(SERVICES.dolores).seedPosts(),
      new CovenantSeeder(SERVICES.covenant).seedContracts(),
      new BDOSeeder(SERVICES.bdo).seedBaseDiscovery()
    ];

    const results = await Promise.allSettled(seeders);
    
    let successCount = 0;
    results.forEach((result, index) => {
      const services = ['Prof', 'Sanora Products', 'Sanora Blogs', 'Dolores', 'Covenant', 'BDO'];
      if (result.status === 'fulfilled') {
        successCount++;
        console.log(`✅ ${services[index]} seeding completed`);
      } else {
        console.log(`❌ ${services[index]} seeding failed:`, result.reason?.message || 'Unknown error');
      }
    });

    console.log(`\n🎉 Ecosystem seeding complete!`);
    console.log(`📊 ${successCount}/${results.length} services seeded successfully`);
    
    if (ENVIRONMENT === 'test') {
      console.log(`\n🔗 Test Base ${BASE_NUMBER} URLs:`);
      console.log(`   BDO: ${SERVICES.bdo}`);
      console.log(`   Sanora: ${SERVICES.sanora}`);
      console.log(`   Covenant: ${SERVICES.covenant}`);
    }

  } catch (error) {
    console.error('💥 Fatal error during seeding:', error);
    process.exit(1);
  }
};

// Run the seeder
seedEcosystem().catch(error => {
  console.error('💥 Unhandled error:', error);
  process.exit(1);
});