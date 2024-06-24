const express = require("express");
const testRouter = express.Router();
const testController = require("./../controller/test");

testRouter.get("/:id", testController.test);

module.exports = testRouter;
