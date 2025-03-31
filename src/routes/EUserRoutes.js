const routes = require("express").Router()
const euserController = require("../controllers/EUserController")
routes.get("/alleuser",euserController.getAllEUser)
routes.post("/addeuser",euserController.addEUser)
routes.delete("/deleuser/:id",euserController.deleteEUser)
routes.get("/findeuser/:id",euserController.findEUser)
routes.post("/eusersignup",euserController.esignup)
routes.post("/euserlogin",euserController.elogin)
routes.post("/forgotpassword",euserController.forgotpassword)
routes.post("/resetpassword",euserController.resetPassword)

module.exports = routes