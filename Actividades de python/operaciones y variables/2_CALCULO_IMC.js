let peso
let altura

peso = parseFloat(prompt('¿Cúanto pesa?'))
altura = parseFloat(prompt('¿Cúanto mide en metros?'))

let imc = peso / altura**2

console.log(imc)