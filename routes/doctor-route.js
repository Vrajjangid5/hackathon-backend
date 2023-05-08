import exp from "express";
import { findDoctor, setDoctor } from "../controller/doctor-controller.js";
const Express = exp;

const doctorRoute = Express.Router();
doctorRoute.post("/find-doctor", findDoctor);
doctorRoute.post("/add-doctor", setDoctor);

export default doctorRoute;