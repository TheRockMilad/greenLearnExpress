const express = require("express");
const app = express();
require("./configs/db");
const mainRouter = require("./router/main");
const router = require("./router/router");
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const viewsPath = require('./utils/viewPath')
//----------------------------------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")))
app.use(helmet())
app.use(cors())

//----------------------------------------------

app.use("/", mainRouter);
app.use("/api/", router);
app.use((req,res)=>{
  res.status(404).sendFile(path.join(viewsPath,"404.html"))
}) 

app.use((err,req,res,next)=>{
  return res.json({
    statusCode : err.status || 500,
    msg : err.message || "Server Error"
  })
})

//--------------server---------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
