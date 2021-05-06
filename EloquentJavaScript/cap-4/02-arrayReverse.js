
let array = [1,2,3,4,5,6,7,8,9,10]

/*------------------------------------------*/
/*--Metodo sin modificar el array enviado como argumento--*/
/*------------------------------------------*/

function revertirArray(arr) {
    let newArray = [].concat(arr)
    let arraReverse = []
    for (let index = newArray.length - 1; index >= 0; index--) {
        arraReverse.push(newArray[index])
    }
}

revertirArray(array)
let arrayReverse = array
console.log({arrayReverse})

/*------------------------------------------*/
/*--metodo modificando el array enviado como argumento--*/
/*------------------------------------------*/

function revertirArrayEnSuLugar(arr) {
    let arraytemporal = [].concat(arr);
    for (let index = 0; index < arr.length; index++) {
        
        arr[index] =  arraytemporal[arraytemporal.length - index - 1]
    }
}

revertirArrayEnSuLugar(array)

let nuevoArrayEnSuLugar = array
console.log({nuevoArrayEnSuLugar})