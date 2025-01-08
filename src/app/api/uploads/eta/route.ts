import { NextResponse } from "next/server";
import prisma from "../../../../../lib/db";
import { supabase } from "../../../../../lib/supabase";



export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const system_id = formData.get("system_id") as string;

    if (!file) {
      return new Response(
        JSON.stringify({ error: "Arquivo não encontrado" }),
        { status: 400 }
      );
    }

    // Sanitizar o nome do arquivo
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");

    const filePath = `${system_id}/${sanitizedFileName}`;

    // Upload para o Supabase Storage
    const {  error } = await supabase.storage
      .from("reservoir-eta")
      .upload(filePath, file, { upsert: true });

    if (error) {
      throw error;
    }

    // Salva no banco de dados usando Prisma
    const savedFile = await prisma.file.create({
      data: {
        name: sanitizedFileName,
        path: filePath,
        system_id: Number(system_id),
      },
    });

    return new Response(
      JSON.stringify({ message: "Arquivo salvo!", file: savedFile }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao salvar arquivo:", error);
    return new Response(
      JSON.stringify({ error: String(error) }),
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    // Extrai o `system_id` da query string
    const { searchParams } = new URL(req.url);
    const system_id = searchParams.get("system_id");

    if (!system_id) {
      return NextResponse.json({ error: "O parâmetro 'system_id' é obrigatório." }, { status: 400 });
    }

    // Lista os arquivos no bucket do Supabase
    const { data, error } = await supabase.storage
      .from("reservoir-eta") // Nome do bucket
      .list(`${system_id}`, {
        limit: 100, // Limite de arquivos retornados
      });

    if (error) {
      console.error("Erro ao listar arquivos:", error.message);
      return NextResponse.json({ error: "Erro ao listar arquivos." }, { status: 500 });
    }

    // Filtra apenas os arquivos com extensão .pdf
    const pdfFiles = data?.filter((file) => file.name.endsWith(".pdf")) || [];

    return NextResponse.json({ files: pdfFiles });
  } catch (error) {
    console.error("Erro ao listar arquivos:", error);
    return NextResponse.json({ error: "Erro interno ao listar arquivos." }, { status: 500 });
  }
}