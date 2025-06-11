const div1 = document.querySelector('.div1')
const div2 = document.querySelector('.div2')
const parrafo = document.querySelector('.parrafo')
const boton = document.querySelector('.boton')


boton.addEventListener('click', function(){
    if(div2.textContent !== div1.textContent){
        const nuevo_elemnto = document.createElement('p')
        nuevo_elemnto.textContent = parrafo.textContent
        div2.appendChild(nuevo_elemnto)
        parrafo.remove()
    }
    
})