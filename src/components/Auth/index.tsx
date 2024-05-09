"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../app/logo-Transparente.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { UserModel } from "@/utils/models/userModel";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Você deve informar seu usuário"),
  password: Yup.string().required("Você deve informar sua senha"),
  system: Yup.string().required("Selecione um sistema cadastrado"),
});

interface Sistema {
  value: string;
  label: string;
}

const Sistemas: Sistema[] = [
  { value: "sistema1", label: "Sistema 1" },
  { value: "sistema2", label: "Sistema 2" },
  { value: "sistema3", label: "Sistema 3" },
];

export default function Auth() {
  const { push } = useRouter();
  const handleSubmit = (
    values: UserModel,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { setSubmitting, resetForm }: any
  ) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
    push("/Home");
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
        <Formik
          initialValues={{ name: "", password: "", system: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, handleChange, handleBlur }) => (
            <Form className="bg-white shadow-md rounded max-md:m-auto  max-md:w-10/12  px-8 pt-6 pb-8 mb-4">
              <div className="md:hidden  w-full max-w-md flex justify-center items-center">
                <Image
                  priority
                  src={Logo}
                  alt="Logo"
                  height={200}
                  width={200}
                />
              </div>
              <h1 className="my-2 text-2xl font-bold">Login</h1>
              <div className="mb-4">
                <TextField
                  id="outlined-basic"
                  name="name"
                  type="text"
                  label="Usuário"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="current"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <TextField
                  name="password"
                  type="password"
                  autoComplete="senha-atual"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="senha"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-6">
                <Autocomplete
                  className="w-full p-2 rounded"
                  id="combo-box-demo"
                  options={Sistemas}
                  value={
                    Sistemas.find((option) => option.value === values.system) ||
                    null
                  }
                  onChange={(event, newValue) => {
                    if (newValue) {
                      handleChange("system")(newValue.value);
                    } else {
                      handleChange("system")("");
                    }
                  }}
                  onBlur={handleBlur}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField {...params} label="Seleção do Sistema" />
                  )}
                />

                <ErrorMessage
                  name="system"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Entrando..." : "Entrar"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
