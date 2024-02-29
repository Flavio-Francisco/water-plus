"use client";
import React from "react";
import { AnalysisResult } from "@/utils/models/analysis";
import { FormAnalysis } from "@/utils/validation/FormAnalysisReselt";
import { FormInitialValues } from "@/utils/models/Data";
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

const ResultForm = () => {
  const handleSubmit = (values: AnalysisResult) => {
    console.log(values);
  };

  return (
    <Container>
      <Formik
        initialValues={FormInitialValues}
        validationSchema={FormAnalysis}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Row className="m-5 mb-5 d-flex justify-content-center align-items-center">
              <h3 className="text-center">Dados da Amostras</h3>
            </Row>

            <Row className="shadow p-3 mb-5 bg-white rounded">
              <Row>
                <Col>
                  <FormGroup>
                    <FormLabel htmlFor="SampleDescription.sampleName">
                      Descrição da Amostra:
                    </FormLabel>
                    <Field
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
                    <FormLabel htmlFor="SampleDescription.samplingAddress">
                      Endereço de amostragem
                    </FormLabel>
                    <Field
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
                <Col>
                  <FormGroup>
                    <FormLabel htmlFor="SampleDescription.city">
                      Cidade
                    </FormLabel>
                    <Field
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
                <Col>
                  <FormGroup>
                    <FormLabel htmlFor="SampleDescription.state">
                      Estado
                    </FormLabel>
                    <Field
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
                <Col>
                  <FormGroup>
                    <FormLabel htmlFor="SampleDescription.zipCode">
                      CEP
                    </FormLabel>
                    <Field
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
                <Col>
                  <FormGroup>
                    <FormLabel htmlFor="SampleDescription.sampleMatrixAndOrigin">
                      Matriz de Amostra e Origem
                    </FormLabel>
                    <Field
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
              <Row className="d-flex justify-content-center align-items-center">
                <Col style={{ width: "30%" }}>
                  <FormGroup style={{ width: "30%" }}>
                    <FormLabel htmlFor="SampleDescription.samplingDate">
                      Data da Coleta
                    </FormLabel>
                    <Field
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
                <Col style={{ width: "70%" }}>
                  <FormGroup style={{ width: "70%" }}>
                    <FormLabel htmlFor="SampleDescription.samplingResponsible">
                      Responsável pela Coleta
                    </FormLabel>
                    <Field
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
              <Row className=" p-3 ">
                <Col>
                  <FormGroup>
                    <FormLabel htmlFor="MicrobiologigoAssays.eColiPresence">
                      Escherichia Coli
                    </FormLabel>
                    <Field
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
                <Col>
                  <FormGroup>
                    <FormLabel htmlFor="MicrobiologigoAssays.totalColiformsPresence">
                      Coliformes Totais
                    </FormLabel>
                    <Field
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
                <Col>
                  <FormGroup>
                    <FormLabel htmlFor="MicrobiologigoAssays.heterotrophicBacteriaCount">
                      Heterotróficas
                    </FormLabel>
                    <Field
                      as={FormControl}
                      type="text"
                      name="MicrobiologigoAssays.heterotrophicBacteriaCount"
                      isInvalid={
                        !!errors.MicrobiologigoAssays
                          ?.heterotrophicBacteriaCount &&
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
                <Button style={{ width: "100px" }} type="submit">
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
