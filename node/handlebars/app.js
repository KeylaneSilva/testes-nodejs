const express = require("express"); // n funcionalidades dentro do nodejs
const app = express();
const handlebars = require('express-handlebars'); // otimização de templates
const bodyParser = require('body-parser');
const Post = require('./models/Post');


//Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    //Public
    //app.use(express.static(path.join(__dirname, "public")))


// Rotas

    app.get("/", function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
    })

    app.get("/cad", function(req, res){
        res.render('formulario')
    })

    app.post("/add", function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: " + errp)
        })
        //res.send("TITULO: " + req.body.titulo + "<br>CONTEUDO: " + req.body.conteudo)
    })

    app.get('/deletar/:id', function(req,res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.redirect('/')
            //res.send("Postagem deletada com sucesso!")
        }).catch(function(erro){
            res.send("Essa postagem não existe!")
        })
    })

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
});
// Localhost: porta