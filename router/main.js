const express = require("express");
const mainRouter = express.Router();
const mongoose = require("mongoose");

// main page 
mainRouter.get("/", (req, res) => {
    res.send("Hello world");
  });

module.exports = mainRouter;
