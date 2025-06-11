const imagen = document.querySelector('.imagen')
const boton = document.querySelector('.boton')
const boton2 = document.querySelector('.boton2')



boton.addEventListener('click', function(){
    imagen.setAttribute('src', '/img/emoji2.jpg')
})

boton2.addEventListener('click', function(){
    imagen.setAttribute('src', '/img/emoji1.jpg')
})