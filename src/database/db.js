const Database = require('sqlite-async');

// recebe o banco que foi executado e se ele existir cria table
function execute(db) {
    
    console.log(`Entrei nessa function`) // test
    // caminho terminal para teste // node src/database/db.js 

    // return db.exec(`
    //     CREATE TABLE IF NOT EXISTS pets (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         lat TEXT,
    //         lng TEXT,
    //         name TEXT,
    //         about TEXT,
    //         whatsapp TEXT,
    //         images TEXT,
    //         time_seen TEXT
    //     ); 
    // `)
}

// pegando um arquivo database.sqlite e executa
module.exports = Database.open(__dirname + '/database.sqlite').then(execute) // db