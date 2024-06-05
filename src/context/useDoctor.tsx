"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { CredentialDoctordb } from "@/components/modals/modalDoctor/newForm";

interface UserData {
  doctor: CredentialDoctordb | null;
  getDoctor: (doctor: CredentialDoctordb | null) => void;
  signOutDoctor: () => void;
  clearCacheDoctor: () => void;
  updateDoctor: (doctor: CredentialDoctordb) => void;
  refetchDoctor: (refetch: () => void) => void;
  refetch: () => void;
}

interface UserContextType {
  children: ReactNode;
}

const CredentialsDoctorContext = createContext<UserData>({} as UserData);

export const useDoctor = () => useContext(CredentialsDoctorContext);

export const DoctortProvider: React.FC<UserContextType> = ({ children }) => {
  const [doctor, setDoctor] = useState<CredentialDoctordb | null>(null);
  const [refetch, setRefetch] = useState<() => void>(() => {});
  const router = useRouter();

  async function restoreUserFromCache() {
    const cachedUserData = localStorage.getItem("CredentialDoctordb");
    if (cachedUserData && cachedUserData !== "undefined") {
      setDoctor(JSON.parse(cachedUserData));
    }
  }

  function refetchDoctor(refetch: () => void) {
    setRefetch(() => refetch);
  }

  function signOutDoctor() {
    setDoctor(null);
    router.push("/");
    localStorage.setItem("CredentialDoctordb", JSON.stringify(null));
  }

  function getDoctor(Chemist: CredentialDoctordb | null) {
    setDoctor(Chemist);
    localStorage.setItem("CredentialDoctordb", JSON.stringify(Chemist));
  }

  function clearCacheDoctor() {
    setDoctor(null);
    localStorage.setItem("CredentialDoctordb", JSON.stringify(null));
  }

  function updateDoctor(doctor: CredentialDoctordb) {
    setDoctor(doctor);
    localStorage.setItem("CredentialDoctordb", JSON.stringify(doctor));
  }

  useEffect(() => {
    restoreUserFromCache();
  }, []);

  useEffect(() => {
    console.log("doctor context", doctor);
  }, [doctor]);

  return (
    <CredentialsDoctorContext.Provider
      value={{
        doctor,
        refetch,
        clearCacheDoctor,
        getDoctor,
        refetchDoctor,
        signOutDoctor,
        updateDoctor,
      }}
    >
      {children}
    </CredentialsDoctorContext.Provider>
  );
};
