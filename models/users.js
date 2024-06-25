const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamp");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minLenth: 3, maxLenth: 12 },
  name: { type: String, required: true, minLenth: 5, maxLenth: 15 },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
  password: { type: String, minLenth: 8, maxLenth: 12 },
});

userSchema.plugin(timeStamp);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
