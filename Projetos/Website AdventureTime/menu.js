let menu = document.getElementById('menu')
let hideMenu = document.getElementById('hideMenu')
let closeMenu = document.getElementById('close')

menu.addEventListener('click', ()=>{
    hideMenu.style.right = "50px"
    menu.style.display = 'none'
    closeMenu.style.display = 'block'
})

function closeMENU(){
    hideMenu.style.right = '-200px'
    menu.style.display = 'block'
    closeMenu.style.display = 'none'
}