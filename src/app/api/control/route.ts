import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export interface Control{
  id?: number,
  or1: boolean;   
  or2: boolean;   
  system: boolean;
  start: boolean; 
  start2: boolean; 
  start1: boolean; 
  lowPressureOr1: boolean;
  lowPressureOr2: boolean;
  pumpOr1: boolean;
  pumpOr2: boolean;
  conductivityOr1: boolean;
  conductivityOr2: boolean;
  loopingPump1: boolean;
  loopingPump2: boolean;
  criticalLevel: boolean;
  off: boolean;
  state: boolean;
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
              start2: true,
              conductivityOr1: true,
              conductivityOr2: true,
              loopingPump1: true,
              loopingPump2: true,
              criticalLevel: true,
              lowPressureOr1: true,
              lowPressureOr2: true,
              pumpOr1: true,
              pumpOr2: true,             
              off: true,
              id: true,
              id_system: true,
              state:true
              
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
    const control = await prisma.control.update({

      where: {
        id: data.id,
        id_system:Number(data.id_system)
      },
        data: {
            id_system: data.id_system,
            or1: data.or1,
            or2: data.or2,
            start: data.start,
            start1: data.start1,
            start2: data.start2,
            system: data.system,
            conductivityOr1: data.conductivityOr1,
            conductivityOr2: data.conductivityOr2,
            loopingPump1: data.loopingPump1,
            loopingPump2: data.loopingPump2,
            criticalLevel: data.criticalLevel,
            lowPressureOr1: data.lowPressureOr1,
            lowPressureOr2: data.lowPressureOr2,
            pumpOr1: data.pumpOr1,
            pumpOr2: data.pumpOr2,
            off: data.off,
            state: data.state,
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
              system: data.system,
              conductivityOr1: data.conductivityOr1,
              conductivityOr2: data.conductivityOr2,
              loopingPump1: data.loopingPump1,
              loopingPump2: data.loopingPump2,
              criticalLevel: data.criticalLevel,
              lowPressureOr1: data.lowPressureOr1,
              lowPressureOr2: data.lowPressureOr2,
              pumpOr1: data.pumpOr1,
              pumpOr2: data.pumpOr2,
              off: data.off,
              state: data.state,
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