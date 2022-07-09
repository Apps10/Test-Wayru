import { Request,Response } from "express";

class MessageResponse{
    public Error(req:Request,res:Response,Error:String|object,status:number=400){
        return res.status(status).json({
            ok:false,
            body:Error
        });
    }

    public Success(req:Request,res:Response,Data:String|object,status:number=200){
        return res.status(status).json({
            ok:true,
            body:Data
        });
    }
}

export default new MessageResponse();