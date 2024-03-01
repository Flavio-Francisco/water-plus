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
import Line from "../line";

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
              <BootstrapForm.Label column sm={2} style={{fontWeight:'bold'}} >
                Ponto da Coleta:
              </BootstrapForm.Label>
              <Col sm={10} style={{marginBottom:10,width:"20%" }}>
              
              <Field name="name" as="select" className="form-control">
                <option value="">Selecione...</option>
                <option value="Água de Alimentação">Água de Alimentação</option>
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
              <Line/>
            </BootstrapForm.Group>
            <BootstrapForm.Group as={Row} controlId="formCianoBacteria"style={{ display:'flex', flexDirection:'column'}} >
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center', fontWeight:'bold' }}>
                Ciano Bactérias:
              </BootstrapForm.Label>
              <Col sm={10} style={{ height:30,width:"40%",display:'flex',justifyContent:'center',textAlign:'center',}}>
                <Field type="radio" name="cianoBacteria" value="Satifatório" />{" "}
                <p style={{ height:40,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Satifatório
                </p>
                <Field
                  type="radio"
                  name="cianoBacteria"
                  value="Não Satifatório"
                />{" "}
                  <p style={{ height:40,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Satifatório
                </p>
                <Field
                  type="radio"
                  name="cianoBacteria"
                  value="Não Coletado"
                />{" "}
                <p style={{ height:40,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Coletado
                </p>
                <ErrorMessage
                  name="cianoBacteria"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line/>
            </BootstrapForm.Group>
            <BootstrapForm.Group as={Row} controlId="formEscherichaColi" style={{ display:'flex', flexDirection:'column'}}>
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',fontWeight:'bold'}}>
                Eschericha Coli:
              </BootstrapForm.Label>
              <Col sm={10} style={{ height:30,width:"40%",display:'flex',justifyContent:'center',textAlign:'center'}}>
                <Field type="radio" name="escherichaColi" value="Satifatório" />{" "}
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Satifatório
                </p>
                <Field
                  type="radio"
                  name="escherichaColi"
                  value="Não Satifatório"
                />{" "}
                 <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Satifatório
                </p>
                <Field
                  type="radio"
                  name="escherichaColi"
                  value="Não Coletado"
                />{" "}
                  <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Coletado
                </p>
                <ErrorMessage
                  name="escherichaColi"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line/>
            </BootstrapForm.Group>
            <BootstrapForm.Group as={Row} controlId="formEndotoxin" style={{ display:'flex', flexDirection:'column'}}>
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',fontWeight:'bold'}}>
                Endotoxina:
              </BootstrapForm.Label>
              <Col sm={10} style={{ height:30,width:"40%",display:'flex',justifyContent:'center',textAlign:'center'}}>
                <Field type="radio" name="endotoxin" value="Satifatório" />{" "}
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Satifatório
                </p>
                <Field
                  type="radio"
                  name="endotoxin"
                  value="Não Satifatório"
                />{" "}
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Satifatório
                </p>
                <Field type="radio" name="endotoxin" value="Não Coletado" />
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                 Não
                Coletado
                </p>
                <ErrorMessage
                  name="endotoxin"
                  component="div"
                  className="text-danger"
                />
    
              </Col>
              <Line/>
            </BootstrapForm.Group>
            <BootstrapForm.Group as={Row} controlId="formHeterotrophic" style={{ display:'flex', flexDirection:'column'}}>
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',fontWeight:'bold'}}>
                Heterotróficas:
              </BootstrapForm.Label>
              <Col sm={10} style={{ height:30,width:"40%",display:'flex',justifyContent:'center',textAlign:'center'}}>
                <Field type="radio" name="heterotrophic" value="Satifatório" />{" "}
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Satifatório
                </p>
                <Field
                  type="radio"
                  name="heterotrophic"
                  value="Não Satifatório"
                />{" "}
                 <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Satifatório
                </p>
                <Field type="radio" name="heterotrophic" value="Não Coletado" /> 
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não
                Coletado
                </p>
                <ErrorMessage
                  name="heterotrophic"
                  component="div"
                  className="text-danger"
                />
              
              </Col>
              <Line/>
            </BootstrapForm.Group>
            <BootstrapForm.Group as={Row} controlId="formTotalColiforms" style={{ display:'flex', flexDirection:'column'}}>
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',fontWeight:'bold'}}>
                Coliformes Totais:
              </BootstrapForm.Label>
              <Col sm={10} style={{ height:30,width:"40%",display:'flex',justifyContent:'center',textAlign:'center'}}>
                <Field type="radio" name="totalColiforms" value="Satifatório" />{" "}
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Satifatório
                </p>
                <Field
                  type="radio"
                  name="totalColiforms"
                  value="Não Satifatório"
                />{" "}
                 <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Satifatório
                </p>
                <Field
                  type="radio"
                  name="totalColiforms"
                  value="Não Coletado"
                />{" "}
                 <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Coletado
                </p>
                <ErrorMessage
                  name="totalColiforms"
                  component="div"
                  className="text-danger"
                />
             
              </Col>
              <Line/>
            </BootstrapForm.Group>
            <BootstrapForm.Group as={Row} controlId="formSeedingInDepth" style={{ display:'flex', flexDirection:'column'}} >
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',fontWeight:'bold'}}>
                Semeando em profundidade:
              </BootstrapForm.Label>
              <Col sm={10} style={{ height:30,width:"40%",display:'flex',justifyContent:'center',textAlign:'center'}}>
                <Field  type="radio" name="seedingInDepth" value="Satifatório" />{" "}
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Satifatório
                </p>
                <Field
                  type="radio"
                  name="seedingInDepth"
                  value="Não Satifatório"
                />{" "}
               <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>Não Satifatório</p> 
                <Field
                  type="radio"
                  name="seedingInDepth"
                  value="Não Coletado"
                />{" "}
                 <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Coletado
                </p>
                <ErrorMessage
                  name="seedingInDepth"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line/>
            </BootstrapForm.Group>

            <BootstrapForm.Group as={Row} controlId="formSeedingOnSurface" style={{ display:'flex', flexDirection:'column'}}>
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',fontWeight:'bold'}}>
                Semeadura na superfície:
              </BootstrapForm.Label>
              <Col sm={10} style={{ height:30,width:"40%",display:'flex',justifyContent:'center',textAlign:'center'}}>
                <Field
                  type="radio"
                  name="seedingOnSurface"
                  value="Satifatório"
                />{" "}
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Satifatório
                </p>
                <Field
                  type="radio"
                  name="seedingOnSurface"
                  value="Não Satifatório"
                />{" "}
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Satifatório
                </p>
                <Field
                  type="radio"
                  name="seedingOnSurface"
                  value="Não Coletado"
                />{" "}
                  <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Coletado
                </p>
                <ErrorMessage
                  name="seedingInDepth"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line/>
            </BootstrapForm.Group>

            <BootstrapForm.Group as={Row} controlId="formConductivity" style={{ display:'flex', flexDirection:'column'}}>
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',fontWeight:'bold'}}>
                Condutividade:
              </BootstrapForm.Label>
              <Col sm={10}  style={{ height:30,width:"40%",display:'flex',justifyContent:'center',textAlign:'center'}}>
                <Field type="radio" name="conductivity" value="Satifatório" />{" "}
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Satifatório
                </p>
                <Field
                  type="radio"
                  name="conductivity"
                  value="Não Satifatório"
                />{" "}
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Satifatório
                </p>
                <Field
                  type="radio"
                  name="conductivity"
                  value="Não Coletado"
                />{" "}
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Coletado
                </p>
                <ErrorMessage
                  name="conductivity"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line/>
            </BootstrapForm.Group>

            <BootstrapForm.Group as={Row} controlId="formFreeChlorine" style={{ display:'flex', flexDirection:'column'}}>
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',fontWeight:'bold'}}>
                Cloro Livre:
              </BootstrapForm.Label>
              <Col sm={10} style={{ height:30,width:"40%",display:'flex',justifyContent:'center',textAlign:'center'}}>
                <Field type="radio" name="freeChlorine" value="Satifatório" />{" "}
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Satifatório
                </p>
                <Field
                  type="radio"
                  name="freeChlorine"
                  value="Não Satifatório"
                />{" "}
                  <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Satifatório
                </p>
                <Field
                  type="radio"
                  name="freeChlorine"
                  value="Não Coletado"
                />{" "}
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Coletado
                </p>
                <ErrorMessage
                  name="freeChlorine"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line/>
            </BootstrapForm.Group>

            <BootstrapForm.Group as={Row} controlId="formPH" style={{ display:'flex', flexDirection:'column'}}>
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',fontWeight:'bold'}}>
                PH:
              </BootstrapForm.Label>
              <Col sm={10} style={{ height:30,width:"40%",display:'flex',justifyContent:'center',textAlign:'center'}}>
                <Field type="radio" name="pH" value="Satifatório" />
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Satifatório
                </p>
                <Field type="radio" name="pH" value="Não Satifatório" /> 
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Satifatório
                </p>
                <Field type="radio" name="pH" value="Não Coletado" /> 
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Coletado
                </p>
                <ErrorMessage
                  name="pH"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line/>
            </BootstrapForm.Group>

            <BootstrapForm.Group as={Row} controlId="formPotentiometry" style={{ display:'flex', flexDirection:'column'}}>
              <BootstrapForm.Label column sm={2} style={{width:"25%", height:40,display:'flex', textAlign:'center',fontWeight:'bold'}}>
                Potenciometria:
              </BootstrapForm.Label>
              <Col sm={10} style={{ height:30,width:"40%",display:'flex',justifyContent:'center',textAlign:'center'}}>
                <Field type="radio" name="potentiometry" value="Satifatório" />{" "}
                <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Satifatório
                </p>
                <Field
                  type="radio"
                  name="potentiometry"
                  value="Não Satifatório"
                />{" "}
               <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Satifatório
                </p>
                <Field
                  type="radio"
                  name="potentiometry"
                  value="Não Coletado"
                />{" "}
              <p style={{ height:30,display:'flex', textAlign:'center',justifyContent: 'center',paddingTop:4, marginLeft:5,marginRight:10}}>
                Não Coletado
                </p>
                <ErrorMessage
                  name="potentiometry"
                  component="div"
                  className="text-danger"
                />
              </Col>
              <Line/>
            </BootstrapForm.Group>

            <Button type="submit" disabled={isSubmitting}  style={{width:150, marginTop:30}}>
              Salva
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default FormApvisa;
