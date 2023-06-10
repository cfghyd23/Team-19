const express = require('express')
const router = express.Router()

const {createPatient,getPatient} = require('../controllers/patients')

// router.route('/register').post(register)   
router.route('/').post(createPatient)
router.route('/').get(getPatient)

module.exports = router
