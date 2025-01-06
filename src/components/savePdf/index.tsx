import React, { useState } from "react";
import { CircularProgress, IconButton } from "@mui/material";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useMutation } from "@tanstack/react-query";
import { handleFileUpload } from "@/app/fecth/uploads";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
const SavePdf = () => {
  const [selectedFile, setSelectedFile] =
    useState<React.ChangeEvent<HTMLInputElement> | null>(null);
  const { mutate, isPending } = useMutation({
    mutationKey: ["savePdf"],
    mutationFn: handleFileUpload,
    onSuccess: () => {
      setSelectedFile(null);
    },
    onError: () => {
      setSelectedFile(null);
    },
  });
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event);
    }
  };

  const handleFileSave = () => {
    if (!selectedFile) {
      return;
    }
    mutate(selectedFile);
  };

  return (
    <div>
      <input
        type="file"
        accept=".pdf"
        id="file-upload"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <label
        htmlFor="file-upload"
        style={{ display: selectedFile ? "none" : "" }}
      >
        <IconButton color="primary" component="span" title="selecione pdf">
          <DriveFolderUploadOutlinedIcon sx={{ fontSize: 30 }} color="action" />
        </IconButton>
      </label>
      {selectedFile && (
        <div>
          <button
            onClick={handleFileSave}
            disabled={isPending}
            className="hover:bg-slate-300 p-2 rounded-full"
          >
            {isPending ? (
              <div className="flex justify-center items-center">
                <CircularProgress />
              </div>
            ) : (
              <SaveOutlinedIcon sx={{ fontSize: 30 }} color="action" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default SavePdf;
