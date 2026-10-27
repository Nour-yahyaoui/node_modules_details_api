'use strict';

const createApp = require('./app');

const PORT = Number.parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || '0.0.0.0';

const app = createApp();

const server = app.listen(PORT, HOST, () => {
  const { totalLibraries, totalCategories } = require('./lib/store').getStats();
  console.log(`📦 Node Modules Details API`);
  console.log(`   → ${totalLibraries} libraries across ${totalCategories} categories`);
  console.log(`   → UI:      http://localhost:${PORT}/`);
  console.log(`   → API:     http://localhost:${PORT}/api`);
  console.log(`   → Health:  http://localhost:${PORT}/api/health`);
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    server.close(() => process.exit(0));
  });
}

module.exports = server;
