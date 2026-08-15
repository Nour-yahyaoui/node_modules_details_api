// Node.js Library Documentation
// Total modules: 2
// Last updated: 2026-08-15 23:40:07

module.exports = [
  {
    "title": "Dotenv",
    "description": "A zero-dependency module that loads environment variables from a .env file into process.env for secure configuration management",
    "usage": "require('dotenv').config(); const dbPassword = process.env.DB_PASSWORD;",
    "tags": [
      "env",
      "configuration",
      "security",
      "secrets",
      "variables"
    ],
    "category": "Utility"
  },
  {
    "title": "Cors",
    "description": "A middleware package that enables Cross-Origin Resource Sharing (CORS) with various options for configuring allowed origins and methods",
    "usage": "const cors = require('cors'); app.use(cors({ origin: 'https://example.com' }));",
    "tags": [
      "cors",
      "security",
      "middleware",
      "headers",
      "browser"
    ],
    "category": "Security"
  }
];
