dividendo = parseFloat(prompt('Escribe el diviendo: '))
divisor = parseFloat(prompt('Escribe el divisor: '))

cociente = Math.floor(dividendo / divisor)
resto = dividendo % divisor

if(divisor==0){
    alert('no se puede dividir por 0')
}

else if(resto!=0){
    alert('La división no es exacta. Cociente: ' + cociente + ' Resto: ' + resto)
}

else if(resto==0){
    alert('La división es exacta. Cociente: ' + cociente)
}