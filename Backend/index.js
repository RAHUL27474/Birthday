//Step 3
import dotenv from "dotenv";
import { app } from "./App.js";
import dbConnect from "./DB/Index.js";

dotenv.config({
    path:'./.env'
})

dbConnect()
.then(()=>{
    app.on("ERRROR", ()=>{
        console.log("ERRR:", error);
    })

    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed !!! ", err);
})













































/*
import express from 'express';
import { error } from "console";
const app = express();


;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("ERRROR", ()=>{
            console.log("ERRR:", error);
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("ERROR: ", error)
        throw(error)
    }
})() */