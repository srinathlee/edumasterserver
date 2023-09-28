import app from "./app.js";
import dotenv from 'dotenv';
import OpenAI from "openai";
import DatabaseConnection from './database/db_connect.js'
import {AbortController} from "node-abort-controller";

global.AbortController = AbortController;

// EVN config____________________________________________
dotenv.config({path:"config.env"})


// handling the uncaught error______________________

process.on("uncaughtException",(err)=>{
    console.log(`Error ${err.message}`)
    console.log("shuting down the server.............................")
    process.exit(1);
})





// database connection________________________________
DatabaseConnection()

// openai connection__________________________________
export const openai = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
});




// app connection______________________________________
const server=app.listen(5080,()=>{console.log(`app is running at port ${process.env.PORT}`)})


// unhandled promise rejection_________________________

process.on("unhandledRejection",(err)=>{
    console.log(`Error ${err.message}`)
    console.log("shouting down the server.....................")
   server.close(()=>{
    process.exit(1)
   })
})