// Node.js Library Documentation
// Total modules: 20
// Last updated: 2026-08-15 23:29:26

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
  },
  {
    "title": "Hapi",
    "description": "A rich framework for building applications and services with configuration-based routing and built-in validation",
    "usage": "const Hapi = require('@hapi/hapi'); const server = Hapi.server({ port: 3000 }); server.route({ method: 'GET', path: '/', handler: (request, h) => 'Hello World' }); await server.start();",
    "tags": [
      "web",
      "framework",
      "configuration",
      "enterprise",
      "http"
    ],
    "category": "Web Framework"
  },
  {
    "title": "NestJS",
    "description": "A progressive Node.js framework for building efficient, reliable, and scalable server-side applications using TypeScript",
    "usage": "import { Controller, Get } from '@nestjs/common'; @Controller() export class AppController { @Get() getHello(): string { return 'Hello World'; } }",
    "tags": [
      "typescript",
      "framework",
      "enterprise",
      "decorators",
      "modular"
    ],
    "category": "Web Framework"
  },
  {
    "title": "TypeORM",
    "description": "An ORM that supports Active Record and Data Mapper patterns with full TypeScript support and multiple database drivers",
    "usage": "import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'; @Entity() export class User { @PrimaryGeneratedColumn() id: number; @Column() name: string; }",
    "tags": [
      "orm",
      "database",
      "typescript",
      "sql",
      "entities"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Knex.js",
    "description": "A SQL query builder for Node.js with support for PostgreSQL, MySQL, SQLite, and many other databases",
    "usage": "const knex = require('knex')({ client: 'sqlite3', connection: { filename: './data.db' } }); const users = await knex('users').where('age', '>', 18);",
    "tags": [
      "sql",
      "query",
      "database",
      "builder",
      "migrations"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Prisma",
    "description": "A next-generation ORM with type-safe queries, migrations, and automatic SQL generation for Node.js and TypeScript",
    "usage": "const { PrismaClient } = require('@prisma/client'); const prisma = new PrismaClient(); const users = await prisma.user.findMany();",
    "tags": [
      "orm",
      "database",
      "typescript",
      "prisma",
      "graphql"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Sequelize",
    "description": "A promise-based ORM for Node.js and io.js that supports PostgreSQL, MySQL, MariaDB, SQLite, and MSSQL",
    "usage": "const { Sequelize, Model, DataTypes } = require('sequelize'); const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'mysql' });",
    "tags": [
      "orm",
      "database",
      "sql",
      "models",
      "migrations"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "Drizzle ORM",
    "description": "A lightweight and performant SQL ORM with zero dependencies and full TypeScript support",
    "usage": "import { drizzle } from 'drizzle-orm/better-sqlite3'; import Database from 'better-sqlite3'; const db = drizzle(new Database('sqlite.db'));",
    "tags": [
      "orm",
      "database",
      "typescript",
      "lightweight",
      "sql"
    ],
    "category": "ORM/Database"
  },
  {
    "title": "SQLite3",
    "description": "A powerful SQLite3 driver for Node.js that provides a low-level interface to SQLite databases",
    "usage": "const sqlite3 = require('sqlite3').verbose(); const db = new sqlite3.Database(':memory:'); db.run('CREATE TABLE users (id INT, name TEXT)');",
    "tags": [
      "database",
      "sqlite",
      "embedded",
      "driver",
      "persistent"
    ],
    "category": "Database"
  },
  {
    "title": "Pg",
    "description": "A PostgreSQL client for Node.js with connection pooling, prepared statements, and binary parsing",
    "usage": "const { Client } = require('pg'); const client = new Client({ user: 'user', host: 'localhost', database: 'mydb', password: 'pass', port: 5432 }); await client.connect(); const res = await client.query('SELECT * FROM users');",
    "tags": [
      "postgresql",
      "database",
      "driver",
      "pool",
      "sql"
    ],
    "category": "Database"
  },
  {
    "title": "MySQL2",
    "description": "A fast MySQL client with prepared statements, connection pooling, and promise support for Node.js",
    "usage": "const mysql = require('mysql2/promise'); const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'pass', database: 'mydb' }); const [rows] = await connection.execute('SELECT * FROM users');",
    "tags": [
      "mysql",
      "database",
      "driver",
      "pool",
      "promises"
    ],
    "category": "Database"
  },
  {
    "title": "Redis",
    "description": "A complete Redis client for Node.js with clustering, Lua scripting, and support for all Redis commands",
    "usage": "const Redis = require('ioredis'); const redis = new Redis({ host: 'localhost', port: 6379 }); await redis.set('key', 'value'); const value = await redis.get('key');",
    "tags": [
      "redis",
      "cache",
      "database",
      "in-memory",
      "key-value"
    ],
    "category": "Database"
  },
  {
    "title": "MongoDB",
    "description": "The official MongoDB driver for Node.js with connection pooling, change streams, and aggregation pipeline support",
    "usage": "const { MongoClient } = require('mongodb'); const client = new MongoClient('mongodb://localhost:27017'); await client.connect(); const db = client.db('test'); const collection = db.collection('users');",
    "tags": [
      "mongodb",
      "database",
      "driver",
      "nosql",
      "aggregation"
    ],
    "category": "Database"
  },
  {
    "title": "Jimp",
    "description": "A pure JavaScript image processing library for Node.js that supports resizing, cropping, and applying filters",
    "usage": "const Jimp = require('jimp'); const image = await Jimp.read('input.jpg'); await image.resize(300, 300).greyscale().writeAsync('output.jpg');",
    "tags": [
      "image",
      "processing",
      "resize",
      "filter",
      "editing"
    ],
    "category": "Utility"
  },
  {
    "title": "Sharp",
    "description": "A high-performance image processing library for Node.js that supports resizing, cropping, and format conversion",
    "usage": "const sharp = require('sharp'); await sharp('input.jpg').resize(300, 300).toFile('output.jpg');",
    "tags": [
      "image",
      "processing",
      "high-performance",
      "resize",
      "conversion"
    ],
    "category": "Utility"
  },
  {
    "title": "PDFKit",
    "description": "A PDF generation library for Node.js that supports text, images, vector graphics, and tables",
    "usage": "const PDFDocument = require('pdfkit'); const doc = new PDFDocument(); doc.text('Hello World'); doc.pipe(fs.createWriteStream('output.pdf')); doc.end();",
    "tags": [
      "pdf",
      "generation",
      "documents",
      "vector",
      "report"
    ],
    "category": "Utility"
  },
  {
    "title": "ExcelJS",
    "description": "A library for reading, writing, and manipulating Excel files with support for xlsx, csv, and other spreadsheet formats",
    "usage": "const Excel = require('exceljs'); const workbook = new Excel.Workbook(); const worksheet = workbook.addWorksheet('Sheet 1'); worksheet.getCell('A1').value = 'Hello'; await workbook.xlsx.writeFile('file.xlsx');",
    "tags": [
      "excel",
      "spreadsheet",
      "xlsx",
      "csv",
      "report"
    ],
    "category": "Utility"
  },
  {
    "title": "Puppeteer",
    "description": "A headless Chrome browser automation library that allows controlling Chrome/Chromium programmatically",
    "usage": "const puppeteer = require('puppeteer'); const browser = await puppeteer.launch(); const page = await browser.newPage(); await page.goto('https://example.com'); const title = await page.title(); await browser.close();",
    "tags": [
      "automation",
      "browser",
      "headless",
      "testing",
      "scraping"
    ],
    "category": "Testing/Tool"
  },
  {
    "title": "Playwright",
    "description": "A browser automation library that supports Chromium, Firefox, and WebKit with modern features like auto-waiting",
    "usage": "const { chromium } = require('playwright'); const browser = await chromium.launch(); const page = await browser.newPage(); await page.goto('https://example.com'); await browser.close();",
    "tags": [
      "automation",
      "browser",
      "testing",
      "scraping",
      "cross-browser"
    ],
    "category": "Testing/Tool"
  }
];
