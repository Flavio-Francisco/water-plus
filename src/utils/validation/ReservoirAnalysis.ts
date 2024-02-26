import * as Yup from "yup";

export const ReservoirAnalysis = Yup.object().shape({
  SampleDescription: Yup.object().shape({
    sampleName: Yup.string().required("Nome da amostra é obrigatório"),
    samplingAddress: Yup.string().required("Endereço de coleta é obrigatório"),
    city: Yup.string().required("Cidade é obrigatória"),
    state: Yup.string().required("Estado é obrigatório"),
    zipCode: Yup.string().required("CEP é obrigatório"),
    sampleMatrixAndOrigin: Yup.string().required(
      "Matriz e origem da amostra são obrigatórias",
    ),
    samplingDate: Yup.string().required("Data de coleta é obrigatória"),
    samplingResponsible: Yup.string().required(
      "Responsável pela coleta é obrigatório",
    ),
  }),
  bicarbonateAlkalinity: Yup.string().required(
    "Alcalinidade de bicarbonato é obrigatória",
  ),
  carbonateAlkalinity: Yup.string().required(
    "Alcalinidade de carbonato é obrigatória",
  ),
  hydroxideAlkalinity: Yup.string().required(
    "Alcalinidade de hidróxido é obrigatória",
  ),
  totalAlkalinity: Yup.string().required("Alcalinidade total é obrigatória"),
  aluminum: Yup.string().required("Alumínio é obrigatório"),
  ammonia: Yup.string().required("Amônia é obrigatória"),
  calcium: Yup.string().required("Cálcio é obrigatório"),
  chlorides: Yup.string().required("Cloreto é obrigatório"),
  freeResidualChlorine: Yup.string().required(
    "Cloro residual livre é obrigatório",
  ),
  electricalConductivity: Yup.string().required(
    "Condutividade elétrica é obrigatória",
  ),
  apparentColor: Yup.string().required("Cor aparente é obrigatória"),
  carbonateHardness: Yup.string().required(
    "Dureza de carbonatos é obrigatória",
  ),
  nonCarbonateHardness: Yup.string().required(
    "Dureza de não carbonatos é obrigatória",
  ),
  totalHardness: Yup.string().required("Dureza total é obrigatória"),
  totalIron: Yup.string().required("Ferro total é obrigatório"),
  magnesium: Yup.string().required("Magnésio é obrigatório"),
  manganese: Yup.string().required("Manganês é obrigatório"),
  nitrate: Yup.string().required("Nitrato é obrigatório"),
  nitrite: Yup.string().required("Nitrito é obrigatório"),
  dissolvedOxygen: Yup.string().required("Oxigênio dissolvido é obrigatório"),
  pH: Yup.string().required("pH é obrigatório"),
  potassium: Yup.string().required("Potássio é obrigatório"),
  sodium: Yup.string().required("Sódio é obrigatório"),
  totalDissolvedSolids: Yup.string().required(
    "Sólidos dissolvidos totais são obrigatórios",
  ),
  sulfate: Yup.string().required("Sulfato é obrigatório"),
  hydrogenSulfide: Yup.string().required("Sulfeto de hidrogênio é obrigatório"),
  surfactants: Yup.string().required("Surfactantes são obrigatórios"),
  totalColiforms: Yup.string().required("Coliformes totais são obrigatórios"),
  heterotrophicBacteriaCount: Yup.string().required(
    "Contagem de bactérias heterotróficas é obrigatória",
  ),
  endotoxins: Yup.string().required("Endotoxinas são obrigatórias"),
});
