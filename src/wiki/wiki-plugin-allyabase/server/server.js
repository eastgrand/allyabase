const contracts = require('./contracts.js');
const feeds = require('./feeds.js');
const inventory = require('./inventory.js');
const deployment = require('./deployment.js');
const proxy = require('./proxy.js');

(function() {
  async function startServer(params) {
    // Add service proxy routes first (most commonly used)
    proxy.addRoutes(params);

    // Add plugin-specific routes
    contracts.addRoutes(params);
    feeds.addRoutes(params);
    inventory.addRoutes(params);
    deployment.addRoutes(params);
  };

module.exports = {startServer};
}).call(this);
