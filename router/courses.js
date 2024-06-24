const express = require("express");
const coursesRouter = express.Router();

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

coursesRouter.get("/:id", (req, res) => {
  const course = courses.find(
    (courses) => courses.id === Number(req.params.id)
  );
  if (course) {
    res.send(`<h1>Name course is ${course.title}</h1>`);
  }
  res.send("<h1>Course not exist</h1>");
});
coursesRouter.get("/", (req, res) => {
  const course = courses.find(
    (courses) => courses.id === Number(req.params.id)
  );
  res.send(courses);
  //   res.send('Course test')
  //   res.send("<H1>Course test in html</h1>")
  //   res.json(courses)
  //   res.json("test")
  //   res.end("test course with end") دیگه استفاده نمیشه
});
coursesRouter.post("/", (req, res) => {
  // مدل دیگه ای استاتوس کد
  // res.statusCode = 201
  // res.send("main course created successfully ")

  res.status(201).send("main course created successfully ");
});
coursesRouter.put("/:id", (req, res) => {
  res.status(201).send("main course updated successfully ");
});
coursesRouter.delete("/:id", (req, res) => {
  res.status(200).send("main course deleted successfully ");
});

module.exports = coursesRouter;
