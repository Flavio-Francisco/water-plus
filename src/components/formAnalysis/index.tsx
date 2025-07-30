"use client";
import React, { useEffect, useState } from "react";
import { AnalysisResult } from "@/utils/models/analysis";
import { FormAnalysis } from "@/utils/validation/FormAnalysisReselt";
import { Formik, Field, ErrorMessage, FieldProps } from "formik";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import { Button, CircularProgress } from "@mui/material";
import { useUserContext } from "@/context/userContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createAnalisysEta } from "@/app/fecth/analys";
import SavePdfEta from "../savePdfEta";
import { getNameMachine } from "@/app/fecth/diasafe";

interface Iprops {
  onSucess: (sucess: boolean) => void;
}
interface IProp {
  value: string;
  label: string;
}
const option: IProp[] = [
  { value: "", label: "Selecione um ponto " },
  { value: "Pré-Tratamento", label: "Pré-Tratamento" },
  { value: "Pós Carvão", label: "Pós Carvão" },
  { value: "1º Passo", label: "1º Passo" },
  { value: "2º Passo", label: "2º Passo" },
  { value: "Entrata do Looping", label: "Entrata do Looping" },
  { value: "Saída do Looping", label: "Saída do Looping" },
  { value: "Retorno do Looping", label: "Retorno do Looping" },
];
export const FormInitialValues: AnalysisResult = {
  date: "",
  sampleName: "",
  eColiPresence: "",
  totalColiformsPresence: "",
  heterotrophicBacteriaCount: "",
  endotoxins: "",
};

const ResultForm = ({ onSucess }: Iprops) => {
  const { user } = useUserContext();
  const [options, setOpition] = useState<IProp[]>([]);
  const { data, isLoading } = useQuery({
    queryKey: ["pontos"],
    queryFn: () => getNameMachine(user?.system_id || 0),
  });

  console.log(data);

  console.log(options);
  const { mutate } = useMutation({
    mutationKey: ["AnalyseForm"],
    mutationFn: (values: AnalysisResult) =>
      createAnalisysEta(user?.system_id || 0, values),
    onSuccess: () => {
      onSucess(true);
      alert("Dados Salvos com Sucesso!!!");
    },
    onError: () => {
      onSucess(true);
      alert("ERRO ao Salvar  Dados !!!");
    },
  });
  useEffect(() => {
    if (data) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const machine = data.map((data: any, index: number) => ({
        value: "Máquina HD",
        label: `Máquina HD ${index + 1} - ${data.machine}`,
      }));
      const options: IProp[] = option.concat(machine);
      setOpition(options);
    }
  }, [data]);

  return (
    <div className="flex justify-center items-center">
      <div className="absolute top-32 right-8">
        <SavePdfEta />
      </div>
      <Formik
        initialValues={FormInitialValues}
        validationSchema={FormAnalysis}
        onSubmit={(values: AnalysisResult, { resetForm }) => {
          mutate(values);
          console.log("Dados do formulário submetidos:", values);
          resetForm();
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center w-full"
          >
            <Row className="m-5 mb-5 d-flex justify-content-center align-items-center ">
              <h3 className="text-center"> Resultados das Amostras da ETA</h3>
            </Row>

            <div className="flex flex-row max-sm:flex-col justify-center items-center max-sm:w-full  mb-2 gap-2">
              <FormLabel htmlFor="samplingDate" className="w-2/6 max-sm:w-full">
                Data
              </FormLabel>
              <Field
                className="w-5/6 max-sm:w-full"
                id="samplingDate"
                as={FormControl}
                type="date"
                name="date"
                isInvalid={!!errors?.date && touched?.date}
              />
              <ErrorMessage name="SampleDescription.samplingDate" />
            </div>

            <Col xs={12} md={10}>
              <FormGroup>
                <FormLabel htmlFor="sampleName">Ponto da Coleta:</FormLabel>
                {isLoading ? (
                  <div className="flex justify-center items-center border rounded p-2">
                    <CircularProgress size={"20px"} />
                  </div>
                ) : (
                  <Field name="sampleName">
                    {({ field }: FieldProps) => (
                      <FormControl
                        as="select"
                        id="sampleName"
                        {...field}
                        isInvalid={!!errors.sampleName && touched.sampleName}
                      >
                        {options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </FormControl>
                    )}
                  </Field>
                )}
                <ErrorMessage
                  name="sampleName"
                  component="div"
                  className="invalid-feedback text-red-600"
                />
              </FormGroup>
            </Col>

            <Col xs={12} md={10} className="mb-3 mb-sm-0">
              <FormGroup>
                <FormLabel htmlFor="eColiPresence">Escherichia Coli</FormLabel>
                <Field
                  id="eColiPresence"
                  as={FormControl}
                  type="text"
                  name="eColiPresence"
                  isInvalid={!!errors?.eColiPresence && touched?.eColiPresence}
                />
                <ErrorMessage name="eColiPresence" />
              </FormGroup>
            </Col>
            <Col xs={12} md={10} className="mb-3 mb-sm-0">
              <FormGroup>
                <FormLabel htmlFor="totalColiformsPresence">
                  Coliformes Totais
                </FormLabel>
                <Field
                  id="totalColiformsPresence"
                  as={FormControl}
                  type="text"
                  name="totalColiformsPresence"
                  isInvalid={
                    !!errors?.totalColiformsPresence &&
                    touched?.totalColiformsPresence
                  }
                />
                <ErrorMessage name="totalColiformsPresence" />
              </FormGroup>
            </Col>
            <Col xs={12} md={10}>
              <FormGroup>
                <FormLabel htmlFor="heterotrophicBacteriaCount">
                  Heterotróficas
                </FormLabel>
                <Field
                  id="heterotrophicBacteriaCount"
                  as={FormControl}
                  type="text"
                  name="heterotrophicBacteriaCount"
                  isInvalid={
                    !!errors?.heterotrophicBacteriaCount &&
                    touched?.heterotrophicBacteriaCount
                  }
                />
                <ErrorMessage name="heterotrophicBacteriaCount" />
              </FormGroup>
            </Col>
            <Col xs={12} md={10}>
              <FormGroup>
                <FormLabel htmlFor="endotoxins">Endotoxina</FormLabel>
                <Field
                  id="endotoxins"
                  as={FormControl}
                  type="text"
                  name="endotoxins"
                  isInvalid={!!errors?.endotoxins && touched?.endotoxins}
                />
                <ErrorMessage name="endotoxins" />
              </FormGroup>
            </Col>

            <Row className="m-5 mb-5 d-flex justify-content-center align-items-center">
              <Col className="d-flex justify-content-center align-items-center">
                <Button variant="contained" type="submit">
                  Salvar
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResultForm;
