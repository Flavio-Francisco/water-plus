import React, { useState } from "react";
import { Button, Form, FormCheck } from "react-bootstrap";
import { Formik } from "formik";
import { SchemaUser } from "@/utils/validation/CredentialsForm";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { VisibilityOffOutlined } from "@mui/icons-material";

import { useMutation } from "@tanstack/react-query";
import { useUserContext } from "@/context/userContext";
import { createUserForm } from "@/app/fecth/user";

interface UserModel {
  name: string;
  password: string;
  confirmPassword?: string;
  adm: boolean;
}

const initialValues: UserModel = {
  name: "",
  password: "",
  confirmPassword: "",
  adm: false,
};

const UserFormNew: React.FC = () => {
  const { user } = useUserContext();
  const [showPassword, setShowPassword] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    specialChar: false,
  });
  const [passwordConfirmed, setPasswordConfirmed] = useState(false);

  const { mutate } = useMutation({
    mutationKey: ["createUser"],
    mutationFn: async (values: UserModel) => {
      await createUserForm(user?.system_id || 0, values);
    },
    onSuccess: () => {
      alert("Dados salvos com sucesso!!!");
    },
    onError: () => {
      alert("Erro ao atualizar os dados!!!");
    },
  });

  const validatePassword = (password: string) => {
    setIsTyping(password.length > 0);
    setPasswordStrength({
      length: password.length >= 6,
      uppercase: /[A-Z]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SchemaUser}
      onSubmit={(data: UserModel, { setSubmitting, resetForm }) => {
        mutate({
          name: data.name,
          password: data.password,
          adm: data.adm,
        });
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ handleSubmit, handleChange, errors, setFieldValue, values }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
              Nome
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Digite o nome do usuário"
              value={values.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
              Senha
            </Form.Label>
            <div
              style={{ display: "flex", flexDirection: "row", borderRight: 0 }}
            >
              <Form.Control
                style={{ borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Digite a senha"
                value={values.password || ""}
                onChange={(e) => {
                  handleChange(e);
                  validatePassword(e.target.value);
                }}
                isInvalid={!!errors?.password}
              />
              <Button
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  borderBottomLeftRadius: 0,
                  borderTopLeftRadius: 0,
                  background: "#fff",
                  borderColor: "#ced4da",
                  borderLeft: 0,
                }}
              >
                {showPassword ? (
                  <VisibilityOffOutlined fontSize="small" color="action" />
                ) : (
                  <VisibilityOutlinedIcon fontSize="small" color="action" />
                )}
              </Button>
            </div>
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Lista de Requisitos da Senha */}
          {isTyping && !passwordConfirmed && (
            <ul style={{ marginTop: 10, listStyle: "none", padding: 0 }}>
              <li style={{ color: passwordStrength.length ? "green" : "red" }}>
                {passwordStrength.length ? "✔" : "✖"} Pelo menos 6 caracteres
              </li>
              <li
                style={{ color: passwordStrength.uppercase ? "green" : "red" }}
              >
                {passwordStrength.uppercase ? "✔" : "✖"} Pelo menos uma letra
                maiúscula
              </li>
              <li
                style={{
                  color: passwordStrength.specialChar ? "green" : "red",
                }}
              >
                {passwordStrength.specialChar ? "✔" : "✖"} Pelo menos um
                caractere especial
              </li>
            </ul>
          )}

          {/* Campo de Confirmação de Senha */}
          {passwordStrength.length &&
            passwordStrength.uppercase &&
            passwordStrength.specialChar &&
            !passwordConfirmed && (
              <Form.Group controlId="formConfirmPassword">
                <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
                  Confirme sua Senha
                </Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirme a senha"
                  value={values.confirmPassword}
                  onChange={(e) => {
                    handleChange(e);
                    setPasswordConfirmed(e.target.value === values.password);
                  }}
                  isInvalid={!!errors?.confirmPassword || !passwordConfirmed}
                />
                <Form.Control.Feedback type="invalid">
                  {passwordConfirmed ? "" : "As senhas não correspondem"}
                </Form.Control.Feedback>
              </Form.Group>
            )}

          <Form.Group controlId="formCheckbox" className="mt-2">
            <FormCheck
              type="checkbox"
              label="Administrador"
              name="adm"
              checked={values.adm || false}
              onChange={(e) => setFieldValue("adm", e.target.checked)}
            />
          </Form.Group>

          <Button
            className="text-lg text-left bg-[#1976d2]"
            type="submit"
            style={{ marginTop: 20 }}
            disabled={!passwordConfirmed}
          >
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UserFormNew;
