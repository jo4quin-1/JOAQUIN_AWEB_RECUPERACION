let par
let impar

par = parseFloat(prompt('escribe un número par: '))
impar = parseFloat(prompt('escribe un número impar: '))

if(par%2==0 & impar%2!=0){
    alert('Gracias por su colabroración')
}
else if(par%2==0 & impar%2==0 || par%2!=0 &  impar%2!=0){
    alert('Uno o más de los dos valores que ha escrito son incorrectos')
}
else{
    alert('Uno de los dos valores que ha escrito son incorrectos')
}