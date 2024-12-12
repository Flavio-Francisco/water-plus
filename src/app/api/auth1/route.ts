import { UserAuth } from "@/utils/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";


export async function POST(req: NextRequest) {
    const user: UserAuth = await req.json()
    console.log("Formulario",user);
    
    if (user.system_id == 0 ) {
        return NextResponse.json({
            message: "Por favor informe o nome do sistema!!!"
        })
    }
    if (user.name == "" ) { 
        return NextResponse.json({
            message: "Por favor informe o nome do usuário!!!"
        })
    }
    if (user.password == "" ) {
        return NextResponse.json({
            message: "Por favor informe a senha!!!"
        })
    }

    try {
        const data = await prisma.user.findUnique({
            where: {
                
                name: user.name,
                password: user.password,
                system_id:user.system_id
                
            },
            select: {
                id:true,
                system_id:true,
                name: true,
                password: true,
                adm:true
                
            }
        })
        console.log("resposta", data);
        
    
      return  NextResponse.json(data)
    } catch (error) {
        console.log(error);
        
        return  NextResponse.json({
            error:"Usuário não encontado"
        },
            {
            status:500
        })
    }
  


    
}