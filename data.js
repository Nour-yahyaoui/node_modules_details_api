// Node.js Library Documentation
// Total modules: 28
// Last updated: 2026-08-16 00:31:16

module.exports = [
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
  }
];
