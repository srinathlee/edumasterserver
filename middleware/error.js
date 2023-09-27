
import ErrorHandler from '../utils/errorhandler.js'



const ErrorHandl=(err,req,res,next)=>{
    err.statusCode=err.statusCode||500
    err.message=err.message||"internal server error"

    // wrong mongodb id_______________
    if(err.name=="CastError"){
        err= new ErrorHandler("Resource not found. Wrong ID",400)
    }


    res.status(err.statusCode).send({
        success:false,
        message:err.message
    })
}

export default ErrorHandl