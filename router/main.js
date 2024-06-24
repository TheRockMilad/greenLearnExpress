const express = require("express");
const mainRouter = express.Router();
const mainController = require("./../controller/main");

// main page
mainRouter.get("/", mainController.main);

module.exports = mainRouter;
