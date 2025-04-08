const routes = require('express').Router();
const subCategoryController = require('../controllers/SubCategoryController')

routes.post("/addsubcategory",subCategoryController.addSubCategory);
routes.get("/getsubcategory",subCategoryController.getSubCategory);
routes.get("/getsubcategorybycategory/:categoryId",subCategoryController.getSubcategoryByCategoryId);

module.exports = routes;
