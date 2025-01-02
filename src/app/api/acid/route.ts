

import { Machines } from "@/components/reportDiasafe";
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";
import { formatDateResevatorir } from "@/utils/functions/FormateDate";



export async function GET(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get("id");

  try {
     
    const lastRecord = await prisma.acid.findMany({
      where: {
          system_id:Number(id)
        }
      });

      return NextResponse.json(lastRecord);
  } catch (error) {
      return NextResponse.json({
          message: "erro ao registrar"
      },
      {
          status: 500
      });
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