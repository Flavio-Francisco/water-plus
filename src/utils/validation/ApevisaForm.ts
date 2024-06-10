import * as Yup from "yup";

export const validationApvisa = Yup.object().shape({
  date: Yup.string().required("Required"),
  cianoBacteria: Yup.string().required("Required"),
  escherichaColi: Yup.string().required("Required"),
  endotoxin: Yup.string().required("Required"),
  heterotrophic: Yup.string().required("Required"),
  totalColiforms: Yup.string().required("Required"),
  seedingInDepth: Yup.string().required("Required"),
  seedingOnSurface: Yup.string().required("Required"),
  conductivity: Yup.string().required("Required"),
  freeChlorine: Yup.string().required("Required"),
  pH: Yup.string().required("Required"),
  potentiometry: Yup.string().required("Required"),
});
