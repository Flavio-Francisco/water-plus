"use client";
import ButtonList from "@/components/butonTexts";
import Logo from "@/app/logo.jpg";
import Image from "next/image";
import ListParamets from "@/components/listParametens";
import { Datafull, getItemByIndex} from "@/utils/models/Data";
import React, { useState, useEffect } from "react";
import { Props } from "@/components/grafic";
import GraficLineAnimedPages from "@/components/graficLineAnimedPages";


const Grafic = () => {
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
        <h1>Graficos Água de Alimentação</h1>
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
             <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop:30
          }}
        > <p style={{ marginTop:30,fontSize:20,fontWeight:'bold'}}>{arryData?.title}</p></div>

          <hr />
          <GraficLineAnimedPages
            subtitle={arryData?.title}
            title={''}
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

export default Grafic;
