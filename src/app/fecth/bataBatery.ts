import axios from 'axios';

interface Props {
  title: string | undefined;
  day: number[] | undefined;
  data: number[] | undefined;
}


export async function fetchWaterParameters(id: number, name: string): Promise<Props> {
     console.log(name);
     
  try {
    const response = await axios.post(`/api/dataBatery?id=${id}`, { name });
    console.log(response.data);
    
    // Verifica se a resposta tem dados
    if (response.data ) {
      return response.data; // Retorna os dados formatados
    } else {
      throw new Error('Dados não encontrados');
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error; // Lança o erro para que o chamador possa tratá-lo
  }
}
