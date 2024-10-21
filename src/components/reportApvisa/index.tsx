"use client"
import { getAnalysis, getAnalysisApevisa } from "@/app/fecth/apevisa";
import { useUserContext } from "@/context/userContext";
import { formatDate } from "@/utils/functions/FormateDate";
import { ApvisaModel } from "@/utils/models/Apvisa";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Table } from "react-bootstrap";

interface NameDate {
  name: string;
  date: string;
}

const translatedLabels: { [key in keyof ApvisaModel]: string } = {
  date: "Data",
  name: "Ponto de Coleta",
  cianoBacteria: "Cianobactérias",
  escherichaColi: "Escherichia Coli",
  endotoxin: "Endotoxina",
  heterotrophic: "Heterotróficos",
  totalColiforms: "Coliformes Totais",
  seedingInDepth: "Semeadura em Profundidade",
  seedingOnSurface: "Semeadura na Superfície",
  conductivity: "Condutividade",
  freeChlorine: "Cloro Livre",
  pH: "pH",
  potentiometry: "Potenciometria",
};

const ReportApevisa: React.FC = () => {
  const selected: NameDate | null = { date: "", name: "" };
  const [selectedReport, setSelectedReport] = useState<ApvisaModel | null>(
    null
  );
  const { user } = useUserContext();
  const { data } = useQuery<NameDate[]>({
    queryKey: ["NameDate"],
    queryFn: () => getAnalysisApevisa(user?.system_id || 0),
  });

  const { mutate } = useMutation({
    mutationKey: ["updateAnalys"],
    mutationFn: (point: NameDate) => getAnalysis(user?.system_id || 0, point),
    onSuccess(response) {
      console.log(response);

      setSelectedReport(response);
    },
  });

  const handleReportSelection = (selectedReport: NameDate | undefined) => {
    if (selectedReport) {
      mutate(selectedReport);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Resultado Coleta Apevisa
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          height: 50,
          marginBottom: 40,
        }}
      >
        <div className="w-10/12 h-full flex justify-center items-center">
          <FormControl fullWidth sx={{ m: 1, width: "90%" }}>
            <InputLabel id="demo-simple-select-label">
              Selecione um relatório:
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selected?.name || ""}
              label="Selecione um relatório:"
              onChange={(e) => {
                const selectedReport = data?.find(
                  (report) => report.name === e.target.value
                ); // Buscar apenas o objeto selecionado
                handleReportSelection(selectedReport); // Passar o objeto para a função
              }}
            >
              {data?.map((report, index) => (
                <MenuItem key={index} value={report.name}>
                  Ponto: {report.name} &nbsp;&nbsp;|&nbsp;&nbsp; Data:{" "}
                  {report.date}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      {selectedReport && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
              marginBottom: 30,
            }}
          >
            <h3 style={{ fontWeight: "bold" }}>
              Detalhes do Relatório: {selectedReport.name}
            </h3>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: "50%", textAlign: "center" }}>Parâmetro</th>
                <th style={{ width: "50%", textAlign: "center" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(selectedReport).map(
                ([parameter, status], index) => {
                  // Verifica se o parâmetro atual não é 'id' ou 'system_id'
                  if (parameter !== "id" && parameter !== "system_id") {
                    let valorExibido = status;

                    // Verifica se o parâmetro é um campo de data
                    if (parameter === "date") {
                      valorExibido = formatDate(new Date(status)); // Supondo que formatarData é a sua função de formatação de data
                    }

                    return (
                      <tr key={index}>
                        <td style={{ width: "50%", textAlign: "center" }}>
                          {translatedLabels[parameter as keyof ApvisaModel]}
                        </td>
                        <td style={{ width: "50%", textAlign: "center" }}>
                          {valorExibido}
                        </td>
                      </tr>
                    );
                  } else {
                    return null;
                  }
                }
              )}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ReportApevisa;


