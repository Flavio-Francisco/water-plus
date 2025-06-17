export interface WaterTreatmentParameters {
  WATER_FEED: {
    Color: string |undefined;
    Turbidity:string |undefined;
    Taste: string |undefined;
    Odor: string |undefined;
    TotalChlorine: number|undefined;
    FreeChlorine: number|undefined;
    pH: number|undefined;
  };
  PRE_TREATMENT: {
    SoftenerHardness: number|undefined;
    MultimediaFilterInputPressure: number|undefined;
    SoftenerInputPressure: number|undefined;
    CarbonInputPressure: number|undefined;
    CarbonOutputPressure: number|undefined;
    MultimediaFilterDisplayTime: string|undefined;
    SoftenerDisplayTime: string|undefined;
    CarbonDisplayTime: string|undefined;
    SaltReservoirLevel:string|undefined;
  };
  REVERSE_OSMOSIS_1ST_STEP: {
    ROInputPressure: number|undefined;
    MembraneInputPressure: number|undefined;
    RejectPressure: number|undefined;
    ROInputConductivity: number|undefined;
    ROOutputConductivity: number|undefined;
    SalinityRejectionRate: number|undefined;
    PermeateFlowRate: number|undefined;
    RejectFlowRate: number|undefined;
  };
  REVERSE_OSMOSIS_2ND_STEP: {
    ROInputPressure: number|undefined;
    MembraneInputPressure: number|undefined;
    RejectPressure: number|undefined;
    ROInputConductivity: number|undefined;
    ROOutputConductivity: number|undefined;
    SalinityRejectionRate: number|undefined;
    PermeateFlowRate: number|undefined;
    RejectFlowRate: number|undefined;
  };
  LOOP: {
    OutputPressure: number|undefined;
    ReturnPressure: number|undefined;
    OzoneTestBefore1stShift: boolean|undefined;
    Conductivity: number|undefined;
  };
}
export type Reservoir = {
  id: number | null;
  date: Date | null;
  Color: string | null;
  Turbidity: string | null;
  Taste: string | null;
  Odor: string | null;
  TotalChlorine: number | null;
  FreeChlorine: number | null;
  ph: number | null;
};

export interface ParametersDB {
 
  id: number | null;
  date:Date | null;
  Color: string | null;
  Turbidity: string | null;
  Taste: string | null;
  Odor: string | null;
  TotalChlorine: number | null;
  FreeChlorine: number | null;
  ph: number | null;
  
  SoftenerHardness: number | null;
  MultimediaFilterInputPressure: number | null;
  SoftenerInputPressure: number | null;
  CarbonInputPressure: number | null;
  CarbonOutputPressure: number | null;
  MultimediaFilterDisplayTime: string | null;
  SoftenerDisplayTime: string | null;
  CarbonDisplayTime: string | null;
  SaltReservoirLevel: string | null;
  
  ROInputPressure1: number | null;
  MembraneInputPressure1: number | null;
  RejectPressur1: number | null;
  ROInputConductivity1: number | null;
  ROOutputConductivity1: number | null;
  SalinityRejectionRate1: number | null;
  PermeateFlowRate1: number | null;
  RejectFlowRate1: number | null;
  
  ROInputPressure2: number | null;
  MembraneInputPressure2: number | null;
  RejectPressur2: number | null;
  ROInputConductivity2: number | null;
  ROOutputConductivity2: number | null;
  SalinityRejectionRate2: number | null;
  PermeateFlowRate2: number | null;
  RejectFlowRate2: number | null;

  OutputPressure: number | null;
  ReturnPressure: number | null;
  OzoneTestBefore1stShift: boolean | null;
  Conductivity: number | null;
}

