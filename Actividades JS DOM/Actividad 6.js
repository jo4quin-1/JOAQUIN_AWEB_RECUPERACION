const lista = document.querySelectorAll('.elemento_lista')

lista.forEach((list, i) =>{
    list.textContent = 'ejemplo ' + (i + 1)

})