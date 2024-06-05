"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ApvisaModel } from "@/utils/models/Apvisa";
import { validationApvisa } from "@/utils/validation/ApevisaForm";
import {

  Col,
  Container,
  Form as BootstrapForm,
  Row,
} from "react-bootstrap";
import Line from "../line";
import { Button } from "@mui/material";

const initialValues: ApvisaModel = {
  name: "",
  cianoBacteria: "",
  escherichaColi: "",
  conductivity: "",
  endotoxin: "",
  freeChlorine: "",
  pH: "",
  heterotrophic: "",
  totalColiforms: "",
  potentiometry: "",
  seedingInDepth: "",
  seedingOnSurface: "",
};

const FormApvisa: React.FC = () => {
  const handleSubmit = (
    values: ApvisaModel,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Container
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      className=" p-5"
    >
      <Row className="m-5 mb-5 d-flex justify-content-center align-items-center">
        <h1 className="text-center text-lg font-bold">Coleta Apevisa</h1>
      </Row>

      <Formik
        initialValues={initialValues}
        validationSchema={validationApvisa}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className=" w-full">
            <BootstrapForm.Group as={Row} controlId="formName">
              <BootstrapForm.Label column sm={2} className="font-bold">
                Ponto da Coleta:
              </BootstrapForm.Label>
              <Col sm={10} className="mb-4 sm:w-1/5">
                <Field name="name" as="select" className="form-control">
                  <option value="">Selecione...</option>
                  <option value="Água de Alimentação">
                    Água de Alimentação
                  </option>
                  <option value="Pós-Carvão">Pós-Carvão</option>
                  <option value="Osmose 1º Passo">Osmose 1º Passo</option>
                  <option value="Osmose 2º Passo">Osmose 2º Passo</option>
                  <option value="Saída do Looping">Saída do Looping</option>
                  <option value="Entrada do Looping">Entrada do Looping</option>
                  <option value="Osmose Portatio 1">Osmose Portatio 1</option>
                  <option value="Osmose Portatio 2">Osmose Portatio 2</option>
                  <option value="Osmose Portatio 3">Osmose Portatio 3</option>
                  <option value="Osmose Portatio 4">Osmose Portatio 4</option>
                </Field>

                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger "
                />
              </Col>
              <Line />
            </BootstrapForm.Group>
            <BootstrapForm.Group
              as={Row}
              controlId="formCianoBacteria"
              className="flex flex-col"
            >
              <BootstrapForm.Label
                column
                sm={2}
                className="w-auto text-left  h-10  font-bold"
              >
                Ciano Bactérias:
              </BootstrapForm.Label>
              <Col sm={10} className="h-10 flex justify-center items-center">
                <Field
                  type="radio"
                  name="cianoBacteria"
                  value="Satifatório"
                  id="cianoBacteriaSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="cianoBacteriaSatisfatorio" className="mr-5">
                  Satisfatório
                </label>
                <Field
                  type="radio"
                  name="cianoBacteria"
                  value="Não Satifatório"
                  id="cianoBacteriaNaoSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="cianoBacteriaNaoSatisfatorio" className="mr-5">
                  Não Satisfatório
                </label>
                <Field
                  type="radio"
                  name="cianoBacteria"
                  value="Não Coletado"
                  id="cianoBacteriaNaoColetado"
                  className="mr-2"
                />
                <label htmlFor="cianoBacteriaNaoColetado">Não Coletado</label>
                <ErrorMessage
                  name="cianoBacteria"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line />
            </BootstrapForm.Group>

            <BootstrapForm.Group
              as={Row}
              controlId="formEscherichaColi"
              className="flex flex-col"
            >
              <BootstrapForm.Label
                column
                sm={2}
                className="w-auto text-left  h-10  font-bold"
              >
                Eschericha Coli:
              </BootstrapForm.Label>
              <Col sm={10} className="h-10 flex justify-center items-center">
                <Field
                  type="radio"
                  name="escherichaColi"
                  value="Satifatório"
                  id="escherichaColiSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="escherichaColiSatisfatorio" className="mr-5">
                  Satisfatório
                </label>
                <Field
                  type="radio"
                  name="escherichaColi"
                  value="Não Satifatório"
                  id="escherichaColiNaoSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="escherichaColiNaoSatisfatorio" className="mr-5">
                  Não Satisfatório
                </label>
                <Field
                  type="radio"
                  name="escherichaColi"
                  value="Não Coletado"
                  id="escherichaColiNaoColetado"
                  className="mr-2"
                />
                <label htmlFor="escherichaColiNaoColetado">Não Coletado</label>
                <ErrorMessage
                  name="escherichaColi"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line />
            </BootstrapForm.Group>
            <BootstrapForm.Group
              as={Row}
              controlId="formEndotoxin"
              className="flex flex-col"
            >
              <BootstrapForm.Label
                column
                sm={2}
                className="w-auto text-left  h-10  font-bold"
              >
                Endotoxina:
              </BootstrapForm.Label>
              <Col sm={10} className="h-10 flex justify-center items-center">
                <Field
                  type="radio"
                  name="endotoxin"
                  value="Satifatório"
                  id="endotoxinSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="endotoxinSatisfatorio" className="mr-5">
                  Satisfatório
                </label>
                <Field
                  type="radio"
                  name="endotoxin"
                  value="Não Satifatório"
                  id="endotoxinNaoSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="endotoxinNaoSatisfatorio" className="mr-5">
                  Não Satisfatório
                </label>
                <Field
                  type="radio"
                  name="endotoxin"
                  value="Não Coletado"
                  id="endotoxinNaoColetado"
                  className="mr-2"
                />
                <label htmlFor="endotoxinNaoColetado">Não Coletado</label>
                <ErrorMessage
                  name="endotoxin"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line />
            </BootstrapForm.Group>
            <BootstrapForm.Group
              as={Row}
              controlId="formHeterotrophic"
              className="flex flex-col"
            >
              <BootstrapForm.Label
                column
                sm={2}
                className="w-auto text-left  h-10  font-bold"
              >
                Heterotróficas:
              </BootstrapForm.Label>
              <Col sm={10} className="h-10 flex justify-center items-center">
                <Field
                  type="radio"
                  name="heterotrophic"
                  value="Satifatório"
                  id="heterotrophicSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="heterotrophicSatisfatorio" className="mr-5">
                  Satisfatório
                </label>
                <Field
                  type="radio"
                  name="heterotrophic"
                  value="Não Satifatório"
                  id="heterotrophicNaoSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="heterotrophicNaoSatisfatorio" className="mr-5">
                  Não Satisfatório
                </label>
                <Field
                  type="radio"
                  name="heterotrophic"
                  value="Não Coletado"
                  id="heterotrophicNaoColetado"
                  className="mr-2"
                />
                <label htmlFor="heterotrophicNaoColetado">Não Coletado</label>
                <ErrorMessage
                  name="heterotrophic"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line />
            </BootstrapForm.Group>

            <BootstrapForm.Group
              as={Row}
              controlId="formTotalColiforms"
              className="flex flex-col"
            >
              <BootstrapForm.Label
                column
                sm={2}
                className="w-auto text-left  h-10  font-bold"
              >
                Coliformes Totais:
              </BootstrapForm.Label>
              <Col sm={10} className="h-10 flex justify-center items-center">
                <Field
                  type="radio"
                  name="totalColiforms"
                  value="Satifatório"
                  id="totalColiformsSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="totalColiformsSatisfatorio" className="mr-5">
                  Satisfatório
                </label>
                <Field
                  type="radio"
                  name="totalColiforms"
                  value="Não Satifatório"
                  id="totalColiformsNaoSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="totalColiformsNaoSatisfatorio" className="mr-5">
                  Não Satisfatório
                </label>
                <Field
                  type="radio"
                  name="totalColiforms"
                  value="Não Coletado"
                  id="totalColiformsNaoColetado"
                  className="mr-2"
                />
                <label htmlFor="totalColiformsNaoColetado">Não Coletado</label>
                <ErrorMessage
                  name="totalColiforms"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line />
            </BootstrapForm.Group>
            <BootstrapForm.Group
              as={Row}
              controlId="formSeedingInDepth"
              className="flex flex-col"
            >
              <BootstrapForm.Label
                column
                sm={2}
                className="w-auto text-left  h-10  font-bold"
              >
                Semeando em profundidade:
              </BootstrapForm.Label>
              <Col sm={10} className="h-10 flex justify-center items-center">
                <Field
                  type="radio"
                  name="seedingInDepth"
                  value="Satifatório"
                  id="seedingInDepthSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="seedingInDepthSatisfatorio" className="mr-5">
                  Satisfatório
                </label>
                <Field
                  type="radio"
                  name="seedingInDepth"
                  value="Não Satifatório"
                  id="seedingInDepthNaoSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="seedingInDepthNaoSatisfatorio" className="mr-5">
                  Não Satisfatório
                </label>
                <Field
                  type="radio"
                  name="seedingInDepth"
                  value="Não Coletado"
                  id="seedingInDepthNaoColetado"
                  className="mr-2"
                />
                <label htmlFor="seedingInDepthNaoColetado">Não Coletado</label>
                <ErrorMessage
                  name="seedingInDepth"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line />
            </BootstrapForm.Group>

            <BootstrapForm.Group
              as={Row}
              controlId="formSeedingOnSurface"
              className="flex flex-col"
            >
              <BootstrapForm.Label
                column
                sm={2}
                className="w-auto text-left  h-10  font-bold"
              >
                Semeadura na superfície:
              </BootstrapForm.Label>
              <Col sm={10} className="h-10 flex justify-center items-center">
                <Field
                  type="radio"
                  name="seedingOnSurface"
                  value="Satifatório"
                  id="seedingOnSurfaceSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="seedingOnSurfaceSatisfatorio" className="mr-5">
                  Satisfatório
                </label>
                <Field
                  type="radio"
                  name="seedingOnSurface"
                  value="Não Satifatório"
                  id="seedingOnSurfaceNaoSatisfatorio"
                  className="mr-2"
                />
                <label
                  htmlFor="seedingOnSurfaceNaoSatisfatorio"
                  className="mr-5"
                >
                  Não Satisfatório
                </label>
                <Field
                  type="radio"
                  name="seedingOnSurface"
                  value="Não Coletado"
                  id="seedingOnSurfaceNaoColetado"
                  className="mr-2"
                />
                <label htmlFor="seedingOnSurfaceNaoColetado">
                  Não Coletado
                </label>
                <ErrorMessage
                  name="seedingOnSurface"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line />
            </BootstrapForm.Group>
            <BootstrapForm.Group
              as={Row}
              controlId="formConductivity"
              className="flex flex-col"
            >
              <BootstrapForm.Label
                column
                sm={2}
                className="w-auto text-left  h-10  font-bold"
              >
                Condutividade:
              </BootstrapForm.Label>
              <Col sm={10} className="h-10 flex justify-center items-center">
                <Field
                  type="radio"
                  name="conductivity"
                  value="Satifatório"
                  id="conductivitySatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="conductivitySatisfatorio" className="mr-5">
                  Satisfatório
                </label>
                <Field
                  type="radio"
                  name="conductivity"
                  value="Não Satifatório"
                  id="conductivityNaoSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="conductivityNaoSatisfatorio" className="mr-5">
                  Não Satisfatório
                </label>
                <Field
                  type="radio"
                  name="conductivity"
                  value="Não Coletado"
                  id="conductivityNaoColetado"
                  className="mr-2"
                />
                <label htmlFor="conductivityNaoColetado">Não Coletado</label>
                <ErrorMessage
                  name="conductivity"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line />
            </BootstrapForm.Group>

            <BootstrapForm.Group
              as={Row}
              controlId="formFreeChlorine"
              className="flex flex-col"
            >
              <BootstrapForm.Label
                column
                sm={2}
                className="w-auto text-left  h-10  font-bold"
              >
                Cloro Livre:
              </BootstrapForm.Label>
              <Col sm={10} className="h-10 flex justify-center items-center">
                <Field
                  type="radio"
                  name="freeChlorine"
                  value="Satifatório"
                  id="freeChlorineSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="freeChlorineSatisfatorio" className="mr-5">
                  Satisfatório
                </label>
                <Field
                  type="radio"
                  name="freeChlorine"
                  value="Não Satifatório"
                  id="freeChlorineNaoSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="freeChlorineNaoSatisfatorio" className="mr-5">
                  Não Satisfatório
                </label>
                <Field
                  type="radio"
                  name="freeChlorine"
                  value="Não Coletado"
                  id="freeChlorineNaoColetado"
                  className="mr-2"
                />
                <label htmlFor="freeChlorineNaoColetado">Não Coletado</label>
                <ErrorMessage
                  name="freeChlorine"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line />
            </BootstrapForm.Group>
            <BootstrapForm.Group
              as={Row}
              controlId="formPH"
              className="flex flex-col"
            >
              <BootstrapForm.Label
                column
                sm={2}
                className="w-auto text-left  h-10  font-bold"
              >
                PH:
              </BootstrapForm.Label>
              <Col sm={10} className="h-10 flex justify-center items-center">
                <Field
                  type="radio"
                  name="pH"
                  value="Satifatório"
                  id="pHSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="pHSatisfatorio" className="mr-5">
                  Satisfatório
                </label>
                <Field
                  type="radio"
                  name="pH"
                  value="Não Satifatório"
                  id="pHNaoSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="pHNaoSatisfatorio" className="mr-5">
                  Não Satisfatório
                </label>
                <Field
                  type="radio"
                  name="pH"
                  value="Não Coletado"
                  id="pHNaoColetado"
                  className="mr-2"
                />
                <label htmlFor="pHNaoColetado">Não Coletado</label>
                <ErrorMessage
                  name="pH"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line />
            </BootstrapForm.Group>

            <BootstrapForm.Group
              as={Row}
              controlId="formPotentiometry"
              className="flex flex-col"
            >
              <BootstrapForm.Label
                column
                sm={2}
                className="w-auto text-left  h-10  font-bold"
              >
                Potenciometria:
              </BootstrapForm.Label>
              <Col sm={10} className=" h-10 flex justify-center items-center">
                <Field
                  type="radio"
                  name="potentiometry"
                  value="Satifatório"
                  id="potentiometrySatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="potentiometrySatisfatorio" className="mr-5">
                  Satisfatório
                </label>
                <Field
                  type="radio"
                  name="potentiometry"
                  value="Não Satifatório"
                  id="potentiometryNaoSatisfatorio"
                  className="mr-2"
                />
                <label htmlFor="potentiometryNaoSatisfatorio" className="mr-5">
                  Não Satisfatório
                </label>
                <Field
                  type="radio"
                  name="potentiometry"
                  value="Não Coletado"
                  id="potentiometryNaoColetado"
                  className="mr-2"
                />
                <label htmlFor="potentiometryNaoColetado">Não Coletado</label>
                <ErrorMessage
                  name="potentiometry"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line />
            </BootstrapForm.Group>
            <div className=" mt-8">
              <Button variant="contained" type="submit" disabled={isSubmitting}>
                Salvar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default FormApvisa;
