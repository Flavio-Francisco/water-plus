export interface WhatsApp{
    id?: number;
    system_id: number;
    contact: {
        
        name: string;
        number: string;
        message: string;
        lowLevel: boolean;
        criticaLevel: boolean;
        Fueling: boolean;
        SendLowLevel?: boolean;
       SendCriticaLevel?: boolean;
        SendFueling?: boolean;
    }[]
}
export interface WhatsAppDB{
    id?: number;
    system_id?: number;
        name: string;
        number: string;
        messageLowLevel?: string;
         messageCriticaLevel?: string;
        messageFueling?: string;
        lowLevel: boolean |undefined;
        criticaLevel: boolean|undefined;
        Fueling: boolean|undefined;
        SendLowLevel?: boolean|undefined;
       SendCriticaLevel?: boolean|undefined;
        SendFueling?: boolean|undefined;
    
}
interface Message {
    number: string;
    message: string;
  }
export interface WhatsAppMenssage{
    messages: Message[];
    
}