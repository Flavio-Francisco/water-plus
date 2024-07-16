"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../app/logo-Transparente.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useQuery } from "@tanstack/react-query";
import { getSystems } from "@/app/fecth/systems";
import { Systems } from "@/utils/models/analysis";
import { auth } from "@/app/fecth/auth";
import { useUserContext } from "@/context/userContext";
import { useDataFull } from "@/context/userDataFull";
import Loader from "../loader/page";
import { signIn } from "next-auth/react";

export default function Auth() {
  const { getUser, clearCache } = useUserContext();
  const { clearCacheDataFull } = useDataFull();
  const [selectedValue, setSelectedValue] = useState<Systems | null>(null);
  const [selectedPassword, setSelectPassword] = useState<string>("");
  const [selectedName, setSelectName] = useState<string>("");
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const resetForm = () => {
    setSelectedValue(null);
    setSelectPassword("");
    setSelectName("");
    setSubmitting(false);
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["systems"],
    queryFn: () => getSystems(),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const config: any = data || [];
  const systems = (data as Systems[]) || [];
  console.log("status", config.status);
  console.log("systems", systems);
  useEffect(() => {
    if (isLoading === true) {
      resetForm();
      clearCache();
      clearCacheDataFull();
    }
  }, [isLoading]);

  if (isError) {
    return (
      <div
        className="flex justify-center items-center h-screen"
        style={{
          background:
            "linear-gradient(to bottom, rgba(25,118,210,1), rgba(255,255,255,1))",
        }}
      >
        <h1>Erro ao carregar dados!!! </h1>
      </div>
    );
  }
  if (isLoading && systems.length === 0 && config.status === 500) {
    return (
      <div
        className="flex justify-center items-center h-screen"
        style={{
          background:
            "linear-gradient(to bottom, rgba(25,118,210,1), rgba(255,255,255,1))",
        }}
      >
        <h1>
          <Loader />
        </h1>
      </div>
    );
  }

  const handleSubmit = async () => {
    setSubmitting(true);

    if (selectedName === "" && selectedPassword === "") {
      alert("campos não podem ser vazios");
      setSubmitting(false);
    } else {
      const dados = await auth({
        name: selectedName || "",
        password: selectedPassword || "",
        system_id: selectedValue?.id || 0,
      });
      if (dados != null) {
        console.log("dados do usuario", dados);

        getUser(dados);
        signIn("credentials", {
          ...dados,

          callbackUrl: "/Home",
        });
        setSubmitting(false);
        resetForm();
      } else {
        alert("Dados não Encontrados!!!");
        setSubmitting(false);
        resetForm();
      }
    }
  };

  const handleSelectName = (value: string) => {
    setSelectName(value);
    console.log(selectedName);
  };

  const handleSelectPassword = (value: string) => {
    setSelectPassword(value);
    console.log(selectedPassword);
  };

  const handleSelectChange = (value: Systems | null) => {
    setSelectedValue(value);
    console.log(selectedValue?.id);
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        background:
          "linear-gradient(to bottom, rgba(25,118,210,1), rgba(255,255,255,1))",
      }}
    >
      <div className="max-md:hidden w-full max-w-md ">
        <Image priority src={Logo} alt="Logo" />
      </div>
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded max-md:m-auto  max-md:w-10/12  px-8 pt-6 pb-8 mb-4">
          <div className="md:hidden  w-full max-w-md flex justify-center items-center">
            <Image priority src={Logo} alt="Logo" height={200} width={200} />
          </div>
          <h1 className="my-2 text-2xl font-bold">Login</h1>
          <div className="mb-4">
            <TextField
              id="outlined-basic"
              name="name"
              type="text"
              label="Usuário"
              value={selectedName}
              onChange={(event) => handleSelectName(event.target.value)}
              autoComplete="current"
              className="w-full p-2 "
            />
          </div>
          <div className="mb-4">
            <TextField
              name="password"
              type="password"
              autoComplete="senha-atual"
              value={selectedPassword}
              onChange={(event) => handleSelectPassword(event.target.value)}
              label="Senha"
              className="w-full p-2 "
            />
          </div>
          <div className="mb-4 w-full flex justify-center ">
            <Autocomplete
              className="w-[96%] max-sm:w-[95%] rounded"
              id="combo-box-demo"
              options={systems}
              value={selectedValue}
              onChange={(event, value) => handleSelectChange(value)}
              getOptionLabel={(option) => option.name || ""}
              renderInput={(params) => (
                <TextField {...params} label="Seleção do Sistema" />
              )}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Entrando..." : "Entrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
