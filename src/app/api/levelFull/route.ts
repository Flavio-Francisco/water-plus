import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";


const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Ou especifique um domínio, por exemplo, 'https://example.com'
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};

export async function GET(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get("id");

  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { headers: corsHeaders });
  }

  try {
    const levels = await prisma.level.findMany({
      where: {
        system_id: Number(id),
        id: {
          not: 4
        }
      },
      orderBy: {
        id: 'desc'  // Ordenar por ID, assumindo que IDs maiores foram criados mais recentemente
      },
      take: 5
    });
    return NextResponse.json(levels, { headers: corsHeaders });
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



