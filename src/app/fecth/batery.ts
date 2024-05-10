import axios from "axios"


export async function GetBatery(system_id:number|null) {
    
    const data = await axios.get(`api/batery?id=${system_id}`)
   

   return data.data
   

}