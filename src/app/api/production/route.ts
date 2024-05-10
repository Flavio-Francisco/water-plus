
import { ParametersDB } from "@/utils/models/WaterParametersModel";
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

export interface Poduction{
    permeate: number;
    reject:number
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

        if (data != null && data.length >= 1) {
            let totalPermeateFlowRate2 = 0;
            let totalRejectFlowRate1 = 0;

            // Loop através de cada objeto ParametersDB no array data
            for (const item of data) {
                // Verifica se os campos não são nulos antes de adicionar à soma
                if (item.PermeateFlowRate2 != null) {
                    totalPermeateFlowRate2 += item.PermeateFlowRate2;
                }
                if (item.RejectFlowRate1 != null) {
                    totalRejectFlowRate1 += item.RejectFlowRate1;
                }
            }

            // Calcula a média dividindo pela quantidade de itens no array
            const mediaPermeate = totalPermeateFlowRate2 / data.length;
            const mediaReject = totalRejectFlowRate1 / data.length;

            // Arredonda os números para duas casas decimais
            const roundedPermeate = mediaPermeate.toFixed(0);
            const roundedReject = mediaReject.toFixed(0);

            const poduction: Poduction = {
                permeate: Number(roundedPermeate), // Converte para número
                reject: Number(roundedReject) // Converte para número
            };

            console.log("Média de PermeateFlowRate2:", roundedPermeate);
            console.log("Média de RejectFlowRate1:", roundedReject);

            return NextResponse.json(poduction);
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({
            message: "dados não encontrados"
        },
        {
            status: 500
        });
    }
}