// const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

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
        id: false
    });


const Prescription = model("Prescription", prescriptionSchema);

// module.exports = { prescriptionSchema, Prescription };
module.exports = Prescription;
