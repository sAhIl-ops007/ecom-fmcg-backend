const routes = require("express").Router()
const roleController = require("../controllers/RoleController")
routes.get("/roles",roleController.getAllRoles)
routes.post("/role",roleController.addRole)
routes.delete("/del/:id",roleController.deleteRole)
routes.get("/find/:id",roleController.getFindById)

module.exports = routes