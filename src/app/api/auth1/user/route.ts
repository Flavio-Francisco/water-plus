import { UserModel } from "@/utils/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/db";

export async function GET(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");

    try {
        const data: UserModel[]  = await prisma.user.findMany({
            where: {
            
                system_id:Number(id)
                
            },
            select: {
                id:true,
                system_id:true,
                name: true,
                password: true,
                adm:true
                
            }
        })

      return  NextResponse.json(data)
    } catch (error) {
        return  NextResponse.json({
            message:"Usuário não encontado"
        },
            {
            status:500
        })
    }

}

export async function PATCH(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    const user: UserModel = await req.json();

    try {
        const data = await prisma.user.update({
            
            where: {

                id: Number(id)
                
            },
            data: {
                
                name: user.name,
                adm: user.adm,
                password: user.password,              
                system_id:user.system_id
            
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

export async function POST(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    const user: UserModel = await req.json();

    try {
        const data = await prisma.user.create({
            
            data: {
                
                name: user.name,
                adm: user.adm,
                password: user.password,              
                system_id: Number(id)      
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
