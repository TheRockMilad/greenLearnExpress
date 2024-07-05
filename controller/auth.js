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

exports.refreshToken = async (req, res) => {
  try {
    // این خط، توکن تازه‌سازی رو از کوکی‌های درخواست می‌گیره
    // انتظار می‌ره که توکن تازه‌سازی تحت کلید رفرش توکن ذخیره شده باشه.
    const refreshToken = req.cookies["refresh-token"];
    // اگر نبود
    if (!refreshToken) {
      return res.status(401).json({ message: "no have refresh token !!" });
    }
    // دنبال یوزری میگردیم که رفرش توکنش برابر باشه با رفرش توکن داخل کوکی
    const user = await UserModel.findOne({ refreshToken });
    // اگر یوزی وجود نداشت
    if (!user) {
      return res.status(403).json({ message: "User not found !!" });
    }
    //این خط، توکن تازه‌سازی رو با استفاده از یک کلید
    // مخفی که در متغیر محیطی که در رفرش توکن سکرت
    //ذخیره شده، اعتبارسنجی می‌کنه.اگر توکن نامعتبر باشه، خطایی ایجاد می‌شه
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    // اعتبارسنجی که شد دوباره ایمیل رو میفرسته برای هش شدن
    // برای ساخت توکن
    const newAccessToken = generateAccessToken(user.email);
    console.log(newAccessToken);
    // توکن جدید برای کوکی ارسال میشه تا فرانت اند بتونه اونو
    // بزاره توی هدر برای بک اند ارسال کنه
    res.cookie("access-token", newAccessToken, { httpOnly: true });
    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    throw new Error(error);
  }
};
