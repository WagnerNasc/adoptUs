const Database = require('./database/db');
// const saveOrphanage = require ('./saveOrphanage')

//pega pages na variável
module.exports = {
    index(req, res) {
        const city = req.query.city
        return res.render('index', { city })
    },

    async orphanage(req, res) {
        const id = req.query.id

        try {
            const db = await Database; // para não precisar fazer uma function e colocar tudo dentro
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}";`)
            const orphanage = results[0]

            // voltar a imagem para um array  e não uma String
            orphanage.images = orphanage.images.split(',')
            orphanage.firstImage = orphanage.images[0]
            
            orphanage.open_on_weekends == "0" ? orphanage.open_on_weekends = false : orphanage.open_on_weekends = true;

            return res.render('orphanage', { orphanage }) //as aspas referem-se ao hbs    
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
    },

    async orphanages(req, res) {
        // colocar o orphanage pelo banco
        try {
            const db = await Database; // para não precisar fazer uma function e colocar tudo dentro
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render('orphanages', { orphanages }) //as aspas referem-se ao hbs    
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
        

    },

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    }
}