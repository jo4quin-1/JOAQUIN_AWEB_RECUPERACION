num1 = parseInt(prompt('Introduce un número entero : '))
num2 = parseInt(prompt('Introduce otro número entero : '))

let menor = Math.min(num1, num2);
let mayor = Math.max(num1, num2);

for(let i = menor; i <= mayor; i++){
    console.log(i)
}