export interface ReservoirAnalysisResults {
  SampleDescription: {
    sampleName: string;
    samplingAddress: string;
    city: string;
    state: string;
    zipCode: string;
    sampleMatrixAndOrigin: string;
    samplingDate: string;
    samplingResponsible: string;
  };
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
}

export interface AnalysisResult {
  SampleDescription: {
    sampleName: string;
    samplingAddress: string;
    city: string;
    state: string;
    zipCode: string;
    sampleMatrixAndOrigin: string;
    samplingDate: string;
    samplingResponsible: string;
  };
  MicrobiologigoAssays: {
    eColiPresence: string;
    totalColiformsPresence: string;
    heterotrophicBacteriaCount: string;
  };
}

export interface Systems{
  id: number | null;
name: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
  number: number| null;

}