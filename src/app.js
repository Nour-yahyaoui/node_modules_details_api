'use strict';

const path = require('path');
const express = require('express');
const apiRouter = require('./routes/api');

/**
 * Express application factory. Kept separate from the listener so tests can
 * boot the app on an ephemeral port without touching src/server.js.
 */
function createApp() {
  const app = express();

  app.disable('x-powered-by');
  app.set('json spaces', 2);

  // Lightweight CORS so the API can be explored from anywhere.
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    next();
  });

  // The dataset is static — short client-side caching is safe.
  app.use('/api', (req, res, next) => {
    res.setHeader('Cache-Control', 'public, max-age=300');
    next();
  });

  app.use('/api', apiRouter);

  // Browsable documentation UI.
  app.use(express.static(path.join(__dirname, '..', 'public'), { extensions: ['html'] }));

  // Unknown API routes get a JSON 404; everything else falls back to the UI.
  app.use('/api', (req, res) => {
    res.status(404).json({
      success: false,
      error: {
        code: 'NOT_FOUND',
        message: `Unknown API route: ${req.method} ${req.path}`,
        hint: 'GET /api lists every available endpoint.',
      },
    });
  });

  app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });

  // JSON error handler (bad JSON bodies, unexpected failures…).
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    const status = err.status || err.statusCode || 500;
    res.status(status).json({
      success: false,
      error: {
        code: status >= 500 ? 'INTERNAL_ERROR' : 'BAD_REQUEST',
        message: status >= 500 ? 'Something went wrong.' : err.message,
      },
    });
  });

  return app;
}

module.exports = createApp;
