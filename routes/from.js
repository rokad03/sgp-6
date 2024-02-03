import express from "express";
import {verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { 
   formdata
    
 } from "../controllers/formControllers.js";

const router = express.Router();

router.post("/submitBooking",formdata);

export default router;
