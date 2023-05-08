import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

app.use(cors());
const mongodb_options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
const uri = "mongodb+srv://vrajjangid5:LClAJp4veqAe6Ybx@cluster0.wlwun13.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, mongodb_options)
.then(()=> {
    console.log("Databse connected successfully");
}).catch((error)=>{
    console.log(error);
})
app.use("/find-doctor", async(req, res, next)=> {
    let { pincode } = req.body;
    try{
        let result = await Doctor.find({
            servicePincode: pincode
        });
        res.status(200).json({
            result: result,
            message: "Doctor fetched successfully"
        })
    } catch (error) {
        res.send(error);
    };
    
    res.status(200).json({
        doctor : "Dr. Rahul jain",
        designnation: "mbbs",
        address: "Jaipur"
    });
})

app.listen(8000, () => {
    console.log("Server started");
})