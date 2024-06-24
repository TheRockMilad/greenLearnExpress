const express = require("express");
const userRouter = express.Router();
const UserModel = require("./../models/users");
const registerValidator = require("./../validator/register");
const { isValidObjectId } = require("mongoose");

userRouter.get("/", async (req, res) => {
  const users = await UserModel.find({});
  res.status(200).json({
    message : "all users",
    users,
  });
});

userRouter.get("/:id", async (req, res) => {
    const user = await UserModel.find({_id : req.params.id});
    res.status(200).json({
      message : "user with id",
      user,
    });
  })

userRouter.post("/", async (req, res) => {
  const validationResult = registerValidator(req.body);
  // اینجا چون خروجی ولیدیشن ریزالت یا ترو هست یا یک آرایه از خطا
  // باید به طور صریح بررسی بشه که برابر با ترو هست یا نه
  // console.log(validationResult);
  if (validationResult !== true) {
    return res.status(422).json(validationResult);
  }
  let { username, name, email, age, password } = req.body;

  //بعد از اضافه شدن ولیدیتور نیازی به این نیست
  // if (name === "" || username === "" || email === "") {
  //   res.status(422).json({
  //     message: "Data is not valid",
  //   });
  // } else {

  await UserModel.create({ name, email, username, age, password });
  res.status(201).json({
    message: "New User created successfully",
  });
});

userRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (isValidObjectId(id)) {
    const userId = await UserModel.findById({ _id: id });
    if (userId) {
      await UserModel.deleteOne(userId);
      res.status(200).json({
        message: "User deleted successfully",
      });
    } else {
      res.status(422).json({
        message: "there is not user",
      });
    }
  } else {
    return res.status(422).json({
      message: "UserID is not valid",
    });
  }
});

userRouter.get("/:userID/article/:articleID", (req, res) => {
  console.log(`User id is : ${req.params.userID}`);
  console.log(`article id is : ${req.params.articleID}`);
  res.json({
    message: "Main user article send to clint",
  });
});

module.exports = userRouter;
