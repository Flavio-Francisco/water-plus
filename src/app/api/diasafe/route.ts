
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";


interface Event {
    date: string;
    machine: string;
  }

export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
  
    try {
        const data = await prisma.diasefe.findMany({
            where: {

                system_id:Number(id)
            }
        })

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({
            message: "erro ao registrar"
        },
        {
            status: 500
        });
    }
}

export async function POST(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    const requestData = await req.json();
    
    // Extrair os eventos a partir dos dados recebidos
    const events: Event[] = [];
    for (let i = 0; i <= 10; i++) {
      const dateKey = i === 0 ? 'data' : `data${i}`;
      const machineKey = i === 0 ? 'numeroMaquina' : `numeroMaquina${i}`;
      if (requestData[dateKey] && requestData[machineKey]) {
        events.push({
          date: requestData[dateKey],
          machine: requestData[machineKey]
        });
      }
    }
    
    try {
      const data = await prisma.$transaction(
        events.map((event) => 
          prisma.diasefe.upsert({
            where: { machine: event.machine },
            update: { date: event.date },
            create: {
              date: event.date,
              machine: event.machine,
              system_id: Number(id)
            }
          })
        )
      );
  
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json(
        {
          message: "erro ao registrar"
        },
        {
          status: 500
        }
      );
    }
  }