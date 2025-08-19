import { Router } from 'express';

export const healthRouter = Router();

// Track server readiness state
let isReady = true;

healthRouter.get('/alive', (req, res) => {
  res.status(200).json({ alive: true });
});

healthRouter.get('/ready', (req, res) => {
  res.status(200).json({ ready: isReady });
});

// Export function to control readiness state
export const setServerReady = (ready: boolean) => {
  isReady = ready;
};
