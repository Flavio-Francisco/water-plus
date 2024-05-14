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
            const unifiedData: UnifiedData = {
                samplingDate: [],
                sampleMatrixAndOrigin: data[0].sampleMatrixAndOrigin||'', // Assume que é o mesmo para todos os registros
                eColiPresence: [],
                totalColiformsPresence: [],
                heterotrophicBacteriaCount: [],
                endotoxins:[],
                system_id: data[0].system_id ||0// Assume que é o mesmo para todos os registros
            };

                const groupedData: Record<string, Microbiological[]> = {};
                data.forEach(record => {
                    if (record.sampleMatrixAndOrigin !== null && record.eColiPresence !== null && record.totalColiformsPresence !== null && record.heterotrophicBacteriaCount !== null && record.system_id !== null ) {
                        const origin = record.sampleMatrixAndOrigin; // Não há necessidade de tratamento para null aqui
                        if (!groupedData[origin]) {
                            groupedData[origin] = [];
                        }
                        groupedData[origin].push(record);
                    }
                });


            // Para cada grupo, unifique os dados
            for (const origin in groupedData) {
                const group = groupedData[origin];
                group.forEach(record => {
                    unifiedData.samplingDate.push(record.samplingDate);
                    unifiedData.eColiPresence.push(Number(record.eColiPresence));
                    unifiedData.totalColiformsPresence.push(Number(record.totalColiformsPresence));
                    unifiedData.heterotrophicBacteriaCount.push(Number(record.heterotrophicBacteriaCount));
                    unifiedData.endotoxins.push(Number(record.endotoxins));
                });
            }

            return NextResponse.json(unifiedData);
        } else {
            return NextResponse.json({
                message: "Nenhum dado encontrado para o sistema com ID fornecido"
            });
        }
    } catch (error) {
        return NextResponse.json({
            message: "Ocorreu um erro ao processar os dados"
        },
        {
            status: 500
        });
    }
}
