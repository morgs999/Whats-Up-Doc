const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');
const Appointment = require('./Appointment');

const userSchema = new Schema({
  firstName: {
    type: String,
    // required: true,
    trim: true,
    minlength: 3
  },
  lastName: {
    type: String,
    // required: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // regex add in
    match: [/.+@.+\..+/, 'Must match an email address!']
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
  },
  location: {
    location: String,
    // match: [/([a-zA-Z]*),? ([A-Z][A-Z])/]
  },
  appointments: [],
  doctor: [{
    type: String,
    ref: "Doctor"
  }],
  // Hospital: {
  //   location: String
  // }
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
