const BooksModel = require("./../models/books");
const mongoose = require("mongoose");

module.exports = new (class {
  async getUser(req, res) {
    if (req.params.id) {
        const {id} = req.params
      if (!mongoose.isValidObjectId(id)) {
        res.send("id is not valid");
      } else {
        const book = await BooksModel.findById({ _id: req.params.id });
        if (!book) {
          return res.status(404).json({
            message: "this book not exist",
          });
        }
        res.status(200).json({
          message: "book with id",
          book,
        });
      }
    } else {
      const books = await BooksModel.find({}).lean();
      res.status(200).json({
        books,
      });
    }
  }
})();
