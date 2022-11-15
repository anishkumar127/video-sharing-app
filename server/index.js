import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();

// connection database
const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.group("Connected to Database");
    }).catch((err)=>{
        throw err;
    })
}

app.listen(8800,()=>{
    connectDB();
    console.log("Connected to server");
})