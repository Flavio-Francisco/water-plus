import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { SchemaChemist } from '@/utils/validation/CredentialsForm';
import { CredentialsChemist } from '@/utils/models/Credentials'; // Importando a interface CredentialsChemist





const ChemistFormEdit: React.FC = () => {

  const [isValues, setIsValues] = useState(false)
  const Values: CredentialsChemist = {

    Chemist: {
      name: 'Manuel',
      CRQ: '55555',
      graduation: ' ddd ss',
      postGraduation: 'sssss',
      postGraduation2: 'sssss',
    },
  };


  useEffect(() => {
    setIsValues(!isValues)
  }, [])
  return (
    <Formik
      initialValues={Values}
      validationSchema={SchemaChemist} // Utilizando o schema de validação correspondente
      onSubmit={(values: CredentialsChemist, { setSubmitting }) => {
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
              name="Chemist.name"
              placeholder="Digite o nome do químico"
              value={values.Chemist.name}
              onChange={handleChange}
              isInvalid={!!errors.Chemist?.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.Chemist?.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formCRQ">
            <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
              CRQ
            </Form.Label>
            <Form.Control
              type="text"
              name="Chemist.CRQ"
              placeholder="Digite o CRQ do químico"
              value={values.Chemist.CRQ}
              onChange={handleChange}
              isInvalid={!!errors.Chemist?.CRQ}
            />
            <Form.Control.Feedback type="invalid">
              {errors.Chemist?.CRQ}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formGraduation">
            <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
              Graduação
            </Form.Label>
            <Form.Control
              type="text"
              name="Chemist.graduation"
              placeholder="Digite a graduação do químico"
              value={values.Chemist.graduation}
              onChange={handleChange}
              isInvalid={!!errors.Chemist?.graduation}
            />
            <Form.Control.Feedback type="invalid">
              {errors.Chemist?.graduation}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPostGraduation">
            <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
              Pós-Graduação
            </Form.Label>
            <Form.Control
              type="text"
              name="Chemist.postGraduation"
              placeholder="Digite a pós-graduação do químico"
              value={values.Chemist.postGraduation}
              onChange={handleChange}
              isInvalid={!!errors.Chemist?.postGraduation}
            />
            <Form.Control.Feedback type="invalid">
              {errors.Chemist?.postGraduation}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formSecondPostGraduation">
            <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
              Segunda Pós-Graduação
            </Form.Label>
            <Form.Control
              type="text"
              name="Chemist.postGraduation2"
              placeholder="Digite a segunda pós-graduação do químico"
              value={values.Chemist.postGraduation2}
              onChange={handleChange}
              isInvalid={!!errors.Chemist?.postGraduation2}
            />
            <Form.Control.Feedback type="invalid">
              {errors.Chemist?.postGraduation2}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            variant="primary"
            className="bg-[#1976d2]"
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

export default ChemistFormEdit;
