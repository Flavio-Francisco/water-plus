
import { WaterTreatmentParameters } from "@/utils/models/WaterParametersModel"
import axios from "axios"


interface Ipros{
    title: string[];
  
  }

export async function GetDataFull(system_id:number|null) {
    
    const data = await axios.get(`api/dataform?id=${system_id}`)
   console.log(data.data);
   
   const result:Ipros = data.data
   return result
   

}

export async function createParamets(system_id: number | null, values: WaterTreatmentParameters) {
    // Convertendo 'true' e 'false' para booleanos
    const ozoneTest = parseBoolean(String(values.LOOP.OzoneTestBefore1stShift ))

    // Atualizando o objeto values com o valor convertido
    const updatedValues = {
        ...values,
        LOOP: {
            ...values.LOOP,
            OzoneTestBefore1stShift: ozoneTest
        },
        WATER_FEED: {
            ...values.WATER_FEED,
            pH :Number(values.WATER_FEED.pH ) 
        }

    };
  
    console.log("Dados a serem enviados:", updatedValues);
    console.log("id:", system_id);
  
    try {
      const response = await axios.post(`api/dataform?id=${system_id}`, updatedValues);
      console.log("Resposta do servidor:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      throw error;
    }
}
  
function parseBoolean (e: string): boolean{
    if (e==="true") {
        return true
    } else {
        return false
    }
}