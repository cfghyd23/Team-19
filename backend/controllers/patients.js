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

const updatePatientId = async (bloodGroup, donorId) => {
    try {
      const donor = await Donor.findOneAndUpdate(
        { blood_group: bloodGroup },
        { patientId: donorId },
        { new: true }
      );
  
      if (donor) {
        console.log(`PatientId updated for donor with _id: ${donor._id}`);
      } else {
        console.log(`No donor found with blood group: ${bloodGroup}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


module.exports = {
    createPatient, getPatient,
}
