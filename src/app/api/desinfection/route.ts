import { DesinfectionModel } from '@/utils/models/desifection';
import prisma from '../../../../lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get('id');

  try {
    const currentDate = new Date();
    const currentDateStr = currentDate.toISOString().split('T')[0]; // Convertendo para o formato 'YYYY-MM-DD'

    const lastRecord = await prisma.desifection.findFirst({
      where: {
        system_id: Number(id),
        data1: {
          lt: currentDateStr, // Usando a string formatada como parâmetro de comparação
        },
      },
      orderBy: {
        id: 'desc', // Ordenando pelo ID em ordem decrescente
      },
    });

    return NextResponse.json(lastRecord);
  } catch (error) {
    return NextResponse.json(
      {
        message: 'erro ao registrar',
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get('id');
  const data: DesinfectionModel = await req.json();

  try {
    const desifection = await prisma.desifection.create({
      data: {
        step1: data.step1,
        step2: data.step2,
        data1: data.data1,
        data2: data.data2,
        data3: data.data3,
        loop: data.loop,
        product: data.product,
        quantity: String(data.quantity),
        system_id: Number(id),
      },
    });

    return NextResponse.json(desifection);
  } catch (error) {
    return NextResponse.json(
      {
        message: 'erro ao registrar',
      },
      {
        status: 500,
      },
    );
  }
}
