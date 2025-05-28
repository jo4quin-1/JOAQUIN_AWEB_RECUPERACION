let valor = parseInt(prompt('Vuantos valores va a introducir? '))

while (isNaN(cantidad) || cantidad <= 0){
    valor = parseInt(prompt('Por favor, introduzca un número entero mayor que cero:'));
}




for(i = 0; i < valor; i++){
    let num = parseInt(prompt('Introduce el número ' + i+1))
    if(num<0){
        contador++
    }
}
alert('ha escrito  ' + contador + ' Números negativos')
