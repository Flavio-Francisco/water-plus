
import returnNumber, { getYear, returnPosNumber } from "@/utils/functions/returnNumber";
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

const monthMap: { [key: number]: string } = {
    0: "janeiro",
    1: "fevereiro",
    2: "março",
    3: "abril",
    4: "maio",
    5: "junho",
    6: "julho",
    7: "agosto",
    8: "setembro",
    9: "outubro",
    10: "novembro",
    11: "dezembro",
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

        const monthYear = data.map(item => {
            if (!item.date) return null;
            
            // Garante que a data será tratada como UTC
            const date = new Date(item.date.toISOString());
            const month = date.getUTCMonth(); // Obtém o mês (0-11) em UTC
            const year = date.getUTCFullYear(); // Obtém o ano em UTC
            return `${monthMap[month]} ${year}`;
        }).filter(Boolean); // Remove valores nulos/undefined

        // Remove duplicatas
        const uniqueMonthYear = Array.from(new Set(monthYear));



        return NextResponse.json(uniqueMonthYear);
    } catch (error) {
        console.error(error);
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
 

        // Divide o valor para separar o mês e o ano
        const cleanedMonth = month.trim();
        const [monthName, year] = cleanedMonth.split(" ");

  

        const monthNumber = returnNumber(monthName)
       
        

      
        if (!monthNumber) {
            return NextResponse.json({ message: "Mês inválido." }, { status: 400 });
        }


        // Busca os dados filtrando pelo system_id e pela data no mês e ano especificados
        const data = await prisma.parameters.findMany({
            where: {
                system_id: Number(id),
                date: {
                    gte: new Date(`${year}-${returnNumber(monthName)}-01`),  // Data de início do mês
                    lt: new Date(`${getYear(returnNumber(monthName)||0)}-${(returnPosNumber(monthName)||0 )}-01`) // Data de início do próximo mês
                }
            },
        });


        // Retorna os dados encontrados
        return NextResponse.json(data);
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        return NextResponse.json({ message: "Erro ao buscar os dados." }, { status: 500 });
    }
}
