const express = require('express')
const router =  express.Router()
const authController = require('./../controller/auth')

router.post('/signin',authController.login)
router.post('/signup',authController.register)
router.post('/refresh-token',authController.refreshToken  )

module.exports = router