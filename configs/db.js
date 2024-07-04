const mongoose = require("mongoose");
const dbUrl = "mongodb://127.0.0.1:27017/library2";
mongoose
  .connect(dbUrl)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));
