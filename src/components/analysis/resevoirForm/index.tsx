"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputMask from "react-input-mask";
import { Formik, Field, FormikHelpers, FieldProps } from "formik";
import { Container, Button, FormLabel, Form } from "react-bootstrap";
import { ReservoirAnalysis } from "@/utils/validation/ReservoirAnalysis";
import { ReservoirAnalysisResults } from "@/utils/models/analysis";

// Define os valores iniciais do formulário
const initialValues = {
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
  bicarbonateAlkalinity: "",
  carbonateAlkalinity: "",
  hydroxideAlkalinity: "",
  totalAlkalinity: "",
  aluminum: "",
  ammonia: "",
  calcium: "",
  chlorides: "",
  freeResidualChlorine: "",
  electricalConductivity: "",
  apparentColor: "",
  carbonateHardness: "",
  nonCarbonateHardness: "",
  totalHardness: "",
  totalIron: "",
  magnesium: "",
  manganese: "",
  nitrate: "",
  nitrite: "",
  dissolvedOxygen: "",
  pH: "",
  potassium: "",
  sodium: "",
  totalDissolvedSolids: "",
  sulfate: "",
  hydrogenSulfide: "",
  surfactants: "",
  totalColiforms: "",
  heterotrophicBacteriaCount: "",
  endotoxins: "",
};

