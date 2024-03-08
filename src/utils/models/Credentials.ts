export interface CredentialsChemist {
  
    Chemist: {
      name:string;
      CRQ?: string;
      graduation?: string;
      postGraduation?: string;
      postGraduation2?: string;
    };
  
    
}

export interface CredentialsDoctor {
    doctor: {
        name:string;
        CRM?: string;
        graduation?: string;
        postGraduation?: string;
        postGraduation2?: string;
      };
}

export interface CredentialsDoctorOperator {
    operator: {
        name:string;
        registration: string;
      };
}