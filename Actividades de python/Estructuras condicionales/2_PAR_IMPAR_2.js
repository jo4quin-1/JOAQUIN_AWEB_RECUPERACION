let par
let impar

par = parseFloat(prompt('escribe un número par: '))

if(par%2!=0){
    alert('No ha escrito un número par')
}

else if(par%2==0){
    impar = parseFloat(prompt('escribe un número impar'))
    if(impar%2==0){
        alert('no ha escrito un número impar')
    }
    else if(impar%2!=0){
        alert('Gracias por su colaboración')
    }
}