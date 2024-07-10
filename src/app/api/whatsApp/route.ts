import {NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import { WhatsAppDB} from "@/utils/models/whatsApp";


export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
  
    
    try {
        const data = await prisma.whatsApp.findMany({
            where: {
                system_id:Number(id)
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

export async function POST(req:NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");

    const contact:WhatsAppDB = await req.json()
    
            
    try {
        const data = await prisma.whatsApp.create({
            data: {
                criticaLevel: contact.criticaLevel,
                Fueling: contact.Fueling,
                lowLevel: contact.lowLevel,
                messageLowLevel: contact.messageLowLevel,
                messageCriticaLevel: contact.messageCriticaLevel,
                messageFueling: contact.messageFueling,
                name: contact.name,
                number: contact.number,
                SendCriticaLevel: contact.SendCriticaLevel,
                SendFueling: contact.SendFueling,
                SendLowLevel:contact.SendLowLevel,
               system_id :Number(id)
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
export async function PATCH(req:NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");

    const contact:WhatsAppDB = await req.json()
    
            
    try {
        const data = await prisma.whatsApp.update({
            where: {
                id: Number(id),   
               
            },
            data: {
                criticaLevel: contact.criticaLevel,
                Fueling: contact.Fueling,
                lowLevel: contact.lowLevel,
                messageLowLevel: contact.messageLowLevel,
                messageCriticaLevel: contact.messageCriticaLevel,
                messageFueling: contact.messageFueling,
                name: contact.name,
                number: contact.number,
                SendCriticaLevel: contact.SendCriticaLevel,
                SendFueling: contact.SendFueling,
                SendLowLevel:contact.SendLowLevel,
              
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

export async function DELETE(req:NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
         
    try {
        const data = await prisma.whatsApp.delete({
            where: {

              id:Number(id)
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