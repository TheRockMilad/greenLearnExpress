const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamp");
const {teacherSchema} = require('./teachers')

const coursesSchema = new mongoose.Schema({
  title : { type: String, required: true },
  teacher : {type : teacherSchema}
});

coursesSchema.plugin(timeStamp);

const CoursesModel = mongoose.model("courses", coursesSchema);

module.exports = CoursesModel;
