const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: [true, 'Please provide name'],
      maxlength: 50,
    },
    ageGroup: {
      type: String,
      required: [true, 'Please provide age'],
    },
    weight: {
      type: String,
      required: [true, 'Please provide weight'],
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: [true, 'Please provide blood group'],
      },
    gender: {
      type: String,
      enum: ['Male', 'Female'],
      default: 'Male',
    },
    
    // idCard: {
    //   type: String,
    //   required: [true, 'Please provide aadhar number'],
    // },
    address: {
        type: String,
        required: [true, 'Please provide address'],
        maxlength: 100,
      },
    phoneNumber: {
        type: String,
        required: [true, 'Please provide phone number'],
    },
    
    email:{
        type: String,
        required: [true, 'Please provide email'],
    },
    medical_id: {
        type: String,
        required: [true, 'Please provide medical report id'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Patient', PatientSchema)
