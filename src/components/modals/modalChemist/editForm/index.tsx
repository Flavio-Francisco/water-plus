import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import { SchemaChemist } from "@/utils/validation/CredentialsForm";
import { CredentialsChemist } from "@/utils/models/Credentials"; // Importando a interface CredentialsChemist
import { createChemical, updateChemical } from "@/app/fecth/chemical";
import { useUserContext } from "@/context/userContext";
import { useMutation } from "@tanstack/react-query";
import Loader from "@/components/loader/page";
import { Button } from "@mui/material";

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
  const [isChemist, setIsChemist] = useState<CredentialsChemistdb | undefined>(
    data
  );

  console.log(isChemist);

  const initialValues: CredentialsChemist = {
    Chemist: {
      name: isChemist?.name || "",
      CRQ: isChemist?.CRM || "",
      graduation: isChemist?.graduation || "",
      postGraduation: isChemist?.postGraduation || "",
      postGraduation2: isChemist?.postGraduation2 || "",
    },
  };

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
    if (data) {
      setIsChemist(data);
    }
  }, [data]);

  if (data === undefined) {
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
          <Form noValidate onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col justify-center items-center">
              <div className="flex  justify-center items-center  text-lg font-bold">
                <h1>Dados do Químico</h1>
              </div>

              {values.Chemist.name === undefined ? (
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
                  <Form.Group controlId="formName" className="w-10/12">
                    <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
                      Nome
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="Chemist.name"
                      placeholder="Digite o nome do químico"
                      value={data?.name}
                      onChange={handleChange}
                      isInvalid={!!errors.Chemist?.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.Chemist?.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formCRQ" className="w-10/12">
                    <Form.Label
                      style={{ marginTop: 10, marginBottom: 2 }}
                      className="w-10/12"
                    >
                      CRQ
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="Chemist.CRQ"
                      placeholder="Digite o CRQ do químico"
                      value={data?.CRM}
                      onChange={handleChange}
                      isInvalid={!!errors.Chemist?.CRQ}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.Chemist?.CRQ}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formGraduation" className="w-10/12">
                    <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
                      Graduação
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="Chemist.graduation"
                      placeholder="Digite a graduação do químico"
                      value={data?.graduation}
                      onChange={handleChange}
                      isInvalid={!!errors.Chemist?.graduation}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.Chemist?.graduation}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    controlId="formPostGraduation"
                    className="w-10/12"
                  >
                    <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
                      Pós-Graduação
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="Chemist.postGraduation"
                      placeholder="Digite a pós-graduação do químico"
                      value={data?.postGraduation}
                      onChange={handleChange}
                      isInvalid={!!errors.Chemist?.postGraduation}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.Chemist?.postGraduation}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    controlId="formSecondPostGraduation"
                    className="w-10/12"
                  >
                    <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
                      Segunda Pós-Graduação
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="Chemist.postGraduation2"
                      placeholder="Digite a segunda pós-graduação do químico"
                      value={data?.postGraduation2}
                      onChange={handleChange}
                      isInvalid={!!errors.Chemist?.postGraduation2}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.Chemist?.postGraduation2}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="contained" type="submit" className="mt-3">
                    Enviar
                  </Button>
                </>
              )}
            </div>
          </Form>
        )}
      </Formik>
    );
  }
};

export default ChemistFormNew;
