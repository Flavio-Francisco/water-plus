"use client";
import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";


export default function GraficPizzaProduction() {
  
  const permeado = 14;
  const rejeito = 3;

  const data = [
    { id: 0, value: permeado, label: "Permeado" },
    { id: 1, value: rejeito, label: "Rejeito" },
  ];
  const size = {
    width: 400, // Alterado para 100% para ocupar toda a largura do contêiner pai
    height: 200,
  };
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h3 className="text-left">Dados de Produção</h3>
      <div className="w-full md:w-3/4 lg:w-1/2">
        {/* Adicionado contêiner responsivo */}
        <PieChart
          colors={["#1114cf", "#dc3545"]}
          series={[
            {
              arcLabel: (item) => `${item.value} LPM`,
              arcLabelMinAngle: 45,
              data: data,
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
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
  );
}
