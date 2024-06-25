const validator = require("fastest-validator");
const v = new validator();
const Schema = {
  name: { type: "string", min: 3, max: 12 },
  username: { type: "string", min: 5, max: 15 },
  email: { type: "string" },
  age: { type: "number" },
  password: { type: "string", min: 8, max: 12 },
  confirmPassword: { type: "equal", field: "password" },
  $$strict: true,
}; 
const check = v.compile(Schema)
module.exports = check