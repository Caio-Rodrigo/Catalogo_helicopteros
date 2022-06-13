const routes = require("express").Router();
const HelicopteroController = require("../controllers/HelicopteroController");

routes.get("/", HelicopteroController.getAll);

routes.get("/register", HelicopteroController.register);

routes.post("/create", HelicopteroController.create);

routes.get("/getById/:id/:method", HelicopteroController.getById);

routes.post("/update/:id", HelicopteroController.update);

routes.get("/remove/:id", HelicopteroController.remove);
module.exports = routes;
