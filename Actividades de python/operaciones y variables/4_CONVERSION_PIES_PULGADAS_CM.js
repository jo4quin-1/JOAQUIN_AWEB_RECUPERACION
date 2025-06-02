let pies
let pulgadas

pies = parseFloat(prompt('escribe una cantidad de pies'))
pulgadas = parseFloat(prompt('escribe una cantidad de pulgadas'))

let conv_p_cm = pies * 12 * 2.54
let conv_pul_cm = pulgadas * 2.54

let resultado = conv_p_cm + conv_pul_cm

console.log('El resultado es: ' + resultado)