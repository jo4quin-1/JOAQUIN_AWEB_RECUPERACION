let segundos

segundos = parseFloat(prompt('Escriba una cantidad de segundos: '))

let minutos = Math.floor(segundos / 60)
let resto = segundos % 60

console.log(segundos + ' segundos son ' + minutos + ' minutos y ' +  resto + ' segundos')
