import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import { format } from "date-fns";
interface Level {
  id?: string;
  level: string;
  system: string;
}

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
    const level = await prisma.level.findMany({
      where: {
        system_id: Number(id)
      }
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
    const currentTime = format(new Date(), 'HH:mm');
    const level = await prisma.level.create({
      data: {
        level: Number(data.level),
        hourly:currentTime,
        system_id: Number(id)
      }
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

export async function PATCH(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get("id");

  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { headers: corsHeaders });
  }

  try {
    const data: Level = await req.json();

    const level = await prisma.level.update({
      where: {
        id: Number(data.id),
        system_id: Number(id)
      },
      data: {
        level: Number(data.level)
      }
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

export async function DELETE(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get("id");
  type DataId = Pick<Level, 'id'>;
  const data: DataId = await req.json();

  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { headers: corsHeaders });
  }

  try {
    const level = await prisma.level.delete({
      where: {
        id: Number(data.id),
        system_id: Number(id)
      }
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
