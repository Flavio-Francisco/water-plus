import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  date: Yup.date()
    .required("Data é obrigatória")
    .max(new Date(), "A data não pode ser no futuro"),
  sampleName: Yup.string()
    .required("Nome da amostra é obrigatório")
    .min(3, "O nome da amostra deve ter pelo menos 3 caracteres")
    .max(50, "O nome da amostra deve ter no máximo 50 caracteres"),

  bicarbonateAlkalinity: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  carbonateAlkalinity: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  hydroxideAlkalinity: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  totalAlkalinity: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  aluminum: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  ammonia: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  calcium: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  chlorides: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  freeResidualChlorine: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  electricalConductivity: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  apparentColor: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  carbonateHardness: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  nonCarbonateHardness: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  totalHardness: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  totalIron: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  magnesium: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  manganese: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  nitrate: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  nitrite: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  dissolvedOxygen: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  pH: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0")
    .max(14, "O pH deve estar entre 0 e 14"),
  potassium: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  sodium: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  totalDissolvedSolids: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  sulfate: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  hydrogenSulfide: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  surfactants: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  totalColiforms: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  heterotrophicBacteriaCount: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
  endotoxins: Yup.number()
    .typeError("O valor deve ser um número válido")
    .required("Este campo é obrigatório")
    .min(0, "O valor deve ser maior ou igual a 0"),
});

export default validationSchema;

export interface ReservoirAnalysisInitialValues {
  id?: number;
  date: string;
  sampleName: string;
  bicarbonateAlkalinity: number;
  carbonateAlkalinity: number;
  hydroxideAlkalinity: number;
  totalAlkalinity: number;
  aluminum: number;
  ammonia: number;
  calcium: number;
  chlorides: number;
  freeResidualChlorine: number;
  electricalConductivity: number;
  apparentColor: number;
  carbonateHardness: number;
  nonCarbonateHardness: number;
  totalHardness: number;
  totalIron: number;
  magnesium: number;
  manganese: number;
  nitrate: number;
  nitrite: number;
  dissolvedOxygen: number;
  pH: number;
  potassium: number;
  sodium: number;
  totalDissolvedSolids: number;
  sulfate: number;
  hydrogenSulfide: number;
  surfactants: number;
  totalColiforms: number;
  heterotrophicBacteriaCount: number;
  endotoxins: number;
  system_id?: number;
 
}
export interface ReservoirAnalysisInitialValuesEdite {
  id?: number;
  date: string;
  sampleName: string;
  bicarbonateAlkalinity: string;
  carbonateAlkalinity: string;
  hydroxideAlkalinity: string;
  totalAlkalinity: string;
  aluminum: string;
  ammonia: string;
  calcium: string;
  chlorides: string;
  freeResidualChlorine: string;
  electricalConductivity: string;
  apparentColor: string;
  carbonateHardness: string;
  nonCarbonateHardness: string;
  totalHardness: string;
  totalIron: string;
  magnesium: string;
  manganese: string;
  nitrate: string;
  nitrite: string;
  dissolvedOxygen: string;
  pH: string;
  potassium: string;
  sodium: string;
  totalDissolvedSolids: string;
  sulfate: string;
  hydrogenSulfide: string;
  surfactants: string;
  totalColiforms: string;
  heterotrophicBacteriaCount: string;
  endotoxins: string;
  system_id?: number;
}