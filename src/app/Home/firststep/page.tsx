"use client";
import ButtonList from "@/components/butonTexts";
import Logo from "@/app/logo.jpg";
import Image from "next/image";
import ListParamets from "@/components/listParametens";
import { Datafull, Props, getItemByIndex } from "@/utils/models/Data";
import React, { useState, useEffect } from "react";
import GraficLineAnimedPages from "@/components/graficLineAnimedPages";

const FirstStep = () => {
  const [select, setSelect] = useState(100);
  const [arryData, setArryData] = useState<Props | null>();

  const ButtonText = Datafull.map((i) => i.title);

  useEffect(() => {
    select;
    const arry = getItemByIndex(select, Datafull);
    setArryData(arry);

    console.log("esse é o select", select);
  }, [ButtonText]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <h1 className="text-center mt-8 mb-8 text-2xl font-bold">
          Graficos 1º Passo
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
            flex: 1,
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

export default FirstStep;
