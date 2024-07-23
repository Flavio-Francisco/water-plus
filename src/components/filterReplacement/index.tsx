"use client";
import React from "react";
import "./styles.css";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Machines } from "../reportDiasafe";
import { MachineData } from "@/utils/models/diasafe";
import { updateMachines } from "@/app/fecth/diasafe";
import Loader from "../loader/page";

interface Iprops {
  onSucess: (sucess: boolean) => void;
  id: number;
}

export default function FilterReplacement({ onSucess, id }: Iprops) {
  const queryClient = useQueryClient();

  const validationSchema = Yup.object().shape({
    numeroMaquina: Yup.string().required("Campo obrigatório"),
    data: Yup.date().required("Campo obrigatório"),
    numeroMaquina1: Yup.string().required("Campo obrigatório"),
    data1: Yup.date().required("Campo obrigatório"),
    numeroMaquina2: Yup.string().required("Campo obrigatório"),
    data2: Yup.date().required("Campo obrigatório"),
    numeroMaquina3: Yup.string().required("Campo obrigatório"),
    data3: Yup.date().required("Campo obrigatório"),
    numeroMaquina4: Yup.string().required("Campo obrigatório"),
    data4: Yup.date().required("Campo obrigatório"),
    numeroMaquina5: Yup.string().required("Campo obrigatório"),
    data5: Yup.date().required("Campo obrigatório"),
    numeroMaquina6: Yup.string().required("Campo obrigatório"),
    data6: Yup.date().required("Campo obrigatório"),
    numeroMaquina7: Yup.string().required("Campo obrigatório"),
    data7: Yup.date().required("Campo obrigatório"),
    numeroMaquina8: Yup.string().required("Campo obrigatório"),
    data8: Yup.date().required("Campo obrigatório"),
    numeroMaquina9: Yup.string().required("Campo obrigatório"),
    data9: Yup.date().required("Campo obrigatório"),
    numeroMaquina10: Yup.string().required("Campo obrigatório"),
    data10: Yup.date().required("Campo obrigatório"),
  });

  const cachedData: Machines[] | undefined = queryClient.getQueryData([
    "diasafe",
  ]);

  const { mutate, isPending } = useMutation({
    mutationKey: ["diasafeForm"],
    mutationFn: (machine: MachineData) => updateMachines(id, machine),

    onSuccess: () => {
      onSucess(true);
      alert("Dados Salvos com Sucesso!!!");
    },
    onError: () => {
      onSucess(true);
      alert("ERRO ao Salvar  Dados !!!");
    },
  });
  if (cachedData) {
    return (
      <>
        <Modal.Body>
          <Formik
            initialValues={{
              numeroMaquina:
                cachedData === undefined ? "" : cachedData[0]?.machine,
              data: cachedData === undefined ? "" : cachedData[0]?.date,
              numeroMaquina1:
                cachedData === undefined ? "" : cachedData[1]?.machine,
              data1: cachedData === undefined ? "" : cachedData[1]?.date,
              numeroMaquina2:
                cachedData === undefined ? "" : cachedData[2]?.machine,
              data2: cachedData === undefined ? "" : cachedData[2]?.date,
              numeroMaquina3:
                cachedData === undefined ? "" : cachedData[3]?.machine,
              data3: cachedData === undefined ? "" : cachedData[3]?.date,
              numeroMaquina4:
                cachedData === undefined ? "" : cachedData[4]?.machine,
              data4: cachedData === undefined ? "" : cachedData[4]?.date,
              numeroMaquina5:
                cachedData === undefined ? "" : cachedData[5]?.machine,
              data5: cachedData === undefined ? "" : cachedData[5]?.date,
              numeroMaquina6:
                cachedData === undefined ? "" : cachedData[6]?.machine,
              data6: cachedData === undefined ? "" : cachedData[6]?.date,
              numeroMaquina7:
                cachedData === undefined ? "" : cachedData[7]?.machine,
              data7: cachedData === undefined ? "" : cachedData[7]?.date,
              numeroMaquina8:
                cachedData === undefined ? "" : cachedData[8]?.machine,
              data8: cachedData === undefined ? "" : cachedData[8]?.date,
              numeroMaquina9:
                cachedData === undefined ? "" : cachedData[9]?.machine,
              data9: cachedData === undefined ? "" : cachedData[9]?.date,
              numeroMaquina10:
                cachedData === undefined ? "" : cachedData[10]?.machine,
              data10: cachedData === undefined ? "" : cachedData[10]?.date,
            }}
            validationSchema={validationSchema}
            onSubmit={(values: MachineData, { resetForm }) => {
              console.log(values);
              mutate(values);
              resetForm();
            }}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <div className="flex justify-center items-center mb-2">
                  <h1 className="text-lg font-semibold">Troca de Diasafe</h1>
                </div>
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

                <div className="flex justify-center items-center">
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={() => handleSubmit}
                    style={{ marginTop: 20, width: 150 }}
                  >
                    {isPending ? "Salvando..." : "Salvar"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </>
    );
  } else {
    return (
      <div
        className="flex justify-center items-center h-screen"
        style={{
          background:
            "linear-gradient(to bottom, rgba(25,118,210,1), rgba(255,255,255,1))",
        }}
      >
        <h1>
          <Loader />
        </h1>
      </div>
    );
  }
}
