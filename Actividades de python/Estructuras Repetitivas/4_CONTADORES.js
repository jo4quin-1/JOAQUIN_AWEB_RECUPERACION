let valor = parseInt(prompt('Vuantos valores va a introducir? '))

if(valor<0){
    alert('¡imposible!')
}
else if


for(i = 0; i < valor; i++){
    let num = parseInt(prompt('Introduce el número ' + i+1))
    if(num<0){
        contador++
    }
}
alert('ha escrito  ' + contador + ' Números negativos')
