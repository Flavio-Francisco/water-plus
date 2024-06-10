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
  const ButtonText = (dataFull?.slice(1, -1) || []).map((item) => item.title);

  useEffect(() => {
    const fetchData = async () => {
      // Esperar até que dataFull não seja nulo
      if (dataFull !== null) {
        const arry = getItemByIndex(select, dataFull?.slice(1, -1));
        setArryData(arry);
      }
    };
    fetchData();
  }, [select, dataFull]);

  return (
    <div className=" flex flex-col justify-center items-center w-10/12  max-sm:w-[300px] max-sm:left-11 absolute">
      <div className="mt-8 w-full">
        <h1 className="text-center mt-8 mb-8 text-3xl font-bold max-[580px]:text-lg max-sm:ml-20 ">
          Parâmetros
        </h1>
      </div>
      <div className=" max-sm:ml-14 w-9/12   max-sm:w-[300px]">
        <ButtonList
          buttonTexts={ButtonText}
          getBayIndex={(index) => {
            setSelect(index);
          }}
        />
      </div>
      {select === 100 ? (
        <div className="flex justify-center items-center max-sm:ml-24 mt-5">
          <Image src={Logo} alt="Logo" width={250} height={250} />
        </div>
      ) : (
        <div className="sm:w-10/12 max-sm:w-10/12 ">
          <hr className=" max-sm:ml-14 ml-10 w-full max-sm:w-10/12 " />
          <div className="m:flex sm:flex-row max-sm:flex-col">
            {arryData ? (
              <div className="flex sm:flex-row max-sm:flex-col  w-full ">
                <div className="flex justify-center flex-col items-center max-sm:w-[360px] sm:w-3/4 ">
                  <div className="flex justify-center items-center ">
                    <p className="mt-8 text-base font-bold max-[580px]:text-lg text-center">
                      {arryData.title}
                    </p>
                  </div>
                  <GraficLineAnimedPages
                    day={arryData.day}
                    title={arryData.title}
                    data={arryData.data}
                  />
                </div>
                <div className="flex justify-center items-center  max-sm:w-full sm:w-2/4">
                  <ListParamets data={arryData.data} day={arryData.day} />
                </div>
              </div>
            ) : null}
          </div>
          <hr className=" max-sm:ml-14 ml-10 w-full max-sm:hidden" />
        </div>
      )}
    </div>
  );
};

export default GraficPage;
