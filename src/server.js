// importar dependencia
//const { response } = require('express');
const express = require('express');
const path = require('path');
const pages = require('./pages.js');


//iniciando o express
const server = express()


server
    // ele cria todas as rotas, retirar o  do index 
    .use(express.static('public')) 

    // configurar template engine pegando o path da view
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs') // hbs tem que ser instalado

    // rota para a aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)

        // envia resposta usando sendFile usando o objeto path e pegando a sua propriedade join para concatenar os valores e chegar ao dir res.sendFile(path.join(__dirname, 'views' , 'index.html'))
        
        //const name = "Wagner" pode ser acessado pelo HTML
        //const city = req.query.city colocando na URL ele acrescenta no HTML




// ligar servidor
server.listen(5500)