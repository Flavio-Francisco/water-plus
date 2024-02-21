export interface WaterTreatmentParameters {
  WATER_FEED: {
    Color: string;
    Turbidity: string;
    Taste: string;
    Odor: string;
    TotalChlorine: number;
    FreeChlorine: number;
    pH: number;
  };
  PRE_TREATMENT: {
    SoftenerHardness: number;
    MultimediaFilterInputPressure: number;
    SoftenerInputPressure: number;
    CarbonInputPressure: number;
    CarbonOutputPressure: number;
    MultimediaFilterDisplayTime: string;
    SoftenerDisplayTime: string;
    CarbonDisplayTime: string;
    SaltReservoirLevel: number;
  };
  REVERSE_OSMOSIS_1ST_STEP: {
    ROInputPressure: number;
    MembraneInputPressure: number;
    RejectPressure: number;
    ROInputConductivity: number;
    ROOutputConductivity: number;
    SalinityRejectionRate: number;
    PermeateFlowRate: number;
    RejectFlowRate: number;
  };
  REVERSE_OSMOSIS_2ND_STEP: {
    ROInputPressure: number;
    MembraneInputPressure: number;
    RejectPressure: number;
    ROInputConductivity: number;
    ROOutputConductivity: number;
    SalinityRejectionRate: number;
    PermeateFlowRate: number;
    RejectFlowRate: number;
  };
  LOOP: {
    OutputPressure: number;
    ReturnPressure: number;
    OzoneTestBefore1stShift: boolean;
    Conductivity: number;
  };
}
