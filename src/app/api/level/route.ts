
import { NextRequest, NextResponse } from "next/server";






export async function POST(req: NextRequest) {
    const url = new URL(req.nextUrl.href);
    const id = url.searchParams.get("id");
    
    try {
   
      if (id ==="1") {
        return NextResponse.json(req.json()); 
      }

        
    } catch (error) {
        return NextResponse.json({
            message: "erro ao registrar"
        },
        {
            status: 500
        });
    }
}
