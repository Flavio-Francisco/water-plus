import { AnalysisResult } from "@/utils/models/analysis"
import axios from "axios"


export async function GetAnalys(system_id: number | null, sampleMatrixAndOrigin: string) {
   
    
    const data = await axios.post(`api/analys?id=${system_id}`,{sampleMatrixAndOrigin})
   


   return data.data
   

}
export async function createAnalisysEta(system_id:number|null,values:AnalysisResult) {
    
    const data = await axios.post(`api/eta?id=${system_id}`,values)
   

   return data.data
   

}
export async function GetAnalysPoint(system_id:number|null) {
    
    const data = await axios.get(`api/analysPoint?id=${system_id}`)
   

   return data.data
   

}
