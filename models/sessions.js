const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamp");

const sessionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  time: { type: String , required : true},
  course : {type : mongoose.Types.ObjectId , ref : "courses"}
});

sessionSchema.plugin(timeStamp);

const SessionModel = mongoose.model("Session", sessionSchema);

module.exports = SessionModel;
