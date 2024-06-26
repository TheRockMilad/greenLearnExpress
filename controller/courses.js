const CoursesModel = require("./../models/courses");
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
    const courses = await CoursesModel.find({})
      .select("title teacher")
      .populate({
        path : "teacher",
        select : "fullName"
      })

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
  createCourse(req, res) {
    const course = courses.find(
      (courses) => courses.id === Number(req.params.id)
    );
    if (course) {
      res.send(`<h1>Name course is ${course.title}</h1>`);
    }
    res.send("<h1>Course not exist</h1>");
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
