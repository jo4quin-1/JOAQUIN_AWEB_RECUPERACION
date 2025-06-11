const boton = document.querySelector('.boton')
const texto = document.querySelector('.texto')
const lista = document.querySelector('.lista')
const lista1 = document.querySelectorAll('lista1')

// boton.addEventListener('click', function(){
//     const nuevo_elemnto = document.createElement('li')
//     nuevo_elemnto.textContent = texto.value
//     const nv = nuevo_elemnto.nextElementSibling
//     nv.insertBefore(nuevo_elemnto, nv)
// })

boton.addEventListener('click', function(){
    const nuevo_elemnto = document.createElement('li')
    nuevo_elemnto.textContent = texto.value
    const segundo = lista.children[1]
    lista.insertBefore(nuevo_elemnto, segundo)
})