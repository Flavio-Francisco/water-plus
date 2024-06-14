import { ParametersDB, WaterTreatmentParameters } from "@/utils/models/WaterParametersModel";
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

interface Props {
    title: string;
    day: number[];
    data: (number | null)[];
}

interface TempFieldData {
    date: Date;
    fieldData: (number | null)[];
}

export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");

    try {
        const data: ParametersDB[] = await prisma.parameters.findMany({
            where: {
                system_id: Number(id)
            }
        });

        if (data && data.length > 0) {
            const fields: Props[] = [];

            // Mapeamento de títulos em inglês para português
            const titleTranslations: Record<string, string> = {
                id: "ID",
                TotalChlorine: "Cloro Total",
                FreeChlorine: "Cloro Livre",
                ph: "pH",
                SoftenerHardness: "Dureza",
                MultimediaFilterInputPressure: "Multimídia",
                SoftenerInputPressure: " Abrandador",
                CarbonInputPressure: "Entrada de Carvão",
                CarbonOutputPressure: " Saída de Carvão",
                ROInputPressure1: " Entrada 1º Passo",
                ROInputPressure2: "Entrada  2º Passo",
                MembraneInputPressure1: "E. Menbrana  1º Passo",
                MembraneInputPressure2: "E. Menbrana  2º Passo",
                RejectPressur1: "Rejeito 1º Passo",
                RejectPressur2: "Rejeito 2º Passo",
                ROInputConductivity1: "C. Entrada 1º Passo",
                ROInputConductivity2: "C. Entrada 2º Passo",
                ROOutputConductivity1: "C.Saída 1º Passo",
                ROOutputConductivity2: "C. Saída 2º Passo",
                SalinityRejectionRate1: "R. Salina 1º Passo",
                SalinityRejectionRate2: "R. Salina 2º Passo",
                PermeateFlowRate1: "Permeado 1º Passo",
                PermeateFlowRate2: "Permeado 2º Passo",
                RejectFlowRate1: "Rejeito 1º Passo",
                RejectFlowRate2: "Rejeito 2º Passo",
                OutputPressure: "Saída Looping",
                ReturnPressure: "Retorno Looping",
                Conductivity: "C. Looping",
                system_id: "ID do Sistema"
            };

            // Obtém todos os campos disponíveis na interface ParametersDB
            const fieldNames = Object.keys(data[0]) as (keyof ParametersDB)[];

            // Remove campos irrelevantes ou não numéricos
            const numericFields = fieldNames.filter(fieldName => typeof data[0][fieldName] === 'number');

            // Processa cada campo numérico
            const tempFieldDataArray: TempFieldData[] = [];

            // Iterar sobre os dados e organizar por data
          // Iterar sobre os dados e organizar por data
for (const item of data) {
    if (item.date != null) {
        const date = new Date(item.date);
        date.setUTCHours(0, 0, 0, 0); // Definir hora para meia-noite no fuso horário UTC
        const existingData = tempFieldDataArray.find(tempData => tempData.date.getTime() === date.getTime());
        if (existingData) {
            // Adiciona ao objeto existente se a data já existir na matriz temporária
            for (const field of numericFields) {
                existingData.fieldData.push(parseNumericValue(item[field])); // Corrigindo aqui
            }
        } else {
            // Cria um novo objeto para a nova data
            const newFieldData: (number | null)[] = [];
            for (const field of numericFields) {
                newFieldData.push(parseNumericValue(item[field])); // Corrigindo aqui
            }
            tempFieldDataArray.push({
                date: date,
                fieldData: newFieldData
            });
        }
    }
}

            
            // Agora, vamos ordenar o array temporário com base nas datas
            tempFieldDataArray.sort((a, b) => a.date.getTime() - b.date.getTime());
            
            // Agora, iteramos sobre numericFields e montamos os dados organizados
            for (const field of numericFields) {
                const day: number[] = [];
                const fieldData: (number | null)[] = [];
            
                // Itera sobre a matriz temporária ordenada e monta os dados correspondentes para o campo atual
                for (const tempData of tempFieldDataArray) {
                    day.push(tempData.date.getDate());
                    fieldData.push(tempData.fieldData.shift() || 0); // Remove o primeiro elemento da matriz fieldData e adiciona ao fieldData do campo atual
                }
            
                fields.push({
                    title: titleTranslations[field as string] || String(field),
                    day: day,
                    data: fieldData
                });
            }
            return NextResponse.json(fields);
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

// Função para converter os valores para number ou null
function parseNumericValue(value: string | number | boolean | Date | null): number | null {
  
    if (value === null) {
        return 0;
    }
    if (typeof value === 'string' || typeof value === 'boolean' || value instanceof Date) {
        return null;
    } else if (value === 0 ) { // Se o valor for zero ou falso, retorne 0
        return 0;
    } else {
        return value;
    }
}


export async function POST(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    const parameters: WaterTreatmentParameters = await req.json()

    console.log(parameters);
    
    try {
        const data = await prisma.parameters.create({
            data: {
                Color: parameters.WATER_FEED.Color || '',
                CarbonDisplayTime: parameters.PRE_TREATMENT.CarbonDisplayTime,
                CarbonInputPressure: parameters.PRE_TREATMENT.CarbonInputPressure,
                CarbonOutputPressure: parameters.PRE_TREATMENT.CarbonOutputPressure,
                Conductivity: parameters.LOOP.Conductivity,
                FreeChlorine: parameters.WATER_FEED.FreeChlorine,
                MembraneInputPressure1: parameters.REVERSE_OSMOSIS_1ST_STEP.MembraneInputPressure,
                MembraneInputPressure2: parameters.REVERSE_OSMOSIS_2ND_STEP.MembraneInputPressure,
                MultimediaFilterDisplayTime: parameters.PRE_TREATMENT.MultimediaFilterDisplayTime,
                MultimediaFilterInputPressure: parameters.PRE_TREATMENT.MultimediaFilterInputPressure,
                Odor: parameters.WATER_FEED.Odor,
                OutputPressure: parameters.LOOP.OutputPressure,
                OzoneTestBefore1stShift: parameters.LOOP.OzoneTestBefore1stShift,
                PermeateFlowRate1: parameters.REVERSE_OSMOSIS_1ST_STEP.PermeateFlowRate,
                PermeateFlowRate2: parameters.REVERSE_OSMOSIS_2ND_STEP.PermeateFlowRate,
                ph: parameters.WATER_FEED.pH,
                RejectFlowRate1: parameters.REVERSE_OSMOSIS_1ST_STEP.RejectFlowRate,
                RejectFlowRate2: parameters.REVERSE_OSMOSIS_2ND_STEP.RejectFlowRate,
                RejectPressur1: parameters.REVERSE_OSMOSIS_1ST_STEP.RejectPressure,
                RejectPressur2: parameters.REVERSE_OSMOSIS_2ND_STEP.RejectPressure,
                ReturnPressure: parameters.LOOP.ReturnPressure,
                ROInputConductivity1: parameters.REVERSE_OSMOSIS_1ST_STEP.ROInputConductivity,
                ROInputConductivity2: parameters.REVERSE_OSMOSIS_2ND_STEP.ROOutputConductivity,
                ROInputPressure1: parameters.REVERSE_OSMOSIS_1ST_STEP.ROInputPressure,
                ROInputPressure2: parameters.REVERSE_OSMOSIS_2ND_STEP.ROInputPressure,
                ROOutputConductivity1: parameters.REVERSE_OSMOSIS_1ST_STEP.ROOutputConductivity,
                ROOutputConductivity2: parameters.REVERSE_OSMOSIS_2ND_STEP.ROOutputConductivity,
                SalinityRejectionRate1: parameters.REVERSE_OSMOSIS_1ST_STEP.SalinityRejectionRate,
                SalinityRejectionRate2: parameters.REVERSE_OSMOSIS_2ND_STEP.SalinityRejectionRate,
                SaltReservoirLevel: parameters.PRE_TREATMENT.SaltReservoirLevel,
                SoftenerDisplayTime: parameters.PRE_TREATMENT.SoftenerDisplayTime,
                SoftenerHardness: parameters.PRE_TREATMENT.SoftenerHardness,
                SoftenerInputPressure: parameters.PRE_TREATMENT.SoftenerInputPressure,
                Taste: parameters.WATER_FEED.Taste,
                TotalChlorine: parameters.WATER_FEED.TotalChlorine,
                Turbidity: parameters.WATER_FEED.Turbidity,
                system_id: Number(id)
            
            
            }
         
     
        });
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({
     message:"Erro ao salvar dados"
        },
            {
                status:500
            }
        )
    
    
    }
}