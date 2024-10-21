
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/db";
interface NameDate {
    name: string;
    date: string;
  }
  



export async function POST(req: NextRequest) { 
    const url = new URL(req.nextUrl.href);
    const system_id = url.searchParams.get("id");
    const response : NameDate = await req.json();
try{
    const data = await prisma.apevisa.findMany({
        where: {
            system_id: Number(system_id),
            name: response.name,
            date: response.date
        },
       
 
    })
    return NextResponse.json(data[0]);
} catch (error) {
    return NextResponse.json({
        message: "erro ao buscar dados!!"
    },
    {
        status: 500
    });
}

}