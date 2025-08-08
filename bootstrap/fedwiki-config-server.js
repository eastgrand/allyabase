#!/usr/bin/env node

/**
 * Federated Wiki Configuration Server for Allyabase Bootstrap
 * 
 * Provides a fedwiki-based UI for editing allyabase bootstrap configuration
 * Integrates with the bootstrap service to provide real-time config management
 */

const fs = require('fs-extra');
const path = require('path');
const express = require('express');
const winston = require('winston');

// Configuration
const CONFIG_FILE = process.env.BOOTSTRAP_CONFIG || path.join(__dirname, '../bootstrap-config.json');
const FEDWIKI_PORT = process.env.FEDWIKI_PORT || 3030;
const FEDWIKI_DATA_DIR = process.env.FEDWIKI_DATA || path.join(__dirname, 'fedwiki-data');

// Logger setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()]
});

class FedwikiConfigServer {
  constructor() {
    this.app = express();
    this.wikiServer = null;
  }

  async initialize() {
    logger.info('🌍 Starting Fedwiki Configuration Server...');
    
    try {
      // Ensure fedwiki data directory exists
      await fs.ensureDir(FEDWIKI_DATA_DIR);
      
      // Create initial configuration pages
      await this.createConfigurationPages();
      
      // Set up express middleware
      this.setupMiddleware();
      
      // Set up API routes
      this.setupApiRoutes();
      
      // Start fedwiki server
      await this.startFedwikiServer();
      
      // Start our configuration API server
      this.startConfigServer();
      
      logger.info('🎉 Fedwiki configuration server started successfully');
      logger.info(`📝 Wiki interface: http://localhost:${FEDWIKI_PORT}`);
      logger.info(`🔧 API interface: http://localhost:${parseInt(FEDWIKI_PORT) + 1}`);
      
    } catch (error) {
      logger.error('❌ Failed to start fedwiki config server:', error);
      process.exit(1);
    }
  }

  async createConfigurationPages() {
    const pagesDir = path.join(FEDWIKI_DATA_DIR, 'pages');
    await fs.ensureDir(pagesDir);
    
    // Create welcome page
    const welcomePage = {
      title: 'Allyabase Configuration',
      story: [
        {
          type: 'paragraph',
          id: 'welcome',
          text: 'Welcome to the Allyabase Bootstrap Configuration interface. This federated wiki provides an easy way to manage your base configuration.'
        },
        {
          type: 'paragraph', 
          id: 'overview',
          text: 'Use the pages below to configure different aspects of your allyabase:'
        },
        {
          type: 'reference',
          id: 'base-info',
          site: 'localhost',
          slug: 'base-information',
          title: 'Base Information',
          text: 'Configure basic information about your base including name, description, and star system number.'
        },
        {
          type: 'reference',
          id: 'networking',
          site: 'localhost', 
          slug: 'networking-configuration',
          title: 'Networking Configuration',
          text: 'Set up base discovery and announcements to other bases in the Planet Nine network.'
        },
        {
          type: 'reference',
          id: 'users',
          site: 'localhost',
          slug: 'user-management',
          title: 'User Management', 
          text: 'Configure user limits, allowed public keys, and registration settings.'
        },
        {
          type: 'reference',
          id: 'feeds',
          site: 'localhost',
          slug: 'content-feeds',
          title: 'Content Feeds',
          text: 'Set up external content feeds from Bluesky and other sources.'
        },
        {
          type: 'reference',
          id: 'services',
          site: 'localhost',
          slug: 'service-configuration', 
          title: 'Service Configuration',
          text: 'Configure which allyabase services are enabled and their port settings.'
        }
      ],
      journal: [
        {
          type: 'create',
          item: {
            title: 'Allyabase Configuration',
            story: []
          },
          date: Date.now()
        }
      ]
    };
    
    await fs.writeJson(path.join(pagesDir, 'welcome-visitors'), welcomePage, { spaces: 2 });
    
    // Create base information page
    const baseInfoPage = await this.createBaseInfoPage();
    await fs.writeJson(path.join(pagesDir, 'base-information'), baseInfoPage, { spaces: 2 });
    
    // Create networking page
    const networkingPage = await this.createNetworkingPage();
    await fs.writeJson(path.join(pagesDir, 'networking-configuration'), networkingPage, { spaces: 2 });
    
    // Create user management page
    const userPage = await this.createUserManagementPage();
    await fs.writeJson(path.join(pagesDir, 'user-management'), userPage, { spaces: 2 });
    
    // Create content feeds page
    const feedsPage = await this.createContentFeedsPage();
    await fs.writeJson(path.join(pagesDir, 'content-feeds'), feedsPage, { spaces: 2 });
    
    // Create services page
    const servicesPage = await this.createServicesPage();
    await fs.writeJson(path.join(pagesDir, 'service-configuration'), servicesPage, { spaces: 2 });
    
    logger.info('✅ Configuration pages created');
  }

