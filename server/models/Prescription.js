const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const prescriptionSchema = new Schema({
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    refill: {
        type: Boolean,
        required: true
    }
},

    {
        // timestamps: true,
    });


const Prescription = model("Prescription", prescriptionSchema);

module.exports = Prescription;
