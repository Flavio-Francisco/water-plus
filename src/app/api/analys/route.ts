import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

export interface UnifiedData {
    id?: number;
    date: string[];
    sampleName:string | null;
    eColiPresence: number[];
    totalColiformsPresence: number[];
    heterotrophicBacteriaCount: number[];
    endotoxins:number[];
    system_id?: number;
}

export async function POST(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    const {sampleMatrixAndOrigin} = await req.json();

    try {
        const data = await prisma.microbiologigo_assays.findMany({
            where: {
                system_id: Number(id),
                sampleMatrixAndOrigin:sampleMatrixAndOrigin
            }
        });
    
        if ( data.length > 0) {
            const transformedData = transformApiData(data);
            return NextResponse.json(transformedData);
        } else {
            return NextResponse.json({
                message: "Neuma Analise encontarda!!"
            });
        }
    } catch (error) {
        return NextResponse.json({
            message: "Ocorreu um erro ao processar os dados"
        }, {
            status: 500
        });
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformApiData = (apiData: any[]): UnifiedData => {
    return {
      id: apiData[0].id,
      date: apiData.map((item) => item.samplingDate), // Convertendo as datas em um array
      sampleName: apiData[0].sampleMatrixAndOrigin,
      eColiPresence: apiData.map((item) => parseInt(item.eColiPresence, 10)), // Convertendo string para number
      totalColiformsPresence: apiData.map((item) => parseInt(item.totalColiformsPresence, 10)),
      heterotrophicBacteriaCount: apiData.map((item) => parseInt(item.heterotrophicBacteriaCount, 10)),
      endotoxins: apiData.map((item) => parseInt(item.endotoxins, 10)),
      system_id: apiData[0].system_id,
    };
  };