const express = require("express");
const booksRouter = express.Router();
const booksController = require("./../controller/books");
const {isAdmin} = require('./../middleware/admin')

booksRouter
  .route("/:id?")
  .get(isAdmin,booksController.getUser)


module.exports = booksRouter;
