const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // regex add in
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    pattern: "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/"
  },
  Appointment: [appointmentSchema],
  Doctor: [doctorSchema],
  Hospital: [hospitalSchema]
},

  {
    // timestamps: true,
  });

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    this.password = await bcrypt.hash(this.password);
  }
  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
