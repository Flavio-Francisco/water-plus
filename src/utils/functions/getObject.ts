export interface Props {
    title: string;
    day?: number[] ;
    data?: number[] ;
  }
const getObjects = (dados: Props[], title: string) => {
    const objetoDesejado = dados?.find(objeto => objeto.title === title);

    return objetoDesejado;
};

export default getObjects;
