const mongoose = require('mongoose')

const DonorSchema = new mongoose.Schema(
  {
    donorName: {
      type: String,
      required: [true, 'Please provide name'],
      maxlength: 50,
    },
    ageGroup: {
      type: Number,
      required: [true, 'Please provide age'],
      validate:{
        validator: function(v){
            return v>18
            },
            message: 'Age must be greater than 18'
      }
    },
    weight: {
        type: Number,
        required: [true, 'Please provide weight'],
        validate:{
          validator: function(v){
              return v>50
              },
              message: 'Weight must be greater than 50'
        }
      },
      haemoglobin: {
        type: String,
        required: [true, 'Please provide haemoglobin'],
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
    id: {
      type: String,
      required: [true, 'Please provide aadhar number'],
    },
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
    medical_id:{
      type:String,
      required: [true, 'Please provide medical id'],
    },
    patientId:{
        type: String,
        default:null,
    },
    priority:{
        type: Number,
        default:11,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Donor', DonorSchema)
