import { ApvisaModel } from "@/utils/models/Apvisa";
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) { 
    const url = new URL(req.nextUrl.href);
    const system_id = url.searchParams.get("id");
try{
    const data = await prisma.apevisa.findMany({
        where: {
            system_id:Number(system_id)
        },
        select: {
            name: true,
            date:true
        }
 
    })
    return NextResponse.json(data);
} catch (error) {
    return NextResponse.json({
        message: "erro ao buscar dados!!"
    },
    {
        status: 500
    });
}

}

export async function POST(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    const apevisa: ApvisaModel = await req.json()

     try {
        const data = await prisma.apevisa.create({
           
            data: {
              
                cianoBacteria: apevisa.cianoBacteria,
                conductivity: apevisa.conductivity,
                date: apevisa.date  ||"",
                endotoxin: apevisa.endotoxin,
                escherichaColi: apevisa.escherichaColi,
                freeChlorine: apevisa.freeChlorine,
                heterotrophic: apevisa.heterotrophic,
                name: apevisa.name,
                pH: apevisa.pH,
                seedingInDepth: apevisa.seedingInDepth,
                potentiometry: apevisa.potentiometry,
                seedingOnSurface: apevisa.seedingInDepth,
                totalColiforms: apevisa.totalColiforms,
                system_id:Number(id)
                
              
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