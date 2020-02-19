const express = require("express");
//const app = express();
const Router = express.Router();

const PetController = require("../controller/PetController");

Router.get('/', PetController.index);
Router.get("/add/:nome/:idade", PetController.add);

module.exports = Router;
