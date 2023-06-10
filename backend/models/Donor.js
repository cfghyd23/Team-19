const mongoose = require('mongoose')

const DonorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name'],
      maxlength: 50,
    },
    age: {
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
              message: 'Weight should be atleast 50 KGs'
        }
      },

    threedaysdonated: {
        type: Boolean,
        required: [true, 'Have you donated blood in the last 3 months? '],
        validate:{
          validator: function(v){
              return v==false
              },
              message: 'You cannot donate blood if you have donated in the last 3 months'
        }
      }, 

    flu: {
        type: Boolean,
        required: [true, 'Do you have symptoms of major cold or flu? '],
        validate:{
          validator: function(v){
              return v==false
              },
              message: 'You cannot donate blood if you have symptoms of major cold or flu'
        }
      }, 

      hepatitis: {
        type: Boolean,
        required: [true, 'Do you have history of Hepatitis B or C, Rabies, Animal Bite or Thyroid in last 12 months? '],
        validate:{
          validator: function(v){
              return v==false
              },
              message: 'You cannot donate blood if you have history of Hepatitis B or C, Rabis, Animal Bite or Thyroid in last 12 months'
        }
      }, 
      blood_pressure: {
        type: Boolean,
        required: [true, 'Do you have history of Blood Pressure '],
        validate:{
          validator: function(v){
              return v==false
              },
              message: 'You cannot donate blood if you have history of Blood Pressure'
        }
      },
      haemoglobin: {
        type: Number,
        required: [true, 'Please provide haemoglobin'],
        validate:{
          validator: function(v){
              return v>12.5
              },
              message: 'Haemoglobin below 12.5 gms% is not acceptable for donation'
        }
      },
      medication: {
        type: Boolean,
        required: [true, 'Were you on medication for last 3 days?'],
        validate:{
          validator: function(v){
              return v==false
              },
              message: 'You cannot donate blood if you were on medication for last 3 days'
        }
      },  
      alcohol: {
        type: Boolean,
        required: [true, 'Have you consumed alcohol in last 24 hours?'],
        validate:{
          validator: function(v){
              return v==false
              },
              message: 'You cannot donate blood if you have consumed alcohol in last 24 hours'
        }
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
    patientId:{
        type: String,
        default:null,
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Donor', DonorSchema)
