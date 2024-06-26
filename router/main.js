const express = require("express");
const mainRouter = express.Router();
const mainController = require("./../controller/main");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });
// main page
mainRouter
  .route("/")
  .get(mainController.main)
  .post(upload.single("profile"), mainController.upload);
mainRouter.get("/about", mainController.about);
mainRouter.get("/content", mainController.content);

module.exports = mainRouter;
