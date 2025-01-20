import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import { Machines } from "@/components/reportDiasafe";
import { formatDateResevatorir } from "@/utils/functions/FormateDate";


export async function GET(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get("id");

  try {
    const uniqueMachines = await prisma.acid.groupBy({
      by: ["machine"], // Agrupa pelo campo `machine`
      where: {
        system_id: Number(id),
      },
      _max: {
        date: true,
       id:true
      },
   
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lastRecord = uniqueMachines.map((record: { machine: any; _max: { date: any; id: any}; }) => ({
      system_id: id,
      machine: record.machine,
      date: record._max.date,
      id: record._max.id
    })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    

    return NextResponse.json(lastRecord);
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao registrar" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get("id");
  const requestData:Machines = await req.json();
  

  
  try {
    const data = await prisma.acid.upsert({
     where: {
              machine: requestData.machine,
            },
            update: {
              date: formatDateResevatorir(new Date(requestData.date)),
              system_id: Number(id) || null,
            },
            create: {
              date: formatDateResevatorir(new Date(requestData.date)),
              machine: requestData.machine,
              system_id: Number(id) || null,
            },
    } );

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
export async function POST(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get("id");
  const requestData:Machines = await req.json();
  

  
  try {
    const data = await prisma.acid.create({
           data: {
              date: formatDateResevatorir(new Date(requestData.date)),
              machine: requestData.machine,
              system_id: Number(id) || null,
            },
    } );

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