// Importa o módulo Express 
const express = require('express'); 
const app = express(); 
// Middleware para interpretar dados enviados por formulários (POST) 
app.use(express.urlencoded({ extended: true })); 
// Lista inicial de tarefas 
let tarefas = [ 
{ tarefa: "compilar" }, 
{ tarefa: "testar" } 
]; 
 
// Função que retorna a página HTML como string 
const getPagina = () => { 
  let conteudo = "<html><body>"; 
   
  // Formulário para adicionar nova tarefa 
  conteudo += "<form method='post'>"; 
  conteudo += "<input type='text' name='tarefa' placeholder='Tarefa'>"; 
  conteudo += "<input type='submit' value='Adicionar'>"; 
  conteudo += "</form>"; 
 
  // Lista de tarefas 
  conteudo += "<ul>"; 
  for (let t of tarefas) { 
    conteudo += `<li>${t.tarefa}</li>`; 
  } 
  conteudo += "</ul>"; 
 
  conteudo += "</body></html>"; 
  return conteudo; 
}; 
 
// Rota GET para exibir a página 
app.get(['/', '/web/tarefas'], (req, res) => { 
  res.status(200) 
     .contentType('text/html') 
     .send(getPagina()); 
}); 
 
// Rota POST para adicionar nova tarefa 
app.post(['/', '/web/tarefas'], (req, res) => { 
  // Adiciona a nova tarefa à lista, se não estiver vazia 
  if (req.body.tarefa && req.body.tarefa.trim() !== "") { 
    tarefas.push({ tarefa: req.body.tarefa.trim() }); 
  } 
 
  // Reexibe a página com a nova tarefa incluída 
  res.status(200) 
     .contentType('text/html') 
     .send(getPagina()); 
}); 
 
// Inicia o servidor na porta 3000 
app.listen(3000, () => { 
  console.log('Servidor rodando em http://localhost:3000'); 
}); 