import React, { useState } from 'react';
import { Button, Form, FormCheck } from "react-bootstrap";
import { Formik } from "formik";
import { SchemaUser } from "@/utils/validation/CredentialsForm";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { VisibilityOffOutlined } from "@mui/icons-material";
import { UserModel } from "@/utils/models/userModel";
import { useMutation } from "@tanstack/react-query";
import { updateUserForm } from "@/app/fecth/user";

interface Iprops {
  initialValues: UserModel;
  refech: () => void;
  onUpdate: (success: boolean) => void;
}

const UserFormEdit: React.FC<Iprops> = ({
  initialValues,
  onUpdate,
  refech,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const { mutate } = useMutation({
    mutationKey: ["updateUser"],
    mutationFn: async (values: UserModel) => {
      await updateUserForm(initialValues.id || 0, values);
    },
    onSuccess: () => {
      refech();
      alert("dados atualizados com sucesso!!!");
      onUpdate(false);
    },
    onError: () => {
      refech();
      alert("Erro ao atualizados dados!!!");
      onUpdate(false);
    },
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SchemaUser}
      onSubmit={(values: UserModel, { setSubmitting }) => {
        console.log(values);
        mutate(values);
        setSubmitting(false);
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
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
                onChange={handleChange}
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
                {showPassword === true ? (
                  <VisibilityOffOutlined fontSize="small" color="action" />
                ) : (
                  <VisibilityOutlinedIcon fontSize="small" color="action" />
                )}
              </Button>
            </div>
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>

            <Form.Group controlId="formCheckbox" className="mt-2">
              <FormCheck
                type="checkbox"
                label="Admistrador"
                name="active"
                checked={values.adm || false}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Group>

          <Button
            className="text-lg text-left bg-[#1976d2]"
            type="submit"
            style={{ marginTop: 20 }}
          >
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UserFormEdit;