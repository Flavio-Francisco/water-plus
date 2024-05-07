"use client";
import React, { useState } from "react";
import Batery from "../batery";
import Logo from "@/app/logo.jpg";
import {
  dataAbrandador,
  dataZeolica,
  dataCarvao,
  Props,
} from "@/utils/models/Data";
import GraficLineAnimed from "../graficLineAnimed";
import Image from "next/image";

// Defina o tipo para as props do componente GraficLineAnimed

// Componente HomeBody
const HomeBody: React.FC = () => {
  const [selectData, setSelectData] = useState<Props>(dataAbrandador);

  // Função para selecionar os dados do gráfico
  const dataSelect = async (grafic: string) => {
    switch (grafic) {
      case "abrandador":
        await setSelectData(dataAbrandador);
        break;
      case "zeolita":
        await setSelectData(dataZeolica);
        break;
      case "carvao":
        await setSelectData(dataCarvao);
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
              <Batery chargeLevel={100} />
            </div>
            <div
              className="flex flex-col items-center"
              onClick={() => dataSelect("abrandador")}
            >
              <p className="text-center">Abrandador</p>
              <Batery chargeLevel={70} />
            </div>
            <div
              className="flex flex-col items-center"
              onClick={() => dataSelect("carvao")}
            >
              <p className="text-center">Carvão</p>
              <Batery chargeLevel={60} />
            </div>
          </div>
        </div>

        <div className=" bg-white rounded-lg  shadow-md w-full">
          {selectData.title === "img" ? (
            <div className="flex justify-center items-center">
              <Image priority={true} src={Logo} alt={"logo"} />
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <GraficLineAnimed
                day={selectData.day}
                title={selectData.title}
                data={selectData.data}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
