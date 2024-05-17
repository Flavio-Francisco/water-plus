import { UserModel } from "@/utils/models/userModel";
import axios from "axios";




export async function getUserDB(system_id:number) {
    
    
    const data:UserModel[]= await axios.get(`api/auth/user?id=${system_id}` ).then(res => {
        return res.data
    })
        .catch(error => {
      return   error
   })
console.log("rota de users",data);

   return data
   

} 

export async function updateUserForm(id: number, user: UserModel) {
    try {
        const data = await axios.patch(`api/auth/user?id=${id}`, user);
        console.log("retorno da rota de update", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        throw error;
    }
}


export async function createUserForm(system_id: number, user: UserModel) {
    try {
        const data = await axios.patch(`api/auth/user?id=${system_id}`, user);
        console.log("retorno da rota de update", data);
        return data.data;
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        throw error;
    }
}

