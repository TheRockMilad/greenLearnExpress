const express = require("express");
const testRouter = express.Router();
const testController = require("./../controller/test");

testRouter.get(/^\/virgool\/@[a-zA-z]{3,25}$/,testController.getUser);
testRouter.get("/middleware",(req,res,next)=>{
  console.log('middleware response')
  next()
}, testController.middleware);
testRouter.get("/isvalidid/:id", testController.test);
testRouter.get("/virgool/:publish",testController.getPublish);

module.exports = testRouter;
