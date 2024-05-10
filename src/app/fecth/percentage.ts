import axios from "axios"


export async function GetPercentage(system_id:number|null) {
    
    const data = await axios.get(`api/percentage?id=${system_id}`)
   

   return data.data
   

}