const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const hospitalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

const Hospital = model('Hospital', hospitalSchema);

module.exports = Hospital;