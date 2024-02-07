const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const doctorSchema = new Schema(
  {
    precedure: {
      type: String,
      hospital: string,
      required: true,
      unique: true,
    },
   
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);


const Doctor = model('Doctor', doctorSchema);

module.exports = Doctor;
