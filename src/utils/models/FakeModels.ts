export interface ReportModel {
  firstPass: {
    rejectionLTS: string;
    rejectionSaline: string;
    hardnessReduction: string;
    chlorineRejection: string;
  };
  secondPass: {
    rejectionLTS: string;
    rejectionSaline: string;
    hardnessReduction: string;
    chlorineRejection: string;
  };
  flushing: string;
  laboratory: string;
  loopDisinfection: string;
  initialTime: string;
  finalTime: string;
}
