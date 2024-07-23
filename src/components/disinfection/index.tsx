"use client";
import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import "./styles.css";
import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { createDesinfection } from "@/app/fecth/desinfection";
import { DesinfectionModel } from "@/utils/models/desifection";
interface Iprops {
  onSucess: (sucess: boolean) => void;
  id: number;
  refetch: () => void;
}
const Desinfection = ({ onSucess, id, refetch }: Iprops) => {
  const { mutate } = useMutation({
    mutationKey: ["formDesinfection"],
    mutationFn: (desinfection: DesinfectionModel) =>
      createDesinfection(id, desinfection),
    onSuccess: () => {
      onSucess(true);
      refetch();
    },
    onError: () => {
      alert("Erro ao Salvar Dados !!!");
      onSucess(true);
    },
  });

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
        onSubmit={(values: DesinfectionModel) => {
          console.log(values);
          if (values) {
            mutate(values);
          }
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <div className="flex justify-center items-center mb-2">
              <h1 className="text-lg font-semibold">Desinfecção</h1>
            </div>
            <Row>
              <Col>
                <Form.Group controlId="step1">
                  <Form.Label>1º Passo</Form.Label>
                  <Form.Select
                    className="mb-3"
                    name="step1"
                    value={values.step1}
                    onChange={handleChange}
                    isInvalid={!!errors.step1}
                  >
                    <option value="">Selecione...</option>
                    <option value="realizado">Realizado</option>
                    <option value="não realizado">Não Realizado</option>
                    <option value="pendente">Pendente</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.step1}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="data1">
                  <Form.Label>Data</Form.Label>
                  <Form.Control
                    className="mb-3"
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
                  <Form.Select
                    className="mb-3"
                    name="step2"
                    value={values.step2}
                    onChange={handleChange}
                    isInvalid={!!errors.step2}
                  >
                    <option value="">Selecione...</option>
                    <option value="realizado">Realizado</option>
                    <option value="não realizado">Não Realizado</option>
                    <option value="pendente">Pendente</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.step2}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="data2">
                  <Form.Label>Data</Form.Label>
                  <Form.Control
                    className="mb-3"
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
                  <Form.Select
                    className="mb-3"
                    name="loop"
                    value={values.loop}
                    onChange={handleChange}
                    isInvalid={!!errors.loop}
                  >
                    <option value="">Selecione...</option>
                    <option value="realizado">Realizado</option>
                    <option value="não realizado">Não Realizado</option>
                    <option value="pendente">Pendente</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.loop}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="data3">
                  <Form.Label>Data</Form.Label>
                  <Form.Control
                    className="mb-3"
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
              <Form.Select
                className="mb-3"
                name="product"
                value={values.product}
                onChange={handleChange}
                isInvalid={!!errors.product}
              >
                <option value="">Selecione...</option>
                <option value="ácido peracético">Ácido Peracético</option>
                <option value="cloro">Cloro</option>
                <option value="ozônio">Ozônio</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.product}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="quantity">
              <Form.Label>
                Quantidade
                <p style={{ marginLeft: 15, fontSize: 12, color: "red" }}>
                  (balde com 5 Lts.)
                </p>
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

            <div className="flex justify-center items-center mt-4">
              <Button type="submit" variant="contained">
                Salvar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Desinfection;
