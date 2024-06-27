const jwt = require("jsonwebtoken");
const { token } = require("morgan");

const secretKey = "4lfkwijefwe86fwefkowhfwef68efisofjlekew";
const accessToken = jwt.sign({ id: 10, email: "rock@gmail.com" }, secretKey, {
  // algorithm : ""
  expiresIn: "10 day",
});
console.log("Access Token => ", accessToken)
//---------------------- verify -----------------------
const payloadData = jwt.verify(accessToken,secretKey)
console.log(payloadData);
//-----------------------decode-----------------------
const decodeData = jwt.decode(token)
//حتی اگه منقضی شده باشه هم اطلاعات رو بهمون میده 