import React from 'react';
import { atom, useAtom } from 'jotai';
import axios from 'axios';
import { WaterTreatmentParameters } from '@/utils/models/WaterParametersModel';
import { WaterTreatmentParametersSchema } from '@/utils/validation/WaterParamentersValidation';

export const waterTreatmentParametersAtom = atom<WaterTreatmentParameters | null>(null);

// Função para buscar e atualizar os parâmetros de tratamento de água a partir de uma API
export const fetchWaterTreatmentParameters = async () => {
  try {
    const response = await axios.get<WaterTreatmentParameters>('URL_DA_SUA_API_AQUI');
    WaterTreatmentParametersSchema.parse(response.data);
    return response.data; // Retorna os dados obtidos da API
  } catch (error) {
    console.error('Erro ao buscar os parâmetros de tratamento de água:', error);
    throw error; // Rejeita a promessa para que a chamada do componente possa lidar com o erro
  }
};

// Componente de exemplo usando useAtom para acessar e atualizar o átomo
const ExampleComponent = () => {
  const [, setWaterParameters] = useAtom(waterTreatmentParametersAtom); // Desestrutura o array retornado pelo useAtom para obter a função de atualização

  const handleClick = async () => {
    try {
      const newParameters = await fetchWaterTreatmentParameters(); // Chame a função para buscar os parâmetros
      setWaterParameters(newParameters); // Atualize o átomo com os novos parâmetros
    } catch (error) {
      // Lida com o erro, se necessário
    }
  };

  return (
    <>
      <button onClick={handleClick}>Atualizar Parâmetros de Tratamento de Água</button>
    </>
  );
};
export default ExampleComponent;