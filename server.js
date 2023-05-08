import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { handleError } from "./helper/Err.js";
import doctorRoute from "./routes/doctor-route.js";
dotenv.config();
const app = express();

mongoose
	.connect("mongodb+srv://vrajjangid5:6bpy69VwBUzJuNEi@cluster.rz95go2.mongodb.net/?retryWrites=true&w=majority", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((_) => {
		console.log("Connected to database");
	});

app.use(cors());
app.use(json());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use("/api", doctorRoute);
app.use((err, req, res, next) => {
	handleError(err, res);
});

app.get("/", (req, res) => res.send("Not in production"));


const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});