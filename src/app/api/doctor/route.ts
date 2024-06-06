
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";
import { Doctor} from "@/utils/models/Credentials";


export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
  
    try {
        const data = await prisma.doctor.findMany({
            where: {
                system_id:Number(id)
            }
        })

        return NextResponse.json(data[0]);
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
    const doctor : Doctor = await req.json();
    console.log(doctor);
    
    try {
        const data= await prisma.doctor.create({
            data: {
                CRM: doctor.CRM,
                graduation: doctor.graduation,
                name: doctor.name,
                postGraduation: doctor.postGraduation,
                postGraduation2: doctor.postGraduation2,
                system_id:Number(id)
            
          }

        });

      

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

export async function PATCH(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    const doctor : Doctor = await req.json();
    console.log(doctor);
    
    try {
        const data = await prisma.doctor.update({
            
            where: {

                id: 1,
                system_id:Number(id)
            },
            data: {
                CRM: doctor.CRM,
                graduation: doctor.graduation,
                name: doctor.name,
                postGraduation: doctor.postGraduation,
                postGraduation2: doctor.postGraduation2,
                system_id:Number(id)
            
          }

        });

      

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

