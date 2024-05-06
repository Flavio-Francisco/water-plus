"use client";

import React, { useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

interface Props {
  title: string | undefined;
  day?: number[] | undefined;
  data?: number[] | undefined;
}
const GraficFilter = ({ title, data, day }: Props) => {
  useEffect(() => {
    console.log("coco");
  }, [data, day]);
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full sm:w-2/4 md:w-1/2 lg:w-4/5 ">
        <LineChart
          margin={{ left: 70, right: 70 }}
          xAxis={[{ data: day, label: title }]}
          series={[
            {
              data: data,
            },
          ]}
          grid={{ vertical: true, horizontal: true }}
          colors={["#1114cf"]}
          //width={1200}
          height={400}
          sx={{
            width: "95%",
          }}
        />
      </div>
    </div>
  );
};
export default GraficFilter;
