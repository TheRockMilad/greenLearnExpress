const express = require("express");
const userRouter = express.Router();
const usersController = require("./../controller/users");
const verifyToken = require("../middleware/verifyToken")

userRouter.get("/",verifyToken, usersController.allUser);
userRouter.get("/:userID/article/:articleID", usersController.getArticleWithID);
userRouter.post("/register", usersController.register);
userRouter
  .route("/:id")
  .get(usersController.getUser)
  .delete(usersController.deleteUser);

module.exports = userRouter;
