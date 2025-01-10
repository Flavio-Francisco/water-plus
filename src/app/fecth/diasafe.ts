
import {MachineData} from "@/utils/models/diasafe";
import axios from "axios";


interface Machines{
    id: number;
    date: string|Date;
    machine: string;
    system_id: number;
  }
  

export async function getMachines(system_id:number) {
    
    
    const{ data}= await axios.get(`api/diasafe?id=${system_id}` )

   return data
   

} 

export async function updateMachines(system_id: number, machine: Machines) {
    console.log(machine);
    
    try {
        const data = await axios.patch(`api/diasafe/upset?id=${system_id}`,machine);
        console.log("retorno da rota events ", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar events:", error);
        throw error;
    }
}
export async function deleteMachines(system_id: number,machine:string) {
    console.log(machine);
    
    try {
        const data = await axios.delete(`api/diasafe/upset`, {
            data:{machine: machine,system_id: system_id}
        });
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

export async function getNameMachine(system_id: number) {
  console.log(system_id );
  
    
    try {
        const data = await axios.get(`api/diasafe/upset?system_id=${system_id}`, {
            data:{system_id: system_id}
        });
        console.log("retorno da rota events ", data);
        return data.data;
    } catch (error) {
        console.error( error);
        throw error;
    }
}