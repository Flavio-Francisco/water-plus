
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";

interface Level{
  id?: number;
  level: number;
  system: string
  
}
 

export async function GET(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get("id");
  
  try {
    const level = await prisma.level.findMany(
      {
        where:
        {
        
          system_id:Number(id)
        }
      })
      return NextResponse.json(level);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({
        message: "Erro ao processar requisição",
        error: error
    }, {
        status: 500
    });
  }

}
export async function POST(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get("id");
  
  try {
      const data: Level = await req.json();
      console.log('Received Data:', data);
      console.log('Parsed System ID:', Number(id));
      
      if (!id || isNaN(Number(id))) {
          throw new Error("ID inválido");
      }
      
      const level = await prisma.level.create({
          data: {
              level: data.level,
              system_id: Number(id)
          }
      });
      
      return NextResponse.json(level);
  } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({
          message: "Erro ao processar requisição",
          error: error
      }, {
          status: 500
      });
  }
}

export async function PATCH(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get("id");
  
  try {
 
    const data:Level = await req.json();


    const level = await prisma.level.update({
        
      where: {
        id:data.id,
        system_id: Number(id)
      },

      data: {
        level:data.level
      }
     
      });
      
      return NextResponse.json(level);
  } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({
          message: "Erro ao processar requisição",
          error: error
      }, {
          status: 500
      });
  }
}

export async function DELETE(req: NextRequest) {
  const url = new URL(req.nextUrl.href);
  const id = url.searchParams.get("id");
  type DataId = Pick<Level, 'id'>;
  const data:DataId  = await req.json();
  try {
    const level = await prisma.level.delete(
      {
        where:
        {
          id: data.id,
          system_id:Number(id)
        }
      })
      return NextResponse.json(level);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({
        message: "Erro ao processar requisição",
        error: error
    }, {
        status: 500
    });
  }

}