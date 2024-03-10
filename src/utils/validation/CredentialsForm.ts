import * as Yup from "yup";

export const SchemaDoctor = Yup.object().shape({
  doctor: Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    CRM: Yup.string(),
    graduation: Yup.string(),
    postGraduation: Yup.string(),
    postGraduation2: Yup.string(),
  }),
});

export const SchemaChemist = Yup.object().shape({
  Chemist: Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    CRQ: Yup.string(),
    graduation: Yup.string(),
    postGraduation: Yup.string(),
    postGraduation2: Yup.string(),
  }),
});

export const SchemaOperator = Yup.object().shape({
  operator: Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    registration: Yup.string().required("Matricula é obrigatório"),
  }),
});

export const SchemaUser = Yup.object().shape({
  user: Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    password: Yup.string().required("senha é obrigatório"),
  }),
});
