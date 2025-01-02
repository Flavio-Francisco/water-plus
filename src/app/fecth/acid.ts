
import axios from "axios";


interface Machines{
    id: number;
    date: string|Date;
    machine: string;
    system_id: number;
  }
  

export async function getAcid(system_id:number) {
    
    
    const data:Machines[]= await axios.get(`api/acid?id=${system_id}` ).then(res => {
        return res.data
    })
        .catch(error => {
      return   error
   })
console.log("rota de diasafe",data);

   return data
   

} 

export async function updateAcid(system_id: number, machine:Machines) {
    try {
        const data = await axios.patch(`api/acid?id=${system_id}`,machine);
        console.log("retorno da rota events ", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar events:", error);
        throw error;
    }
}


export async function createAcid(system_id: number, machine:Machines) {
    try {
        const data = await axios.post(`api/acid?id=${system_id}`,machine);
        console.log("retorno da rota events ", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar events:", error);
        throw error;
    }
}
export async function deleteEvents(id: number) {
    try {
        const data = await axios.delete(`api/acid?id=${id}`);
        console.log("retorno da rota de update", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        throw error;
    }
}

export async function deleteAcid(system_id: number,machine:string) {
    console.log(machine);
    
    try {
        const data = await axios.delete(`api/acid/upset`, {
            data:{machine: machine,system_id: system_id}
        });
        console.log("retorno da rota events ", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar events:", error);
        throw error;
    }
}