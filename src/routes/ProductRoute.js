const routes = require ('express').Router();
const productController = require("../controllers/ProductController");

routes.post("/addproduct",productController.addProduct);
routes.get("/getproduct",productController.getAllProduct);
routes.post('/addFile', productController.addProductWithFile);


module.exports = routes;