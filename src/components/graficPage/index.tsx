"use client";
import React from "react";
import ButtonList from "@/components/butonTexts";
import Logo from "@/app/logo.jpg";
import Image from "next/image";
import ListParamets from "@/components/listParametens";
import { Props } from "@/utils/models/Data";
import GraficLineAnimedPages from "@/components/graficLineAnimedPages";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetDataFull } from "@/app/fecth/dataform";
import { useUserContext } from "@/context/userContext";
import { fetchData } from "@/app/fecth/dataGrafic";
import Loader from "../loader/page";

const GraficPage = () => {
  const [select, setSelect] = useState<string>("a");
  const [arryData, setArryData] = useState<Props>();
  const { user } = useUserContext();

  const { data: dataFull, isLoading } = useQuery({
    queryKey: ["dataFull", user?.system_id],
    queryFn: () => GetDataFull(user?.system_id || 0),
  });
  const ButtonText = (dataFull?.title || []).map((item) => item);

  const { mutate, isPending } = useMutation({
    mutationKey: ["dataGrafic"],
    mutationFn: (title: string) => fetchData(user?.system_id || 0, title),
    onSuccess: (arry) => {
      console.log("array", arry);

      if (arry != null) {
        setArryData(arry);
      }
    },
  });
  useEffect(() => {
    if (select) {
      mutate(select);
    }
  }, [select]);

  return (
    <div className=" flex flex-col justify-center items-center w-10/12  max-sm:w-[250px] max-sm:ml-1">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-8 w-full sm:ml-72 max-sm:ml-24">
            <h1 className="text-center  mt-6 mb-8 text-3xl font-bold max-[580px]:text-lg ">
              Parâmetros
            </h1>
          </div>
          <div className=" max-sm:ml-24 w-9/12   max-sm:w-[300px]">
            <ButtonList
              buttonTexts={ButtonText}
              getBayIndex={(index) => {
                setSelect(index);
              }}
            />
          </div>
          {select === "a" ? (
            <div className="flex justify-center items-center sm:ml-72  max-sm:ml-24 mt-5">
              <Image src={Logo} alt="Logo" width={250} height={250} />
            </div>
          ) : (
            <div className="sm:w-full sm:ml-72 max-sm:w-9/12 max-sm:mr-24 ">
              <hr className=" max-sm:ml-14 sm:ml-24 w-full max-sm:w-10/12 " />

              {isPending ? (
                <div className=" h-20 justify-end items-center">
                  <Loader marginLeft={50} />
                </div>
              ) : arryData ? (
                <div
                  style={{
                    justifyContent:
                      arryData.title === "Cor" ||
                      arryData.title === "Sabor" ||
                      arryData.title === "Turbidez" ||
                      arryData.title === "Odor" ||
                      arryData.title === "Hora do Carvão" ||
                      arryData.title === "Nível do Sal" ||
                      arryData.title === "Teste de Ozônio" ||
                      arryData.title === "Hora do Multimeios" ||
                      arryData.title === "Hora do Abrandador"
                        ? "center"
                        : "",
                  }}
                  className="flex sm:flex-row max-sm:flex-col  sm:ml-10 w-full max-sm:w-[400px] "
                >
                  <div
                    style={{
                      display:
                        arryData.title === "Odor" ||
                        arryData.title === "Cor" ||
                        arryData.title === "Sabor" ||
                        arryData.title === "Turbidez" ||
                        arryData.title === "Hora do Carvão" ||
                        arryData.title === "Nível do Sal" ||
                        arryData.title === "Teste de Ozônio" ||
                        arryData.title === "Hora do Multimeios" ||
                        arryData.title === "Hora do Abrandador"
                          ? "none"
                          : "",
                    }}
                    className="flex justify-center   flex-col items-center max-sm:w-[400px] sm:w-full "
                  >
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
                  <div className="flex flex-col justify-center items-center  max-sm:w-3/4 sm:w-2/4">
                    <div
                      style={{
                        display:
                          arryData.title === "Odor" ||
                          arryData.title === "Cor" ||
                          arryData.title === "Sabor" ||
                          arryData.title === "Turbidez" ||
                          arryData.title === "Hora do Carvão" ||
                          arryData.title === "Nível do Sal" ||
                          arryData.title === "Teste de Ozônio" ||
                          arryData.title === "Hora do Multimeios" ||
                          arryData.title === "Hora do Abrandador"
                            ? ""
                            : "none",
                      }}
                      className="h-6 mt-3"
                    >
                      <p className="font-semibold text-xl">{arryData.title}</p>
                    </div>
                    <ListParamets data={arryData.data} day={arryData.day} />
                  </div>
                </div>
              ) : null}
              <hr className=" max-sm:ml-14 sm:ml-24 w-full max-sm:hidden" />
            </div>
          )}{" "}
        </>
      )}
    </div>
  );
};

export default GraficPage;