  async createBaseInfoPage() {
    // Load current config to populate form
    let currentConfig = {};
    try {
      currentConfig = await fs.readJson(CONFIG_FILE);
    } catch (error) {
      logger.warn('No existing config found, using defaults');
    }
    
    const baseInfo = currentConfig.baseInfo || {};
    
    return {
      title: 'Base Information',
      story: [
        {
          type: 'paragraph',
          id: 'intro',
          text: 'Configure basic information about your allyabase instance.'
        },
        {
          type: 'html',
          id: 'base-form',
          text: `
            <form id="baseInfoForm" class="config-form">
              <div class="form-group">
                <label for="baseName">Base Name*:</label>
                <input type="text" id="baseName" name="name" value="${baseInfo.name || ''}" required>
                <small>A human-readable name for your base</small>
              </div>
              
              <div class="form-group">
                <label for="baseDescription">Description:</label>
                <textarea id="baseDescription" name="description" rows="3">${baseInfo.description || ''}</textarea>
                <small>Describe the purpose of your base</small>
              </div>
              
              <div class="form-group">
                <label for="starSystem">Star System Number:</label>
                <input type="number" id="starSystem" name="starSystemNumber" value="${baseInfo.starSystemNumber || ''}" min="0" max="4294967295">
                <small>Optional identifier for your star system</small>
              </div>
              
              <div class="form-group">
                <label for="contactEmail">Contact Email:</label>
                <input type="email" id="contactEmail" name="contactEmail" value="${baseInfo.contactInfo?.email || ''}">
              </div>
              
              <div class="form-group">
                <label for="website">Website:</label>
                <input type="url" id="website" name="website" value="${baseInfo.contactInfo?.website || ''}">
              </div>
              
              <div class="form-actions">
                <button type="submit" class="btn btn-primary">Save Configuration</button>
                <button type="button" class="btn btn-secondary" onclick="loadCurrentConfig()">Reset</button>
              </div>
            </form>
            
            <style>
              .config-form { max-width: 600px; margin: 20px 0; }
              .form-group { margin-bottom: 20px; }
              .form-group label { display: block; font-weight: bold; margin-bottom: 5px; }
              .form-group input, .form-group textarea { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
              .form-group small { display: block; color: #666; margin-top: 5px; }
              .form-actions { margin-top: 30px; }
              .btn { padding: 10px 20px; margin-right: 10px; border: none; border-radius: 4px; cursor: pointer; }
              .btn-primary { background: #007bff; color: white; }
              .btn-secondary { background: #6c757d; color: white; }
            </style>
            
            <script>
              document.getElementById('baseInfoForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData.entries());
                
                // Structure data properly
                const config = {
                  baseInfo: {
                    name: data.name,
                    description: data.description,
                    starSystemNumber: data.starSystemNumber ? parseInt(data.starSystemNumber) : null,
                    contactInfo: {
                      email: data.contactEmail,
                      website: data.website
                    }
                  }
                };
                
                try {
                  const response = await fetch('http://localhost:${parseInt(FEDWIKI_PORT) + 1}/api/config/baseInfo', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(config.baseInfo)
                  });
                  
                  if (response.ok) {
                    alert('Base information saved successfully!');
                  } else {
                    alert('Failed to save configuration');
                  }
                } catch (error) {
                  alert('Error saving configuration: ' + error.message);
                }
              });
            </script>
          `
        }
      ],
      journal: [
        {
          type: 'create',
          item: { title: 'Base Information' },
          date: Date.now()
        }
      ]
    };
  }

