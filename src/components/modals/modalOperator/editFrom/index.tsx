import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { SchemaOperator } from '@/utils/validation/CredentialsForm';
import { CredentialsOperator } from '@/utils/models/Credentials'; // Importe a nova interface
import { useUserContext } from "@/context/userContext";
import { useMutation } from "@tanstack/react-query";
import { createOperator } from "@/app/fecth/operator";

const initialValues: CredentialsOperator = {
  // Use a nova interface para initialValues
  operator: {
    name: "",
    registration: "",
  },
};
interface Iprops {
  refech: () => void;
  onUpdate: (success: boolean) => void;
}

const OperatorFormEdit = ({ onUpdate, refech }: Iprops) => {
  const { user } = useUserContext();
  const { mutate } = useMutation({
    mutationKey: ["newOperator"],
    mutationFn: async (values: CredentialsOperator) => {
      await createOperator(user?.system_id || 0, values);
    },
    onSuccess: () => {
      refech();
      alert("Operador adicionado com sucesso!!!");
      onUpdate(false);
    },
    onError: () => {
      refech();
      alert("Erro ao salvar dados!!!");
      onUpdate(false);
    },
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SchemaOperator}
      onSubmit={(values: CredentialsOperator, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
        mutate(values);
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
              name="operator.name" // Modifique para operator.name
              placeholder="Digite o nome do operador"
              value={values.operator.name} // Modifique para operator.name
              onChange={handleChange}
              isInvalid={!!errors.operator?.name} // Modifique para operator.name
            />
            <Form.Control.Feedback type="invalid">
              {errors.operator?.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formRegistration">
            <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
              Registro
            </Form.Label>
            <Form.Control
              type="text"
              name="operator.registration" // Modifique para operator.registration
              placeholder="Digite o registro do operador"
              value={values.operator.registration} // Modifique para operator.registration
              onChange={handleChange}
              isInvalid={!!errors.operator?.registration} // Modifique para operator.registration
            />
            <Form.Control.Feedback type="invalid">
              {errors.operator?.registration}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" style={{ marginTop: 20 }}>
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default OperatorFormEdit;
