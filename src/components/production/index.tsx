"use client";
import React from "react";
import GraficProduction from "@/components/graficProtution";
import Line from "@/components/line";
import ListParametsProduction from "@/components/listParametensProduction";

import CardProduction from "./CardPoduction";
import CardModal from "./CardPoduction/CardModal";
import { ordeData } from "@/utils/functions/ordeData";
import { useQuery } from "@tanstack/react-query";
import { useUserContext } from "@/context/userContext";
import { GetAnnual } from "@/app/fecth/annual";
import Loader from "../loader/page";

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
  const { user } = useUserContext();
  const { data: production } = useQuery({
    queryKey: ["annual", user?.system_id],
    queryFn: () => GetAnnual(user?.system_id || 0),
  });

  const data = production != null ? ordeData(production) : production;

  return (
    <div className=" flex flex-col justify-center items-center mt-4 w-11/12  max-sm:w-[390px] max-sm:left-10 absolute">
      <div className="w-full flex flex-row gap-3">
        <div className=" w-full flex justify-center items-center">
          <h1 className="text-center mt-8 mb-8 text-3xl font-bold max-sm:text-2xl">
            Dados de Produção
          </h1>
        </div>

        <div className="right-5 absolute">
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

      {data === undefined ? (
        <div className="justify-center  h-56 gap-3">
          <h3 className="text-center mt-8 mb-8 text-2xl font-bold max-sm:text-2xl">
            Carregando...
          </h3>
          <Loader />
        </div>
      ) : (
        <>
          <Line />
          <GraficProduction data={data?.data} title={""} day={data?.day} />
          <div className="w-100">
            <ListParametsProduction
              data={data?.data}
              title={""}
              day={data?.day}
            />
            <Line />
          </div>
        </>
      )}
    </div>
  );
}
