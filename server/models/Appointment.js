// const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");


const appointmentSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  procedure: {
    // type: Schema.Types.ObjectId,
    type: String,
    required: true,
    ref: 'Procedure'
  }
});


const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;
