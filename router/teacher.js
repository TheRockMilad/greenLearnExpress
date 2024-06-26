const express = require('express')
const teacherRouter = express.Router()
const teacherController = require('./../controller/teacher')

teacherRouter.post("/",teacherController.CreateTeacher)

module.exports =  teacherRouter