


export interface UserModel{
        id?: number;
        name:string;
        password: string|null;
        adm?: boolean|null;
        system_id?: number|null;
}

export interface UserAuth{
  
        name:string;
        password: string;
        system_id:number;
     
}

