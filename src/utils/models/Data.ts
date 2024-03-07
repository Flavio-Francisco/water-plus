import { Props } from "@/components/grafic";
import { Credentials, ReportModel, ReservoirCleaning } from "../models/report";
import { AnalysisResult } from "@/utils/models/analysis";
import { ApvisaModel } from "./Apvisa";

// Alimwntação
interface Porcentagens {
  permeated: string;
  reject: string;
}

export const dataZeolica: Props = {
  title: "Pressão do zeolita",
  subtitle:
    "Quando a pressão for menor que 20%, da pressão inicial, fazer a troca do meio filtante.",
   data : [
      { x: 1, y: 35 },
      { x: 2, y: 30 },
      { x: 3, y: 25 },
      { x: 4, y: 11 },
      { x: 5, y: 110 },
      { x: 6, y: 18 },
      { x: 7, y: 17 },
      { x: 8, y: 12 },
      { x: 9, y: 16 },
      { x: 10, y: 12 },
      { x: 11, y: 25 },
      { x: 12, y: 46 },
      { x: 13, y: 64 },
      { x: 14, y: 74 },
      { x: 15, y: 14 },
      { x: 16, y: 140 },
    ],
    
};

export const dataAbrandador: Props = {
  title: "Pressão do Abrandador",
  subtitle:
    "Quando a pressão for menor que 20%, da pressão inicial, fazer a troca do meio filtante.",
  data: [
 
      { x: 1, y: 35 },
      { x: 2, y: 30 },
      { x: 3, y: 25 },
      { x: 4, y: 11 },
      { x: 5, y: 14 },
      { x: 6, y: 52 },
      { x: 7, y: 17 },
      { x: 8, y: 25 },
      { x: 9, y: 47 },
      { x: 10, y: 140 },
      { x: 11, y: 135 },
      { x: 12, y: 130 },
      { x: 13, y: 138 },
      { x: 14, y: 129 },
      { x: 15, y: 121 },
      { x: 16, y: 110 },
   
    
  ],
};

export const dataCarvao: Props = {
  title: "Pressão do Carvão  do mês de Abril",
  subtitle:
    "Quando a pressão for menor que 20%, da pressão inicial, fazer a troca do meio filtante.",
  data : [
      { x: 1, y: 55 },
      { x: 2, y: 30 },
      { x: 3, y: 25 },
      { x: 4, y: 61 },
      { x: 5, y: 10 },
      { x: 6, y: 18 },
      { x: 7, y: 19 },
      { x: 8, y: 82 },
      { x: 9, y: 16 },
      { x: 10, y: 112 },
      { x: 11, y: 45 },
      { x: 12, y: 46 },
      { x: 13, y: 64 },
      { x: 14, y: 74 },
      { x: 15, y: 14 },
      { x: 16, y: 40 },
    ],
    
};
// pré tratamento
export const dataCloroLivre: Props = {
  title: "Cloro Livre",
  subtitle: "valor maximo 2.5 ppm.",
  data: [
    { x: 1, y: 2 },
    { x: 2, y: 2.5 },
    { x: 3, y: 1.5 },
    { x: 4, y: 1 },
    { x: 5, y: 1 },
    { x: 6, y: 2 },
    { x: 7, y: 2.5 },
    { x: 8, y: 2 },
    { x: 9, y: 2 },
    { x: 10, y: 2 },
    { x: 11, y: 2.5 },
    { x: 12, y: 1 },
    { x: 13, y: 2 },
    { x: 14, y: 1.4 },
    { x: 15, y: 1.5 },
    { x: 16, y: 1.4 },
  ],
};
export const dataCloroTotal: Props = {
  title: "Cloro Total",
  subtitle: "valor maximo 2.5 ppm.",
  data: [
    ["Dias", "Cloro Total"],
    { x: 1, y: 2 },
    { x: 2, y: 2.5 },
    { x: 3, y: 1.5 },
    { x: 4, y: 1 },
    { x: 5, y: 1 },
    { x: 6, y: 2 },
    { x: 7, y: 2.5 },
    { x: 8, y: 2 },
    { x: 9, y: 2 },
    { x: 10, y: 2 },
    { x: 11, y: 2.5 },
    { x: 12, y: 1 },
    { x: 13, y: 2 },
    { x: 14, y: 1.4 },
    { x: 15, y: 1.5 },
    { x: 16, y: 1.4 },
  ],
};
export const dataPH: Props = {
  title: "Cloro PH",
  subtitle: "valor maximo 2.5 ppm.",
  data: [
    ["Dias", "PH"],
    { x: 1, y: 55 },
    { x: 2, y: 30 },
    { x: 3, y: 25 },
    { x: 4, y: 61 },
    { x: 5, y: 10 },
    { x: 6, y: 18 },
    { x: 7, y: 19 },
    { x: 8, y: 82 },
    { x: 9, y: 16 },
    { x: 10, y: 112 },
    { x: 11, y: 45 },
    { x: 12, y: 46 },
    { x: 13, y: 64 },
    { x: 14, y: 74 },
    { x: 15, y: 14 },
    { x: 16, y: 40 },
  ],
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
  subtitle: "os dados são baseados na posetagem de rejeito",
  data: [
    ["Dias", "Permeado", "Rejeito"],
    [1, 12, 3],
    [2, 14, 3],
    [3, 13, 2],
    [4, 13, 3],
    [5, 12, 3],
    [6, 12, 3],
    [7, 15, 3],
    [8, 12, 1],
    [9, 12, 3],
    [10, 12, 3],
    [11, 12, 2],
    [12, 14, 3],
    [13, 12, 3],
    [14, 12, 3],
    [15, 12, 3],
    [16, 12, 3],
    [17, 11, 1],
    [18, 14, 1],
    [19, 17, 5],
    [20, 12, 3],
    [21, 16, 3],
    [22, 12, 3],
    [23, 15, 3],
    [24, 16, 3],
    [25, 14, 3],
    [26, 14, 3],
    [27, 14, 3],
    [28, 14, 3],
  ],
};
//diasafe
export const fakeDiasafe: { data: string, maquina: string }[] = [
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
  { data: "2024-02-11", maquina: "678901" }
];

