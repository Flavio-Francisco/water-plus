"use client";
import React from "react";
import { AnalysisResult } from "@/utils/models/analysis";
import { FormAnalysis } from "@/utils/validation/FormAnalysisReselt";
import { Formik, Field, ErrorMessage } from "formik";
import {
  Button,
  Container,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";

// Valores iniciais do formulário
export const FormInitialValues: AnalysisResult = {
  SampleDescription: {
    sampleName: "",
    samplingAddress: "",
    city: "",
    state: "",
    zipCode: "",
    sampleMatrixAndOrigin: "",
    samplingDate: "",
    samplingResponsible: "",
  },
  MicrobiologigoAssays: {
    eColiPresence: "",
    totalColiformsPresence: "",
    heterotrophicBacteriaCount: "",
    endotoxins: "",
  },
};

const ResultForm = () => {
  const handleSubmit = (values: AnalysisResult) => {
    console.log("Dados do formulário submetidos:", values);
  };

  return (
    <Container>
      <Formik
        initialValues={FormInitialValues}
        validationSchema={FormAnalysis}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="m-5 mb-5 d-flex justify-content-center align-items-center">
              <h3 className="text-center">Dados da Amostras</h3>
            </Row>

            <Row className="shadow p-3 mb-5 bg-white rounded">
              <Row>
                <Col>
                  <FormGroup>
                    <FormLabel htmlFor="sampleName">
                      Descrição da Amostra:
                    </FormLabel>
                    <Field
                      id="sampleName"
                      as={FormControl}
                      type="text"
                      name="SampleDescription.sampleName"
                      isInvalid={
                        !!errors.SampleDescription?.sampleName &&
                        touched.SampleDescription?.sampleName
                      }
                    />
                    <ErrorMessage name="SampleDescription.sampleName" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <FormLabel htmlFor="samplingAddress">
                      Endereço de amostragem
                    </FormLabel>
                    <Field
                      id="samplingAddress"
                      as={FormControl}
                      type="text"
                      name="SampleDescription.samplingAddress"
                      isInvalid={
                        !!errors.SampleDescription?.samplingAddress &&
                        touched.SampleDescription?.samplingAddress
                      }
                    />
                    <ErrorMessage name="SampleDescription.samplingAddress" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                  <FormGroup>
                    <FormLabel htmlFor="city">Cidade</FormLabel>
                    <Field
                      id="city"
                      as={FormControl}
                      type="text"
                      name="SampleDescription.city"
                      isInvalid={
                        !!errors.SampleDescription?.city &&
                        touched.SampleDescription?.city
                      }
                    />
                    <ErrorMessage name="SampleDescription.city" />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4}>
                  <FormGroup>
                    <FormLabel htmlFor="state">Estado</FormLabel>
                    <Field
                      id="state"
                      as={FormControl}
                      type="text"
                      name="SampleDescription.state"
                      isInvalid={
                        !!errors.SampleDescription?.state &&
                        touched.SampleDescription?.state
                      }
                    />
                    <ErrorMessage name="SampleDescription.state" />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4}>
                  <FormGroup>
                    <FormLabel htmlFor="zipCode">CEP</FormLabel>
                    <Field
                      id="zipCode"
                      as={FormControl}
                      type="text"
                      name="SampleDescription.zipCode"
                      isInvalid={
                        !!errors.SampleDescription?.zipCode &&
                        touched.SampleDescription?.zipCode
                      }
                    />
                    <ErrorMessage name="SampleDescription.zipCode" />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <FormGroup>
                    <FormLabel htmlFor="sampleMatrixAndOrigin">
                      Matriz de Amostra e Origem
                    </FormLabel>
                    <Field
                      id="sampleMatrixAndOrigin"
                      as={FormControl}
                      type="text"
                      name="SampleDescription.sampleMatrixAndOrigin"
                      isInvalid={
                        !!errors.SampleDescription?.sampleMatrixAndOrigin &&
                        touched.SampleDescription?.sampleMatrixAndOrigin
                      }
                    />
                    <ErrorMessage name="SampleDescription.sampleMatrixAndOrigin" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <FormGroup>
                    <FormLabel htmlFor="samplingDate">
                      Data da Coleta
                    </FormLabel>
                    <Field
                      id="samplingDate"
                      as={FormControl}
                      type="date"
                      name="SampleDescription.samplingDate"
                      isInvalid={
                        !!errors.SampleDescription?.samplingDate &&
                        touched.SampleDescription?.samplingDate
                      }
                    />
                    <ErrorMessage name="SampleDescription.samplingDate" />
                  </FormGroup>
                </Col>
                <Col xs={12} md={6}>
                  <FormGroup>
                    <FormLabel htmlFor="samplingResponsible">
                      Responsável pela Coleta
                    </FormLabel>
                    <Field
                      id="samplingResponsible"
                      as={FormControl}
                      type="text"
                      name="SampleDescription.samplingResponsible"
                      isInvalid={
                        !!errors.SampleDescription?.samplingResponsible &&
                        touched.SampleDescription?.samplingResponsible
                      }
                    />
                    <ErrorMessage name="SampleDescription.samplingResponsible" />
                  </FormGroup>
                </Col>
              </Row>
            </Row>


            
          
            <Row className="m-5 mb-5 d-flex justify-content-center align-items-center">
              <h3 className="text-center">Resultados</h3>
            </Row>
            <Row className="shadow p-3 mb-5 bg-white rounded">
              <Row className="p-3">
                <Col xs={12} sm={4} className="mb-3 mb-sm-0">
                  <FormGroup>
                    <FormLabel htmlFor="eColiPresence">
                      Escherichia Coli
                    </FormLabel>
                    <Field
                      id="eColiPresence"
                      as={FormControl}
                      type="text"
                      name="MicrobiologigoAssays.eColiPresence"
                      isInvalid={
                        !!errors.MicrobiologigoAssays?.eColiPresence &&
                        touched.MicrobiologigoAssays?.eColiPresence
                      }
                    />
                    <ErrorMessage name="MicrobiologigoAssays.eColiPresence" />
                  </FormGroup>
                </Col>
                <Col xs={12} sm={4} className="mb-3 mb-sm-0">
                  <FormGroup>
                    <FormLabel htmlFor="totalColiformsPresence">
                      Coliformes Totais
                    </FormLabel>
                    <Field
                      id="totalColiformsPresence"
                      as={FormControl}
                      type="text"
                      name="MicrobiologigoAssays.totalColiformsPresence"
                      isInvalid={
                        !!errors.MicrobiologigoAssays?.totalColiformsPresence &&
                        touched.MicrobiologigoAssays?.totalColiformsPresence
                      }
                    />
                    <ErrorMessage name="MicrobiologigoAssays.totalColiformsPresence" />
                  </FormGroup>
                </Col>
                <Col xs={12} sm={4}>
                  <FormGroup>
                    <FormLabel htmlFor="heterotrophicBacteriaCount">
                      Heterotróficas
                    </FormLabel>
                    <Field
                      id="heterotrophicBacteriaCount"
                      as={FormControl}
                      type="text"
                      name="MicrobiologigoAssays.heterotrophicBacteriaCount"
                      isInvalid={
                        !!errors.MicrobiologigoAssays?.heterotrophicBacteriaCount &&
                        touched.MicrobiologigoAssays?.heterotrophicBacteriaCount
                      }
                    />
                    <ErrorMessage name="MicrobiologigoAssays.heterotrophicBacteriaCount" />
                  </FormGroup>
                </Col>
              </Row>
            </Row>

            <Row className="m-5 mb-5 d-flex justify-content-center align-items-center">
              <Col className="d-flex justify-content-center align-items-center">
                <Button className="w-auto bg-blue-700" type="submit">
                  Salvar
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ResultForm;
