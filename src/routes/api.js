'use strict';

const express = require('express');
const store = require('../lib/store');
const openapi = require('../lib/openapi');

const router = express.Router();

/** Uniform JSON success envelope. */
function ok(res, data, meta) {
  const body = { success: true, data };
  if (meta) body.meta = meta;
  return res.json(body);
}

/** Uniform JSON error envelope. */
function fail(res, status, code, message, extra) {
  const body = { success: false, error: { code, message, ...extra } };
  return res.status(status).json(body);
}

/** Parse ?page & ?limit, answering 400 on junk input. */
function pagination(req, res) {
  const pageRaw = req.query.page;
  const limitRaw = req.query.limit;
  for (const [key, value] of [
    ['page', pageRaw],
    ['limit', limitRaw],
  ]) {
    if (value !== undefined && !/^\d+$/.test(String(value))) {
      fail(res, 400, 'BAD_REQUEST', `Query parameter "${key}" must be a positive integer.`);
      return null;
    }
  }
  return store.parsePagination(req.query);
}

// ---------------------------------------------------------------------------
// API index
// ---------------------------------------------------------------------------
router.get('/', (req, res) => {
  ok(res, {
    name: 'Node Modules Details API',
    version: require('../../package.json').version,
    description:
      'Documentation for 779 Node.js libraries: descriptions, usage examples, tags and categories.',
    endpoints: [
      { method: 'GET', path: '/api/health', description: 'Liveness probe' },
      { method: 'GET', path: '/api/stats', description: 'Dataset statistics (categories, tags)' },
      { method: 'GET', path: '/api/libraries', description: 'List / filter / search libraries (paginated)' },
      { method: 'GET', path: '/api/libraries/:slug', description: 'Get a single library by slug or id' },
      { method: 'GET', path: '/api/categories', description: 'List all categories with counts' },
      { method: 'GET', path: '/api/tags', description: 'List all tags with counts' },
      { method: 'GET', path: '/api/search', description: 'Full-text search (same params as /api/libraries, q required)' },
      { method: 'GET', path: '/api/random', description: 'Random libraries (?count=n)' },
      { method: 'GET', path: '/api/openapi.json', description: 'OpenAPI 3.0 specification' },
    ],
    docs: '/',
  });
});

// ---------------------------------------------------------------------------
// Health
// ---------------------------------------------------------------------------
router.get('/health', (req, res) => {
  ok(res, { status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() });
});

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------
router.get('/stats', (req, res) => {
  ok(res, store.getStats());
});

// ---------------------------------------------------------------------------
// Categories & tags
// ---------------------------------------------------------------------------
router.get('/categories', (req, res) => {
  ok(res, store.categoryCounts, { total: store.categoryCounts.length });
});

router.get('/tags', (req, res) => {
  ok(res, store.tagCounts, { total: store.tagCounts.length });
});

// ---------------------------------------------------------------------------
// Libraries list / search
// ---------------------------------------------------------------------------
router.get('/libraries', (req, res) => {
  const { page, limit } = pagination(req, res);
  if (!page) return;

  const { category, tag, q, sort } = req.query;

  if (sort !== undefined && !store.SORTERS[sort]) {
    return fail(res, 400, 'BAD_REQUEST', `Invalid "sort" value. Supported: ${Object.keys(store.SORTERS).join(', ')}.`, {
      supported: Object.keys(store.SORTERS),
    });
  }

  if (category !== undefined && !store.hasCategory(category)) {
    return fail(res, 400, 'BAD_CATEGORY', `Unknown category "${category}".`, {
      supported: store.categoryCounts.map((c) => c.name),
    });
  }

  const { data, meta } = store.listLibraries({ q, category, tag, page, limit, sort });
  ok(res, data, meta);
});

router.get('/search', (req, res) => {
  const q = req.query.q;
  if (!q || String(q).trim().length === 0) {
    return fail(res, 400, 'MISSING_QUERY', 'Query parameter "q" is required for search.');
  }
  const { page, limit } = pagination(req, res);
  if (!page) return;

  const { sort, category, tag } = req.query;
  if (sort !== undefined && !store.SORTERS[sort]) {
    return fail(res, 400, 'BAD_REQUEST', `Invalid "sort" value. Supported: ${Object.keys(store.SORTERS).join(', ')}.`, {
      supported: Object.keys(store.SORTERS),
    });
  }

  const { data, meta } = store.listLibraries({ q, category, tag, page, limit, sort });
  ok(res, data, meta);
});

// ---------------------------------------------------------------------------
// Single library
// ---------------------------------------------------------------------------
router.get('/libraries/:key', (req, res) => {
  const result = store.getLibrary(req.params.key);
  if (!result) {
    return fail(res, 404, 'NOT_FOUND', `No library found for "${req.params.key}".`, {
      hint: 'Try /api/libraries to list entries, or /api/search?q=... to find one.',
    });
  }
  ok(res, result.entry, { matches: result.matches });
});

// ---------------------------------------------------------------------------
// Random
// ---------------------------------------------------------------------------
router.get('/random', (req, res) => {
  let count = 1;
  if (req.query.count !== undefined) {
    if (!/^\d+$/.test(String(req.query.count))) {
      return fail(res, 400, 'BAD_REQUEST', 'Query parameter "count" must be a positive integer.');
    }
    count = Number.parseInt(String(req.query.count), 10);
  }
  ok(res, store.getRandomLibraries(count), { count: Math.min(count, store.MAX_LIMIT) });
});

// ---------------------------------------------------------------------------
// OpenAPI
// ---------------------------------------------------------------------------
router.get('/openapi.json', (req, res) => {
  res.json(openapi);
});

module.exports = router;
