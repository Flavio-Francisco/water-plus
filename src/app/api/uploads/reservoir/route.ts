import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/db";
import { supabase } from "../../../../../lib/supabase";



export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const system_id = formData.get("system_id") as string;

    if (!file) {
      return new Response(JSON.stringify({ error: "Arquivo não encontrado" }), { status: 400 });
    }

    const filePath = `${system_id}/${file.name}`;

    // Upload para o Supabase Storage
    const { data, error } = await supabase.storage
      .from("reservoir-uploads")
      .upload(filePath, file, { upsert: true });

    if (error) {
      throw error;
    }
console.log(data);

    // Salva no banco de dados usando Prisma
    const savedFile = await prisma.file.create({
      data: {
        name: file.name,
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
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    // Obtém o system_id da query string
    const { searchParams } = new URL(request.url);
    const system_id = searchParams.get("system_id");

    if (!system_id) {
      return NextResponse.json({ error: "system_id não fornecido" }, { status: 400 });
    }

    // Acessa o bucket para listar os arquivos filtrando pelo system_id
    const { data, error } = await supabase.storage
      .from("reservoir-files") // Nome do seu bucket
      .list(`${system_id}/`, { limit: 100 }); // Filtra os arquivos pelo system_id no caminho

    if (error) {
      console.error("Erro ao listar arquivos:", error.message);
      return NextResponse.json({ error: "Erro ao listar arquivos." }, { status: 500 });
    }

    // Retorna a lista de arquivos encontrados
    return NextResponse.json({ files: data.map((file) => file.name) });
  } catch (error) {
    console.error("Erro ao listar arquivos:", error);
    return NextResponse.json({ error: "Erro ao listar arquivos." }, { status: 500 });
  }
}