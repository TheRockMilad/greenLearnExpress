const express = require("express");
const mainRouter = express.Router();
const mainController = require("./../controller/main");
const uploader = require("./../middleware/multer");

// main page
mainRouter
  .route("/")
  .get(mainController.main)
  // .post(uploader.single('profile'), mainController.upload);
  .post(uploader.array("profile", 3), mainController.upload);

mainRouter.post("/images", uploader.fields([
  {name: "cover",maxCount: 1,},
  {name: "content",maxCount: 2,},
  ]),async (req,res)=>{
    res.status(200).json(req.files)
  }
);

mainRouter.get("/about", mainController.about);

mainRouter.get("/content", mainController.content);

module.exports = mainRouter;
