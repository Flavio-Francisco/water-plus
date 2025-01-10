"use client";

import React, { useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { formatDateGrafic } from "@/utils/functions/FormateDate";

interface UnifiedData {
  samplingDate: string[];
  sampleMatrixAndOrigin: string | null;
  eColiPresence: number[];
  totalColiformsPresence: number[];
  heterotrophicBacteriaCount: number[];
  endotoxins: number[];
  system_id: number;
}
const GraficAnalys = (data: UnifiedData) => {
  useEffect(() => {
    console.log(formatDateGrafic(new Date(data.samplingDate[0])));
    console.log(data.samplingDate[0]);
  }, [data]);
  const customize = {
    legend: { hidden: true },
    stackingOrder: "descending",
  };
  return (
    <div className="conteiner  h-full ">
      <h1 className="text-center mt-4 mb-2 text-lg font-bold">
        {data.sampleMatrixAndOrigin}
      </h1>
      <LineChart
        topAxis={{
          labelStyle: {
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: 250,
            padding: 2,
            backgroundColor: "red",
          },
        }}
        margin={{ left: 30, right: 30, top: 80 }}
        xAxis={[
          {
            data: data.samplingDate,

            scaleType: "point",
            valueFormatter: (samplingDate) =>
              formatDateGrafic(new Date(samplingDate.toString())),
          },
        ]}
        series={[
          {
            label: "Bactérias heterotróficas",
            data: data.heterotrophicBacteriaCount,
          },
          {
            label: "Escherichia coli",
            data: data.eColiPresence,
          },
          {
            label: "Colifomes Totais",
            data: data.totalColiformsPresence,
          },
          {
            label: "Endotoxinas",
            data: data.endotoxins,
          },
        ]}
        grid={{ vertical: true, horizontal: true }}
        height={400}
        sx={{
          width: "120%",
        }}
        {...customize}
      />
    </div>
  );
};

export default GraficAnalys;
