import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get("file");

  if (!fileName) {
    return NextResponse.json({ error: "Nome do arquivo não fornecido" }, { status: 400 });
  }

  try {
    // Caminho completo do arquivo
    const filePath = path.join(process.cwd(), "uploads", "eta", fileName);

    // Lê o arquivo
    const fileContent = await fs.readFile(filePath);

    // Retorna o conteúdo do arquivo
    return new NextResponse(fileContent, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${fileName}"`,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Arquivo não encontrado" }, { status: 404 });
  }
}

