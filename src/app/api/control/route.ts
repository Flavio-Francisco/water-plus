import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";

interface Control{
    id?: number,
    or1: boolean;   
    or2: boolean;   
    system: boolean;
    start: boolean; 
    start2: boolean; 
    start1: boolean; 
    id_system:number
   
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Ou especifique um domínio, por exemplo, 'https://example.com'
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};




export async function GET(req: NextRequest) {
  
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
  
  
    if (req.method === 'OPTIONS') {
      return new NextResponse(null, { headers: corsHeaders });
    }
  
    try {
        const control = await prisma.control.findMany({
        
            where: {
           
              id_system:Number(id)
          },
          select: {
              or1: true,
              or2: true,
              system:true,
              start:true,
              start1: true,
              start2:true,
       }
      });
  
        
  
      return NextResponse.json(control);
    } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({
        message: "Erro ao processar requisição",
        error: error
      }, {
        status: 500,
        headers: corsHeaders
      });
    }
  }



export async function POST(req: NextRequest) {
  
  
  const data:Control = await req.json();

  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { headers: corsHeaders });
  }

  try {
    const control = await prisma.control.create({
        data: {
            id_system: data.id_system,
            or1: data.or1,
            or2: data.or2,
            start: data.start,
            start1: data.start1,
            start2: data.start2,
            system: data.system
   
     }
    });

      

    return NextResponse.json(control);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({
      message: "Erro ao processar requisição",
      error: error
    }, {
      status: 500,
      headers: corsHeaders
    });
  }
}

export async function PATCH(req: NextRequest) {
  
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    const data:Control = await req.json();
  
    if (req.method === 'OPTIONS') {
      return new NextResponse(null, { headers: corsHeaders });
    }
  
    try {
        const control = await prisma.control.update({
        
            where: {
            id:data.id,
              id_system:Number(id)
          },
          data: {
              or1: data.or1,
              or2: data.or2,
              start: data.start,
              start1: data.start1,
              start2: data.start2,
              system: data.system
       }
      });
  
        
  
      return NextResponse.json(control);
    } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({
        message: "Erro ao processar requisição",
        error: error
      }, {
        status: 500,
        headers: corsHeaders
      });
    }
  }