import { Err } from "../helper/Err.js";
import Doctor from "../model/Doctor.js";
export const findDoctor = async (req, res, next) => {
	let { pincode } = req.body;
	try {
        let doc = await Doctor.find({
            servicePincode : pincode
        })
		// if (!notes) {
		// 	throw new Err(422, "Something went wrong");
		// }
		res.status(200).send(doc);
	} catch (error) {
		next(error);
	}
};
export const setDoctor = async (req, res, next) => {
    let { name, address, servicePincode, qualification, experience, disease, specialist, contactDetail } = req.body;
    try {
        let task = await Doctor.update({ name:"Ss" }, { name: "sds"}, { upsert: true});
        // if(!task) {
        //     throw new Err(422, "Something went wrong!");
        // }
        res.status(200).json({
            data: task.data,
            message: "Doctor uploaded successfully"
        })
    } catch (error) {
        next(error);
    }
};
