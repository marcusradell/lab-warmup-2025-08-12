import { Router } from 'express';

export const healthRouter = Router();

healthRouter.get('/alive', (req, res) => {
  res.status(200).json({ alive: true });
});
