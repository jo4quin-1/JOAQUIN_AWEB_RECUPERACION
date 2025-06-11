const texto = document.querySelector('.texto')
const boton = document.querySelector('.boton')
const lista = document.querySelector('.lista')
let tarea_nueva
let boton_eliminar


boton.addEventListener('click', function(){
    tarea_nueva = document.createElement('li')
    tarea_nueva.textContent = texto.value
    boton_eliminar = document.createElement('button')
    boton_eliminar.innerHTML = 'X'
    //estilo
    boton_eliminar.classList.add('boton_estilo')
    boton_eliminar.classList.add('boton_estilo:hover')

    lista.appendChild(tarea_nueva)
    tarea_nueva.appendChild(boton_eliminar)

    boton_eliminar.addEventListener('click', function(){
        tarea_nueva.remove('li')
    })

})




        