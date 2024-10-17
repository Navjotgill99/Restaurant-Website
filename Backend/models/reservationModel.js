import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    date:{type:Date,required:true},
    time:{type:String,required:true},
    guests:{type:Number,required:true},
    specialRequests:{type:String},
    phone:{type:Number,required:true},
    name:{type:String,required:true},
    status:{type:String,enum:['pending', 'confirmed', 'cancelled'],default: 'pending'}
},{timestamps:true});

const reservationModel = mongoose.models.reservation || mongoose.model('Reservation', ReservationSchema);
export default reservationModel;
