const express= require('express')
const sessionRouter = express.Router()
const sessionController = require('./../controller/seesion')

sessionRouter.get('/',sessionController.createSession)
sessionRouter.get('/:title',sessionController.getAll)

module.exports = sessionRouter