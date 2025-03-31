const routes = require('express').Router();
const brandController = require("../controllers/BrandController")

routes.post("/addbrand",brandController.addBrand);
routes.get("/getbrands",brandController.getBrand);

module.exports = routes;