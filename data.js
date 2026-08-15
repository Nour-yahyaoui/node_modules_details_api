// Node.js Library Documentation
// Total modules: 2
// Last updated: 2026-08-15 23:28:16

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
  }
];
