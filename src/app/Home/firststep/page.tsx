"use client";
import ButtonList from "@/components/butonTexts";
import GraficFilter, { Props } from "@/components/grafic";
import Logo from "@/app/logo.jpg";
import Image from "next/image";
import ListParamets from "@/components/listParametens";
import { Datafull, getItemByIndex, getByTitle } from "@/utils/models/Data";
import React, { useState, useEffect } from "react";

const FirstStep = () => {
  const [select, setSelect] = useState(100);
  const [arryData, setArryData] = useState<Props | null>();
  const [selectData, setSelectData] = useState<string | null>("");

  const ButtonText = Datafull.map((i) => i.title);

  useEffect(() => {
    select;
    const arry = getItemByIndex(select, Datafull);
    setSelectData(getByTitle(arryData?.data));
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
        <h1>Graficos 1º Passo</h1>
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
        <>
          <hr />
          <GraficFilter
            subtitle={selectData}
            title={selectData}
            data={arryData?.data}
          />
          <hr />
          <div>
            <ListParamets data={arryData?.data} />
          </div>
        </>
      )}
    </div>
  );
};

export default FirstStep;
