import axios from "axios"


export async function GetAnnual(system_id:number|null) {
    
    const data = await axios.get(`api/annual?id=${system_id}`)
   

   return data.data
   

}