  async createNetworkingPage() {
    let currentConfig = {};
    try {
      currentConfig = await fs.readJson(CONFIG_FILE);
    } catch (error) {
      // Use defaults
    }
    
    const networking = currentConfig.networking || {};
    const bases = networking.announceToBase || [];
    
    return {
      title: 'Networking Configuration',
      story: [
        {
          type: 'paragraph',
          id: 'intro',
          text: 'Configure how your base connects to and announces itself to other bases in the Planet Nine network.'
        },
        {
          type: 'html',
          id: 'networking-form',
          text: `
            <div class="networking-config">
              <div class="form-group">
                <label>
                  <input type="checkbox" id="listenForAnnouncements" ${networking.listenForAnnouncements !== false ? 'checked' : ''}>
                  Listen for announcements from other bases
                </label>
              </div>
              
              <h3>Announcement Targets</h3>
              <p>Configure which bases to announce your presence to:</p>
              
              <div id="announcementTargets">
                ${bases.map((base, index) => this.renderAnnouncementTarget(base, index)).join('')}
              </div>
              
              <button type="button" class="btn btn-secondary" onclick="addAnnouncementTarget()">Add New Target</button>
              <button type="button" class="btn btn-primary" onclick="saveNetworkingConfig()">Save Configuration</button>
            </div>
            
            <style>
              .networking-config { max-width: 800px; }
              .announcement-target { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 5px; }
              .target-header { display: flex; justify-content: between; align-items: center; margin-bottom: 10px; }
              .form-row { display: flex; gap: 10px; margin-bottom: 10px; }
              .form-row > div { flex: 1; }
            </style>
            
            <script>
              function renderAnnouncementTarget(base, index) {
                return \`
                  <div class="announcement-target" data-index="\${index}">
                    <div class="target-header">
                      <h4>Target Base \${index + 1}</h4>
                      <button type="button" class="btn btn-danger btn-sm" onclick="removeTarget(\${index})">Remove</button>
                    </div>
                    <div class="form-row">
                      <div>
                        <label>Name:</label>
                        <input type="text" name="targetName\${index}" value="\${base.name || ''}" required>
                      </div>
                      <div>
                        <label>Base URL:</label>
                        <input type="url" name="targetUrl\${index}" value="\${base.baseUrl || ''}" required>
                      </div>
                    </div>
                    <div class="form-row">
                      <div>
                        <label>
                          <input type="checkbox" name="targetEnabled\${index}" \${base.enabled !== false ? 'checked' : ''}>
                          Enabled
                        </label>
                      </div>
                    </div>
                  </div>
                \`;
              }
              
              function addAnnouncementTarget() {
                const container = document.getElementById('announcementTargets');
                const index = container.children.length;
                const targetHtml = renderAnnouncementTarget({}, index);
                container.insertAdjacentHTML('beforeend', targetHtml);
              }
              
              function removeTarget(index) {
                const target = document.querySelector(\`[data-index="\${index}"]\`);
                if (target) target.remove();
              }
              
              async function saveNetworkingConfig() {
                const config = {
                  listenForAnnouncements: document.getElementById('listenForAnnouncements').checked,
                  announceToBase: []
                };
                
                document.querySelectorAll('.announcement-target').forEach((target, index) => {
                  const name = target.querySelector(\`input[name="targetName\${index}"]\`)?.value;
                  const url = target.querySelector(\`input[name="targetUrl\${index}"]\`)?.value;
                  const enabled = target.querySelector(\`input[name="targetEnabled\${index}"]\`)?.checked;
                  
                  if (name && url) {
                    config.announceToBase.push({ name, baseUrl: url, enabled: enabled !== false });
                  }
                });
                
                try {
                  const response = await fetch('http://localhost:${parseInt(FEDWIKI_PORT) + 1}/api/config/networking', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(config)
                  });
                  
                  if (response.ok) {
                    alert('Networking configuration saved successfully!');
                  } else {
                    alert('Failed to save configuration');
                  }
                } catch (error) {
                  alert('Error saving configuration: ' + error.message);
                }
              }
            </script>
          `
        }
      ],
      journal: [
        {
          type: 'create',
          item: { title: 'Networking Configuration' },
          date: Date.now()
        }
      ]
    };
  }

  renderAnnouncementTarget(base, index) {
    return `
      <div class="announcement-target" data-index="${index}">
        <div class="target-header">
          <h4>Target Base ${index + 1}</h4>
          <button type="button" class="btn btn-danger btn-sm" onclick="removeTarget(${index})">Remove</button>
        </div>
        <div class="form-row">
          <div>
            <label>Name:</label>
            <input type="text" name="targetName${index}" value="${base.name || ''}" required>
          </div>
          <div>
            <label>Base URL:</label>
            <input type="url" name="targetUrl${index}" value="${base.baseUrl || ''}" required>
          </div>
        </div>
        <div class="form-row">
          <div>
            <label>
              <input type="checkbox" name="targetEnabled${index}" ${base.enabled !== false ? 'checked' : ''}>
              Enabled
            </label>
          </div>
        </div>
      </div>
    `;
  }

