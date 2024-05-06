"use client";
import "./styles.css";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import {
  Button,
  Container,
  InputGroup,
  Form as BootstrapForm,
} from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Thema } from "../../thema";
import Logo from "./logo.jpg";
import * as Yup from "yup";
import { UserModel } from "@/utils/models/userModel";
import { useRouter } from "next/navigation";

// Esquema de validação com Yup
const validationSchema = Yup.object({
  username: Yup.string().min(4, "usuário obrigatório"),
  password: Yup.string().min(1, "senha obrigatório"),
  rememberMe: Yup.boolean(),
});

interface Actions {
  resetForm: () => void;
  setSubmitting: (e: boolean) => void;
}

export default function Auth() {
  const { push } = useRouter();

  const handleSubmit = (
    values: UserModel,
    { setSubmitting, resetForm }: Actions
  ) => {
    // Adicione a lógica de login aqui
    resetForm();
    setSubmitting(false);
    push("/Home");
  };

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const getPasswordInputType = () => {
    return passwordVisible ? "text" : "password";
  };
  const initialValues: UserModel = {
    name: "",
    password: "",
  };

  return (
    <div className="body">
      <div className="wrapper" id="loginImage">
        <Container className="">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <Image
                priority={true}
                src={Logo}
                alt="Minha Foto"
                width={100}
                height={100}
                style={{
                  borderRadius: 25,
                  marginTop: 5,
                  marginBottom: 30,
                  marginLeft: 110,
                }}
              />
              <h1>Login</h1>
              <BootstrapForm.Group className="mb-3">
                <BootstrapForm.Label>Usuário</BootstrapForm.Label>
                <Field
                  as={BootstrapForm.Control}
                  type="text"
                  name="username"
                  placeholder="Usuário"
                  style={{ background: Thema.Colors.blue3, height: 46 }}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                />
              </BootstrapForm.Group>
              <BootstrapForm.Group className="mb-3">
                <BootstrapForm.Label>Senha</BootstrapForm.Label>
                <InputGroup style={{ flexDirection: "row" }}>
                  <Field
                    as={BootstrapForm.Control}
                    type={getPasswordInputType()}
                    name="password"
                    placeholder="Senha"
                    required
                    style={{ width: "80%", background: Thema.Colors.blue3 }}
                  />
                  <Button
                    className="btn btn-light"
                    style={{
                      width: "20%",
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      background: Thema.Colors.blue3,
                    }}
                    onClick={handleTogglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <BsEyeSlash size={25} />
                    ) : (
                      <BsEye size={25} />
                    )}
                  </Button>
                </InputGroup>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </BootstrapForm.Group>
              <BootstrapForm.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              >
                <Field
                  as={BootstrapForm.Check}
                  type="checkbox"
                  name="rememberMe"
                  label="Lembre-me"
                />
              </BootstrapForm.Group>
              <Button type="submit" className="btn btn-primary">
                Entrar
              </Button>
            </Form>
          </Formik>
        </Container>
      </div>
    </div>
  );
}
