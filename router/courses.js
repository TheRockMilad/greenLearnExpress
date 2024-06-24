const express = require("express");
const coursesRouter = express.Router();
const coursesController = require("./../controller/courses");

coursesRouter
  .route("/")
  .get(coursesController.allCourses)
  .post(coursesController.createCourse);
coursesRouter
  .route("/:id")
  .get(coursesController.getCourseId)
  .put(coursesController.editCourse)
  .delete(coursesController.deleteCourse);

module.exports = coursesRouter;
