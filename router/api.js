const express = require("express");
const apiRouter = express.Router();
const usersRouter = require("./users");
const coursesRouter = require("./courses");
const testRouter = require("./test");

apiRouter.use("/courses", coursesRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use('/test',testRouter)

module.exports = apiRouter;
