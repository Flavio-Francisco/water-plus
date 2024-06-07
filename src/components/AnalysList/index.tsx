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
        analys?.find((a) => a.sampleName === newValue) || null;

      setSelectedAnalys(foundAnalys);
    } else {
      //ecionado for um objeto EvolutionModel, use-o diretamente
      setSelectedAnalys(newValue);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center mt-4 w-11/12  max-sm:w-[390px] max-sm:left-10 absolute">
      <div className="container w-11/12  ">
        <Autocomplete
          className="m-auto mt-5 max-md:w-4/5 w-2/5"
          value={selectedAnalys}
          onChange={handleAnalysChange}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={analys || []} // Use array vazio se `pacientData` for `undefined`
          getOptionLabel={(option) => option.sampleName || ""}
          renderInput={(params) => (
            <TextField {...params} label="Selecione o Ponto da Coleta" />
          )}
        />
        <div className="container w-full">
          {selectedAnalys && (
            <div>
              <div className="w-11/12 ">
                <GraficAnalys
                  samplingDate={selectedAnalys?.date}
                  sampleMatrixAndOrigin={selectedAnalys?.sampleName}
                  eColiPresence={selectedAnalys?.eColiPresence}
                  totalColiformsPresence={
                    selectedAnalys?.totalColiformsPresence
                  }
                  heterotrophicBacteriaCount={
                    selectedAnalys?.heterotrophicBacteriaCount
                  }
                  endotoxins={selectedAnalys?.endotoxins}
                  system_id={selectedAnalys?.system_id || 0}
                />
              </div>
              <div className=" w-11/12">
                <ListAnalys
                  samplingDate={selectedAnalys?.date}
                  sampleMatrixAndOrigin={selectedAnalys?.sampleName}
                  eColiPresence={selectedAnalys?.eColiPresence}
                  totalColiformsPresence={
                    selectedAnalys?.totalColiformsPresence
                  }
                  heterotrophicBacteriaCount={
                    selectedAnalys?.heterotrophicBacteriaCount
                  }
                  endotoxins={selectedAnalys?.endotoxins}
                  system_id={selectedAnalys?.system_id || 0}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
