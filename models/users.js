const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamp");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minLenth: 4, maxLenth: 15 },
  name: { type: String, required: true, minLenth: 3, maxLenth: 15 },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18, default: 18 },
});

userSchema.plugin(timeStamp);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
