// retirar zoom e move

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-23.9513003,-46.4624866], 16); // primeiro argumento são as cordenadas e segundo o zoom

// create and add title
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/location.svg", // caminho relativo da imagem
    iconSize: [58,68], // altura e largura do icone
    iconAnchor: [29, 68], //onde o icon vai ficar ancorado
    popupAnchor: [170, 2], //onde o popup vai ficar ancorado
    
})


// create and add marker
L
.marker([-23.9513003,-46.4624866], { icon }) // é passado a variavel icon como parametro que é um objeto mas como tem o mesmo nome não precisa fazer icon: icon. E assim ele aplica imagem ao mapa.
.addTo(map)

/*image gallery*/

function selectImage(event) {
    const button = event.currentTarget /*está recebendo a ação do botão*/

    //console.log(button.children) retorna um HTMLcolection

    // remover todas as classes .active

    const buttons = document.querySelectorAll(".images button") //pega todos os botões da classe images retornando um nodelist

    buttons.forEach((button) => { /*FAZENDO COM ARROW FUNCTION*/
        button.classList.remove("active")
    })

    /* SEM ARROW FUNCTION
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
         button.classList.remove('active')
    }
    */

    // selecionar a image clicada

    const image = button.children[0] /* pega o filho do button que é a img*/
    const imageContainer = document.querySelector(".pet-details > img") /*pega a primeira imagem e adiciona a imagem maior*/

    
    // atualizar o container de imagem
    imageContainer.src = image.src

    //adicionar a classe .active para o botão clicado

    button.classList.add('active')

}

