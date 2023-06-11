const Donor = require('../models/Donor')
const {statusCodes} = require('http-status-codes')

const getAllDonors = async (req, res) => {
    const donors = await Donor.find({})
    res.status(200).json({ donors,count:donors.length })
}

const createDonor = async (req, res) => {
    console.log(req.body.id)
    id = req.body.id;
    const donordup = await Donor.findOne({id})
    if(donordup){
        return res.status(400).send({msg:"Donor already exists"})
    }
    const donor = await Donor.create(req.body)
    console.log(req.body.id)
    res.status(200).send(donor)
}

module.exports = {
    getAllDonors,
    createDonor
}
