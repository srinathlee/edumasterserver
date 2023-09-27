import mongoose from "mongoose";

const DatabaseConnection=()=>{

 mongoose.connect(process.env.DB_URI)
.then(()=>console.log("db is connected"))
.catch((err)=>{console.log(err)})

}

export default DatabaseConnection