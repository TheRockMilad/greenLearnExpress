const express = require("express");
const app = express();
require("./configs/db");
const mainRouter = require("./router/main");
const ApiRouter = require("./router/api");
const helmet = require('helmet')
const cors = require('cors')
//----------------------------------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet())
app.use(cors())

//----------------------------------------------

app.use("/", mainRouter);
app.use("/api/", ApiRouter);

//--------------server---------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
