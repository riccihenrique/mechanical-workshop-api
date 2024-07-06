import express from 'express';

const Router = express.Router();

Router.get('/health', (req, res) => {
  res.send('Ok');
});

export { Router };