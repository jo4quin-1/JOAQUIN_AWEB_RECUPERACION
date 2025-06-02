let num1
let num2

num1 = parseInt(prompt('Escriba un número: '))
num2 = parseInt(prompt('Escribe otro número'))

if(num1<0 || num2<0){
    alert('Lo siento, este programa no admite números negativos')
}
else if(num1==0 || num2==0) {
    alert('Este programa no admite número nulos')
}
else if(num1%num2==0 || num2%num1==0){
    alert(num1 + ' es multiplo de '+ num2)
}


