
import {NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/db";
import { Systems } from "@/utils/models/analysis";



export async function GET(req:NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    
    try {
        const data: Systems|null = await prisma.systems.findUnique({
            where: {
                id:Number(id)
            }
        })

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({
            message: "Sistema não encontado"
        },
            {
                status: 500
            })
    }
}

