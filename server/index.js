import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
const app = express();
dotenv.config();

// connection database
const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.group("Connected to Database");
    }).catch((err)=>{
        throw err;
    })
};


// routes
app.use("/api/users",userRoutes);

app.listen(8800,()=>{
    connectDB();
    console.log("Connected to server");
})