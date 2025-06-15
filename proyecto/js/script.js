//VARIABLES
const body = document.querySelector('.body_claro_mitad')
const alternar_vista = document.querySelector('.header__nav__button')
const alternar_color = document.getElementById('btn_modo_oscuro')
const imagen = document.querySelectorAll('.main__section2__article__img')
const boton_izquierda_carrusel = document.getElementById('boton_izquierda')
const boton_derecha_carrusel = document.getElementById('boton_derecha')

//ACCIONES

//modo oscuro
alternar_color.addEventListener('click', function(){
    body.classList.toggle('body_claro_mitad')
    alternar_color.textContent.toggle = 'Modo Claro'
})
alternar_color.addEventListener('click', function(){
    body.classList.toggle('body_oscuro_mitad')
    alternar_color.textContent.toggle = 'Modo Oscuro'
})

//cambio de vista

alternar_vista.addEventListener('click', function(){
    body.classList.toggle('body_claro_ampliado')
})
alternar_vista.addEventListener('click', function(){
    body.classList.toggle('body_oscuro_ampliado')
});


//carrusel de imagenes

let index = 0


function showSlide(){

}

function nextSlide(){

}

function prevSlide(){

}