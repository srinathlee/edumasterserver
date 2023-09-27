import mongoose from "mongoose";

const Story=new mongoose.Schema({
    question:{
        type:String,
        required:[true,"provide question"]
    },
    story:{
        type:String,
        required:[true,"provide story"]
    },
    like:{
        type:Number,
        default:0
    },
    dislike:{
        type:Number,
        default:0
    }
})

export default mongoose.model("Story",Story)