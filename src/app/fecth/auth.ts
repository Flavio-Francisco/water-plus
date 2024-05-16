import { UserAuth,UserModel } from "@/utils/models/userModel";
import axios from "axios";




export async function auth(user:UserAuth) {
    
    
        const data:UserModel= await axios.post("api/auth", {
            name: user.name,
            password: user.password,
            system_id: user.system_id
            
        }).then(res => {
            return res.data
        })
            .catch(error => {
          return   error
       })
   console.log("rota de auth",data.adm);
   
       return data
       
   
}