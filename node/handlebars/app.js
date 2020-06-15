const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

//Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    // Conexao com o banco e dados Mysql
    const sequelize = new Sequelize('test', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
    })

    // Rotas 
    app.get("/cad", function(req, res){
        res.render('formulario')
    })

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
});
// Localhost: porta