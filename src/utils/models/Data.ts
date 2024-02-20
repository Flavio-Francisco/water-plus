import { Props } from "@/components/grafic";

export const dataZeolica: Props = {
  title: "Dados do zeolita",
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
  title: "Dados do Abrandador",
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
  title: "Dados do Carvão",
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

export const Datafull = [dataZeolica, dataAbrandador, dataCarvao];

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
    return "errou"; // Retorna null se o array de dados estiver vazio, ou se o primeiro array não tiver dois elementos
  }
}
