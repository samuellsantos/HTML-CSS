
const text = document.getElementById('txt')
const btn = document.getElementById('btn')




btn.addEventListener('click', adicionarAlista)



function adicionarAlista(){
    if(text.value.length == 0){
        alert('Você não adicionou nenhuma task')
    }else{
        const lista = document.getElementById('ulLista')
    
        
        const paragrafo = document.createElement("li")
        const texto = document.createTextNode(`- ${text.value}`);
    
    
        paragrafo.appendChild(texto);
        lista.appendChild(paragrafo);
    
        text.value = ""
        document.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', event => {
              item.style.textDecoration = 'line-through' 

            })
          })

    }
}















