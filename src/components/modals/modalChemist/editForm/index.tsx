import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import { SchemaChemist } from "@/utils/validation/CredentialsForm";
import { CredentialsChemist } from "@/utils/models/Credentials"; // Importando a interface CredentialsChemist
import { createChemical, updateChemical } from "@/app/fecth/chemical";
import { useUserContext } from "@/context/userContext";
import { useMutation } from "@tanstack/react-query";
import Loader from "@/components/loader/page";

export interface CredentialsChemistdb {
  id: number;
  name: string;
  CRM: string;
  graduation: string;
  postGraduation: string;
  postGraduation2: string;
  system_id: number;
}
interface Ipros {
  data: CredentialsChemistdb | undefined;
  refech: () => void;
}

const ChemistFormNew = ({ data, refech }: Ipros) => {
  const [isValues, setIsValues] = useState(true);
  const initialValues: CredentialsChemist = {
    Chemist: {
      name: data?.name || "",
      CRQ: data?.CRM || "",
      graduation: data?.graduation || "",
      postGraduation: data?.postGraduation || "",
      postGraduation2: data?.postGraduation2 || "",
    },
  };

  console.log("quimico", data);
  const { user } = useUserContext();

  const { mutate } = useMutation({
    mutationKey: ["chemical"],
    mutationFn: async (values: CredentialsChemist) => {
      await (data === undefined ? createChemical : updateChemical)(
        user?.system_id || 0,
        values
      );
    },
    onSuccess: () => {
      refech();
      alert("dados atualizados com sucesso!!!");
    },
    onError: () => {
      refech();
      alert("Erro ao atualizados dados!!!");
    },
  });

  useEffect(() => {
    if (data !== undefined) {
      setIsValues(false); // Mudança aqui
    }
  }, [data]);

  if (data === undefined && isValues) {
    return (
      <div className="flex flex-col justify-center items-center ">
        <div className="text-blue">
          <h1 style={{ color: "rgba(25,118,210,255)" }}>Carregando ....</h1>
        </div>
        <div className="mt-52">
          <Loader />
        </div>
      </div>
    );
  }
  if (data) {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={SchemaChemist} // Utilizando o schema de validação correspondente
        onSubmit={(values: CredentialsChemist, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
          mutate(values);
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {data === undefined ? (
              <div className="flex flex-col justify-center items-center">
                <div className="text-[rgb(30, 146, 255)] ">
                  <h1 style={{ color: " rgba(25,118,210,255)" }}>
                    Carregando ....
                  </h1>
                </div>
                <div className=" mt-52">
                  <Loader />
                </div>
              </div>
            ) : (
              <>
                <Form.Group controlId="formName">
                  <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
                    Nome
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Chemist.name"
                    placeholder="Digite o nome do químico"
                    value={values.Chemist?.name}
                    onChange={handleChange}
                    isInvalid={!!errors.Chemist?.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Chemist?.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formCRQ">
                  <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
                    CRQ
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Chemist.CRQ"
                    placeholder="Digite o CRQ do químico"
                    value={values.Chemist?.CRQ}
                    onChange={handleChange}
                    isInvalid={!!errors.Chemist?.CRQ}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Chemist?.CRQ}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formGraduation">
                  <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
                    Graduação
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Chemist.graduation"
                    placeholder="Digite a graduação do químico"
                    value={values.Chemist?.graduation}
                    onChange={handleChange}
                    isInvalid={!!errors.Chemist?.graduation}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Chemist?.graduation}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPostGraduation">
                  <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
                    Pós-Graduação
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Chemist.postGraduation"
                    placeholder="Digite a pós-graduação do químico"
                    value={values.Chemist?.postGraduation}
                    onChange={handleChange}
                    isInvalid={!!errors.Chemist?.postGraduation}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Chemist?.postGraduation}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formSecondPostGraduation">
                  <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
                    Segunda Pós-Graduação
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Chemist.postGraduation2"
                    placeholder="Digite a segunda pós-graduação do químico"
                    value={values.Chemist?.postGraduation2}
                    onChange={handleChange}
                    isInvalid={!!errors.Chemist?.postGraduation2}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Chemist?.postGraduation2}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  className="bg-[#1976d2]"
                  variant="primary"
                  type="submit"
                  style={{ marginTop: 20 }}
                >
                  Enviar
                </Button>
              </>
            )}
          </Form>
        )}
      </Formik>
    );
  }
};

export default ChemistFormNew;
