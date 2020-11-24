const Database = require('./db.js'); // está pegando o database executado 
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async db => { // tendo só um argumento não precisa de parenteses
    
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-23.9513003",
        lng: "-46.4524866",
        name: "Lar das meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situações de risco e/ou vunerabilidade social",
        whatsapp: "988595768",
        images: [
            "https://images.unsplash.com/photo-1573924436756-128cf1f6387a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1602389569471-5df5bde61968?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h.",
        open_on_weekends: "0"
    })

    // consultar dados na tabela
    // o assync await descarta o then, pq ele fica esperando até passar para o próximo await evitando fazer uma function toda hora que chamá-lo

    const selectedOrphanages = await db.all("SELECT * FROM orphanages;")
    console.log(selectedOrphanages)

    // // consultar somente 1 orphanato, pelo id

    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    // console.log(orphanage)

    // // deletar dado da tabela

    // console.log( await db.run("DELETE FROM orphanages WHERE id = '1'"))
});