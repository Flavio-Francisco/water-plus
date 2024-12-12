import { UserAuth} from "@/utils/models/userModel";
import axios from "axios";



export async function auth(user: UserAuth) {
    try {
      const response = await axios.post("api/auth1", {
        name: user.name,
        password: user.password,
        system_id: user.system_id,
      });
      
  
      return response.data ; // Garantindo que a resposta tenha o tipo correto
    } catch (error) {
      throw new Error('Erro na autenticação');
    }
  }
  
