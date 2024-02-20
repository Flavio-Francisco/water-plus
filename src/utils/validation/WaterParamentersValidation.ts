import * as Yup from "yup";

const waterTreatmentParametersSchema = Yup.object().shape({
  WATER_FEED: Yup.object().shape({
    Color: Yup.string().required("coloração obrigatória!!"),
    Turbidity: Yup.string().required("Turvação Obrigatória!!"),
    Taste: Yup.string().required("Sabor Obrigatório!!"),
    Odor: Yup.string().required("Odor Obrigatória!!"),
    TotalChlorine: Yup.number().required("cloro Total Obrigatório!!"),
    FreeChlorine: Yup.number().required("cloro livre Obrigatório!!"),
    pH: Yup.number().required("pH Obrigatório!!"),
  }),
  PRE_TREATMENT: Yup.object().shape({
    SoftenerHardness: Yup.number().required("Dureza Obrigatória!!"),
    MultimediaFilterInputPressure: Yup.number().required(
      "Pressão Obrigatória!!"
    ),
    SoftenerInputPressure: Yup.number().required("Pressão Obrigatória!!"),
    CarbonInputPressure: Yup.number().required("Pressão Obrigatória!!"),
    CarbonOutputPressure: Yup.number().required("Pressão Obrigatória!!"),
    MultimediaFilterDisplayTime: Yup.string().required("Horario obrigatório!!"),
    SoftenerDisplayTime: Yup.string().required("Horario obrigatório!!"),
    CarbonDisplayTime: Yup.string().required("Horario obrigatório!!"),
    SaltReservoirLevel: Yup.number().required("Nível de sal Obrigatório!!"),
  }),
  REVERSE_OSMOSIS_1ST_STEP: Yup.object().shape({
    ROInputPressure: Yup.number().required("Pressão Obrigatória!!"),
    MembraneInputPressure: Yup.string().required("Horario obrigatório!!"),
    RejectPressure: Yup.number().required("Pressão Obrigatória!!"),
    ROInputConductivity: Yup.number().required("Condutividade Obrigatória!!"),
    ROOutputConductivity: Yup.number().required("Contutividade Obrigatória!!"),
    SalinityRejectionRate: Yup.number().required(
      "Regeição salina Obrigatória!!"
    ),
    PermeateFlowRate: Yup.number().required("fluxo Obrigatório!!"),
    RejectFlowRate: Yup.number().required("fluxo Obrigatório!!"),
  }),
  REVERSE_OSMOSIS_2ND_STEP: Yup.object().shape({
    ROInputPressure: Yup.number().required("Pressão Obrigatória!!"),
    MembraneInputPressure: Yup.string().required("Pressão obrigatório!!"),
    RejectPressure: Yup.number().required("Pressão Obrigatória!!"),
    ROInputConductivity: Yup.number().required("Condutividade Obrigatória!!"),
    ROOutputConductivity: Yup.number().required("Contutividade Obrigatória!!"),
    SalinityRejectionRate: Yup.number().required(
      "Regeição salina Obrigatória!!"
    ),
    PermeateFlowRate: Yup.number().required("fluxo Obrigatório!!"),
    RejectFlowRate: Yup.number().required("fluxo Obrigatório!!"),
  }),
  LOOP: Yup.object().shape({
    OutputPressure: Yup.number().required("Pressão Obrigatória!!"),
    ReturnPressure: Yup.number().required("Pressão Obrigatória!!"),
    OzoneTestBefore1stShift: Yup.boolean().required(
      "Ozônio Obrigatório"
    ),
    Conductivity: Yup.number().required("Contutividade Obrigatório!!"),
  }),
});

export default waterTreatmentParametersSchema;
