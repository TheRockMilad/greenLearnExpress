const express = require("express");
const coursesRouter = express.Router();
const coursesController = require("./../controller/courses");

coursesRouter.get("/", coursesController.allCourses);
coursesRouter.get("/:id", coursesController.getCourseId);
coursesRouter.post("/", coursesController.createCourse);
coursesRouter.put("/:id", coursesController.editCourse);
coursesRouter.delete("/:id", coursesController.deleteCourse);

module.exports = coursesRouter;
