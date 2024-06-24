const express = require("express");
const app = express();
require("./configs/db");
const mainRouter = require("./router/main");
const ApiRouter = require("./router/api");
// const middleware = require("./middleware/test");
const {camelcase} = require("./middleware/admin");
const morgan = require("morgan");
// camelCase-keys

// middleware


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(camelcase)

// app.use(morgan("combined"))

app.use("/", mainRouter);
app.use("/api/", ApiRouter);

//--------------server---------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
