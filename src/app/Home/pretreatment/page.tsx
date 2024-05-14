"use client";

import Image from "next/image";

import React, { useEffect } from "react";
import { useDataFull } from "@/context/userDataFull";

import GraficAnalys from "@/components/graficAnalys";
import ListAnalys from "@/components/listAnalys";

const GraficPreTreatment = () => {
  const { analys } = useDataFull();

  useEffect(() => {
    console.log("grafico", analys);
  }, [analys]);

  return (
    <div className="container mx-auto max-[580px]:max-w-[320px]">
      <div className="mt-8 w-full">
        <h1 className="text-center mt-8 mb-8 text-3xl font-bold max-[580px]:text-lg">
          Dados das Amotras
        </h1>
      </div>

      <GraficAnalys
        samplingDate={analys?.samplingDate || []}
        sampleMatrixAndOrigin={analys?.sampleMatrixAndOrigin || ""}
        eColiPresence={analys?.eColiPresence || []}
        totalColiformsPresence={analys?.totalColiformsPresence || []}
        heterotrophicBacteriaCount={analys?.heterotrophicBacteriaCount || []}
        endotoxins={analys?.endotoxins || []}
        system_id={analys?.system_id || 0}
      />

      <div className="container ">
        <ListAnalys
          samplingDate={analys?.samplingDate || []}
          sampleMatrixAndOrigin={analys?.sampleMatrixAndOrigin || ""}
          eColiPresence={analys?.eColiPresence || []}
          totalColiformsPresence={analys?.totalColiformsPresence || []}
          heterotrophicBacteriaCount={analys?.heterotrophicBacteriaCount || []}
          endotoxins={analys?.endotoxins || []}
          system_id={analys?.system_id || 0}
        />
      </div>
    </div>
  );
};

export default GraficPreTreatment;
