# Passo a Passo para Rodar o Projeto CRUD MySQL

## 📋 Pré-requisitos (Instale se necessário)
1. **XAMPP** - [Download](https://www.apachefriends.org/pt/index.html)
2. **Node.js** - [Download](https://nodejs.org/pt-br)

## 🚀 PASSOS DETALHADOS

### 1. Inicie XAMPP
```
Painel XAMPP → Start Apache | Start MySQL
```
✅ **Verifique:** http://localhost (dashboard) | http://localhost/phpmyadmin

### 2. Crie o Banco no phpMyAdmin
```
http://localhost/phpmyadmin → Nova → Nome: crud_funcionarios → Criar
```
**SQL tab → Cole e Execute:**
```sql
CREATE DATABASE crud_funcionarios;
USE crud_funcionarios;

CREATE TABLE funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    funcao VARCHAR(100) NOT NULL,
    salario DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);
```

### 3. Libere PowerShell (Uma vez só)
**Terminal PowerShell:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 4. Backend Node.js
**Abra terminal na pasta projeto:**
```bash
cd backend
npm init -y
npm install express mysql2 cors
node server.js
```
✅ **Verifique:** http://localhost:3000/api/funcionarios → [] (vazio OK)

### 5. Frontend
```
Acesse: http://localhost/CRUD-MySQL/index.html
```
**Teste:**
- Clique "Incluir" → Preencha → Salvar → Tabela atualiza ✅
- Editar/Excluir → Persiste no MySQL ✅

## 🔧 Problemas Comuns
| Erro | Solução |
|------|---------|
| npm não funciona | Fix PowerShell (passo 3) |
| fetch erro CORS | Backend rodando? |
| MySQL connection | User=root, senha=vazia |
| 404 index.html | Copiado para htdocs? |

## 📁 Estrutura
```
htdocs/CRUD-MySQL/
├── index.html (UI)
├── script.js (API)
├── backend/server.js
├── README.md ← Você está aqui
└── proposta-integracao-mysql.md (diagramas)
```

**Tempo total: 10min. Projeto full-stack rodando!** 🎊

**Desenvolvido por BLACKBOXAI**

