// Node.js Library Documentation
// Total modules: 29
// Last updated: 2026-09-05 15:15:33

module.exports = [
  {
    "title": "Axios",
    "description": "Promise-based HTTP client for Node.js and browsers with automatic JSON transformation and request/response interception",
    "usage": "const axios = require('axios'); const response = await axios.get('https://api.github.com/users/nour-yahyaoui');",
    "tags": [
      "http",
      "api",
      "promises",
      "interceptor"
    ],
    "category": "HTTP Client"
  },
  {
    "title": "Bcrypt",
    "description": "Password hashing library using the bcrypt algorithm with salt generation and secure comparison functions",
    "usage": "const bcrypt = require('bcrypt'); const hash = await bcrypt.hash('password123', 10); const match = await bcrypt.compare('password123', hash);",
    "tags": [
      "security",
      "password",
      "hashing",
      "encryption"
    ],
    "category": "Security"
  },
  {
    "title": "Body-parser",
    "description": "Request body parsing middleware that populates req.body with parsed JSON, URL-encoded, or multipart data",
    "usage": "const bodyParser = require('body-parser'); app.use(bodyParser.json()); app.use(bodyParser.urlencoded({ extended: true }));",
    "tags": [
      "parse",
      "json",
      "urlencoded",
      "middleware"
    ],
    "category": "Utility"
  },
  {
    "title": "Chalk",
    "description": "Terminal string styling with colors, RGB, and hex support for beautiful console output",
    "usage": "const chalk = require('chalk'); console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));",
    "tags": [
      "terminal",
      "colors",
      "console",
      "styling"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Commander",
    "description": "Complete command-line interface solution with argument parsing, automatic help generation, and command definitions",
    "usage": "const { program } = require('commander'); program.version('1.0.0').option('-p, --port <number>').parse();",
    "tags": [
      "cli",
      "command",
      "arguments",
      "parsing"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Compression",
    "description": "Response compression middleware using gzip or deflate to reduce bandwidth and improve page load times",
    "usage": "const compression = require('compression'); app.use(compression());",
    "tags": [
      "compression",
      "gzip",
      "performance",
      "middleware"
    ],
    "category": "Performance"
  },
  {
    "title": "Concurrently",
    "description": "Run multiple commands concurrently, useful for starting both backend and frontend servers simultaneously",
    "usage": "concurrently \"npm run server\" \"npm run client\"",
    "tags": [
      "concurrent",
      "parallel",
      "scripts",
      "npm"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Cookie-parser",
    "description": "Cookie parsing middleware that populates req.cookies with signed and unsigned cookies",
    "usage": "const cookieParser = require('cookie-parser'); app.use(cookieParser('secret'));",
    "tags": [
      "cookie",
      "session",
      "parse",
      "middleware"
    ],
    "category": "Utility"
  },
  {
    "title": "Cors",
    "description": "Cross-Origin Resource Sharing middleware with configurable options for allowed origins, methods, and headers",
    "usage": "const cors = require('cors'); app.use(cors({ origin: 'https://example.com' }));",
    "tags": [
      "cors",
      "security",
      "headers",
      "middleware"
    ],
    "category": "Security"
  },
  {
    "title": "Cross-env",
    "description": "Cross-platform environment variable setting for npm scripts on Windows, Linux, and macOS",
    "usage": "cross-env NODE_ENV=production npm start",
    "tags": [
      "env",
      "cross-platform",
      "scripts",
      "variables"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Dotenv",
    "description": "Load environment variables from .env files into process.env for secure configuration management",
    "usage": "require('dotenv').config(); const dbPassword = process.env.DB_PASSWORD;",
    "tags": [
      "env",
      "configuration",
      "secrets",
      "variables"
    ],
    "category": "Utility"
  },
  {
    "title": "ESLint",
    "description": "Static code analysis tool for identifying and fixing problems in JavaScript and TypeScript code",
    "usage": "npx eslint --fix .",
    "tags": [
      "lint",
      "code-quality",
      "static-analysis",
      "typescript"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Express",
    "description": "Minimalist web framework for Node.js with routing, middleware, and HTTP utility methods",
    "usage": "const express = require('express'); const app = express(); app.get('/', (req, res) => res.send('Hello World'));",
    "tags": [
      "web",
      "framework",
      "routing",
      "middleware"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Fastify",
    "description": "Fast and low-overhead web framework with built-in schema validation, logging, and plugin system",
    "usage": "const fastify = require('fastify')({ logger: true }); fastify.get('/', async () => ({ hello: 'world' }));",
    "tags": [
      "web",
      "framework",
      "performance",
      "fast"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Fs-extra",
    "description": "Extended file system module with promise support and additional methods like copy, ensureDir, and remove",
    "usage": "const fs = require('fs-extra'); await fs.copy('src', 'dist'); await fs.ensureDir('data');",
    "tags": [
      "fs",
      "file",
      "directory",
      "copy",
      "promise"
    ],
    "category": "Utility"
  },
  {
    "title": "Helmet",
    "description": "Security middleware that sets various HTTP headers to protect Express apps from common vulnerabilities",
    "usage": "const helmet = require('helmet'); app.use(helmet());",
    "tags": [
      "security",
      "headers",
      "middleware",
      "protection"
    ],
    "category": "Security"
  },
  {
    "title": "Jest",
    "description": "Delightful JavaScript testing framework with built-in assertions, mocking, and test coverage reporting",
    "usage": "test('adds 1 + 2 to equal 3', () => { expect(1 + 2).toBe(3); });",
    "tags": [
      "testing",
      "unit-test",
      "assertions",
      "mock"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Joi",
    "description": "Powerful schema validation library with descriptive error messages and type validation for JavaScript objects",
    "usage": "const Joi = require('joi'); const schema = Joi.object({ name: Joi.string().min(3).required() });",
    "tags": [
      "validation",
      "schema",
      "data",
      "types"
    ],
    "category": "Validation"
  },
  {
    "title": "Jsonwebtoken",
    "description": "Implementation of JSON Web Tokens for creating and verifying authentication tokens with HMAC, RSA, and ECDSA",
    "usage": "const jwt = require('jsonwebtoken'); const token = jwt.sign({ userId: 123 }, 'secret');",
    "tags": [
      "jwt",
      "authentication",
      "security",
      "tokens"
    ],
    "category": "Security"
  },
  {
    "title": "Koa",
    "description": "Modern web framework designed by the Express team with async/await support and no callback hell",
    "usage": "const Koa = require('koa'); const app = new Koa(); app.use(async ctx => { ctx.body = 'Hello World'; });",
    "tags": [
      "web",
      "framework",
      "async",
      "modern"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Lodash",
    "description": "Modern JavaScript utility library delivering modularity, performance, and extras for array and object manipulation",
    "usage": "const _ = require('lodash'); const unique = _.uniq([1, 2, 2, 3]); const grouped = _.groupBy(users, 'age');",
    "tags": [
      "utility",
      "array",
      "object",
      "functional"
    ],
    "category": "Utility"
  },
  {
    "title": "Mongoose",
    "description": "MongoDB object modeling with schema validation, query building, and middleware support",
    "usage": "const mongoose = require('mongoose'); await mongoose.connect('mongodb://localhost:27017/test');",
    "tags": [
      "mongodb",
      "odm",
      "schema",
      "validation"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Morgan",
    "description": "HTTP request logging middleware with customizable log formats for development and production",
    "usage": "const morgan = require('morgan'); app.use(morgan('combined'));",
    "tags": [
      "logging",
      "http",
      "middleware",
      "requests"
    ],
    "category": "Logging"
  },
  {
    "title": "Multer",
    "description": "File upload middleware for handling multipart/form-data with memory or disk storage options",
    "usage": "const multer = require('multer'); const upload = multer({ dest: 'uploads/' });",
    "tags": [
      "file",
      "upload",
      "multipart",
      "middleware"
    ],
    "category": "Utility"
  },
  {
    "title": "Passport",
    "description": "Authentication middleware supporting 500+ strategies including OAuth, OpenID, and local authentication",
    "usage": "const passport = require('passport'); app.use(passport.initialize()); passport.use(new LocalStrategy());",
    "tags": [
      "authentication",
      "oauth",
      "strategies",
      "login"
    ],
    "category": "Security"
  },
  {
    "title": "Prettier",
    "description": "Opinionated code formatter supporting JavaScript, TypeScript, CSS, JSON, and many other languages",
    "usage": "npx prettier --write .",
    "tags": [
      "format",
      "code-style",
      "opinionated",
      "automation"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Socket.io",
    "description": "Real-time bidirectional event-based communication between web clients and servers using WebSockets",
    "usage": "const io = require('socket.io')(server); io.on('connection', socket => { socket.emit('message', 'Hello'); });",
    "tags": [
      "websocket",
      "realtime",
      "events",
      "broadcast"
    ],
    "category": "Real-time"
  },
  {
    "title": "UUID",
    "description": "Simple and fast RFC-compliant UUID generation with support for v1, v3, v4, and v5 UUIDs",
    "usage": "const { v4: uuidv4 } = require('uuid'); const id = uuidv4();",
    "tags": [
      "uuid",
      "identifier",
      "unique",
      "id"
    ],
    "category": "Utility"
  },
  {
    "title": "Validator",
    "description": "String validators and sanitizers for checking email, URL, and other input formats with extensive validation functions",
    "usage": "const validator = require('validator'); const isValidEmail = validator.isEmail('test@example.com');",
    "tags": [
      "validation",
      "sanitization",
      "email",
      "url"
    ],
    "category": "Validation"
  }
];
