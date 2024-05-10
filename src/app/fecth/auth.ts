import { UserAuth } from "@/utils/models/userModel";
import axios from "axios";




export async function auth(user:UserAuth) {
    
    
        const data:UserAuth = await axios.post("api/systems", {
            name: user.name,
            password: user.password,
            system_id:user.system_id
        }).then(res => {
            return res.data
        })
            .catch(error => {
          return   error
       })
   
       return data
       
   
}