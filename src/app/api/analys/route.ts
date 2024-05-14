import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";


interface Microbiological{
    id: number;
    samplingDate: string;
    sampleMatrixAndOrigin: string | null;
    eColiPresence              :string | null;
    totalColiformsPresence     :string | null;
    heterotrophicBacteriaCount: string | null;
    endotoxins:string | null;
}

export interface UnifiedData {
    samplingDate: string[];
    sampleMatrixAndOrigin: string | null;
    eColiPresence: number[];
    totalColiformsPresence: number[];
    heterotrophicBacteriaCount: number[];
    endotoxins:number[];
    system_id: number;
}


export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");

    try {
        const data = await prisma.microbiologigo_assays.findMany({
            where: {
                system_id: Number(id)
            }
        });
    
        if (data && data.length > 0) {
            const groupedData: Record<string, Microbiological[]> = {};
    
            // Agrupe os dados com base em sampleMatrixAndOrigin
            data.forEach(record => {
                const origin = record.sampleMatrixAndOrigin || 'Unknown'; // Use 'Unknown' se sampleMatrixAndOrigin for nulo
                if (!groupedData[origin]) {
                    groupedData[origin] = [];
                }
                groupedData[origin].push(record);
            });
    
            // Crie um array de objetos UnifiedData para cada grupo
            const unifiedDataArray: UnifiedData[] = [];
            for (const origin in groupedData) {
                const group = groupedData[origin];
                const unifiedData: UnifiedData = {
                    samplingDate: [],
                    sampleMatrixAndOrigin: origin,
                    eColiPresence: [],
                    totalColiformsPresence: [],
                    heterotrophicBacteriaCount: [],
                    endotoxins: [],
                    system_id: 0 // Assume que é o mesmo para todos os registros
                };
    
                // Preencha os arrays de dados unificados
                group.forEach(record => {
                    unifiedData.samplingDate.push(record.samplingDate);
                    unifiedData.eColiPresence.push(Number(record.eColiPresence || 0));
                    unifiedData.totalColiformsPresence.push(Number(record.totalColiformsPresence || 0));
                    unifiedData.heterotrophicBacteriaCount.push(Number(record.heterotrophicBacteriaCount || 0));
                    unifiedData.endotoxins.push(Number(record.endotoxins || 0));
                });
    
                unifiedDataArray.push(unifiedData);
            }
    
            return NextResponse.json(unifiedDataArray);
        } else {
            return NextResponse.json({
                message: "Nenhum dado encontrado para o sistema com ID fornecido"
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
