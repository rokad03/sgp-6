import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  fromAddress: String,
  toAddress: String,
  persons: String,
  luggages: String,
  journeyDate: Date,
  journeyTime: String,
  notes: String,
});


export default mongoose.model("Booking", bookingSchema);