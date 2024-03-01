"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ApvisaModel } from "@/utils/models/Apvisa";
import { validationApvisa } from "@/utils/validation/ApevisaForm";
import {
  Button,
  Col,
  Container,
  Form as BootstrapForm,
  Row,
} from "react-bootstrap";

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
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {

    console.log(values);
    setSubmitting(false);
   
  };

  return (
    <Container style={{width:'90%', display :'flex',justifyContent:'center',flexDirection:'column'}}  className="shadow rounded p-5">
      <h1>Coleta Apevisa</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationApvisa}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form style={{width:"100%"}}>
            <BootstrapForm.Group as={Row} controlId="formName">
              <BootstrapForm.Label column sm={2} >
                Ponto da Coleta:
              </BootstrapForm.Label>
              <Col sm={10}>
                <Field type="text" name="name" className="form-control "style={{width:"50%"}}  />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </BootstrapForm.Group>
            <BootstrapForm.Group as={Row} controlId="formCianoBacteria" style={{width:"50%"}}>
              <BootstrapForm.Label column sm={2}>
                Ciano Bactérias:
              </BootstrapForm.Label>
              <Col sm={10}>
                <Field type="radio" name="cianoBacteria" value="Satifatório" style={{width:"50%"}}/>{" "}
                Satifatório
                <Field
                  type="radio"
                  name="cianoBacteria"
                  value="Não Satifatório"
                />{" "}
                Não Satifatório
                <Field
                  type="radio"
                  name="cianoBacteria"
                  value="Não Coletado"
                />{" "}
                Não Coletado
                <ErrorMessage
                  name="cianoBacteria"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </BootstrapForm.Group>
            <BootstrapForm.Group as={Row} controlId="formEscherichaColi" style={{width:"50%"}}>
              <BootstrapForm.Label column sm={2}>
                Eschericha Coli:
              </BootstrapForm.Label>
              <Col sm={10}>
                <Field type="radio" name="escherichaColi" value="Satifatório" />{" "}
                Satifatório
                <Field
                  type="radio"
                  name="escherichaColi"
                  value="Não Satifatório"
                />{" "}
                Não Satifatório
                <Field
                  type="radio"
                  name="escherichaColi"
                  value="Não Coletado"
                />{" "}
                Não Coletado
                <ErrorMessage
                  name="escherichaColi"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </BootstrapForm.Group>
            <BootstrapForm.Group as={Row} controlId="formEndotoxin">
              <BootstrapForm.Label column sm={2} style={{width:"50%"}}>
                Endotoxina:
              </BootstrapForm.Label>
              <Col sm={10}>
                <Field type="radio" name="endotoxin" value="Satifatório" />{" "}
                Satifatório
                <Field
                  type="radio"
                  name="endotoxin"
                  value="Não Satifatório"
                />{" "}
                Não Satifatório
                <Field type="radio" name="endotoxin" value="Não Coletado" /> Não
                Coletado
                <ErrorMessage
                  name="endotoxin"
                  component="div"
                  className="text-danger"
                />
                <ErrorMessage
                  name="endotoxin"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </BootstrapForm.Group>
            <BootstrapForm.Group as={Row} controlId="formHeterotrophic">
              <BootstrapForm.Label column sm={2} style={{width:"50%"}}>
                Heterotróficas:
              </BootstrapForm.Label>
              <Col sm={10}>
                <Field type="radio" name="heterotrophic" value="Satifatório" />{" "}
                Satifatório
                <Field
                  type="radio"
                  name="heterotrophic"
                  value="Não Satifatório"
                />{" "}
                Não Satifatório
                <Field type="radio" name="endotoxin" value="Não Coletado" /> Não
                Coletado
                <ErrorMessage
                  name="heterotrophic"
                  component="div"
                  className="text-danger"
                />
                <ErrorMessage
                  name="heterotrophic"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </BootstrapForm.Group>
            <BootstrapForm.Group as={Row} controlId="formTotalColiforms" style={{width:"50%"}}>
              <BootstrapForm.Label column sm={2}>
                Coliformes Totais:
              </BootstrapForm.Label>
              <Col sm={10}>
                <Field type="radio" name="totalColiforms" value="Satifatório" />{" "}
                Satifatório
                <Field
                  type="radio"
                  name="totalColiforms"
                  value="Não Satifatório"
                />{" "}
                Não Satifatório
                <Field
                  type="radio"
                  name="totalColiforms"
                  value="Não Coletado"
                />{" "}
                Não Coletado
                <ErrorMessage
                  name="totalColiforms"
                  component="div"
                  className="text-danger"
                />
                <ErrorMessage
                  name="totalColiforms"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </BootstrapForm.Group>
            <BootstrapForm.Group as={Row} controlId="formSeedingInDepth" style={{ display:'flex', flexDirection:'row'}} >
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',}}>
                Semeando em profundidade:
              </BootstrapForm.Label>
              <Col sm={10} style={{ height:40,width:"40%",display:'flex',justifyContent:'center',textAlign:'center'}}>
                <Field  type="radio" name="seedingInDepth" value="Satifatório" />{" "}
                <p style={{ height:40,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:8, marginLeft:5,marginRight:10}}>
                Satifatório
                </p> 
                <Field
                  type="radio"
                  name="seedingInDepth"
                  value="Não Satifatório"
                />{" "}
               <p style={{ height:40,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:8, marginLeft:5,marginRight:10}}>Não Satifatório</p> 
                <Field
                  type="radio"
                  name="tseedingInDepth"
                  value="Não Coletado"
                />{" "}
                 <p style={{ height:40,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:8, marginLeft:5,marginRight:10}}>
                Não Coletado
                </p>
                <ErrorMessage
                  name="seedingInDepth"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </BootstrapForm.Group>

            <BootstrapForm.Group as={Row} controlId="formSeedingOnSurface" style={{ display:'flex', flexDirection:'row'}}>
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',}}>
                Semeadura na superfície:
              </BootstrapForm.Label>
              <Col sm={10}>
                <Field
                  type="radio"
                  name="seedingOnSurface"
                  value="Satifatório"
                />{" "}
                Satifatório
                <Field
                  type="radio"
                  name="seedingOnSurface"
                  value="Não Satifatório"
                />{" "}
                Não Satifatório
                <Field
                  type="radio"
                  name="seedingOnSurface"
                  value="Não Coletado"
                />{" "}
                Não Coletado
                <ErrorMessage
                  name="seedingInDepth"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </BootstrapForm.Group>

            <BootstrapForm.Group as={Row} controlId="formConductivity" style={{ display:'flex', flexDirection:'row'}}>
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',}}>
                Condutividade:
              </BootstrapForm.Label>
              <Col sm={10}>
                <Field type="radio" name="conductivity" value="Satifatório" />{" "}
                Satifatório
                <Field
                  type="radio"
                  name="conductivity"
                  value="Não Satifatório"
                />{" "}
                Não Satifatório
                <Field
                  type="radio"
                  name="conductivity"
                  value="Não Coletado"
                />{" "}
                Não Coletado
                <ErrorMessage
                  name="conductivity"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </BootstrapForm.Group>

            <BootstrapForm.Group as={Row} controlId="formFreeChlorine" style={{ display:'flex', flexDirection:'row'}}>
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',}}>
                Cloro Livre:
              </BootstrapForm.Label>
              <Col sm={10}>
                <Field type="radio" name="freeChlorine" value="Satifatório" />{" "}
                Satifatório
                <Field
                  type="radio"
                  name="freeChlorine"
                  value="Não Satifatório"
                />{" "}
                Não Satifatório
                <Field
                  type="radio"
                  name="freeChlorine"
                  value="Não Coletado"
                />{" "}
                Não Coletado
                <ErrorMessage
                  name="freeChlorine"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </BootstrapForm.Group>

            <BootstrapForm.Group as={Row} controlId="formPH" style={{ display:'flex', flexDirection:'row'}}>
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',}}>
                PH:
              </BootstrapForm.Label>
              <Col sm={10}>
                <Field type="radio" name="pH" value="Satifatório" />
                Satifatório
                <Field type="radio" name="pH" value="Não Satifatório" /> Não
                Satifatório
                <Field type="radio" name="pH" value="Não Coletado" /> Não
                Coletado
                <ErrorMessage
                  name="pH"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </BootstrapForm.Group>

            <BootstrapForm.Group as={Row} controlId="formPotentiometry" style={{ display:'flex', flexDirection:'row'}}>
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',}}>
                Potenciometria:
              </BootstrapForm.Label>
              <Col sm={10}>
                <Field type="radio" name="potentiometry" value="Satifatório" />{" "}
                Satifatório
                <Field
                  type="radio"
                  name="potentiometry"
                  value="Não Satifatório"
                />{" "}
                Não Satifatório
                <Field
                  type="radio"
                  name="potentiometry"
                  value="Não Coletado"
                />{" "}
                Não Coletado
                <ErrorMessage
                  name="potentiometry"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </BootstrapForm.Group>

            <Button type="submit" disabled={isSubmitting}>
              Salva
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default FormApvisa;
