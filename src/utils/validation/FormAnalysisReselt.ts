import * as Yup from "yup";

export const FormAnalysis = Yup.object().shape({
  SampleDescription: Yup.object().shape({
    sampleName: Yup.string().required("Required"),
    samplingAddress: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    zipCode: Yup.string().required("Required"),
    sampleMatrixAndOrigin: Yup.string().required("Required"),
    samplingDate: Yup.string().required("Required"),
    samplingResponsible: Yup.string().required("Required"),
  }),
  MicrobiologigoAssays: Yup.object().shape({
    eColiPresence: Yup.string().required("Required"),
    totalColiformsPresence: Yup.string().required("Required"),
    heterotrophicBacteriaCount: Yup.string().required("Required"),
  }),
});
