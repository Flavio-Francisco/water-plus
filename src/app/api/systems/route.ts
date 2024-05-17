
import {NextResponse } from "next/server";
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

