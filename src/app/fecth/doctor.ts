import { CredentialsDoctor } from "@/utils/models/Credentials"
import axios from "axios"



export async function createDoctor(system_id:number|null, data:CredentialsDoctor) {
    console.log("dados ",data);
    
    const doctor = await axios.post(`api/doctor?id=${system_id}`,data)
   

   return doctor.data
   

}
export async function updateDoctor(system_id:number|null, data:CredentialsDoctor) {
    console.log("dados ",data);
    
    const doctor = await axios.patch(`api/doctor?id=${system_id}`,data)
   

   return doctor.data
   

}


export async function getDoctor(system_id: number | null) {
   
    
    const doctor = await axios.get(`api/doctor?id=${system_id}`)
   

    return doctor.data
}