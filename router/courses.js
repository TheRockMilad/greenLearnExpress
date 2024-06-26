const express = require("express");
const coursesRouter = express.Router();
const coursesController = require("./../controller/courses");

coursesRouter.route("/new").post(coursesController.createCourse2);
coursesRouter
  .route("/")
  .get(coursesController.allCourses)
  .post(coursesController.createCourse);
coursesRouter.route("/comments").post(coursesController.setComments);
coursesRouter.route("/:title").get(coursesController.getOne);
coursesRouter
.route("/:id")
  .get(coursesController.getCourseId)
  .put(coursesController.editCourse)
  .delete(coursesController.deleteCourse);

module.exports = coursesRouter;
