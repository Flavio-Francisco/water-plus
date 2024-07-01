
import { Credentials, ReportModel, ReservoirCleaning } from "../models/report";
import { AnalysisResult } from "@/utils/models/analysis";
import { ApvisaModel } from "./Apvisa";

// Alimwntação
interface Porcentagens {
  permeated: string;
  reject: string;
}
 export interface Props {
  title: string;
  day?: number[] ;
  data?: number[] ;
}
export interface IpropsData {
 
  data?: number[]|undefined ;
}

export const dataZeolica: Props = {
  title: "Pressão do zeolita",
 day:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  data: [81,84,85,84,89,87,100,91,88,89,90,95,91,89,86  ],
};

export const dataAbrandador: Props = {
  title: "Pressão do Abrandador",
  day:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  data: [81,84,85,84,89,87,68,91,78,89,92,95,91,89,86  ],
};

export const dataCarvao: Props = {
  title: "Pressão do Carvão ",
  day:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  data: [79,84,81,84,82,87,78,90,78,89,72,95,91,89,84  ],
};

// pré tratamento
export const dataCloroLivre: Props = {
  title: "Cloro Livre",
  day:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  data: [79,84,81,84,82,87,78,90,78,89,72,95,91,89,84  ],
};
export const dataCloroTotal: Props = {
  title: "Cloro Total",
  day:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  data: [79,84,81,84,82,87,78,90,78,89,72,95,91,89,84  ],
};
export const dataPH: Props = {
  title: "Cloro PH",
  day:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  data: [79,84,81,84,82,87,78,90,78,89,72,95,91,89,84  ],
};
export const Datafull = [
  dataZeolica,
  dataAbrandador,
  dataCarvao,
  dataCloroLivre,
  dataCloroTotal,
  dataPH,
];
// consumo de agua

export const dataProducao: Props = {
  title: "Media de produção",
  day:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  data: [79,84,81,84,82,87,78,90,78,89,72,95,91,89,84  ],
};
//diasafe
export const fakeDiasafe: { data: string; maquina: string }[] = [
  { data: "2024-02-01", maquina: "123456" },
  { data: "2024-02-02", maquina: "654321" },
  { data: "2024-02-03", maquina: "234567" },
  { data: "2024-02-04", maquina: "876543" },
  { data: "2024-02-05", maquina: "345678" },
  { data: "2024-02-06", maquina: "987654" },
  { data: "2024-02-07", maquina: "456789" },
  { data: "2024-02-08", maquina: "765432" },
  { data: "2024-02-09", maquina: "567890" },
  { data: "2024-02-10", maquina: "890123" },
  { data: "2024-02-11", maquina: "678901" },
];

export function extractData( data :Props) {
  const hoje = new Date();
  const mesAtual = new Date().getMonth() + 1; // "+1" porque os meses são indexados a partir de zero
  const anoAtual = hoje.getFullYear();
  if (!Array.isArray(data.data)) {
    throw new Error("Os dados fornecidos não são um array.");
  }

  const Day = data?.day?.slice(1).map((par, index) => ({
    date: `${par}/${mesAtual + index}/${anoAtual}`,
    
  })
  
  );
  const Permeado = data?.data?.slice(1).map((par) => ({
    permeado: par
    
  }));
  const dadosFormatados = {
    Day,
    Permeado 
 }


  return dadosFormatados;
}
export function getItemByIndex(index: number, array: Props[]|null): Props | null {
  if (index >= 0 && index < (array||[]).length) {
      return (array||[])[index];
  } else {
      return null; // Retorna null se o índice estiver fora do intervalo
  }
}
type Prop = {
  data?: object | unknown[] | undefined;
};

