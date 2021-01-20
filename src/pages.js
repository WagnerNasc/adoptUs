const Database = require('./database/db');
// const savePet = require ('./savePet')

//pega pages na variável
module.exports = {
    index(req, res) {
        const city = req.query.city
        return res.render('index', { city })
    },

    async pet(req, res) {
        const id = req.query.id

        try {
            const db = await Database; // para não precisar fazer uma function e colocar tudo dentro
            const results = await db.all(`SELECT * FROM pets WHERE id = "${id}";`)
            const pet = results[0]

            // voltar a imagem para um array  e não uma String
            pet.images = pet.images.split(',')
            pet.firstImage = pet.images[0]
            
            pet.open_on_weekends == "0" ? pet.open_on_weekends = false : pet.open_on_weekends = true;

            return res.render('pet', { pet }) //as aspas referem-se ao hbs    
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
    },

    async pets(req, res) {
        // colocar o orphanage pelo banco
        try {
            const db = await Database; // para não precisar fazer uma function e colocar tudo dentro
            const pets = await db.all("SELECT * FROM pets")
            return res.render('pets', { pets }) //as aspas referem-se ao hbs    
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
        

    },

    createPetSearch(req, res) {
        return res.render('create-pet-search')
    }
}