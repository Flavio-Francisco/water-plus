"use client";
import React from "react";
import GraficProduction from "@/components/graficProtution";
import Line from "@/components/line";
import { dataProducao } from "@/utils/models/Data";
import ListParametsProduction from "@/components/listParametensProduction";
import { useDataFull } from "@/context/userDataFull";
import CardProduction from "./CardPoduction";
import CardModal from "./CardPoduction/CardModal";

export interface WaterData {
  day: number[];
  data: number[];
  month: number;
  produtic: string;
  reject: string;
  AnnualAverageProdutic: number;
  AnnualAverageReject: number;
}

export default function Production() {
  const { production } = useDataFull();

  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="w-full flex flex-row gap-3">
        <div className=" w-full flex justify-center items-center">
          <h1 className="text-center mt-8 mb-8 text-3xl font-bold max-sm:text-2xl">
            Dados de Produção
          </h1>
        </div>

        <div className="right-1 absolute">
          <CardModal>
            <CardProduction
              month={production?.month}
              produtic={production?.produtic}
              reject={production?.reject}
              AnnualAverageProdutic={production?.AnnualAverageProdutic}
              AnnualAverageReject={production?.AnnualAverageReject}
            />
          </CardModal>
        </div>
      </div>

      <Line />

      <GraficProduction
        data={dataProducao.data}
        title={dataProducao.title}
        day={dataProducao.day}
      />

      <Line />

      <div className="w-100">
        <ListParametsProduction
          day={dataProducao.day}
          title={dataProducao.title}
          data={dataProducao.data}
        />
      </div>
    </div>
  );
}
