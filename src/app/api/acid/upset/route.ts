

import prisma from "../../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";



  
export async function DELETE(req: NextRequest) {

    const {machine ,system_id}= await req.json();


    
    try {
        const data = await prisma.acid.delete({
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