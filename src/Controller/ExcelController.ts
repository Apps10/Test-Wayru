import XLSX from "xlsx";

class ExcelController{

    public ExcelToJSON():Promise<any>{
        return new Promise((res,rej)=>{
            try{
                const excel = XLSX.readFile('./database.xlsx');
                const sheet = excel.SheetNames; //hojas del excel
                const data = XLSX.utils.sheet_to_json(excel.Sheets[sheet[0]]);
                res(data);
            }catch( e){
                rej(e);
            }
        });
    }

    
}

export default new ExcelController();