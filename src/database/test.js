const Database = require('./db.js'); // está pegando o database executado 
const savePet = require('./savePet.js');


Database.then(async db => { // tendo só um argumento não precisa de parenteses
    
    // inserir dados na tabela
    await savePet(db, {
        name: "TESTE",
        lat: "-23.959189",
        lng: "-46.341220",
        about: "Yorkshire terrier, pequeno porte, cor mel, com coleira.",
        whatsapp: "997455236",
        images: [
            "https://images.unsplash.com/photo-1573924436756-128cf1f6387a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1602389569471-5df5bde61968?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        time_seen: "5h."
    })

    // consultar dados na tabela
    // o async await descarta o then, pq ele fica esperando até passar para o próximo await evitando fazer uma function toda hora que chamá-lo

    const selectedPets = await db.all("SELECT * FROM pets;")
    console.log(selectedPets)

    // // consultar somente 1 pet, pelo id

    // const pet = await db.all('SELECT * FROM pets WHERE id = "1"')
    // console.log(pet)

    // // deletar dado da tabela

    // console.log( await db.run("DELETE FROM pets WHERE id = '2'"))
});