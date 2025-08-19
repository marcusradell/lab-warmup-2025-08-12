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

  test('should respond with 200 OK and ready: true when server is ready', async () => {
    const response = await request(app).get('/health/ready');
    
    deepStrictEqual(response.status, 200);
    deepStrictEqual(response.body, { ready: true });
  });

  test('should respond with 503 Service Unavailable and ready: false when server is not ready', async () => {
    // Import and use the setServerReady function
    const { setServerReady } = require('./health.router');
    
    // Set server as not ready
    setServerReady(false);
    
    const response = await request(app).get('/health/ready');
    
    deepStrictEqual(response.status, 503);
    deepStrictEqual(response.body, { ready: false });
    
    // Reset server to ready state for other tests
    setServerReady(true);
  });
});
