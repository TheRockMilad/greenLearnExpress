const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + Math.round(Math.random());
    const ext = path.extname(file.originalname);

    // const validFormats = [".jpg", ".jpeg", ".png"];
    const validMimeTypes = ["image/jpg" ,"image/jpeg" , "image/png"]

    // if (validMimeTypes.includes(ext)) {
    if (validMimeTypes.includes(file.mimetype)) {
      cb(null, filename + ext);
    } else {
      cb(new Error("Only .jpg | .jpeg | .png are valid files"));
    }
  },
});
const maxSize = 3 * 10000 * 10000;
const uploader = multer({
  storage,
  limits: {
    fileSize: maxSize,
  },
});
module.exports = uploader;
