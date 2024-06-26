const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamp");

const commentSchema = new mongoose.Schema({
  body : { type: String, required: true },
});

commentSchema.plugin(timeStamp);

const CommentModel = mongoose.model("Comment", commentSchema);

module.exports = CommentModel;
