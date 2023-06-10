const express = require('express')
const router = express.Router()

const {getAllDonors,createDonor} = require('../controllers/donors')

// router.route('/register').post(register)   
router.route('/').get(getAllDonors).post(createDonor)

module.exports = router
