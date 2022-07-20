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
    let characterIm = document.getElementById('character').style.width = '100%'

}
function jake(){
    let characterImg = document.getElementById('character').src = "images/jake.png"
    let playbtn = document.getElementById('playbtn').src = "images/playjake.png"
    document.documentElement.style.setProperty('--firstcolor', "#05AED3")
    document.documentElement.style.setProperty('--secondcolor', "#FFD12D")
    let name = document.getElementById('name')
    name.innerHTML = 'jake'

    let characterIm = document.getElementById('character').style.width = '100%'
    
}
function marceline(){
    let characterImg = document.getElementById('character').src = "images/marceline2.webp"
    document.documentElement.style.setProperty('--firstcolor', "#FFD12D")
    document.documentElement.style.setProperty('--secondcolor', "#141534")
    let playbtn = document.getElementById('playbtn').src = "images/playmarceline.png"
    let name = document.getElementById('name')
    name.innerHTML = 'marceline'
    name.style.fontSize = '7em'
    let characterIm = document.getElementById('character').style.width = '95%'
    
}
function jujuba(){
    let characterImg = document.getElementById('character').src = "images/Jujuba2.png"
    document.documentElement.style.setProperty('--firstcolor', "#FFD12D")
    document.documentElement.style.setProperty('--secondcolor', "#CE24C7")
    let playbtn = document.getElementById('playbtn').src = "images/playjujuba.png"
    let name = document.getElementById('name')
    name.innerHTML = 'Jujuba'
    let characterIm = document.getElementById('character').style.width = '78%'
    
}

/* function jujuba(){
    let characterImg = document.getElementById('character').src = "images/Jujuba.png"
    let characterIm = document.getElementById('character').style.padding = '50px 80px'
    document.documentElement.style.setProperty('--firstcolor', "#FFD12D")
    document.documentElement.style.setProperty('--secondcolor', "#CE24C7")
    let playbtn = document.getElementById('playbtn').src = "images/playjujuba.png"
    let name = document.getElementById('name')
    name.innerHTML = 'jujuba'
}

 */