
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";
import { EventInput } from "@/utils/models/Events";


export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
  
    try {
        const data = await prisma.events.findMany({
            where: {
                systen_id:Number(id)
            }
        })

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({
            message: "erro ao registrar"
        },
        {
            status: 500
        });
    }
}


export async function POST(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    const events: EventInput =await req.json();
    try {
        const data = await prisma.events.create({
            data: {
                date: events.date,
                description: events.description,
                editable: events.editable,
                title: events.title,
                systen_id:Number(id)
           }
        })

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({
            message: "erro ao registrar"
        },
        {
            status: 500
        });
    }
} 
export async function DELETE(req: NextRequest) {
    
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    console.log(id);
    
    try {
    await prisma.events.delete({
            where: {
         id:Number(id)
     }
        })


        return NextResponse.json("Evento Deletado com Sucesso!!!");
    } catch (error) {
        return NextResponse.json({
            message: "Erro Deletar dados"
        },
        {
            status: 500
        });
    }
} 







