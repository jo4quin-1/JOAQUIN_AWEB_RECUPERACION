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