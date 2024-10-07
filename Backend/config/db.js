import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://navjotkaurgill41:SkyYvhWdulNigQQZ@cluster0.xbyyt.mongodb.net/capstone').then(()=>console.log("DB Connected"));
}