const express = require("express");
const testRouter = express.Router();
const mongoose = require("mongoose");

testRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  //روش اول
  // res.send(isValidObjectId(id))
  //  res.send(mongoose.isValidObjectId(id))
  // روش دوم
  res.send(mongoose.Types.ObjectId.isValid(id));
});

module.exports = testRouter;
