let scale = 1; // Valeur initiale de zoom (1 = pas de zoom)

function zoomIn() {
    scale += 0.1; // Augmente le zoom de 10%
    document.body.style.transform = `scale(${scale})`; // Applique le zoom
}

function zoomOut() {
    if (scale > 0.2) { // Empêche de trop dézoomer
        scale -= 0.1; // Réduit le zoom de 10%
        document.body.style.transform = `scale(${scale})`; // Applique le dézoom
    }
}
console.log("popo")

let kata =document.querySelector('#kata')
let monSite =document.querySelector('#mon-site')

kata.addEventListener("click",function(){
    window.location.href = "https://katastationmeteo.vercel.app/"
    console.log('rere')}
)

monSite.addEventListener("click",function(){
    window.location.href = "http://renaud.delorme.free.fr/"
    console.log('rere')}
)