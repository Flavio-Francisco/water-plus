"use client";
import React from "react";
import ButtonList from "@/components/butonTexts";
import Logo from "@/app/logo.jpg";
import Image from "next/image";
import ListParamets from "@/components/listParametens";
import { getItemByIndex } from "@/utils/models/Data";
import { useDataFull } from "@/context/userDataFull";
import GraficLineAnimedPages from "@/components/graficLineAnimedPages";
import { Props } from "@/utils/functions/getObject";
import { useState, useEffect } from "react";

const GraficPage = () => {
  const [select, setSelect] = useState<number>(100);
  const [arryData, setArryData] = useState<Props | null>(null);
  const { dataFull } = useDataFull();
  const ButtonText = (dataFull || []).map((i) => i.title);

  useEffect(() => {
    const fetchData = async () => {
      // Esperar até que dataFull não seja nulo
      if (dataFull !== null) {
        const arry = getItemByIndex(select, dataFull);
        setArryData(arry);
      }
    };
    fetchData();
  }, [select, dataFull]);
  

  return (
    <div className=" flex flex-col justify-center items-center w-11/12  max-sm:w-[300px] max-sm:left-11 absolute">
      <div className="mt-8 w-full">
        <h1 className="text-center mt-8 mb-8 text-3xl font-bold max-[580px]:text-lg max-sm:ml-20 ">
          Parâmetros
        </h1>
      </div>
      <div className=" max-sm:ml-14 w-11/12   max-sm:w-[300px]">
        <ButtonList
          buttonTexts={ButtonText}
          getBayIndex={(index) => {
            setSelect(index);
          }}
        />
      </div>
      {select === 100 ? (
        <div className="flex justify-center items-center">
          <Image src={Logo} alt="Logo" width={300} height={300} />
        </div>
      ) : (
        <div className="w-10/12 ">
          {arryData ? (
            <div className="flex justify-center items-center max-sm:ml-24">
              <p className="mt-8 text-base font-bold max-[580px]:text-lg">
                {arryData.title}
              </p>
            </div>
          ) : null}
          <hr className=" max-sm:ml-14 w-full " />
          {arryData ? (
            <div className="flex justify-center items-center max-sm:w-[360px]  ">
              <GraficLineAnimedPages
                day={arryData.day}
                title={arryData.title}
                data={arryData.data}
              />
            </div>
          ) : null}
          <hr className=" max-sm:ml-14 w-full " />
          {arryData ? (
            <div className="flex justify-center max-sm:ml-14  max-sm:w-full">
              <ListParamets data={arryData.data} day={arryData.day} />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default GraficPage;
