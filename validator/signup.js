const validator = require("fastest-validator");
const v = new validator();
const Schema = {
  username: { type: "string", min: 5, max: 15 },
  email: { type: "string" },
  password: { type: "string"},
  $$strict: true,
}; 
const check = v.compile(Schema)
module.exports = check