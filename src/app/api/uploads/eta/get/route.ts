import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../../../../lib/supabase";


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get("file");
  const system_id = searchParams.get("system_id");

  // Verifica se os parâmetros necessários foram fornecidos
  if (!fileName || !system_id) {
    return NextResponse.json(
      { error: "Parâmetros 'file' e 'system_id' são obrigatórios" },
      { status: 400 }
    );
  }

  try {
    // Construindo o caminho do arquivo com base no system_id e nome do arquivo
    const filePath = `${system_id}/${fileName}`;

    // Busca o arquivo no Supabase Storage
    const { data, error } = await supabase.storage
      .from("reservoir-eta") // Nome do bucket
      .download(filePath); // Caminho completo do arquivo no bucket

    if (error || !data) {
      console.error("Erro ao buscar arquivo:", error?.message);
      return NextResponse.json({ error: "Arquivo não encontrado" }, { status: 404 });
    }

    // Retorna o arquivo como resposta
    const fileContent = await data.arrayBuffer(); // Converte o arquivo em ArrayBuffer
    return new NextResponse(Buffer.from(fileContent), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error("Erro ao buscar arquivo:", error);
    return NextResponse.json({ error: "Erro ao buscar o arquivo" }, { status: 500 });
  }
}

