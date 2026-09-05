// Node.js Library Documentation
// Total modules: 79
// Last updated: 2026-09-05 15:20:47

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
  }
];
