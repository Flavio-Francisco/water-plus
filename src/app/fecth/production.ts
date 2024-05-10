import axios from "axios"


export async function GetPoduction(system_id:number|null) {
    
    const data = await axios.get(`api/production?id=${system_id}`)
   

   return data.data
   

}