
import {MachineData} from "@/utils/models/diasafe";
import axios from "axios";


interface Machines{
    id: number;
    date: string;
    machine: string;
    system_id: number;
  }
  

export async function getMachines(system_id:number) {
    
    
    const data:Machines[]= await axios.get(`api/diasafe?id=${system_id}` ).then(res => {
        return res.data
    })
        .catch(error => {
      return   error
   })
console.log("rota de diasafe",data);

   return data
   

} 

export async function updateMachines(system_id: number, machine:MachineData) {
    try {
        const data = await axios.patch(`api/diasafe?id=${system_id}`,machine);
        console.log("retorno da rota events ", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar events:", error);
        throw error;
    }
}


export async function createMachines(system_id: number, machine:MachineData) {
    try {
        const data = await axios.post(`api/diasafe?id=${system_id}`,machine);
        console.log("retorno da rota events ", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar events:", error);
        throw error;
    }
}
export async function deleteEvents(id: number) {
    try {
        const data = await axios.delete(`api/events?id=${id}`);
        console.log("retorno da rota de update", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        throw error;
    }
}

