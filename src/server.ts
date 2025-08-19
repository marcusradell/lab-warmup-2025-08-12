import express from 'express';
import { healthRouter } from './health/health.router';

export const createServer = () => {
  const app = express();
  
  // Add health check routes
  app.use('/health', healthRouter);
  
  return app;
};

export const startServer = (port = process.env.PORT || 3000) => {
  const app = createServer();
  
  const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  
  // Basic signal handling for graceful shutdown
  const shutdown = () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
      console.log('HTTP server closed');
      process.exit(0);
    });
  };
  
  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
  
  return server;
};
