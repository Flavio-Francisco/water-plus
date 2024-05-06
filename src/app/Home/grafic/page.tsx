"use client";
import ButtonList from "@/components/butonTexts";
import Logo from "@/app/logo.jpg";
import Image from "next/image";
import ListParamets from "@/components/listParametens";
import { Datafull, Props, getItemByIndex } from "@/utils/models/Data";
import React, { useState, useEffect } from "react";

import GraficLineAnimedPages from "@/components/graficLineAnimedPages";

const Grafic = () => {
  const [select, setSelect] = useState<number>(100); // Inicialize o estado com o tipo number
  const [arryData, setArryData] = useState<Props | null>(null); // Inicialize o estado com null

  const ButtonText = Datafull.map((i) => i.title);

  useEffect(() => {
    const arry = getItemByIndex(select, Datafull);

    setArryData(arry);
  }, [select]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <h1 className="text-center mt-8 mb-8 text-3xl font-bold">
          Graficos Água de Alimentação
        </h1>
      </div>
      <ButtonList
        buttonTexts={ButtonText}
        getBayIndex={(index) => {
          setSelect(index);
          console.log("esse é o index", index);
        }}
      />
      {select === 100 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={Logo} alt="Logo" width={300} height={300} />
        </div>
      ) : (
        <div className="w-full">
          {arryData ? ( // Verifica se arryData existe antes de acessar suas propriedades
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <p style={{ marginTop: 30, fontSize: 20, fontWeight: "bold" }}>
                {arryData.title}
              </p>
            </div>
          ) : null}
          <hr />
          {arryData ? (
            <GraficLineAnimedPages
              day={arryData.day}
              title={arryData.title}
              data={arryData.data}
            />
          ) : null}
          <hr />
          {arryData ? (
            <div className=" flex justify-center">
              <ListParamets data={arryData.data} day={arryData.day} />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Grafic;


