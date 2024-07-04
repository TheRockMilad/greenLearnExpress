const UserModel = require("../models/users");
const jwt = require("jsonwebtoken");
const registerValidator = require("./../validator/signup");
const bcrypt = require("bcrypt");
const { generateAccessToken, generateRefreshToken } = require("../utils/auth");
const cookieParser = require("cookie-parser");

exports.register = async (req, res) => {
  const validationResult = registerValidator(req.body);
  // validationResult => true or array of errors
  if (validationResult !== true) {
    return res.status(422).json(validationResult);
  }
  let { username, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  await UserModel.create({
    email,
    username,
    password: hashPassword,
  });

  res.status(201).json({
    message: "New User created successfully",
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  // validation => email,password
  const user = await UserModel.findOne({ email });
  //validation
  const accessToken = generateAccessToken(user.email);
  const refreshToken = generateRefreshToken(user.email);

  await UserModel.findOneAndUpdate(
    { email },
    {
      $set: {
        refreshToken,
      },
    }
  );

  res.cookie("access-token", accessToken, { httpOnly: true });
  res.cookie("refresh-token", refreshToken, { httpOnly: true });

  return res.json({
    message: "User logged in successfully :))",
  });
};

exports.refreshToken = async (req, res) => {};
