function savePet(db, pet) {
    return db.run(`
        INSERT INTO pets (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            time_seen
        ) VALUES (
            "${pet.lat}",
            "${pet.lng}",
            "${pet.name}",
            "${pet.about}",
            "${pet.whatsapp}",
            "${pet.images}",
            "${pet.time_seen}"   
        ); 
    `)
}

module.exports = savePet;