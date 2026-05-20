````markdown
# README — API CRUD com Express + MySQL

## 📌 O que é esse projeto?

Este projeto é uma API CRUD de funcionários usando:

- **Node.js** → ambiente que executa JavaScript no servidor
- **Express** → framework para criar APIs e servidores
- **MySQL** → banco de dados
- **mysql2** → biblioteca para conectar Node.js ao MySQL
- **CORS** → permite comunicação entre frontend e backend

---

# 📂 Estrutura geral

A API possui operações CRUD:

| Método | Função |
|---|---|
| GET | Buscar funcionários |
| POST | Criar funcionário |
| PUT | Atualizar funcionário |
| DELETE | Remover funcionário |

---

# 📦 Importações

```js
const express = require('express');
```

---

## Explicação

### `const`

Palavra reservada do JavaScript usada para criar variáveis constantes.

Uma variável criada com `const` não pode receber outro valor depois.

---

### `express`

Nome da variável.

Ela irá armazenar o framework Express.

---

### `require()`

Função do Node.js usada para importar módulos.

---

### `'express'`

Nome da biblioteca instalada pelo npm.

Instalação:

```bash
npm install express
```

---

## O que é Express?

Express é um framework do Node.js.

---

## O que é framework?

Framework é uma estrutura pronta que facilita desenvolvimento.

O Express fornece:

- rotas
- servidor HTTP
- middlewares
- respostas JSON
- APIs REST

---

# Importando MySQL

```js
const mysql = require('mysql2/promise');
```

---

## O que é mysql2?

Biblioteca usada para conectar Node.js ao banco MySQL.

---

## O que significa `/promise`?

Ativa suporte a:

- async
- await

Isso permite escrever código assíncrono moderno.

---

# Importando CORS

```js
const cors = require('cors');
```

---

## O que é CORS?

CORS significa:

```txt
Cross-Origin Resource Sharing
```

---

## Problema que resolve

Permite que frontend e backend se comuniquem mesmo estando em portas diferentes.

Exemplo:

Frontend:

```txt
localhost:5173
```

Backend:

```txt
localhost:3000
```

Sem CORS o navegador bloqueia a requisição.

---

# 🚀 Criando a aplicação

```js
const app = express();
```

---

## `app`

Representa toda a aplicação backend.

Tudo será feito através dele:

```js
app.get()
app.post()
app.use()
app.listen()
```

---

## `express()`

Função que cria a aplicação Express.

---

# 🔧 Middlewares

```js
app.use(cors());
```

---

## O que é middleware?

Middleware é uma função executada antes da rota.

Fluxo:

```txt
Request → Middleware → Rota → Response
```

---

## `app.use()`

Método usado para adicionar middlewares globais.

---

## `cors()`

Middleware que libera acesso externo à API.

---

# JSON Middleware

```js
app.use(express.json());
```

---

## O que isso faz?

Converte JSON recebido em objeto JavaScript.

---

## Exemplo

Frontend envia:

```json
{
  "nome": "Carlos"
}
```

O Express transforma isso em:

```js
req.body.nome
```

---

# 🛢 Configuração do banco

```js
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_funcionarios'
};
```

---

# O que é isso?

Um objeto JavaScript.

---

## Objeto

Estrutura chave:valor.

Exemplo:

```js
const pessoa = {
   nome: "João",
   idade: 20
}
```

---

# Explicando cada propriedade

---

## `host`

Endereço do banco de dados.

```txt
localhost
```

significa:

> o banco está na mesma máquina.

---

## `user`

Usuário do MySQL.

---

## `password`

Senha do banco.

---

## `database`

Nome do banco que será utilizado.

---

# 🔗 Pool de conexões

```js
const db = mysql.createPool(dbConfig);
```

---

# O que é pool?

Pool é um conjunto de conexões reutilizáveis.

---

## Sem pool

A cada requisição:

```txt
abre conexão
usa conexão
fecha conexão
```

Mais lento.

---

## Com pool

As conexões ficam prontas para reutilização.

Mais rápido e eficiente.

---

# 📥 Rota GET

```js
app.get('/api/funcionarios', async (req, res) => {
```

---

# Explicando cada parte

---

## `app.get`

Método do Express usado para criar rota GET.

---

## GET

Método HTTP usado para buscar dados.

