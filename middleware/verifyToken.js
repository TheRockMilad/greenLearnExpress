const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // این میاد توکن رو برمیداره
  const authHeader = req.headers["authorization"]; // Bearer tokenValue
  // spilit bearer from token
  const token = authHeader && authHeader.split(" ")[1];
  //validation
  if (token) {
    try {
      // اگه بود اون ایمیل رو بیار بیرون
      const accessTokenPayLoad = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET
      );
      // اینجا این ایمیل رو بده به بدنه
      req.email = accessTokenPayLoad.email;
      next();
    } catch (error) {
      return res.json("توکن منقضی شده");
    }
  } else {
    return res.status(401).json({ message: "you don't access to this APi" });
  }
};

module.exports = verifyToken;
