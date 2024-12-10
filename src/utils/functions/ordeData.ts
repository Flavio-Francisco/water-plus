
interface Dados {
  day: number[];
  data: number[];
  month: number;
  produtic: string;
  reject: string;
  AnnualAverageProdutic: number;
  AnnualAverageReject: number;
}

export function ordeData(dados: Dados): Dados {
  const { day, data } = dados;

  // Criar um array de índices ordenados
  const indicesOrdenados = day.map((_, index) => index);
  indicesOrdenados.sort((a, b) => day[a] - day[b]);

  // Reorganizar o array day
  const dayOrdenado = indicesOrdenados.map(index => day[index]);

  // Reorganizar o array data com base no novo order de day
  const dataOrdenado = indicesOrdenados.map(index => data[index]);

  // Retornar os dados ordenados
  return {
    ...dados,
    day: dayOrdenado,
    data: dataOrdenado
  };
}
export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}