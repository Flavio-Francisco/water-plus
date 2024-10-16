import { ParametersDB } from "@/utils/models/WaterParametersModel";
import axios from "axios";

// Função para buscar os dados da rota via axios
export async function fetchMonthYearData(systemId: number): Promise<string[]> {
    try {
        // Faz a requisição GET para a rota, passando o ID do sistema
        const response = await axios.get(`/api/dateEletrograma?id=${systemId}`);

        // Verifica se a resposta foi bem-sucedida
        if (response.status === 200) {
            // Retorna os dados da resposta
            return response.data; // A resposta já deve conter o array de meses e anos únicos
        } else {
            throw new Error("Erro ao buscar os dados.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        throw new Error("Falha ao buscar os dados.");
    }
}

// Função para buscar dados filtrados por mês e ano via POST
export async function fetchDataByMonthAndYear(systemId: number, month: string) {
    try {
        // Faz a requisição POST para a rota, passando o ID do sistema e o mês/ano no corpo
        const response = await axios.post(`/api/dateEletrograma?id=${systemId}`, {
            month: month // Exemplo de uso: "outubro 2024"
        });

        // Verifica se a resposta foi bem-sucedida
        if (response.status === 200) {
         const data:ParametersDB[] = response.data
            return data;
        } else {
            throw new Error("Erro ao buscar os dados.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        throw new Error("Falha ao buscar os dados.");
    }
}