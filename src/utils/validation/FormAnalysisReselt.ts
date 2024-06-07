import * as Yup from "yup";



export const FormAnalysis = Yup.object().shape({

    sampleName: Yup.string().required("Descrição da amostra é obrigatória"),
    date: Yup.date().required("Data da coleta é obrigatória"),
    eColiPresence: Yup.string().required("Presença de Escherichia Coli é obrigatória"),
    totalColiformsPresence: Yup.string().required("Presença de Coliformes Totais é obrigatória"),
    heterotrophicBacteriaCount: Yup.string().required("Contagem de bactérias heterotróficas é obrigatória"),
    endotoxins: Yup.string().required("Contagem de bactérias heterotróficas é obrigatória"),
});
