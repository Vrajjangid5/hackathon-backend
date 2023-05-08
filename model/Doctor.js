import mongoose from "mongoose";

const DocterSchema = new mongoose.Schema(
    {
        name: { 
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        servicePincode: {
            type: String,
            required: true
        },
        specialist: {
            type: String,
            required: true
        },
        disease: {
            type: String,
            required: true
        }
});

module.exports = mongoose.model("Doctor", DocterSchema);