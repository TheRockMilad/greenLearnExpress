const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamp");

const coursesSchema = new mongoose.Schema({
  title : { type: String, required: true },
  teacher : {type :mongoose.Types.ObjectId , ref : "Teacher"}
});

coursesSchema.plugin(timeStamp);

const CoursesModel = mongoose.model("courses", coursesSchema);

module.exports = CoursesModel;
