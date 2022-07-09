import XLSX from "xlsx";
import { github } from "../Interface/github";

    export function ExcelToJSON():Promise<any>{
        return new Promise((res,rej)=>{
            try{
                const excel = XLSX.readFile('./database.xlsx');
                const sheet = excel.SheetNames; //hojas del excel
                const data = XLSX.utils.sheet_to_json(excel.Sheets[sheet[0]]);
                res(data);
            }catch(e){
                rej(e);
            }
        });
    }

    export function FindFamous(Number:number,Language:string):Promise<github[]>{
        return new Promise(async (res,rej)=>{
            try{
                const json = await ExcelToJSON()
                .catch((err)=>{rej(err)});
                const data_lang:github[] = json
                .filter((e:github)=>(e['language'] || '').toLowerCase()==Language.toLowerCase()); //filtra por lenguajes
                const data_order:github[] = data_lang.sort((a:github, b:github) =>((a.stars > b.stars)?-1:1)); //ordena de mayor a menor por estrellas
                const data_count:github[] = data_order.slice(0,Number); //toma la cantidad que el usuario requiere
                res(data_count);
            }catch(err){
                rej(err);
            }
        });
    }

