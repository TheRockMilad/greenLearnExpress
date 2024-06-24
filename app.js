const express = require("express");
const app = express();
require("./configs/db");
const userRouter = require("./router/users");
const coursesRouter = require("./router/courses");
const testRouter = require("./router/test");

// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// main page 
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/courses", coursesRouter);
app.use("/api/users", userRouter);
app.use('/api/test',testRouter)

//--------------server---------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
