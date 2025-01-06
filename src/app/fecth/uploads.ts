import axios from "axios";

export async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
  if (event.target.files && event.target.files[0]) {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);

    try {
      const response = await axios.post("/api/uploads/reservoir", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Define o tipo do conteúdo
        },
      });

      if (response.status === 200) {
        alert(`Arquivo salvo em análise do Reservatório`);
      } else {
        alert("Erro ao salvar o arquivo.");
      }
    } catch (error) {
      console.error("Erro ao fazer o upload do arquivo:", error);
      alert("Erro ao fazer o upload do arquivo.");
    }
  }
}

export async function handleFileUploadEta(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
  
      try {
        const response = await axios.post("/api/uploads/eta", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Define o tipo do conteúdo
          },
        });
  
        if (response.status === 200) {
          alert(`Arquivo salvo em dados de análise`);
        } else {
          alert("Erro ao salvar o arquivo.");
        }
      } catch (error) {
        console.error("Erro ao fazer o upload do arquivo:", error);
        alert("Erro ao fazer o upload do arquivo.");
      }
    }
  }

