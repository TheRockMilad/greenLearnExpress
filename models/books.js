const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamp");

const booksSchema = new mongoose.Schema({
  title: { type: String, required: true, minLenth: 2, maxLenth: 20 },
  auther: { type: String, required: true, minLenth: 4, maxLenth: 18 },
  price: { type: String, min: 10000 },
  free: { type : Number ,required : false , default :1},
});

booksSchema.plugin(timeStamp);

const BooksModel = mongoose.model("book", booksSchema);

module.exports = BooksModel;