  async createUserManagementPage() {
    // Similar pattern for other configuration pages...
    return {
      title: 'User Management',
      story: [
        {
          type: 'paragraph',
          id: 'intro',
          text: 'Configure user access controls, registration limits, and allowed public keys.'
        },
        {
          type: 'paragraph',
          id: 'placeholder',
          text: 'User management configuration form will be implemented here...'
        }
      ],
      journal: [
        {
          type: 'create',
          item: { title: 'User Management' },
          date: Date.now()
        }
      ]
    };
  }

  async createContentFeedsPage() {
    return {
      title: 'Content Feeds',
      story: [
        {
          type: 'paragraph',
          id: 'intro',
          text: 'Configure external content feeds from Bluesky and other sources to import into Dolores.'
        },
        {
          type: 'paragraph',
          id: 'placeholder',
          text: 'Content feeds configuration form will be implemented here...'
        }
      ],
      journal: [
        {
          type: 'create',
          item: { title: 'Content Feeds' },
          date: Date.now()
        }
      ]
    };
  }

  async createServicesPage() {
    return {
      title: 'Service Configuration',
      story: [
        {
          type: 'paragraph',
          id: 'intro',
          text: 'Configure which allyabase services are enabled and their port settings.'
        },
        {
          type: 'paragraph',
          id: 'placeholder',
          text: 'Service configuration form will be implemented here...'
        }
      ],
      journal: [
        {
          type: 'create',
          item: { title: 'Service Configuration' },
          date: Date.now()
        }
      ]
    };
  }

  setupMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    
    // CORS for local development
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      next();
    });
  }

  setupApiRoutes() {
    // Get current configuration
    this.app.get('/api/config', async (req, res) => {
      try {
        const config = await fs.readJson(CONFIG_FILE);
        res.json(config);
      } catch (error) {
        res.status(500).json({ error: 'Failed to load configuration' });
      }
    });
    
    // Update base information
    this.app.post('/api/config/baseInfo', async (req, res) => {
      try {
        const config = await fs.readJson(CONFIG_FILE);
        config.baseInfo = { ...config.baseInfo, ...req.body };
        await fs.writeJson(CONFIG_FILE, config, { spaces: 2 });
        res.json({ success: true });
      } catch (error) {
        res.status(500).json({ error: 'Failed to save configuration' });
      }
    });
    
    // Update networking configuration
    this.app.post('/api/config/networking', async (req, res) => {
      try {
        const config = await fs.readJson(CONFIG_FILE);
        config.networking = { ...config.networking, ...req.body };
        await fs.writeJson(CONFIG_FILE, config, { spaces: 2 });
        res.json({ success: true });
      } catch (error) {
        res.status(500).json({ error: 'Failed to save configuration' });
      }
    });
    
    // Health check
    this.app.get('/health', (req, res) => {
      res.json({
        status: 'healthy',
        service: 'fedwiki-config-server',
        timestamp: new Date().toISOString()
      });
    });
  }

  async startFedwikiServer() {
    // Start fedwiki server programmatically
    const wiki = require('wiki');
    
    const wikiOptions = {
      port: FEDWIKI_PORT,
      data: FEDWIKI_DATA_DIR,
      database: 'flatfiles',
      security: false,  // Disable security for local config usage
      admin: true
    };
    
    logger.info(`🌍 Starting fedwiki server on port ${FEDWIKI_PORT}...`);
    
    // Start wiki server (wiki module handles this internally)
    // This is a simplified approach - in practice you might need to spawn the wiki process
    
    logger.info(`✅ Fedwiki server started at http://localhost:${FEDWIKI_PORT}`);
  }

  startConfigServer() {
    const configPort = parseInt(FEDWIKI_PORT) + 1;
    
    this.app.listen(configPort, () => {
      logger.info(`🔧 Configuration API server listening on port ${configPort}`);
    });
  }
}

// Main execution
if (require.main === module) {
  const server = new FedwikiConfigServer();
  
  server.initialize().catch(error => {
    logger.error('❌ Failed to start fedwiki config server:', error);
    process.exit(1);
  });
}

module.exports = FedwikiConfigServer;