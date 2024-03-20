import * as Yup from "yup";



export const FormAnalysis = Yup.object().shape({
  SampleDescription: Yup.object().shape({
    sampleName: Yup.string().required("Descrição da amostra é obrigatória"),
    samplingAddress: Yup.string().required("Endereço de amostragem é obrigatório"),
    city: Yup.string().required("Cidade é obrigatória"),
    state: Yup.string().required("Estado é obrigatório"),
    zipCode: Yup.string().required("CEP é obrigatório"),
    sampleMatrixAndOrigin: Yup.string().required("Matriz de amostra e origem é obrigatória"),
    samplingDate: Yup.date().required("Data da coleta é obrigatória"),
    samplingResponsible: Yup.string().required("Responsável pela coleta é obrigatório"),
  }),
  MicrobiologigoAssays: Yup.object().shape({
    eColiPresence: Yup.string().required("Presença de Escherichia Coli é obrigatória"),
    totalColiformsPresence: Yup.string().required("Presença de Coliformes Totais é obrigatória"),
    heterotrophicBacteriaCount: Yup.string().required("Contagem de bactérias heterotróficas é obrigatória"),
  }),
});
