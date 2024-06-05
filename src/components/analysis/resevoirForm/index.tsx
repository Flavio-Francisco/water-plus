"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Field, FormikHelpers, FieldProps } from "formik";
import { Container, Form } from "react-bootstrap";
import { ReservoirAnalysis } from "@/utils/validation/ReservoirAnalysis";
import { ReservoirAnalysisResults } from "@/utils/models/analysis";
import { Button } from "@mui/material";

// Define os valores iniciais do formulário
const initialValues: ReservoirAnalysisResults = {
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

            <div className="m-5 mb-5 d-flex justify-content-center align-items-center">
              <h3 className="text-center">Descrição da Amostra</h3>
            </div>

            <div className="shadow rounded p-3">
              <div className="flex flex-col w-full md:w-3/5 mt-1">
                <Field name="SampleDescription.sampleName">
                  {({ field }: FieldProps) => (
                    <Form.Group
                      className="mt-3 "
                      controlId="SampleDescription.sampleName"
                    >
                      <Form.Label className="text-center">
                        Nome da Amostra
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Nome da Amostra"
                        isInvalid={
                          touched.SampleDescription?.sampleName &&
                          !!errors.SampleDescription?.sampleName
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.SampleDescription?.sampleName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>
              </div>
              <div className="flex flex-col md:flex-row w-full md:w-4/5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                <div className="flex flex-col w-full md:w-3/5 mt-1">
                  <Field name="SampleDescription.samplingAddress">
                    {({ field }: FieldProps) => (
                      <Form.Group
                        className="mt-3 "
                        controlId="SampleDescription.samplingAddress"
                      >
                        <Form.Label className="text-center">
                          Endereço de Coleta
                        </Form.Label>
                        <Form.Control
                          {...field}
                          type="text"
                          placeholder="Endereço de Coleta"
                          isInvalid={
                            touched.SampleDescription?.samplingAddress &&
                            !!errors.SampleDescription?.samplingAddress
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.SampleDescription?.samplingAddress}
                        </Form.Control.Feedback>
                      </Form.Group>
                    )}
                  </Field>
                </div>
                <div className="flex flex-col w-full md:w-3/5 mt-1">
                  <Field name="SampleDescription.city">
                    {({ field }: FieldProps) => (
                      <Form.Group
                        className="mt-3 "
                        controlId="SampleDescription.city"
                      >
                        <Form.Label className="text-center">Cidade</Form.Label>
                        <Form.Control
                          {...field}
                          type="text"
                          placeholder="Cidade"
                          isInvalid={
                            touched.SampleDescription?.city &&
                            !!errors.SampleDescription?.city
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.SampleDescription?.city}
                        </Form.Control.Feedback>
                      </Form.Group>
                    )}
                  </Field>
                </div>
              </div>

              <div className="flex flex-col md:flex-row w-full md:w-4/5 mt-1 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                <div className="flex flex-col w-full md:w-3/5 mt-1">
                  <Field name="SampleDescription.state">
                    {({ field }: FieldProps) => (
                      <Form.Group
                        className="mt-3 "
                        controlId="SampleDescription.state"
                      >
                        <Form.Label className="text-center">Estado</Form.Label>
                        <Form.Control
                          {...field}
                          type="text"
                          placeholder="Estado"
                          isInvalid={
                            touched.SampleDescription?.state &&
                            !!errors.SampleDescription?.state
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.SampleDescription?.state}
                        </Form.Control.Feedback>
                      </Form.Group>
                    )}
                  </Field>
                </div>
                <div className="flex flex-col w-full md:w-3/5 mt-1">
                  <Field name="SampleDescription.zipCode">
                    {({ field }: FieldProps) => (
                      <Form.Group
                        className="mt-3 "
                        controlId="SampleDescription.zipCode"
                      >
                        <Form.Label className="text-center">CEP</Form.Label>
                        <Form.Control
                          {...field}
                          type="text"
                          placeholder="CEP"
                          isInvalid={
                            touched.SampleDescription?.zipCode &&
                            !!errors.SampleDescription?.zipCode
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.SampleDescription?.zipCode}
                        </Form.Control.Feedback>
                      </Form.Group>
                    )}
                  </Field>
                </div>

                <div className="flex flex-col w-full md:w-3/5 mt-1">
                  <Field name="SampleDescription.samplingDate">
                    {({ field }: FieldProps) => (
                      <Form.Group
                        className="mt-3 "
                        controlId="SampleDescription.samplingDate"
                      >
                        <Form.Label className="text-center">
                          Data da Coleta
                        </Form.Label>
                        <Form.Control
                          {...field}
                          type="date"
                          placeholder="Data da Coleta"
                          isInvalid={
                            touched.SampleDescription?.samplingDate &&
                            !!errors.SampleDescription?.samplingDate
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

              <div className="flex flex-col md:flex-row w-full md:w-4/5 mt-1 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                <div className="flex flex-col w-full md:w-3/5 mt-1">
                  <Field name="SampleDescription.sampleMatrixAndOrigin">
                    {({ field }: FieldProps) => (
                      <Form.Group
                        className="mt-3 "
                        controlId="SampleDescription.sampleMatrixAndOrigin"
                      >
                        <Form.Label className="text-center">
                          Matriz e Origem da Amostra
                        </Form.Label>
                        <Form.Control
                          {...field}
                          type="text"
                          placeholder="Matriz e Origem da Amostra"
                          isInvalid={
                            touched.SampleDescription?.sampleMatrixAndOrigin &&
                            !!errors.SampleDescription?.sampleMatrixAndOrigin
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.SampleDescription?.sampleMatrixAndOrigin}
                        </Form.Control.Feedback>
                      </Form.Group>
                    )}
                  </Field>
                </div>
                <div className="flex flex-col w-full md:w-3/5 mt-1">
                  <Field name="SampleDescription.samplingResponsible">
                    {({ field }: FieldProps) => (
                      <Form.Group
                        className="mt-3 "
                        controlId="SampleDescription.samplingResponsible"
                      >
                        <Form.Label className="text-center">
                          Responsável pela Coleta
                        </Form.Label>
                        <Form.Control
                          {...field}
                          type="text"
                          placeholder="Responsável pela Coleta"
                          isInvalid={
                            touched.SampleDescription?.samplingResponsible &&
                            !!errors.SampleDescription?.samplingResponsible
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
            </div>
            {/* Campos de Resultados da Análise */}
            <div className="m-5 mb-5 d-flex justify-content-center align-items-center">
              <h3 className="text-center"> Resultados da Análise</h3>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              {/* Seu conteúdo aqui */}
              <div className="shadow rounded flex flex-col w-full md:w-1/5 p-4">
                <Field name="bicarbonateAlkalinity">
                  {({ field }: FieldProps) => (
                    <Form.Group
                      className="mt-3 "
                      controlId="bicarbonateAlkalinity"
                    >
                      <Form.Label className="text-center">
                        A. de Bicarbonato
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="A. de Bicarbonato"
                        isInvalid={
                          touched.bicarbonateAlkalinity &&
                          !!errors.bicarbonateAlkalinity
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.bicarbonateAlkalinity}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="carbonateAlkalinity">
                  {({ field }: FieldProps) => (
                    <Form.Group
                      className="mt-3 "
                      controlId="carbonateAlkalinity"
                    >
                      <Form.Label className="text-center">
                        Alcalinidade de Carbonato
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder=" Carbonato"
                        isInvalid={
                          touched.carbonateAlkalinity &&
                          !!errors.carbonateAlkalinity
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.carbonateAlkalinity}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="hydroxideAlkalinity">
                  {({ field }: FieldProps) => (
                    <Form.Group
                      className="mt-3 "
                      controlId="hydroxideAlkalinity"
                    >
                      <Form.Label className="text-center">
                        Alcalinidade deHidróxido
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Hidróxido"
                        isInvalid={
                          touched.hydroxideAlkalinity &&
                          !!errors.hydroxideAlkalinity
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.hydroxideAlkalinity}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="totalAlkalinity">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="totalAlkalinity">
                      <Form.Label className="text-center">
                        Alcalinidade Total
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Alcalinidade Total"
                        isInvalid={
                          touched.totalAlkalinity && !!errors.totalAlkalinity
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.totalAlkalinity}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="aluminum">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="aluminum">
                      <Form.Label className="text-center">Alumínio</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Alumínio"
                        isInvalid={touched.aluminum && !!errors.aluminum}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.aluminum}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="ammonia">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="ammonia">
                      <Form.Label className="text-center">Amônia</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Amônia"
                        isInvalid={touched.ammonia && !!errors.ammonia}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.ammonia}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>
              </div>
              <div className="shadow rounded flex flex-col w-full md:w-1/5 p-4">
                <Field name="calcium">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="calcium">
                      <Form.Label className="text-center">Cálcio</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Cálcio"
                        isInvalid={touched.calcium && !!errors.calcium}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.calcium}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="chlorides">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="chlorides">
                      <Form.Label className="text-center">Cloreto</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Cloreto"
                        isInvalid={touched.chlorides && !!errors.chlorides}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.chlorides}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="freeResidualChlorine">
                  {({ field }: FieldProps) => (
                    <Form.Group
                      className="mt-3 "
                      controlId="freeResidualChlorine"
                    >
                      <Form.Label className="text-center">
                        Cloro Livre
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Cloro Livre"
                        isInvalid={
                          touched.freeResidualChlorine &&
                          !!errors.freeResidualChlorine
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.freeResidualChlorine}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="electricalConductivity">
                  {({ field }: FieldProps) => (
                    <Form.Group
                      className="mt-3 "
                      controlId="electricalConductivity"
                    >
                      <Form.Label className="text-center">
                        Condutividade
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Condutividade"
                        isInvalid={
                          touched.electricalConductivity &&
                          !!errors.electricalConductivity
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.electricalConductivity}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="apparentColor">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="apparentColor">
                      <Form.Label className="text-center">
                        Cor Aparente
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Cor Aparente"
                        isInvalid={
                          touched.apparentColor && !!errors.apparentColor
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.apparentColor}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="carbonateHardness">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="carbonateHardness">
                      <Form.Label className="text-center">
                        Dureza de Carbonatos
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Carbonatos"
                        isInvalid={
                          touched.carbonateHardness &&
                          !!errors.carbonateHardness
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.carbonateHardness}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>
              </div>

              <div className="shadow rounded flex flex-col w-full md:w-1/5 p-4">
                <Field name="nonCarbonateHardness">
                  {({ field }: FieldProps) => (
                    <Form.Group
                      className="mt-3 "
                      controlId="nonCarbonateHardness"
                    >
                      <Form.Label className="text-center ">
                        Dureza de N C
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Dureza de N C"
                        isInvalid={
                          touched.nonCarbonateHardness &&
                          !!errors.nonCarbonateHardness
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.nonCarbonateHardness}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="totalHardness">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="totalHardness">
                      <Form.Label className="text-center">
                        Dureza Total
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Dureza Total"
                        isInvalid={
                          touched.totalHardness && !!errors.totalHardness
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.totalHardness}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="totalIron">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="totalIron">
                      <Form.Label className="text-center">
                        Ferro Total
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Ferro Total"
                        isInvalid={touched.totalIron && !!errors.totalIron}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.totalIron}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="magnesium">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="magnesium">
                      <Form.Label className="text-center">Magnésio</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Magnésio"
                        isInvalid={touched.magnesium && !!errors.magnesium}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.magnesium}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="manganese">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="manganese">
                      <Form.Label className="text-center">Manganês</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Magnésio"
                        isInvalid={touched.manganese && !!errors.manganese}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.manganese}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="nitrate">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="nitrate">
                      <Form.Label className="text-center">Nitrato</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Nitrato"
                        isInvalid={touched.nitrate && !!errors.nitrate}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.nitrate}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>
              </div>
              <div className="shadow rounded flex flex-col w-full md:w-1/5 p-4">
                <Field name="nitrite">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="nitrite">
                      <Form.Label className="text-center">Nitrito</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Nitrito"
                        isInvalid={touched.nitrite && !!errors.nitrite}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.nitrite}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="dissolvedOxygen">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="dissolvedOxygen">
                      <Form.Label className="text-center">
                        Oxigênio Dissolvido
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Oxigênio Dissolvido"
                        isInvalid={
                          touched.dissolvedOxygen && !!errors.dissolvedOxygen
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.dissolvedOxygen}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="pH">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="pH">
                      <Form.Label className="text-center">pH</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="pH"
                        isInvalid={touched.pH && !!errors.pH}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.pH}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="potassium">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="potassium">
                      <Form.Label className="text-center">Potássio</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Potássio"
                        isInvalid={touched.potassium && !!errors.potassium}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.potassium}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="sodium">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="sodium">
                      <Form.Label className="text-center">Sódio</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Sódio"
                        isInvalid={touched.sodium && !!errors.sodium}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.sodium}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="totalDissolvedSolids">
                  {({ field }: FieldProps) => (
                    <Form.Group
                      className="mt-3 "
                      controlId="totalDissolvedSolids"
                    >
                      <Form.Label className="text-center">
                        Sólidos Totais
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Sólidos Totais"
                        isInvalid={
                          touched.totalDissolvedSolids &&
                          !!errors.totalDissolvedSolids
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.totalDissolvedSolids}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>
              </div>
              <div className="shadow rounded flex flex-col w-full md:w-1/5 p-4">
                <Field name="sulfate">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="sulfate">
                      <Form.Label className="text-center">Sulfato</Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Sulfato"
                        isInvalid={touched.sulfate && !!errors.sulfate}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.sulfate}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="hydrogenSulfide">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="hydrogenSulfide">
                      <Form.Label className="text-center">
                        Sulfeto de hidrogênio
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="hidrogênio"
                        isInvalid={
                          touched.hydrogenSulfide && !!errors.hydrogenSulfide
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.hydrogenSulfide}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>
                <Field name="surfactants">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="surfactants">
                      <Form.Label className="text-center">
                        Surfactantes
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Surfactantes"
                        isInvalid={touched.surfactants && !!errors.surfactants}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.surfactants}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="totalColiforms">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="totalColiforms">
                      <Form.Label className="text-center">
                        Coliformes totais
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Coliformes totais"
                        isInvalid={
                          touched.totalColiforms && !!errors.totalColiforms
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.totalColiforms}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="heterotrophicBacteriaCount">
                  {({ field }: FieldProps) => (
                    <Form.Group
                      className="mt-3 "
                      controlId="heterotrophicBacteriaCount"
                    >
                      <Form.Label className="text-center">
                        Heterotróficas
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Heterotróficas"
                        isInvalid={
                          touched.heterotrophicBacteriaCount &&
                          !!errors.heterotrophicBacteriaCount
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.heterotrophicBacteriaCount}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>

                <Field name="endotoxins">
                  {({ field }: FieldProps) => (
                    <Form.Group className="mt-3 " controlId="endotoxins">
                      <Form.Label className="text-center">
                        Endotoxinas
                      </Form.Label>
                      <Form.Control
                        {...field}
                        type="text"
                        placeholder="Endotoxinas"
                        isInvalid={touched.endotoxins && !!errors.endotoxins}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.endotoxins}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </Field>
              </div>
            </div>
            <div className="m-auto  d-flex align-items-center justify-content-center mt-5 mb-5">
              <Button variant="contained" type="submit">
                Salvar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ReservoirAnalysisForm;
