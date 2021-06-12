const express = require('express');
const TradeController = require('./controller/TradeController');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ message: "Welcome to the Poke Trader API" });
});

routes.get('/trades', TradeController.getTrades);
routes.get('/trades/:id', TradeController.getTradeByID);
routes.post('/trades', TradeController.makeTrade);

module.exports = routes;
