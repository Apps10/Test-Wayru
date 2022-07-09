import MessageResponse from "../Helper/MessageResponse";
import { Request,Response } from "express";
import * as Excel from "../Helper/Excel";

class ExcelController{

    public async MostFamous(req:Request,res:Response){
        const { Number,Language } = req.body;
        const data = await Excel.FindFamous(Number,Language)
        .catch((err)=>{return MessageResponse.Error(req,res,err,500)});
        MessageResponse.Success(req,res,data!,200);
    }

}

export default new ExcelController();