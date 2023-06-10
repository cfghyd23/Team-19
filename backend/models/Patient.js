const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name'],
      maxlength: 50,
    },
    age: {
      type: Number,
      required: [true, 'Please provide age'],
    },
    blood_group: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: [true, 'Please provide blood group'],
      },
    gender: {
      type: String,
      enum: ['Male', 'Female'],
      default: 'Male',
    },
    
    id: {
      type: String,
      required: [true, 'Please provide aadhar number'],
    },
    address: {
        type: String,
        required: [true, 'Please provide address'],
        maxlength: 100,
      },
    phone: {
        type: String,
        required: [true, 'Please provide phone number'],
    },
    
    email:{
        type: String,
        required: [true, 'Please provide email'],
    },
    medicalreport_id: {
        type: Number,
        required: [true, 'Please provide medical report id'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Patient', PatientSchema)
