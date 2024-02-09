// const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const { prescriptionSchema } = require('./Prescription')

const procedureSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // prescription: [prescriptionSchema]
});


const Procedure = model("Procedure", procedureSchema);

module.exports = Procedure;
