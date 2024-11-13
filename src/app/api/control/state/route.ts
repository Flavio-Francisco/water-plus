import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/db";


const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Ou especifique um domínio, por exemplo, 'https://example.com'
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};




export async function GET(req: NextRequest) {
  
  
  
    if (req.method === 'OPTIONS') {
      return new NextResponse(null, { headers: corsHeaders });
    }
  
    try {
        const control = await prisma.control.findMany({
        
       
          select: {
        
              conductivityOr1: true,
              conductivityOr2: true,
              loopingPump1: true,
              loopingPump2: true,
              criticalLevel: true,
              lowPressureOr1: true,
              lowPressureOr2: true,
              pumpOr1: true,
              pumpOr2: true,                   
              id: true,
              id_system: true,
           
              
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



