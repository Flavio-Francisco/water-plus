import { WhatsAppDB } from "@/utils/models/whatsApp";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/db";




export async function PATCH(req:NextRequest) {
    const url = new URL(req.nextUrl.href);
    const syntem_id = url.searchParams.get("id");

    const contact:WhatsAppDB = await req.json()
    
            
    try {
        const data = await prisma.whatsApp.update({
            where: {
                id: contact.id,   
               system_id:Number(syntem_id)
            },
            data: {
             
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
