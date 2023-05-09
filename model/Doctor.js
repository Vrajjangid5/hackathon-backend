import mongoose from "mongoose";
const Schema = mongoose.Schema;

let DocterSchema = new Schema(
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
        qualification: {
            type: String,
            required: true
        },
        experience: {
            type: Number,
            required: true
        },
        disease: {
            type: String,
            required: true
        },
        specialist: {
            type: String,
            required: true
        },
        contactDetail: {
            type: String,
            required: true
        }
    },
    {
		timestamps: true,
		collection: "doctors",
	}
);

export default mongoose.model("Doctor", DocterSchema);

