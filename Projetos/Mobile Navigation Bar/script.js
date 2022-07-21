let links = document.getElementsByClassName('link')

function removeactive(){
    for(link of links){
        link.classList.remove("active")
    }
}

for(link of links){
    link.onclick = function(){
        removeactive()
        this.classList.add("active")
    }
}