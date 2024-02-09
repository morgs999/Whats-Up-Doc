// const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");


const appointmentSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  procedure: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Procedure'
  },
  user: {
    type: Schema.Types.String,
    required: true,
    ref: 'User'
  }
});

// appointmentSchema.method for setting date to string
// appointmentSchema.method for setting time to string

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;
