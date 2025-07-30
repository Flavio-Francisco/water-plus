import { formatDateResevatorir } from "@/utils/functions/FormateDate";
import prisma from "../../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

interface ReportDiasafe{
  id: number,
  machine: string,
  date: string,
  system_id: number,
  editable: boolean
}

export async function PATCH(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    const requestData:ReportDiasafe = await req.json();

    try {
        const data = await prisma.diasefe.upsert({
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
          });
  
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
  
export async function DELETE(req: NextRequest) {

    const {machine ,system_id}= await req.json();

    try {
        const data = await prisma.diasefe.delete({
            where: {
                machine: machine,
                system_id: Number(system_id) || null,
            },
       
          });
  
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
  
export async function GET(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const system_id = url.searchParams.get("system_id");

  try {
      const data = await prisma.diasefe.findMany({
          where: {
             
              system_id: Number(system_id) || null,
          },
        select: {
       machine:true
     }
      });

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