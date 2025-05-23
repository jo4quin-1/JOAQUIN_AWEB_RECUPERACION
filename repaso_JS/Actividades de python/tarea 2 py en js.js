// //Actividad 1: MEDIA_DOS_NUMEROS

// let variable1
// let variable2

// variable1 = parseFloat(prompt('introduce el primer número'));
// variable2 = parseFloat(prompt('introduce el segundo número'));

// let suma = (variable1 + variable2) / 2


// console.log('La media aritmética de ' + variable1 + ' y ' + variable2 + ' es ' + suma)


// //Actividad 2: CALCULO_IMC

// let peso
// let altura

// peso = parseFloat(prompt('¿Cúanto pesa?'))
// altura = parseFloat(prompt('¿Cúanto mide en metros?'))

// let imc = peso / altura**2

// console.log(imc)


// //Actividad 3: CONVERSION_PIES_CM

// let cantidad_pies

// cantidad_pies = parseFloat(prompt('escribe una cantidad de pies: '))

// let conversion = cantidad_pies * 12 * 2.54

// console.log(conversion)


// //Actividad 4: CONVERSION_PIES_PULGADAS_CM

// let pies
// let pulgadas

// pies = parseFloat(prompt('escribe una cantidad de pies'))
// pulgadas = parseFloat(prompt('escribe una cantidad de pulgadas'))

// let conv_p_cm = pies * 12 * 2.54
// let conv_pul_cm = pulgadas * 2.54

// let resultado = conv_p_cm + conv_pul_cm

// console.log('El resultado es: ' + resultado)


// // Actividad 5: CONVERSION_SEG_MIN


// let segundos

// segundos = parseFloat(prompt('Escriba una cantidad de segundos: '))

// let minutos = Math.floor(segundos / 60)
// let resto = segundos % 60

// console.log(segundos + ' segundos son ' + minutos + ' minutos y ' +  resto + ' segundos')


// Actividad 6: CONVERSION_SEG_HORAS

let segundos

segundos = parseFloat(prompt('escribe una cantidad de segundos'))

let horas = Math.floor(segundos / 3600)
let minutos = Math.floor((segundos % 3600) / 60)
let resto = segundos % 60

let resultado

console.log(segundos + ' segundos son ' + horas + ' horas ' + minutos + ' minutos y ' + resto + ' segundos.')