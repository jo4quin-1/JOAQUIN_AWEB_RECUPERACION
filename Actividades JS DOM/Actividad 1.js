const texto = document.querySelector('.cuadro')
const boton = document.querySelector('.boton')
const parrafo = document.querySelector('.parrafo')


boton.addEventListener('click', function(){
    parrafo.innerHTML = texto.value;
})

