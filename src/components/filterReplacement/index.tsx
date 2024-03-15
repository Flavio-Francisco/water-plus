import React, { useState } from 'react';
import './styles.css';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Thema } from '../../../thema';


export default function FilterReplacement() {
  const [showModal, setShowModal] = useState(false);
  const validationSchema = Yup.object().shape({
    numeroMaquina: Yup.string().required('Campo obrigatório'),
    data: Yup.date().required('Campo obrigatório'),
    numeroMaquina1: Yup.string().required('Campo obrigatório'),
    data1: Yup.date().required('Campo obrigatório'),
    numeroMaquina2: Yup.string().required('Campo obrigatório'),
    data2: Yup.date().required('Campo obrigatório'),
    numeroMaquina3: Yup.string().required('Campo obrigatório'),
    data3: Yup.date().required('Campo obrigatório'),
    numeroMaquina4: Yup.string().required('Campo obrigatório'),
    data4: Yup.date().required('Campo obrigatório'),
    numeroMaquina5: Yup.string().required('Campo obrigatório'),
    data5: Yup.date().required('Campo obrigatório'),
    numeroMaquina6: Yup.string().required('Campo obrigatório'),
    data6: Yup.date().required('Campo obrigatório'),
    numeroMaquina7: Yup.string().required('Campo obrigatório'),
    data7: Yup.date().required('Campo obrigatório'),
    numeroMaquina8: Yup.string().required('Campo obrigatório'),
    data8: Yup.date().required('Campo obrigatório'),
    numeroMaquina9: Yup.string().required('Campo obrigatório'),
    data9: Yup.date().required('Campo obrigatório'),
    numeroMaquina10: Yup.string().required('Campo obrigatório'),
    data10: Yup.date().required('Campo obrigatório'),

  });

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Button
        onClick={handleButtonClick}
        className=" p-2 pl-2 pr-10 mt-6 md:mt-0 ml-6 md:ml-8 w-20" // Adiciona classes responsivas do Tailwind CSS para margem superior e esquerda
        style={{ background: Thema.Colors.blue2, borderColor: Thema.Colors.blue2,borderRadius: '5px',color:Thema.Colors.white }}>
      
        Troca  Diasafe
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Troca de Diasafe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              numeroMaquina: '',
              data: '',
              numeroMaquina1: '',
              data1: '',
              numeroMaquina2: '',
              data2: '',
              numeroMaquina3: '',
              data3: '',
              numeroMaquina4: '',
              data4: '',
              numeroMaquina5: '',
              data5: '',
              numeroMaquina6: '',
              data6: '',
              numeroMaquina7: '',
              data7: '',
              numeroMaquina8: '',
              data8: '',
              numeroMaquina9: '',
              data9: '',
              numeroMaquina10: '',
              data10: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              handleCloseModal();
            }}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>

                <Row>

                  <Col>
                    <Form.Group controlId="numeroMaquina">
                      <Form.Label>Número da Máquina</Form.Label>
                      <Form.Control
                        type="text"
                        name="numeroMaquina"
                        value={values.numeroMaquina}
                        onChange={handleChange}
                        isInvalid={!!errors.numeroMaquina}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.numeroMaquina}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>


                  <Col>
                    <Form.Group controlId="data">
                      <Form.Label>Data</Form.Label>
                      <Form.Control
                        type="date"
                        name="data"
                        value={values.data}
                        onChange={handleChange}
                        isInvalid={!!errors.data}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.data}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="numeroMaquina1">
                      <Form.Label>Número da Máquina</Form.Label>
                      <Form.Control
                        type="text"
                        name="numeroMaquina1"
                        value={values.numeroMaquina1}
                        onChange={handleChange}
                        isInvalid={!!errors.numeroMaquina1}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.numeroMaquina1}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>


                  <Col>
                    <Form.Group controlId="data1">
                      <Form.Label>Data</Form.Label>
                      <Form.Control
                        type="date"
                        name="data1"
                        value={values.data1}
                        onChange={handleChange}
                        isInvalid={!!errors.data1}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.data1}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="numeroMaquina2">
                      <Form.Label>Número da Máquina</Form.Label>
                      <Form.Control
                        type="text"
                        name="numeroMaquina2"
                        value={values.numeroMaquina2}
                        onChange={handleChange}
                        isInvalid={!!errors.numeroMaquina2}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.numeroMaquina2}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>


                  <Col>
                    <Form.Group controlId="data2">
                      <Form.Label>Data</Form.Label>
                      <Form.Control
                        type="date"
                        name="data2"
                        value={values.data2}
                        onChange={handleChange}
                        isInvalid={!!errors.data2}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.data2}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group controlId="numeroMaquina3">
                      <Form.Label>Número da Máquina</Form.Label>
                      <Form.Control
                        type="text"
                        name="numeroMaquina3"
                        value={values.numeroMaquina3}
                        onChange={handleChange}
                        isInvalid={!!errors.numeroMaquina3}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.numeroMaquina3}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>


                  <Col>
                    <Form.Group controlId="data3">
                      <Form.Label>Data</Form.Label>
                      <Form.Control
                        type="date"
                        name="data3"
                        value={values.data3}
                        onChange={handleChange}
                        isInvalid={!!errors.data3}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.data3}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="numeroMaquina4">
                      <Form.Label>Número da Máquina</Form.Label>
                      <Form.Control
                        type="text"
                        name="numeroMaquina4"
                        value={values.numeroMaquina4}
                        onChange={handleChange}
                        isInvalid={!!errors.numeroMaquina4}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.numeroMaquina4}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>


                  <Col>
                    <Form.Group controlId="data4">
                      <Form.Label>Data</Form.Label>
                      <Form.Control
                        type="date"
                        name="data4"
                        value={values.data4}
                        onChange={handleChange}
                        isInvalid={!!errors.data4}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.data4}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="numeroMaquina5">
                      <Form.Label>Número da Máquina</Form.Label>
                      <Form.Control
                        type="text"
                        name="numeroMaquina5"
                        value={values.numeroMaquina5}
                        onChange={handleChange}
                        isInvalid={!!errors.numeroMaquina5}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.numeroMaquina5}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>


                  <Col>
                    <Form.Group controlId="data5">
                      <Form.Label>Data</Form.Label>
                      <Form.Control
                        type="date"
                        name="data5"
                        value={values.data5}
                        onChange={handleChange}
                        isInvalid={!!errors.data5}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.data5}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="numeroMaquina6">
                      <Form.Label>Número da Máquina</Form.Label>
                      <Form.Control
                        type="text"
                        name="numeroMaquina6"
                        value={values.numeroMaquina6}
                        onChange={handleChange}
                        isInvalid={!!errors.numeroMaquina6}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.numeroMaquina6}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>


                  <Col>
                    <Form.Group controlId="data6">
                      <Form.Label>Data</Form.Label>
                      <Form.Control
                        type="date"
                        name="data6"
                        value={values.data6}
                        onChange={handleChange}
                        isInvalid={!!errors.data6}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.data6}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="numeroMaquina7">
                      <Form.Label>Número da Máquina</Form.Label>
                      <Form.Control
                        type="text"
                        name="numeroMaquina7"
                        value={values.numeroMaquina7}
                        onChange={handleChange}
                        isInvalid={!!errors.numeroMaquina7}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.numeroMaquina7}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>


                  <Col>
                    <Form.Group controlId="data7">
                      <Form.Label>Data</Form.Label>
                      <Form.Control
                        type="date"
                        name="data7"
                        value={values.data7}
                        onChange={handleChange}
                        isInvalid={!!errors.data7}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.data7}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="numeroMaquina8">
                      <Form.Label>Número da Máquina</Form.Label>
                      <Form.Control
                        type="text"
                        name="numeroMaquina8"
                        value={values.numeroMaquina8}
                        onChange={handleChange}
                        isInvalid={!!errors.numeroMaquina8}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.numeroMaquina8}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>


                  <Col>
                    <Form.Group controlId="data8a">
                      <Form.Label>Data</Form.Label>
                      <Form.Control
                        type="date"
                        name="data8"
                        value={values.data8}
                        onChange={handleChange}
                        isInvalid={!!errors.data8}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.data8}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="numeroMaquina9">
                      <Form.Label>Número da Máquina</Form.Label>
                      <Form.Control
                        type="text"
                        name="numeroMaquina9"
                        value={values.numeroMaquina9}
                        onChange={handleChange}
                        isInvalid={!!errors.numeroMaquina9}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.numeroMaquina9}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>


                  <Col>
                    <Form.Group controlId="data9">
                      <Form.Label>Data</Form.Label>
                      <Form.Control
                        type="date"
                        name="data9"
                        value={values.data9}
                        onChange={handleChange}
                        isInvalid={!!errors.data9}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.data9}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="numeroMaquina10">
                      <Form.Label>Número da Máquina</Form.Label>
                      <Form.Control
                        type="text"
                        name="numeroMaquina10"
                        value={values.numeroMaquina10}
                        onChange={handleChange}
                        isInvalid={!!errors.numeroMaquina10}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.numeroMaquina10}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>


                  <Col>
                    <Form.Group controlId="data10">
                      <Form.Label>Data</Form.Label>
                      <Form.Control
                        type="date"
                        name="data10"
                        value={values.data10}
                        onChange={handleChange}
                        isInvalid={!!errors.data10}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.data10}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Button type="submit" onClick={() => handleSubmit} style={{ marginTop: 20, width: 150, marginLeft: '40%' }}>
                  Salvar
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

