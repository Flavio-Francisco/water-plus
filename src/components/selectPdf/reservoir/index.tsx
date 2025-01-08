import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import {
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
  CircularProgress,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useUserContext } from "@/context/userContext";

const FileListReservoir = () => {
  const { user } = useUserContext();
  const [files, setFiles] = useState<string[]>([]); // Lista de arquivos
  const [selectedFile, setSelectedFile] = useState<string>(""); // Arquivo selecionado
  const fetchFiles = async () => {
    try {
      // Faz a requisição GET passando o system_id como query string
      const response = await axios.get(
        `/api/uploads/reservoir?system_id=${user?.system_id}`
      );

      const files = response.data.files as Array<string>;
      if (files.length < 1) {
        alert("Ainda não há dados salvos para este sistema!");
      }

      // Atualiza o estado com os arquivos obtidos
      setFiles(files);
    } catch (error) {
      console.error("Erro ao obter arquivos:", error);
    }
  };
  const handleDownload = async (pdf: string) => {
    const fileUrl = `/api/uploads/reservoir/get?file=${pdf}&system_id=${user?.system_id}`;
    window.open(fileUrl, "_blank"); // Abre o PDF em uma nova aba
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ["uploadFile"],
    mutationFn: fetchFiles,
  });

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedFile(event.target.value);
  };
  useEffect(() => {
    if (selectedFile != "") {
      handleDownload(selectedFile);
    }
  }, [selectedFile]);
  return (
    <div className="w-full flex justify-center items-center ">
      {files.length < 1 ? (
        <div className="">
          <button
            onClick={() => mutate()}
            disabled={isPending}
            title="selecione Pdf"
          >
            {isPending ? (
              <CircularProgress size="20px" />
            ) : (
              <FindInPageOutlinedIcon color="action" sx={{ fontSize: 30 }} />
            )}
          </button>
        </div>
      ) : (
        <>
          {" "}
          <InputLabel id="file-select-label">Selecione um arquivo</InputLabel>
          <Select
            className="w-full"
            labelId="file-select-label"
            value={selectedFile}
            onChange={handleChange}
          >
            {files.map((file, index) => (
              <MenuItem key={index} value={file}>
                {file}
              </MenuItem>
            ))}
          </Select>
        </>
      )}
    </div>
  );
};
export default FileListReservoir;
