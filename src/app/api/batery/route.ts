import { ParametersDB } from "@/utils/models/WaterParametersModel";
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

export interface Batery {
    coal: number | undefined;
    sand: number | undefined;
    resin: number | undefined;
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

        if (data != null && data.length >= 2) {
            let totalMultimediaPressureDecrease = 0;
            let totalSoftenerPressureDecrease = 0;
            let totalCarbonPressureDecrease = 0;
            let count = 0;

            for (let i = 1; i < data.length; i++) {
                const initialMultimediaPressure = data[i - 1].MultimediaFilterInputPressure;
                const currentMultimediaPressure = data[i].MultimediaFilterInputPressure;
                const initialSoftenerPressure = data[i - 1].SoftenerInputPressure;
                const currentSoftenerPressure = data[i].SoftenerInputPressure;
                const initialCarbonPressure = data[i - 1].CarbonOutputPressure;
                const currentCarbonPressure = data[i].CarbonOutputPressure;

                if (initialMultimediaPressure != null && currentMultimediaPressure != null &&
                    initialSoftenerPressure != null && currentSoftenerPressure != null &&
                    initialCarbonPressure != null && currentCarbonPressure != null) {

                    const multimediaPressureDecrease = ((initialMultimediaPressure - currentMultimediaPressure) / initialMultimediaPressure) * 100;
                    const softenerPressureDecrease = ((initialSoftenerPressure - currentSoftenerPressure) / initialSoftenerPressure) * 100;
                    const carbonPressureDecrease = ((initialCarbonPressure - currentCarbonPressure) / initialCarbonPressure) * 100;

                    totalMultimediaPressureDecrease += multimediaPressureDecrease;
                    totalSoftenerPressureDecrease += softenerPressureDecrease;
                    totalCarbonPressureDecrease += carbonPressureDecrease;
                    count++;
                }
            }

            if (count > 0) {
                const averageMultimediaPressureDecrease = totalMultimediaPressureDecrease / count;
                const averageSoftenerPressureDecrease = totalSoftenerPressureDecrease / count;
                const averageCarbonPressureDecrease = totalCarbonPressureDecrease / count;

                const remainingMultimediaPressurePercentage = 100 - averageMultimediaPressureDecrease;
                const remainingSoftenerPressurePercentage = 100 - averageSoftenerPressureDecrease;
                const remainingCarbonPressurePercentage = 100 - averageCarbonPressureDecrease;
                const batery: Batery= {
                    sand: parseInt(remainingMultimediaPressurePercentage.toFixed(0)),
                    resin: parseInt(remainingSoftenerPressurePercentage.toFixed(0)),
                    coal:parseInt(remainingCarbonPressurePercentage.toFixed(0))
                }
                return NextResponse.json(batery);
            } else {
                return NextResponse.json({
                    message: "Não foi possível calcular a diminuição da pressão dos componentes"
                },
                {
                    status: 404
                });
            }
        } else {
            return NextResponse.json({
                message: "Não há dados suficientes para calcular a diminuição da pressão dos componentes"
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
