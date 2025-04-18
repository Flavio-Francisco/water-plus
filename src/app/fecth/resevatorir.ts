
import { ReservoirAnalysisInitialValuesEdite } from "@/components/analysis/resevoirFormEdit/validation";
import { CredentialsOperator } from "@/utils/models/Credentials"
import axios from "axios"



export async function createReservoir(system_id:number|null, data:string) {
    console.log("dados ",data);
    if (data != 'NaN-NaN-NaN') {
        const resevatorir = await axios.post(`api/reservoir?id=${system_id}`,data)
   

   return resevatorir.data  
    }
  
   

}
export async function createReservoirAnalisys(system_id:number|null, data: ReservoirAnalysisInitialValuesEdite) {
    console.log("dados ",data);
    
    const resevatorir = await axios.post(`api/reservoir/analysis?id=${system_id}`,data)
   

   return resevatorir.data
   

}

export async function editReservoirAnalisys(system_id:number|null, data: ReservoirAnalysisInitialValuesEdite) {
    console.log("dados ",data);
    
    const resevatorir = await axios.patch(`api/reservoir/analysis?id=${system_id}`,data)
   

   return resevatorir.data
   

}
export async function updateReservoir(system_id:number|null, data:CredentialsOperator) {
    console.log("dados ",data);
    const operator= await axios.patch(`api/reservoir?id=${system_id}`,data)
   

   return operator.data
   

}
export async function deleteReservoir(system_id:number|null, data:ReservoirAnalysisInitialValuesEdite) {
    console.log("dados ", data);
    const Reservoir = await axios.delete(`api/reservoir/analysis?id=${system_id}`, {
        data:data
    })
   

   return Reservoir.data
   

}


export async function getReservatorir(system_id: number | null) {
   
    
    const operator = await axios.get(`api/reservoir?id=${system_id}`)
   console.log(operator );
   
    return operator.data
   
}