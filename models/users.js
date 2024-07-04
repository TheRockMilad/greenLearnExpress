const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamp");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, minLenth: 3, maxLenth: 12 },
    name: { type: String, minLenth: 5, maxLenth: 15 },
    email: { type: String, required: true, unique: true },
    agemaile: { type: Number },
    password: { type: String, required: true },
    refreshToken: String,
  },
  { timeStamp: true }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
