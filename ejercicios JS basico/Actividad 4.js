function min(arr){
    let minimo = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimo) {
            minimo = arr[i]
        }
    }
    return minimo
}

// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2