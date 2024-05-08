
import * as Yup from "yup";

export const validationApvisa = Yup.object().shape({
  user: Yup.string().required("você deve informa seu usuário"),
  password: Yup.string().required("você deve informa sua senha"),
  system: Yup.string().required("Selecione um sistema cadastrado"),

});