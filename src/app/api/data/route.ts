
import { ParametersDB } from "@/utils/models/WaterParametersModel";
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

export interface Props {
    title: string;
    day?: number[] ;
    data?: number[] ;
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