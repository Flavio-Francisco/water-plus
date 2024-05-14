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
import { UnifiedData } from "@/app/api/analys/route";

interface Props {
  title: string;
  day?: number[];
  data?: number[];
}
interface DataFull {
  analys: UnifiedData | null;
  production: WaterData | null;
  dataFull: Props[] | null;
  signOutDataFull: () => void;
  clearCacheDataFull: () => void;
  getDataFull: (data: Props[] | null) => void;
  getProduction: (data: WaterData | null) => void;
  getAnalys: (data: UnifiedData | null) => void;
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
  const [analys, setAnalys] = useState<UnifiedData | null>(null);
  const { user } = useUserContext();

  async function getAnalys(data: UnifiedData | null) {
    if (data != null) {
      setAnalys(data);
      localStorage.setItem("Analys", JSON.stringify(data));
    }
  }
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
  async function restoreAnalysFromCache() {
    const cachedUserData = localStorage.getItem("Analys");
    if (
      cachedUserData != null &&
      cachedUserData != undefined &&
      cachedUserData !=
        "Nenhum dado encontrado para o sistema com ID fornecido" &&
      cachedUserData != "Ocorreu um erro ao processar os dados"
    ) {
      setAnalys(JSON.parse(cachedUserData));
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
    restoreAnalysFromCache();
  }, [user]); // Executa apenas na montagem inicial

  return (
    <DataFull.Provider
      value={{
        dataFull,
        clearCacheDataFull,
        signOutDataFull,
        getDataFull,
        getProduction,
        getAnalys,
        production,
        analys,
      }}
    >
      {children}
    </DataFull.Provider>
  );
};
