let num_list = parseInt(prompt('Cuantas listas quiere escribir? '))
let lista
let cant_pal


function contador(){
    lista = []
    for(i = 0; i < num_list; i++){
        cant_pal = parseInt(prompt('¿Cúantas palabras tiene la lista ' + (i+1) + '?'))
        for(j = 0; j < cant_pal; j++){
            palabra = prompt('Escriba la palabra ' + (j+1) + ' :')
            lista.push(palabra)
        }
    }
    return lista
}