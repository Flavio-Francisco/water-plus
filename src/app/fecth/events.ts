import { EventInput } from "@/utils/models/Events";
import axios from "axios";




export async function getEventsDB(system_id:number) {
    
    
    const data:EventInput[]= await axios.get(`api/events?id=${system_id}` ).then(res => {
        return res.data
    })
        .catch(error => {
      return   error
   })
console.log("rota de events",data);

   return data
   

} 

export async function updateEvents(id: number, events: EventInput) {
    try {
        const data = await axios.patch(`api/events?id=${id}`, {
            date: events.date,
            description: events.description,
            editable: events.editable,
            title: events.title,
        });
        console.log("retorno da rota events ", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar events:", error);
        throw error;
    }
}


export async function createEvents(system_id: number, events: EventInput) {
    try {
        const data = await axios.post(`api/events?id=${system_id}`, 
            {
                date: events.date,
                description: events.description,
                editable: events.editable,
                title: events.title,
            }
        );
        console.log("retorno da rota de update", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
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

