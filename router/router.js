const express = require("express");
const apiRouter = express.Router();
const usersRouter = require("./users");
const coursesRouter = require("./courses");
const testRouter = require("./test");
const booksRouter = require("./books");
const teacherRouter = require("./teacher");
const sessionRouter = require("./session");
const authRouter = require("./auth")

apiRouter.use("/courses", coursesRouter);
apiRouter.use("/session", sessionRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use('/test',testRouter)
apiRouter.use('/books',booksRouter)
apiRouter.use('/teacher',teacherRouter)
apiRouter.use('/auth',authRouter)

module.exports = apiRouter;
