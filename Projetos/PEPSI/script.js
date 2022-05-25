const pepsi = document.getElementById('pepsi')
const bg = document.getElementById('bg')
const pepsiBlue = document.getElementById('pepsiBlue')
const pepsiWhite = document.getElementById('pepsiWhite')
const pepsiBlack = document.getElementById('pepsiBlack')

pepsiBlue.onclick = function(){
    pepsi.src = "images/pepsi001.png"
    bg.style.backgroundColor = '#0261BF'
}
pepsiWhite.onclick = function(){
    pepsi.src = "images/pepsi002.png"
    bg.style.backgroundColor = '#E60C2D'
}
pepsiBlack.onclick = function(){
    pepsi.src = "images/pepsi003.png"
    bg.style.backgroundColor = '#1F1E1F'
}
