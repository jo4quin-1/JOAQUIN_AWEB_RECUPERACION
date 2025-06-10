function numAsteriscos(asteriscos){
    let contador = 0
    for(i = 0; i < asteriscos.length; i++){
        if(asteriscos[i] === '*'){
            contador++
        }
    }
    return contador
    
}
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0
