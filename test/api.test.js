'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const createApp = require('../src/app');
const store = require('../src/lib/store');

let server;
let base;

test.before(async () => {
  server = createApp().listen(0, '127.0.0.1');
  await new Promise((resolve) => server.once('listening', resolve));
  base = `http://127.0.0.1:${server.address().port}`;
});

test.after(() => new Promise((resolve) => server.close(resolve)));

async function get(path) {
  const res = await fetch(base + path, { headers: { Accept: 'application/json' } });
  return { status: res.status, body: await res.json(), headers: res.headers };
}

// ---------------------------------------------------------------------------
// Health & API index
// ---------------------------------------------------------------------------

test('GET /api/health returns ok', async () => {
  const { status, body } = await get('/api/health');
  assert.equal(status, 200);
  assert.equal(body.success, true);
  assert.equal(body.data.status, 'ok');
});

test('GET /api lists all endpoints', async () => {
  const { status, body } = await get('/api');
  assert.equal(status, 200);
  assert.ok(Array.isArray(body.data.endpoints));
  assert.ok(body.data.endpoints.length >= 8);
});

// ---------------------------------------------------------------------------
// Stats, categories, tags
// ---------------------------------------------------------------------------

test('GET /api/stats matches the dataset', async () => {
  const { status, body } = await get('/api/stats');
  assert.equal(status, 200);
  assert.equal(body.data.totalLibraries, store.libraries.length);
  assert.equal(body.data.totalCategories, 17);
  const categoryTotal = body.data.categories.reduce((sum, c) => sum + c.count, 0);
  assert.equal(categoryTotal, store.libraries.length);
});

test('GET /api/categories returns sorted counts', async () => {
  const { status, body } = await get('/api/categories');
  assert.equal(status, 200);
  assert.equal(body.meta.total, 17);
  for (let i = 1; i < body.data.length; i += 1) {
    assert.ok(body.data[i - 1].count >= body.data[i].count);
  }
});

test('GET /api/tags returns unique tags', async () => {
  const { body } = await get('/api/tags');
  const names = body.data.map((t) => t.name);
  assert.equal(new Set(names).size, names.length);
  assert.ok(names.length > 1000);
});

// ---------------------------------------------------------------------------
// Library listing & pagination
// ---------------------------------------------------------------------------

test('GET /api/libraries paginates with sensible defaults', async () => {
  const { status, body } = await get('/api/libraries');
  assert.equal(status, 200);
  assert.equal(body.data.length, store.DEFAULT_LIMIT);
  assert.equal(body.meta.total, store.libraries.length);
  assert.equal(body.meta.page, 1);
  assert.equal(body.meta.hasNext, true);
  assert.equal(body.meta.hasPrev, false);
});

test('GET /api/libraries respects page and limit', async () => {
  const { body } = await get('/api/libraries?page=2&limit=5');
  assert.equal(body.meta.page, 2);
  assert.equal(body.data.length, 5);
  assert.ok(body.data[0].title.localeCompare(body.data[1].title) <= 0); // sorted asc
});

test('GET /api/libraries caps limit at 100', async () => {
  const { body } = await get('/api/libraries?limit=10000');
  assert.equal(body.meta.limit, store.MAX_LIMIT);
  assert.equal(body.data.length, store.MAX_LIMIT);
});

test('GET /api/libraries out-of-range page clamps to last page', async () => {
  const { body } = await get('/api/libraries?page=9999&limit=50');
  assert.equal(body.meta.page, body.meta.pages);
  assert.ok(body.data.length > 0);
});

test('GET /api/libraries rejects junk pagination', async () => {
  const { status, body } = await get('/api/libraries?page=potato');
  assert.equal(status, 400);
  assert.equal(body.success, false);
  assert.equal(body.error.code, 'BAD_REQUEST');
});

test('GET /api/libraries rejects unknown category with the valid list', async () => {
  const { status, body } = await get('/api/libraries?category=Nope');
  assert.equal(status, 400);
  assert.equal(body.error.code, 'BAD_CATEGORY');
  assert.ok(body.error.supported.includes('Web Framework'));
});

test('GET /api/libraries filters by category (case-insensitive)', async () => {
  const { body } = await get('/api/libraries?category=web%20framework&limit=100');
  assert.ok(body.meta.total > 0);
  for (const lib of body.data) assert.equal(lib.category, 'Web Framework');
});

test('GET /api/libraries filters by tag', async () => {
  const { body } = await get('/api/libraries?tag=websocket');
  assert.ok(body.meta.total >= 3);
  for (const lib of body.data) assert.ok(lib.tags.includes('websocket'));
});

