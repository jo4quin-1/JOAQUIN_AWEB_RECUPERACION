let cantidad = parseInt(prompt('Escriba la cantidad de números positivos a escribir: '))
let num


while(cantidad<=0){
    cantidad = parseInt(prompt('La cantidad debe ser mayor que 0. Inténtelo de nuevo: '))
}

let positivo = 0
let negativo = 0
let total
while(positivo!=cantidad){
    num = parseFloat(prompt('Esacriba un número'))
    if(num>0 & num!=0){
        positivo++
    }else{
        negativo++
    }
    total = positivo + negativo

}

alert('ha escrito ' + total + ' números, ' + positivo + ' de ellos positivos.')