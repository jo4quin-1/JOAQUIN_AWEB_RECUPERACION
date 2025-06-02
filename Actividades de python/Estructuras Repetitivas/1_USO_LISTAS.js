let lista = [];

function listas (inicio, fin, cont){
    for(i = inicio; i <= fin; i = i + cont){
        lista.push(i)
    }
    console.log(lista)
}

listas(0, 9, 1)
listas(4,10,1)
listas(-6,-1,1)
