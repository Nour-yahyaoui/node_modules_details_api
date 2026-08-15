// Node.js Library Documentation
// Total modules: 23
// Last updated: 2026-08-15 23:03:00

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
  },
  {
    "title": "Multer",
    "description": "A middleware for handling multipart/form-data, primarily used for uploading files in Node.js applications with memory or disk storage",
    "usage": "const multer = require('multer'); const upload = multer({ dest: 'uploads/' }); app.post('/upload', upload.single('file'), (req, res) => { });",
    "tags": [
      "file",
      "upload",
      "middleware",
      "multipart",
      "form"
    ],
    "category": "Utility"
  },
  {
    "title": "Socket.io",
    "description": "A library that enables real-time bidirectional event-based communication between web clients and servers using WebSockets",
    "usage": "const io = require('socket.io')(server); io.on('connection', socket => { socket.emit('message', 'Hello'); });",
    "tags": [
      "websocket",
      "realtime",
      "communication",
      "events",
      "broadcast"
    ],
    "category": "Real-time"
  },
  {
    "title": "Chalk",
    "description": "A package that adds color and styling to terminal output with support for 256 colors, RGB, and hex codes for better visual output",
    "usage": "const chalk = require('chalk'); console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));",
    "tags": [
      "terminal",
      "colors",
      "cli",
      "console",
      "styling"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Commander",
    "description": "A complete solution for building command-line interfaces with argument parsing, automatic help generation, and command definition",
    "usage": "const { program } = require('commander'); program.version('1.0.0').option('-p, --port <number>').parse();",
    "tags": [
      "cli",
      "command",
      "arguments",
      "parsing",
      "terminal"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Inquirer",
    "description": "A collection of common interactive command-line user interfaces with prompts for input, selection, and confirmation in terminal",
    "usage": "const inquirer = require('inquirer'); const answers = await inquirer.prompt([{ type: 'input', name: 'name', message: 'Enter name' }]);",
    "tags": [
      "cli",
      "prompts",
      "terminal",
      "interactive",
      "input"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Moment.js",
    "description": "A comprehensive library for parsing, validating, manipulating, and displaying dates and times in JavaScript with internationalization support",
    "usage": "const moment = require('moment'); const now = moment(); const formatted = now.format('YYYY-MM-DD');",
    "tags": [
      "date",
      "time",
      "datetime",
      "formatting",
      "manipulation"
    ],
    "category": "Utility"
  },
  {
    "title": "Morgan",
    "description": "An HTTP request logger middleware for Node.js that logs requests to the console or file with customizable log formats",
    "usage": "const morgan = require('morgan'); app.use(morgan('combined'));",
    "tags": [
      "logging",
      "http",
      "middleware",
      "requests",
      "debug"
    ],
    "category": "Logging"
  },
  {
    "title": "Helmet",
    "description": "A security middleware that sets various HTTP headers to protect Express applications from well-known web vulnerabilities",
    "usage": "const helmet = require('helmet'); app.use(helmet());",
    "tags": [
      "security",
      "headers",
      "middleware",
      "protection",
      "helmet"
    ],
    "category": "Security"
  },
  {
    "title": "Compression",
    "description": "A middleware for compressing response bodies using gzip or deflate to reduce bandwidth usage and speed up page load times",
    "usage": "const compression = require('compression'); app.use(compression());",
    "tags": [
      "compression",
      "gzip",
      "performance",
      "middleware",
      "bandwidth"
    ],
    "category": "Performance"
  },
  {
    "title": "Body-parser",
    "description": "A middleware that parses incoming request bodies in a middleware before handlers, available under the req.body property",
    "usage": "const bodyParser = require('body-parser'); app.use(bodyParser.json()); app.use(bodyParser.urlencoded({ extended: true }));",
    "tags": [
      "parse",
      "body",
      "json",
      "urlencoded",
      "middleware"
    ],
    "category": "Utility"
  },
  {
    "title": "Cookie-parser",
    "description": "A middleware for parsing Cookie header and populating req.cookies with an object keyed by the cookie names",
    "usage": "const cookieParser = require('cookie-parser'); app.use(cookieParser('secret'));",
    "tags": [
      "cookie",
      "session",
      "parse",
      "headers",
      "middleware"
    ],
    "category": "Utility"
  },
  {
    "title": "Passport",
    "description": "A popular authentication middleware that supports multiple authentication strategies including OAuth, local, and OpenID Connect",
    "usage": "const passport = require('passport'); app.use(passport.initialize()); passport.use(new LocalStrategy());",
    "tags": [
      "authentication",
      "oauth",
      "strategies",
      "login",
      "session"
    ],
    "category": "Security"
  },
  {
    "title": "UUID",
    "description": "A simple and fast library for generating RFC-compliant Universally Unique Identifiers (UUIDs) in Node.js applications",
    "usage": "const { v4: uuidv4 } = require('uuid'); const id = uuidv4();",
    "tags": [
      "uuid",
      "identifier",
      "unique",
      "id",
      "generator"
    ],
    "category": "Utility"
  },
  {
    "title": "Validator",
    "description": "A library of string validators and sanitizers for checking email, URL, and other input formats with extensive validation functions",
    "usage": "const validator = require('validator'); const isValidEmail = validator.isEmail('test@example.com'); const sanitized = validator.escape('<script>');",
    "tags": [
      "validation",
      "sanitization",
      "email",
      "url",
      "string"
    ],
    "category": "Validation"
  },
  {
    "title": "Nodemon",
    "description": "A development tool that automatically restarts the Node.js application when file changes are detected in the directory",
    "usage": "nodemon app.js",
    "tags": [
      "dev",
      "auto-reload",
      "development",
      "restart",
      "watch"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Concurrently",
    "description": "A tool for running multiple commands concurrently, useful for starting both backend and frontend servers in full-stack projects",
    "usage": "concurrently \"npm run server\" \"npm run client\"",
    "tags": [
      "concurrent",
      "commands",
      "script",
      "parallel",
      "npm"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Cross-env",
    "description": "A simple package that sets environment variables consistently across Windows and Unix platforms for cross-platform scripts",
    "usage": "cross-env NODE_ENV=production npm start",
    "tags": [
      "env",
      "windows",
      "unix",
      "cross-platform",
      "variables"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Rimraf",
    "description": "A deep deletion module for Node.js that provides rm -rf functionality for directories and files in a cross-platform manner",
    "usage": "const rimraf = require('rimraf'); rimraf.sync('dist');",
    "tags": [
      "delete",
      "clean",
      "rm",
      "files",
      "directory"
    ],
    "category": "Utility"
  }
];