export const fakeReportApevisa: ApvisaModel = {
  date: "12/04/2024",
  name: "1º passo",
  cianoBacteria: "satisfatório",
  conductivity: "satisfatório",
  endotoxin: "não satisfatório",
  escherichaColi: "satisfatório",
  freeChlorine: "satisfatório",
  heterotrophic: "não coletado",
  pH: "satisfatório",
  potentiometry: "satisfatório",
  seedingInDepth: "satisfatório",
  seedingOnSurface: "satisfatório",
  totalColiforms: "satisfatório",
};
export const fakeReportApevisa1: ApvisaModel = {
  date: "12/04/2024",
  name: "2º passo",
  cianoBacteria: "satisfatório",
  conductivity: "satisfatório",
  endotoxin: "satisfatório",
  escherichaColi: "satisfatório",
  freeChlorine: "satisfatório",
  heterotrophic: "satisfatório",
  pH: "satisfatório",
  potentiometry: "satisfatório",
  seedingInDepth: "satisfatório",
  seedingOnSurface: "satisfatório",
  totalColiforms: "satisfatório",
};
export const fakeReportApevisa2: ApvisaModel = {
  name: "Loop",
  date: "12/02/2024",
  cianoBacteria: "satisfatório",
  conductivity: "satisfatório",
  endotoxin: "satisfatório",
  escherichaColi: "satisfatório",
  freeChlorine: "satisfatório",
  heterotrophic: "satisfatório",
  pH: "satisfatório",
  potentiometry: "satisfatório",
  seedingInDepth: "satisfatório",
  seedingOnSurface: "satisfatório",
  totalColiforms: "satisfatório",
};

export const ArrayApavise: ApvisaModel[] = [
  fakeReportApevisa2,
  fakeReportApevisa1,
  fakeReportApevisa,
];
export function getByTitle(data: Prop["data"]): string {
  if (
    Array.isArray(data) &&
    data.length > 0 &&
    Array.isArray(data[0]) &&
    data[0].length > 1
  ) {
    console.log("esse é o titulo", data[0][1]);
    return data[0][1]; // Retorna o segundo elemento do primeiro array
  } else {
    return ""; // Retorna null se o array de dados estiver vazio, ou se o primeiro array não tiver dois elementos
  }
}

export function formatarDados({ data }: Prop) {
  const hoje = new Date();
  const mesAtual = new Date().getMonth() + 1; // "+1" porque os meses são indexados a partir de zero
  const anoAtual = hoje.getFullYear();
  if (!Array.isArray(data)) {
    throw new Error("Os dados fornecidos não são um array.");
  }

  const dadosFormatados = data.slice(1).map((par, index) => ({
    valorFormatado: `${par[0]}/${mesAtual + index}/${anoAtual}`,
    segundoValor: par[1],
  }));

  return dadosFormatados;
}
export function returnMinthly(data: Date) {
  // Array com os nomes dos meses
  const meses = [
    "JANEIRO",
    "FEVEREIRO",
    "MARÇO",
    "ABRIL",
    "MAIO",
    "JUNHO",
    "JULHO",
    "AGOSTO",
    "SETEMBRO",
    "OUTUBRO",
    "NOVEMBRO",
    "DEZEMBRO",
  ];

  // Obtém o número do mês (0 a 11) da data fornecida
  const numeroMes = data.getMonth();
  // Retorna o nome do mês correspondente ao número do mês
  return meses[numeroMes];
}
export function returnMonth(data: Date) {
  // Array com os nomes dos meses
  const meses = [
    "JANEIRO",
    "FEVEREIRO",
    "MARÇO",
    "ABRIL",
    "MAIO",
    "JUNHO",
    "JULHO",
    "AGOSTO",
    "SETEMBRO",
    "OUTUBRO",
    "NOVEMBRO",
    "DEZEMBRO",
  ];

  // Obtém o número do mês (0 a 11) da data fornecida
  const numeroMes = data.getMonth()-1;
  // Retorna o nome do mês correspondente ao número do mês
  return meses[numeroMes];
}

