let finnIcon = document.getElementById('finnIcon')

let jakeIcon = document.getElementById('jakeIcon')
let marcelineIcon = document.getElementById('marcelinneIcon')
let jujubaIcon = document.getElementById('jujubaIcon')

finnIcon.addEventListener('click', finn)



function finn(){
    let characterImg = document.getElementById('character').src = "images/finn.png"
    document.documentElement.style.setProperty('--firstcolor', "#FFD12D")
    document.documentElement.style.setProperty('--secondcolor', "#05AED3")
    let playbtn = document.getElementById('playbtn').src = "images/playfinn.png"
    let name = document.getElementById('name')
    name.innerHTML = 'Finn'
    name.style.fontSize = '10em'

}
function jake(){
    let characterImg = document.getElementById('character').src = "images/jake.png"
    let playbtn = document.getElementById('playbtn').src = "images/playjake.png"
    document.documentElement.style.setProperty('--firstcolor', "#05AED3")
    document.documentElement.style.setProperty('--secondcolor', "#FFD12D")
    let name = document.getElementById('name')
    name.innerHTML = 'jake'
    name.style.fontSize = '10em'
    
}
function marceline(){
    let characterImg = document.getElementById('character').src = "images/marceline.png"
    document.documentElement.style.setProperty('--firstcolor', "#FFD12D")
    document.documentElement.style.setProperty('--secondcolor', "#141534")
    let playbtn = document.getElementById('playbtn').src = "images/playmarceline.png"
    let name = document.getElementById('name')
    name.innerHTML = 'marceline'
    name.style.fontSize = '7em'
    
}
function jujuba(){
    let characterImg = document.getElementById('character').src = "images/jujuba.png"
    document.documentElement.style.setProperty('--firstcolor', "#FFD12D")
    document.documentElement.style.setProperty('--secondcolor', "#CE24C7")
    let playbtn = document.getElementById('playbtn').src = "images/playjujuba.png"
    let name = document.getElementById('name')
    name.innerHTML = 'jujuba'
    name.style.fontSize = '7em'
}