const ReservoirAnalysisForm = () => {
  const handleSubmit = (
    values: ReservoirAnalysisResults,
    { resetForm }: FormikHelpers<ReservoirAnalysisResults>,
  ) => {
    // Lógica de submissão do formulário
    console.log(values);
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={ReservoirAnalysis}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            {/* Campos da Descrição da Amostra */}
            <h3>Descrição da Amostra</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
              }}
            >
              <Field name="SampleDescription.sampleName">
                {({ field }: FieldProps) => (
                  <Form.Group className="mt-3 " controlId="Color">
                    <Form.Label className="text-center">
                      Nome da Amostra
                    </Form.Label>
                    <Form.Control
                      {...field}
                      type="text"
                      placeholder="Nome da Amostra"
                      isInvalid={errors.SampleDescription?.sampleName === ""}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.SampleDescription?.sampleName}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              </Field>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "80%",
                gap: 30,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                  marginTop: 5,
                }}
              >
                <Field name="SampleDescription.samplingAddress">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="Color">
                      <Form.Label className="text-center">
                        Endereço de Coleta
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Endereço de Coleta"
                        isInvalid={
                          errors.SampleDescription?.samplingAddress === ""
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.SampleDescription?.samplingAddress}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  width: "30%",
                  marginTop: 5,
                }}
              >
                <Field name="SampleDescription.city">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="Color">
                      <Form.Label className="text-center">Cidade</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Cidade"
                        isInvalid={errors.SampleDescription?.city === ""}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.SampleDescription?.city}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "80%",
                marginTop: 5,
                gap: 30,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                }}
              >
                <Field name="SampleDescription.state">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="Color">
                      <Form.Label className="text-center">Estado</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Estado"
                        isInvalid={errors.SampleDescription?.state === ""}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.SampleDescription?.state}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                }}
              >
                <Field name="SampleDescription.zipCode">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="Color">
                      <Form.Label className="text-center">CEP</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="CEP"
                        isInvalid={errors.SampleDescription?.zipCode === ""}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.SampleDescription?.zipCode}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                }}
              >
                <Field name="SampleDescription.samplingDate">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="Color">
                      <Form.Label className="text-center">
                        Data da Coleta
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="date"
                        placeholder="Data da Coleta"
                        isInvalid={
                          errors.SampleDescription?.samplingDate === ""
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.SampleDescription?.samplingDate}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "80%",
                marginTop: 5,
                gap: 30,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                }}
              >
                <Field
                  name="SampleDescription.sampleMatrixAndOrigin"
                  as="input"
                  placeholder="Matriz e Origem da Amostra"
                >
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="Color">
                      <Form.Label className="text-center">
                        Matriz e Origem da Amostra
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="date"
                        placeholder="Matriz e Origem da Amostra"
                        isInvalid={
                          errors.SampleDescription?.sampleMatrixAndOrigin === ""
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.SampleDescription?.sampleMatrixAndOrigin}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                }}
              >
                <Field name="SampleDescription.samplingResponsible">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="Color">
                      <Form.Label className="text-center">
                        Responsável pela Coleta
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Responsável pela Coleta"
                        isInvalid={
                          errors.SampleDescription?.samplingResponsible === ""
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.SampleDescription?.sampleMatrixAndOrigin}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>
              </div>
            </div>
            {/* Campos de Resultados da Análise */}
            <h3 style={{ marginTop: 20, marginBottom: 20 }}>
              Resultados da Análise
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "90%",
                gap: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "20%",
                }}
              >
                <Field name="bicarbonateAlkalinity">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="Color">
                      <Form.Label className="text-center">
                        Alcalinidade de Bicarbonato
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Alcalinidade de Bicarbonato"
                        isInvalid={errors.bicarbonateAlkalinity === ""}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.bicarbonateAlkalinity}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="carbonateAlkalinity">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="Color">
                      <Form.Label className="text-center">
                        Alcalinidade de Carbonato
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder=" Carbonato"
                        isInvalid={errors.carbonateAlkalinity === ""}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.carbonateAlkalinity}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="hydroxideAlkalinity">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="Color">
                      <Form.Label className="text-center">
                        Alcalinidade deHidróxido
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Hidróxido"
                        isInvalid={errors.hydroxideAlkalinity === ""}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.hydroxideAlkalinity}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field
                  name="totalAlkalinity"
                  as="input"
                  placeholder="Alcalinidade Total"
                >
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="Color">
                      <Form.Label className="text-center">
                        Alcalinidade Total
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Alcalinidade Total"
                        isInvalid={errors.totalAlkalinity === ""}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.totalAlkalinity}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <FormLabel>Alumínio</FormLabel>
                <Field name="aluminum" as="input" placeholder="Alumínio" />
                {errors.aluminum && touched.aluminum && (
                  <div>{errors.aluminum}</div>
                )}
                <FormLabel>Amônia</FormLabel>
                <Field name="ammonia" as="input" placeholder="Amônia" />
                {errors.ammonia && touched.ammonia && (
                  <div>{errors.ammonia}</div>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "20%",
                }}
              >
                <FormLabel>Cálcio</FormLabel>
                <Field name="calcium" as="input" placeholder="Cálcio" />
                {errors.calcium && touched.calcium && (
                  <div>{errors.calcium}</div>
                )}
                <FormLabel>Cloreto</FormLabel>
                <Field name="chlorides" as="input" placeholder="Cloreto" />
                {errors.chlorides && touched.chlorides && (
                  <div>{errors.chlorides}</div>
                )}
                <FormLabel>Cloro Residual Livre</FormLabel>
                <Field
                  name="freeResidualChlorine"
                  as="input"
                  placeholder="Cloro Residual Livre"
                />
                {errors.freeResidualChlorine &&
                  touched.freeResidualChlorine && (
                    <div>{errors.freeResidualChlorine}</div>
                  )}
                <FormLabel>Condutividade Elétrica</FormLabel>
                <Field
                  name="electricalConductivity"
                  as="input"
                  placeholder="Condutividade Elétrica"
                />
                {errors.electricalConductivity &&
                  touched.electricalConductivity && (
                    <div>{errors.electricalConductivity}</div>
                  )}
                <FormLabel>Cor Aparente</FormLabel>
                <Field
                  name="apparentColor"
                  as="input"
                  placeholder="Cor Aparente"
                />
                {errors.apparentColor && touched.apparentColor && (
                  <div>{errors.apparentColor}</div>
                )}
                <FormLabel>Dureza de Carbonatos</FormLabel>
                <Field
                  name="carbonateHardness"
                  as="input"
                  placeholder="Dureza de Carbonatos"
                />
                {errors.carbonateHardness && touched.carbonateHardness && (
                  <div>{errors.carbonateHardness}</div>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "20%",
                }}
              >
                <FormLabel>Dureza de Carbonatos</FormLabel>
                <Field
                  name="nonCarbonateHardness"
                  as="input"
                  placeholder="Dureza de Não Carbonatos"
                />
                {errors.nonCarbonateHardness &&
                  touched.nonCarbonateHardness && (
                    <div>{errors.nonCarbonateHardness}</div>
                  )}
                <FormLabel>Dureza Total</FormLabel>
                <Field
                  name="totalHardness"
                  as="input"
                  placeholder="Dureza Total"
                />
                {errors.totalHardness && touched.totalHardness && (
                  <div>{errors.totalHardness}</div>
                )}
                <FormLabel>Ferro Total</FormLabel>
                <Field name="totalIron" as="input" placeholder="Ferro Total" />
                {errors.totalIron && touched.totalIron && (
                  <div>{errors.totalIron}</div>
                )}
                <FormLabel>Magnésio</FormLabel>
                <Field name="magnesium" as="input" placeholder="Magnésio" />
                {errors.magnesium && touched.magnesium && (
                  <div>{errors.magnesium}</div>
                )}
                <FormLabel>Manganês</FormLabel>
                <Field name="manganese" as="input" placeholder="Manganês" />
                {errors.manganese && touched.manganese && (
                  <div>{errors.manganese}</div>
                )}
                <FormLabel>Nitrato</FormLabel>
                <Field name="nitrate" as="input" placeholder="Nitrato" />
                {errors.nitrate && touched.nitrate && (
                  <div>{errors.nitrate}</div>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "20%",
                }}
              >
                <FormLabel>Nitrito</FormLabel>
                <Field name="nitrite" as="input" placeholder="Nitrito" />
                {errors.nitrite && touched.nitrite && (
                  <div>{errors.nitrite}</div>
                )}
                <FormLabel>Oxigênio Dissolvido</FormLabel>
                <Field
                  name="dissolvedOxygen"
                  as="input"
                  placeholder="Oxigênio Dissolvido"
                />
                {errors.dissolvedOxygen && touched.dissolvedOxygen && (
                  <div>{errors.dissolvedOxygen}</div>
                )}
                <FormLabel>PH</FormLabel>
                <Field name="pH" as="input" placeholder="pH" />
                {errors.pH && touched.pH && <div>{errors.pH}</div>}
                <FormLabel>Potássio</FormLabel>
                <Field name="potassium" as="input" placeholder="Potássio" />
                {errors.potassium && touched.potassium && (
                  <div>{errors.potassium}</div>
                )}
                <FormLabel>Sódio</FormLabel>
                <Field name="sodium" as="input" placeholder="Sódio" />
                {errors.sodium && touched.sodium && <div>{errors.sodium}</div>}
                <FormLabel>Sólidos Dissolvidos Totais</FormLabel>
                <Field
                  name="totalDissolvedSolids"
                  as="input"
                  placeholder="Sólidos Dissolvidos Totais"
                />
                {errors.totalDissolvedSolids &&
                  touched.totalDissolvedSolids && (
                    <div>{errors.totalDissolvedSolids}</div>
                  )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "20%",
                }}
              >
                <FormLabel>Sulfato</FormLabel>
                <Field name="sulfate" as="input" placeholder="Sulfato" />
                {errors.sulfate && touched.sulfate && (
                  <div>{errors.sulfate}</div>
                )}
                <FormLabel>Sulfeto de hidrogênio</FormLabel>
                <Field
                  name="hydrogenSulfide"
                  as="input"
                  placeholder="Sulfeto de hidrogênio"
                />
                {errors.hydrogenSulfide && touched.hydrogenSulfide && (
                  <div>{errors.hydrogenSulfide}</div>
                )}
                <FormLabel>Surfactantes</FormLabel>
                <Field
                  name="surfactants"
                  as="input"
                  placeholder="Surfactantes"
                />
                {errors.surfactants && touched.surfactants && (
                  <div>{errors.surfactants}</div>
                )}
                <FormLabel>Coliformes totais</FormLabel>
                <Field
                  name="totalColiforms"
                  as="input"
                  placeholder="Coliformes totais"
                />
                {errors.totalColiforms && touched.totalColiforms && (
                  <div>{errors.totalColiforms}</div>
                )}
                <FormLabel>Bactérias Heterotróficas</FormLabel>
                <Field
                  name="heterotrophicBacteriaCount"
                  as="input"
                  placeholder=" Bactérias Heterotróficas"
                />
                {errors.heterotrophicBacteriaCount &&
                  touched.heterotrophicBacteriaCount && (
                    <div>{errors.heterotrophicBacteriaCount}</div>
                  )}
                <FormLabel>Endotoxinas</FormLabel>
                <Field name="endotoxins" as="input" placeholder="Endotoxinas" />
                {errors.endotoxins && touched.endotoxins && (
                  <div>{errors.endotoxins}</div>
                )}
              </div>
            </div>
            <Button type="submit">Enviar</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ReservoirAnalysisForm;
