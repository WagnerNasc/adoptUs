// create map
const map = L.map('mapid').setView([-23.9513003,-46.4624866], 16); // primeiro argumento são as cordenadas e segundo o zoom

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg", // caminho relativo da imagem
    iconSize: [58,68], // altura e largura do icone
})

let marker;

// create and add marker
map.on('click', (event) => { /*ao clicar o event retorna lat e long dentro do latlng*/
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // acessar o input hidden para passar a latitude de longitude
    // a lat e long enviadas para URL
    document.querySelector('[name=lat]').value = lat;

    document.querySelector('[name=lng]').value = lng;

    

    // remove icon

    marker && map.removeLayer(marker) // && condicional boleana se existe o marker dentro do map

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


// adicionar foto a

function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    
    //pegar o container para duplicar .new-upload que é o input
    const fieldsContainer =  document.querySelectorAll('.new-upload') // retorna um array a partir de 0

    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true) // retorna um array a partir de 1

    //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return // sempre que a function encontrar um return ela para de executar o restante do código
    }

    // limpar o campo antes de adicionar ao container de imagens
    input.value = '';

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)

}

function deleteField(event) {
    /*console.log(event.currentTarget) quem está disparando o evento*/
    const span = event.currentTarget

    // pega todos os container com a class new-upload para restringir que o primeiro container seja deletado
    const fieldsContainer =  document.querySelectorAll('.new-upload')
    if(fieldsContainer.length <= 1) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o input inteiro que está dentro da new-upload
    span.parentNode.remove(); //remove o pai do span que é o new-upload

}

// vai selecionar o botao sim ou o nao
function toggleSelect(event) {
    //retirar a class .active dos botoes
    document.querySelectorAll('.button-select button')

    .forEach(function(button) { // poderia deixar como function arrow        .forEach(button) => button.classList.remove('active')
        button.classList.remove('active')
    })



    // colocar a class .active nesse botao clicadores
    const button = event.currentTarget /*o botao que estiver clicado*/
    button.classList.add('active')

    // atualizar  o input hidden com o valor selecionados
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value

}
