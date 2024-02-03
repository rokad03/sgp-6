import express from "express";

import { 
   AdminLogin
    
 } from "../controllers/adminController.js";

const router = express.Router();

router.post("/adminlogin",AdminLogin);

export default router;
