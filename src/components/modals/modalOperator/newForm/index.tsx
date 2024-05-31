import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import { SchemaOperator } from "@/utils/validation/CredentialsForm";
import { CredentialsOperator } from "@/utils/models/Credentials";
import { useMutation } from "@tanstack/react-query";
import { createOperator, updateOperator } from "@/app/fecth/operator";
import { useUserContext } from "@/context/userContext";
import Loader from "@/components/loader/page";
import { Autocomplete, Button, TextField } from "@mui/material";

export interface CredentialOperator {
  id?: number;
  name: string;
  registration: string;
  system_id?: number;
}

interface Ipros {
  data: CredentialOperator[] | undefined;
  refech: () => void;
  onUpdate: (success: boolean) => void;
}

const OperatorFormNew = ({ data, onUpdate, refech }: Ipros) => {
  const [isValues, setIsValues] = useState(true);
  const [operator, setOperator] = useState<CredentialsOperator>({
    operator: { name: "", registration: "" },
  });
  const { user } = useUserContext();
  const handleOperatorChange = (
    event: React.ChangeEvent<object>,
    newValue: string | CredentialOperator | null
  ) => {
    if (typeof newValue === "string") {
      const found = data?.find((a) => a.name === newValue) || null;

      setOperator({
        operator: {
          id: found?.id,
          name: found?.name || "",
          registration: found?.registration || "",
          systen_id: user?.system_id || 0,
        },
      });
    } else {
      setOperator({
        operator: {
          id: newValue?.id,
          name: newValue?.name || "",
          registration: newValue?.registration || "",
          systen_id: user?.system_id || 0,
        },
      });
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["editOperator"],
    mutationFn: async (values: CredentialsOperator) => {
      await (data === undefined ? createOperator : updateOperator)(
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
  console.log("operador", data);

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
    <>
      <Autocomplete
        className="m-auto mt-2.5 md:w-4/6 max-md:w-10/12"
        value={operator.operator}
        onChange={handleOperatorChange}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={data || []} // Use array vazio se `pacientData` for `undefined`
        getOptionLabel={(option) => option.name || ""}
        renderInput={(params) => (
          <TextField {...params} label="Selecione o Operador" />
        )}
      />

      {operator.operator.name != "" && (
        <Formik
          initialValues={operator}
          validationSchema={SchemaOperator}
          onSubmit={(values: CredentialsOperator, { setSubmitting }) => {
            // Modifique para CredentialsDoctorOperator
            console.log(values);
            setSubmitting(false);
            mutate(values);
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
                  name="operator.name" // Modifique para operator.name
                  placeholder="Digite o nome do operador"
                  value={values.operator.name} // Modifique para operator.name
                  onChange={handleChange}
                  isInvalid={!!errors.operator?.name} // Modifique para operator.name
                />
                <Form.Control.Feedback type="invalid">
                  {errors.operator?.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formRegistration">
                <Form.Label style={{ marginTop: 10, marginBottom: 2 }}>
                  Registro
                </Form.Label>
                <Form.Control
                  type="text"
                  name="operator.registration" // Modifique para operator.registration
                  placeholder="Digite o registro do operador"
                  value={values.operator.registration} // Modifique para operator.registration
                  onChange={handleChange}
                  isInvalid={!!errors.operator?.registration} // Modifique para operator.registration
                />
                <Form.Control.Feedback type="invalid">
                  {errors.operator?.registration}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                variant="contained"
                type="submit"
                style={{ marginTop: 20 }}
              >
                Enviar
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default OperatorFormNew;
