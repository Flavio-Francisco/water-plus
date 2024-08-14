import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";

interface Point{
  pointName:string
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Ou especifique um domínio, por exemplo, 'https://example.com'
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};

export async function POST(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get("id");
  const { pointName }:Point= await req.json();

  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { headers: corsHeaders });
  }
console.log(pointName);

  try {
    const levels = await prisma.level.findMany({
      where: {
        system_id: Number(id),
        pointName: pointName,
     
      },
      orderBy: {
        id: 'desc'  // Ordenar por ID, assumindo que IDs maiores foram criados mais recentemente
      },
      take: 5
    });
console.log(levels );

    // Subtrair 3 horas do horário
    const adjustedLevels = levels.map(level => {
      const date = new Date(`1970-01-01T${level.hourly}:00Z`); // Assume que a hora está no formato HH:mm
      date.setHours(date.getHours() - 3);
      
      return {
        ...level,
        hourly: date.toISOString().substring(11, 16) // Extrai apenas o horário no formato HH:mm
      };
    });

    return NextResponse.json(adjustedLevels, { headers: corsHeaders });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({
      message: "Erro ao processar requisição",
      error: error
    }, {
      status: 500,
      headers: corsHeaders
    });
  }
}


