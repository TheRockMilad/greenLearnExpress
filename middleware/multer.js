const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + Math.round(Math.random());
    const ext = path.extname(file.originalname);
    cb(null, filename + ext);
  },
});
const uploader = multer({ storage });
module.exports = uploader;
