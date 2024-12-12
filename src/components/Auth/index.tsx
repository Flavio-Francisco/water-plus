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
import Loader from "../loader/page";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
//import { UserModel } from "@/utils/models/userModel";

export default function Auth() {
  const { getUser, clearCache } = useUserContext();
  const { push } = useRouter();
  const [isPending, setIsPending] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["systems"],
    queryFn: () => getSystems(),
  });

  const systems = (data as Systems[]) || [];

  useEffect(() => {
    if (isLoading) {
      clearCache();
    }
  }, [isLoading, clearCache]);

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      system_id: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nome é obrigatório"),
      password: Yup.string().required("Senha é obrigatória"),
      system_id: Yup.number()
        .required("Selecione um sistema")
        .min(1, "Seleção inválida"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsPending(true);
      try {
        const response = await auth(values);
        if (response.name) {
          getUser({
            name: response.name,
            password: response.password,
            adm: response.adm,
            id: response.id,
            system_id: response.system_id,
          });
          push("/Home");
        } else {
          alert(response.message || "Erro desconhecido.");
        }
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        alert("Usuário não encontrado!!!");
      } finally {
        resetForm();
        setIsPending(false);
      }
    },
  });

  if (isError) {
    return (
      <div
        className="flex justify-center items-center h-screen"
        style={{
          background:
            "linear-gradient(to bottom, rgba(25,118,210,1), rgba(255,255,255,1))",
        }}
      >
        <h1>Erro ao carregar dados!!!</h1>
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <div
        className="flex justify-center items-center h-screen"
        style={{
          background:
            "linear-gradient(to bottom, rgba(25,118,210,1), rgba(255,255,255,1))",
        }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        background:
          "linear-gradient(to bottom, rgba(25,118,210,1), rgba(255,255,255,1))",
      }}
    >
      <div className="max-md:hidden w-full max-w-md">
        <Image priority src={Logo} alt="Logo" />
      </div>
      <div className="w-full max-w-md">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-md rounded max-md:m-auto max-md:w-10/12 px-8 pt-6 pb-8 mb-4"
        >
          <div className="md:hidden w-full max-w-md flex justify-center items-center">
            <Image priority src={Logo} alt="Logo" height={200} width={200} />
          </div>
          <h1 className="my-2 text-2xl font-bold">Login</h1>

          <div className="mb-4">
            <TextField
              InputProps={{ autoComplete: "false" }}
              id="name"
              name="name"
              label="Usuário"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              className="w-full p-2"
            />
          </div>

          <div className="mb-4">
            <TextField
              InputProps={{ autoComplete: "false" }}
              id="password"
              name="password"
              type="password"
              label="Senha"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              className="w-full p-2"
            />
          </div>

          <div className="mb-4 w-full flex justify-center">
            <Autocomplete
              id="system_id"
              className="w-full"
              options={systems}
              getOptionLabel={(option) => option.name || ""}
              value={
                systems.find(
                  (system) => system.id === formik.values.system_id
                ) || null
              }
              onChange={(event, value) =>
                formik.setFieldValue("system_id", value?.id || 0)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Seleção do Sistema"
                  error={
                    formik.touched.system_id && Boolean(formik.errors.system_id)
                  }
                  helperText={
                    formik.touched.system_id && formik.errors.system_id
                  }
                />
              )}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isPending}
            >
              {isPending ? "Entrando..." : "Entrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
