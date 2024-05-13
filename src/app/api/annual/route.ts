import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import { ParametersDB } from "@/utils/models/WaterParametersModel";

export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");

    try {
        const data: ParametersDB[] = await prisma.parameters.findMany({
            where: {
                system_id: Number(id)
            }
        });

        // Filtrar os dados para o mês atual
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();
        const filteredData = data.filter(entry => {
            const entryDate = new Date(entry.date||'');
            return entryDate.getMonth() + 1 === currentMonth && entryDate.getFullYear() === currentYear;
        });

        // Calcular as estatísticas
        const day: number[] = [];
        const dataSum: number[] = [];
        let permeateFlowSum = 0;
        let rejectFlowSum = 0;

        filteredData.forEach(entry => {
            const entryDate = new Date(entry.date||'');
            const dayOfMonth = entryDate.getDate();
            const permeateFlowRate2 = entry.PermeateFlowRate2 || 0;
            const rejectFlowRate1 = entry.RejectFlowRate1 || 0;

            // Se o dia já foi registrado, adicione aos valores existentes
            const existingIndex = day.indexOf(dayOfMonth);
            if (existingIndex !== -1) {
                dataSum[existingIndex] += permeateFlowRate2 + rejectFlowRate1;
            } else {
                day.push(dayOfMonth);
                dataSum.push(permeateFlowRate2 + rejectFlowRate1);
            }

            permeateFlowSum += permeateFlowRate2;
            rejectFlowSum += rejectFlowRate1;
        });

        // Calcular as médias anuais
        const annualAverageProdutic = permeateFlowSum;
        const annualAverageReject = rejectFlowSum;

        // Calcular as porcentagens
        const totalFlow = permeateFlowSum + rejectFlowSum;
        const produticPercentage = ((permeateFlowSum / totalFlow) * 100).toFixed(2) + "%";
        const rejectPercentage = ((rejectFlowSum / totalFlow) * 100).toFixed(2) + "%";

        // Montar o objeto de resposta
        const response = {
            day,
            data: dataSum,
            month: currentMonth,
            produtic: produticPercentage,
            reject: rejectPercentage,
            AnnualAverageProdutic: annualAverageProdutic,
            AnnualAverageReject: annualAverageReject
        };

        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({
            message: "dados não encontrados"
        },
        {
            status: 500
        });
    }
}
