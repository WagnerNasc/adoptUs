const Database = require('./database/db');
const savePet = require ('./database/savePet');

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
    },

    async savePet(req, res) {
        const fields = req.body

        //validação de preenchimento de campos
        // o object transformou o valor de fields em um array
        if(Object.values(fields).includes('')) { // ver se inclui algo vazio
            return res.send('Todos os campos devem ser preeenchidos!')
        } 
        
        // salvar o pet 
        try {
            const db = await Database
            await savePet(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                time_seen: fields.time_seen
            })

            //redirecionar para página PETS
            return res.redirect('/pets')
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
    }
}