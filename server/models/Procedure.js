const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const procedureSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    Prescription: [prescriptionSchema]
},

    {
        // timestamps: true,
    });


const Procedure = model("Procedur", procedureSchema);

module.exports = Procedure;
