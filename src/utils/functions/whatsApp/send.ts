// Importe os módulos necessários
import { Client, ClientOptions } from 'whatsapp-web.js';

// Função para enviar mensagem
export async function sendMessage(numero: string, mensagem: string) {
    // Definir opções do cliente (opcional)
    const options: ClientOptions = {
        // Coloque as opções desejadas aqui, se necessário
    };

    // Inicializar o cliente WhatsApp com as opções
    const client = new Client(options);

    // Aguardar o cliente estar pronto
    client.on('ready', async () => {
        try {
            // Encontrar o chat pelo número de telefone
            const chat = await client.getChatById(numero + '@c.us');

            // Enviar a mensagem
            await chat.sendMessage(mensagem);

            // Desconectar o cliente após enviar a mensagem
            await client.logout(); // Use logout() para desconectar
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
        }
    });

    // Lidar com erros durante a inicialização do cliente
    client.on('auth_failure', (err) => {
        console.error('Erro de autenticação:', err);
    });

    // Conectar o cliente
    client.initialize();
}

// Exemplo de uso

