"use client";
import React, { useState } from "react";
import Batery from "../batery";
import Logo from "@/app/logo.jpg";
import { Props } from "@/utils/models/Data";
import GraficLineAnimed from "../graficLineAnimed";
import Image from "next/image";
import { useUserContext } from "@/context/userContext";
import { GetBatery } from "@/app/fecth/batery";
import { useQuery } from "@tanstack/react-query";
import { GetDataFull } from "@/app/fecth/dataform";
import { useDataFull } from "@/context/userDataFull";
import getObjects from "@/utils/functions/getObject";
import { GetAnnual } from "@/app/fecth/annual";
import { GetAnalys } from "@/app/fecth/analys";



const HomeBody: React.FC = () => {
  const { user } = useUserContext();
  const { getDataFull, getProduction, getAnalys } = useDataFull();
  const { data: production } = useQuery({
    queryKey: ["annual"],
    queryFn: () => {
      if (user) {
        return GetAnnual(user.system_id || 0);
      } else {
        return null;
      }
    },
  });
  const { data } = useQuery({
    queryKey: ["batery"],
    queryFn: () => {
      if (user) {
        return GetBatery(user.system_id || 0);
      } else {
        return null;
      }
    },
  });
  const { data: analys } = useQuery({
    queryKey: ["analys"],
    queryFn: () => {
      if (user) {
        return GetAnalys(user.system_id || 0);
      } else {
        return null;
      }
    },
  });
  console.log(" analys", analys);

  const { data: dataFull } = useQuery({
    queryKey: ["dataFull"],
    queryFn: () => GetDataFull(user?.system_id || null),
  });
  if (data != null) {
    localStorage.setItem("DataFull", JSON.stringify(data));
  }
  getAnalys(analys);
  getDataFull(dataFull);
  getProduction(production);

  const Abrandador = getObjects(dataFull, "Pressão de Entrada do Abrandador")!;
  const Zeolica = getObjects(dataFull, "Pressão de Entrada Multimídia")!;
  const Carvao = getObjects(dataFull, "Pressão de Entrada de Carvão")!;
  const [selectData, setSelectData] = useState<Props>(Abrandador);
  const dataSelect = async (grafic: string) => {
    switch (grafic) {
      case "abrandador":
        setSelectData(Abrandador);
        break;
      case "zeolita":
        await setSelectData(Zeolica);
        break;
      case "carvao":
        await setSelectData(Carvao);
        break;
      case "img":
        return <Image src={Logo} alt={"logo"} />;
      default:
        return <Image src={Logo} alt={"logo"} />;
    }
  };

  return (
    <div className=" mx-auto px-4 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className=" bg-white rounded-lg p-3 shadow-md md:top-10 md:right-20">
          <div className="flex flex-row md:flex-row justify-center gap-4">
            <div
              className="flex flex-col items-center"
              onClick={() => dataSelect("zeolita")}
            >
              <p className="text-center">Zeolita</p>
              <Batery chargeLevel={data?.sand} />
            </div>
            <div
              className="flex flex-col items-center"
              onClick={() => dataSelect("abrandador")}
            >
              <p className="text-center">Abrandador</p>
              <Batery chargeLevel={data?.resin} />
            </div>
            <div
              className="flex flex-col items-center"
              onClick={() => dataSelect("carvao")}
            >
              <p className="text-center">Carvão</p>
              <Batery chargeLevel={data?.coal} />
            </div>
          </div>
        </div>

        <div className=" bg-white rounded-lg  shadow-md w-full">
          {selectData?.title === "img" ? (
            <div className="flex justify-center items-center">
              <Image priority={true} src={Logo} alt={"logo"} />
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <GraficLineAnimed
                day={selectData?.day}
                title={selectData?.title}
                data={selectData?.data}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
