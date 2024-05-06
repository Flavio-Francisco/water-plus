"use client";
import React, { useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

interface Props {
  title: string | undefined;
  day?: number[] | undefined;
  data?: number[] | undefined;
}

const GraficLineAnimed = ({ title, data, day }: Props) => {
  useEffect(() => {
    console.log("coco");
  }, [data, day]);
  return (
    <div className="">
      <div className="w-full sm:w-2/4 md:w-1/2 lg:w-1/3 ">
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
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default GraficLineAnimed;
