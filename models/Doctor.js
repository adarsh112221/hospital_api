// doctor.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  speciality: {
    type: String,
    required: true
  }
},{
  timestamps:true
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
