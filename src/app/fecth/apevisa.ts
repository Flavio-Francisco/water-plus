
import { ApvisaModel } from "@/utils/models/Apvisa";
import axios from "axios"

export async function getAnalysisApevisa(system_id:number|null) {
    
    console.log(system_id);
    
    const resevatorir = await axios.get(`/api/apevisa?id=${system_id}`)
  
    console.log(resevatorir.data)
   return resevatorir.data
   


}

export async function createAnalysisApevisa(system_id:number|null, data:ApvisaModel) {
    
    
    const resevatorir = await axios.post(`/api/apevisa?id=${system_id}`,data)
  

   return resevatorir.data
   


}

export async function updateAnalysisApevisa(system_id:number|null, data:ApvisaModel) {
    console.log("dados ",data);
    const operator= await axios.patch(`/api/apevisa?id=${system_id}`,data)
   

   return operator.data
   

}


export async function getReservatorir(system_id: number | null) {
   
    
    const operator = await axios.get(`api/reservoir?id=${system_id}`)
   console.log(operator );
   
    return operator.data
   
}