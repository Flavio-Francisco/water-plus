"use client";
import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import "./styles.css";
import { Thema } from "../../../thema";

const Desinfection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const validationSchema = Yup.object().shape({
    step1: Yup.string().required("Campo obrigatório"),
    data1: Yup.date().required("Campo obrigatório"),
    step2: Yup.string().required("Campo obrigatório"),
    data2: Yup.date().required("Campo obrigatório"),
    loop: Yup.string().required("Campo obrigatório"),
    data3: Yup.date().required("Campo obrigatório"),
    product: Yup.string().required("Campo obrigatório"),
    quantity: Yup.number()
      .required("Campo obrigatório")
      .positive("A quantidade deve ser maior que zero"),
  });

  return (
    <>
      <Button
        onClick={handleButtonClick}
        style={{
          background: Thema.Colors.blue2,
          borderColor: Thema.Colors.blue2,
          borderRadius: "5px",
          color: Thema.Colors.white,
        }}
      >
        Desinfecção do Sistema
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Desinfecção do Sistema</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              step1: "",
              data1: "",
              step2: "",
              data2: "",
              product: "",
              quantity: "",
              loop: "",
              data3: "",
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
                    <Form.Group controlId="step1">
                      <Form.Label>1º Passo</Form.Label>
                      <Form.Control
                        type="text"
                        name="step1"
                        value={values.step1}
                        onChange={handleChange}
                        isInvalid={!!errors.step1}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.step1}
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
                    <Form.Group controlId="step2">
                      <Form.Label>2º Passo</Form.Label>
                      <Form.Control
                        type="text"
                        name="step2"
                        value={values.step2}
                        onChange={handleChange}
                        isInvalid={!!errors.step2}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.step2}
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
                    <Form.Group controlId="loop">
                      <Form.Label>Loop</Form.Label>
                      <Form.Control
                        type="text"
                        name="loop"
                        value={values.loop}
                        onChange={handleChange}
                        isInvalid={!!errors.loop}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.loop}
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
                <Form.Group controlId="product">
                  <Form.Label>Produto</Form.Label>
                  <Form.Control
                    type="text"
                    name="product"
                    value={values.product}
                    onChange={handleChange}
                    isInvalid={!!errors.product}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.product}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="quantity">
                  <Form.Label>
                    Quantidade
                    <text
                      style={{ marginLeft: 15, fontSize: 12, color: "red" }}
                    >
                      (balde com 5 Lts.)
                    </text>
                  </Form.Label>

                  <Form.Control
                    type="number"
                    name="quantity"
                    value={values.quantity}
                    onChange={handleChange}
                    isInvalid={!!errors.quantity}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.quantity}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  type="submit"
                  style={{ marginTop: 20, width: 150, marginLeft: "35%" }}
                >
                  Salvar
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Desinfection;
