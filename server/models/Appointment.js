const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    time: {
        type: Date.time,
        default: Date.time.now,
        required: true
    },
    user: [userSchema],
    procedure: [procedureSchema],
    doctor: [doctorSchema]
});

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;