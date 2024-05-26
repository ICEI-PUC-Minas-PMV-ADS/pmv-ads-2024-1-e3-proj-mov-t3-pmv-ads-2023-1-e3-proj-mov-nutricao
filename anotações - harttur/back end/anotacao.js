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
  password: "",// senha do banco criar arquivo .invem para senha
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

// Rota POST para inserção
app.post("/insert", (req, res) => {
  const newData = req.body;
  const currentDate = new Date();
  
  // Formatar data para o formato MySQL (YYYY-MM-DD HH:MM:SS)
  const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;

  const query = 'INSERT INTO anotacoes (id_usuario, id_cliente, id_anotacao, anotacao, data_anotacao) VALUES (?, ?, ?, ?, ?)';

  // Inserir os dados no banco de dados
  connection.query(query, [newData.id_usuario, newData.id_cliente, newData.id_anotacao, newData.anotacao, formattedDate], (err, results) => {
    if (err) {
      console.error("Erro ao inserir dados:", err);
      res.status(500).send("Erro ao inserir dados");
      return;
    }
    res.status(201).send("Dados inseridos com sucesso!");
  });

  console.log(newData); // Apenas para teste, para ver os dados no console
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
