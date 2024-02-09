// const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  lastName: {
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
    pattern: "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/"
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
  },
  location: {
    location: String
  },
  appointment: {
    type: Schema.Types.ObjectId,
    ref: "Appointment"
  },
  doctor: {
    type: String,
    ref: "Doctor"
  },
  // Hospital: {
  //   location: String
  // }
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
