import { Props } from "@/components/grafic";
import { Credentials, ReportModel, ReservoirCleaning } from "../models/report";
import { AnalysisResult } from "@/utils/models/analysis";

// Alimwntação

export const dataZeolica: Props = {
  title: "Pressão do zeolita",
  subtitle:
    "Quando a pressão for menor que 20%, da pressão inicial, fazer a troca do meio filtante.",
  data: [
    ["Dias", "zeolita"],
    [1, 35],
    [2, 30],
    [3, 25],
    [4, 11],
    [5, 110],
    [6, 18],
    [7, 17],
    [8, 12],
    [9, 16],
    [10, 12],
    [11, 25],
    [12, 46],
    [13, 64],
    [14, 74],
    [15, 14],
    [16, 140],
  ],
};

export const dataAbrandador: Props = {
  title: "Pressão do Abrandador",
  subtitle:
    "Quando a pressão for menor que 20%, da pressão inicial, fazer a troca do meio filtante.",
  data: [
    ["Dias", "Abrandador"],
    [1, 35],
    [2, 30],
    [3, 25],
    [4, 11],
    [5, 14],
    [6, 52],
    [7, 17],
    [8, 25],
    [9, 47],
    [10, 140],
    [11, 135],
    [12, 130],
    [13, 138],
    [14, 129],
    [15, 121],
    [16, 110],
  ],
};

export const dataCarvao: Props = {
  title: "Pressão do Carvão",
  subtitle:
    "Quando a pressão for menor que 20%, da pressão inicial, fazer a troca do meio filtante.",
  data: [
    ["Dias", "Carvão"],
    [1, 35],
    [2, 30],
    [3, 25],
    [4, 11],
    [5, 110],
    [6, 18],
    [7, 17],
    [8, 12],
    [9, 16],
    [10, 12],
    [11, 25],
    [12, 46],
    [13, 64],
    [14, 74],
    [15, 14],
    [16, 140],
  ],
};
// pré tratamento
export const dataCloroLivre: Props = {
  title: "Cloro Livre",
  subtitle: "valor maximo 2.5 ppm.",
  data: [
    ["Dias", "Cloro Livre"],
    [1, 2],
    [2, 2.5],
    [3, 1.5],
    [4, 1],
    [5, 1],
    [6, 2],
    [7, 2.5],
    [8, 2],
    [9, 2],
    [10, 2],
    [11, 2.5],
    [12, 1],
    [13, 2],
    [14, 1.4],
    [15, 1.5],
    [16, 1.4],
  ],
};
export const dataCloroTotal: Props = {
  title: "Cloro Total",
  subtitle: "valor maximo 2.5 ppm.",
  data: [
    ["Dias", "Cloro Total"],
    [1, 2],
    [2, 2.5],
    [3, 1.5],
    [4, 1],
    [5, 1],
    [6, 2],
    [7, 2.5],
    [8, 2],
    [9, 2],
    [10, 2],
    [11, 2.5],
    [12, 1],
    [13, 2],
    [14, 1.4],
    [15, 1.5],
    [16, 1.4],
  ],
};
export const dataPH: Props = {
  title: "Cloro PH",
  subtitle: "valor maximo 2.5 ppm.",
  data: [
    ["Dias", "PH"],
    [1, 2],
    [2, 2.5],
    [3, 1.5],
    [4, 1],
    [5, 1],
    [6, 2],
    [7, 2.5],
    [8, 2],
    [9, 2],
    [10, 2],
    [11, 2.5],
    [12, 1],
    [13, 2],
    [14, 1.4],
    [15, 1.5],
    [16, 1.4],
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
): string {
  if (!data || !data || !Array.isArray(data)) {
    return "Dados não encontrados";
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
      return "Estrutura de dados inválida";
    }
  }

  if (totalColuna1 === 0) {
    return "Divisão por zero";
  }

  const porcentagem = (totalColuna2 / totalColuna1) * 100;
  return porcentagem.toFixed(2) + "%";
}
