import { openai } from "../server.js"
import Story from "../models/model.js"
import ErrorHandler from '../utils/errorhandler.js'
import AsyncError from "../middleware/asyncError.js"

export const GetStory=
AsyncError( async(req,res)=>{

  const question=req.body.question
  console.log(question)

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: `give me a story about ${question}`}],
        model: "gpt-3.5-turbo"})
     const story=chatCompletion.choices[0].message.content

    res.status(200).send({success:true,story:story}) 
  }
)

  export const GetAllStories=AsyncError(
    async(req,res,next)=>{
      const data=await Story.find()
      // console.log(data)
      res.status(201).send({success:true,data})
     }
  )

  export const GetSingleStory=AsyncError(
    async(req,res,next)=>{
      const{id}=req.params

      const data=await Story.findById(id)
  
      if(!data){
        return next(new ErrorHandler(401,"product not found"))
      }
      res.status(201).send({success:true,data})
    }
  )

  export const PostStory=AsyncError(async(req,res,next)=>{

     const {question,story}=req.body
     console.log(question)
     const data={question,story}
     const response=await Story.create(data)
      res.status(200).send({success:true,message:"saved successfully"})  
   
})

// ______________Delete__________________
export const Delete= AsyncError(
  async(req,res,next)=>{
    const {id}=req.params
    const response=await Story.findByIdAndDelete(id)
    res.status(201).send({success:true,message:"successfully deleted"})
  }

)

  export const Like= AsyncError(
    async(req,res,next)=>{
      const {id}=req.params
      const response=await Story.findByIdAndUpdate(id,{$inc:{like:1}})
      res.status(201).send({success:true,message:"liked"})
    }
 
  )
  export const DisLike=AsyncError(
    async(req,res,next)=>{
      const {id}=req.params
      const response=await Story.findByIdAndUpdate(id,{$inc:{dislike:1}})
      res.status(201).send({success:true,message:"disliked"})
    }
  )


