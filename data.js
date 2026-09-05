// Node.js Library Documentation
// Total modules: 5
// Last updated: 2026-09-05 15:15:03

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
  }
];
