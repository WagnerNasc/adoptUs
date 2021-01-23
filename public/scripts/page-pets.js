// create map
const map = L.map('mapid').setView([-23.9513003,-46.4624866], 12); // primeiro argumento são as cordenadas e segundo o zoom

// create and add title
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon   
const icon = L.icon({
    iconUrl: "/images/location.svg", // caminho relativo da imagem
    //shadowUrl: "/images/location.svg",
    iconSize: [48,58], // altura e largura do icone
    //shadowSize: [80,96], // altura e largura da sombra
    iconAnchor: [29, 68], //onde o icon vai ficar ancorado
    popupAnchor: [-3, -76], //onde o popup vai ficar ancorado
    
})


function addMarker({id, name, lat, lng}) { // desestruturar pet object
    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
}).setContent(`${name} <a href="/pet?id=${id}"><img src="/images/arrow-white.svg" alt="Seta para saber mais sobre o pet"></a>`)

    // create and add marker
    
    L
    .marker([lat,lng], { icon }) // é passado a variavel icon como parametro que é um objeto mas como tem o mesmo nome não precisa fazer icon: icon. E assim ele aplica imagem ao mapa.
    .addTo(map)
    .bindPopup(popup)
}

const petsSpan = document.querySelectorAll('.pets span')
   // console.log(petsSpan) retorna um NodeList
petsSpan.forEach( span => {
    const pet = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat, 
        lng: span.dataset.lng
    }
    // console.log(pet) retorna o objeto
    addMarker(pet)
})
