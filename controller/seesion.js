const SessionModel = require("./../models/sessions");
const CommentModel = require("./../models/comment");
const CoursesModel = require("./../models/courses");

module.exports = new (class {
  async createSession(req, res) {
    const seesion = SessionModel.create({
      title: "تعمیر مادربرد موبایل",
      time: "08:12",
      course: "667c05ea296034c0f7e6d4e1",
    });
    res.json({ message: "new session added successfully :) " });
  }
  async getAll(req, res) {
    const { title } = req.params;
    const course = await CoursesModel.findOne({ title })
      .select("title teacher.fullName")
      .lean();
    const comments = await CommentModel.find({ course: course._id }).select(
      "body"
    );
    const sessions = await SessionModel.find({ course: course._id }).select(
      "title time"
    );
    res.json({
      ...course,
      comments,
      sessions,
    });
  }
})();
