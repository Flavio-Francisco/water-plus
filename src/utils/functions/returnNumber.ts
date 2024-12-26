


export default function returnNumber(monthName: string): number | null {
    // Normaliza o nome do mês (removendo espaços extras e convertendo para minúsculas)
    const cleanedMonthName = monthName.trim().toLowerCase();

    // Retorna o número do mês com base no switch case
    switch (cleanedMonthName) {
        case "janeiro":
            return 1;
        case "fevereiro":
            return 2;
        case "março":
            return 3;
        case "abril":
            return 4;
        case "maio":
            return 5;
        case "junho":
            return 6;
        case "julho":
            return 7;
        case "agosto":
            return 8;
        case "setembro":
            return 9;
        case "outubro":
            return 10;
        case "novembro":
            return 11;
        case "dezembro":
            return 12;
        default:
            return null; // Retorna null se o nome do mês for inválido
    }
}

export function returnPosNumber(monthName: string): number | null {
    // Normaliza o nome do mês (removendo espaços extras e convertendo para minúsculas)
    const cleanedMonthName = monthName.trim().toLowerCase();

    // Retorna o número do mês com base no switch case
    switch (cleanedMonthName) {
        case "janeiro":
            return 2;
        case "fevereiro":
            return 3;
        case "março":
            return 4;
        case "abril":
            return 5;
        case "maio":
            return 6;
        case "junho":
            return 7;
        case "julho":
            return 8;
        case "agosto":
            return 9;
        case "setembro":
            return 10;
        case "outubro":
            return 11;
        case "novembro":
            return 12;
        case "dezembro":
            return 1;
        default:
            return null; // Retorna null se o nome do mês for inválido
    }
}

export function  getYear(monthNumber: number): string {
    const currentYear = new Date().getFullYear();

    // Verifica se o número do mês é 12
    if (monthNumber === 12) {
        return (currentYear + 1).toString(); // Retorna o próximo ano como string
    }

    return currentYear.toString(); // Retorna o ano atual como string
}
