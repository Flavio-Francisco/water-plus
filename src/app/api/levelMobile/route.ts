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
    const data:Level = await req.json();
    console.log('Received Data:', data);
    console.log('Parsed System ID:', Number(id));

    if (!id || isNaN(Number(id))) {
      throw new Error("ID inválido");
    }
  
    const level = await prisma.level.findMany({
      where: {
      
        pointName: data.pointName,
        system_id:Number(id),
      },
      select: {
        level: true,
        pointName: true,
        hourly:true
      },
      orderBy: {
        // Supondo que você tenha um campo de data/hora chamado "createdAt" para ordenação
       hourly: 'desc', // Modifique para o campo que reflete a ordem desejada
      },
      take: 5, // Limita a 5 registros
   
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


