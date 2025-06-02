let num_par = parseInt(prompt('Escriba un número par: '))
let cont = 0
let cond

while(num_par % 2 != 0){
    num_par = parseInt(prompt(num_par + ' no es un número par. Inténtelo de nuevo: '))
    if(num_par % 2 ==0){
        cont++
    }
}

cond = prompt('¿Quiere escribir otro número par? (S/N): ')
while(cond=='S' || cond=='s'){
    num_par = parseInt(prompt('Escriba otro número par: '))
    if(num_par % 2 == 0){
        cont++
    }
    cond = prompt('¿Quiere escribir otro número par? (S/N): ')
}

if(cont==1){
    alert('Ha escrito ' + cont + ' número par')
}else{
    alert('Ha escrito ' + cont + ' números pares')
}

