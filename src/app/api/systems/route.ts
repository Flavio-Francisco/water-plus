
import {NextRequest, NextResponse } from "next/server";
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

export async function POST(request:NextRequest) {
   
    const system: Systems = await request.json();
  
    try {
        const data = await prisma.systems.create({
            data: {
                name: system.name||"",
                address: system.address,
                city: system.city,
                state: system.state,
                zipCode: system.zipCode,
                number: system.number,
             
                
            }
        })

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

