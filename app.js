const express = require("express");
const app = express();
// قبلا بجای میدلور های اکسپرس از این استفاده میشده
//const bodyparser = require("body-parser")
require("./configs/db");
const UserModel = require("./models/users");
const registerValidator = require("./validator/register");
// ------------------- middleware ---------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// این دو تا پایینی کار دو تا بالایی میکنه
// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({extended :false}))

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
// ------------- create user ---------------------
app.post("/api/users", async (req, res) => {
  const validationResult = registerValidator(req.body);
  // اینجا چون خروجی ولیدیشن ریزالت یا ترو هست یا یک آرایه از خطا
  // باید به طور صریح بررسی بشه که برابر با ترو هست یا نه
  console.log(validationResult);
  if (validationResult !== true) {
    return res.status(422).json(validationResult);
  }
  let { username, name, email, age, password } = req.body;

  //بعد از اضافه شدن ولیدیتور نیازی به این نیست
  // if (name === "" || username === "" || email === "") {
  //   res.status(422).json({
  //     message: "Data is not valid",
  //   });
  // } else {

  await UserModel.create({ name, email, username, age, password });
  res.status(201).json({
    message: "New User created successfully",
  });
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

//---------- A few parameters at route params -----------------------
app.get("/api/users/:userID/article/:articleID", (req, res) => {
  console.log(`User id is : ${req.params.userID}`);
  console.log(`article id is : ${req.params.articleID}`);
  res.json({
    message: "Main user article send to clint",
  });
});

// ------------ body ---------------
app.post("/post", (req, res) => {
  //  باید دو تا میدلور بنویسیم تا هم از فرم و هم از مقدار
  //  رو دریافت کنه json
  res.status(201).send("New main course created");
  console.log(req.body);
});

//--------------server---------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
