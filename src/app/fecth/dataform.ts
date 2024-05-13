import axios from "axios"


export async function GetDataFull(system_id:number|null) {
    
    const data = await axios.get(`api/dataform?id=${system_id}`)
   

   return data.data
   

}