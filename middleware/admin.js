const UserModel = require("./../models/users");
const mongoose = require("mongoose");
const camelcaseKeys = (...args) =>
  import("camelcase-keys").then(({ default: camelcase }) => camelcase(args));

async function isAdmin(req, res, next) {
  const { id } = req.body;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(433).json({
      message: "Id is not valid",
    });
  } else {
    const user = await UserModel.findOne({ _id: id }).lean();
    // اضافه کردن یوزر در درخواست
    req.user = user;
    if (user) {
      if (user.role === "ADMIN") {
        return next();
      } else {
        return res.status(403).json({
          message: "this route is not accessible only for admin",
        });
      }
    } else {
      return res.status(404).json({
        message: "User not found",
      });
    }
  }
}
async function camelcase(req, res, next) {
    // req.body = await camelcaseKeys(req.body);
    req.params = await camelcaseKeys(req.body);
    req.query = await camelcaseKeys(req.body);
    next();
  };


  module.exports = {
  isAdmin,
  camelcase
};
