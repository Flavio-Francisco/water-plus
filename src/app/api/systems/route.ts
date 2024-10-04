
import {NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import { Systems } from "@/utils/models/analysis";


const corsHeaders = {
    'Access-Control-Allow-Origin': '*', // Ou especifique um domínio, por exemplo, 'https://example.com'
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  };
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
    if (request.method === 'OPTIONS') {
        return new NextResponse(null, { headers: corsHeaders });
      }
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

