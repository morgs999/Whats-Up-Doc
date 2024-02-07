const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const doctorSchema = new Schema(
  {
    name: { 
      type: String, 
      required: true
    },

    procedure: {
      type: String,
      hospital: string,
      required: true,
      unique: true,
    },
   //do we need to add in name for the doctor?
      user: [userSchema],
      hospital: [hospitalSchema],
      appointment: [appointmentSchema]
  }
);


const Doctor = model('Doctor', doctorSchema);

module.exports = Doctor;
