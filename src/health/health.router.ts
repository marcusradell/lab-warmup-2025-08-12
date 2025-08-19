import { Router } from 'express';

export const healthRouter = Router();

// Track server readiness state
let isReady = true;

healthRouter.get('/alive', (req, res) => {
  res.status(200).json({ alive: true });
});

healthRouter.get('/ready', (req, res) => {
  if (isReady) {
    res.status(200).json({ ready: true });
  } else {
    res.status(503).json({ ready: false });
  }
});

// Export function to control readiness state
export const setServerReady = (ready: boolean) => {
  isReady = ready;
};
