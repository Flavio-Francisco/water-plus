import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { SchemaDoctor } from '../../../../utils/validation/CredentialsForm';
import { CredentialsDoctor } from '../../../..//utils/models/Credentials';

interface MyModalProps {
  show: boolean;
  handleClose: () => void;
}

const initialValues: CredentialsDoctor = {
  doctor: {
    name: '',
    CRM: '',
    graduation: '',
    postGraduation: '',
    postGraduation2: '',
  },
}

const DoctorForm: React.FC<MyModalProps> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Formulário do Médico</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={SchemaDoctor}
          onSubmit={(values: CredentialsDoctor, { setSubmitting }) => {
            console.log(values);

            setSubmitting(false);
            handleClose();

          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="doctor.name"
                  placeholder="Digite o nome do médico"
                  value={values.doctor.name}
                  onChange={handleChange}
                  isInvalid={!!errors.doctor?.name}
                />
                <Form.Control.Feedback type="invalid">{errors.doctor?.name}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formCRM">
                <Form.Label>CRM</Form.Label>
                <Form.Control
                  type="text"
                  name="doctor.CRM"
                  placeholder="Digite o CRM do médico"
                  value={values.doctor.CRM}
                  onChange={handleChange}
                  isInvalid={!!errors.doctor?.CRM}
                />
                <Form.Control.Feedback type="invalid">{errors.doctor?.CRM}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formGraduation">
                <Form.Label>Graduação</Form.Label>
                <Form.Control
                  type="text"
                  name="doctor.graduation"
                  placeholder="Digite a graduação do médico"
                  value={values.doctor.graduation}
                  onChange={handleChange}
                  isInvalid={!!errors.doctor?.graduation}
                />
                <Form.Control.Feedback type="invalid">{errors.doctor?.graduation}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPostGraduation">
                <Form.Label>Pós-Graduação</Form.Label>
                <Form.Control
                  type="text"
                  name="doctor.postGraduation"
                  placeholder="Digite a pós-graduação do médico"
                  value={values.doctor.postGraduation}
                  onChange={handleChange}
                  isInvalid={!!errors.doctor?.postGraduation}
                />
                <Form.Control.Feedback type="invalid">{errors.doctor?.postGraduation}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formSecondPostGraduation">
                <Form.Label>Segunda Pós-Graduação</Form.Label>
                <Form.Control
                  type="text"
                  name="doctor.postGraduation2"
                  placeholder="Digite a segunda pós-graduação do médico"
                  value={values.doctor.postGraduation2}
                  onChange={handleChange}
                  isInvalid={!!errors.doctor?.postGraduation2}
                />
                <Form.Control.Feedback type="invalid">{errors.doctor?.postGraduation2}</Form.Control.Feedback>
              </Form.Group>


              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DoctorForm;
