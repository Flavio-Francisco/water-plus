"use client";
import React, { useEffect, useState } from "react";
import Batery from "../batery";
import Logo from "@/app/logo.jpg";
import { Props } from "@/utils/models/Data";
import GraficLineAnimed from "../graficLineAnimed";
import Image from "next/image";
import { useUserContext } from "@/context/userContext";
import { GetBatery } from "@/app/fecth/batery";
import { useMutation, useQuery } from "@tanstack/react-query";

import { GetAnnual } from "@/app/fecth/annual";
import { useEventInput } from "@/context/eventContext";
import { getEventsDB } from "@/app/fecth/events";
import { getChemical } from "@/app/fecth/chemical";
import { useChemist } from "@/context/useChermist";
import { getDoctorDB } from "@/app/fecth/doctor";
import { useDoctor } from "@/context/useDoctor";
import { getOperatorDB } from "@/app/fecth/operator";
import { useOperator } from "@/context/useOperator";
import { fetchWaterParameters } from "@/app/fecth/bataBatery";

const HomeBody: React.FC = () => {
  const { user } = useUserContext();
  const { getEvents } = useEventInput();
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

  const { data: events } = useQuery({
    queryKey: ["events", user?.system_id],
    queryFn: () => getEventsDB(user?.system_id || 0),
    ...commonQueryOptions,
  });

  useEffect(() => {
    //  if (analys) getAnalys(analys);
    if (events) getEvents(events);
    if (operator) getOperator(operator);
    // if (production) getProduction(production);
    if (doctor) getDoctor(doctor);
    if (chemist) getChemist(chemist);
  }, [events, operator, production, doctor, chemist]);

  const [selectData, setSelectData] = useState<Props>();

  const { mutate } = useMutation({
    mutationKey: ["dataBatery"],
    mutationFn: (name: string) =>
      fetchWaterParameters(user?.system_id || 0, name),
    onSuccess(data) {
      if (data) {
        setSelectData(data);
      } else {
        alert("dados não encontrados!!");
      }
    },
  });
  const dataSelect = (grafic: string) => {
    switch (grafic) {
      case "abrandador":
        mutate(grafic);
        break;
      case "zeolita":
        mutate(grafic);
        break;
      case "carvão":
        mutate(grafic);
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
              onClick={() => dataSelect("carvão")}
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
