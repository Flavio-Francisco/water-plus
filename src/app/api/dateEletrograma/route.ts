import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

const monthMap: { [key: string]: number } = {
    "janeiro": 1,
    "fevereiro": 2,
    "março": 3,
    "abril": 4,
    "maio": 5,
    "junho": 6,
    "julho": 7,
    "agosto": 8,
    "setembro": 9,
    "outubro": 10,
    "novembro": 11,
    "dezembro": 12
};

export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");

    try {
        const data = await prisma.parameters.findMany({
            where: {
                system_id: Number(id)
            },
            select: {
                date: true,
            }
        });

        // Mapeia as datas para obter os nomes dos meses e os anos
        const monthYear = data.map(item => {
            const date = new Date(item.date||"");
            const month = date.toLocaleString('pt-BR', { month: 'long' }); // Nome do mês
            const year = date.getFullYear(); // Ano
            return `${month} ${year}`; // Concatenando mês e ano
        });

        // Remove duplicatas usando Set e converte de volta para array
        const uniqueMonthYear = Array.from(new Set(monthYear));

        return NextResponse.json(uniqueMonthYear);
    } catch (error) {
        return NextResponse.json({
            message: "dados não encontrados"
        }, {
            status: 500
        });
    }
}


export async function POST(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    
    try {
        // Recebe o JSON do corpo da requisição
        const { month } = await req.json();

        // Divide o valor da string 'outubro 2024' para separar o mês e o ano
        const [monthName, year] = month.split(" ");

        // Converte o nome do mês em número usando o map
        const monthNumber = monthMap[monthName.toLowerCase()];

        // Verifica se o mês e o ano foram passados corretamente e se o nome do mês é válido
        if (!monthNumber || !year) {
            return NextResponse.json({
                message: "Mês ou ano inválido."
            }, {
                status: 400
            });
        }

        // Busca os dados filtrando pelo system_id e pela data no mês e ano especificados
        const data = await prisma.parameters.findMany({
            where: {
                system_id: Number(id),
                date: {
                    gte: new Date(`${year}-${monthNumber}-01`),  // Data de início do mês
                    lt: new Date(`${year}-${Number(monthNumber) + 1}-01`) // Data de início do próximo mês
                }
            },
         
        });

        // Retorna os dados encontrados
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({
            message: "Erro ao buscar os dados."
        }, {
            status: 500
        });
    }
}
