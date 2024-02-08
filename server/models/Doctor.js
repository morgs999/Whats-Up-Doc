const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true
    // trim: true,
    // minlength: 3
  }
},

  {
    // timestamps: true,
  });


const Doctor = model("Doctor", doctorSchema);

module.exports = Doctor;
