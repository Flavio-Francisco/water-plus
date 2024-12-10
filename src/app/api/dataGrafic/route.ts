import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

const fieldTranslations: { [key: string]: string } = {
    Color: "Cor",
    Turbidity: "Turbidez",
    Taste: "Sabor",
    Odor: "Odor",
    TotalChlorine: "Cloro Total",
    FreeChlorine: "Cloro Livre",
    ph: "pH",
    SoftenerHardness: "Dureza do Abrandador",
    MultimediaFilterInputPressure: "Pressão do Multimeios",
    SoftenerInputPressure: "Pressão do Abrandador",
    CarbonInputPressure: "Pressão do Carvão",
    CarbonOutputPressure: "Pressão de S. do Carvão",
    MultimediaFilterDisplayTime: "Hora do Multimeios",
    SoftenerDisplayTime: "Hora do Abrandador",
    CarbonDisplayTime: "Hora do Carvão",
    // SaltReservoirLevel: "Nível do Sal",
    ROInputPressure1: "Pressão de E. 1º Passo",
    ROInputPressure2: "Pressão de E. 2º Passo",
    MembraneInputPressure1: "P. Membrana 1º Passo",
    MembraneInputPressure2: "P. Membrana 2º Passo",
    RejectPressur1: "P. de Rejeito 1º Passo",
    RejectPressur2: "P. de Rejeito 2º Passo",
    ROInputConductivity1: "Condutividade de E. 1º Passo",
    ROInputConductivity2: "Condutividade de E. 2º Passo",
    ROOutputConductivity1: "Condutividade de S. 1º Passo",
    ROOutputConductivity2: "Condutividade de S. 2º Passo",
    SalinityRejectionRate1: "R. Salinidade 1º Passo",
    SalinityRejectionRate2: "R. 2º Passo",
    PermeateFlowRate1: "Permeado 1º Passo",
    PermeateFlowRate2: "Permeado 2º Passo",
    RejectFlowRate1: "Rejeito 1º Passo",
    RejectFlowRate2: "Rejeição 2º Passo",
    OutputPressure: "Pressão de Saída",
    ReturnPressure: "Pressão de Retorno",
    OzoneTestBefore1stShift: "Teste de Ozônio ",
    Conductivity: "Condutividade",
};

export interface Props {
    title: string | undefined;
    day?: number[];
    data?: number[];
}

export async function POST(req: NextRequest) {
   
    const { id, fieldName } = await req.json(); // Lê o ID e o nome do campo do corpo da requisição

    // Inverte o dicionário para obter o nome do campo original
    const fieldNameEN = Object.keys(fieldTranslations).find(key => fieldTranslations[key] === fieldName);
    
    if (!fieldNameEN) {
        return NextResponse.json({ message: "Campo não encontrado" }, { status: 404 });
    }

    try {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const data = await prisma.parameters.findMany({
            where: {
                system_id: Number(id),
                date: {
                    gte: thirtyDaysAgo,
                },
            },
            select: {
                date: true,
                [fieldNameEN]: true, 
            },
        });

        if (data.length > 0) {
            // Converte os dados no formato requerido
            const result: Props = {
                title: fieldTranslations[fieldNameEN], // Título traduzido
                day: data.map(d => new Date(d.date).getDate()), // Dias em timestamp
                data: data.map(d => d[fieldNameEN]), // Valores dos campos
            };

            return NextResponse.json(result);
        } else {
            return NextResponse.json({ message: "Nenhum dado encontrado para os últimos 30 dias." });
        }
    } catch (error) {
        return NextResponse.json(
            {
                message: "Erro ao buscar dados",
            },
            {
                status: 500,
            }
        );
    }
}
