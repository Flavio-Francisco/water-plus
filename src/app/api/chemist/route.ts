
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";
import {CredentialsChemist} from "@/utils/models/Credentials";


export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
  
    try {
        const data = await prisma.chemical.findMany({
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
    const { Chemist }: CredentialsChemist = await req.json();

    try {
        const data= await prisma.chemical.create({
            data: {
                CRM: Chemist.CRQ,
                graduation: Chemist.graduation,
                name: Chemist.name,
                postGraduation: Chemist.postGraduation,
                postGraduation2: Chemist.postGraduation2,
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
    const { Chemist }: CredentialsChemist = await req.json();
    try {
        const data = await prisma.chemical.update({
            
            where: {

                id: 1,
                system_id:Number(id)
            },
            data: {
                CRM: Chemist.CRQ,
                graduation: Chemist.graduation,
                name: Chemist.name,
                postGraduation: Chemist.postGraduation,
                postGraduation2: Chemist.postGraduation2,
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

