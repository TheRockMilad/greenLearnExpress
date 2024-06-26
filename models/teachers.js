const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamp");

const teacherSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
});

teacherSchema.plugin(timeStamp);

const TeacherModel = mongoose.model("Teacher", teacherSchema);

module.exports =  {TeacherModel , teacherSchema};
