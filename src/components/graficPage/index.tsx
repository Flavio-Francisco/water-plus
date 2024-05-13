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
    const arry = getItemByIndex(select, dataFull || []);
    setArryData(arry);
  }, [select]);

  return (
    <div className="container mx-auto max-[580px]:max-w-[400px]">
      <div className="mt-8 w-full">
        <h1 className="text-center mt-8 mb-8 text-3xl font-bold max-[580px]:text-lg">
          Parâmetros
        </h1>
      </div>
      <ButtonList
        buttonTexts={ButtonText}
        getBayIndex={(index) => {
          setSelect(index);
        }}
      />
      {select === 100 ? (
        <div className="flex justify-center items-center">
          <Image src={Logo} alt="Logo" width={300} height={300} />
        </div>
      ) : (
        <div>
          {arryData ? (
            <div className="flex justify-center items-center">
              <p className="mt-8 text-base font-bold max-[580px]:text-lg">
                {arryData.title}
              </p>
            </div>
          ) : null}
          <hr />
          {arryData ? (
            <div className="flex justify-center items-center max-[580px]:max-w-[450px]">
              <GraficLineAnimedPages
                day={arryData.day}
                title={arryData.title}
                data={arryData.data}
              />
            </div>
          ) : null}
          <hr />
          {arryData ? (
            <div className="flex justify-center">
              <ListParamets data={arryData.data} day={arryData.day} />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default GraficPage;
