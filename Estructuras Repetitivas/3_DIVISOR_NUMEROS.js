let num = parseInt(prompt('Escriba un número mayor que cero: '));
let divisor


while(num <= 0){
    alert('¡Le he pedido un numero entero mayor que 0!')
    num = parseInt(prompt('Escriba un número mayor que cero: '));
};

console.log('los divisores de ' + num + ' son: ')
for(i = 0; i < num; i++){
    if(num % i ==0){
        console.log(i)
    }
}