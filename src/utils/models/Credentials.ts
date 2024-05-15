export interface CredentialsChemist {
  Chemist: {
    id?: number;
    name: string;
    CRQ?: string;
    graduation?: string;
    postGraduation?: string;
    postGraduation2?: string;
  };
}

export interface CredentialsDoctor {
  doctor: {
    name: string;
    CRM?: string;
    graduation?: string;
    postGraduation?: string;
    postGraduation2?: string;
  };
}

export interface CredentialsOperator {
  operator: {
    name: string;
    registration: string;
  };
}
export interface Chemist {
  
    name: string;
    CRQ?: string;
    graduation?: string;
    postGraduation?: string;
    postGraduation2?: string;
  
}