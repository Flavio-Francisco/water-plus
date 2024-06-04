import {DesinfectionModel} from "@/utils/models/desifection";
import axios from "axios";




export async function getDesinfection(system_id:number) {
    
    
    const data:DesinfectionModel= await axios.get(`api/desinfection?id=${system_id}` ).then(res => {
        return res.data
    })
        .catch(error => {
      return   error
   })
console.log("rota de gerDesinfection",data);

   return data
   

} 

export async function updateDesinfection(id: number, desinfection:DesinfectionModel) {
    try {
        const data = await axios.patch(`api/desinfection?id=${id}`,desinfection );
        console.log("retorno da rota events ", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar events:", error);
        throw error;
    }
}


export async function createDesinfection(system_id: number, desinfection: DesinfectionModel) {
    try {
        const data = await axios.post(`api/desinfection?id=${system_id}`, 
        desinfection
        );
        console.log("retorno da desinfection", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        throw error;
    }
}
export async function deleteDesinfection(id: number) {
    try {
        const data = await axios.delete(`api/desinfection?id=${id}`);
      
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        throw error;
    }
}

