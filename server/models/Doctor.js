// const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const doctorSchema = new Schema({
  doctorName: {
    type: String,
    required: true,
    trim: true
  },
  specialty: {
    type: String,
    required: true,
    trim: true
  }
},
  {
    id: false
  });


const Doctor = model("Doctor", doctorSchema);

module.exports = Doctor;
