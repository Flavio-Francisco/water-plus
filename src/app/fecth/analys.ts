import axios from "axios"


export async function GetAnalys(system_id:number|null) {
    
    const data = await axios.get(`api/analys?id=${system_id}`)
   

   return data.data
   

}