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
    <div className="conteiner mt-5 h-full">
      <hr />
      <LineChart
        topAxis={{
          label: data.sampleMatrixAndOrigin || "",
          labelStyle: {
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 150,
            padding: 10,
          },
        }}
        margin={{ left: 30, right: 30, top: 100 }}
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
      <hr />
    </div>
  );
};

export default GraficAnalys;
