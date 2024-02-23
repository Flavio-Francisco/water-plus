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
  comments: string;
}

export interface ReservoirCleaning {
  lastCleaning: string;
  nextCleaning: string;
}

export interface Credentials {
  doctor: {
    CRM?: string;
    graduation?: string;
    postGraduation?: string;
    postGraduation2?: string;
  };
  Chemist: {
    CRQ?: string;
    graduation?: string;
    postGraduation?: string;
    postGraduation2?: string;
  };

  operator: {
    registration: string;
  };
}
