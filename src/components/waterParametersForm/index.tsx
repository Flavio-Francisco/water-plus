'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Modal, Row } from "react-bootstrap";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import AddchartIcon from "@mui/icons-material/Addchart";
import waterTreatmentParametersSchema from "../../utils/validation/WaterParamentersValidation"; // Importa o esquema de validação
import { WaterTreatmentParameters } from "@/utils/models/WaterParametersModel";
import { useMutation } from "@tanstack/react-query";
import { createParamets } from "@/app/fecth/dataform";
import { useUserContext } from "@/context/userContext";

import ModalForm from "./ModalForm";
import { Button } from "@mui/material";

const WaterParametersForm = () => {
  const [showModalParm, setShowModalParm] = useState(false);
  const handleCloseModalParm = () => setShowModalParm(false);
  const handleShowModalParm = () => setShowModalParm(true);
  const [isActive, setActive] = useState(false);
  const active = () => setActive(!isActive);

  const initialValues: WaterTreatmentParameters = {
    WATER_FEED: {
      Color: "",
      Turbidity: "",
      Taste: "",
      Odor: "",
      TotalChlorine: 0,
      FreeChlorine: 0,
      pH: 0,
    },
    PRE_TREATMENT: {
      SoftenerHardness: 0,
      MultimediaFilterInputPressure: 0,
      SoftenerInputPressure: 0,
      CarbonInputPressure: 0,
      CarbonOutputPressure: 0,
      MultimediaFilterDisplayTime: "",
      SoftenerDisplayTime: "",
      CarbonDisplayTime: "",
      SaltReservoirLevel: "",
    },
    REVERSE_OSMOSIS_1ST_STEP: {
      ROInputPressure: 0,
      MembraneInputPressure: 0,
      RejectPressure: 0,
      ROInputConductivity: 0,
      ROOutputConductivity: 0,
      SalinityRejectionRate: 0,
      PermeateFlowRate: 0,
      RejectFlowRate: 0,
    },
    REVERSE_OSMOSIS_2ND_STEP: {
      ROInputPressure: 0,
      MembraneInputPressure: 0,
      RejectPressure: 0,
      ROInputConductivity: 0,
      ROOutputConductivity: 0,
      SalinityRejectionRate: 0,
      PermeateFlowRate: 0,
      RejectFlowRate: 0,
    },
    LOOP: {
      OutputPressure: 0,
      ReturnPressure: 0,
      OzoneTestBefore1stShift: undefined,
      Conductivity: 0,
    },
  };

  const { user } = useUserContext();
  const { mutate } = useMutation({
    mutationKey: ["Full"],
    mutationFn: (values: WaterTreatmentParameters) =>
      createParamets(user?.system_id || 0, values),
    onSuccess() {
      alert("dados salvos com sucesso!!!");
      setShowModalParm(false);
    },
    onError() {
      alert("Erro em Salvar dadosl!!!");
    },
  });

  return (
    <div className="">
      <button
        className={isActive ? "active" : "sidebar-nav"}
        onClick={() => {
          handleShowModalParm();
          active();
        }}
      >
        <AddchartIcon />
      </button>

      <ModalForm
        showModalParm={showModalParm}
        handleCloseModalParm={handleCloseModalParm}
        title="Parametros da ETA"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={waterTreatmentParametersSchema}
          onSubmit={(
            values: WaterTreatmentParameters,
            { setSubmitting, resetForm }
          ) => {
            setSubmitting(true);
            if (values) {
              mutate({ ...values });
            }
            setSubmitting(false);
            resetForm();
            console.log("valor formulario", values);
          }}
        >
          {({ isSubmitting }) => (
            <>
              <Form className="mt-9 w-full max-[600]:w-4/5">
                <Modal.Body>
                  <div className="md:mx-0 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <Card.Header>
                        <Card.Title className="text-center">
                          Água de Alimentação
                        </Card.Title>
                      </Card.Header>
                      <Card.Body>
                        {/* WATER_FEED */}
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Cor Aparente
                              </p>
                              <Field
                                as="select"
                                name="WATER_FEED.Color"
                                className="form-control mb-2"
                              >
                                <option value="">Selecione</option>
                                <option value="Inc">Incolor</option>
                                <option value="Turva">Tuvar</option>
                              </Field>
                              <ErrorMessage
                                name="WATER_FEED.Color"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Turvação
                              </p>
                              <Field
                                as="select"
                                name="WATER_FEED.Turbidity"
                                className="form-control mb-2"
                              >
                                <option value="">Selecione</option>
                                <option value="Trans">Transparente</option>
                                <option value="Turva">Tuvar</option>
                              </Field>
                              <ErrorMessage
                                name="WATER_FEED.Turbidity"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Gosto
                              </p>
                              <Field
                                as="select"
                                name="WATER_FEED.Taste"
                                className="form-control mb-2"
                              >
                                <option value="">Selecioner</option>
                                <option value="Sip">Sípidoso</option>
                                <option value="Ins">Insípido</option>
                                {/* Adicione outras opções conforme necessário */}
                              </Field>
                              <ErrorMessage
                                name="WATER_FEED.Taste"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Odor
                              </p>
                              <Field
                                as="select"
                                name="WATER_FEED.Odor"
                                className="form-control mb-2"
                              >
                                <option value="">Selecioner</option>
                                <option value="Ino">Inodoro</option>
                                <option value="Nodo">Nodoro</option>
                                {/* Adicione outras opções conforme necessário */}
                              </Field>
                              <ErrorMessage
                                name="WATER_FEED.Odor"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Cloro Total
                              </p>
                              <Field
                                type="number"
                                name="WATER_FEED.TotalChlorine"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="WATER_FEED.TotalChlorine"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Cloro Livre
                              </p>
                              <Field
                                type="number"
                                name="WATER_FEED.FreeChlorine"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="WATER_FEED.FreeChlorine"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-2 justify-center w-1/2 m-auto">
                              <p className="block text-sm font-medium text-gray-700">
                                pH
                              </p>
                              <Field
                                as="select"
                                name="WATER_FEED.pH"
                                className="form-control mb-2"
                              >
                                <option value="">Selecione</option>
                                {Array.from(
                                  { length: 24 },
                                  (_, i) => 3 + i * 0.5
                                ).map((value) => (
                                  <option key={value} value={value.toFixed(1)}>
                                    {Number(value.toFixed(1))}
                                  </option>
                                ))}
                              </Field>
                              <ErrorMessage
                                name="WATER_FEED.pH"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Card.Title className="text-center">
                          Pré-Tratamento
                        </Card.Title>
                      </Card.Header>
                      <Card.Body>
                        {/* PRE_TREATMENT */}
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Dureza do Abrandador
                              </p>
                              <Field
                                type="number"
                                name="PRE_TREATMENT.SoftenerHardness"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="PRE_TREATMENT.SoftenerHardness"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Pressão do Multimídia
                              </p>
                              <Field
                                type="number"
                                name="PRE_TREATMENT.MultimediaFilterInputPressure"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="PRE_TREATMENT.MultimediaFilterInputPressure"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Pressão do Abrandador
                              </p>
                              <Field
                                type="number"
                                name="PRE_TREATMENT.SoftenerInputPressure"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="PRE_TREATMENT.SoftenerInputPressure"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Pressão de E. do Carvão{" "}
                              </p>
                              <Field
                                type="number"
                                name="PRE_TREATMENT.CarbonInputPressure"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="PRE_TREATMENT.CarbonInputPressure"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Pressão de Saída do Carvão
                              </p>
                              <Field
                                type="number"
                                name="PRE_TREATMENT.CarbonOutputPressure"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="PRE_TREATMENT.CarbonOutputPressure"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Horário Multimídia
                              </p>
                              <Field
                                type="time"
                                name="PRE_TREATMENT.MultimediaFilterDisplayTime"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="PRE_TREATMENT.MultimediaFilterDisplayTime"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Horário do Abrandador
                              </p>
                              <Field
                                type="time"
                                name="PRE_TREATMENT.SoftenerDisplayTime"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="PRE_TREATMENT.SoftenerDisplayTime"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Horário do Carvão
                              </p>
                              <Field
                                type="time"
                                name="PRE_TREATMENT.CarbonDisplayTime"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="PRE_TREATMENT.CarbonDisplayTime"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-2 justify-center w-1/2 m-auto">
                              <p className="block text-sm font-medium text-gray-700">
                                Nível do Reservatório de Sal
                              </p>
                              <Field
                                as="select"
                                name="PRE_TREATMENT.SaltReservoirLevel"
                                className="form-control mb-2"
                              >
                                <option value="">Selecione</option>
                                <option value="Baixo">Baixo</option>
                                <option value="Médio">Médio</option>
                                <option value="Alto">Alto</option>
                                {/* Adicione outras opções conforme necessário */}
                              </Field>
                              <ErrorMessage
                                name="PRE_TREATMENT.SaltReservoirLevel"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Card.Title className="text-center">
                          Osmose 1º Passo
                        </Card.Title>
                      </Card.Header>
                      <Card.Body>
                        {/* REVERSE_OSMOSIS_1ST_STEP */}
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Pressão de Entrada da OR
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_1ST_STEP.ROInputPressure"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_1ST_STEP.ROInputPressure"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Pressão de E. da Membrana
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_1ST_STEP.MembraneInputPressure"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_1ST_STEP.MembraneInputPressure"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Pressão de Rejeição
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_1ST_STEP.RejectPressure"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_1ST_STEP.RejectPressure"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Condutividade de Entrada da OR
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_1ST_STEP.ROInputConductivity"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_1ST_STEP.ROInputConductivity"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Condutividade de Saída da OR
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_1ST_STEP.ROOutputConductivity"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_1ST_STEP.ROOutputConductivity"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Rejeição de Salinidade
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_1ST_STEP.SalinityRejectionRate"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_1ST_STEP.SalinityRejectionRate"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Fluxo do Permeado
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_1ST_STEP.PermeateFlowRate"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_1ST_STEP.PermeateFlowRate"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Fluxo de Rejeição
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_1ST_STEP.RejectFlowRate"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_1ST_STEP.RejectFlowRate"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Card.Title className="text-center">
                          Osmose 2º Passo
                        </Card.Title>
                      </Card.Header>
                      <Card.Body>
                        {/* REVERSE_OSMOSIS_2ND_STEP */}
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Pressão de Entrada da OR
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_2ND_STEP.ROInputPressure"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_2ND_STEP.ROInputPressure"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Pressão de E. da Membrana
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_2ND_STEP.MembraneInputPressure"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_2ND_STEP.MembraneInputPressure"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Pressão de Rejeição
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_2ND_STEP.RejectPressure"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_2ND_STEP.RejectPressure"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Condutividade de Entrada da OR
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_2ND_STEP.ROInputConductivity"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_2ND_STEP.ROInputConductivity"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Condutividade de Saída da OR
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_2ND_STEP.ROOutputConductivity"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_2ND_STEP.ROOutputConductivity"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Rejeição de Salinidade
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_2ND_STEP.SalinityRejectionRate"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_2ND_STEP.SalinityRejectionRate"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Fluxo do Permeado
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_2ND_STEP.PermeateFlowRate"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_2ND_STEP.PermeateFlowRate"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Fluxo de Rejeição
                              </p>
                              <Field
                                type="number"
                                name="REVERSE_OSMOSIS_2ND_STEP.RejectFlowRate"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="REVERSE_OSMOSIS_2ND_STEP.RejectFlowRate"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="d-flex justify-center mt-4">
                    <Card>
                      <Card.Header>
                        <Card.Title className="text-center">Loop</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        {/* LOOP */}
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Pressão de Saída
                              </p>
                              <Field
                                type="number"
                                name="LOOP.OutputPressure"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="LOOP.OutputPressure"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Pressão de Retorno
                              </p>
                              <Field
                                type="number"
                                name="LOOP.ReturnPressure"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="LOOP.ReturnPressure"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Teste de Ozônio
                              </p>
                              <Field
                                as="select"
                                name="LOOP.OzoneTestBefore1stShift"
                                className="form-control mb-2"
                              >
                                <option value="">Selecione</option>
                                <option value="true">Presente</option>
                                <option value="false">Ausente</option>
                              </Field>
                              <ErrorMessage
                                name="LOOP.OzoneTestBefore1stShift"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <p className="block text-sm font-medium text-gray-700">
                                Condutividade
                              </p>
                              <Field
                                type="number"
                                name="LOOP.Conductivity"
                                className="form-control mb-2"
                              />
                              <ErrorMessage
                                name="LOOP.Conductivity"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <div className="flex justify-center items-center  w-full mt-5">
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? " Salvando..." : " Salvar"}
                    </Button>
                  </div>
                </Modal.Footer>
              </Form>
            </>
          )}
        </Formik>
      </ModalForm>
    </div>
  );
};

export default WaterParametersForm;