export function extractData({data}:Prop) {
  const hoje = new Date();
  const mesAtual = new Date().getMonth() + 1; // "+1" porque os meses são indexados a partir de zero
  const anoAtual = hoje.getFullYear();
  if (!Array.isArray(data)) {
    throw new Error("Os dados fornecidos não são um array.");
  }

  const dadosFormatados = data.slice(1).map((par, index) => ({
    date: `${par[0]}/${mesAtual + index}/${anoAtual}`,
    permeated: par[1],
    reject:par[2]
  }));

  return dadosFormatados;
}
export function getItemByIndex(index: number, arry: Props[]): Props | null {
  if (index >= 0 && index < arry.length) {
    console.log(arry[index]);

    return arry[index];
  } else {
    return null; // Retorna null se o índice estiver fora do intervalo
  }
}
type Prop = {
  data?: object | unknown[] | undefined;
};

export const fakeReportApevisa: ApvisaModel  = {
  date:'12/04/2024',
name:"1º passo",
cianoBacteria:"satisfatório",
conductivity:"satisfatório",
endotoxin:"satisfatório",
escherichaColi:"satisfatório",
freeChlorine:"satisfatório",
heterotrophic:"satisfatório",
pH:"satisfatório",
potentiometry:"satisfatório",
seedingInDepth:"satisfatório",
seedingOnSurface:"satisfatório",
totalColiforms:"satisfatório",


}
export const fakeReportApevisa1: ApvisaModel  = {
  date:'12/04/2024',
  name:"2º passo",
  cianoBacteria:"satisfatório",
  conductivity:"satisfatório",
  endotoxin:"satisfatório",
  escherichaColi:"satisfatório",
  freeChlorine:"satisfatório",
  heterotrophic:"satisfatório",
  pH:"satisfatório",
  potentiometry:"satisfatório",
  seedingInDepth:"satisfatório",
  seedingOnSurface:"satisfatório",
  totalColiforms:"satisfatório",
  
  
  }
  export const fakeReportApevisa2: ApvisaModel  = {
    name:"Loop",
    date:'12/02/2024',
    cianoBacteria:"satisfatório",
    conductivity:"satisfatório",
    endotoxin:"satisfatório",
    escherichaColi:"satisfatório",
    freeChlorine:"satisfatório",
    heterotrophic:"satisfatório",
    pH:"satisfatório",
    potentiometry:"satisfatório",
    seedingInDepth:"satisfatório",
    seedingOnSurface:"satisfatório",
    totalColiforms:"satisfatório",
    
    
    }

    export const ArrayApavise:ApvisaModel [] =[
      fakeReportApevisa2,fakeReportApevisa1,fakeReportApevisa
    ] 
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
    registration: "55555555",
  },
};

export const fakeReservoirCleaning: ReservoirCleaning = {
  lastCleaning: "25/02/2024",
  nextCleaning: "2024-03-12",
};
export const FormInitialValues: AnalysisResult = {
  SampleDescription: {
    sampleName: "",
    samplingAddress: "",
    city: "",
    state: "",
    zipCode: "",
    sampleMatrixAndOrigin: "",
    samplingDate: "",
    samplingResponsible: "",
  },
  MicrobiologigoAssays: {
    eColiPresence: "",
    totalColiformsPresence: "",
    heterotrophicBacteriaCount: "",
  },
};
export function calcularPorcentagem(
  data: object | unknown[] | undefined,
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
      return {permeated: "Divisão por zero", reject: "" };
  }

  permeated = ((totalColuna1 - totalColuna2) / totalColuna1 * 100).toFixed(2) ;
  reject = (totalColuna2 / totalColuna1 * 100).toFixed(2) ;

  return { permeated, reject };
}