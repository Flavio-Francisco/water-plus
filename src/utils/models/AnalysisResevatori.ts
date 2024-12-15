export interface WaterAnalysis {
  id?: number;
  date:string;
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
    samplingDate: string; 
    sampleMatrixAndOrigin: string;
    system_id?: number;
  }
  