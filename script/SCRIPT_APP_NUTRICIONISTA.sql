create database eixo3;
-- Tabela USUARIOS - nutricionista
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    usuario_login VARCHAR(50),
    nome VARCHAR(100),
    senha VARCHAR(12),
    email VARCHAR(100),
    cpf VARCHAR(11)
);

-- Tabela CLIENTES
CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(500),
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- Tabela PLANOS
CREATE TABLE planos (
    id_plano INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_cliente INT,
    data_plano DATE,
    dados_plano VARCHAR(10000),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

-- Tabela ANOTACOES
CREATE TABLE anotacoes (
    id_usuario INT,
    id_cliente INT,
    id_anotacao INT AUTO_INCREMENT PRIMARY KEY,
    anotacao TEXT,
    data_anotacao DATETIME,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);