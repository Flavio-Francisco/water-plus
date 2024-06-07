import { AnalysisResult } from "@/utils/models/analysis"
import axios from "axios"


export async function GetAnalys(system_id:number|null) {
    
    const data = await axios.get(`api/analys?id=${system_id}`)
   

   return data.data
   

}
export async function createAnalisysEta(system_id:number|null,values:AnalysisResult) {
    
    const data = await axios.post(`api/eta?id=${system_id}`,values)
   

   return data.data
   

}

