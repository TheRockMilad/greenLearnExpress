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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

app.get('/courses/:id',(req,res)=>{
    const course = courses.find(courses => (courses.id === Number(req.params.id)))
    if (course) {
        res.send(`Name course is ${course.title}`)
    }
    res.send("Course not exist");
})

app.get("/", (req, res) => {
  res.send("Hello world");
});
