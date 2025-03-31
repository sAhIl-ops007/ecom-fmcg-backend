const routes = require('express').Router();
const shippingController = require('../controllers/ShippingController');

routes.post('/addshipping',shippingController.addShipping);

module.exports = routes;