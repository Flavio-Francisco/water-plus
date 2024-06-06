import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    const events =await req.json();
    try {
        const data = await prisma.events.update({
            where: {
                id:Number(id)
            },
            data: {
              
                status:events.status
              
           }
        })

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({
            message: "erro ao atualizar status"
        },
        {
            status: 500
        });
    }
} 