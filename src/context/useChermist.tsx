"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { CredentialsChemistdb } from "@/components/modals/modalChemist/editForm";

interface UserData {
  Chemist: CredentialsChemistdb | null;
  getChemist: (Chemist: CredentialsChemistdb | null) => void;
  signOutChemist: () => void;
  clearCacheChemist: () => void;
  updateChemist: (updatedChemist: CredentialsChemistdb) => void;
  refetchChemist: (refetch: () => void) => void;
  refetch: () => void;
}

interface UserContextType {
  children: ReactNode;
}

const CredentialsChemistContext = createContext<UserData>({} as UserData);

export const useChemist = () => useContext(CredentialsChemistContext);

export const ChemistProvider: React.FC<UserContextType> = ({ children }) => {
  const [Chemist, setChemist] = useState<CredentialsChemistdb | null>(null);
  const [refetch, setRefetch] = useState<() => void>(() => {});
  const router = useRouter();

  async function restoreUserFromCache() {
    const cachedUserData = localStorage.getItem("CredentialsChemistdb");
    if (cachedUserData && cachedUserData !== "undefined") {
      setChemist(JSON.parse(cachedUserData));
    }
  }

  function refetchChemist(refetch: () => void) {
    setRefetch(() => refetch);
  }

  function signOutChemist() {
    setChemist(null);
    router.push("/");
    localStorage.setItem("CredentialsChemistdb", JSON.stringify(null));
  }

  function getChemist(Chemist: CredentialsChemistdb | null) {
    setChemist(Chemist);
    localStorage.setItem("CredentialsChemistdb", JSON.stringify(Chemist));
  }

  function clearCacheChemist() {
    setChemist(null);
    localStorage.setItem("CredentialsChemistdb", JSON.stringify(null));
  }

  function updateChemist(Chemist: CredentialsChemistdb) {
    setChemist(Chemist);
    localStorage.setItem("CredentialsChemistdb", JSON.stringify(Chemist));
  }

  useEffect(() => {
    restoreUserFromCache();
  }, []);

  useEffect(() => {
    console.log("chemist context", Chemist);
  }, [Chemist]);

  return (
    <CredentialsChemistContext.Provider
      value={{
        Chemist,
        clearCacheChemist,
        getChemist,
        signOutChemist,
        updateChemist,
        refetchChemist,
        refetch,
      }}
    >
      {children}
    </CredentialsChemistContext.Provider>
  );
};
