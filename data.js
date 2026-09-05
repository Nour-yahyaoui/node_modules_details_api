// Node.js Library Documentation
// Total modules: 13
// Last updated: 2026-09-05 15:15:13

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
  }
];
