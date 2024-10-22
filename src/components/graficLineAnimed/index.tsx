"use client";
import React, { useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Image from "next/image";
import Logo from "../../app/logo-Transparente.png";

interface Props {
  title: string | undefined;
  day?: number[] | undefined;
  data?: number[] | undefined;
}

const GraficLineAnimed = ({ title, data, day }: Props) => {
  useEffect(() => {
    console.log(day);
  }, [data, day]);


  return (
    <div className="w-full">
      {data === null || data === undefined ? (
        <div className=" mt-12 flex justify-center items-center ">
          <Image priority src={Logo} alt="Logo" height={75} width={150} />
        </div>
      ) : (
        <div className=" mb-4 w-full">
          <LineChart
            margin={{ left: 40, right: 70 }}
            xAxis={[
              {
                id: "day",
                data: day === undefined ? [1, 2, 3] : day,
                scaleType: "point",
                valueFormatter: (day) => day.toString(),
                label: title,
              },
            ]}
            series={[
              {
                data: data === undefined ? [1, 2, 3] : data,
              },
            ]}
            grid={{ vertical: true, horizontal: true }}
            colors={["rgba(25,118,210,255)"]}
            width={500}
            height={250}
          />
        </div>
      )}
    </div>
  );
};

export default GraficLineAnimed;
