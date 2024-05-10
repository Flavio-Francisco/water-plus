import { ParametersDB } from "@/utils/models/WaterParametersModel";
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

export interface Production {
    permeate: number | undefined;
    reject: number | undefined;
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
            let totalPercentage = 0;
            let totalDifference = 0;

            data.forEach(item => {
                if (item.SalinityRejectionRate1 && item.SalinityRejectionRate2) {
                    totalPercentage += (item.SalinityRejectionRate1 / item.SalinityRejectionRate2) * 100;
                    totalDifference += item.SalinityRejectionRate1 - item.SalinityRejectionRate2;
                }
            });

            const percentage = ((totalPercentage / (totalPercentage + totalDifference)) * 100).toFixed(2);
            const difference = ((totalDifference / (totalPercentage + totalDifference)) * 100).toFixed(2);

            return NextResponse.json({
                percentage: parseInt(percentage),
                difference: parseInt(difference)
            });
        } else {
            return NextResponse.json({
                message: "Dados não encontrados"
            },
            {
                status: 404
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
