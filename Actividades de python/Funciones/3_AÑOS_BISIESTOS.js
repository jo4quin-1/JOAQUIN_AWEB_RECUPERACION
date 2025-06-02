let año_inicial = parseInt(prompt('introduce un año: '))
let año_final = parseInt(prompt('introduce un año posterior a ' + año_inicial +' : '))
let cant_años



while(año_final < año_inicial){
    año_final = parseInt(prompt(año_final + ' no es un año mayor que ' + año_inicial + ' Inténtelo de nuevo: '))   
}

cant_años = año_final-año_inicial

function es_bisiesto(año_inicial, año_final){
    let cant_años_b = 0
    for(i = año_inicial; i = año_final; i++){
        if((i % 4 == 0 && i % 100 != 100) && (i % 100 == 0 && i % 400 == 0)){
            cant_años_b++
        }
    }
    resultado = alert('De ' + año_inicial + ' a ' + año_final + ' hay ' + cant_años + ' años, ' + cant_años_b + ' de ellos son bisiestos.')
    return resultado
}

// console.log(es_bisiesto(2000, 2013))