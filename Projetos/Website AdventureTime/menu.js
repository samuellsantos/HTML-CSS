let menu = document.getElementById('menu')
let hideMenu = document.getElementById('hideMenu')
let closeMenu = document.getElementById('close')

menu.addEventListener('click', ()=>{
    hideMenu.style.top = "50px"
    menu.style.display = 'none'
    closeMenu.style.display = 'block'
})

function closeMENU(){
    hideMenu.style.top = '-400px'
    menu.style.display = 'block'
    closeMenu.style.display = 'none'
}