const CoursesModel = require("./../models/courses");
const { TeacherModel } = require("./../models/teachers");
//------------------ courses -------------------------
const courses = [
  {
    id: 1,
    title: "js",
    price: 2000000,
  },
  {
    id: 2,
    title: "Python",
    price: 6000000,
  },
  {
    id: 3,
    title: "node.js",
    price: 4500000,
  },
];

module.exports = new (class {
  async allCourses(req, res) {
    //برای قبلی
    // const course = courses;
    // res.send(courses);

    // const courses = await CoursesModel.find({})
    //   .select("title teacher")
    //   .populate({
    //     path: "teacher",
    //     select: "teacher.fullName",
    //   })
    const courses = await CoursesModel.find({},)
      .select("title teacher.fullName teacher._id")
      .lean();
    res.status(200).json({
      data: courses,
      message: "all courses",
    });
  }
  getCourseId(req, res) {
    const course = courses.find(
      (courses) => courses.id === Number(req.params.id)
    );
    if (course) {
      res.send(`<h1>Name course is ${course.title}</h1>`);
    }
    res.send("<h1>Course not exist</h1>");
  }
  async createCourse(req, res) {
    const { id, title } = req.body;
    const teachers = await TeacherModel.findOne({ _id: id });
    const course = await CoursesModel.create({
      title,
      teacher: teachers,
    });
    res.status(201).json({
      date: course,
      message: "new course added successfully",
    });
    //برای قبلی
    // const course = courses.find(
    //   (courses) => courses.id === Number(req.params.id)
    // );
    // if (course) {
    //   res.send(`<h1>Name course is ${course.title}</h1>`);
    // }
    // res.send("<h1>Course not exist</h1>");
  }
  async createCourse2(req, res) {
    const Courses = await CoursesModel.create({
      title: req.body.title,
      teacher: req.body.teacher,
    });
    res.json({ message: "new course added successfully" });
  }
  editCourse(req, res) {
    res.status(201).send("main course updated successfully ");
  }
  deleteCourse(req, res) {
    res.status(200).send("main course deleted successfully ");
  }
})();
