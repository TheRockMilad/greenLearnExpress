const UserModel = require("./../models/users");
const registerValidator = require("./../validator/register");
const { isValidObjectId } = require("mongoose");

// مدل اول - پیچینده تر ، پروژه های بزرگ
module.exports = new (class {
  async allUser(req, res) {
    // const users = await UserModel.find({},"-updatedAt -createdAt")
    const users = await UserModel.find({}).lean()
    res.status(200).json({
      message: "all users",
      users,
    });
  }
  async getUser(req, res) {
    const { id } = req.params;
    if (isValidObjectId(id)) {
      const user = await UserModel.findById({ _id: req.params.id }).select("name username age");
      if (!user) {
        return res.status(404).json({
          message: "this user not exist",
        });
      }
      res.status(200).json({
        message: "user with id",
        user,
      });
    } else {
      res.status(422).json({
        message: "id is not valid",
      });
    }
  }
  async register(req, res) {
    const validationResult = registerValidator(req.body);
    // validationResult => true or array of errors
    if (validationResult !== true) {
      return res.status(422).json(validationResult);
    }
    let { username, name, email, age, password } = req.body;
    await UserModel.create({ name, email, username, age, password });
    res.status(201).json({
      message: "New User created successfully",
    });
  }
  async deleteUser(req, res) {
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
  }
  async getArticleWithID(req, res) {
    console.log(`User id is : ${req.params.userID}`);
    console.log(`article id is : ${req.params.articleID}`);
    res.json({
      message: "Main user article send to clint",
    });
  }
})();

// -----------------------------------------
//  مدل دوم - ساده و خوانا ، برای پروژه های کوچک
// exports.allUsers = async (req, res) => {
//   const users = await UserModel.find({});
//   res.status(200).json({
//     message: "all users",
//     users,
//   });
// };
