"use client";

import * as React from "react";
import TextField from "@mui/material/TextField";

import { UnifiedData } from "@/app/api/analys/route";
import { Autocomplete, CircularProgress } from "@mui/material";
import GraficAnalys from "../graficAnalys";
import ListAnalys from "../listAnalys";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetAnalys, GetAnalysPoint } from "@/app/fecth/analys";
import { useUserContext } from "@/context/userContext";

export default function AnalysisReservoirList() {
  const { user } = useUserContext();
  const [selectedAnalys, setSelectedAnalys] =
    React.useState<UnifiedData | null>(null);
  const { mutate, isPending } = useMutation({
    mutationKey: ["updateAnalys"],
    mutationFn: (point: string) => GetAnalys(user?.system_id || 0, point),
    onSuccess(response) {
      setSelectedAnalys(response);
    },
  });

  const { data: analys, isLoading } = useQuery<string[]>({
    queryKey: ["analys"],
    queryFn: () => GetAnalysPoint(user?.system_id || 0),
  });

  return (
    <div className=" flex flex-col justify-center items-center mt-4 w-11/12  max-sm:w-[390px] max-sm:left-10 absolute">
      <div className="container w-11/12  ">
        <Autocomplete
          className="m-auto mt-5 max-md:w-4/5 w-2/5"
          onChange={(event, value) => {
            if (value) {
              mutate(value);
            } else {
              console.log("Nenhum ponto de coleta selecionado");
            }
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={analys || []}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Selecione o Ponto da Coleta"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isLoading ? <CircularProgress size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
        <div className="container w-full">
          {selectedAnalys && (
            <div>
              {isPending ? (
                <div className="flex justify-center items-center h-96">
                  <CircularProgress size="8rem" />
                </div>
              ) : (
                <>
                  {" "}
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
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
