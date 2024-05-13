"use client";
import { GetDataFull } from "@/app/fecth/dataform";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useUserContext } from "./userContext";

interface Props {
  title: string;
  day: number[];
  data: (number | null)[];
}
interface DataFull {
  dataFull: Props[] | null;
  signOutDataFull: () => void;
  clearCacheDataFull: () => void;
  refetch: () => void;
}

interface DataFullContextType {
  children: ReactNode;
}

const DataFull = createContext({} as DataFull);

export const useDataFull = () => useContext(DataFull);

export const DataFullProvider: React.FC<DataFullContextType> = ({
  children,
}) => {
  const [dataFull, setDataFull] = useState<Props[] | null>(null);
  const { user } = useUserContext();
  const { data, refetch } = useQuery({
    queryKey: ["dataFull"],
    queryFn: () => GetDataFull(user?.system_id || null),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function getDataFull() {
    if (
      data != null &&
      data != undefined &&
      data != "Nenhum dado encontrado para o sistema com ID fornecido" &&
      data != "Ocorreu um erro ao processar os dados"
    ) {
      localStorage.setItem("DataFull", JSON.stringify(data));
    }
  }

  async function restoreDataFullFromCache() {
    const cachedUserData = localStorage.getItem("DataFull");
    if (
      cachedUserData != null &&
      cachedUserData != undefined &&
      cachedUserData !=
        "Nenhum dado encontrado para o sistema com ID fornecido" &&
      cachedUserData != "Ocorreu um erro ao processar os dados"
    ) {
      setDataFull(JSON.parse(cachedUserData));
    }
  }

  function signOutDataFull() {
    setDataFull(null);
    localStorage.setItem("DataFull", JSON.stringify(null));
  }
  function clearCacheDataFull() {
    setDataFull(null);
    localStorage.setItem("DataFull", JSON.stringify(null));
  }

  useEffect(() => {
    restoreDataFullFromCache();
  }, []); // Executa apenas na montagem inicial

  useEffect(() => {
    if (
      data != null &&
      data != undefined &&
      data != "Nenhum dado encontrado para o sistema com ID fornecido" &&
      data != "Ocorreu um erro ao processar os dados"
    ) {
      setDataFull(data);
      getDataFull();
    }

    console.log("data", data);
    console.log("dataFull", dataFull);
  }, [user, data]); //

  return (
    <DataFull.Provider
      value={{ dataFull, clearCacheDataFull, signOutDataFull, refetch }}
    >
      {children}
    </DataFull.Provider>
  );
};
