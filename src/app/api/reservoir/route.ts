
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    const name = await req.json()
  
    try {
        const data = await prisma.reservoir_analysis.findMany({
            where: {
                system_id: Number(id),
                sampleMatrixAndOrigin:name
            },
            orderBy: {
                samplingDate:'asc'
            }
        })

        return NextResponse.json({data});
    } catch (error) {
        return NextResponse.json({
            message: "erro ao Buscar Dados!!"
        },
        {
            status: 500
        });
    }
}


export async function POST(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    const date = await req.json();
    console.log(date);
    
    try {
        const data = await prisma.reservoir_cleaning.create({
        
            data: {
                
               lastCleaning:date.lastCleaning,
                system_id: Number(id)
                
            
            },
            

        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({
            message: "deu errado"
        },
        {
            status: 500
        });
    }
}