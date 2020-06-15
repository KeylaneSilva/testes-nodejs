var pdf = require("html-pdf");
var ejs = require("ejs");


var nomeUsuario = "Keylane";
var curso = "Node js"; 
var categoria = "tecnologia";


ejs.renderFile("./meuarquivo.ejs", {nome: nomeUsuario, curso: curso, categoria: categoria }, (err, html) => {

    if(err){
        console.log("ERRO!");
    }else{
        pdf.create(html, {}).toFile("./meupdf.pdf", (err, res) => {
            if(err){
                console.log("UM ERRO ACONTECEU :(");
            }else{
                console.log(res);
            }
        });
    }
});


