const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
})

/*
sequelize.authenticate().then(function(){
    console.log("Criado com sucesso!");
}).catch(function(erro){
    console.log("Falha ao se conectar:" +erro);
})

*/
//cria a tabela no DB

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.sync({force: true})

// Inserindo dados na tabela

Postagem.create({
    titulo: "UM TITULO QUALQUER",
    conteudo: "dfjdfsdfsjfdskfsdfjs"
})
/* 
Postagem.create({
    titulo: "TITULO 2",
    conteudo: "NODE JS"
})


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Usuario.sync({force: true})
Usuario.create({
    nome: "Keylane",
    sobrenome: "Silva",
    idade: 20,
    email: "keylane@gmail.com"
})

Usuario.create({
    nome: "Sergio",
    sobrenome: "Elvas",
    idade: 45,
    email: "sergio@gmail.com"
})
*/

