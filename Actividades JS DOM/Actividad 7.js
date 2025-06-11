const texto = document.querySelector('.texto')
const boton = document.querySelector('.boton')
const lista = document.querySelector('ul')
const elemento1 = document.querySelectorAll('.elemento1')



boton.addEventListener('click', function(){
    const parrafo = document.createElement('li')
    parrafo.textContent = texto.value

        elemento1.forEach(elemento =>{
            if(texto.value != ''){
                elemento.parentNode.insertBefore(parrafo.cloneNode(true), elemento)
            }
    })
    
    
})

console.log(lista)