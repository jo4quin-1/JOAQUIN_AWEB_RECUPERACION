//VARIABLES
const producto = document.querySelector('.texto')
const boton = document.querySelector('.boton')
const lista = document.querySelector('ul')
const insertar = document.querySelector('.insertar')
const resaltar = document.querySelector('.resaltar')

// 1.  AÑADIR UN NUEVO PRODUCTO

boton.addEventListener('click', function(){
    if(producto.value !==''){
        //texto
        let elemento = document.createElement('li')//.className = 'elementos'
        elemento.textContent = producto.value + ' '
        //boton de borrar
        let borrar = document.createElement('button')
        borrar.textContent = 'X'
        borrar.addEventListener('click',function(){
            elemento.remove()
            borrar.remove()
            destacar.remove()
    }) 
        //boton de destacar
        let destacar = document.createElement('button')
        destacar.textContent = 'Destacar'
        destacar.addEventListener('click', function(){
            elemento.style.backgroundColor = 'yellow'
            elemento.style.paddingRight = '2rem'
        })
        lista.appendChild(elemento)
        elemento.appendChild(borrar)
        elemento.appendChild(destacar)
        producto.value = ''

    }
    // console.log(elemento)
})

// 2.  INSERTAR UN PRODUCTO ENTRE DOS EXISTENTES
const elementos = document.querySelectorAll('.elementos')


insertar.addEventListener('click', function(){
    if(lista.children.length >= 2){
        let elemento1 = document.createElement('li')
        elemento1.textContent = producto.value
        lista.insertBefore(elemento1, lista.children[1])

        let borrar = document.createElement('button')
        borrar.textContent = 'X'
        borrar.addEventListener('click', function(){
            elemento1.remove()
            borrar.remove()
        })
        
        let destacar = document.createElement('button')
        destacar.textContent = 'Destacar'
        destacar.addEventListener('click', function(){
            elemento1.style.backgroundColor = 'yellow'
            elemento1.style.paddingRight = '2rem'
        })
        elemento1.appendChild(borrar)
        elemento1.appendChild(destacar)
        producto.value = ''
    }

})



// 3.  RESALTAR PRODUCTOS CON forEach

// resaltar.addEventListener('click', function(){
//     let lista = document.querySelectorAll('li')
//     lista.forEach(element => {
//         if(element.textContent.length >= 10){
//             element.classList = 'neg'
//             // console.log(element)
//         }
//     })
// })

resaltar.addEventListener('click', function(){
    let lista = document.querySelectorAll('li')
    lista.forEach((element, i) => {
        if(element.textContent.length - 10 >= 10){
            element.classList.add('neg')
            
        }
        let numerador = (i+1) + '. ' + element.textContent
        element.textContent = numerador 

        // console.log(numerador)
        
        //console.log(parseInt(i) + element.textContent)
        
        // console.log(element.innerHTML)
    })
})
