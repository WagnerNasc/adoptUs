// create map
const map = L.map('mapid').setView([-23.9513003,-46.4624866], 16); // primeiro argumento são as cordenadas e segundo o zoom

// create and add title
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon   
const icon = L.icon({
    iconUrl: "/images/map-marker.svg", // caminho relativo da imagem
    iconSize: [58,68], // altura e largura do icone
    iconAnchor: [29, 68], //onde o icon vai ficar ancorado
    popupAnchor: [170, 2], //onde o popup vai ficar ancorado
    
})


function addMarker({id, name, lat, lng}) { // desestruturar orphanage object
    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
}).setContent(`${name} <a href="/orphanage?id=${id}" <img src="/images/arrow-white.svg" alt="Seta para saber dos orfanatos">  </a>`)

    // create and add marker
    L
    .marker([lat,lng], { icon }) // é passado a variavel icon como parametro que é um objeto mas como tem o mesmo nome não precisa fazer icon: icon. E assim ele aplica imagem ao mapa.
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
   // console.log(orphanagesSpan) retorna um NodeList
orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat, 
        lng: span.dataset.lng
    }
    // console.log(orphanage) retorna o objeto
    addMarker(orphanage)
})