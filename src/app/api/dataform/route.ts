import { ParametersDB } from "@/utils/models/WaterParametersModel";
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

interface Props {
    title: string;
    day: number[];
    data: (number | null)[];
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
                SoftenerHardness: "Dureza do Abrandador",
                MultimediaFilterInputPressure: "Pressão de Entrada Multimídia",
                SoftenerInputPressure: "Pressão de Entrada do Abrandador",
                CarbonInputPressure: "Pressão de Entrada de Carvão",
                CarbonOutputPressure: "Pressão de Saída de Carvão",
                ROInputPressure1: "Pressão de Entrada 1º Passo",
                ROInputPressure2: "Pressão de Entrada  2º Passo",
                MembraneInputPressure1: "Pressão de E. Menbrana  1º Passo",
                MembraneInputPressure2: "Pressão de E. Menbrana  2º Passo",
                RejectPressur1: "Pressão de Rejeito 1º Passo",
                RejectPressur2: "Pressão de Rejeito 2º Passo",
                ROInputConductivity1: "Condutividade de Entrada 1º Passo",
                ROInputConductivity2: "Condutividade de Entrada 2º Passo",
                ROOutputConductivity1: "Condutividade de Saída 1º Passo",
                ROOutputConductivity2: "Condutividade de Saída 2º Passo",
                SalinityRejectionRate1: "Taxa de Rejeição de Salina 1º Passo",
                SalinityRejectionRate2: "Taxa de Rejeição de Salina 2º Passo",
                PermeateFlowRate1: "Fluxo de Permeado 1º Passo",
                PermeateFlowRate2: "Fluxo de Permeado 2º Passo",
                RejectFlowRate1: "Fluxo de Rejeito 1º Passo",
                RejectFlowRate2: "Fluxo de Rejeito 2º Passo",
                OutputPressure: "Pressão de Saída Looping",
                ReturnPressure: "Pressão de Retorno Looping",
                Conductivity: "Condutividade Looping",
                system_id: "ID do Sistema"
            };

            // Obtém todos os campos disponíveis na interface ParametersDB
            const fieldNames = Object.keys(data[0]) as (keyof ParametersDB)[];

            // Remove campos irrelevantes ou não numéricos
            const numericFields = fieldNames.filter(fieldName => typeof data[0][fieldName] === 'number');

            // Processa cada campo numérico
            for (const field of numericFields) {
                const day: number[] = [];
                const fieldData: (number | null)[] = [];

                for (const item of data) {
                    if (item.date != null) {
                        const date = new Date(item.date);
                        day.push(date.getDate()); // Obtem apenas o dia da data
                        fieldData.push(parseNumericValue(item[field])); 
                    }
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
    if (typeof value === 'string' || typeof value === 'boolean' || value instanceof Date) {
        return null;
    } else {
        return value;
    }
}
