import excel from "../src/Controller/ExcelController";

(async()=>{
    const data = excel.ExcelToJSON();
    console.log(data.length);
    
    
})()