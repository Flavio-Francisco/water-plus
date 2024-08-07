import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";

interface Level {
  pointName: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Ou especifique um domínio, por exemplo, 'https://example.com'
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};

export async function POST(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get("id");

  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { headers: corsHeaders });
  }

  try {
    const data: Level = await req.json();
    console.log('Received Data:', data);
    console.log('Parsed System ID:', Number(id));

    if (!id || isNaN(Number(id))) {
      throw new Error("ID inválido");
    }

    // Assumindo que "id" é o campo que você deseja ordenar
    const level = await prisma.level.findFirstOrThrow({
      where: {
        pointName: data.pointName,
        system_id: Number(id),
      },
      select: {
        id:true,
        level: true,
        pointName: true,
        hourly: true
      },
      orderBy: {
        id: 'asc', // Ordena pelo campo "id" em ordem crescente
      },
      take: 1, // Limita a 1 registro

    });

    return NextResponse.json(level, { headers: corsHeaders });
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
