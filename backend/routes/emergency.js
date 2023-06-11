const express = require('express')
const router = express.Router()

const {getEmergencyDonors} = require('../controllers/emergency')

// router.route('/register').post(register)   
router.route('/').post(getEmergencyDonors)

module.exports = router