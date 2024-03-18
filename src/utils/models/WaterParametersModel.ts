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
