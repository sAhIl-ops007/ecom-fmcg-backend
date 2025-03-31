const routes = require('express').Router();
const categoryController = require("../controllers/CategoryController");

routes.post('/addcategory',categoryController.addCategory)
routes.get('/getcategory',categoryController.getCategory)


module.exports = routes;