export const fackreport: ReportModel = {
  firstPass: {
    hardnessReduction: "99",
    chlorineRejection: "100",
    rejectionLTS: "25",
    rejectionSaline: "98",
  },
  secondPass: {
    hardnessReduction: "100",
    chlorineRejection: "100",
    rejectionLTS: "0.5",
    rejectionSaline: "99",
  },
  flushing: "12/02/24",
  loopDisinfection: "12/02/24",
  finalTime: "08",
  initialTime: "12",
  laboratory: "Aqualise",
  comments:
    "Osmose Reversa é a  separação do solvente do  soluto pela aplicação de  uma alta pressão sobre  uma membrana semipermeável.  No sistema de tratamento  de água, do lado “sujo” da  membrana temos a água  potável e do “lado limpo”  a água tratada para  hemodiálise.",
};

export const fackCredentials: Credentials = {
  doctor: {
    CRM: "00000000000",
    graduation: "fake graduation",
    postGraduation: "fake post graduation",
  },
  Chemist: {
    CRQ: "0000000000",
    graduation: "fake graduation",
    postGraduation: "fake post graduation",
    postGraduation2: "fake post graduation",
  },
  operator: {
    name:"Flavio",
    registration: "55555555",
  },
};

export const fakeReservoirCleaning: ReservoirCleaning = {
  lastCleaning: "25/02/2024",
  nextCleaning: "2024-03-12",
};
export const FormInitialValues: AnalysisResult = {

  sampleName: "",
  date: "",
  eColiPresence: "",
  endotoxins: "",
  heterotrophicBacteriaCount: "",
  totalColiformsPresence: "",


};
export function calcularPorcentagem(
  data:number[] | undefined
): Porcentagens {
  let permeated: string = "";
  let reject: string = "";

  if (!data || !Array.isArray(data)) {
    return { permeated: "Dados não encontrados", reject: "" };
  }

  let totalColuna1 = 0;
  let totalColuna2 = 0;

  for (let i = 1; i < data.length; i++) {
    const rowData = data[i];
    if (
      Array.isArray(rowData) &&
      rowData.length >= 3 &&
      typeof rowData[1] === "number" &&
      typeof rowData[2] === "number"
    ) {
      totalColuna1 += Number(rowData[1]);
      totalColuna2 += Number(rowData[2]);
    } else {
      return {
        permeated: "Estrutura de dados inválida",
        reject: "",
      };
    }
  }

  if (totalColuna1 === 0) {
    return { permeated: "Divisão por zero", reject: "" };
  }

  permeated = (((totalColuna1 - totalColuna2) / totalColuna1) * 100).toFixed(2);
  reject = ((totalColuna2 / totalColuna1) * 100).toFixed(2);

  return { permeated, reject };
}
export const fakeListUser = [
  {
    user: {
      name: "flavio",
      password: "010203",
    },
  },
  {
    user: {
      name: "usuario2",
      password: "senha2",
    },
  },
  {
    user: {
      name: "usuario3",
      password: "senha3",
    },
  },
  {
    user: {
      name: "usuario4",
      password: "senha4",
    },
  },
  {
    user: {
      name: "usuario5",
      password: "senha5",
    },
  },
  {
    user: {
      name: "usuario6",
      password: "senha6",
    },
  },
  {
    user: {
      name: "usuario7",
      password: "senha7",
    },
  },
  {
    user: {
      name: "usuario8",
      password: "senha8",
    },
  },
  {
    user: {
      name: "usuario9",
      password: "senha9",
    },
  },
  {
    user: {
      name: "usuario10",
      password: "senha10",
    },
  },
  {
    user: {
      name: "usuario10",
      password: "senha10",
    },
  },
  {
    user: {
      name: "usuario10",
      password: "senha10",
    },
  },
  {
    user: {
      name: "usuario10",
      password: "senha10",
    },
  },
  {
    user: {
      name: "usuario10",
      password: "senha10",
    },
  },
  {
    user: {
      name: "usuario10",
      password: "senha10",
    },
  },
  {
    user: {
      name: "usuario10",
      password: "senha10",
    },
  },
  {
    user: {
      name: "usuario10",
      password: "senha10",
    },
  },
];
