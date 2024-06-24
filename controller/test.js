const mongoose = require("mongoose");

exports.test = (req, res) => {
  const { id } = req.params;
  //روش اول
  // res.send(isValidObjectId(id))
  //  res.send(mongoose.isValidObjectId(id))
  // روش دوم
  res.send(mongoose.Types.ObjectId.isValid(id));
};
