import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";


export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const system_id = formData.get("system_id") as string;

  if (!file) {
    return NextResponse.json({ error: "Arquivo não encontrado" }, { status: 400 });
  }

  if (!system_id) {
    return NextResponse.json({ error: "ID do sistema não fornecido" }, { status: 400 });
  }

  // Define o caminho onde o arquivo será salvo
  const uploadsDir = path.join(process.cwd(), `uploads/reservoir/${system_id}`);

  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true }); // recursive garante que todas as subpastas sejam criadas
  }

  const filePath = path.join(uploadsDir, file.name);

  // Converte o ArrayBuffer para Uint8Array
  const buffer = Buffer.from(await file.arrayBuffer());
  const uint8Array = new Uint8Array(buffer);

  // Escreve o arquivo no sistema
  fs.writeFileSync(filePath, uint8Array);

  return NextResponse.json({ message: "Arquivo salvo no servidor!", filePath });
}


export async function GET(req: Request) {
  const system_id = req.json();
  try {
    // Caminho para a pasta 'uploads'
    const uploadsDir = path.join(process.cwd(), `uploads/reservoir/${system_id}`);

    // Verifica se a pasta 'uploads' existe
    if (!fs.existsSync(uploadsDir)) {
      return NextResponse.json({ error: "A pasta de uploads não existe." }, { status: 404 });
    }

    // Lê os arquivos da pasta 'uploads'
    const files = fs.readdirSync(uploadsDir);

    // Retorna a lista de arquivos
    return NextResponse.json({ files });
  } catch (error) {
    console.error("Erro ao listar arquivos:", error);
    return NextResponse.json({ error: "Erro ao listar arquivos." }, { status: 500 });
  }
}
