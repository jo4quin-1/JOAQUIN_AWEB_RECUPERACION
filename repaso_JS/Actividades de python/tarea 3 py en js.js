// Actividad 1: PAR_IMPAR_1

// let par
// let impar

// par = parseFloat(prompt('escribe un número par: '))
// impar = parseFloat(prompt('escribe un número impar: '))

// if(par%2==0 & impar%2!=0){
//     alert('Gracias por su colabroración')
// }

// else if(par%2==0 & impar%2==0 || par%2!=0 &  impar%2!=0){
//     alert('Uno o más de los dos valores que ha escrito son incorrectos')
// }

// else if(par%2!=0 & impar%2==0){
//     alert('Uno de los dos valores que ha escrito son incorrectos')
// }


// Actividad 2: PAR_IMPAR_2

// let par
// let impar

// par = parseFloat(prompt('escribe un número par: '))

// if(par%2!=0){
//     alert('No ha escrito un número par')
// }

// else if(par%2==0){
//     impar = parseFloat(prompt('escribe un número impar'))
//     if(impar%2==0){
//         alert('no ha escrito un número impar')
//     }
//     else if(impar%2!=0){
//         alert('Gracias por su colaboración')
//     }
// }


// Actividad 3: DIVISOR_NUMEROS

// let dividendo
// let divisor
// let cociente
// let resto


// dividendo = parseFloat(prompt('Escribe el diviendo: '))
// divisor = parseFloat(prompt('Escribe el divisor: '))

// cociente = Math.floor(dividendo / divisor)
// resto = dividendo % divisor

// if(resto!=0){
//     alert('La división no es exacta. Cociente: ' + cociente + ' Resto: ' + resto)
// }

// else if(resto==0){
//     alert('La división es exacta. Cociente: ' + cociente)
// }


// Actividad 4: DIVISION_CERO

// let dividendo
// let divisor
// let cociente
// let resto


// dividendo = parseFloat(prompt('Escribe el diviendo: '))
// divisor = parseFloat(prompt('Escribe el divisor: '))

// cociente = Math.floor(dividendo / divisor)
// resto = dividendo % divisor

// if(divisor==0){
//     alert('no se puede dividir por 0')
// }

// else if(resto!=0){
//     alert('La división no es exacta. Cociente: ' + cociente + ' Resto: ' + resto)
// }

// else if(resto==0){
//     alert('La división es exacta. Cociente: ' + cociente)
// }


// Actividad 5: COMPARADOR_NUMEROS

let num1
let num2
let num3


num1 = parseFloat(prompt('Escriba un número: '))
num2 = parseFloat(prompt('Escriba otro número: '))
num3 = parseFloat(prompt('Escriba un número más: '))

if(num1==num2 & num1==num3 & num2==num3){
    alert('ha escrito tres veces el mismo número')
}

else if((num1==num2 & num1==num3 & num2!=num3) || (num1!=num2 & num1==num3 & num2==num3) || (num1==num2 & num1!=num2 & num2==num3)){
    alert('ha escrito uno de los tres números dos veces')
}

else if(num1!=num2 || num1!=num3 || num2!=num3){
    alert('Los tres números son diferentes')
}