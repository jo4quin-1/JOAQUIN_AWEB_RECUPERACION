let dividendo
let divisor
let cociente
let resto


dividendo = parseFloat(prompt('Escribe el diviendo: '))
divisor = parseFloat(prompt('Escribe el divisor: '))

cociente = Math.floor(dividendo / divisor)
resto = dividendo % divisor

if(resto!=0){
    alert('La división no es exacta. Cociente: ' + cociente + ' Resto: ' + resto)
}

else if(resto==0){
    alert('La división es exacta. Cociente: ' + cociente)
}