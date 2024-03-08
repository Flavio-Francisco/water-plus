import * as Yup from 'yup';





export const SchemaDoctor = Yup.object().shape({
    doctor: Yup.object().shape({
      name: Yup.string().required('Nome é obrigatório'),
      CRM: Yup.string(),
      graduation: Yup.string(),
      postGraduation: Yup.string(),
      postGraduation2: Yup.string(),
    }),
  });


  export const  SchemaChemist = Yup.object().shape({
    Chemist: Yup.object().shape({
      name: Yup.string().required('Nome é obrigatório'),
      CRQ: Yup.string(),
      graduation: Yup.string(),
      postGraduation: Yup.string(),
      postGraduation2: Yup.string(),
    }),
  });



 