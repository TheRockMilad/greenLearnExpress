const express = require("express");
const userRouter = express.Router();
const usersController = require("./../controller/users");

userRouter.get("/", usersController.allUser);
userRouter.get("/:id", usersController.getUser);
userRouter.get("/:userID/article/:articleID", usersController.getArticleWithID);
userRouter.post("/register", usersController.register);
userRouter.delete("/:id", usersController.deleteUser);

module.exports = userRouter;
