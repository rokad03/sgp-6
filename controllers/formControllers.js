
import mongoose from "mongoose";
import Booking from "../models/Booking.js";
export const formdata=async(req,res)=>{


// const bookingSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   phoneNumber: String,
//   fromAddress: String,
//   toAddress: String,
//   persons: String,
//   luggages: String,
//   journeyDate: Date,
//   journeyTime: String,
//   notes: String,
// });

// const Booking = mongoose.model('Booking', bookingSchema);


  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: 'Booking submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }



}