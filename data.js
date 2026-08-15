// Node.js Library Documentation
// Total modules: 5
// Last updated: 2026-08-15 23:00:50

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
  },
  {
    "title": "Bcrypt",
    "description": "A library to help hash passwords using the bcrypt algorithm with salt generation and secure password comparison functions",
    "usage": "const bcrypt = require('bcrypt'); const hash = await bcrypt.hash('password123', 10); const match = await bcrypt.compare('password123', hash);",
    "tags": [
      "security",
      "password",
      "hashing",
      "encryption",
      "authentication"
    ],
    "category": "Security"
  },
  {
    "title": "Jsonwebtoken",
    "description": "An implementation of JSON Web Tokens (JWT) for creating and verifying authentication tokens with HMAC, RSA, and ECDSA algorithms",
    "usage": "const jwt = require('jsonwebtoken'); const token = jwt.sign({ userId: 123 }, 'secret'); jwt.verify(token, 'secret');",
    "tags": [
      "jwt",
      "authentication",
      "security",
      "tokens",
      "session"
    ],
    "category": "Security"
  },
  {
    "title": "Nodemailer",
    "description": "A module that makes sending emails from Node.js applications easy with support for SMTP, attachments, and HTML content",
    "usage": "const nodemailer = require('nodemailer'); const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: 'user@gmail.com', pass: 'pass' } });",
    "tags": [
      "email",
      "smtp",
      "notifications",
      "mail",
      "attachments"
    ],
    "category": "Utility"
  }
];
