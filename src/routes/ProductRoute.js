const routes = require ('express').Router();
const productController = require("../controllers/ProductController");

routes.post("/addproduct",productController.addProduct);
routes.get("/getproduct",productController.getAllProduct);
routes.post('/addFile', productController.addProductWithFile);
routes.get('/findproduct/:id',productController.getProductByProductId)


module.exports = routes;