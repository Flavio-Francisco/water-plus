import { Props } from "@/components/grafic";
import { ReportModel } from "../models/FakeModels";
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
};
