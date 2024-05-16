import { CredentialsOperator } from "@/utils/models/Credentials"
import axios from "axios"



export async function createOperator(system_id:number|null, data:CredentialsOperator) {
    console.log("dados ",data);
    
    const operator = await axios.post(`api/operator?id=${system_id}`,data)
   

   return operator.data
   

}
export async function updateOperator(system_id:number|null, data:CredentialsOperator) {
    console.log("dados ",data);
    
    const operator= await axios.patch(`api/operator?id=${system_id}`,data)
   

   return operator.data
   

}


export async function getOperator(system_id: number | null) {
   
    
    const operator = await axios.get(`api/operator?id=${system_id}`)
   
    return operator.data
   
}