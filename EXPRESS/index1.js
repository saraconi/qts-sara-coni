// Importa o módulo express 
const express = require('express'); 
const app = express(); 
// Define a porta que o servidor irá escutar 
const port = 3000; 
// Rota principal (GET /) 
app.get('/', (req, res) => { 
// Envia uma resposta JSON com a mensagem 
res.json({ mensagem: "Alô mundo" }); // .json() já finaliza a resposta 
}); 
// Inicia o servidor e escuta na porta especificada 
app.listen(3000, () => { 
console.log('Servidor rodando em http://localhost:3000'); 
});