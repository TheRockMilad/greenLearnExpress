const express = require("express");
const app = express();
require("./configs/db");
const mainRouter = require("./router/main");
const ApiRouter = require("./router/api");
const { default: omitEmpty } = require("omit-empty");
//----------------------------------------------------------

const removeEmptyFields = (options) => {
  return function (req, res, next) {
    req.body = omitEmpty(req.body, options);
    return next();
  };
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//فراخوانی 
app.use(removeEmptyFields({omitZero : true}));

// خالی هارو پاک میکنه
console.log(
  omitEmpty(
    {
      firstname: "",
      lastname: "",
      age: 13,
      email: "dfe@gmail.com",
    },
    { omitZero: true }
  )
);

//----------------------------------------------

app.use("/", mainRouter);
app.use("/api/", ApiRouter);

//--------------server---------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
