const UserModel = require("./../models/users");
const mongoose = require("mongoose");

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

module.exports = {
  isAdmin,
};
