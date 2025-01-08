
import { supabase } from "../../../lib/supabase";



export async function handleFileUpload(
  event: React.ChangeEvent<HTMLInputElement>,
  system_id: number | null | undefined
) {
  if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];

    try {
      // Nome do arquivo no Supabase Storage
      const fileName = system_id
        ? `${system_id}/${file.name}`
        : `default/${file.name}`;

      // Enviar para o Supabase Storage
      const { data, error } = await supabase.storage
        .from("reservoir-files") // Nome do bucket configurado no Supabase
        .upload(fileName, file);

      if (error) {
        console.error("Erro ao fazer o upload do arquivo:", error.message);
        alert("Erro ao fazer o upload do arquivo.");
        return;
      }

      console.log("Arquivo enviado com sucesso:", data);
      alert(`Arquivo salvo com sucesso: ${data.path}`);
    } catch (error) {
      console.error("Erro inesperado ao fazer o upload do arquivo:", error);
      alert("Erro inesperado ao fazer o upload do arquivo.");
    }
  }
}



export async function handleFileUploadEta(
  event: React.ChangeEvent<HTMLInputElement>,
  system_id: number | null | undefined
) {
  if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];

    try {
      // Sanitizar o nome do arquivo
      const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");

      // Nome do arquivo no Supabase Storage
      const fileName = system_id
        ? `${system_id}/${sanitizedFileName}`
        : `default/${sanitizedFileName}`;

      // Enviar para o Supabase Storage
      const { data, error } = await supabase.storage
        .from("reservoir-eta") // Nome do bucket configurado no Supabase
        .upload(fileName, file);

      if (error) {
        console.error("Erro ao fazer o upload do arquivo:", error.message);
        alert("Erro ao fazer o upload do arquivo.");
        return;
      }

      console.log("Arquivo enviado com sucesso:", data);
      alert(`Arquivo salvo com sucesso: ${data.path}`);
    } catch (error) {
      console.error("Erro inesperado ao fazer o upload do arquivo:", error);
      alert("Erro inesperado ao fazer o upload do arquivo.");
    }
  }
}


