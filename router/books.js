const express = require("express");
const booksRouter = express.Router();
const booksController = require("./../controller/books");

booksRouter
  .route("/:id?")
  .get(booksController.getUser)


module.exports = booksRouter;
