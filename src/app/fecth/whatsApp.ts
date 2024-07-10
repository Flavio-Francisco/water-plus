

import { WhatsAppDB } from "@/utils/models/whatsApp";
import axios from "axios";




export async function getContact(system_id:number) {
    
    
    const data:WhatsAppDB[]= await axios.get(`api/whatsApp?id=${system_id}` ).then(res => {
        return res.data
    })
        .catch(error => {
      return   error
   })
console.log("rota de WhatsAPP",data);

   return data
   

} 

export async function updaSetContact(id: number, contact:WhatsAppDB) {
    try {
        const data = await axios.patch(`api/whatsApp?id=${id}`,contact);
        console.log("retorno da rota update contact whatsApp ", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar events:", error);
        throw error;
    }
}


export async function createContact(id: number, contact:WhatsAppDB) {
    try {
        const data = await axios.post(`api/whatsApp?id=${id}`,contact);
        console.log("retorno da rota events ", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar Contact:", error);
        throw error;
    }
}
export async function deleteContat(id: number) {
    try {
        const data = await axios.delete(`api/whatsApp?id=${id}`);
        console.log("retorno da rota de delete contact", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao deletar contact:", error);
        throw error;
    }
}

