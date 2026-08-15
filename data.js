// Node.js Library Documentation
// Total modules: 3
// Last updated: 2026-08-15 23:28:19

module.exports = [
  {
    "title": "Fastify",
    "description": "A fast and low-overhead web framework for Node.js with built-in schema validation and logging capabilities",
    "usage": "const fastify = require('fastify')({ logger: true }); fastify.get('/', async (request, reply) => { return { hello: 'world' }; }); await fastify.listen({ port: 3000 });",
    "tags": [
      "web",
      "framework",
      "performance",
      "fast",
      "http"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Koa",
    "description": "A modern web framework designed by the team behind Express with async/await support and no callback hell",
    "usage": "const Koa = require('koa'); const app = new Koa(); app.use(async ctx => { ctx.body = 'Hello World'; }); app.listen(3000);",
    "tags": [
      "web",
      "framework",
      "async",
      "modern",
      "http"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Hapi",
    "description": "A rich framework for building applications and services with configuration-based routing and built-in validation",
    "usage": "const Hapi = require('@hapi/hapi'); const server = Hapi.server({ port: 3000 }); server.route({ method: 'GET', path: '/', handler: (request, h) => 'Hello World' }); await server.start();",
    "tags": [
      "web",
      "framework",
      "configuration",
      "enterprise",
      "http"
    ],
    "category": "Web Framework"
  }
];
