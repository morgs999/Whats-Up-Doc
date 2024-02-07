const { Schema, model } = require('mongoose');

const hospitalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    user: [userSchema],
    doctor: [doctorSchema],
    appointment: [appointmentSchema]
});

const Hospital = model('Hospital', hospitalSchema);

module.exports = Hospital;