import { Router } from "express";
import { body } from "express-validator";
import { ValidateRequest } from "../Middleware/ValitateRequest";
import ExcelController from "../Controller/ApiController";
import MessageResponse from "../Helper/MessageResponse";
const router = Router();


router.post('/mostfamous',[
    /*
    "Language":"F",
    "Number":1
    */
    body("Language","The Language is Required").notEmpty().bail(),
    body("Language","The Language is Invalid").isString(),
    
    body("Number","The Number is Required").notEmpty().bail(),
    body("Number","The Number is Invalid").isInt({ gt:0 }).bail(),
    ValidateRequest
],ExcelController.MostFamous);

router.use('*',(req,res)=>{
    MessageResponse.Error(req,res,"Page Not Found",404);
});

export default router;