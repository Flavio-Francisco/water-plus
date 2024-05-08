import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { SchemaUser } from "@/utils/validation/CredentialsForm"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { VisibilityOffOutlined } from '@mui/icons-material'



interface Iprops {
  initialValues: {
    name: string;
    password: string;
  };
}

const UserFormEdit: React.FC<Iprops> = ({ initialValues }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SchemaUser}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
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
              name="user.name"
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
            <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
              Senha
            </Form.Label>
            <div
              style={{ display: "flex", flexDirection: "row", borderRight: 0 }}
            >
              <Form.Control
                style={{ borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
                type={showPassword ? "text" : "password"}
                name="user.password"
                placeholder="Digite a senha"
                value={values.password}
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