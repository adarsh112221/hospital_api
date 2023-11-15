// doctor.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
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
