

import axios from "axios"



export async function getData(system_id:number|null) {
    
    const data = await axios.get(`api/data?id=${system_id}`)
   

   return data.data
   

}


  