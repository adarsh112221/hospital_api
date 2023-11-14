// patient.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  reports: [
    {
      // Assuming a report has a name and content
      name: { type: String, required: true },
      content: { type: String, required: true }
    }
  ]
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
