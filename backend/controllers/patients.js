const Patient = require('../models/Patient')
const Donor = require('../models/Donor')
const {statusCodes} = require('http-status-codes')


const createPatient = async (req, res) => {
    id = req.body.id;
    const patientdup = await Patient.findOne({id})
    if(patientdup){
        return res.status(400).send({msg:"Patient already exists"})
    }
    const patient = await Patient.create(req.body)
    updatePatientId(patient.blood_group, patient.id);
    res.status(200).send({patient})
}

const getPatient = async (req, res) => {
    const patient = await Patient.find({})
    res.status(200).send({ patient,count:patient.length })
}

const updatePatientId = async (bloodGroup, patientId) => {
    try {
        let donorCount = await Donor.countDocuments({patientId});
        console.log(donorCount)
        if(donorCount>10){
            console.log(`PatientId ${patientId} already assigned to 10 donors`);
            return;
        }
        // const existingDonor = await Donor.findOne({blood_group:bloodGroup,patientId});
        //  if(existingDonor){
        //     console.log(`PatientId ${patientId} already assigned to donor with _id: ${existingDonor._id}`);
        // return;}

    const donorsToMap = await Donor.find({ blood_group: bloodGroup, patientId: { $eq: null } }).limit(10 - donorCount);

    for(const donor of donorsToMap){
        donor.patientId = patientId;
        donor.priority = donorCount + 1;
        await donor.save();
        donorCount++;
    }
        
    if(donorsToMap.length==0){
        console.log(`No donors found with blood group: ${bloodGroup}`);
        return;
    }
    } catch (error) {
      console.error('Error:', error);
    }
  };


module.exports = {
    createPatient, getPatient,
}
