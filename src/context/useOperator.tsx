"use client";
import React from "react";
import { CredentialOperator } from "@/components/modals/modalOperator/newForm";
import { useRouter } from "next/navigation";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserData {
  operator: CredentialOperator[] | null;
  getOperator: (operator: CredentialOperator[] | null) => void;
  signOutOperator: () => void;
  clearCacheOperator: () => void;
  updateOperator: (operator: CredentialOperator[]) => void;
  refetchOperator: (refetch: () => void) => void;
  refetchOpetor: () => void;
}

interface UserContextType {
  children: ReactNode;
}

const UserContext = createContext({} as UserData);

export const useOperator = () => useContext(UserContext);

export const OperatorProvider: React.FC<UserContextType> = ({ children }) => {
  const [operator, setOperator] = useState<CredentialOperator[] | null>(null);
  const [refetchOpetor, setRefetch] = useState<() => void>(() => {});
  const router = useRouter();

  async function restoreUserFromCache() {
    const cachedUserData = localStorage.getItem("CredentialOperator");
    if (cachedUserData && cachedUserData !== "undefined") {
      setOperator(JSON.parse(cachedUserData));
    }
  }

  function signOutOperator() {
    setOperator(null);
    router.push("/");
    localStorage.setItem("CredentialOperator", JSON.stringify(null));
  }
  function refetchOperator(refetch: () => void) {
    setRefetch(() => refetch);
  }

  function getOperator(user: CredentialOperator[] | null) {
    setOperator(user);
    localStorage.setItem("CredentialOperator", JSON.stringify(user));
  }
  function clearCacheOperator() {
    setOperator(null);
    localStorage.setItem("CredentialOperator", JSON.stringify(null));
  }
  function updateOperator(updatedUser: CredentialOperator[]) {
    setOperator(updatedUser);
    localStorage.setItem("CredentialOperator", JSON.stringify(updatedUser));
  }
  useEffect(() => {
    restoreUserFromCache();
  }, []); // Executa apenas na montagem inicial

  useEffect(() => {
    console.log("contexto operator", operator);
  }, [operator]);

  return (
    <UserContext.Provider
      value={{
        clearCacheOperator,
        getOperator,
        operator,
        signOutOperator,
        updateOperator,
        refetchOperator,
        refetchOpetor,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
