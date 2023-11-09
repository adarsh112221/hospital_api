// patient.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },email:{
type:String,
required:true
  },
  address: {
    type: String,
    required: true
  },
  reports: [
    {
     type:mongoose.Schema.Types.ObjectId,
     ref:'Report'
    }
  ]
},{
  timestamps: true
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
