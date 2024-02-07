const { Schema, model } = require('mongoose');

const prescriptionSchema = new Schema({
    name: {
        type: String,
        required: false
        //not sure if this should be true or false
    },
    price: {
        type: Number,
        required: true,
        min: 0.01
      },
    user: [userSchema],
    doctor: [doctorSchema]
});

const Prescription = model('Prescription', prescriptionSchema);

module.exports = Prescription;