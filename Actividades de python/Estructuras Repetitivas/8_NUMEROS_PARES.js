let num_par
let cond
let cont = 0


num_par = parseInt(prompt('Escriba un número par: '))
cond = prompt('¿Quieres escribir otro número par? (S/N): ')

while(cond=='S' || cond=='s'){
    num_par = parseInt(prompt('Escriba un número par: '))
    if(num_par%2==0){
        cont++
    }
    cond = prompt('¿Quieres escribir otro número par? (S/N): ')
}
if(cont == 1){
    alert('Ha escrito ' + cont + ' número par')
}

else{
    alert('Ha escrito ' + cont + ' números pares')
}
