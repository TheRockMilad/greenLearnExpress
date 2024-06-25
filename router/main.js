const express = require("express");
const mainRouter = express.Router();
const mainController = require("./../controller/main");

// main page
mainRouter.get("/", mainController.main);
mainRouter.get("/about", mainController.about);
mainRouter.get("/content", mainController.content);

module.exports = mainRouter;
