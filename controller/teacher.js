const {TeacherModel} = require('./../models/teachers')

module.exports = new (class {
    async CreateTeacher(req,res) {
        const Teacher = await TeacherModel.create({
            fullName : req.body.fullName
        })
        res.json({
            message : "new teacher added successfully",
            data : Teacher
        })
    }
})();