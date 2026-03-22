const TelegramBot = require('node-telegram-bot-api');
const http = require('http');

// 🔐 Token do bot
const TOKEN = '5597368634:AAGs_wTNsZe0uJvVCLZx9uMnuhP3saSEPIs';

// 📩 Chat ID
const CHAT_ID = '1278587240';

// Inicializa o bot (somente envio de mensagens)
const bot = new TelegramBot(TOKEN);

// Função para enviar o status
function enviarStatus() {
    bot.sendMessage(CHAT_ID, 'STATUS: ATIVO')
        .then(() => console.log('STATUS enviado com sucesso'))
        .catch(err => console.error('Erro ao enviar STATUS:', err.message));
}

// Envia ao iniciar
enviarStatus();

// Envia a cada 5 minutos (300.000 ms)
setInterval(enviarStatus, 300000);

// Servidor HTTP simples (mantém o processo ativo)
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Servidor ativo\n');
}).listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
