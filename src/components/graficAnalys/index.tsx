"use client";

import React, { useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

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
  useEffect(() => {}, [data]);
  return (
    <div className="flex justify-center items-center w-full  max-[580px]:max-w-[550px] ">
      <div className="w-full sm:w-2/4 md:w-1/2 lg:w-4/5 ">
        <LineChart
          margin={{ left: 70, right: 70 }}
          xAxis={[
            {
              data: data.samplingDate,
              label: data.sampleMatrixAndOrigin || "",
              scaleType: "point",
              valueFormatter: (samplingDate) => samplingDate.toString(),
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
          height={300}
          sx={{
            width: "95%",
          }}
        />
      </div>
    </div>
  );
};

export default GraficAnalys;
