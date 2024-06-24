const mongoose = require("mongoose");

exports.test = (req, res) => {
  const { id } = req.params;
  //روش اول
  // res.send(isValidObjectId(id))
  //  res.send(mongoose.isValidObjectId(id))
  // روش دوم
  res.send(mongoose.Types.ObjectId.isValid(id));
};
exports.getUser = (req, res) => {
  res.json({
    message: "virgool user account",
  });
};
exports.getPublish = (req, res) => {
  res.json({
    message: "virgool publish account",
  });
};
exports.middleware = (req, res) => {
  res.json({
    message: "route after middleware",
  });
};