---

## `'/api/funcionarios'`

Endpoint da API.

---

## Endpoint

URL responsável por executar uma ação no backend.

---

## `async`

Permite usar `await`.

---

## `await`

Espera operações assíncronas terminarem.

Exemplo:

- consulta ao banco
- requisição externa
- leitura de arquivos

---

## `(req, res)`

Parâmetros automáticos do Express.

---

# `req`

Significa:

```txt
request
```

Contém tudo que o cliente enviou.

Exemplo:

- body
- params
- query
- headers

---

# `res`

Significa:

```txt
response
```

Usado para responder ao cliente.

---

# 🔄 Tratamento de erros

```js
try {

} catch(error) {

}
```

---

# `try`

Tenta executar o código.

---

# `catch`

Captura erros.

---

## Exemplo

Se o banco cair:

```txt
ECONNREFUSED
```

o servidor não quebra.

---

# 🛢 SQL SELECT

```sql
SELECT * FROM funcionarios ORDER BY id DESC
```

---

# Explicação

---

## `SELECT`

Seleciona dados.

---

## `*`

Todas as colunas.

---

## `FROM funcionarios`

Tabela funcionarios.

---

## `ORDER BY id DESC`

Ordena do maior ID para o menor.

---

# 📦 Desestruturação

```js
const [rows] = await db.execute(...)
```

---

# O que execute retorna?

```js
[
  rows,
  fields
]
```

---

# `rows`

Dados retornados.

---

# `fields`

Informações das colunas.

---

# `[rows]`

Pega apenas o primeiro item do array.

---

# 📤 Resposta JSON

```js
res.json(rows);
```

---

# O que faz?

Envia dados em JSON.

---

# ✍️ POST

```js
app.post('/api/funcionarios')
```

---

# POST

Método HTTP usado para criar dados.

---

# 📥 Body da requisição

```js
const { nome, funcao, salario } = req.body;
```

---

# Desestruturação

Equivale a:

```js
const nome = req.body.nome;
const funcao = req.body.funcao;
const salario = req.body.salario;
```

---

# ✅ Validação

```js
if (!nome || !funcao || !salario)
```

---

# `!`

Operador NOT.

Verifica:

- undefined
- vazio
- null

---

# `return`

```js
return res.status(400).json(...)
```

Impede que o código continue executando.

---

# 🛢 INSERT

```sql
INSERT INTO funcionarios
```

---

# `?`

Placeholders de segurança.

Evita SQL Injection.

---

# ❌ Errado

```js
`SELECT * FROM users WHERE nome = '${nome}'`
```

---

# ✅ Certo

```js
WHERE nome = ?
```

---

# 🔢 parseFloat

```js
parseFloat(salario)
```

---

# O que faz?

Converte string para número decimal.

---

# Exemplo

```js
"2500.90"
```

vira:

```js
2500.90
```

---

# ✏️ PUT

```js
app.put('/api/funcionarios/:id')
```

---

# PUT

Método HTTP usado para atualizar dados.

---

# `:id`

Parâmetro dinâmico da URL.

---

## Exemplo

```txt
/api/funcionarios/5
```

---

# `req.params.id`

Pega o valor da URL.

---

# 🗑 DELETE

```js
app.delete('/api/funcionarios/:id')
```

---

# DELETE

Método HTTP usado para remover dados.

---

# 🌐 Porta do servidor

```js
const PORT = 3000;
```

---

# Porta

Canal de comunicação da aplicação.

---

# URL final

```txt
http://localhost:3000
```

---

# ▶️ Inicializando servidor

```js
app.listen(PORT, () => {
```

---

# `listen`

Liga o servidor.

---

# `() => {}`

Arrow Function.

Forma moderna de criar funções.

---

# Template String

```js
`http://localhost:${PORT}`
```

---

# `${}`

Insere variável dentro da string.

---

# 🔁 Fluxo completo da API

---

# FRONTEND

Usuário clica:

```txt
Cadastrar funcionário
```

↓

Frontend envia:

```http
POST /api/funcionarios
```

↓

Backend recebe:

```js
req.body
```

↓

Valida os dados

↓

Executa SQL

↓

MySQL salva

↓

Backend responde:

```json
{
  "success": true
}
```

↓

Frontend atualiza a tela.
````
