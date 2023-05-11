import exp from "express";
import { addTime, findDoctor, setDoctor } from "../controller/doctor-controller.js";
const Express = exp;

const doctorRoute = Express.Router();
doctorRoute.post("/find-doctor", findDoctor);
doctorRoute.post("/add-doctor", setDoctor);
doctorRoute.get("/update", addTime);

export default doctorRoute;
