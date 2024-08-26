import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import { format } from 'date-fns';

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

    // Encontra o primeiro registro que corresponde ao critério
    const level = await prisma.level.findFirstOrThrow({
      where: {
        id:4,
        pointName: data.pointName,
        system_id: Number(id),
      },
      select: {
        id: true,
        level: true,
        pointName: true,
        hourly: true
      },
      orderBy: {
        id: 'asc', // Ordena pelo campo "id" em ordem crescente
      },
    });

    // Log para verificar o valor de hourly
    console.log('Raw Hourly Value:', level.hourly);

    let adjustedHourly: string | null = null;

    if (level.hourly) {
      try {
        // Converte a string de hora para um objeto Date com a data fictícia para manipulação
        const [hours, minutes] = level.hourly.split(':').map(Number);
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(0);
        date.setMilliseconds(0);

        // Subtrai 3 horas e formata a nova hora
        date.setHours(date.getHours() - 3);
        adjustedHourly = format(date, 'HH:mm');
      } catch (error) {
        console.error('Error adjusting hourly:', error);
        adjustedHourly = null; // Define como null se não puder processar
      }
    }

    // Retorna o registro ajustado
    return NextResponse.json({
      ...level,
      hourly: adjustedHourly
    }, { headers: corsHeaders });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({
      message: "Erro ao processar requisição",
     
    }, {
      status: 500,
      headers: corsHeaders
    });
  }
}
