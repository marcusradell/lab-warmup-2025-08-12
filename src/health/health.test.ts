import { describe, test, beforeEach, afterEach } from 'node:test';
import { deepStrictEqual } from 'assert';
import { Server } from 'http';
import express from 'express';
import request from 'supertest';
import { healthRouter } from './health.router';

describe('Health Check Endpoints', () => {
  let app: express.Express;
  let server: Server;

  beforeEach(() => {
    app = express();
    app.use('/health', healthRouter);
    server = app.listen(0); // Use a random available port
  });

  afterEach(() => {
    server.close();
  });

  test('should respond with 200 OK and alive: true when server is running', async () => {
    const response = await request(app).get('/health/alive');
    
    deepStrictEqual(response.status, 200);
    deepStrictEqual(response.body, { alive: true });
  });
});
