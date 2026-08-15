// Node.js Library Documentation
// Total modules: 3
// Last updated: 2026-08-16 00:29:46

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
  }
];
