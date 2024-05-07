"use client";
import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

export default function GraficPizzaRegection() {
  const salineRejection = 97;
  const soluble = 100 - salineRejection;

  const data = [
    { id: 0, value: salineRejection, label: "Permeado" },
    { id: 1, value: soluble, label: "Rejeito" },
  ];
  const size = {
    width: 400,
    height: 200,
  };
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h3 className="text-left">Taxa de rejeição salina</h3>
      <div className="w-full md:w-3/4 lg:w-1/2">
        {/* Adicionado contêiner responsivo */}
        <PieChart
          colors={["rgba(25,118,210,255)", "#dc3545"]}
          series={[
            {
              arcLabel: (item) => `${item.value}%`,
              arcLabelMinAngle: 45,
              data,
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
