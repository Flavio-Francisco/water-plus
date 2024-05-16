
import prisma from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";
import {CredentialsOperator} from "@/utils/models/Credentials";


export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
  
    try {
        const data = await prisma.operator.findMany({
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
    const { operator }: CredentialsOperator = await req.json();
    console.log(operator);
    
    try {
        const data= await prisma.operator.create({
            data: {
                
                name: operator.name,
                registration:operator.registration,
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
    const { operator }: CredentialsOperator = await req.json();
    console.log(operator);
    
    
    try {
        const data = await prisma.operator.update({
            
            where: {

                id: operator.id,
                system_id:Number(id)
            },
            data: {
                
                name: operator.name,
                registration:operator.registration,
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

