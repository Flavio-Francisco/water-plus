import { UserAuth } from "@/utils/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import { Systems } from "@/utils/models/analysis";


export async function GET() {
   
    
    try {
        const data:Systems[] = await prisma.systems.findMany()

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({
            message: "Usuário não encontado"
        },
            {
                status: 500
            })
    }
}

export async function POST(req: NextRequest) {
    const user: UserAuth = await req.json()
    console.log(user);
    
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
                
            }
        })

      return  NextResponse.json(data)
    } catch (error) {
        return  NextResponse.json({
            message:"Usuário não encontado"
        },
            {
            status:500
        })
    }
  


    
}