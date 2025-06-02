let segundos

segundos = parseFloat(prompt('escribe una cantidad de segundos'))

let horas = Math.floor(segundos / 3600)
let minutos = Math.floor((segundos % 3600) / 60)
let resto = segundos % 60

let resultado

console.log(segundos + ' segundos son ' + horas + ' horas ' + minutos + ' minutos y ' + resto + ' segundos.')
