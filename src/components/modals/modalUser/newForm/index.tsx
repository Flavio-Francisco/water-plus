import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { SchemaUser } from "@/utils/validation/CredentialsForm"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { VisibilityOffOutlined } from '@mui/icons-material'
const initialValues = {
  user: {
    name: '',
    password: '',
  },
};

const UserFormNew: React.FC = () => {
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
              value={values.user.name}
              onChange={handleChange}
              isInvalid={!!errors.user?.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.user?.name}
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
                name="user.password"
                placeholder="Digite a senha"
                value={values.user.password}
                onChange={handleChange}
                isInvalid={!!errors.user?.password}
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
              {errors.user?.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            className=" text-lg text-left bg-[#1976d2]"
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

export default UserFormNew;
