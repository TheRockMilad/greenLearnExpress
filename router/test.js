const express = require("express");
const testRouter = express.Router();
const testController = require("./../controller/test");

testRouter.get(/^\/virgool\/@[a-zA-z]{3,25}$/,testController.getUser);
testRouter.get("/virgool/:publish",testController.getPublish);
//Middleware
testRouter.get("/:id", testController.test);

module.exports = testRouter;
