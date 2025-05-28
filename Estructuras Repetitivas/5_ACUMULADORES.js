let num1 = parseFloat(prompt('Escriba un número entero positivo: '))

if(num1 < 0){
    alert('¡Le he pedido un número positivo!')
}
else{
    let num2 = parseFloat(prompt('Escriba un número entero mayor que ' + num1 + ': '))
    if(num2<num1){
        alert('le he pedido un número mayor que ' + num1 + ': ')
    }else{
        let suma = num1 + num2
        alert('la suma de ' + num1 + ' + ' + num2 + ' es: ' + suma)
    }
}
