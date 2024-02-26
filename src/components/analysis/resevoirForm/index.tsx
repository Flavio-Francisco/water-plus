"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { Container, Button, FormLabel } from "react-bootstrap";
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
            <div style={{ flex: 1, flexDirection: "column" }}>
              <FormLabel>Nome da Amostra</FormLabel>
              <Field
                name="SampleDescription.sampleName"
                as="input"
                placeholder="Nome da Amostra"
              />
              {errors.SampleDescription?.sampleName &&
                touched.SampleDescription?.sampleName && (
                  <div>{errors.SampleDescription.sampleName}</div>
                )}
            </div>
            <FormLabel>Endereço de Coleta</FormLabel>
            <Field
              name="SampleDescription.samplingAddress"
              as="input"
              placeholder="Endereço de Coleta"
            />
            {errors.SampleDescription?.samplingAddress &&
              touched.SampleDescription?.samplingAddress && (
                <div>{errors.SampleDescription.samplingAddress}</div>
              )}
            <Field
              name="SampleDescription.city"
              as="input"
              placeholder="Cidade"
            />
            {errors.SampleDescription?.city &&
              touched.SampleDescription?.city && (
                <div>{errors.SampleDescription.city}</div>
              )}
            <Field
              name="SampleDescription.state"
              as="input"
              placeholder="Estado"
            />
            {errors.SampleDescription?.state &&
              touched.SampleDescription?.state && (
                <div>{errors.SampleDescription.state}</div>
              )}
            <Field
              name="SampleDescription.zipCode"
              as="input"
              placeholder="CEP"
            />
            {errors.SampleDescription?.zipCode &&
              touched.SampleDescription?.zipCode && (
                <div>{errors.SampleDescription.zipCode}</div>
              )}
            <Field
              name="SampleDescription.sampleMatrixAndOrigin"
              as="input"
              placeholder="Matriz e Origem da Amostra"
            />
            {errors.SampleDescription?.sampleMatrixAndOrigin &&
              touched.SampleDescription?.sampleMatrixAndOrigin && (
                <div>{errors.SampleDescription.sampleMatrixAndOrigin}</div>
              )}
            <Field
              name="SampleDescription.samplingDate"
              as="input"
              placeholder="Data de Coleta"
            />
            {errors.SampleDescription?.samplingDate &&
              touched.SampleDescription?.samplingDate && (
                <div>{errors.SampleDescription.samplingDate}</div>
              )}
            <Field
              name="SampleDescription.samplingResponsible"
              as="input"
              placeholder="Responsável pela Coleta"
            />
            {errors.SampleDescription?.samplingResponsible &&
              touched.SampleDescription?.samplingResponsible && (
                <div>{errors.SampleDescription.samplingResponsible}</div>
              )}

            {/* Campos de Resultados da Análise */}
            <h3>Resultados da Análise</h3>
            <Field
              name="bicarbonateAlkalinity"
              as="input"
              placeholder="Alcalinidade de Bicarbonato"
            />
            {errors.bicarbonateAlkalinity && touched.bicarbonateAlkalinity && (
              <div>{errors.bicarbonateAlkalinity}</div>
            )}
            <Field
              name="carbonateAlkalinity"
              as="input"
              placeholder="Alcalinidade de Carbonato"
            />
            {errors.carbonateAlkalinity && touched.carbonateAlkalinity && (
              <div>{errors.carbonateAlkalinity}</div>
            )}
            <Field
              name="hydroxideAlkalinity"
              as="input"
              placeholder="Alcalinidade de Hidróxido"
            />
            {errors.hydroxideAlkalinity && touched.hydroxideAlkalinity && (
              <div>{errors.hydroxideAlkalinity}</div>
            )}
            <Field
              name="totalAlkalinity"
              as="input"
              placeholder="Alcalinidade Total"
            />
            {errors.totalAlkalinity && touched.totalAlkalinity && (
              <div>{errors.totalAlkalinity}</div>
            )}

            {/* Campos adicionais */}
            <Field name="aluminum" as="input" placeholder="Alumínio" />
            {errors.aluminum && touched.aluminum && (
              <div>{errors.aluminum}</div>
            )}
            <Field name="ammonia" as="input" placeholder="Amônia" />
            {errors.ammonia && touched.ammonia && <div>{errors.ammonia}</div>}
            <Field name="calcium" as="input" placeholder="Cálcio" />
            {errors.calcium && touched.calcium && <div>{errors.calcium}</div>}
            <Field name="chlorides" as="input" placeholder="Cloreto" />
            {errors.chlorides && touched.chlorides && (
              <div>{errors.chlorides}</div>
            )}
            <Field
              name="freeResidualChlorine"
              as="input"
              placeholder="Cloro Residual Livre"
            />
            {errors.freeResidualChlorine && touched.freeResidualChlorine && (
              <div>{errors.freeResidualChlorine}</div>
            )}
            <Field
              name="electricalConductivity"
              as="input"
              placeholder="Condutividade Elétrica"
            />
            {errors.electricalConductivity &&
              touched.electricalConductivity && (
                <div>{errors.electricalConductivity}</div>
              )}
            <Field name="apparentColor" as="input" placeholder="Cor Aparente" />
            {errors.apparentColor && touched.apparentColor && (
              <div>{errors.apparentColor}</div>
            )}
            <Field
              name="carbonateHardness"
              as="input"
              placeholder="Dureza de Carbonatos"
            />
            {errors.carbonateHardness && touched.carbonateHardness && (
              <div>{errors.carbonateHardness}</div>
            )}
            <Field
              name="nonCarbonateHardness"
              as="input"
              placeholder="Dureza de Não Carbonatos"
            />
            {errors.nonCarbonateHardness && touched.nonCarbonateHardness && (
              <div>{errors.nonCarbonateHardness}</div>
            )}
            <Field name="totalHardness" as="input" placeholder="Dureza Total" />
            {errors.totalHardness && touched.totalHardness && (
              <div>{errors.totalHardness}</div>
            )}
            <Field name="totalIron" as="input" placeholder="Ferro Total" />
            {errors.totalIron && touched.totalIron && (
              <div>{errors.totalIron}</div>
            )}
            <Field name="magnesium" as="input" placeholder="Magnésio" />
            {errors.magnesium && touched.magnesium && (
              <div>{errors.magnesium}</div>
            )}
            <Field name="manganese" as="input" placeholder="Manganês" />
            {errors.manganese && touched.manganese && (
              <div>{errors.manganese}</div>
            )}
            <Field name="nitrate" as="input" placeholder="Nitrato" />
            {errors.nitrate && touched.nitrate && <div>{errors.nitrate}</div>}
            <Field name="nitrite" as="input" placeholder="Nitrito" />
            {errors.nitrite && touched.nitrite && <div>{errors.nitrite}</div>}
            <Field
              name="dissolvedOxygen"
              as="input"
              placeholder="Oxigênio Dissolvido"
            />
            {errors.dissolvedOxygen && touched.dissolvedOxygen && (
              <div>{errors.dissolvedOxygen}</div>
            )}
            <Field name="pH" as="input" placeholder="pH" />
            {errors.pH && touched.pH && <div>{errors.pH}</div>}
            <Field name="potassium" as="input" placeholder="Potássio" />
            {errors.potassium && touched.potassium && (
              <div>{errors.potassium}</div>
            )}
            <Field name="sodium" as="input" placeholder="Sódio" />
            {errors.sodium && touched.sodium && <div>{errors.sodium}</div>}
            <Field
              name="totalDissolvedSolids"
              as="input"
              placeholder="Sólidos Dissolvidos Totais"
            />
            {errors.totalDissolvedSolids && touched.totalDissolvedSolids && (
              <div>{errors.totalDissolvedSolids}</div>
            )}
            <Field name="sulfate" as="input" placeholder="Sulfato" />
            {errors.sulfate && touched.sulfate && <div>{errors.sulfate}</div>}
            <Field
              name="hydrogenSulfide"
              as="input"
              placeholder="Sulfeto de hidrogênio"
            />
            {errors.hydrogenSulfide && touched.hydrogenSulfide && (
              <div>{errors.hydrogenSulfide}</div>
            )}
            <Field name="surfactants" as="input" placeholder="Surfactantes" />
            {errors.surfactants && touched.surfactants && (
              <div>{errors.surfactants}</div>
            )}
            <Field
              name="totalColiforms"
              as="input"
              placeholder="Coliformes totais"
            />
            {errors.totalColiforms && touched.totalColiforms && (
              <div>{errors.totalColiforms}</div>
            )}
            <Field
              name="heterotrophicBacteriaCount"
              as="input"
              placeholder="Contagem de Bactérias Heterotróficas"
            />
            {errors.heterotrophicBacteriaCount &&
              touched.heterotrophicBacteriaCount && (
                <div>{errors.heterotrophicBacteriaCount}</div>
              )}
            <Field name="endotoxins" as="input" placeholder="Endotoxinas" />
            {errors.endotoxins && touched.endotoxins && (
              <div>{errors.endotoxins}</div>
            )}

            <Button type="submit">Enviar</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ReservoirAnalysisForm;
