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
import { getObjects } from "@/utils/functions/getObject";
import { GetAnnual } from "@/app/fecth/annual";
import { GetAnalys } from "@/app/fecth/analys";
import { useEventInput } from "@/context/eventContext";
import { getEventsDB } from "@/app/fecth/events";
import { getChemical } from "@/app/fecth/chemical";
import { useChemist } from "@/context/useChermist";
import { getDoctorDB } from "@/app/fecth/doctor";
import { useDoctor } from "@/context/useDoctor";
import { getOperatorDB } from "@/app/fecth/operator";
import { useOperator } from "@/context/useOperator";

const HomeBody: React.FC = () => {
  const { user } = useUserContext();
  const { getEvents } = useEventInput();
  const { getDataFull, getProduction, getAnalys } = useDataFull();
  const { getChemist, refetchChemist } = useChemist();
  const { getDoctor, refetchDoctor } = useDoctor();
  const { getOperator, refetchOperator } = useOperator();

  const { data: chemist, refetch: refetchchemist } = useQuery({
    queryKey: ["chemicalDB"],
    queryFn: () => {
      if (user) {
        return getChemical(user?.system_id || 0);
      } else {
        return null;
      }
    },
  });

  const { data: operator, refetch: refetchopertor } = useQuery({
    queryKey: ["operator"],
    queryFn: () => getOperatorDB(user?.system_id || 0),
  });
  const { data: doctor, refetch: refetchdoctor } = useQuery({
    queryKey: ["doctorModal"],
    queryFn: () => {
      if (user) {
        return getDoctorDB(user?.system_id || 0);
      } else {
        return null;
      }
    },
  });

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

  const { data: dataFull } = useQuery({
    queryKey: ["dataFull"],
    queryFn: () => GetDataFull(user?.system_id || null),
  });
  if (data != null) {
    localStorage.setItem("DataFull", JSON.stringify(data));
  }
  const { data: events } = useQuery({
    queryKey: ["events"],
    queryFn: () => {
      if (user) {
        return getEventsDB(user.system_id || 0);
      } else {
        return null;
      }
    },
  });
  getDoctor(doctor);
  getAnalys(analys);
  getEvents(events);
  getOperator(operator);
  getDataFull(dataFull);
  getProduction(production);
  refetchDoctor(refetchdoctor);
  refetchOperator(refetchopertor);
  if (getChemist) {
    getChemist(chemist);
  } else {
    console.error("getChemist is not defined");
  }
  if (refetchChemist) {
    refetchChemist(refetchchemist);
  } else {
    console.error("refetchChemist is not defined");
  }

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
    <div className=" conteiner w-full mt-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-sm:w-80">
        <div className=" bg-white rounded-lg p-3 shadow-md md:top-10 md:right-20">
          <div className="flex flex-row md:flex-row  gap-3">
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

        <div className=" bg-white rounded-lg  shadow-md max-sm:w-full w-[450px]">
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
