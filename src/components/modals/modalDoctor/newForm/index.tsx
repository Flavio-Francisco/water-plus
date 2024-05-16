import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import { SchemaDoctor } from "@/utils/validation/CredentialsForm";
import { CredentialsDoctor } from "@/utils/models/Credentials";
import Loader from "@/components/loader/page";
import { useMutation } from "@tanstack/react-query";
import { useUserContext } from "@/context/userContext";
import { createDoctor, updateDoctor } from "@/app/fecth/doctor";

export interface CredentialDoctordb {
  id: number;
  name: string;
  CRM: string;
  graduation: string;
  postGraduation: string;
  postGraduation2: string;
  system_id: number;
}

interface Ipros {
  data: CredentialDoctordb | undefined;
  refech: () => void;
  onUpdate: (success: boolean) => void;
}

const DoctorFormNew = ({ data, refech, onUpdate }: Ipros) => {
  const [isValues, setIsValues] = useState(true);
  const { user } = useUserContext();

  const initialValues: CredentialsDoctor = {
    doctor: {
      name: data?.name || "",
      CRM: data?.CRM || "",
      graduation: data?.graduation || "",
      postGraduation: data?.postGraduation || "",
      postGraduation2: data?.postGraduation2 || "",
    },
  };
  console.log("médico", data);
  const { mutate } = useMutation({
    mutationKey: ["doctor"],
    mutationFn: async (values: CredentialsDoctor) => {
      await (data === undefined ? createDoctor : updateDoctor)(
        user?.system_id || 0,
        values
      );
    },
    onSuccess: () => {
      refech();
      alert("dados atualizados com sucesso!!!");
      onUpdate(false);
    },
    onError: () => {
      refech();
      alert("Erro ao atualizados dados!!!");
      onUpdate(false);
    },
  });
  useEffect(() => {
    if (data !== undefined) {
      setIsValues(false); // Mudança aqui
    }
  }, [data]);

  if (data === undefined && isValues) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="text-blue">
          <h1 style={{ color: "rgba(25,118,210,255)" }}>Carregando ....</h1>
        </div>
        <div className="mt-52">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SchemaDoctor}
      onSubmit={(values: CredentialsDoctor, { setSubmitting }) => {
        console.log(values);
        mutate(values);
        setSubmitting(false);
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
              Nome
            </Form.Label>
            <Form.Control
              type="text"
              name="doctor.name"
              placeholder="Digite o nome do médico"
              value={values.doctor.name}
              onChange={handleChange}
              isInvalid={!!errors.doctor?.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.doctor?.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formCRM">
            <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
              CRM
            </Form.Label>
            <Form.Control
              type="text"
              name="doctor.CRM"
              placeholder="Digite o CRM do médico"
              value={values.doctor.CRM}
              onChange={handleChange}
              isInvalid={!!errors.doctor?.CRM}
            />
            <Form.Control.Feedback type="invalid">
              {errors.doctor?.CRM}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGraduation">
            <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
              Graduação
            </Form.Label>
            <Form.Control
              type="text"
              name="doctor.graduation"
              placeholder="Digite a graduação do médico"
              value={values.doctor.graduation}
              onChange={handleChange}
              isInvalid={!!errors.doctor?.graduation}
            />
            <Form.Control.Feedback type="invalid">
              {errors.doctor?.graduation}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPostGraduation">
            <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
              Pós-Graduação
            </Form.Label>
            <Form.Control
              type="text"
              name="doctor.postGraduation"
              placeholder="Digite a pós-graduação do médico"
              value={values.doctor.postGraduation}
              onChange={handleChange}
              isInvalid={!!errors.doctor?.postGraduation}
            />
            <Form.Control.Feedback type="invalid">
              {errors.doctor?.postGraduation}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formSecondPostGraduation">
            <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
              Segunda Pós-Graduação
            </Form.Label>
            <Form.Control
              type="text"
              name="doctor.postGraduation2"
              placeholder="Digite a segunda pós-graduação do médico"
              value={values.doctor.postGraduation2}
              onChange={handleChange}
              isInvalid={!!errors.doctor?.postGraduation2}
            />
            <Form.Control.Feedback type="invalid">
              {errors.doctor?.postGraduation2}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="bg-[#1976d2]"
            style={{ marginTop: 20 }}
          >
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default DoctorFormNew;
