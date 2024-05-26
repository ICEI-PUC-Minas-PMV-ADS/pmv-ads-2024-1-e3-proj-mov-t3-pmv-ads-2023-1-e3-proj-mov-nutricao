// app.js
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require('mysql'); 

const app = express();
const port = 3000;

// Configurações de conexão com o MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@",
  database: "eixo3",
});

// Conectar ao MySQL
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    process.exit(1);
  }
  console.log("Conectado ao banco de dados MySQL");
});

// Middleware para parsear JSON no corpo da requisição
app.use(bodyParser.json());

// Rota POST para inserção de usuários
app.post("/insert2", (req, res) => {
  // Acessa os dados enviados no corpo da requisição
  const newUser = req.body;
  
  const query = 'INSERT INTO usuarios (id_usuario, usuario_login, nome, senha, email, cpf) VALUES (?, ?, ?, ?, ?, ?)';

  // Inserir os dados no banco de dados
  connection.query(query, [newUser.id_usuario, newUser.usuario_login, newUser.nome, newUser.senha, newUser.email, newUser.cpf], (err, results) => {
    if (err) {
      console.error("Erro ao inserir dados:", err);
      res.status(500).send("Erro ao inserir dados");
      return;
    }
    res.status(201).send("Usuário inserido com sucesso!");
  });

  console.log(newUser); // Apenas para teste, você verá os dados no console
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
