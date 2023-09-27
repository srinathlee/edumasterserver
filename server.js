import app from "./app.js";
import dotenv from 'dotenv'
import OpenAI from "openai";
import DatabaseConnection from './database/db_connect.js'

// handling the uncaught error______________________

process.on("uncaughtException",(err)=>{
    console.log(`Error ${err.message}`)
    console.log("shuting down the server.............................")
    process.exit(1);
})



// EVN config_________________________________________
dotenv.config({path:"./config/config.env"})

// database connection________________________________
DatabaseConnection()

// openai connection__________________________________
export const openai = new OpenAI({
    apiKey:"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"
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