const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const appointmentSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  time: {
    type: Date.time,
    default: Date.time.now,
    required: true,
  },
  User: [userSchema],
  Procedure: [procedureSchema]
},

  {
    // timestamps: true,
  });

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;
