import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");

    // Defina os campos que deseja sempre retornar, mesmo que não haja dados
    const defaultFields = {
        sampleMatrixAndOrigin: true
    };

    try {
        const data = await prisma.microbiologigo_assays.findMany({
            where: {
                system_id: Number(id)
            },
            select: defaultFields
        });

        // Se não houver dados, retornar apenas os nomes dos campos
        if (data.length === 0) {
            const fieldNames = Object.keys(defaultFields); // Retorna os nomes dos campos
            return NextResponse.json({
                fields: fieldNames,
                message: "Nenhum dado encontrado para o sistema"
            });
        }

        // Elimina duplicatas de `sampleMatrixAndOrigin`
        const uniqueData = Array.from(new Set(data.map(item => item.sampleMatrixAndOrigin)));

        // Retorna os dados únicos
        return NextResponse.json(uniqueData);
        
    } catch (error) {
        return NextResponse.json({
            message: "Ocorreu um erro ao processar os dados"
        }, {
            status: 500
        });
    }
}
