"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../app/logo-Transparente.png";
import { useQuery } from "@tanstack/react-query";
import { getSystems } from "@/app/fecth/systems";
import { Systems } from "@/utils/models/analysis";
import { auth } from "@/app/fecth/auth";
import { useUserContext } from "@/context/userContext";
import { RxEyeClosed } from "react-icons/rx";
import { PiEyeLight } from "react-icons/pi";
import Loader from "../loader/page";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";

import * as Yup from "yup";

export default function Auth() {
  const { getUser, clearCache } = useUserContext();
  const { push } = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
        const response = await auth({
          ...values,
          system_id: Number(values.system_id),
        });
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
        alert("Usuário não encontrado!!!");
      } finally {
        resetForm();
        setIsPending(false);
      }
    },
  });

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-600 to-white">
        <h1>Erro ao carregar dados!!!</h1>
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-600 to-white">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-600 to-white">
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
          <h1 className="my-3 text-2xl font-bold">Login</h1>

          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Usuário"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border rounded border-gray-400"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
          </div>

          <div className="mb-4 relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full  p-3 border rounded border-gray-400"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <RxEyeClosed className="w-5 h-5" />
              ) : (
                <PiEyeLight className="w-5 h-5" />
              )}
            </button>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          <div className="mb-4 w-full flex flex-col justify-center">
            <select
              id="system_id"
              name="system_id"
              value={formik.values.system_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full  p-3 border rounded border-gray-400"
            >
              <option value={0}>Selecione um sistema</option>
              {systems.map((system) => (
                <option className="p-5" key={system.id} value={system.id || []}>
                  {system.name}
                </option>
              ))}
            </select>
            {formik.touched.system_id && formik.errors.system_id && (
              <p className="text-red-500 text-sm">{formik.errors.system_id}</p>
            )}
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
