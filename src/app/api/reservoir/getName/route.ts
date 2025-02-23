import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/db";

export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
  
    try {
        const data = await prisma.reservoir_analysis.findMany({
            where: {
                system_id: Number(id)
            },
            select: {
                sampleMatrixAndOrigin: true
            }
        });

        // Removendo duplicatas com filter
        const uniqueNames = data
            .map(item => item.sampleMatrixAndOrigin)
            .filter((value, index, self) => value && self.indexOf(value) === index);

        return NextResponse.json(uniqueNames);
    } catch (error) {
        return NextResponse.json({
            message: "Erro ao buscar dados!"
        }, {
            status: 500
        });
    }
}



export async function POST(req: NextRequest) {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    const { sampleMatrixAndOrigin } = await req.json();
  
    // Data de 12 meses atrás
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);
  
    try {
      const data = await prisma.reservoir_analysis.findMany({
        where: {
          system_id: Number(id),
          sampleMatrixAndOrigin: sampleMatrixAndOrigin,
          samplingDate: {
            gte: twelveMonthsAgo.toISOString(),
          },
        },
      });
  
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json(
        {
          message: "Erro ao buscar dados",
          error: error,
        },
        { status: 500 }
      );
    }
  }