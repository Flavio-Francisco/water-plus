"use client";
import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useQuery } from "@tanstack/react-query";
import { GetPercentage } from "@/app/fecth/percentage";
import { useUserContext } from "@/context/userContext";
import { CircularProgress, useMediaQuery } from "@mui/material";

export default function GraficPizzaRegection() {
  const { user } = useUserContext();
  const {
    data: percentage,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["percentage"],
    queryFn: () => {
      if (user) {
        return GetPercentage(user.system_id || 0);
      } else {
        return null; // Ou outra ação adequada caso user seja null
      }
    },
  });
  console.log(percentage);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  if (isError) {
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-center">Erro ao carregar dados</h1>
    </div>;
  }
  if (percentage === undefined) {
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-center">Erro ao carregar dados</h1>
    </div>;
  }

  const data = [
    {
      id: 0,
      value: percentage?.percentage,
      ...(isSmallScreen === true ? {} : { label: "Permeado" }),
    },
    {
      id: 1,
      value: percentage?.difference,
      ...(isSmallScreen === true ? {} : { label: "Rejeito" }),
    },
  ];
  const size = {
    width: isSmallScreen === true ? 350 : 400, // Alterado para 100% para ocupar toda a largura do contêiner pai
    height: isSmallScreen === true ? 175 : 200,
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-48 max-sm:mt-8 ">
      {isLoading ? (
        <div className="flex justify-center items-center w-full">
          <CircularProgress size={100} />
        </div>
      ) : (
        <>
          <h3 className="text-left text-lg mb-2">Taxa de rejeição salina</h3>
          <div className="flex justify-center items-center max-sm:mx-auto">
            <div className=" bg-white w-full   max-sm:w-3/4 ">
              {/* Adicionado contêiner responsivo */}
              <PieChart
                colors={["rgba(25,118,210,255)", "#dc3545"]}
                series={[
                  {
                    arcLabel: (item) => `${item.value}%`,
                    arcLabelMinAngle: 45,
                    data,
                    highlightScope: { faded: "global", highlighted: "item" },
                    faded: {
                      innerRadius: 30,
                      additionalRadius: -30,
                      color: "gray",
                    },
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: "white",
                    fontWeight: "bold",
                    fontSize: 12,
                  },
                }}
                {...size}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
