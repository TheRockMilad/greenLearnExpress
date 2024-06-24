const express = require("express");
const apiRouter = express.Router();
const usersRouter = require("./users");
const coursesRouter = require("./courses");
const testRouter = require("./test");
const booksRouter = require("./books");

apiRouter.use("/courses", coursesRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use('/test',testRouter)
apiRouter.use('/books',booksRouter)

module.exports = apiRouter;
