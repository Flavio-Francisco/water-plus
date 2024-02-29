"use client";
import React from "react";

import { Chart } from "react-google-charts";

export interface Props {
  title: string | null;
  subtitle: string | null;
  data?: object | unknown[] | undefined;
}
export interface PropsArry {
  data?: object | unknown[] | undefined;
}

const GraficProduction = ({ title, data, subtitle }: Props) => {
  const options = {
    title: `Grafico de Parametros  \n ${title}`,
    subtitle: subtitle,
    vAxis: { title: "Lts por min" },
    hAxis: { title: "Dias" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chart
        chartType="ComboChart"
        data={data}
        width="100%"
        height="400px"
        legendToggle
        options={options}
      />
    </div>
  );
};

export default GraficProduction;
