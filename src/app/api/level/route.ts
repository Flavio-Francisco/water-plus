
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    
    try {
      // Espera pela resolução da promise retornada por req.json()
      const jsonData = await req.json();
      console.log(jsonData);
      
      // Verifica se 'id' é igual a "1"
      if (id === "1") {
        return NextResponse.json(jsonData,{status:200});
      } else {
        return NextResponse.json({
          message: "ID não reconhecido",
          id: id
        },
          {
          status:200
        });
      }
      
    } catch (error) {
      return NextResponse.json({
        message: "Erro ao processar requisição",
        error: error
      },
      {
        status: 500
      });
    }
  }
  
  
