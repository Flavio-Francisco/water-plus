"use client";

import React from "react";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useUserContext } from "./userContext";
import { WaterData } from "@/components/production";

interface Props {
  title: string;
  day?: number[];
  data?: number[];
}
interface DataFull {
  production: WaterData | null;
  dataFull: Props[] | null;
  signOutDataFull: () => void;
  clearCacheDataFull: () => void;
  getDataFull: (data: Props[] | null) => void;
  getProduction: (data: WaterData | null) => void;
}

interface DataFullContextType {
  children: ReactNode;
}

const DataFull = createContext({} as DataFull);

export const useDataFull = () => useContext(DataFull);

export const DataFullProvider: React.FC<DataFullContextType> = ({
  children,
}) => {
  const [production, setProduction] = useState<WaterData | null>(null);
  const [dataFull, setDataFull] = useState<Props[] | null>(null);
  const { user } = useUserContext();

  async function getDataFull(data: Props[] | null) {
    if (data != null) {
      localStorage.setItem("DataFull", JSON.stringify(data));
    }
  }
  async function getProduction(data: WaterData | null) {
    if (data != null) {
      localStorage.setItem("Production", JSON.stringify(data));
    }
  }

  async function restoreProductionFromCache() {
    const cachedUserData = localStorage.getItem("Production");
    if (
      cachedUserData != null &&
      cachedUserData != undefined &&
      cachedUserData !=
        "Nenhum dado encontrado para o sistema com ID fornecido" &&
      cachedUserData != "Ocorreu um erro ao processar os dados"
    ) {
      setProduction(JSON.parse(cachedUserData));
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
    restoreProductionFromCache();
  }, [user]); // Executa apenas na montagem inicial

  return (
    <DataFull.Provider
      value={{
        dataFull,
        clearCacheDataFull,
        signOutDataFull,
        getDataFull,
        getProduction,
        production,
      }}
    >
      {children}
    </DataFull.Provider>
  );
};
