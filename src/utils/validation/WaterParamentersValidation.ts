import * as Yup from "yup";
import { z } from "zod";

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
    OzoneTestBefore1stShift: Yup.boolean().required("Ozônio Obrigatório"),
    Conductivity: Yup.number().required("Contutividade Obrigatório!!"),
  }),
});

export default waterTreatmentParametersSchema;

export const WaterTreatmentParametersSchema = z.object({
  WATER_FEED: z.object({
    Color: z.string(),
    Turbidity: z.string(),
    Taste: z.string(),
    Odor: z.string(),
    TotalChlorine: z.number(),
    FreeChlorine: z.number(),
    pH: z.number(),
  }),
  PRE_TREATMENT: z.object({
    SoftenerHardness: z.number(),
    MultimediaFilterInputPressure: z.number(),
    SoftenerInputPressure: z.number(),
    CarbonInputPressure: z.number(),
    CarbonOutputPressure: z.number(),
    MultimediaFilterDisplayTime: z.string(),
    SoftenerDisplayTime: z.string(),
    CarbonDisplayTime: z.string(),
    SaltReservoirLevel: z.number(),
  }),
  REVERSE_OSMOSIS_1ST_STEP: z.object({
    ROInputPressure: z.number(),
    MembraneInputPressure: z.number(),
    RejectPressure: z.number(),
    ROInputConductivity: z.number(),
    ROOutputConductivity: z.number(),
    SalinityRejectionRate: z.number(),
    PermeateFlowRate: z.number(),
    RejectFlowRate: z.number(),
  }),
  REVERSE_OSMOSIS_2ND_STEP: z.object({
    ROInputPressure: z.number(),
    MembraneInputPressure: z.number(),
    RejectPressure: z.number(),
    ROInputConductivity: z.number(),
    ROOutputConductivity: z.number(),
    SalinityRejectionRate: z.number(),
    PermeateFlowRate: z.number(),
    RejectFlowRate: z.number(),
  }),
  LOOP: z.object({
    OutputPressure: z.number(),
    ReturnPressure: z.number(),
    OzoneTestBefore1stShift: z.boolean(),
    Conductivity: z.number(),
  }),
});
