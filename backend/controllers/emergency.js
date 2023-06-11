const Donor = require('../models/Donor')
const {statusCodes} = require('http-status-codes')

const getEmergencyDonors = async (req, res) => {
    const {bloodGroup} = req.body
    const donors = await Donor.find({bloodGroup,patientId:{$eq:null}}).limit(10)
    res.status(200).json({ donors,count:donors.length })
}

module.exports = {
    getEmergencyDonors
}