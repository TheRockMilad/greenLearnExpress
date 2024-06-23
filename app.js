const express = require("express");
const app = express();
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
//-------------- get request --------------------
app.get("/courses/:id", (req, res) => {
  const course = courses.find(
    (courses) => courses.id === Number(req.params.id)
  );
  if (course) {
    res.send(`<h1>Name course is ${course.title}</h1>`);
  }
  res.send("<h1>Course not exist</h1>");
});

//--------------- main page -------------------
app.get("/", (req, res) => {
  res.send("Hello world");
});

//-------------- all response ------------------
app.get("/courses", (req, res) => {
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

//------------------- CRUD Api -----------------------------
app.post("/courses", (req, res) => {
  // مدل دیگه ای استاتوس کد
  // res.statusCode = 201
  // res.send("main course created successfully ")

  res.status(201).send("main course created successfully ");
});

app.put("/courses/:id", (req, res) => {
  res.status(201).send("main course updated successfully ");
});

app.delete("/courses/:id", (req, res) => {
  res.status(200).send("main course deleted successfully ");
});

//--------------server---------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
