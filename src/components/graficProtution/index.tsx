"use client";

import React, { useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

interface Props {
  title: string | undefined;
  day?: number[] | undefined;
  data?: number[] | undefined;
}
const GraficProduction = ({ title, data, day }: Props) => {
  useEffect(() => {}, [data, day]);
  return (
    <div className="flex justify-center items-center w-full  max-[580px]:max-w-[500px] ">
      <div className="w-full sm:w-2/4 md:w-1/2 lg:w-4/5 ">
        <LineChart
          className=" max-[580px]:max-h-[130px]"
          margin={{ left: 70, right: 70 }}
          xAxis={[
            {
              data: day,
              label: title,
              scaleType: "point",
              valueFormatter: (day) => day.toString(),
            },
          ]}
          series={[
            {
              data: data,
            },
          ]}
          grid={{ vertical: true, horizontal: true }}
          colors={["rgba(25,118,210,255)"]}
          //width={1200}
          height={300}
          sx={{
            width: "95%",
          }}
        />
      </div>
    </div>
  );
};

export default GraficProduction;
