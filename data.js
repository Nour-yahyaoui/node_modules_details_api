// Node.js Library Documentation
// Total modules: 547
// Last updated: 2026-09-05 17:18:27

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
  },
  {
    "title": "Winston",
    "description": "Versatile logging library supporting multiple transports, custom log levels, and JSON log formatting",
    "usage": "const winston = require('winston'); const logger = winston.createLogger({ transports: [new winston.transports.Console()] });",
    "tags": [
      "logging",
      "debug",
      "console",
      "transports"
    ],
    "category": "Logging"
  },
  {
    "title": "Nodemon",
    "description": "Development tool that automatically restarts Node.js applications when file changes are detected in the directory",
    "usage": "nodemon app.js",
    "tags": [
      "dev",
      "auto-reload",
      "watch",
      "restart"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "NestJS",
    "description": "Progressive TypeScript framework for building efficient, reliable, and scalable server-side applications",
    "usage": "import { Controller, Get } from '@nestjs/common'; @Controller() export class AppController { @Get() getHello(): string { return 'Hello World'; } }",
    "tags": [
      "typescript",
      "framework",
      "enterprise",
      "modular"
    ],
    "category": "Web Framework"
  },
  {
    "title": "TypeORM",
    "description": "ORM supporting Active Record and Data Mapper patterns with full TypeScript and multiple database drivers",
    "usage": "import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'; @Entity() export class User { @PrimaryGeneratedColumn() id: number; @Column() name: string; }",
    "tags": [
      "orm",
      "database",
      "typescript",
      "sql"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Prisma",
    "description": "Next-generation ORM with type-safe queries, migrations, and automatic SQL generation for Node.js and TypeScript",
    "usage": "const { PrismaClient } = require('@prisma/client'); const prisma = new PrismaClient(); const users = await prisma.user.findMany();",
    "tags": [
      "orm",
      "database",
      "typescript",
      "prisma"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Sequelize",
    "description": "Promise-based ORM supporting PostgreSQL, MySQL, MariaDB, SQLite, and MSSQL with model definitions and migrations",
    "usage": "const { Sequelize, DataTypes } = require('sequelize'); const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'mysql' });",
    "tags": [
      "orm",
      "database",
      "sql",
      "models"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Knex.js",
    "description": "SQL query builder with schema migrations and support for PostgreSQL, MySQL, SQLite, and many other databases",
    "usage": "const knex = require('knex')({ client: 'sqlite3', connection: { filename: './data.db' } }); const users = await knex('users').where('age', '>', 18);",
    "tags": [
      "sql",
      "query",
      "database",
      "migrations"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "MongoDB (Native Driver)",
    "description": "Official MongoDB driver with connection pooling, change streams, and aggregation pipeline support",
    "usage": "const { MongoClient } = require('mongodb'); const client = new MongoClient('mongodb://localhost:27017'); await client.connect();",
    "tags": [
      "mongodb",
      "database",
      "nosql",
      "driver"
    ],
    "category": "Database"
  },
  {
    "title": "Redis (ioredis)",
    "description": "Complete Redis client with clustering, Lua scripting, and support for all Redis commands",
    "usage": "const Redis = require('ioredis'); const redis = new Redis({ host: 'localhost', port: 6379 }); await redis.set('key', 'value');",
    "tags": [
      "redis",
      "cache",
      "database",
      "in-memory"
    ],
    "category": "Database"
  },
  {
    "title": "PG (PostgreSQL)",
    "description": "PostgreSQL client with connection pooling, prepared statements, and binary parsing for Node.js",
    "usage": "const { Client } = require('pg'); const client = new Client({ user: 'user', host: 'localhost', database: 'mydb' }); await client.connect();",
    "tags": [
      "postgresql",
      "database",
      "driver",
      "sql"
    ],
    "category": "Database"
  },
  {
    "title": "MySQL2",
    "description": "Fast MySQL client with prepared statements, connection pooling, and promise support for Node.js",
    "usage": "const mysql = require('mysql2/promise'); const connection = await mysql.createConnection({ host: 'localhost', user: 'root' });",
    "tags": [
      "mysql",
      "database",
      "driver",
      "pool"
    ],
    "category": "Database"
  },
  {
    "title": "SQLite3",
    "description": "Powerful SQLite3 driver providing a low-level interface to SQLite databases with verbose error reporting",
    "usage": "const sqlite3 = require('sqlite3').verbose(); const db = new sqlite3.Database(':memory:');",
    "tags": [
      "database",
      "sqlite",
      "embedded",
      "driver"
    ],
    "category": "Database"
  },
  {
    "title": "Puppeteer",
    "description": "Headless Chrome automation library for controlling Chrome/Chromium programmatically for testing and scraping",
    "usage": "const puppeteer = require('puppeteer'); const browser = await puppeteer.launch(); const page = await browser.newPage();",
    "tags": [
      "automation",
      "browser",
      "headless",
      "testing"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Playwright",
    "description": "Browser automation supporting Chromium, Firefox, and WebKit with auto-waiting and modern testing features",
    "usage": "const { chromium } = require('playwright'); const browser = await chromium.launch(); const page = await browser.newPage();",
    "tags": [
      "automation",
      "browser",
      "testing",
      "cross-browser"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Mocha",
    "description": "Feature-rich test framework for Node.js with async testing, reporting, and flexible assertion support",
    "usage": "describe('Array', function() { it('should return -1 when value is not present', function() { assert.equal([1,2,3].indexOf(4), -1); }); });",
    "tags": [
      "testing",
      "unit-test",
      "async",
      "reporting"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Chai",
    "description": "BDD assertion library with expect, should, and assert interfaces for Node.js and browsers",
    "usage": "const expect = require('chai').expect; expect(2 + 2).to.equal(4);",
    "tags": [
      "testing",
      "assertions",
      "bdd",
      "chai"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Sinon",
    "description": "Test spy, stub, and mock library for testing components in isolation with comprehensive assertion support",
    "usage": "const sinon = require('sinon'); const callback = sinon.spy(); callback(); sinon.assert.calledOnce(callback);",
    "tags": [
      "testing",
      "mock",
      "spy",
      "stub"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Vite",
    "description": "Fast build tool with instant server start and lightning-fast HMR for modern web projects",
    "usage": "npm create vite@latest my-app -- --template react",
    "tags": [
      "bundler",
      "build",
      "dev-server",
      "hmr"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Webpack",
    "description": "Powerful module bundler that transforms JavaScript, assets, and CSS into optimized production bundles",
    "usage": "webpack --config webpack.config.js",
    "tags": [
      "bundler",
      "build",
      "assets",
      "loader"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "ESBuild",
    "description": "Extremely fast JavaScript bundler that compiles TypeScript and JavaScript to ESM or CJS modules",
    "usage": "require('esbuild').build({ entryPoints: ['app.js'], bundle: true, outfile: 'out.js' });",
    "tags": [
      "bundler",
      "build",
      "fast",
      "typescript"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Hapi",
    "description": "Rich framework for building applications with configuration-based routing, validation, and plugin system",
    "usage": "const Hapi = require('@hapi/hapi'); const server = Hapi.server({ port: 3000 }); server.route({ method: 'GET', path: '/', handler: () => 'Hello World' });",
    "tags": [
      "web",
      "framework",
      "configuration",
      "enterprise"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Inquirer",
    "description": "Collection of interactive CLI prompts for input, selection, and confirmation in terminal applications",
    "usage": "const inquirer = require('inquirer'); const answers = await inquirer.prompt([{ type: 'input', name: 'name', message: 'Enter name' }]);",
    "tags": [
      "cli",
      "prompts",
      "terminal",
      "interactive"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Moment.js",
    "description": "Comprehensive date library for parsing, validating, manipulating, and formatting dates with internationalization",
    "usage": "const moment = require('moment'); const now = moment(); const formatted = now.format('YYYY-MM-DD');",
    "tags": [
      "date",
      "time",
      "datetime",
      "formatting"
    ],
    "category": "Utility"
  },
  {
    "title": "Sharp",
    "description": "High-performance image processing with resizing, cropping, format conversion, and image optimization",
    "usage": "const sharp = require('sharp'); await sharp('input.jpg').resize(300, 300).toFile('output.jpg');",
    "tags": [
      "image",
      "processing",
      "resize",
      "conversion"
    ],
    "category": "Utility"
  },
  {
    "title": "PDFKit",
    "description": "PDF generation library with support for text, images, vector graphics, and tables in Node.js",
    "usage": "const PDFDocument = require('pdfkit'); const doc = new PDFDocument(); doc.text('Hello World'); doc.pipe(fs.createWriteStream('output.pdf')); doc.end();",
    "tags": [
      "pdf",
      "generation",
      "documents",
      "report"
    ],
    "category": "Utility"
  },
  {
    "title": "ExcelJS",
    "description": "Read, write, and manipulate Excel files with support for xlsx, csv, and other spreadsheet formats",
    "usage": "const Excel = require('exceljs'); const workbook = new Excel.Workbook(); const worksheet = workbook.addWorksheet('Sheet 1');",
    "tags": [
      "excel",
      "spreadsheet",
      "xlsx",
      "csv"
    ],
    "category": "Utility"
  },
  {
    "title": "Jimp",
    "description": "Pure JavaScript image processing with resizing, cropping, filters, and color manipulation capabilities",
    "usage": "const Jimp = require('jimp'); const image = await Jimp.read('input.jpg'); await image.resize(300, 300).greyscale().writeAsync('output.jpg');",
    "tags": [
      "image",
      "processing",
      "resize",
      "filter"
    ],
    "category": "Utility"
  },
  {
    "title": "Pino",
    "description": "Fast and low-overhead JSON logging with log rotation and native JSON output for high-performance apps",
    "usage": "const pino = require('pino'); const logger = pino({ level: 'info' }); logger.info('Server started');",
    "tags": [
      "logging",
      "performance",
      "json",
      "fast"
    ],
    "category": "Logging"
  },
  {
    "title": "Drizzle ORM",
    "description": "Lightweight SQL ORM with zero dependencies and full TypeScript support for modern applications",
    "usage": "import { drizzle } from 'drizzle-orm/better-sqlite3'; import Database from 'better-sqlite3'; const db = drizzle(new Database('sqlite.db'));",
    "tags": [
      "orm",
      "database",
      "typescript",
      "lightweight"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Rimraf",
    "description": "Deep deletion module providing rm -rf functionality for directories and files across platforms",
    "usage": "const rimraf = require('rimraf'); rimraf.sync('dist');",
    "tags": [
      "delete",
      "clean",
      "rm",
      "files"
    ],
    "category": "Utility"
  },
  {
    "title": "Nodemailer",
    "description": "Email sending module with support for SMTP, attachments, HTML content, and multiple transport mechanisms",
    "usage": "const nodemailer = require('nodemailer'); const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: 'user@gmail.com', pass: 'pass' } }); await transporter.sendMail({ from: 'sender', to: 'receiver', subject: 'Hello', text: 'World' });",
    "tags": [
      "email",
      "smtp",
      "mail",
      "attachment"
    ],
    "category": "Utility"
  },
  {
    "title": "Bull",
    "description": "Redis-based job queue for handling background jobs, scheduling, and processing in Node.js applications",
    "usage": "const Queue = require('bull'); const queue = new Queue('email'); queue.add({ email: 'test@example.com' }); queue.process(async (job) => { await sendEmail(job.data.email); });",
    "tags": [
      "queue",
      "background",
      "jobs",
      "redis"
    ],
    "category": "Background Processing"
  },
  {
    "title": "Agenda",
    "description": "MongoDB-backed job scheduling library for creating and managing recurring jobs and cron tasks",
    "usage": "const Agenda = require('agenda'); const agenda = new Agenda({ db: { address: 'mongodb://localhost/agenda' } }); agenda.define('send report', async () => { await sendReport(); }); await agenda.every('0 0 * * *', 'send report');",
    "tags": [
      "schedule",
      "jobs",
      "cron",
      "mongodb"
    ],
    "category": "Background Processing"
  },
  {
    "title": "PM2",
    "description": "Production process manager for Node.js with built-in load balancer, logging, and application monitoring",
    "usage": "pm2 start app.js --name my-app --watch",
    "tags": [
      "process",
      "production",
      "manager",
      "monitoring"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Forever",
    "description": "Simple daemon for keeping Node.js processes running continuously with automatic restarts on failure",
    "usage": "forever start app.js",
    "tags": [
      "process",
      "daemon",
      "restart",
      "persistent"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Handlebars",
    "description": "Minimal templating engine with logic-less templates, partials, helpers, and precompilation support",
    "usage": "const Handlebars = require('handlebars'); const template = Handlebars.compile('Hello {{name}}'); const result = template({ name: 'World' });",
    "tags": [
      "templating",
      "views",
      "html",
      "partials"
    ],
    "category": "Utility"
  },
  {
    "title": "EJS",
    "description": "Embedded JavaScript templating with simple syntax, includes, and support for dynamic content rendering",
    "usage": "const ejs = require('ejs'); const html = ejs.render('<h1><%= title %></h1>', { title: 'Hello World' });",
    "tags": [
      "templating",
      "views",
      "html",
      "embed"
    ],
    "category": "Utility"
  },
  {
    "title": "Pug",
    "description": "High-performance template engine with clean, whitespace-sensitive syntax and powerful inheritance features",
    "usage": "const pug = require('pug'); const html = pug.render('h1 Hello World');",
    "tags": [
      "templating",
      "views",
      "html",
      "syntax"
    ],
    "category": "Utility"
  },
  {
    "title": "GraphQL",
    "description": "GraphQL reference implementation with schema construction, query parsing, validation, and execution",
    "usage": "const { graphql, buildSchema } = require('graphql'); const schema = buildSchema('type Query { hello: String }'); const result = await graphql(schema, '{ hello }', { hello: () => 'World' });",
    "tags": [
      "graphql",
      "api",
      "query",
      "schema"
    ],
    "category": "API"
  },
  {
    "title": "Apollo Server",
    "description": "GraphQL server for Express, Fastify, and other frameworks with built-in subscriptions and caching",
    "usage": "const { ApolloServer } = require('@apollo/server'); const server = new ApolloServer({ typeDefs, resolvers });",
    "tags": [
      "graphql",
      "api",
      "server",
      "apollo"
    ],
    "category": "API"
  },
  {
    "title": "Express GraphQL",
    "description": "Simple GraphQL middleware for Express with optional GraphiQL interface for testing and exploration",
    "usage": "const { graphqlHTTP } = require('express-graphql'); app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));",
    "tags": [
      "graphql",
      "express",
      "middleware",
      "graphiql"
    ],
    "category": "API"
  },
  {
    "title": "Mercurius",
    "description": "GraphQL server and gateway for Fastify with schema stitching, federation, and caching capabilities",
    "usage": "const fastify = require('fastify')(); fastify.register(require('mercurius'), { schema });",
    "tags": [
      "graphql",
      "fastify",
      "federation",
      "gateway"
    ],
    "category": "API"
  },
  {
    "title": "Dockerode",
    "description": "Complete Docker Remote API client for managing containers, images, volumes, and networks programmatically",
    "usage": "const Docker = require('dockerode'); const docker = new Docker(); const container = await docker.createContainer({ Image: 'node' });",
    "tags": [
      "docker",
      "containers",
      "api",
      "orchestration"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "AWS SDK",
    "description": "Official AWS SDK for Node.js with support for S3, DynamoDB, Lambda, and 200+ AWS services",
    "usage": "const AWS = require('aws-sdk'); const s3 = new AWS.S3(); const data = await s3.listBuckets().promise();",
    "tags": [
      "aws",
      "s3",
      "dynamodb",
      "lambda"
    ],
    "category": "Cloud"
  },
  {
    "title": "Google Cloud Client",
    "description": "Official Google Cloud client for Node.js with support for Storage, Firestore, Pub/Sub, and other GCP services",
    "usage": "const { Storage } = require('@google-cloud/storage'); const storage = new Storage(); const [buckets] = await storage.getBuckets();",
    "tags": [
      "google-cloud",
      "gcp",
      "storage",
      "firestore"
    ],
    "category": "Cloud"
  },
  {
    "title": "Azure SDK",
    "description": "Microsoft Azure SDK with support for Blob Storage, Queue, Service Bus, and Cosmos DB services",
    "usage": "const { BlobServiceClient } = require('@azure/storage-blob'); const client = BlobServiceClient.fromConnectionString(connectionString);",
    "tags": [
      "azure",
      "microsoft",
      "cloud",
      "storage"
    ],
    "category": "Cloud"
  },
  {
    "title": "Stripe",
    "description": "Official Stripe API client with support for payments, subscriptions, invoices, and webhook handling",
    "usage": "const stripe = require('stripe')('sk_test_...'); const paymentIntent = await stripe.paymentIntents.create({ amount: 1000, currency: 'usd' });",
    "tags": [
      "payment",
      "stripe",
      "subscription",
      "billing"
    ],
    "category": "Payment"
  },
  {
    "title": "PayPal SDK",
    "description": "PayPal REST API SDK for processing payments, managing subscriptions, and handling transactions",
    "usage": "const paypal = require('paypal-rest-sdk'); paypal.configure({ mode: 'sandbox', client_id: 'id', client_secret: 'secret' });",
    "tags": [
      "payment",
      "paypal",
      "billing",
      "transaction"
    ],
    "category": "Payment"
  },
  {
    "title": "SendGrid",
    "description": "Email delivery service client with support for transactional emails, marketing campaigns, and analytics",
    "usage": "const sgMail = require('@sendgrid/mail'); sgMail.setApiKey(process.env.SENDGRID_API_KEY); await sgMail.send({ to: 'user@example.com', from: 'no-reply@example.com', subject: 'Hello', text: 'World' });",
    "tags": [
      "email",
      "sendgrid",
      "transactional",
      "campaign"
    ],
    "category": "Utility"
  },
  {
    "title": "Nodemailer",
    "description": "Email sending module with support for SMTP, attachments, HTML content, and multiple transport mechanisms",
    "usage": "const nodemailer = require('nodemailer'); const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: 'user@gmail.com', pass: 'pass' } }); await transporter.sendMail({ from: 'sender', to: 'receiver', subject: 'Hello', text: 'World' });",
    "tags": [
      "email",
      "smtp",
      "mail",
      "attachment"
    ],
    "category": "Utility"
  },
  {
    "title": "Puppeteer Extra",
    "description": "Enhanced Puppeteer with stealth plugin, ad blocker, and additional plugins for undetectable browser automation",
    "usage": "const puppeteer = require('puppeteer-extra'); const StealthPlugin = require('puppeteer-extra-plugin-stealth'); puppeteer.use(StealthPlugin());",
    "tags": [
      "automation",
      "browser",
      "stealth",
      "scraping"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Cheerio",
    "description": "Fast jQuery-like HTML parsing for Node.js with CSS selector support and DOM manipulation",
    "usage": "const cheerio = require('cheerio'); const $ = cheerio.load('<h1>Hello</h1>'); $('h1').text('World');",
    "tags": [
      "scraping",
      "html",
      "parse",
      "selector"
    ],
    "category": "Utility"
  },
  {
    "title": "Node-cron",
    "description": "Lightweight cron job scheduler for Node.js using standard cron syntax for scheduled tasks",
    "usage": "const cron = require('node-cron'); cron.schedule('0 0 * * *', () => { console.log('Daily job'); });",
    "tags": [
      "cron",
      "schedule",
      "tasks",
      "automation"
    ],
    "category": "Background Processing"
  },
  {
    "title": "Node-schedule",
    "description": "Flexible job scheduling library with cron-like syntax, date-based scheduling, and recurring jobs",
    "usage": "const schedule = require('node-schedule'); const job = schedule.scheduleJob('*/5 * * * *', () => { console.log('Running every 5 minutes'); });",
    "tags": [
      "schedule",
      "jobs",
      "cron",
      "recurring"
    ],
    "category": "Background Processing"
  },
  {
    "title": "NeDB",
    "description": "Pure JavaScript database with MongoDB-like API for embedded applications with persistence",
    "usage": "const Datastore = require('nedb'); const db = new Datastore({ filename: 'data.db', autoload: true }); db.insert({ name: 'John' });",
    "tags": [
      "database",
      "embedded",
      "mongodb-like",
      "persistence"
    ],
    "category": "Database"
  },
  {
    "title": "LevelDB",
    "description": "Fast key-value store with simple API and support for various backends including LevelDB, RocksDB, and more",
    "usage": "const { Level } = require('level'); const db = new Level('mydb'); await db.put('key', 'value'); const value = await db.get('key');",
    "tags": [
      "database",
      "key-value",
      "leveldb",
      "embedded"
    ],
    "category": "Database"
  },
  {
    "title": "Lowdb",
    "description": "Small local database for Node.js using JSON files with lodash query support and plugins",
    "usage": "const low = require('lowdb'); const FileSync = require('lowdb/adapters/FileSync'); const adapter = new FileSync('db.json'); const db = low(adapter); db.defaults({ posts: [] }).write();",
    "tags": [
      "database",
      "json",
      "local",
      "file"
    ],
    "category": "Database"
  },
  {
    "title": "Better-sqlite3",
    "description": "Fast and efficient SQLite3 library with synchronous API and prepared statement caching",
    "usage": "const Database = require('better-sqlite3'); const db = new Database('mydb.db'); const stmt = db.prepare('SELECT * FROM users WHERE age > ?'); const users = stmt.all(18);",
    "tags": [
      "database",
      "sqlite",
      "fast",
      "synchronous"
    ],
    "category": "Database"
  },
  {
    "title": "Slonik",
    "description": "PostgreSQL client with type safety, connection pooling, and advanced query building features",
    "usage": "const { createPool } = require('slonik'); const pool = createPool('postgres://user:pass@localhost/db'); const result = await pool.query('SELECT * FROM users');",
    "tags": [
      "postgresql",
      "database",
      "typescript",
      "pool"
    ],
    "category": "Database"
  },
  {
    "title": "Kysely",
    "description": "Type-safe SQL query builder for TypeScript with rich query building and database interface generation",
    "usage": "import { Kysely, PostgresDialect } from 'kysely'; const db = new Kysely({ dialect: new PostgresDialect({ host: 'localhost', database: 'db' }) }); const users = await db.selectFrom('users').selectAll().execute();",
    "tags": [
      "sql",
      "query",
      "typescript",
      "builder"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Objection.js",
    "description": "SQL ORM with intuitive model definitions, relation management, and query building for Node.js",
    "usage": "const { Model } = require('objection'); class User extends Model { static get tableName() { return 'users'; } } const users = await User.query().where('age', '>', 18);",
    "tags": [
      "orm",
      "sql",
      "models",
      "relations"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Bookshelf.js",
    "description": "ORM for PostgreSQL, MySQL, SQLite with model relations, eager loading, and event hooks",
    "usage": "const bookshelf = require('bookshelf')(knex); const User = bookshelf.model('User', { tableName: 'users' }); const user = await User.where('id', 1).fetch();",
    "tags": [
      "orm",
      "sql",
      "models",
      "relations"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Waterline",
    "description": "ORM supporting multiple database adapters with model definitions, associations, and query building",
    "usage": "const Waterline = require('waterline'); const User = Waterline.Model.extend({ identity: 'user', connection: 'default' });",
    "tags": [
      "orm",
      "database",
      "models",
      "adapters"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "MikroORM",
    "description": "TypeScript ORM with unit of work, identity map, and support for MongoDB, SQL, and migrations",
    "usage": "import { MikroORM } from '@mikro-orm/core'; const orm = await MikroORM.init({ entities: [User], dbName: 'db', type: 'postgresql' }); const users = await orm.em.find(User, {});",
    "tags": [
      "orm",
      "typescript",
      "unit-of-work",
      "sql"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Mongoose (Advanced)",
    "description": "MongoDB ODM with advanced schema features, validation, middleware, and population for Node.js",
    "usage": "const mongoose = require('mongoose'); const userSchema = new mongoose.Schema({ name: String, age: Number }); const User = mongoose.model('User', userSchema); const users = await User.find({ age: { $gt: 18 } });",
    "tags": [
      "mongodb",
      "odm",
      "schema",
      "validation"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Typegoose",
    "description": "TypeScript-first Mongoose wrapper providing type-safe models and schema definitions",
    "usage": "import { prop, getModelForClass } from '@typegoose/typegoose'; class User { @prop() name: string; } const UserModel = getModelForClass(User);",
    "tags": [
      "typescript",
      "mongodb",
      "mongoose",
      "type-safe"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Got",
    "description": "Human-friendly and powerful HTTP request library with advanced features like retries, timeouts, and pagination",
    "usage": "const got = require('got'); const response = await got('https://api.github.com/users/nour-yahyaoui', { responseType: 'json' });",
    "tags": [
      "http",
      "api",
      "retry",
      "promises"
    ],
    "category": "HTTP Client"
  },
  {
    "title": "Node-fetch",
    "description": "Lightweight HTTP client that brings window.fetch to Node.js with native promise support",
    "usage": "const fetch = require('node-fetch'); const response = await fetch('https://api.example.com/data'); const data = await response.json();",
    "tags": [
      "http",
      "fetch",
      "promises",
      "api"
    ],
    "category": "HTTP Client"
  },
  {
    "title": "Superagent",
    "description": "Progressive HTTP client with flexible API, plugins, and support for query strings and multipart requests",
    "usage": "const superagent = require('superagent'); const response = await superagent.get('https://api.example.com/data').query({ limit: 10 });",
    "tags": [
      "http",
      "api",
      "request",
      "promises"
    ],
    "category": "HTTP Client"
  },
  {
    "title": "Argon2",
    "description": "Modern password hashing using Argon2 algorithm with configurable memory, time, and parallelism parameters",
    "usage": "const argon2 = require('argon2'); const hash = await argon2.hash('password123'); const verify = await argon2.verify(hash, 'password123');",
    "tags": [
      "security",
      "password",
      "hashing",
      "argon2"
    ],
    "category": "Security"
  },
  {
    "title": "Crypto-js",
    "description": "Pure JavaScript cryptographic library with AES, SHA, HMAC, and other encryption algorithms",
    "usage": "const CryptoJS = require('crypto-js'); const encrypted = CryptoJS.AES.encrypt('message', 'secret').toString(); const decrypted = CryptoJS.AES.decrypt(encrypted, 'secret').toString(CryptoJS.enc.Utf8);",
    "tags": [
      "encryption",
      "crypto",
      "aes",
      "hash"
    ],
    "category": "Security"
  },
  {
    "title": "Node-cache",
    "description": "Simple in-memory caching with TTL support, statistics, and key management for Node.js applications",
    "usage": "const NodeCache = require('node-cache'); const cache = new NodeCache({ stdTTL: 60 }); cache.set('key', 'value'); const value = cache.get('key');",
    "tags": [
      "cache",
      "memory",
      "ttl",
      "performance"
    ],
    "category": "Performance"
  },
  {
    "title": "Memory-cache",
    "description": "Lightweight in-memory cache with simple put/get API and expiration support",
    "usage": "const cache = require('memory-cache'); cache.put('key', 'value', 60000); const value = cache.get('key');",
    "tags": [
      "cache",
      "memory",
      "ttl",
      "simple"
    ],
    "category": "Performance"
  },
  {
    "title": "Lru-cache",
    "description": "Least Recently Used cache with configurable max size and TTL for efficient memory management",
    "usage": "const LRU = require('lru-cache'); const cache = new LRU({ max: 100, ttl: 1000 * 60 }); cache.set('key', 'value'); const value = cache.get('key');",
    "tags": [
      "cache",
      "lru",
      "memory",
      "performance"
    ],
    "category": "Performance"
  },
  {
    "title": "NanoID",
    "description": "Secure, URL-friendly unique ID generator with customizable alphabet and length options",
    "usage": "const { nanoid } = require('nanoid'); const id = nanoid(10); const customId = nanoid('abcdef', 12);",
    "tags": [
      "uuid",
      "identifier",
      "unique",
      "secure"
    ],
    "category": "Utility"
  },
  {
    "title": "Shortid",
    "description": "Short, non-sequential, URL-friendly unique ID generator with optional customization",
    "usage": "const shortid = require('shortid'); const id = shortid.generate();",
    "tags": [
      "uuid",
      "identifier",
      "unique",
      "short"
    ],
    "category": "Utility"
  },
  {
    "title": "Date-fns",
    "description": "Modern date utility library with modular functions for parsing, formatting, and manipulating dates",
    "usage": "const { format, addDays, differenceInDays } = require('date-fns'); const formatted = format(new Date(), 'yyyy-MM-dd'); const future = addDays(new Date(), 5);",
    "tags": [
      "date",
      "time",
      "datetime",
      "format"
    ],
    "category": "Utility"
  },
  {
    "title": "Luxon",
    "description": "Powerful date and time library with immutable objects, durations, and interval support",
    "usage": "const { DateTime } = require('luxon'); const now = DateTime.now(); const formatted = now.toFormat('yyyy-MM-dd HH:mm:ss');",
    "tags": [
      "date",
      "time",
      "datetime",
      "immutable"
    ],
    "category": "Utility"
  },
  {
    "title": "Day.js",
    "description": "Fast 2KB immutable date library alternative to Moment.js with plugin system and locale support",
    "usage": "const dayjs = require('dayjs'); const now = dayjs(); const formatted = now.format('YYYY-MM-DD');",
    "tags": [
      "date",
      "time",
      "datetime",
      "lightweight"
    ],
    "category": "Utility"
  },
  {
    "title": "Zod",
    "description": "TypeScript-first schema validation with static type inference, custom validators, and error formatting",
    "usage": "const z = require('zod'); const schema = z.object({ name: z.string().min(3), age: z.number().positive() }); const parsed = schema.parse({ name: 'John', age: 25 });",
    "tags": [
      "validation",
      "typescript",
      "schema",
      "type-safe"
    ],
    "category": "Validation"
  },
  {
    "title": "Yup",
    "description": "Object schema validation with async support, conditional validation, and custom error messages",
    "usage": "const yup = require('yup'); const schema = yup.object({ name: yup.string().required(), age: yup.number().positive() }); const valid = await schema.isValid({ name: 'John', age: 25 });",
    "tags": [
      "validation",
      "schema",
      "async",
      "errors"
    ],
    "category": "Validation"
  },
  {
    "title": "Ajv",
    "description": "Fast JSON schema validator with support for draft-04, draft-06, and custom keywords",
    "usage": "const Ajv = require('ajv'); const ajv = new Ajv(); const validate = ajv.compile({ type: 'string', minLength: 3 }); const valid = validate('abc');",
    "tags": [
      "validation",
      "json-schema",
      "fast",
      "schema"
    ],
    "category": "Validation"
  },
  {
    "title": "Class-validator",
    "description": "Validation using decorators for TypeScript classes with support for nested validation and groups",
    "usage": "import { IsString, MinLength, IsNumber } from 'class-validator'; class User { @IsString() @MinLength(3) name: string; @IsNumber() age: number; }",
    "tags": [
      "validation",
      "typescript",
      "decorators",
      "classes"
    ],
    "category": "Validation"
  },
  {
    "title": "NestJS/Passport",
    "description": "Passport module for NestJS providing authentication strategies and guards for GraphQL and REST APIs",
    "usage": "import { AuthGuard } from '@nestjs/passport'; @UseGuards(AuthGuard('jwt')) @Get('profile') getProfile(@Request() req) { return req.user; }",
    "tags": [
      "nestjs",
      "authentication",
      "passport",
      "guards"
    ],
    "category": "Web Framework"
  },
  {
    "title": "NestJS/GraphQL",
    "description": "GraphQL module for NestJS with code-first and schema-first approaches, subscriptions, and federation",
    "usage": "import { Resolver, Query } from '@nestjs/graphql'; @Resolver() export class AppResolver { @Query(() => String) hello(): string { return 'Hello World'; } }",
    "tags": [
      "nestjs",
      "graphql",
      "resolvers",
      "schema"
    ],
    "category": "Web Framework"
  },
  {
    "title": "AdonisJS",
    "description": "Full-stack MVC framework with ORM, authentication, and everything needed for building web applications",
    "usage": "const Route = use('Route'); Route.get('/', () => { return 'Hello World'; });",
    "tags": [
      "web",
      "framework",
      "mvc",
      "full-stack"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Sails.js",
    "description": "MVC framework for building custom, enterprise-grade Node.js applications with real-time features",
    "usage": "module.exports = { index: async function(req, res) { return res.send('Hello World'); } }",
    "tags": [
      "web",
      "framework",
      "mvc",
      "real-time"
    ],
    "category": "Web Framework"
  },
  {
    "title": "LoopBack",
    "description": "API framework for creating RESTful APIs with built-in models, relations, and authentication",
    "usage": "const { Application } = require('@loopback/core'); const app = new Application(); app.route('get', '/', async () => 'Hello World');",
    "tags": [
      "api",
      "framework",
      "rest",
      "loopback"
    ],
    "category": "Web Framework"
  },
  {
    "title": "FeathersJS",
    "description": "Real-time API framework with service architecture, hooks, and support for multiple databases",
    "usage": "const feathers = require('@feathersjs/feathers'); const app = feathers(); app.use('messages', { async get(id) { return { id, text: 'Hello' } } });",
    "tags": [
      "api",
      "realtime",
      "services",
      "hooks"
    ],
    "category": "Web Framework"
  },
  {
    "title": "BullMQ",
    "description": "Advanced job queue using Redis with support for delayed jobs, retries, and concurrency control",
    "usage": "const { Queue } = require('bullmq'); const queue = new Queue('email'); await queue.add('send', { to: 'user@example.com' });",
    "tags": [
      "queue",
      "redis",
      "jobs",
      "background"
    ],
    "category": "Background Processing"
  },
  {
    "title": "Bee-queue",
    "description": "Simple and secure Redis-based job queue with pause/resume and job status tracking",
    "usage": "const Queue = require('bee-queue'); const queue = new Queue('email'); queue.process(async (job) => { await sendEmail(job.data); });",
    "tags": [
      "queue",
      "redis",
      "jobs",
      "simple"
    ],
    "category": "Background Processing"
  },
  {
    "title": "Kue",
    "description": "Redis-backed priority job queue with rich UI, job status, and event listeners",
    "usage": "const kue = require('kue'); const queue = kue.createQueue(); queue.create('email', { to: 'user@example.com' }).save();",
    "tags": [
      "queue",
      "redis",
      "jobs",
      "priority"
    ],
    "category": "Background Processing"
  },
  {
    "title": "Node-resque",
    "description": "Job queue system using Redis with multiple queues, delayed jobs, and plugin support",
    "usage": "const NodeResque = require('node-resque'); const queue = new NodeResque.Queue({ connection: { redis: { host: 'localhost' } } }); queue.enqueue('email', 'send', ['user@example.com']);",
    "tags": [
      "queue",
      "redis",
      "jobs",
      "delayed"
    ],
    "category": "Background Processing"
  },
  {
    "title": "Moleculer",
    "description": "Fast microservices framework with service discovery, load balancing, and built-in caching",
    "usage": "const { ServiceBroker } = require('moleculer'); const broker = new ServiceBroker(); broker.createService({ name: 'math', actions: { add(ctx) { return ctx.params.a + ctx.params.b } } });",
    "tags": [
      "microservices",
      "framework",
      "service-discovery",
      "load-balancing"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Seneca",
    "description": "Microservices toolkit with pattern matching, transport plugins, and message-based architecture",
    "usage": "const Seneca = require('seneca'); const seneca = Seneca(); seneca.add('role:math,cmd:add', (msg, reply) => { reply(null, { result: msg.a + msg.b }) });",
    "tags": [
      "microservices",
      "patterns",
      "transport",
      "messages"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Amqplib",
    "description": "RabbitMQ client with connection management, channel handling, and message exchange patterns",
    "usage": "const amqp = require('amqplib'); const connection = await amqp.connect('amqp://localhost'); const channel = await connection.createChannel(); await channel.assertQueue('tasks'); channel.sendToQueue('tasks', Buffer.from('Hello'));",
    "tags": [
      "rabbitmq",
      "queue",
      "message",
      "amqp"
    ],
    "category": "Background Processing"
  },
  {
    "title": "MQTT",
    "description": "MQTT client for IoT and real-time messaging with publish-subscribe pattern and QoS levels",
    "usage": "const mqtt = require('mqtt'); const client = mqtt.connect('mqtt://localhost'); client.subscribe('sensors/temperature'); client.on('message', (topic, message) => { console.log(message.toString()); });",
    "tags": [
      "mqtt",
      "iot",
      "messaging",
      "pubsub"
    ],
    "category": "Real-time"
  },
  {
    "title": "Pusher",
    "description": "Real-time messaging service with WebSockets, presence channels, and webhook events",
    "usage": "const Pusher = require('pusher'); const pusher = new Pusher({ appId: 'id', key: 'key', secret: 'secret' }); pusher.trigger('channel', 'event', { message: 'Hello' });",
    "tags": [
      "websocket",
      "realtime",
      "pubsub",
      "events"
    ],
    "category": "Real-time"
  },
  {
    "title": "Ably",
    "description": "Real-time messaging platform with WebSocket and REST APIs, presence, and message history",
    "usage": "const ably = require('ably'); const client = new ably.Realtime('apiKey'); const channel = client.channels.get('channel'); channel.publish('event', { message: 'Hello' });",
    "tags": [
      "websocket",
      "realtime",
      "pubsub",
      "presence"
    ],
    "category": "Real-time"
  },
  {
    "title": "GraphQL-WS",
    "description": "GraphQL over WebSocket protocol implementation for real-time subscriptions with GraphQL",
    "usage": "const { useServer } = require('graphql-ws/lib/use/ws'); const server = useServer({ schema }, wsServer);",
    "tags": [
      "graphql",
      "websocket",
      "subscriptions",
      "realtime"
    ],
    "category": "API"
  },
  {
    "title": "JSON GraphQL Server",
    "description": "Zero-config GraphQL server that automatically generates CRUD operations from JSON data",
    "usage": "const jsonGraphqlServer = require('json-graphql-server'); const server = jsonGraphqlServer({ posts: [{ id: 1, title: 'Hello' }] });",
    "tags": [
      "graphql",
      "json",
      "crud",
      "mock"
    ],
    "category": "API"
  },
  {
    "title": "Hasura CLI",
    "description": "CLI tool for Hasura GraphQL Engine with migrations, metadata management, and seed data",
    "usage": "hasura init --endpoint https://myapp.hasura.app --admin-secret secret",
    "tags": [
      "graphql",
      "hasura",
      "cli",
      "database"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Cypress",
    "description": "Modern end-to-end testing framework with automatic waiting, time travel, and real-time reloads",
    "usage": "cy.visit('/login'); cy.get('input[name=email]').type('user@example.com'); cy.get('button').click();",
    "tags": [
      "testing",
      "e2e",
      "automation",
      "cypress"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Playwright Test",
    "description": "Cross-browser E2E testing with auto-waiting, fixtures, and parallel test execution",
    "usage": "import { test, expect } from '@playwright/test'; test('homepage loads', async ({ page }) => { await page.goto('/'); await expect(page).toHaveTitle('Home'); });",
    "tags": [
      "testing",
      "e2e",
      "playwright",
      "automation"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Cucumber",
    "description": "BDD testing with Gherkin syntax, step definitions, and hooks for behavior-driven development",
    "usage": "Feature: Login Scenario: User logs in Given I am on the login page When I enter credentials Then I see the dashboard",
    "tags": [
      "testing",
      "bdd",
      "gherkin",
      "features"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Supertest",
    "description": "HTTP assertion library for testing Express/Node.js applications with superagent integration",
    "usage": "const request = require('supertest'); const app = require('./app'); await request(app).get('/').expect(200).expect('Hello World');",
    "tags": [
      "testing",
      "http",
      "assertions",
      "express"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Nock",
    "description": "HTTP mocking library for testing with interception, recording, and custom responses",
    "usage": "const nock = require('nock'); nock('https://api.example.com').get('/users').reply(200, { users: [] });",
    "tags": [
      "testing",
      "mock",
      "http",
      "interception"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Testcontainers",
    "description": "Docker container management for tests with database, message broker, and service containers",
    "usage": "const { GenericContainer } = require('testcontainers'); const container = await new GenericContainer('postgres:13').start();",
    "tags": [
      "testing",
      "docker",
      "containers",
      "integration"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Faker",
    "description": "Generate massive amounts of fake data including names, emails, addresses, and custom types",
    "usage": "const { faker } = require('@faker-js/faker'); const name = faker.person.fullName(); const email = faker.internet.email();",
    "tags": [
      "data",
      "fake",
      "seeding",
      "testing"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Factory-girl",
    "description": "Factory library for creating test objects with default attributes and associations",
    "usage": "const factory = require('factory-girl'); factory.define('user', User, { name: 'John', email: 'john@example.com' }); const user = await factory.create('user');",
    "tags": [
      "testing",
      "factories",
      "seeding",
      "data"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Pino-pretty",
    "description": "Pretty logger for Pino with colorized output, human-readable timestamps, and log formatting",
    "usage": "const pino = require('pino'); const logger = pino({ transport: { target: 'pino-pretty' } }); logger.info('Hello World');",
    "tags": [
      "logging",
      "pino",
      "pretty",
      "console"
    ],
    "category": "Logging"
  },
  {
    "title": "Bunyan",
    "description": "JSON logging library with CLI, ring buffer, and rotation support for Node.js applications",
    "usage": "const bunyan = require('bunyan'); const logger = bunyan.createLogger({ name: 'myapp' }); logger.info({ user: 'john' }, 'User logged in');",
    "tags": [
      "logging",
      "json",
      "bunyan",
      "debug"
    ],
    "category": "Logging"
  },
  {
    "title": "Log4js",
    "description": "Logging framework with appenders, layouts, categories, and configuration-based logging",
    "usage": "const log4js = require('log4js'); log4js.configure({ appenders: { out: { type: 'stdout' } }, categories: { default: { appenders: ['out'], level: 'info' } } }); const logger = log4js.getLogger(); logger.info('Hello');",
    "tags": [
      "logging",
      "appenders",
      "categories",
      "configuration"
    ],
    "category": "Logging"
  },
  {
    "title": "Roarr",
    "description": "JSON logger with built-in filtering, child loggers, and context propagation",
    "usage": "const ROARR = require('roarr'); const log = ROARR.child({ context: 'user-service' }); log.info({ user: 'john' }, 'User created');",
    "tags": [
      "logging",
      "json",
      "context",
      "child"
    ],
    "category": "Logging"
  },
  {
    "title": "Yargs",
    "description": "Sophisticated CLI argument parser with command handling, help generation, and validation",
    "usage": "const yargs = require('yargs'); const argv = yargs.option('port', { alias: 'p', type: 'number', default: 3000 }).argv;",
    "tags": [
      "cli",
      "arguments",
      "parsing",
      "commands"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Ora",
    "description": "Elegant terminal spinner for CLI applications with customizable styles and colors",
    "usage": "const ora = require('ora'); const spinner = ora('Loading data...').start(); await fetchData(); spinner.succeed('Data loaded');",
    "tags": [
      "cli",
      "spinner",
      "terminal",
      "progress"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Listr",
    "description": "Task runner for CLI with interactive progress, subtasks, and error handling",
    "usage": "const Listr = require('listr'); const tasks = new Listr([{ title: 'Task 1', task: () => Promise.resolve() }]); await tasks.run();",
    "tags": [
      "cli",
      "tasks",
      "progress",
      "interactive"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Execa",
    "description": "Improved child_process with promises, buffer limits, and cross-platform command execution",
    "usage": "const execa = require('execa'); const { stdout } = await execa('echo', ['Hello World']); console.log(stdout);",
    "tags": [
      "child_process",
      "exec",
      "promises",
      "cross-platform"
    ],
    "category": "Utility"
  },
  {
    "title": "Shelljs",
    "description": "Cross-platform shell commands with Unix-like syntax for Node.js applications",
    "usage": "const shell = require('shelljs'); shell.cd('project'); if (!shell.which('git')) shell.echo('Git not found');",
    "tags": [
      "shell",
      "commands",
      "cross-platform",
      "unix"
    ],
    "category": "Utility"
  },
  {
    "title": "Glob",
    "description": "Pattern matching for files using glob syntax with sync and async matching options",
    "usage": "const glob = require('glob'); const files = glob.sync('src/**/*.js'); console.log(files);",
    "tags": [
      "files",
      "pattern",
      "matching",
      "glob"
    ],
    "category": "Utility"
  },
  {
    "title": "Chokidar",
    "description": "File watching library with cross-platform support, event handling, and ignore patterns",
    "usage": "const chokidar = require('chokidar'); const watcher = chokidar.watch('src/**/*.js'); watcher.on('change', path => console.log(`File ${path} changed`));",
    "tags": [
      "file",
      "watch",
      "fs",
      "events"
    ],
    "category": "Utility"
  },
  {
    "title": "Ncp",
    "description": "Copy files and directories recursively with options for overwrite, filtering, and preserving permissions",
    "usage": "const ncp = require('ncp'); ncp('src', 'dist', { stopOnErr: true }, err => { if (err) console.error(err); });",
    "tags": [
      "file",
      "copy",
      "recursive",
      "fs"
    ],
    "category": "Utility"
  },
  {
    "title": "Archiver",
    "description": "Create ZIP and TAR archives with compression, stream support, and file entry management",
    "usage": "const archiver = require('archiver'); const archive = archiver('zip'); archive.directory('src', false); archive.pipe(fs.createWriteStream('output.zip')); await archive.finalize();",
    "tags": [
      "zip",
      "archive",
      "compression",
      "tar"
    ],
    "category": "Utility"
  },
  {
    "title": "Extract-zip",
    "description": "Extract ZIP archives with progress reporting, file filtering, and directory structure preservation",
    "usage": "const extract = require('extract-zip'); await extract('archive.zip', { dir: 'output' });",
    "tags": [
      "zip",
      "archive",
      "extract",
      "compression"
    ],
    "category": "Utility"
  },
  {
    "title": "Node-pty",
    "description": "Pseudo terminal (PTY) for Node.js with support for command execution and terminal emulation",
    "usage": "const pty = require('node-pty'); const term = pty.spawn('bash', [], { name: 'xterm-color', cols: 80, rows: 30 }); term.on('data', data => process.stdout.write(data));",
    "tags": [
      "terminal",
      "pty",
      "shell",
      "emulation"
    ],
    "category": "Utility"
  },
  {
    "title": "Node-emoji",
    "description": "Emoji support with conversion between emoji names, characters, and Unicode representations",
    "usage": "const emoji = require('node-emoji'); console.log(emoji.emojify('I :heart: Node.js')); console.log(emoji.get('heart'));",
    "tags": [
      "emoji",
      "unicode",
      "conversion",
      "unicode"
    ],
    "category": "Utility"
  },
  {
    "title": "Oclif",
    "description": "CLI framework for building command-line tools with plugins, commands, and flags",
    "usage": "const { Command } = require('@oclif/core'); class HelloCommand extends Command { async run() { this.log('Hello World'); } }",
    "tags": [
      "cli",
      "framework",
      "commands",
      "plugins"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Gulp",
    "description": "Task runner for automation with streams, plugins, and incremental builds",
    "usage": "const gulp = require('gulp'); gulp.task('default', () => { return gulp.src('src/*.js').pipe(gulp.dest('dist')); });",
    "tags": [
      "task-runner",
      "build",
      "automation",
      "streams"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Grunt",
    "description": "Task runner with extensive plugin ecosystem for build automation and workflow management",
    "usage": "module.exports = function(grunt) { grunt.registerTask('default', ['uglify']); }",
    "tags": [
      "task-runner",
      "build",
      "automation",
      "plugins"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Babel",
    "description": "JavaScript compiler for transforming ES6+ code into backward-compatible JavaScript versions",
    "usage": "npx babel src --out-dir dist",
    "tags": [
      "transpiler",
      "babel",
      "es6",
      "compiler"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "TypeScript",
    "description": "Typed superset of JavaScript that compiles to plain JavaScript with full type checking",
    "usage": "npx tsc app.ts",
    "tags": [
      "typescript",
      "typing",
      "compiler",
      "language"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "SWC",
    "description": "Extremely fast Rust-based JavaScript/TypeScript compiler for building and bundling",
    "usage": "npx swc src -d dist",
    "tags": [
      "compiler",
      "fast",
      "rust",
      "typescript"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Parcel",
    "description": "Zero-configuration web application bundler with built-in support for many file types",
    "usage": "parcel build index.html",
    "tags": [
      "bundler",
      "build",
      "zero-config",
      "assets"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Rollup",
    "description": "Module bundler with tree-shaking, ESM support, and plugin ecosystem for library development",
    "usage": "rollup --config rollup.config.js",
    "tags": [
      "bundler",
      "tree-shaking",
      "esm",
      "library"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Snowpack",
    "description": "Build tool using native ESM with fast builds, Hot Module Replacement, and no bundling",
    "usage": "snowpack dev",
    "tags": [
      "build",
      "esm",
      "fast",
      "hmr"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Docker Compose",
    "description": "Define and run multi-container Docker applications with service configuration and networking",
    "usage": "docker-compose up -d",
    "tags": [
      "docker",
      "compose",
      "orchestration",
      "containers"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Kubernetes Client",
    "description": "Official Kubernetes client for Node.js with pod management, service discovery, and deployment",
    "usage": "const k8s = require('@kubernetes/client-node'); const kc = new k8s.KubeConfig(); kc.loadFromDefault();",
    "tags": [
      "kubernetes",
      "k8s",
      "orchestration",
      "containers"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Terraform (CDKTF)",
    "description": "Cloud Development Kit for Terraform with infrastructure as code using TypeScript and JavaScript",
    "usage": "import { Construct } from 'constructs'; import { App, TerraformStack } from 'cdktf';",
    "tags": [
      "terraform",
      "iac",
      "cloud",
      "infrastructure"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Pulumi",
    "description": "Modern infrastructure as code using TypeScript with support for AWS, Azure, GCP, and Kubernetes",
    "usage": "import * as aws from '@pulumi/aws'; const bucket = new aws.s3.Bucket('my-bucket');",
    "tags": [
      "iac",
      "pulumi",
      "cloud",
      "infrastructure"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Serverless",
    "description": "Framework for building serverless applications with AWS Lambda, API Gateway, and other cloud services",
    "usage": "serverless deploy",
    "tags": [
      "serverless",
      "aws",
      "lambda",
      "cloud"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "AWS Lambda",
    "description": "AWS Lambda runtime for Node.js with event handling, context, and callback support",
    "usage": "exports.handler = async (event) => { return { statusCode: 200, body: 'Hello' }; };",
    "tags": [
      "aws",
      "lambda",
      "serverless",
      "cloud"
    ],
    "category": "Cloud"
  },
  {
    "title": "Azure Functions",
    "description": "Azure Functions runtime for Node.js with triggers, bindings, and HTTP endpoints",
    "usage": "module.exports = async function (context, req) { context.res = { body: 'Hello' }; };",
    "tags": [
      "azure",
      "functions",
      "serverless",
      "cloud"
    ],
    "category": "Cloud"
  },
  {
    "title": "Google Cloud Functions",
    "description": "Google Cloud Functions runtime with HTTP triggers, background events, and Pub/Sub support",
    "usage": "exports.hello = (req, res) => { res.send('Hello World'); };",
    "tags": [
      "gcp",
      "functions",
      "serverless",
      "cloud"
    ],
    "category": "Cloud"
  },
  {
    "title": "Vercel CLI",
    "description": "CLI for Vercel platform with deployments, environment variables, and project management",
    "usage": "vercel --prod",
    "tags": [
      "vercel",
      "deployment",
      "hosting",
      "cli"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Netlify CLI",
    "description": "CLI for Netlify platform with site deployments, functions, and environment management",
    "usage": "netlify deploy --prod",
    "tags": [
      "netlify",
      "deployment",
      "hosting",
      "cli"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Heroku CLI",
    "description": "CLI for Heroku platform with app management, add-ons, and dyno scaling",
    "usage": "heroku create my-app",
    "tags": [
      "heroku",
      "deployment",
      "hosting",
      "cli"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Supabase JS",
    "description": "Supabase client with authentication, realtime subscriptions, and PostgreSQL database access",
    "usage": "const { createClient } = require('@supabase/supabase-js'); const supabase = createClient(url, key); const { data } = await supabase.from('users').select('*');",
    "tags": [
      "supabase",
      "database",
      "authentication",
      "realtime"
    ],
    "category": "Database"
  },
  {
    "title": "Firebase Admin",
    "description": "Firebase Admin SDK with authentication, Firestore, Cloud Messaging, and storage",
    "usage": "const admin = require('firebase-admin'); admin.initializeApp(); const user = await admin.auth().getUser(uid);",
    "tags": [
      "firebase",
      "authentication",
      "database",
      "cloud"
    ],
    "category": "Cloud"
  },
  {
    "title": "Firebase Client",
    "description": "Firebase client SDK with realtime database, Firestore, authentication, and storage",
    "usage": "import { initializeApp } from 'firebase/app'; import { getDatabase, ref, onValue } from 'firebase/database';",
    "tags": [
      "firebase",
      "database",
      "authentication",
      "realtime"
    ],
    "category": "Cloud"
  },
  {
    "title": "Appwrite",
    "description": "Backend server with authentication, database, storage, and serverless functions",
    "usage": "const sdk = require('node-appwrite'); const client = new sdk.Client(); client.setEndpoint('https://cloud.appwrite.io/v1');",
    "tags": [
      "backend",
      "authentication",
      "database",
      "storage"
    ],
    "category": "Cloud"
  },
  {
    "title": "Directus",
    "description": "Headless CMS with REST and GraphQL APIs, authentication, and content management",
    "usage": "const { createDirectus, rest } = require('@directus/sdk'); const client = createDirectus('https://api.example.com').with(rest());",
    "tags": [
      "cms",
      "headless",
      "api",
      "content"
    ],
    "category": "Utility"
  },
  {
    "title": "Strapi SDK",
    "description": "Client for Strapi headless CMS with REST and GraphQL support and authentication",
    "usage": "const { Strapi } = require('@strapi/strapi'); const strapi = new Strapi();",
    "tags": [
      "cms",
      "headless",
      "strapi",
      "content"
    ],
    "category": "Utility"
  },
  {
    "title": "Contentful",
    "description": "Contentful content management client with entry management, delivery, and preview APIs",
    "usage": "const contentful = require('contentful'); const client = contentful.createClient({ space: 'space', accessToken: 'token' }); const entries = await client.getEntries();",
    "tags": [
      "cms",
      "contentful",
      "content",
      "api"
    ],
    "category": "Utility"
  },
  {
    "title": "Prismic",
    "description": "Prismic headless CMS client with query builder, content management, and slicing",
    "usage": "const prismic = require('@prismicio/client'); const client = prismic.createClient('repository'); const documents = await client.getAllByType('page');",
    "tags": [
      "cms",
      "prismic",
      "content",
      "headless"
    ],
    "category": "Utility"
  },
  {
    "title": "KeystoneJS",
    "description": "Headless CMS and GraphQL API framework with authentication, access control, and admin UI",
    "usage": "import { config } from '@keystone-6/core'; export default config({ lists: { User: { fields: { name: { type: 'text' } } } } });",
    "tags": [
      "cms",
      "graphql",
      "admin",
      "headless"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Payload CMS",
    "description": "Headless CMS with authentication, access control, and REST API built with Express and MongoDB",
    "usage": "import { buildConfig } from 'payload/config'; export default buildConfig({ collections: [{ slug: 'users', fields: [] }] });",
    "tags": [
      "cms",
      "headless",
      "mongodb",
      "rest-api"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Ghost Admin API",
    "description": "Ghost CMS admin API client for managing posts, users, and settings programmatically",
    "usage": "const GhostAdminAPI = require('@tryghost/admin-api'); const api = new GhostAdminAPI({ url: 'url', key: 'key' }); const posts = await api.posts.browse();",
    "tags": [
      "cms",
      "ghost",
      "blog",
      "admin"
    ],
    "category": "Utility"
  },
  {
    "title": "WordPress REST API",
    "description": "WordPress REST API client with posts, pages, users, and custom endpoints support",
    "usage": "const wp = require('wordpress-rest-api'); const client = wp({ endpoint: 'https://example.com/wp-json' }); const posts = await client.posts();",
    "tags": [
      "wordpress",
      "cms",
      "rest-api",
      "blog"
    ],
    "category": "Utility"
  },
  {
    "title": "Shopify API",
    "description": "Shopify API client for storefront and admin operations with GraphQL and REST support",
    "usage": "const Shopify = require('shopify-api-node'); const shopify = new Shopify({ shopName: 'myshop', apiKey: 'key', password: 'pass' }); const products = await shopify.product.list();",
    "tags": [
      "shopify",
      "ecommerce",
      "api",
      "graphql"
    ],
    "category": "Payment"
  },
  {
    "title": "WooCommerce API",
    "description": "WooCommerce REST API client with products, orders, customers, and coupons management",
    "usage": "const WooCommerceAPI = require('woocommerce-api'); const WooCommerce = new WooCommerceAPI({ url: 'url', consumerKey: 'key', consumerSecret: 'secret' }); const products = await WooCommerce.get('products');",
    "tags": [
      "woocommerce",
      "ecommerce",
      "api",
      "wordpress"
    ],
    "category": "Payment"
  },
  {
    "title": "BigCommerce API",
    "description": "BigCommerce API client with catalog, checkout, and order management for ecommerce platforms",
    "usage": "const BigCommerce = require('node-bigcommerce'); const api = new BigCommerce({ clientId: 'id', accessToken: 'token' }); const products = await api.get('/v3/catalog/products');",
    "tags": [
      "bigcommerce",
      "ecommerce",
      "api",
      "catalog"
    ],
    "category": "Payment"
  },
  {
    "title": "Commerce.js",
    "description": "Commerce.js SDK for Chec API with cart, checkout, and product management",
    "usage": "const Commerce = require('commerce.js'); const commerce = new Commerce('pk_test_...'); const products = await commerce.products.list();",
    "tags": [
      "commerce",
      "ecommerce",
      "cart",
      "checkout"
    ],
    "category": "Payment"
  },
  {
    "title": "Salesforce API",
    "description": "Salesforce REST API client with CRUD operations, queries, and bulk data management",
    "usage": "const jsforce = require('jsforce'); const conn = new jsforce.Connection({ loginUrl: 'https://login.salesforce.com' }); await conn.login('user', 'password'); const accounts = await conn.query('SELECT Id, Name FROM Account');",
    "tags": [
      "salesforce",
      "crm",
      "api",
      "cloud"
    ],
    "category": "Cloud"
  },
  {
    "title": "HubSpot API",
    "description": "HubSpot API client with contacts, companies, deals, and marketing automation features",
    "usage": "const hubspot = require('@hubspot/api-client'); const client = new hubspot.Client({ accessToken: 'token' }); const contacts = await client.crm.contacts.getAll();",
    "tags": [
      "hubspot",
      "crm",
      "marketing",
      "automation"
    ],
    "category": "Cloud"
  },
  {
    "title": "Mailgun",
    "description": "Email service with sending, receiving, and tracking features for transactional and marketing emails",
    "usage": "const mailgun = require('mailgun-js'); const mg = mailgun({ apiKey: 'key', domain: 'example.com' }); await mg.messages().send({ from: 'me@example.com', to: 'you@example.com', subject: 'Hello', text: 'World' });",
    "tags": [
      "email",
      "mailgun",
      "transactional",
      "tracking"
    ],
    "category": "Utility"
  },
  {
    "title": "Postmark",
    "description": "Email delivery service with templating, open tracking, and bounce management",
    "usage": "const postmark = require('postmark'); const client = new postmark.Client('server-token'); await client.sendEmail({ From: 'from@example.com', To: 'to@example.com', Subject: 'Hello', TextBody: 'World' });",
    "tags": [
      "email",
      "postmark",
      "transactional",
      "templates"
    ],
    "category": "Utility"
  },
  {
    "title": "SES (AWS)",
    "description": "AWS Simple Email Service client with sending, receiving, and email configuration management",
    "usage": "const AWS = require('aws-sdk'); const ses = new AWS.SES({ region: 'us-east-1' }); await ses.sendEmail({ Destination: { ToAddresses: ['user@example.com'] }, Source: 'from@example.com', Message: { Subject: { Data: 'Hello' }, Body: { Text: { Data: 'World' } } } }).promise();",
    "tags": [
      "email",
      "aws",
      "ses",
      "cloud"
    ],
    "category": "Cloud"
  },
  {
    "title": "Elasticsearch",
    "description": "Official Elasticsearch client with full-text search, aggregation, and analytics features",
    "usage": "const { Client } = require('@elastic/elasticsearch'); const client = new Client({ node: 'http://localhost:9200' }); const result = await client.search({ index: 'posts', body: { query: { match: { title: 'hello' } } } });",
    "tags": [
      "search",
      "elasticsearch",
      "analytics",
      "full-text"
    ],
    "category": "Database"
  },
  {
    "title": "Meilisearch",
    "description": "Fast search engine with typo-tolerance, filtering, and instant search capabilities",
    "usage": "const { MeiliSearch } = require('meilisearch'); const client = new MeiliSearch({ host: 'http://localhost:7700' }); const results = await client.index('movies').search('Batman');",
    "tags": [
      "search",
      "meilisearch",
      "full-text",
      "typo-tolerance"
    ],
    "category": "Database"
  },
  {
    "title": "Typesense",
    "description": "Fast search engine with typo tolerance, faceting, and geolocation search support",
    "usage": "const Typesense = require('typesense'); const client = new Typesense.Client({ nodes: [{ host: 'localhost', port: '8108' }] }); const results = await client.collections('products').documents().search({ q: 'laptop', query_by: 'name' });",
    "tags": [
      "search",
      "typesense",
      "full-text",
      "typo-tolerance"
    ],
    "category": "Database"
  },
  {
    "title": "Algolia",
    "description": "Algolia search client with instant search, faceting, and AI-powered ranking",
    "usage": "const algoliasearch = require('algoliasearch'); const client = algoliasearch('app-id', 'api-key'); const index = client.initIndex('products'); const results = await index.search('laptop');",
    "tags": [
      "search",
      "algolia",
      "full-text",
      "ranking"
    ],
    "category": "Database"
  },
  {
    "title": "OpenSearch",
    "description": "OpenSearch client with search, analytics, and visualization capabilities",
    "usage": "const { Client } = require('@opensearch-project/opensearch'); const client = new Client({ node: 'http://localhost:9200' }); const result = await client.search({ index: 'posts', body: { query: { match: { content: 'hello' } } } });",
    "tags": [
      "search",
      "opensearch",
      "analytics",
      "full-text"
    ],
    "category": "Database"
  },
  {
    "title": "RxJS",
    "description": "Reactive extensions library for async programming with observables, operators, and subscriptions",
    "usage": "const { Observable } = require('rxjs'); const obs = new Observable(subscriber => { subscriber.next('Hello'); subscriber.complete(); }); obs.subscribe(value => console.log(value));",
    "tags": [
      "reactive",
      "observables",
      "async",
      "streams"
    ],
    "category": "Utility"
  },
  {
    "title": "Async",
    "description": "Async utilities with control flow, collections, and functional programming helpers",
    "usage": "const async = require('async'); async.map([1, 2, 3], (n, callback) => { callback(null, n * 2); }, (err, results) => { console.log(results); });",
    "tags": [
      "async",
      "control-flow",
      "collections",
      "functional"
    ],
    "category": "Utility"
  },
  {
    "title": "Bluebird",
    "description": "Full-featured Promise library with performance, utilities, and cancellation support",
    "usage": "const Promise = require('bluebird'); Promise.map([1, 2, 3], n => n * 2).then(results => console.log(results));",
    "tags": [
      "promises",
      "async",
      "performance",
      "utilities"
    ],
    "category": "Utility"
  },
  {
    "title": "Humanize Duration",
    "description": "Convert milliseconds to human-readable duration strings with internationalization",
    "usage": "const humanizeDuration = require('humanize-duration'); console.log(humanizeDuration(3600000)); // '1 hour'",
    "tags": [
      "time",
      "duration",
      "format",
      "human-readable"
    ],
    "category": "Utility"
  },
  {
    "title": "Pretty Bytes",
    "description": "Convert bytes to human-readable file size strings with SI and binary units",
    "usage": "const prettyBytes = require('pretty-bytes'); console.log(prettyBytes(1024)); // '1.02 kB'",
    "tags": [
      "bytes",
      "size",
      "format",
      "human-readable"
    ],
    "category": "Utility"
  },
  {
    "title": "Numeral",
    "description": "Number formatting and manipulation with currencies, percentages, and time formats",
    "usage": "const numeral = require('numeral'); console.log(numeral(1000).format('$0,0.00')); // '$1,000.00'",
    "tags": [
      "numbers",
      "format",
      "currency",
      "percentage"
    ],
    "category": "Utility"
  },
  {
    "title": "Math.js",
    "description": "Comprehensive math library with arithmetic, units, functions, and matrices",
    "usage": "const math = require('mathjs'); const result = math.evaluate('1.2 * (2 + 4.5)'); console.log(result);",
    "tags": [
      "math",
      "calculator",
      "functions",
      "units"
    ],
    "category": "Utility"
  },
  {
    "title": "Colors",
    "description": "Terminal color styling with support for color codes, themes, and ANSI escapes",
    "usage": "require('colors'); console.log('Hello World'.green.bold);",
    "tags": [
      "terminal",
      "colors",
      "styling",
      "ansi"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Cli-spinners",
    "description": "Collection of terminal spinners for CLI applications with customizable styles",
    "usage": "const cliSpinners = require('cli-spinners'); console.log(cliSpinners.dots);",
    "tags": [
      "cli",
      "spinner",
      "terminal",
      "animation"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Cli-progress",
    "description": "Terminal progress bars with customizable styles and multiple bar types",
    "usage": "const cliProgress = require('cli-progress'); const bar = new cliProgress.SingleBar(); bar.start(100, 0); bar.update(50); bar.stop();",
    "tags": [
      "cli",
      "progress",
      "terminal",
      "bar"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Prompts",
    "description": "Interactive CLI prompts with validation, cancellation, and state management",
    "usage": "const prompts = require('prompts'); const response = await prompts({ type: 'text', name: 'name', message: 'What is your name?' });",
    "tags": [
      "cli",
      "prompts",
      "terminal",
      "interactive"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Enquirer",
    "description": "Stylish CLI prompts with forms, lists, and selectors for terminal applications",
    "usage": "const { prompt } = require('enquirer'); const response = await prompt({ type: 'input', name: 'name', message: 'What is your name?' });",
    "tags": [
      "cli",
      "prompts",
      "terminal",
      "styles"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Axios (Advanced)",
    "description": "Advanced HTTP client with interceptors, retries, and cancellation support",
    "usage": "const axios = require('axios'); const instance = axios.create({ baseURL: 'https://api.example.com' }); instance.interceptors.request.use(config => { console.log('Request sent'); return config; });",
    "tags": [
      "http",
      "interceptors",
      "retry",
      "cancellation"
    ],
    "category": "HTTP Client"
  },
  {
    "title": "Ky",
    "description": "Lightweight HTTP client with hooks, retries, and timeout support built on fetch",
    "usage": "import ky from 'ky'; const json = await ky.get('https://api.example.com').json();",
    "tags": [
      "http",
      "fetch",
      "hooks",
      "retry"
    ],
    "category": "HTTP Client"
  },
  {
    "title": "Undici",
    "description": "Fast, efficient HTTP/1.1 and HTTP/2 client with connection pooling and request pipelining",
    "usage": "const { request } = require('undici'); const { body } = await request('https://api.example.com'); const data = await body.json();",
    "tags": [
      "http",
      "fetch",
      "fast",
      "pooling"
    ],
    "category": "HTTP Client"
  },
  {
    "title": "Node-fetch (Advanced)",
    "description": "Enhanced node-fetch with redirect, compression, and agent support",
    "usage": "const fetch = require('node-fetch'); const response = await fetch('https://api.example.com', { redirect: 'follow', compress: true });",
    "tags": [
      "http",
      "fetch",
      "redirect",
      "compression"
    ],
    "category": "HTTP Client"
  },
  {
    "title": "Socks",
    "description": "SOCKS proxy client for creating connections through proxy servers with authentication",
    "usage": "const socks = require('socks'); const info = await socks.createConnection({ proxy: { ipaddress: '127.0.0.1', port: 1080 }, target: { host: 'example.com', port: 80 } });",
    "tags": [
      "proxy",
      "socks",
      "networking",
      "connection"
    ],
    "category": "Utility"
  },
  {
    "title": "Nodemailer (Advanced)",
    "description": "Advanced email sending with attachments, HTML, and multiple transport options",
    "usage": "const nodemailer = require('nodemailer'); const transporter = nodemailer.createTransport({ host: 'smtp.example.com', port: 587, auth: { user: 'user', pass: 'pass' } }); await transporter.sendMail({ from: 'from@example.com', to: 'to@example.com', subject: 'Hello', html: '<b>World</b>', attachments: [{ filename: 'file.pdf', path: './file.pdf' }] });",
    "tags": [
      "email",
      "smtp",
      "attachments",
      "html"
    ],
    "category": "Utility"
  },
  {
    "title": "Node-telegram-bot-api",
    "description": "Telegram Bot API client with message, callback, and inline query handling",
    "usage": "const TelegramBot = require('node-telegram-bot-api'); const bot = new TelegramBot('TOKEN', { polling: true }); bot.onText(//start/, (msg) => { bot.sendMessage(msg.chat.id, 'Hello'); });",
    "tags": [
      "telegram",
      "bot",
      "messaging",
      "api"
    ],
    "category": "Utility"
  },
  {
    "title": "Discord.js",
    "description": "Discord API client with voice support, message handling, and command management",
    "usage": "const { Client, GatewayIntentBits } = require('discord.js'); const client = new Client({ intents: [GatewayIntentBits.Guilds] }); client.on('messageCreate', msg => { msg.reply('Hello'); });",
    "tags": [
      "discord",
      "bot",
      "api",
      "gaming"
    ],
    "category": "Utility"
  },
  {
    "title": "Slack SDK",
    "description": "Slack API client with WebSocket, REST, and webhook support for messaging and collaboration",
    "usage": "const { WebClient } = require('@slack/web-api'); const client = new WebClient('token'); const result = await client.chat.postMessage({ channel: 'general', text: 'Hello' });",
    "tags": [
      "slack",
      "messaging",
      "api",
      "collaboration"
    ],
    "category": "Utility"
  },
  {
    "title": "Zoom API",
    "description": "Zoom API client for managing meetings, webinars, users, and recordings",
    "usage": "const ZoomAPI = require('zoomapi'); const zoom = new ZoomAPI({ jwt: 'token' }); const meetings = await zoom.meetings.list({ userId: 'me' });",
    "tags": [
      "zoom",
      "video",
      "api",
      "meetings"
    ],
    "category": "Utility"
  },
  {
    "title": "Twilio",
    "description": "Twilio API client for SMS, voice, video, and WhatsApp messaging",
    "usage": "const twilio = require('twilio'); const client = twilio('sid', 'token'); await client.messages.create({ body: 'Hello', to: '+1234567890', from: '+0987654321' });",
    "tags": [
      "twilio",
      "sms",
      "voice",
      "api"
    ],
    "category": "Utility"
  },
  {
    "title": "Vonage",
    "description": "Vonage API client for SMS, voice, video, and authentication services",
    "usage": "const vonage = require('@vonage/server-sdk'); const client = new vonage({ apiKey: 'key', apiSecret: 'secret' }); client.message.sendSms('Vonage', '+1234567890', 'Hello');",
    "tags": [
      "vonage",
      "sms",
      "voice",
      "authentication"
    ],
    "category": "Utility"
  },
  {
    "title": "Plaid",
    "description": "Plaid API client for banking, financial data, and payment processing integration",
    "usage": "const { Configuration, PlaidApi } = require('@plaid/plaid-api'); const client = new PlaidApi(new Configuration({ basePath: 'https://sandbox.plaid.com', apiKey: 'key' })); const token = await client.linkTokenCreate({ client_name: 'App', language: 'en', country_codes: ['US'], user: { client_user_id: 'user' } });",
    "tags": [
      "plaid",
      "banking",
      "finance",
      "payments"
    ],
    "category": "Payment"
  },
  {
    "title": "Fastify Swagger",
    "description": "OpenAPI documentation generator for Fastify with interactive Swagger UI",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/swagger'));",
    "tags": [
      "fastify",
      "swagger",
      "openapi",
      "documentation"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify CORS",
    "description": "CORS plugin for Fastify with configurable origins, methods, and headers",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/cors'), { origin: 'https://example.com' });",
    "tags": [
      "fastify",
      "cors",
      "security",
      "middleware"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify Sensible",
    "description": "Collection of useful Fastify plugins including defaults, assertions, and utilities",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/sensible'));",
    "tags": [
      "fastify",
      "utilities",
      "assert",
      "middleware"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Static",
    "description": "Static file serving plugin for Fastify with caching and path options",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/static'), { root: './public' });",
    "tags": [
      "fastify",
      "static",
      "file",
      "serve"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Cookie",
    "description": "Cookie parsing and serialization plugin for Fastify with signed and unsigned cookies",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/cookie'), { secret: 'secret' });",
    "tags": [
      "fastify",
      "cookie",
      "session",
      "middleware"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Session",
    "description": "Session management plugin for Fastify with in-memory and Redis storage",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/session'), { secret: 'secret' });",
    "tags": [
      "fastify",
      "session",
      "store",
      "middleware"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify Graceful Shutdown",
    "description": "Graceful shutdown plugin for Fastify with health checks and SIGTERM handling",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/graceful-shutdown'));",
    "tags": [
      "fastify",
      "graceful",
      "shutdown",
      "health"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Autoload",
    "description": "Auto-load Fastify plugins from directories with configuration and ordering",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/autoload'), { dir: './plugins' });",
    "tags": [
      "fastify",
      "plugins",
      "autoload",
      "configuration"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Hapi Joi",
    "description": "Joi validation plugin for Hapi with built-in input validation and error handling",
    "usage": "const Hapi = require('@hapi/hapi'); const Joi = require('joi'); const server = Hapi.server({ port: 3000 }); server.route({ method: 'GET', path: '/', options: { validate: { query: Joi.object({ name: Joi.string() }) } } });",
    "tags": [
      "hapi",
      "validation",
      "joi",
      "input"
    ],
    "category": "Validation"
  },
  {
    "title": "Hapi Auth JWT",
    "description": "JWT authentication scheme for Hapi with token validation and user verification",
    "usage": "const Hapi = require('@hapi/hapi'); const jwt = require('hapi-auth-jwt2'); const server = Hapi.server({ port: 3000 }); await server.register(jwt); server.auth.strategy('jwt', 'jwt', { key: 'secret', validate: async (decoded) => ({ isValid: true }) });",
    "tags": [
      "hapi",
      "jwt",
      "authentication",
      "security"
    ],
    "category": "Security"
  },
  {
    "title": "Hapi Boom",
    "description": "HTTP-friendly error objects for Hapi with status codes and error messages",
    "usage": "const Hapi = require('@hapi/hapi'); const Boom = require('@hapi/boom'); const server = Hapi.server({ port: 3000 }); server.route({ method: 'GET', path: '/', handler: () => { throw Boom.notFound('Not found'); } });",
    "tags": [
      "hapi",
      "errors",
      "http",
      "boom"
    ],
    "category": "Utility"
  },
  {
    "title": "Hapi Good",
    "description": "Logging and monitoring plugin for Hapi with multiple reporters and event types",
    "usage": "const Hapi = require('@hapi/hapi'); const Good = require('@hapi/good'); const server = Hapi.server({ port: 3000 }); await server.register({ plugin: Good, options: { reporters: { console: [{ module: '@hapi/good-console' }, 'stdout'] } } });",
    "tags": [
      "hapi",
      "logging",
      "monitoring",
      "reporter"
    ],
    "category": "Logging"
  },
  {
    "title": "Hapi Inert",
    "description": "Static file serving plugin for Hapi with directory and file routing support",
    "usage": "const Hapi = require('@hapi/hapi'); const Inert = require('@hapi/inert'); const server = Hapi.server({ port: 3000 }); await server.register(Inert); server.route({ method: 'GET', path: '/{param*}', handler: { directory: { path: './public' } } });",
    "tags": [
      "hapi",
      "static",
      "file",
      "serve"
    ],
    "category": "Utility"
  },
  {
    "title": "Hapi Vision",
    "description": "Template rendering plugin for Hapi with support for Handlebars, EJS, and others",
    "usage": "const Hapi = require('@hapi/hapi'); const Vision = require('@hapi/vision'); const server = Hapi.server({ port: 3000 }); await server.register(Vision); server.views({ engines: { html: require('handlebars') }, path: './views' });",
    "tags": [
      "hapi",
      "templating",
      "views",
      "handlebars"
    ],
    "category": "Utility"
  },
  {
    "title": "NestJS Mongoose",
    "description": "Mongoose integration for NestJS with schema definitions and model injection",
    "usage": "import { Module } from '@nestjs/common'; import { MongooseModule } from '@nestjs/mongoose'; @Module({ imports: [MongooseModule.forRoot('mongodb://localhost:27017/test')] }) export class AppModule {}",
    "tags": [
      "nestjs",
      "mongodb",
      "mongoose",
      "orm"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "NestJS TypeORM",
    "description": "TypeORM integration for NestJS with entities, repositories, and migrations",
    "usage": "import { Module } from '@nestjs/common'; import { TypeOrmModule } from '@nestjs/typeorm'; @Module({ imports: [TypeOrmModule.forRoot({ type: 'postgres', host: 'localhost', database: 'test' })] }) export class AppModule {}",
    "tags": [
      "nestjs",
      "typeorm",
      "database",
      "orm"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "NestJS Config",
    "description": "Configuration module for NestJS with env files, validation, and defaults",
    "usage": "import { Module } from '@nestjs/common'; import { ConfigModule } from '@nestjs/config'; @Module({ imports: [ConfigModule.forRoot({ envFilePath: '.env' })] }) export class AppModule {}",
    "tags": [
      "nestjs",
      "config",
      "env",
      "validation"
    ],
    "category": "Utility"
  },
  {
    "title": "NestJS Cache",
    "description": "Cache module for NestJS with in-memory and Redis storage options",
    "usage": "import { Module } from '@nestjs/common'; import { CacheModule } from '@nestjs/cache-manager'; @Module({ imports: [CacheModule.register({ ttl: 60 })] }) export class AppModule {}",
    "tags": [
      "nestjs",
      "cache",
      "redis",
      "performance"
    ],
    "category": "Performance"
  },
  {
    "title": "NestJS Bull",
    "description": "Bull queue integration for NestJS with job processing and scheduling",
    "usage": "import { Module } from '@nestjs/common'; import { BullModule } from '@nestjs/bull'; @Module({ imports: [BullModule.forRoot({ redis: { host: 'localhost' } })] }) export class AppModule {}",
    "tags": [
      "nestjs",
      "bull",
      "queue",
      "jobs"
    ],
    "category": "Background Processing"
  },
  {
    "title": "NestJS Websockets",
    "description": "WebSocket gateway module for NestJS with real-time event handling",
    "usage": "import { WebSocketGateway, SubscribeMessage } from '@nestjs/websockets'; @WebSocketGateway() export class ChatGateway { @SubscribeMessage('message') handleMessage(client, data) { return { event: 'message', data: 'Hello' }; } }",
    "tags": [
      "nestjs",
      "websocket",
      "realtime",
      "gateway"
    ],
    "category": "Real-time"
  },
  {
    "title": "NestJS Microservices",
    "description": "Microservices module for NestJS with TCP, Redis, and MQTT transporters",
    "usage": "import { Controller } from '@nestjs/common'; import { MessagePattern } from '@nestjs/microservices'; @Controller() export class AppController { @MessagePattern('sum') sum(data) { return data.a + data.b; } }",
    "tags": [
      "nestjs",
      "microservices",
      "tcp",
      "mqtt"
    ],
    "category": "Web Framework"
  },
  {
    "title": "NestJS Schedule",
    "description": "Cron job scheduling for NestJS with decorators and dynamic scheduling",
    "usage": "import { Injectable } from '@nestjs/common'; import { Cron } from '@nestjs/schedule'; @Injectable() export class TasksService { @Cron('0 0 * * *') handleCron() { console.log('Daily job'); } }",
    "tags": [
      "nestjs",
      "cron",
      "schedule",
      "tasks"
    ],
    "category": "Background Processing"
  },
  {
    "title": "NestJS Mail",
    "description": "Email module for NestJS with Nodemailer integration and template support",
    "usage": "import { Module } from '@nestjs/common'; import { MailerModule } from '@nestjs-modules/mailer'; @Module({ imports: [MailerModule.forRoot({ transport: 'smtps://user:pass@smtp.example.com' })] }) export class AppModule {}",
    "tags": [
      "nestjs",
      "email",
      "mailer",
      "nodemailer"
    ],
    "category": "Utility"
  },
  {
    "title": "Prisma Client",
    "description": "Type-safe Prisma client with auto-generated queries and migrations",
    "usage": "import { PrismaClient } from '@prisma/client'; const prisma = new PrismaClient(); const user = await prisma.user.create({ data: { name: 'John' } });",
    "tags": [
      "prisma",
      "orm",
      "database",
      "typescript"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Prisma Accelerate",
    "description": "Prisma extension for connection pooling and edge caching",
    "usage": "import { PrismaClient } from '@prisma/client'; import { withAccelerate } from '@prisma/extension-accelerate'; const prisma = new PrismaClient().$extends(withAccelerate());",
    "tags": [
      "prisma",
      "accelerate",
      "cache",
      "pooling"
    ],
    "category": "Performance"
  },
  {
    "title": "Prisma Pulse",
    "description": "Real-time database change stream for Prisma with WebSocket and Redis support",
    "usage": "import { PrismaClient } from '@prisma/client'; import { withPulse } from '@prisma/pulse'; const prisma = new PrismaClient().$extends(withPulse()); prisma.pulse.subscribe('User', (event) => console.log(event));",
    "tags": [
      "prisma",
      "pulse",
      "realtime",
      "change-stream"
    ],
    "category": "Real-time"
  },
  {
    "title": "Drizzle Studio",
    "description": "Drizzle ORM with integrated database browser and query runner",
    "usage": "import { drizzle } from 'drizzle-orm/postgres-js'; import postgres from 'postgres'; const client = postgres('postgres://localhost:5432/db'); const db = drizzle(client);",
    "tags": [
      "drizzle",
      "orm",
      "postgres",
      "typescript"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Drizzle Kit",
    "description": "CLI tool for Drizzle ORM with migrations, introspection, and seed data",
    "usage": "npx drizzle-kit generate && npx drizzle-kit migrate",
    "tags": [
      "drizzle",
      "cli",
      "migrations",
      "introspection"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Knex Migrations",
    "description": "Database migration management for Knex with up/down and seed support",
    "usage": "const knex = require('knex')({ client: 'pg' }); await knex.schema.createTable('users', (table) => { table.increments('id'); table.string('name'); });",
    "tags": [
      "knex",
      "migrations",
      "sql",
      "database"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Knex Seed",
    "description": "Database seeding for Knex with CSV, JSON, and JavaScript data sources",
    "usage": "const knex = require('knex')({ client: 'pg' }); await knex('users').insert([{ name: 'John' }, { name: 'Jane' }]);",
    "tags": [
      "knex",
      "seeding",
      "database",
      "data"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Objection Relations",
    "description": "Objection.js relationship management with eager loading and model validation",
    "usage": "const { Model } = require('objection'); class User extends Model { static get relationMappings() { return { posts: { relation: Model.HasManyRelation, modelClass: Post, join: { from: 'users.id', to: 'posts.user_id' } } }; } } const users = await User.query().withGraphFetched('posts');",
    "tags": [
      "objection",
      "orm",
      "relations",
      "eager-loading"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "MikroORM Migrations",
    "description": "MikroORM migration system with schema generation and history tracking",
    "usage": "npx mikro-orm migration:create && npx mikro-orm migration:up",
    "tags": [
      "mikroorm",
      "migrations",
      "database",
      "schema"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "MikroORM Seeder",
    "description": "MikroORM data seeding with factories and custom seed scripts",
    "usage": "import { Factory } from '@mikro-orm/seeder'; const userFactory = new Factory(User); userFactory.make({ name: 'John' });",
    "tags": [
      "mikroorm",
      "seeding",
      "factories",
      "data"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Mongoose Aggregation",
    "description": "Mongoose aggregation pipeline builder with stage operators and projection",
    "usage": "const User = mongoose.model('User', new mongoose.Schema({ name: String, age: Number })); const results = await User.aggregate([{ $match: { age: { $gt: 18 } } }, { $group: { _id: '$name', count: { $sum: 1 } } }]);",
    "tags": [
      "mongoose",
      "mongodb",
      "aggregation",
      "pipeline"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Mongoose Population",
    "description": "Mongoose document population with path, select, and match options",
    "usage": "const user = await User.findById('123').populate({ path: 'posts', select: 'title', match: { published: true } });",
    "tags": [
      "mongoose",
      "population",
      "relations",
      "mongodb"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Mongoose Plugin",
    "description": "Mongoose plugin system with timestamps, pagination, and custom hooks",
    "usage": "const timestampPlugin = (schema) => { schema.add({ createdAt: Date, updatedAt: Date }); schema.pre('save', function(next) { this.updatedAt = Date.now(); next(); }); }; schema.plugin(timestampPlugin);",
    "tags": [
      "mongoose",
      "plugins",
      "hooks",
      "middleware"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Typegoose Advanced",
    "description": "Advanced Typegoose with decorators, hooks, and virtual properties",
    "usage": "import { prop, getModelForClass, pre } from '@typegoose/typegoose'; @pre<User>('save', function() { this.updatedAt = new Date(); }) class User { @prop() name: string; @prop() updatedAt: Date; } const UserModel = getModelForClass(User);",
    "tags": [
      "typegoose",
      "typescript",
      "mongodb",
      "decorators"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Bookshelf Relations",
    "description": "Bookshelf.js model relations with eager loading and nested eager fetching",
    "usage": "const User = bookshelf.model('User', { tableName: 'users', posts() { return this.hasMany('Post'); } }); const user = await User.where('id', 1).fetch({ withRelated: ['posts'] });",
    "tags": [
      "bookshelf",
      "relations",
      "eager-loading",
      "orm"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Waterline Associations",
    "description": "Waterline model associations with one-to-one, one-to-many, and many-to-many",
    "usage": "const User = Waterline.Model.extend({ identity: 'user', attributes: { name: 'string', posts: { collection: 'post', via: 'user' } } }); const Post = Waterline.Model.extend({ identity: 'post', attributes: { title: 'string', user: { model: 'user' } } });",
    "tags": [
      "waterline",
      "associations",
      "orm",
      "models"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Sequelize Validations",
    "description": "Sequelize model validations with built-in and custom validators",
    "usage": "const User = sequelize.define('User', { name: { type: DataTypes.STRING, validate: { len: [3, 20] } }, email: { type: DataTypes.STRING, validate: { isEmail: true } } });",
    "tags": [
      "sequelize",
      "validations",
      "models",
      "database"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Sequelize Hooks",
    "description": "Sequelize lifecycle hooks for beforeCreate, afterUpdate, and beforeDestroy",
    "usage": "const User = sequelize.define('User', { name: DataTypes.STRING }, { hooks: { beforeCreate: (user) => { user.name = user.name.trim(); } } });",
    "tags": [
      "sequelize",
      "hooks",
      "lifecycle",
      "middleware"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Sequelize Scopes",
    "description": "Sequelize model scopes for reusable query conditions and associations",
    "usage": "const User = sequelize.define('User', { name: DataTypes.STRING, age: DataTypes.INTEGER }, { scopes: { adult: { where: { age: { [Op.gte]: 18 } } } } }); const adults = await User.scope('adult').findAll();",
    "tags": [
      "sequelize",
      "scopes",
      "queries",
      "models"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Sequelize Migrations",
    "description": "Sequelize migration system with up/down and schema management",
    "usage": "npx sequelize-cli migration:generate --name create-users && npx sequelize-cli db:migrate",
    "tags": [
      "sequelize",
      "migrations",
      "database",
      "schema"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Sequelize Seeders",
    "description": "Sequelize data seeding with bulk insert and transaction support",
    "usage": "module.exports = { up: async (queryInterface) => { await queryInterface.bulkInsert('Users', [{ name: 'John' }]); }, down: async (queryInterface) => { await queryInterface.bulkDelete('Users', null, {}); } };",
    "tags": [
      "sequelize",
      "seeders",
      "data",
      "database"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "TypeORM Relations",
    "description": "TypeORM entity relations with one-to-one, one-to-many, and many-to-many",
    "usage": "import { Entity, OneToMany, ManyToOne } from 'typeorm'; @Entity() class User { @OneToMany(() => Post, post => post.user) posts: Post[]; } @Entity() class Post { @ManyToOne(() => User, user => user.posts) user: User; }",
    "tags": [
      "typeorm",
      "relations",
      "entities",
      "database"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "TypeORM Migrations",
    "description": "TypeORM migration system with generate, run, and revert commands",
    "usage": "npx typeorm migration:generate -n CreateUsers && npx typeorm migration:run",
    "tags": [
      "typeorm",
      "migrations",
      "database",
      "schema"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "TypeORM Subscribers",
    "description": "TypeORM event subscribers with beforeInsert, beforeUpdate, and afterLoad",
    "usage": "import { EventSubscriber, EntitySubscriberInterface } from 'typeorm'; @EventSubscriber() export class UserSubscriber implements EntitySubscriberInterface<User> { listenTo() { return User; } beforeInsert(event) { event.entity.createdAt = new Date(); } }",
    "tags": [
      "typeorm",
      "subscribers",
      "events",
      "hooks"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "MikroORM Unit of Work",
    "description": "MikroORM unit of work with identity map and transaction management",
    "usage": "import { MikroORM } from '@mikro-orm/core'; const orm = await MikroORM.init({ entities: [User], dbName: 'db', type: 'postgresql' }); const user = orm.em.create(User, { name: 'John' }); await orm.em.persistAndFlush(user);",
    "tags": [
      "mikroorm",
      "unit-of-work",
      "identity-map",
      "transaction"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "TypeORM Query Builder",
    "description": "TypeORM query builder with complex conditions, joins, and subqueries",
    "usage": "const users = await getRepository(User).createQueryBuilder('user') .leftJoinAndSelect('user.posts', 'post') .where('user.age > :age', { age: 18 }) .getMany();",
    "tags": [
      "typeorm",
      "query",
      "builder",
      "sql"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Objection Query Builder",
    "description": "Objection.js fluent query builder with Eager loading and raw SQL support",
    "usage": "const users = await User.query() .where('age', '>', 18) .select('name', 'email') .orderBy('name');",
    "tags": [
      "objection",
      "query",
      "builder",
      "eager-loading"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Kysely Migrations",
    "description": "Kysely migration system with schema generation and version management",
    "usage": "const { Migrator } = require('kysely'); const migrator = new Migrator({ db, provider: new FileMigrationProvider('./migrations') }); await migrator.migrateToLatest();",
    "tags": [
      "kysely",
      "migrations",
      "database",
      "typescript"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Kysely Relations",
    "description": "Kysely relation query builder with joins, subqueries, and CTE support",
    "usage": "const users = await db.selectFrom('users') .leftJoin('posts', 'users.id', 'posts.user_id') .select(['users.name', 'posts.title']) .execute();",
    "tags": [
      "kysely",
      "relations",
      "joins",
      "typescript"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Slonik Interceptors",
    "description": "Slonik query interceptors for logging, benchmarking, and error handling",
    "usage": "const { createPool } = require('slonik'); const pool = createPool('postgres://localhost/db', { interceptors: [ { beforeQuery: (execution) => { console.log('Query:', execution.query); } } ] });",
    "tags": [
      "slonik",
      "postgresql",
      "interceptors",
      "logging"
    ],
    "category": "Database"
  },
  {
    "title": "PG Native",
    "description": "Native PostgreSQL client with binary parsing and C-level performance",
    "usage": "const { Client } = require('pg-native'); const client = new Client(); await client.connect(); const result = await client.query('SELECT * FROM users');",
    "tags": [
      "postgresql",
      "native",
      "driver",
      "performance"
    ],
    "category": "Database"
  },
  {
    "title": "MySQL2 Prepared Statements",
    "description": "MySQL prepared statements with automatic escaping and query caching",
    "usage": "const mysql = require('mysql2/promise'); const connection = await mysql.createConnection({ host: 'localhost', user: 'root' }); const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [1]);",
    "tags": [
      "mysql",
      "prepared",
      "statements",
      "driver"
    ],
    "category": "Database"
  },
  {
    "title": "Redis Cluster",
    "description": "Redis cluster client with sharding, failover, and command routing",
    "usage": "const Redis = require('ioredis'); const cluster = new Redis.Cluster([{ host: 'localhost', port: 6379 }]); await cluster.set('key', 'value');",
    "tags": [
      "redis",
      "cluster",
      "sharding",
      "failover"
    ],
    "category": "Database"
  },
  {
    "title": "Redis Sentinel",
    "description": "Redis sentinel client with automatic failover and master discovery",
    "usage": "const Redis = require('ioredis'); const sentinel = new Redis({ sentinels: [{ host: 'localhost', port: 26379 }], name: 'mymaster' });",
    "tags": [
      "redis",
      "sentinel",
      "failover",
      "high-availability"
    ],
    "category": "Database"
  },
  {
    "title": "MongoDB Change Streams",
    "description": "MongoDB change streams for real-time database event monitoring",
    "usage": "const { MongoClient } = require('mongodb'); const client = new MongoClient('mongodb://localhost:27017'); await client.connect(); const changeStream = client.db('test').collection('users').watch(); changeStream.on('change', (change) => console.log(change));",
    "tags": [
      "mongodb",
      "change-streams",
      "realtime",
      "events"
    ],
    "category": "Database"
  },
  {
    "title": "MongoDB Transactions",
    "description": "MongoDB multi-document ACID transactions with session and commit",
    "usage": "const session = client.startSession(); await session.startTransaction(); await db.collection('users').insertOne({ name: 'John' }, { session }); await session.commitTransaction();",
    "tags": [
      "mongodb",
      "transactions",
      "acid",
      "session"
    ],
    "category": "Database"
  },
  {
    "title": "MongoDB Aggregation Expressions",
    "description": "MongoDB aggregation with $addFields, $project, and conditional operators",
    "usage": "const results = await db.collection('users').aggregate([ { $addFields: { fullName: { $concat: ['$firstName', ' ', '$lastName'] } } }, { $project: { name: '$fullName', age: 1 } } ]).toArray();",
    "tags": [
      "mongodb",
      "aggregation",
      "expressions",
      "pipeline"
    ],
    "category": "Database"
  },
  {
    "title": "LowDB Plugins",
    "description": "LowDB plugins for encryption, compression, and custom adapters",
    "usage": "const low = require('lowdb'); const FileSync = require('lowdb/adapters/FileSync'); const adapter = new FileSync('db.json'); const db = low(adapter); db.defaults({ posts: [] }).write(); db._.mixin({ myPlugin: (data) => { return data.map(item => ({ ...item, processed: true })); } });",
    "tags": [
      "lowdb",
      "plugins",
      "adapters",
      "database"
    ],
    "category": "Database"
  },
  {
    "title": "Better-SQLite3 Transactions",
    "description": "Better-SQLite3 transaction support with deferred and immediate modes",
    "usage": "const Database = require('better-sqlite3'); const db = new Database('mydb.db'); const transaction = db.transaction((data) => { const stmt = db.prepare('INSERT INTO users (name) VALUES (?)'); data.forEach(user => stmt.run(user)); }); transaction(['John', 'Jane']);",
    "tags": [
      "sqlite",
      "transactions",
      "better-sqlite3",
      "database"
    ],
    "category": "Database"
  },
  {
    "title": "LevelDB Sublevel",
    "description": "LevelDB sublevel for namespaced key-value stores with prefixes",
    "usage": "const { Level } = require('level'); const db = new Level('mydb'); const users = db.sublevel('users'); const posts = db.sublevel('posts'); await users.put('1', { name: 'John' });",
    "tags": [
      "leveldb",
      "sublevel",
      "key-value",
      "namespaced"
    ],
    "category": "Database"
  },
  {
    "title": "NeDB Indexes",
    "description": "NeDB index management with unique, sparse, and compound indexes",
    "usage": "const Datastore = require('nedb'); const db = new Datastore({ filename: 'data.db', autoload: true }); db.ensureIndex({ fieldName: 'email', unique: true }); db.ensureIndex({ fieldName: 'name', sparse: true });",
    "tags": [
      "nedb",
      "indexes",
      "unique",
      "database"
    ],
    "category": "Database"
  },
  {
    "title": "Node-cache Manager",
    "description": "Cache manager with multi-store support and TTL management",
    "usage": "const cacheManager = require('cache-manager'); const memoryCache = cacheManager.caching({ store: 'memory', ttl: 60 }); await memoryCache.set('key', 'value');",
    "tags": [
      "cache",
      "memory",
      "ttl",
      "multi-store"
    ],
    "category": "Performance"
  },
  {
    "title": "Redis Cache Store",
    "description": "Redis cache store for cache-manager with clustering support",
    "usage": "const redisStore = require('cache-manager-redis-store'); const redisCache = cacheManager.caching({ store: redisStore, host: 'localhost', port: 6379 });",
    "tags": [
      "redis",
      "cache",
      "store",
      "cluster"
    ],
    "category": "Performance"
  },
  {
    "title": "Memoizee",
    "description": "Function memoization with configurable cache size and expiration",
    "usage": "const memoize = require('memoizee'); const fn = memoize((a, b) => a + b, { maxAge: 60000, max: 100 });",
    "tags": [
      "memoization",
      "cache",
      "performance",
      "function"
    ],
    "category": "Performance"
  },
  {
    "title": "Fast LRU",
    "description": "Fast LRU cache implementation with Map-based storage and TTL",
    "usage": "const lru = require('fast-lru'); const cache = new lru({ max: 100, ttl: 60000 }); cache.set('key', 'value');",
    "tags": [
      "lru",
      "cache",
      "fast",
      "ttl"
    ],
    "category": "Performance"
  },
  {
    "title": "Piscina",
    "description": "Worker thread pool for Node.js with async tasks and concurrency control",
    "usage": "const Piscina = require('piscina'); const pool = new Piscina({ filename: './worker.js' }); const result = await pool.run({ data: 'task' });",
    "tags": [
      "worker-threads",
      "pool",
      "concurrency",
      "performance"
    ],
    "category": "Performance"
  },
  {
    "title": "Worker Threads",
    "description": "Node.js worker threads for CPU-intensive operations and parallel processing",
    "usage": "const { Worker } = require('worker_threads'); const worker = new Worker('./worker.js'); worker.postMessage('Hello');",
    "tags": [
      "worker-threads",
      "parallel",
      "cpu",
      "performance"
    ],
    "category": "Performance"
  },
  {
    "title": "Cluster",
    "description": "Node.js cluster module for load balancing across CPU cores",
    "usage": "const cluster = require('cluster'); if (cluster.isMaster) { cluster.fork(); } else { require('./app'); }",
    "tags": [
      "cluster",
      "load-balance",
      "multi-core",
      "performance"
    ],
    "category": "Performance"
  },
  {
    "title": "Compression Webpack",
    "description": "Webpack plugin for gzip and brotli compression during build",
    "usage": "const CompressionPlugin = require('compression-webpack-plugin'); module.exports = { plugins: [new CompressionPlugin({ test: /\\.(js|css)$/ })] };",
    "tags": [
      "webpack",
      "compression",
      "gzip",
      "build"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Brotli",
    "description": "Brotli compression algorithm implementation for Node.js",
    "usage": "const brotli = require('brotli'); const compressed = brotli.compress(Buffer.from('Hello World'));",
    "tags": [
      "compression",
      "brotli",
      "algorithm",
      "performance"
    ],
    "category": "Performance"
  },
  {
    "title": "Zlib",
    "description": "Node.js native zlib library for gzip, deflate, and inflate",
    "usage": "const zlib = require('zlib'); const compressed = zlib.gzipSync('Hello World');",
    "tags": [
      "zlib",
      "gzip",
      "deflate",
      "compression"
    ],
    "category": "Utility"
  },
  {
    "title": "Stream Pipes",
    "description": "Node.js stream pipeline with promise support and error handling",
    "usage": "const { pipeline } = require('stream/promises'); await pipeline(fs.createReadStream('input.txt'), zlib.createGzip(), fs.createWriteStream('output.gz'));",
    "tags": [
      "stream",
      "pipeline",
      "async",
      "promises"
    ],
    "category": "Utility"
  },
  {
    "title": "Readable Stream",
    "description": "Custom readable stream implementation with data and end events",
    "usage": "const { Readable } = require('stream'); const stream = new Readable({ read(size) { this.push('Hello'); this.push(null); } });",
    "tags": [
      "stream",
      "readable",
      "async-iterators",
      "data"
    ],
    "category": "Utility"
  },
  {
    "title": "Writable Stream",
    "description": "Custom writable stream with write and final methods",
    "usage": "const { Writable } = require('stream'); const stream = new Writable({ write(chunk, encoding, callback) { console.log(chunk.toString()); callback(); } });",
    "tags": [
      "stream",
      "writable",
      "write",
      "data"
    ],
    "category": "Utility"
  },
  {
    "title": "Transform Stream",
    "description": "Transform stream for data modification between read and write",
    "usage": "const { Transform } = require('stream'); const upper = new Transform({ transform(chunk, encoding, callback) { this.push(chunk.toString().toUpperCase()); callback(); } });",
    "tags": [
      "stream",
      "transform",
      "modify",
      "data"
    ],
    "category": "Utility"
  },
  {
    "title": "Stream Web",
    "description": "Web Streams API implementation for Node.js with WritableStream and ReadableStream",
    "usage": "const { ReadableStream, WritableStream } = require('stream/web'); const stream = new ReadableStream({ start(controller) { controller.enqueue('Hello'); controller.close(); } });",
    "tags": [
      "stream",
      "web",
      "api",
      "readable"
    ],
    "category": "Utility"
  },
  {
    "title": "Buffer",
    "description": "Node.js Buffer utilities for binary data manipulation",
    "usage": "const buf = Buffer.from('Hello World', 'utf8'); const hex = buf.toString('hex');",
    "tags": [
      "buffer",
      "binary",
      "encoding",
      "hex"
    ],
    "category": "Utility"
  },
  {
    "title": "ArrayBuffer",
    "description": "ArrayBuffer and TypedArray utilities for binary data",
    "usage": "const buffer = new ArrayBuffer(8); const view = new DataView(buffer); view.setInt32(0, 42);",
    "tags": [
      "arraybuffer",
      "typedarray",
      "binary",
      "data"
    ],
    "category": "Utility"
  },
  {
    "title": "Crypto",
    "description": "Node.js crypto module for hashing, encryption, and random generation",
    "usage": "const crypto = require('crypto'); const hash = crypto.createHash('sha256').update('Hello').digest('hex');",
    "tags": [
      "crypto",
      "hash",
      "encryption",
      "random"
    ],
    "category": "Security"
  },
  {
    "title": "Crypto Random",
    "description": "Cryptographically secure random number generation",
    "usage": "const crypto = require('crypto'); const random = crypto.randomBytes(16).toString('hex');",
    "tags": [
      "crypto",
      "random",
      "secure",
      "bytes"
    ],
    "category": "Security"
  },
  {
    "title": "Keygrip",
    "description": "Key rotation and signing for HMAC and cookie signatures",
    "usage": "const Keygrip = require('keygrip'); const keys = new Keygrip(['secret1', 'secret2']); const sig = keys.sign('data');",
    "tags": [
      "keygrip",
      "hmac",
      "signature",
      "cookie"
    ],
    "category": "Security"
  },
  {
    "title": "Csrf",
    "description": "CSRF token generation and verification for Express applications",
    "usage": "const csrf = require('csurf'); app.use(csrf({ cookie: true }));",
    "tags": [
      "csrf",
      "security",
      "tokens",
      "express"
    ],
    "category": "Security"
  },
  {
    "title": "Xss",
    "description": "XSS sanitization for user input and HTML content",
    "usage": "const xss = require('xss'); const sanitized = xss('<script>alert(1)</script>');",
    "tags": [
      "xss",
      "sanitization",
      "security",
      "html"
    ],
    "category": "Security"
  },
  {
    "title": "Escape HTML",
    "description": "HTML escaping and unescaping utilities for safe output",
    "usage": "const escape = require('escape-html'); const escaped = escape('<div>Hello</div>');",
    "tags": [
      "escape",
      "html",
      "sanitization",
      "output"
    ],
    "category": "Security"
  },
  {
    "title": "HPP",
    "description": "HTTP Parameter Pollution protection middleware for Express",
    "usage": "const hpp = require('hpp'); app.use(hpp());",
    "tags": [
      "hpp",
      "security",
      "parameters",
      "express"
    ],
    "category": "Security"
  },
  {
    "title": "No Cache",
    "description": "HTTP cache-control middleware for preventing client-side caching",
    "usage": "const nocache = require('nocache'); app.use(nocache());",
    "tags": [
      "cache-control",
      "nosniff",
      "security",
      "express"
    ],
    "category": "Security"
  },
  {
    "title": "Referrer Policy",
    "description": "Referrer-Policy header middleware for controlling referrer information",
    "usage": "const referrerPolicy = require('referrer-policy'); app.use(referrerPolicy({ policy: 'no-referrer' }));",
    "tags": [
      "referrer",
      "security",
      "headers",
      "privacy"
    ],
    "category": "Security"
  },
  {
    "title": "HSTS",
    "description": "HTTP Strict Transport Security middleware for Express",
    "usage": "const hsts = require('hsts'); app.use(hsts({ maxAge: 31536000 }));",
    "tags": [
      "hsts",
      "security",
      "ssl",
      "headers"
    ],
    "category": "Security"
  },
  {
    "title": "X-Frame-Options",
    "description": "X-Frame-Options header middleware for clickjacking protection",
    "usage": "const xframe = require('x-frame-options'); app.use(xframe('DENY'));",
    "tags": [
      "x-frame",
      "security",
      "clickjacking",
      "headers"
    ],
    "category": "Security"
  },
  {
    "title": "Express Rate Limit",
    "description": "Rate limiting middleware for Express with configurable limits and store",
    "usage": "const rateLimit = require('express-rate-limit'); app.use(rateLimit({ windowMs: 60000, max: 100 }));",
    "tags": [
      "rate-limit",
      "express",
      "throttle",
      "security"
    ],
    "category": "Security"
  },
  {
    "title": "Express Session",
    "description": "Session middleware for Express with cookie and store options",
    "usage": "const session = require('express-session'); app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));",
    "tags": [
      "session",
      "express",
      "cookie",
      "store"
    ],
    "category": "Utility"
  },
  {
    "title": "Connect Redis",
    "description": "Redis session store for Express with automatic session management",
    "usage": "const RedisStore = require('connect-redis')(session); app.use(session({ store: new RedisStore({ host: 'localhost' }), secret: 'secret' }));",
    "tags": [
      "redis",
      "session",
      "store",
      "express"
    ],
    "category": "Database"
  },
  {
    "title": "Connect Mongo",
    "description": "MongoDB session store for Express with TTL and auto-connect",
    "usage": "const MongoStore = require('connect-mongo'); app.use(session({ store: MongoStore.create({ mongoUrl: 'mongodb://localhost/test' }), secret: 'secret' }));",
    "tags": [
      "mongodb",
      "session",
      "store",
      "express"
    ],
    "category": "Database"
  },
  {
    "title": "Serve Favicon",
    "description": "Favicon serving middleware for Express with caching",
    "usage": "const favicon = require('serve-favicon'); app.use(favicon('favicon.ico'));",
    "tags": [
      "favicon",
      "express",
      "static",
      "serve"
    ],
    "category": "Utility"
  },
  {
    "title": "Serve Index",
    "description": "Directory index serving middleware for Express with file listing",
    "usage": "const serveIndex = require('serve-index'); app.use('/public', serveIndex('public', { icons: true }));",
    "tags": [
      "serve-index",
      "directory",
      "listing",
      "express"
    ],
    "category": "Utility"
  },
  {
    "title": "Method Override",
    "description": "HTTP method override middleware for Express with header support",
    "usage": "const methodOverride = require('method-override'); app.use(methodOverride('_method'));",
    "tags": [
      "method",
      "override",
      "express",
      "middleware"
    ],
    "category": "Utility"
  },
  {
    "title": "Vhost",
    "description": "Virtual host middleware for Express with domain-based routing",
    "usage": "const vhost = require('vhost'); app.use(vhost('api.example.com', apiApp));",
    "tags": [
      "vhost",
      "virtual-host",
      "express",
      "middleware"
    ],
    "category": "Utility"
  },
  {
    "title": "Connect Multiparty",
    "description": "Multipart form data parsing middleware for Express",
    "usage": "const multiparty = require('connect-multiparty'); app.use(multiparty({ uploadDir: './uploads' }));",
    "tags": [
      "multipart",
      "upload",
      "express",
      "middleware"
    ],
    "category": "Utility"
  },
  {
    "title": "Connect Busboy",
    "description": "Busboy middleware for streaming multipart file uploads",
    "usage": "const busboy = require('connect-busboy'); app.use(busboy({ immediate: true }));",
    "tags": [
      "busboy",
      "upload",
      "stream",
      "express"
    ],
    "category": "Utility"
  },
  {
    "title": "Connect Flash",
    "description": "Flash message middleware for Express with session integration",
    "usage": "const flash = require('connect-flash'); app.use(flash()); app.get('/flash', (req, res) => { req.flash('info', 'Hello'); });",
    "tags": [
      "flash",
      "messages",
      "express",
      "middleware"
    ],
    "category": "Utility"
  },
  {
    "title": "Response Time",
    "description": "Response time header middleware for Express with timing metrics",
    "usage": "const responseTime = require('response-time'); app.use(responseTime());",
    "tags": [
      "response-time",
      "performance",
      "metrics",
      "express"
    ],
    "category": "Performance"
  },
  {
    "title": "Compression Express",
    "description": "Response compression middleware for Express with threshold",
    "usage": "const compression = require('compression'); app.use(compression({ threshold: 1024 }));",
    "tags": [
      "compression",
      "express",
      "gzip",
      "performance"
    ],
    "category": "Performance"
  },
  {
    "title": "Express Timeout",
    "description": "Request timeout middleware for Express with callback",
    "usage": "const timeout = require('connect-timeout'); app.use(timeout('5s'));",
    "tags": [
      "timeout",
      "express",
      "middleware",
      "request"
    ],
    "category": "Performance"
  },
  {
    "title": "Express Query",
    "description": "Query string parsing middleware for Express with custom options",
    "usage": "const express = require('express'); const app = express(); app.set('query parser', (str) => require('qs').parse(str));",
    "tags": [
      "query",
      "parser",
      "express",
      "qs"
    ],
    "category": "Utility"
  },
  {
    "title": "QS",
    "description": "Query string parsing and stringifying with nested objects support",
    "usage": "const qs = require('qs'); const obj = qs.parse('a=b&c=d'); const str = qs.stringify(obj);",
    "tags": [
      "qs",
      "query",
      "parse",
      "stringify"
    ],
    "category": "Utility"
  },
  {
    "title": "Fast JSON Stringify",
    "description": "Fast JSON stringification with schema-based optimization",
    "usage": "const fastJson = require('fast-json-stringify'); const stringify = fastJson({ type: 'object', properties: { name: { type: 'string' } } }); const json = stringify({ name: 'John' });",
    "tags": [
      "json",
      "stringify",
      "fast",
      "optimization"
    ],
    "category": "Performance"
  },
  {
    "title": "JSON Patch",
    "description": "JSON Patch implementation for applying patches to JSON objects",
    "usage": "const jsonpatch = require('jsonpatch'); const patched = jsonpatch.apply_patch({ name: 'John' }, [{ op: 'replace', path: '/name', value: 'Jane' }]);",
    "tags": [
      "json",
      "patch",
      "apply",
      "modify"
    ],
    "category": "Utility"
  },
  {
    "title": "JSON Diff",
    "description": "JSON diff calculation and patching with deep comparison",
    "usage": "const jsonDiff = require('json-diff'); const diff = jsonDiff.diff({ a: 1 }, { a: 2 });",
    "tags": [
      "json",
      "diff",
      "compare",
      "patch"
    ],
    "category": "Utility"
  },
  {
    "title": "JSON Schema",
    "description": "JSON Schema validation with draft-07 support and custom keywords",
    "usage": "const Ajv = require('ajv'); const ajv = new Ajv(); const validate = ajv.compile({ type: 'object', properties: { name: { type: 'string' } }, required: ['name'] }); const valid = validate({ name: 'John' });",
    "tags": [
      "json-schema",
      "validation",
      "schema",
      "ajv"
    ],
    "category": "Validation"
  },
  {
    "title": "JSON Ref",
    "description": "JSON Reference and JSON Pointer implementation for JSON Schema",
    "usage": "const jsonRef = require('json-refs'); const resolved = await jsonRef.resolveRefs(schema);",
    "tags": [
      "json-ref",
      "pointer",
      "schema",
      "reference"
    ],
    "category": "Utility"
  },
  {
    "title": "JSONP",
    "description": "JSONP middleware for Express with callback support",
    "usage": "const jsonp = require('express-jsonp'); app.use(jsonp()); app.get('/data', (req, res) => { res.jsonp({ data: 'Hello' }); });",
    "tags": [
      "jsonp",
      "express",
      "callback",
      "cross-domain"
    ],
    "category": "Utility"
  },
  {
    "title": "YAML",
    "description": "YAML parser and stringifier for Node.js with custom schemas",
    "usage": "const yaml = require('yaml'); const obj = yaml.parse('key: value'); const str = yaml.stringify(obj);",
    "tags": [
      "yaml",
      "parse",
      "stringify",
      "configuration"
    ],
    "category": "Utility"
  },
  {
    "title": "INI",
    "description": "INI configuration parser with sections and comments support",
    "usage": "const ini = require('ini'); const config = ini.parse('[section]\nkey=value');",
    "tags": [
      "ini",
      "parse",
      "configuration",
      "config"
    ],
    "category": "Utility"
  },
  {
    "title": "HJSON",
    "description": "Human JSON parser with support for comments and relaxed syntax",
    "usage": "const hjson = require('hjson'); const obj = hjson.parse('{ // comment\n  key: value\n }');",
    "tags": [
      "hjson",
      "parse",
      "human",
      "json"
    ],
    "category": "Utility"
  },
  {
    "title": "Patchwork",
    "description": "JSON patch and merge utilities with conflict resolution",
    "usage": "const patchwork = require('patchwork'); const merged = patchwork.merge({ a: 1 }, { b: 2 });",
    "tags": [
      "patch",
      "merge",
      "json",
      "conflict"
    ],
    "category": "Utility"
  },
  {
    "title": "Deep Equal",
    "description": "Deep equality checking for JavaScript objects and arrays",
    "usage": "const deepEqual = require('deep-equal'); const equal = deepEqual({ a: 1 }, { a: 1 });",
    "tags": [
      "deep",
      "equal",
      "compare",
      "assert"
    ],
    "category": "Utility"
  },
  {
    "title": "Deep Merge",
    "description": "Deep recursive merge of objects with array handling",
    "usage": "const merge = require('deepmerge'); const merged = merge({ a: 1 }, { b: 2 });",
    "tags": [
      "deep",
      "merge",
      "objects",
      "recursive"
    ],
    "category": "Utility"
  },
  {
    "title": "Object Path",
    "description": "Get, set, and delete nested object properties using path strings",
    "usage": "const objectPath = require('object-path'); const obj = { user: { name: 'John' } }; objectPath.get(obj, 'user.name');",
    "tags": [
      "object",
      "path",
      "get",
      "set"
    ],
    "category": "Utility"
  },
  {
    "title": "Property Getter",
    "description": "Safe nested property access with default values",
    "usage": "const get = require('lodash/get'); const value = get(obj, 'nested.property', 'default');",
    "tags": [
      "property",
      "get",
      "safety",
      "default"
    ],
    "category": "Utility"
  },
  {
    "title": "Property Setter",
    "description": "Safe nested property setting with path creation",
    "usage": "const set = require('lodash/set'); set(obj, 'nested.property', 'value');",
    "tags": [
      "property",
      "set",
      "path",
      "nested"
    ],
    "category": "Utility"
  },
  {
    "title": "Has Own Property",
    "description": "Safe object property checking with hasOwnProperty",
    "usage": "const has = require('has'); const exists = has(obj, 'property');",
    "tags": [
      "has",
      "property",
      "exists",
      "object"
    ],
    "category": "Utility"
  },
  {
    "title": "Stringify Safe",
    "description": "Safe JSON stringification with circular reference handling",
    "usage": "const stringify = require('json-stringify-safe'); const str = stringify(circularObject);",
    "tags": [
      "json",
      "stringify",
      "safe",
      "circular"
    ],
    "category": "Utility"
  },
  {
    "title": "Circular JSON",
    "description": "Circular JSON parser and stringifier with reviver support",
    "usage": "const circular = require('circular-json'); const json = circular.stringify(circularObject);",
    "tags": [
      "circular",
      "json",
      "parse",
      "stringify"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Oauth2",
    "description": "OAuth2 plugin for Fastify with support for multiple providers and token management",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/oauth2'), { name: 'github', scope: ['user:email'] });",
    "tags": [
      "fastify",
      "oauth2",
      "authentication",
      "security"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify Redis",
    "description": "Redis plugin for Fastify with connection pooling and command support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/redis'), { host: 'localhost', port: 6379 });",
    "tags": [
      "fastify",
      "redis",
      "cache",
      "database"
    ],
    "category": "Database"
  },
  {
    "title": "Fastify MongoDB",
    "description": "MongoDB plugin for Fastify with connection management and collection access",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/mongodb'), { url: 'mongodb://localhost:27017/test' });",
    "tags": [
      "fastify",
      "mongodb",
      "database",
      "nosql"
    ],
    "category": "Database"
  },
  {
    "title": "Fastify Postgres",
    "description": "PostgreSQL plugin for Fastify with connection pooling and query support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/postgres'), { connectionString: 'postgres://user:pass@localhost/db' });",
    "tags": [
      "fastify",
      "postgresql",
      "database",
      "sql"
    ],
    "category": "Database"
  },
  {
    "title": "Fastify MySQL",
    "description": "MySQL plugin for Fastify with connection management and query builder",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/mysql'), { host: 'localhost', user: 'root', database: 'test' });",
    "tags": [
      "fastify",
      "mysql",
      "database",
      "sql"
    ],
    "category": "Database"
  },
  {
    "title": "Fastify WebSocket",
    "description": "WebSocket plugin for Fastify with real-time bidirectional communication",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/websocket'));",
    "tags": [
      "fastify",
      "websocket",
      "realtime",
      "communication"
    ],
    "category": "Real-time"
  },
  {
    "title": "Fastify Socket.io",
    "description": "Socket.io plugin for Fastify with event handling and room management",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-socket.io'), { cors: { origin: '*' } });",
    "tags": [
      "fastify",
      "socket.io",
      "websocket",
      "realtime"
    ],
    "category": "Real-time"
  },
  {
    "title": "Fastify GraphQL",
    "description": "GraphQL plugin for Fastify with schema stitching and resolver support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/graphql'), { schema, resolvers });",
    "tags": [
      "fastify",
      "graphql",
      "api",
      "schema"
    ],
    "category": "API"
  },
  {
    "title": "Fastify Swagger UI",
    "description": "Swagger UI plugin for Fastify with interactive API documentation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/swagger-ui'), { routePrefix: '/docs' });",
    "tags": [
      "fastify",
      "swagger",
      "documentation",
      "ui"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Cors (Advanced)",
    "description": "Advanced CORS plugin for Fastify with dynamic origin validation and preflight handling",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/cors'), { origin: (origin, cb) => { cb(null, true); } });",
    "tags": [
      "fastify",
      "cors",
      "security",
      "headers"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify Health Check",
    "description": "Health check plugin for Fastify with status endpoints and monitoring",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/healthcheck'), { healthcheckUrl: '/health' });",
    "tags": [
      "fastify",
      "health",
      "monitoring",
      "status"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Request Context",
    "description": "Request context plugin for Fastify with async storage and logging",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/request-context'), { defaultStoreValues: { user: null } });",
    "tags": [
      "fastify",
      "context",
      "async",
      "logging"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Sensible (Advanced)",
    "description": "Advanced utilities plugin for Fastify including http-errors and assert",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/sensible')); fastify.get('/', (req, reply) => { reply.httpErrors.notFound(); });",
    "tags": [
      "fastify",
      "utilities",
      "http-errors",
      "assert"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Formbody",
    "description": "URL-encoded form body parser plugin for Fastify with extended options",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/formbody'), { extended: true });",
    "tags": [
      "fastify",
      "formbody",
      "parse",
      "urlencoded"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Reply From",
    "description": "HTTP proxy plugin for Fastify with request forwarding and response manipulation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/reply-from'), { base: 'https://api.example.com' });",
    "tags": [
      "fastify",
      "proxy",
      "reply-from",
      "forward"
    ],
    "category": "HTTP Client"
  },
  {
    "title": "Fastify Under Pressure",
    "description": "Load testing and performance monitoring plugin for Fastify",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/under-pressure'), { maxEventLoopDelay: 1000 });",
    "tags": [
      "fastify",
      "performance",
      "monitoring",
      "load"
    ],
    "category": "Performance"
  },
  {
    "title": "Fastify Circuit Breaker",
    "description": "Circuit breaker pattern implementation for Fastify with failure handling",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-circuit-breaker'), { timeout: 5000 });",
    "tags": [
      "fastify",
      "circuit-breaker",
      "resilience",
      "failure"
    ],
    "category": "Performance"
  },
  {
    "title": "Fastify Cache",
    "description": "Cache plugin for Fastify with in-memory and Redis storage",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-cache'), { storage: 'memory', ttl: 60 });",
    "tags": [
      "fastify",
      "cache",
      "performance",
      "ttl"
    ],
    "category": "Performance"
  },
  {
    "title": "Fastify Flake ID",
    "description": "Snowflake ID generator plugin for Fastify with distributed ID generation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-flake-id'), { machineId: 1 });",
    "tags": [
      "fastify",
      "id",
      "generator",
      "snowflake"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Secure Session",
    "description": "Secure session plugin for Fastify with encryption and signed cookies",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/secure-session'), { key: Buffer.from('secret') });",
    "tags": [
      "fastify",
      "session",
      "security",
      "encryption"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify Caching",
    "description": "HTTP caching plugin for Fastify with ETag and cache-control headers",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/caching'), { privacy: 'public' });",
    "tags": [
      "fastify",
      "cache",
      "etag",
      "performance"
    ],
    "category": "Performance"
  },
  {
    "title": "Fastify Compress (Advanced)",
    "description": "Advanced compression plugin with custom algorithms and thresholds",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/compress'), { threshold: 2048, customTypes: ['text/custom'] });",
    "tags": [
      "fastify",
      "compression",
      "gzip",
      "brotli"
    ],
    "category": "Performance"
  },
  {
    "title": "Fastify Etag",
    "description": "ETag generation plugin for Fastify with cache validation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/etag'));",
    "tags": [
      "fastify",
      "etag",
      "cache",
      "validation"
    ],
    "category": "Performance"
  },
  {
    "title": "Fastify Response Validation",
    "description": "Response validation plugin for Fastify with schema checking",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-response-validation'));",
    "tags": [
      "fastify",
      "validation",
      "response",
      "schema"
    ],
    "category": "Validation"
  },
  {
    "title": "Fastify Error Handler",
    "description": "Custom error handler plugin for Fastify with logging and formatting",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-error-handler'));",
    "tags": [
      "fastify",
      "error",
      "handling",
      "logging"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Scheduler",
    "description": "Scheduled task runner plugin for Fastify with cron support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-scheduler'), { jobs: [{ cron: '*/5 * * * *', handler: () => { console.log('Job running'); } }] });",
    "tags": [
      "fastify",
      "schedule",
      "cron",
      "jobs"
    ],
    "category": "Background Processing"
  },
  {
    "title": "Fastify Worker Threads",
    "description": "Worker thread pool plugin for Fastify with CPU-intensive task offloading",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-worker-threads'), { poolSize: 4 });",
    "tags": [
      "fastify",
      "worker",
      "threads",
      "performance"
    ],
    "category": "Performance"
  },
  {
    "title": "Fastify Metrics",
    "description": "Metrics collection plugin for Fastify with Prometheus integration",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-metrics'), { endpoint: '/metrics' });",
    "tags": [
      "fastify",
      "metrics",
      "prometheus",
      "monitoring"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Trace",
    "description": "Distributed tracing plugin for Fastify with OpenTelemetry support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-trace'), { serviceName: 'my-service' });",
    "tags": [
      "fastify",
      "trace",
      "opentelemetry",
      "monitoring"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Rate Limit (Redis)",
    "description": "Redis-backed rate limiting for Fastify with distributed throttling",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/rate-limit'), { max: 100, timeWindow: '1m', redis: { host: 'localhost' } });",
    "tags": [
      "fastify",
      "rate-limit",
      "redis",
      "distributed"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify Mail",
    "description": "Email plugin for Fastify with Nodemailer integration and templates",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-mail'), { transport: 'smtps://user:pass@smtp.example.com' });",
    "tags": [
      "fastify",
      "email",
      "nodemailer",
      "templates"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Storage",
    "description": "File storage plugin for Fastify with local and S3 providers",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-storage'), { provider: 'local', path: './uploads' });",
    "tags": [
      "fastify",
      "storage",
      "upload",
      "s3"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Throttle",
    "description": "Request throttling plugin for Fastify with token bucket algorithm",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-throttle'), { windowMs: 60000, max: 100 });",
    "tags": [
      "fastify",
      "throttle",
      "rate-limit",
      "security"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify Banner",
    "description": "Banner display plugin for Fastify with custom ASCII art and version info",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-banner'), { version: '1.0.0' });",
    "tags": [
      "fastify",
      "banner",
      "version",
      "ascii"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Fastify CLI",
    "description": "CLI tools for Fastify with project scaffolding and management",
    "usage": "fastify generate my-app && cd my-app && npm install",
    "tags": [
      "fastify",
      "cli",
      "generate",
      "scaffold"
    ],
    "category": "CLI/Tool"
  },
  {
    "title": "Fastify OpenAPI",
    "description": "OpenAPI document generation for Fastify with full spec support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/openapi'));",
    "tags": [
      "fastify",
      "openapi",
      "documentation",
      "spec"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify CRUD",
    "description": "CRUD plugin for Fastify with automatic route generation for databases",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-crud'), { model: User, routes: ['create', 'read', 'update', 'delete'] });",
    "tags": [
      "fastify",
      "crud",
      "routes",
      "database"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Fastify Auth0",
    "description": "Auth0 authentication plugin for Fastify with JWT verification",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-auth0'), { domain: 'auth0.domain.com', audience: 'api' });",
    "tags": [
      "fastify",
      "auth0",
      "authentication",
      "jwt"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify Keycloak",
    "description": "Keycloak authentication plugin for Fastify with token validation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-keycloak'), { realm: 'master', 'auth-server-url': 'http://localhost:8080' });",
    "tags": [
      "fastify",
      "keycloak",
      "authentication",
      "security"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify Casbin",
    "description": "Access control plugin for Fastify with Casbin authorization",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-casbin'), { model: 'model.conf', policy: 'policy.csv' });",
    "tags": [
      "fastify",
      "casbin",
      "authorization",
      "security"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify Rbac",
    "description": "Role-based access control plugin for Fastify with roles and permissions",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-rbac'), { roles: ['admin', 'user'] });",
    "tags": [
      "fastify",
      "rbac",
      "roles",
      "permissions"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify ACL",
    "description": "Access control list plugin for Fastify with fine-grained permissions",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-acl'), { allow: ['admin', 'user'] });",
    "tags": [
      "fastify",
      "acl",
      "access-control",
      "security"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify Audit",
    "description": "Audit logging plugin for Fastify with request and response tracking",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-audit'), { storage: 'file', path: './logs' });",
    "tags": [
      "fastify",
      "audit",
      "logging",
      "monitoring"
    ],
    "category": "Logging"
  },
  {
    "title": "Fastify Logger (Pino)",
    "description": "Advanced logging plugin for Fastify with Pino and pretty printing",
    "usage": "const fastify = require('fastify')({ logger: { level: 'info', transport: { target: 'pino-pretty' } } });",
    "tags": [
      "fastify",
      "logging",
      "pino",
      "pretty"
    ],
    "category": "Logging"
  },
  {
    "title": "Fastify Winston",
    "description": "Winston logging plugin for Fastify with multiple transports",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-winston'), { transports: [new winston.transports.Console()] });",
    "tags": [
      "fastify",
      "winston",
      "logging",
      "transports"
    ],
    "category": "Logging"
  },
  {
    "title": "Fastify Middleware",
    "description": "Connect/Express middleware compatibility plugin for Fastify",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/middleware')); fastify.use(require('cors')());",
    "tags": [
      "fastify",
      "middleware",
      "compatibility",
      "express"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Fastify View",
    "description": "Template engine plugin for Fastify with handlebars, ejs, and pug",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/view'), { engine: { handlebars: require('handlebars') } });",
    "tags": [
      "fastify",
      "template",
      "views",
      "handlebars"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Ejs",
    "description": "EJS template engine plugin for Fastify with layouts and partials",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/ejs'), { root: './views' });",
    "tags": [
      "fastify",
      "ejs",
      "template",
      "views"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Pug",
    "description": "Pug template engine plugin for Fastify with compile and runtime support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/pug'), { root: './views' });",
    "tags": [
      "fastify",
      "pug",
      "template",
      "views"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Handlebars",
    "description": "Handlebars template engine plugin for Fastify with helpers",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/handlebars'), { root: './views' });",
    "tags": [
      "fastify",
      "handlebars",
      "template",
      "views"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Markdown",
    "description": "Markdown rendering plugin for Fastify with custom plugins",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-markdown'), { });",
    "tags": [
      "fastify",
      "markdown",
      "render",
      "html"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Autoload (Advanced)",
    "description": "Advanced plugin autoloader with hierarchical loading and options",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/autoload'), { dir: './plugins', options: { prefix: 'api' } });",
    "tags": [
      "fastify",
      "autoload",
      "plugins",
      "configuration"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Decorate",
    "description": "Fastify decoration utilities for extending core and request objects",
    "usage": "const fastify = require('fastify')(); fastify.decorate('utility', { greet: () => 'Hello' });",
    "tags": [
      "fastify",
      "decorate",
      "extend",
      "utility"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Hooks",
    "description": "Lifecycle hooks for Fastify with beforeHandler, preParsing, and onSend",
    "usage": "const fastify = require('fastify')(); fastify.addHook('preHandler', (req, reply, done) => { req.user = 'john'; done(); });",
    "tags": [
      "fastify",
      "hooks",
      "lifecycle",
      "middleware"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Type Provider",
    "description": "TypeScript type providers for Fastify with Zod, Yup, and Joi",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/type-provider-zod'), { schema: { body: z.object({ name: z.string() }) } });",
    "tags": [
      "fastify",
      "typescript",
      "zod",
      "validation"
    ],
    "category": "Validation"
  },
  {
    "title": "Fastify JWT (Advanced)",
    "description": "Advanced JWT plugin with refresh tokens and blacklisting",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/jwt'), { secret: 'secret', refreshToken: true });",
    "tags": [
      "fastify",
      "jwt",
      "refresh",
      "security"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify OTP",
    "description": "One-time password plugin for Fastify with TOTP and HOTP support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-otp'), { algorithm: 'sha1' });",
    "tags": [
      "fastify",
      "otp",
      "totp",
      "security"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify QR Code",
    "description": "QR code generation plugin for Fastify with PNG and SVG output",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-qrcode'), { type: 'png' });",
    "tags": [
      "fastify",
      "qrcode",
      "generate",
      "png"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Bcrypt",
    "description": "Bcrypt hashing plugin for Fastify with salt rounds and compare",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-bcrypt'), { saltRounds: 10 });",
    "tags": [
      "fastify",
      "bcrypt",
      "hash",
      "security"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify Argon2",
    "description": "Argon2 hashing plugin for Fastify with memory and time parameters",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-argon2'), { memoryCost: 1024, timeCost: 2 });",
    "tags": [
      "fastify",
      "argon2",
      "hash",
      "security"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify Crypto",
    "description": "Crypto utilities plugin for Fastify with AES and random generation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-crypto'), { algorithm: 'aes-256-cbc' });",
    "tags": [
      "fastify",
      "crypto",
      "encryption",
      "random"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify UUID",
    "description": "UUID generation plugin for Fastify with v1, v4, and v5 support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-uuid'), { version: 'v4' });",
    "tags": [
      "fastify",
      "uuid",
      "generate",
      "identifier"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Nanoid",
    "description": "NanoID generation plugin for Fastify with custom alphabet",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-nanoid'), { length: 10 });",
    "tags": [
      "fastify",
      "nanoid",
      "id",
      "generate"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Slug",
    "description": "Slug generation plugin for Fastify with custom separators",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-slug'), { separator: '-' });",
    "tags": [
      "fastify",
      "slug",
      "generate",
      "url"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Normalize",
    "description": "String normalization plugin for Fastify with unicode and case handling",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-normalize'), { case: 'lower' });",
    "tags": [
      "fastify",
      "normalize",
      "string",
      "unicode"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Sanitize",
    "description": "Input sanitization plugin for Fastify with XSS and SQL injection protection",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-sanitize'), { escapeHtml: true });",
    "tags": [
      "fastify",
      "sanitize",
      "security",
      "xss"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify Censor",
    "description": "Profanity filter plugin for Fastify with custom word lists",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-censor'), { words: ['badword'] });",
    "tags": [
      "fastify",
      "censor",
      "profanity",
      "filter"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Validator",
    "description": "Input validation plugin for Fastify with extensive validation rules",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-validator'), { rules: { email: { type: 'email' } } });",
    "tags": [
      "fastify",
      "validator",
      "validation",
      "rules"
    ],
    "category": "Validation"
  },
  {
    "title": "Fastify Zod",
    "description": "Zod validation plugin for Fastify with type inference and errors",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-zod'), { schema: { body: z.object({ name: z.string() }) } });",
    "tags": [
      "fastify",
      "zod",
      "validation",
      "typescript"
    ],
    "category": "Validation"
  },
  {
    "title": "Fastify Yup",
    "description": "Yup validation plugin for Fastify with async validation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-yup'), { schema: { body: yup.object({ name: yup.string().required() }) } });",
    "tags": [
      "fastify",
      "yup",
      "validation",
      "async"
    ],
    "category": "Validation"
  },
  {
    "title": "Fastify Joi",
    "description": "Joi validation plugin for Fastify with descriptive errors",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-joi'), { schema: { body: Joi.object({ name: Joi.string().required() }) } });",
    "tags": [
      "fastify",
      "joi",
      "validation",
      "schema"
    ],
    "category": "Validation"
  },
  {
    "title": "Fastify Ajv",
    "description": "AJV validation plugin for Fastify with JSON Schema support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-ajv'), { customKeywords: ['custom'] });",
    "tags": [
      "fastify",
      "ajv",
      "validation",
      "json-schema"
    ],
    "category": "Validation"
  },
  {
    "title": "Fastify Data Validation",
    "description": "Comprehensive data validation plugin with multiple schema support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-data-validation'), { schemas: { user: { type: 'object' } } });",
    "tags": [
      "fastify",
      "validation",
      "data",
      "schema"
    ],
    "category": "Validation"
  },
  {
    "title": "Fastify Excel",
    "description": "Excel generation plugin for Fastify with xlsx and csv support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-excel'), { });",
    "tags": [
      "fastify",
      "excel",
      "xlsx",
      "csv"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify PDF",
    "description": "PDF generation plugin for Fastify with PDFKit integration",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-pdf'), { });",
    "tags": [
      "fastify",
      "pdf",
      "generate",
      "report"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify CSV",
    "description": "CSV parsing and generation plugin for Fastify with streaming",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-csv'), { });",
    "tags": [
      "fastify",
      "csv",
      "parse",
      "generate"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify JSON",
    "description": "JSON utilities plugin for Fastify with streaming and optimization",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-json'), { fast: true });",
    "tags": [
      "fastify",
      "json",
      "streaming",
      "optimization"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify XML",
    "description": "XML parsing and generation plugin for Fastify with custom schemas",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-xml'), { });",
    "tags": [
      "fastify",
      "xml",
      "parse",
      "generate"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify YAML (Advanced)",
    "description": "Advanced YAML plugin with custom schemas and validation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-yaml'), { schema: 'core' });",
    "tags": [
      "fastify",
      "yaml",
      "parse",
      "schema"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify TOML",
    "description": "TOML parsing and generation plugin for Fastify",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-toml'), { });",
    "tags": [
      "fastify",
      "toml",
      "parse",
      "generate"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify INI (Advanced)",
    "description": "Advanced INI configuration plugin with sections and inheritance",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-ini'), { });",
    "tags": [
      "fastify",
      "ini",
      "configuration",
      "parse"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Environment",
    "description": "Environment variable plugin for Fastify with validation and defaults",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-env'), { schema: { PORT: { type: 'number', default: 3000 } } });",
    "tags": [
      "fastify",
      "env",
      "configuration",
      "validation"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Dotenv",
    "description": "Dotenv plugin for Fastify with automatic .env loading",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-dotenv'), { path: '.env' });",
    "tags": [
      "fastify",
      "dotenv",
      "env",
      "configuration"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Config",
    "description": "Configuration management plugin for Fastify with multiple sources",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-config'), { sources: ['config/default.json', 'config/production.json'] });",
    "tags": [
      "fastify",
      "config",
      "json",
      "management"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Secrets",
    "description": "Secrets management plugin for Fastify with Vault and AWS integration",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-secrets'), { provider: 'vault' });",
    "tags": [
      "fastify",
      "secrets",
      "vault",
      "security"
    ],
    "category": "Security"
  },
  {
    "title": "Fastify Feature Flags",
    "description": "Feature flag plugin for Fastify with toggle and rollout support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-feature-flags'), { flags: { newFeature: true } });",
    "tags": [
      "fastify",
      "feature-flags",
      "toggle",
      "rollout"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify AB Testing",
    "description": "A/B testing plugin for Fastify with experiment allocation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-ab-testing'), { experiments: { newUI: { ratio: 0.5 } } });",
    "tags": [
      "fastify",
      "ab-testing",
      "experiments",
      "allocation"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Analytics",
    "description": "Analytics plugin for Fastify with event tracking and aggregation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-analytics'), { providers: ['google', 'mixpanel'] });",
    "tags": [
      "fastify",
      "analytics",
      "tracking",
      "metrics"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Telemetry",
    "description": "Telemetry collection plugin for Fastify with metrics and tracing",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-telemetry'), { exporter: 'console' });",
    "tags": [
      "fastify",
      "telemetry",
      "metrics",
      "tracing"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Notifications",
    "description": "Push notification plugin for Fastify with WebPush and Firebase",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-notifications'), { providers: ['webpush', 'firebase'] });",
    "tags": [
      "fastify",
      "notifications",
      "push",
      "webpush"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify SMS",
    "description": "SMS sending plugin for Fastify with Twilio and Vonage integration",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-sms'), { provider: 'twilio' });",
    "tags": [
      "fastify",
      "sms",
      "twilio",
      "vonage"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Voice",
    "description": "Voice communication plugin for Fastify with Twilio and Vonage",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-voice'), { provider: 'twilio' });",
    "tags": [
      "fastify",
      "voice",
      "twilio",
      "vonage"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Video",
    "description": "Video processing plugin for Fastify with FFmpeg integration",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-video'), { ffmpeg: '/usr/bin/ffmpeg' });",
    "tags": [
      "fastify",
      "video",
      "ffmpeg",
      "processing"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Image Processing",
    "description": "Image processing plugin with Sharp and Jimp integration",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-image'), { library: 'sharp' });",
    "tags": [
      "fastify",
      "image",
      "sharp",
      "processing"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify QR",
    "description": "QR code generation and scanning plugin for Fastify",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-qr'), { });",
    "tags": [
      "fastify",
      "qr",
      "generate",
      "scan"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Barcode",
    "description": "Barcode generation plugin for Fastify with multiple formats",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-barcode'), { format: 'ean13' });",
    "tags": [
      "fastify",
      "barcode",
      "generate",
      "ean"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify ExcelJS",
    "description": "Advanced Excel plugin with formatting and charts support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-exceljs'), { });",
    "tags": [
      "fastify",
      "exceljs",
      "excel",
      "charts"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Word",
    "description": "Word document generation plugin with DOCX support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-word'), { });",
    "tags": [
      "fastify",
      "word",
      "docx",
      "generate"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify PPT",
    "description": "PowerPoint presentation generation plugin for Fastify",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-ppt'), { });",
    "tags": [
      "fastify",
      "ppt",
      "powerpoint",
      "presentation"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify HTML",
    "description": "HTML generation and template plugin for Fastify",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-html'), { });",
    "tags": [
      "fastify",
      "html",
      "template",
      "generate"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Markdown (Advanced)",
    "description": "Advanced Markdown plugin with plugins and custom rendering",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-markdown'), { plugins: ['emoji', 'highlight'] });",
    "tags": [
      "fastify",
      "markdown",
      "render",
      "plugins"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify CSS",
    "description": "CSS processing plugin for Fastify with minification and compilation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-css'), { minify: true });",
    "tags": [
      "fastify",
      "css",
      "minify",
      "compilation"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify JSX",
    "description": "JSX rendering plugin for Fastify with React support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-jsx'), { });",
    "tags": [
      "fastify",
      "jsx",
      "react",
      "render"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Vue",
    "description": "Vue.js rendering plugin for Fastify with SSR support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-vue'), { ssr: true });",
    "tags": [
      "fastify",
      "vue",
      "ssr",
      "render"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify React",
    "description": "React rendering plugin for Fastify with hydration support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-react'), { hydrate: true });",
    "tags": [
      "fastify",
      "react",
      "hydrate",
      "render"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Angular",
    "description": "Angular rendering plugin for Fastify with Universal support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-angular'), { });",
    "tags": [
      "fastify",
      "angular",
      "ssr",
      "render"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Svelte",
    "description": "Svelte rendering plugin for Fastify with SSR support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-svelte'), { ssr: true });",
    "tags": [
      "fastify",
      "svelte",
      "ssr",
      "render"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Solid",
    "description": "Solid.js rendering plugin for Fastify with SSR support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-solid'), { ssr: true });",
    "tags": [
      "fastify",
      "solid",
      "ssr",
      "render"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Lit",
    "description": "Lit HTML rendering plugin for Fastify with web components",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-lit'), { });",
    "tags": [
      "fastify",
      "lit",
      "web-components",
      "render"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Htmx",
    "description": "Htmx integration plugin for Fastify with dynamic HTML updates",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-htmx'), { });",
    "tags": [
      "fastify",
      "htmx",
      "dynamic",
      "html"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Alpine",
    "description": "Alpine.js integration plugin for Fastify with dynamic UI",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-alpine'), { });",
    "tags": [
      "fastify",
      "alpine",
      "dynamic",
      "ui"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Tailwind",
    "description": "Tailwind CSS integration plugin for Fastify with build-time processing",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-tailwind'), { content: ['./views/**/*.html'] });",
    "tags": [
      "fastify",
      "tailwind",
      "css",
      "build"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Bootstrap",
    "description": "Bootstrap integration plugin for Fastify with components",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-bootstrap'), { });",
    "tags": [
      "fastify",
      "bootstrap",
      "css",
      "components"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify DaisyUI",
    "description": "DaisyUI integration plugin for Fastify with Tailwind components",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-daisyui'), { });",
    "tags": [
      "fastify",
      "daisyui",
      "tailwind",
      "components"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Material",
    "description": "Material Design integration plugin for Fastify with components",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-material'), { });",
    "tags": [
      "fastify",
      "material",
      "design",
      "components"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Font Awesome",
    "description": "Font Awesome integration plugin for Fastify with icons",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-font-awesome'), { });",
    "tags": [
      "fastify",
      "font-awesome",
      "icons",
      "font"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Icons",
    "description": "Icon library integration plugin for Fastify with multiple providers",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-icons'), { provider: 'material' });",
    "tags": [
      "fastify",
      "icons",
      "material",
      "font-awesome"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Emoji",
    "description": "Emoji support plugin for Fastify with Unicode and shortcode conversion",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-emoji'), { });",
    "tags": [
      "fastify",
      "emoji",
      "unicode",
      "shortcode"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Date",
    "description": "Date utilities plugin for Fastify with formatting and parsing",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-date'), { locale: 'en-US' });",
    "tags": [
      "fastify",
      "date",
      "format",
      "parse"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Time",
    "description": "Time utilities plugin for Fastify with duration and timezone",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-time'), { timezone: 'UTC' });",
    "tags": [
      "fastify",
      "time",
      "duration",
      "timezone"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Cron",
    "description": "Cron job scheduling plugin for Fastify with timezone support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-cron'), { jobs: [{ cron: '0 0 * * *', handler: () => console.log('Cron job') }] });",
    "tags": [
      "fastify",
      "cron",
      "schedule",
      "jobs"
    ],
    "category": "Background Processing"
  },
  {
    "title": "Fastify Bull",
    "description": "Bull queue integration plugin for Fastify with job processing",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-bull'), { redis: { host: 'localhost' } });",
    "tags": [
      "fastify",
      "bull",
      "queue",
      "jobs"
    ],
    "category": "Background Processing"
  },
  {
    "title": "Fastify BullMQ",
    "description": "BullMQ queue integration for Fastify with advanced job features",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-bullmq'), { redis: { host: 'localhost' } });",
    "tags": [
      "fastify",
      "bullmq",
      "queue",
      "jobs"
    ],
    "category": "Background Processing"
  },
  {
    "title": "Fastify Agenda",
    "description": "Agenda job scheduler plugin for Fastify with MongoDB storage",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-agenda'), { db: { address: 'mongodb://localhost/agenda' } });",
    "tags": [
      "fastify",
      "agenda",
      "jobs",
      "schedule"
    ],
    "category": "Background Processing"
  },
  {
    "title": "Fastify Node Cron",
    "description": "Node-cron integration for Fastify with cron schedule support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-node-cron'), { });",
    "tags": [
      "fastify",
      "node-cron",
      "schedule",
      "cron"
    ],
    "category": "Background Processing"
  },
  {
    "title": "Fastify AMQP",
    "description": "AMQP/RabbitMQ plugin for Fastify with message publishing and consumption",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-amqp'), { url: 'amqp://localhost' });",
    "tags": [
      "fastify",
      "amqp",
      "rabbitmq",
      "queue"
    ],
    "category": "Background Processing"
  },
  {
    "title": "Fastify MQTT",
    "description": "MQTT plugin for Fastify with publish-subscribe messaging",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-mqtt'), { host: 'mqtt://localhost' });",
    "tags": [
      "fastify",
      "mqtt",
      "iot",
      "messaging"
    ],
    "category": "Real-time"
  },
  {
    "title": "Fastify Kafka",
    "description": "Kafka plugin for Fastify with producer and consumer support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-kafka'), { brokers: ['localhost:9092'] });",
    "tags": [
      "fastify",
      "kafka",
      "streaming",
      "events"
    ],
    "category": "Real-time"
  },
  {
    "title": "Fastify NATS",
    "description": "NATS messaging plugin for Fastify with pub-sub and request-reply",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-nats'), { servers: ['nats://localhost:4222'] });",
    "tags": [
      "fastify",
      "nats",
      "messaging",
      "pubsub"
    ],
    "category": "Real-time"
  },
  {
    "title": "Fastify RabbitMQ",
    "description": "RabbitMQ plugin for Fastify with advanced queuing features",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-rabbitmq'), { connection: 'amqp://localhost' });",
    "tags": [
      "fastify",
      "rabbitmq",
      "queue",
      "amqp"
    ],
    "category": "Background Processing"
  },
  {
    "title": "Fastify SQS",
    "description": "AWS SQS plugin for Fastify with queue management and message handling",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-sqs'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "sqs",
      "aws",
      "queue"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify SNS",
    "description": "AWS SNS plugin for Fastify with topic management and publishing",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-sns'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "sns",
      "aws",
      "pubsub"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify Lambda",
    "description": "AWS Lambda integration plugin for Fastify with function invocation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-lambda'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "lambda",
      "aws",
      "serverless"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify DynamoDB",
    "description": "DynamoDB plugin for Fastify with table operations and queries",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-dynamodb'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "dynamodb",
      "aws",
      "database"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify S3",
    "description": "AWS S3 plugin for Fastify with bucket and object operations",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-s3'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "s3",
      "aws",
      "storage"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify SES",
    "description": "AWS SES plugin for Fastify with email sending and receiving",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-ses'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "ses",
      "aws",
      "email"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify CloudWatch",
    "description": "AWS CloudWatch plugin for Fastify with metrics and logs",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-cloudwatch'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "cloudwatch",
      "aws",
      "monitoring"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify Step Functions",
    "description": "AWS Step Functions plugin for Fastify with state machine execution",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-step-functions'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "step-functions",
      "aws",
      "workflow"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify EventBridge",
    "description": "AWS EventBridge plugin for Fastify with event publishing",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-eventbridge'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "eventbridge",
      "aws",
      "events"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify AppSync",
    "description": "AWS AppSync plugin for Fastify with GraphQL subscriptions",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-appsync'), { url: 'https://api.example.com/graphql' });",
    "tags": [
      "fastify",
      "appsync",
      "graphql",
      "aws"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify API Gateway",
    "description": "AWS API Gateway plugin for Fastify with REST and WebSocket support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-api-gateway'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "api-gateway",
      "aws",
      "rest"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify Cognito",
    "description": "AWS Cognito plugin for Fastify with user pool and authentication",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-cognito'), { region: 'us-east-1', userPoolId: 'us-east-1_123' });",
    "tags": [
      "fastify",
      "cognito",
      "aws",
      "authentication"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify KMS",
    "description": "AWS KMS plugin for Fastify with encryption and decryption",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-kms'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "kms",
      "aws",
      "encryption"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify Secrets Manager",
    "description": "AWS Secrets Manager plugin for Fastify with secret retrieval",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-secrets-manager'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "secrets-manager",
      "aws",
      "security"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify Parameter Store",
    "description": "AWS SSM Parameter Store plugin for Fastify with config retrieval",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-parameter-store'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "parameter-store",
      "aws",
      "configuration"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify ECS",
    "description": "AWS ECS plugin for Fastify with container management",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-ecs'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "ecs",
      "aws",
      "containers"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify ECR",
    "description": "AWS ECR plugin for Fastify with container registry management",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-ecr'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "ecr",
      "aws",
      "registry"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify RDS",
    "description": "AWS RDS plugin for Fastify with database connection management",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-rds'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "rds",
      "aws",
      "database"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify Aurora",
    "description": "AWS Aurora plugin for Fastify with MySQL and PostgreSQL compatibility",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-aurora'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "aurora",
      "aws",
      "database"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify Redshift",
    "description": "AWS Redshift plugin for Fastify with data warehousing",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-redshift'), { region: 'us-east-1' });",
    "tags": [
      "fastify",
      "redshift",
      "aws",
      "data-warehouse"
    ],
    "category": "Cloud"
  },
  {
    "title": "Fastify OpenSearch",
    "description": "OpenSearch plugin for Fastify with search and analytics",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-opensearch'), { node: 'http://localhost:9200' });",
    "tags": [
      "fastify",
      "opensearch",
      "search",
      "analytics"
    ],
    "category": "Database"
  },
  {
    "title": "Fastify Elasticsearch (Advanced)",
    "description": "Advanced Elasticsearch plugin with aggregation and search features",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-elasticsearch'), { node: 'http://localhost:9200' });",
    "tags": [
      "fastify",
      "elasticsearch",
      "search",
      "aggregation"
    ],
    "category": "Database"
  },
  {
    "title": "Fastify Meilisearch",
    "description": "Meilisearch plugin for Fastify with instant search and typo-tolerance",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-meilisearch'), { host: 'http://localhost:7700' });",
    "tags": [
      "fastify",
      "meilisearch",
      "search",
      "typo-tolerance"
    ],
    "category": "Database"
  },
  {
    "title": "Fastify Typesense",
    "description": "Typesense plugin for Fastify with full-text search and faceting",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-typesense'), { nodes: [{ host: 'localhost', port: '8108' }] });",
    "tags": [
      "fastify",
      "typesense",
      "search",
      "full-text"
    ],
    "category": "Database"
  },
  {
    "title": "Fastify Algolia",
    "description": "Algolia plugin for Fastify with search and index management",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-algolia'), { appId: 'app-id', apiKey: 'api-key' });",
    "tags": [
      "fastify",
      "algolia",
      "search",
      "index"
    ],
    "category": "Database"
  },
  {
    "title": "Fastify Redis Cache",
    "description": "Redis cache plugin for Fastify with automatic caching and invalidation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-redis-cache'), { host: 'localhost', ttl: 60 });",
    "tags": [
      "fastify",
      "redis",
      "cache",
      "ttl"
    ],
    "category": "Performance"
  },
  {
    "title": "Fastify Memory Cache",
    "description": "In-memory cache plugin for Fastify with LRU and TTL support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-memory-cache'), { max: 1000, ttl: 60 });",
    "tags": [
      "fastify",
      "cache",
      "memory",
      "lru"
    ],
    "category": "Performance"
  },
  {
    "title": "Fastify Cache Manager",
    "description": "Cache manager plugin for Fastify with multi-store support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-cache-manager'), { stores: ['memory', 'redis'] });",
    "tags": [
      "fastify",
      "cache",
      "manager",
      "multi-store"
    ],
    "category": "Performance"
  },
  {
    "title": "Fastify Response Cache",
    "description": "HTTP response caching plugin for Fastify with cache-control",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-response-cache'), { ttl: 60 });",
    "tags": [
      "fastify",
      "response",
      "cache",
      "http"
    ],
    "category": "Performance"
  },
  {
    "title": "Fastify CDN",
    "description": "CDN integration plugin for Fastify with asset serving and optimization",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-cdn'), { provider: 'cloudflare' });",
    "tags": [
      "fastify",
      "cdn",
      "assets",
      "optimization"
    ],
    "category": "Performance"
  },
  {
    "title": "Fastify Edge",
    "description": "Edge computing plugin for Fastify with CDN and cloudflare workers",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-edge'), { });",
    "tags": [
      "fastify",
      "edge",
      "cdn",
      "cloudflare"
    ],
    "category": "Performance"
  },
  {
    "title": "Fastify Multipart",
    "description": "Multipart form data parsing plugin for Fastify with file upload support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/multipart'), { limits: { fileSize: 1024 * 1024 } });",
    "tags": [
      "fastify",
      "multipart",
      "upload",
      "form"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Static (Advanced)",
    "description": "Advanced static file serving with caching, compression, and ETag support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/static'), { root: './public', cacheControl: 'public, max-age=3600' });",
    "tags": [
      "fastify",
      "static",
      "cache",
      "serve"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Proxy",
    "description": "HTTP proxy plugin for Fastify with request/response manipulation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('@fastify/http-proxy'), { upstream: 'https://api.example.com' });",
    "tags": [
      "fastify",
      "proxy",
      "http",
      "forward"
    ],
    "category": "HTTP Client"
  },
  {
    "title": "Fastify Rewind",
    "description": "Request/response replay plugin for Fastify with recording and playback",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-rewind'), { mode: 'record' });",
    "tags": [
      "fastify",
      "replay",
      "record",
      "testing"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Fastify Test",
    "description": "Testing utilities for Fastify with supertest integration",
    "usage": "const fastify = require('fastify')(); const test = require('fastify-test'); test(fastify, '/', (res) => { expect(res.statusCode).toBe(200); });",
    "tags": [
      "fastify",
      "testing",
      "supertest",
      "assert"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Fastify Mock",
    "description": "Mocking plugin for Fastify with dynamic response generation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-mock'), { routes: [{ path: '/api/users', response: { users: [] } }] });",
    "tags": [
      "fastify",
      "mock",
      "testing",
      "stub"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Fastify Fixtures",
    "description": "Test fixtures plugin for Fastify with data seeding and cleanup",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-fixtures'), { fixtures: { users: [{ name: 'John' }] } });",
    "tags": [
      "fastify",
      "fixtures",
      "testing",
      "data"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Fastify Factory",
    "description": "Test factory plugin for Fastify with model generation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-factory'), { models: { User: { name: 'John' } } });",
    "tags": [
      "fastify",
      "factory",
      "testing",
      "generation"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Fastify Seeder",
    "description": "Database seeding plugin for Fastify with data import",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-seeder'), { data: './seed-data.json' });",
    "tags": [
      "fastify",
      "seeder",
      "database",
      "data"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Fastify Migrate",
    "description": "Database migration plugin for Fastify with version control",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-migrate'), { migrations: './migrations' });",
    "tags": [
      "fastify",
      "migrate",
      "database",
      "version"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Rollback",
    "description": "Rollback plugin for Fastify with undo and redo support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-rollback'), { });",
    "tags": [
      "fastify",
      "rollback",
      "undo",
      "redo"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Snapshot",
    "description": "Snapshot testing plugin for Fastify with JSON comparison",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-snapshot'), { });",
    "tags": [
      "fastify",
      "snapshot",
      "testing",
      "comparison"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Fastify Coverage",
    "description": "Code coverage plugin for Fastify with Istanbul integration",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-coverage'), { });",
    "tags": [
      "fastify",
      "coverage",
      "testing",
      "istanbul"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Fastify Lint",
    "description": "Code linting plugin for Fastify with ESLint integration",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-lint'), { config: '.eslintrc' });",
    "tags": [
      "fastify",
      "lint",
      "eslint",
      "code-quality"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Format",
    "description": "Code formatting plugin for Fastify with Prettier integration",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-format'), { });",
    "tags": [
      "fastify",
      "format",
      "prettier",
      "code-style"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Typescript",
    "description": "TypeScript plugin for Fastify with type definitions and validation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-typescript'), { tsconfig: './tsconfig.json' });",
    "tags": [
      "fastify",
      "typescript",
      "types",
      "validation"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Babel",
    "description": "Babel transpilation plugin for Fastify with ES6+ support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-babel'), { presets: ['@babel/preset-env'] });",
    "tags": [
      "fastify",
      "babel",
      "transpile",
      "es6"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify SWC",
    "description": "SWC compiler plugin for Fastify with fast transpilation",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-swc'), { });",
    "tags": [
      "fastify",
      "swc",
      "compiler",
      "fast"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify ESBuild",
    "description": "ESBuild plugin for Fastify with bundling and optimization",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-esbuild'), { entryPoints: ['src/index.js'] });",
    "tags": [
      "fastify",
      "esbuild",
      "bundler",
      "build"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Webpack",
    "description": "Webpack plugin for Fastify with asset compilation and HMR",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-webpack'), { config: './webpack.config.js' });",
    "tags": [
      "fastify",
      "webpack",
      "bundler",
      "hmr"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Rollup",
    "description": "Rollup plugin for Fastify with tree-shaking and ESM support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-rollup'), { input: 'src/index.js' });",
    "tags": [
      "fastify",
      "rollup",
      "bundler",
      "tree-shaking"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Vite",
    "description": "Vite plugin for Fastify with fast development server and HMR",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-vite'), { root: './client' });",
    "tags": [
      "fastify",
      "vite",
      "dev-server",
      "hmr"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Parcel",
    "description": "Parcel plugin for Fastify with zero-config bundling",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-parcel'), { entry: 'index.html' });",
    "tags": [
      "fastify",
      "parcel",
      "bundler",
      "zero-config"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Snowpack",
    "description": "Snowpack plugin for Fastify with native ESM development",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-snowpack'), { });",
    "tags": [
      "fastify",
      "snowpack",
      "esm",
      "dev"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Module Aliases",
    "description": "Module aliases plugin for Fastify with path resolution",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-module-aliases'), { aliases: { '@': './src' } });",
    "tags": [
      "fastify",
      "aliases",
      "module",
      "resolution"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Path Aliases",
    "description": "Path alias plugin for Fastify with import mapping",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-path-aliases'), { paths: { '~': './src' } });",
    "tags": [
      "fastify",
      "path",
      "aliases",
      "import"
    ],
    "category": "Dev Tool"
  },
  {
    "title": "Fastify Resource",
    "description": "Resource management plugin for Fastify with RESTful routes",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-resource'), { resource: 'users', handler: UserController });",
    "tags": [
      "fastify",
      "resource",
      "rest",
      "routes"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Fastify Controller",
    "description": "Controller plugin for Fastify with MVC pattern support",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-controller'), { controllers: './controllers' });",
    "tags": [
      "fastify",
      "controller",
      "mvc",
      "pattern"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Fastify Service",
    "description": "Service layer plugin for Fastify with dependency injection",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-service'), { services: ['./services'] });",
    "tags": [
      "fastify",
      "service",
      "di",
      "injection"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Fastify Repository",
    "description": "Repository pattern plugin for Fastify with data access",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-repository'), { repositories: ['./repositories'] });",
    "tags": [
      "fastify",
      "repository",
      "data",
      "access"
    ],
    "category": "Web Framework"
  },
  {
    "title": "Fastify Validator (Advanced)",
    "description": "Advanced validation plugin with custom rules and messages",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-validator'), { custom: { password: (val) => val.length > 6 } });",
    "tags": [
      "fastify",
      "validator",
      "custom",
      "rules"
    ],
    "category": "Validation"
  },
  {
    "title": "Fastify Transformer",
    "description": "Data transformation plugin for Fastify with serialization",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-transformer'), { transformers: { user: (data) => ({ ...data, fullName: data.name }) } });",
    "tags": [
      "fastify",
      "transformer",
      "serialization",
      "data"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Mapper",
    "description": "Data mapping plugin for Fastify with object mapping",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-mapper'), { maps: { user: { name: 'fullName' } } });",
    "tags": [
      "fastify",
      "mapper",
      "data",
      "mapping"
    ],
    "category": "Utility"
  },
  {
    "title": "Fastify Filter",
    "description": "Data filtering plugin for Fastify with query filtering",
    "usage": "const fastify = require('fastify')(); fastify.register(require('fastify-filter'), { filters: ['eq', 'gt', 'lt'] });",
    "tags": [
      "fastify",
      "filter",
      "query",
      "data"
    ],
    "category": "Utility"
  }
];
