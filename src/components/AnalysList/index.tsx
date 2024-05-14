"use client";

import * as React from "react";
import TextField from "@mui/material/TextField";

import { UnifiedData } from "@/app/api/analys/route";
import { Autocomplete } from "@mui/material";
import { useDataFull } from "@/context/userDataFull";
import GraficAnalys from "../graficAnalys";
import ListAnalys from "../listAnalys";

export default function AnalysList() {
  const { analys } = useDataFull();
  const [selectedAnalys, setSelectedAnalys] =
    React.useState<UnifiedData | null>(null);

  const handleAnalysChange = (
    event: React.ChangeEvent<object>,
    newValue: string | UnifiedData | null
  ) => {
    if (typeof newValue === "string") {
      // Se o valor selecionado for uma string (nome do paciente), encontre o paciente correspondente nos dados falsos
      const foundAnalys =
        analys?.find((a) => a.sampleMatrixAndOrigin === newValue) || null;

      setSelectedAnalys(foundAnalys);
    } else {
      //ecionado for um objeto EvolutionModel, use-o diretamente
      setSelectedAnalys(newValue);
    }
  };

  return (
    <>
      <div className="container ">
        <Autocomplete
          className="m-auto mt-2.5 md:w-2/6 max-md:w-4/5"
          value={selectedAnalys}
          onChange={handleAnalysChange}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={analys || []} // Use array vazio se `pacientData` for `undefined`
          getOptionLabel={(option) => option.sampleMatrixAndOrigin || ""}
          renderInput={(params) => (
            <TextField {...params} label="Selecione o Ponto da Coleta" />
          )}
        />
        <div>
          {selectedAnalys && (
            <div>
              <div className="container w-full">
                <GraficAnalys
                  samplingDate={selectedAnalys?.samplingDate}
                  sampleMatrixAndOrigin={selectedAnalys?.sampleMatrixAndOrigin}
                  eColiPresence={selectedAnalys?.eColiPresence}
                  totalColiformsPresence={
                    selectedAnalys?.totalColiformsPresence
                  }
                  heterotrophicBacteriaCount={
                    selectedAnalys?.heterotrophicBacteriaCount
                  }
                  endotoxins={selectedAnalys?.endotoxins}
                  system_id={selectedAnalys?.system_id}
                />
              </div>
              <div className=" w-full">
                <ListAnalys
                  samplingDate={selectedAnalys?.samplingDate}
                  sampleMatrixAndOrigin={selectedAnalys?.sampleMatrixAndOrigin}
                  eColiPresence={selectedAnalys?.eColiPresence}
                  totalColiformsPresence={
                    selectedAnalys?.totalColiformsPresence
                  }
                  heterotrophicBacteriaCount={
                    selectedAnalys?.heterotrophicBacteriaCount
                  }
                  endotoxins={selectedAnalys?.endotoxins}
                  system_id={selectedAnalys?.system_id}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
