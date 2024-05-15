import { CredentialsChemist } from "@/utils/models/Credentials"
import axios from "axios"



export async function createChemical(system_id:number|null, data:CredentialsChemist) {
    console.log("dados ",data);
    
    const chemical = await axios.post(`api/chemist?id=${system_id}`,data)
   

   return chemical.data
   

}
export async function updateChemical(system_id:number|null, data:CredentialsChemist) {
    console.log("dados ",data);
    
    const chemical = await axios.patch(`api/chemist?id=${system_id}`,data)
   

   return chemical.data
   

}


export async function getChemical(system_id: number | null) {
   
    
    const chemical = await axios.get(`api/chemist?id=${system_id}`)
   

    return chemical.data
}