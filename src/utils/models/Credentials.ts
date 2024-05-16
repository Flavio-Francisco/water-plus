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
    id?: number;
    name: string;
    registration: string;
    systen_id?: number;

  };
}
export interface Chemist {
  
    name: string;
    CRQ?: string;
    graduation?: string;
    postGraduation?: string;
    postGraduation2?: string;
  
}