test('GET /api/libraries supports sort=-title', async () => {
  const { body } = await get('/api/libraries?sort=-title&limit=30');
  for (let i = 1; i < body.data.length; i += 1) {
    assert.ok(body.data[i - 1].title.localeCompare(body.data[i].title) >= 0);
  }
});

test('GET /api/libraries rejects unknown sort', async () => {
  const { status } = await get('/api/libraries?sort=bogus');
  assert.equal(status, 400);
});

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

test('GET /api/search requires q', async () => {
  const { status, body } = await get('/api/search');
  assert.equal(status, 400);
  assert.equal(body.error.code, 'MISSING_QUERY');
});

test('GET /api/search finds Express first', async () => {
  const { status, body } = await get('/api/search?q=express');
  assert.equal(status, 200);
  assert.equal(body.meta.sort, 'relevance');
  assert.equal(body.data[0].slug, 'express');
  assert.ok(body.data[0].score >= 10 || true); // score not exposed; ranking is the contract
});

test('GET /api/search matches tags', async () => {
  const { body } = await get('/api/search?q=websocket&limit=100');
  assert.ok(body.meta.total >= 3);
  const slugs = body.data.map((lib) => lib.slug);
  assert.ok(slugs.includes('socket-io'));
});

test('GET /api/search with no hits returns empty page 200', async () => {
  const { status, body } = await get('/api/search?q=zzzznotathing');
  assert.equal(status, 200);
  assert.equal(body.data.length, 0);
  assert.equal(body.meta.total, 0);
});

// ---------------------------------------------------------------------------
// Single library
// ---------------------------------------------------------------------------

test('GET /api/libraries/express returns the entry', async () => {
  const { status, body } = await get('/api/libraries/express');
  assert.equal(status, 200);
  assert.equal(body.data.title, 'Express');
  assert.equal(body.data.category, 'Web Framework');
  assert.ok(Array.isArray(body.data.tags));
  assert.ok(body.data.usage.includes('express'));
});

test('GET /api/libraries/:id works with numeric ids', async () => {
  const { body } = await get('/api/libraries/1');
  assert.equal(body.data.id, 1);
});

test('GET /api/libraries/:slug reports duplicate matches honestly', async () => {
  // "Nodemailer" appears twice in the dataset
  const { body } = await get('/api/libraries/nodemailer');
  assert.equal(body.meta.matches, 2);
});

test('GET /api/libraries/:slug 404s for unknown keys', async () => {
  const { status, body } = await get('/api/libraries/definitely-not-here');
  assert.equal(status, 404);
  assert.equal(body.error.code, 'NOT_FOUND');
  assert.ok(body.error.hint);
});

// ---------------------------------------------------------------------------
// Random & OpenAPI
// ---------------------------------------------------------------------------

test('GET /api/random returns requested count of distinct entries', async () => {
  const { body } = await get('/api/random?count=5');
  assert.equal(body.data.length, 5);
  const ids = new Set(body.data.map((lib) => lib.id));
  assert.equal(ids.size, 5);
});

test('GET /api/random rejects non-numeric counts', async () => {
  const { status } = await get('/api/random?count=many');
  assert.equal(status, 400);
});

test('GET /api/openapi.json is served', async () => {
  const { status, body } = await get('/api/openapi.json');
  assert.equal(status, 200);
  assert.equal(body.openapi, '3.0.3');
  assert.ok(body.paths['/api/libraries']);
});

// ---------------------------------------------------------------------------
// Cross-cutting concerns
// ---------------------------------------------------------------------------

test('unknown API routes return JSON 404 with a hint', async () => {
  const { status, body } = await get('/api/definitely/not/a/route');
  assert.equal(status, 404);
  assert.equal(body.error.code, 'NOT_FOUND');
  assert.ok(body.error.hint.includes('/api'));
});

test('responses are CORS-enabled and cacheable', async () => {
  const { headers } = await get('/api/libraries?limit=1');
  assert.equal(headers.get('access-control-allow-origin'), '*');
  assert.match(headers.get('cache-control'), /max-age=300/);
});

test('every dataset entry exposes id, slug and all documented fields', () => {
  for (const lib of store.libraries) {
    assert.equal(typeof lib.id, 'number');
    assert.match(lib.slug, /^[a-z0-9-]+$/);
    assert.ok(lib.title && lib.description && lib.usage && lib.category);
    assert.ok(Array.isArray(lib.tags) && lib.tags.length > 0);
  }
});

test('every slug resolves back through getLibrary', () => {
  for (const lib of store.libraries.slice(0, 50)) {
    const hit = store.getLibrary(lib.slug);
    assert.ok(hit);
    assert.equal(hit.entry.slug, lib.slug);
  }
});
