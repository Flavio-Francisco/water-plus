

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import { AnalysisResult } from "@/utils/models/analysis";


export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
  
    try {
        const data = await prisma.microbiologigo_assays.findMany({
            where: {
                system_id:Number(id)
            }
        })

        return NextResponse.json({data});
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
    const analysis:AnalysisResult = await req.json();
    try {
        const data = await prisma.microbiologigo_assays.create({
        
            data: {
                samplingDate: analysis.date,
                eColiPresence: analysis.eColiPresence,
                endotoxins: analysis.endotoxins,
                heterotrophicBacteriaCount: analysis.heterotrophicBacteriaCount,
                sampleMatrixAndOrigin: analysis.sampleName,
                totalColiformsPresence:analysis.totalColiformsPresence,          
                system_id: Number(id)
                
            
          }

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