import axios from 'axios';

interface Props {
    title: string | undefined;
    day?: number[];
    data?: number[];
}

export async function fetchData(id: number, title: string): Promise<Props | null> {
    try {
        const response = await axios.post<Props>(`/api/dataGrafic`, {
            id,
            fieldName:title,
        });

        if (response.status === 200) {
            return response.data;
        } else {
            console.error('Erro ao buscar dados:', response.data);
            return null;
        }
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return null;
    }
}
