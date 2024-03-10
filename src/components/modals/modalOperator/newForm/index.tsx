import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { SchemaOperator } from '@/utils/validation/CredentialsForm';
import { CredentialsOperator } from '@/utils/models/Credentials'; // Importe a nova interface

const initialValues: CredentialsOperator = { // Use a nova interface para initialValues
  operator: {
    name: '',
    registration: '',
  },
}

const OperatorFormNew: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SchemaOperator}
      onSubmit={(values: CredentialsOperator, { setSubmitting }) => { // Modifique para CredentialsDoctorOperator
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>Nome</Form.Label>
            <Form.Control
              type="text"
              name="operator.name" // Modifique para operator.name
              placeholder="Digite o nome do operador"
              value={values.operator.name} // Modifique para operator.name
              onChange={handleChange}
              isInvalid={!!errors.operator?.name} // Modifique para operator.name
            />
            <Form.Control.Feedback type="invalid">{errors.operator?.name}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formRegistration">
            <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>Registro</Form.Label>
            <Form.Control
              type="text"
              name="operator.registration" // Modifique para operator.registration
              placeholder="Digite o registro do operador"
              value={values.operator.registration} // Modifique para operator.registration
              onChange={handleChange}
              isInvalid={!!errors.operator?.registration} // Modifique para operator.registration
            />
            <Form.Control.Feedback type="invalid">{errors.operator?.registration}</Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" style={{ marginTop: 20 }}>
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default OperatorFormNew;
