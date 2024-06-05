"use client";
import React from "react";
import { UserModel } from "@/utils/models/userModel";
import { useRouter } from "next/navigation";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserData {
  user: UserModel | null;
  getUser: (user: UserModel | null) => void;
  signOut: () => void;
  clearCache: () => void;
  updateUser: (updatedUser: UserModel) => void;
}

interface UserContextType {
  children: ReactNode;
}

const UserContext = createContext({} as UserData);

export const useUserContext = () => useContext(UserContext);

export const UserProvider: React.FC<UserContextType> = ({ children }) => {
  const [user, setUser] = useState<UserModel | null>(null);

  const router = useRouter();

  async function restoreUserFromCache() {
    const cachedUserData = localStorage.getItem("userData");
    if (cachedUserData && cachedUserData !== "undefined") {
      setUser(JSON.parse(cachedUserData));
    }
  }

  function signOut() {
    setUser(null);
    router.push("/");
    localStorage.setItem("userData", JSON.stringify(null));
  }

  function getUser(user: UserModel | null) {
    setUser(user);
    localStorage.setItem("userData", JSON.stringify(user));
  }
  function clearCache() {
    setUser(null);
    localStorage.setItem("userData", JSON.stringify(null));
  }
  function updateUser(updatedUser: UserModel) {
    setUser(updatedUser);
    localStorage.setItem("userData", JSON.stringify(updatedUser));
  }
  useEffect(() => {
    restoreUserFromCache();
  }, []); // Executa apenas na montagem inicial

  useEffect(() => {
    console.log("contexto", user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{ getUser, user, signOut, updateUser, clearCache }}
    >
      {children}
    </UserContext.Provider>
  );
};
