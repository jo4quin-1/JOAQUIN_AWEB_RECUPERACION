const boton = document.querySelector('.boton')
let lista = document.querySelector('.lista')
let siguiente
let boton_eliminar


boton.addEventListener('click', function(){
    siguiente = document.createElement('li')
    siguiente.textContent = 'nuevo elemento'
    boton_eliminar = document.createElement('button')
    boton_eliminar.innerHTML = 'X'


    lista.appendChild(siguiente, boton_eliminar)
    
})