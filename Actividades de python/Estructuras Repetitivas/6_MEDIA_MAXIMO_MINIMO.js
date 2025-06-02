const cantidad = parseInt(prompt('¿Cúantos números va a introducir? '))
let contador = 0
let lista = []


if(cantidad < 0){
    alert('imposible')
}

while(contador < cantidad){
    let i= 0
    let num  = parseInt(prompt('Escriba el número: ' + (i = i + 1)))
    contador++
    lista.push(num)
};
for(let j = 0; j = contador; j++){
    if(j < lista[j]){
        console.log('el numero más pequeño de los introducidos es: ' + j)
    }
}


alert(lista)
alert(contador)