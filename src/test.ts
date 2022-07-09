import excel from "./Controller/ApiController";

(async()=>{
    const data = await excel
    .ExcelToJSON()
    .catch(er=>{console.log(er); return "";});
    console.log(data);
    
    
})()