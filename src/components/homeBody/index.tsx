"use client";
import React, { useEffect, useMemo, useState } from "react";
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
  const { getChemist } = useChemist();
  const { getDoctor } = useDoctor();
  const { getOperator } = useOperator();

  const commonQueryOptions = {
    enabled: !!user,
  };

  const { data: chemist } = useQuery({
    queryKey: ["chemicalDB", user?.system_id],
    queryFn: () => getChemical(user?.system_id || 0),
    ...commonQueryOptions,
  });

  const { data: operator } = useQuery({
    queryKey: ["operator", user?.system_id],
    queryFn: () => getOperatorDB(user?.system_id || 0),
    ...commonQueryOptions,
  });

  const { data: doctor } = useQuery({
    queryKey: ["doctorModal", user?.system_id],
    queryFn: () => getDoctorDB(user?.system_id || 0),
    ...commonQueryOptions,
  });

  const { data: production } = useQuery({
    queryKey: ["annual", user?.system_id],
    queryFn: () => GetAnnual(user?.system_id || 0),
    ...commonQueryOptions,
  });

  const { data: data } = useQuery({
    queryKey: ["batery", user?.system_id],
    queryFn: () => GetBatery(user?.system_id || 0),
    ...commonQueryOptions,
  });

  const { data: analys } = useQuery({
    queryKey: ["analys", user?.system_id],
    queryFn: () => GetAnalys(user?.system_id || 0),
    ...commonQueryOptions,
  });

  const { data: dataFull } = useQuery({
    queryKey: ["dataFull", user?.system_id],
    queryFn: () => GetDataFull(user?.system_id || 0),
    ...commonQueryOptions,
  });

  const { data: events } = useQuery({
    queryKey: ["events", user?.system_id],
    queryFn: () => getEventsDB(user?.system_id || 0),
    ...commonQueryOptions,
  });

  useEffect(() => {
    if (analys) getAnalys(analys);
    if (events) getEvents(events);
    if (operator) getOperator(operator);
    if (dataFull) getDataFull(dataFull);
    if (production) getProduction(production);
    if (doctor) getDoctor(doctor);
    if (chemist) getChemist(chemist);
  }, [analys, events, operator, dataFull, production, doctor, chemist]);

  const Abrandador = useMemo(
    () => getObjects(dataFull, "Abrandador")!,
    [dataFull]
  );
  const Zeolica = useMemo(
    () => getObjects(dataFull, "Multimídia")!,
    [dataFull]
  );
  const Carvao = useMemo(
    () => getObjects(dataFull, "Saída de Carvão")!,
    [dataFull]
  );

  const [selectData, setSelectData] = useState<Props>(Abrandador);

  const dataSelect = (grafic: string) => {
    switch (grafic) {
      case "abrandador":
        setSelectData(Abrandador);
        break;
      case "zeolita":
        setSelectData(Zeolica);
        break;
      case "carvao":
        setSelectData(Carvao);
        break;
      case "img":
      default:
        return <Image src={Logo} alt="logo" />;
    }
  };

  return (
    <div className="container w-full mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-sm:w-80">
        <div className="bg-white rounded-lg p-3 md:top-10 md:right-20">
          <div className="flex flex-row md:flex-row gap-3">
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
        <div className="bg-white rounded-lg max-sm:w-full w-[450px]">
          {selectData?.title === "img" ? (
            <div className="flex justify-center items-center">
              <Image priority={true} src={Logo} alt="logo" />
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
