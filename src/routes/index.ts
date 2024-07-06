import express from 'express';
import { mechanicalWorkshopRouter } from './mechanical-workshop';

const Router = express.Router();

Router.get('/health', (req, res) => {
  res.send('Ok');
});

Router.use('/mechanical-workshop', mechanicalWorkshopRouter);

export { Router };