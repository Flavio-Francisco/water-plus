export interface Props {
    title: string;
    day?: number[] ;
    data?: number[] ;
  }
  export const getObjects = (data: Props[] | undefined, title: string) => {
    // Verifica se data é uma matriz e tem pelo menos um elemento
    const objetoDesejado = Array.isArray(data) && data.length > 0
      // Usa o método find se data for uma matriz
      ? data.find(objeto => objeto.title === title)
      // Retorna null se data não for uma matriz ou estiver vazia
      : null;
  
    return objetoDesejado;
  };