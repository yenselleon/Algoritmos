

const arrayALista =  (arr) => {
    let objetOutput = null;

    for (let index = 0; index < arr.length; index++) {
        objetOutput = {valor: arr[index], objetOutput}
        
    }

    return objetOutput;
}

const listaAArray = (arrList) => {
    let newArra = [];

    for(let node = arrList; node; node = node.objetOutput){
        newArra.push(node.valor)
    }
    
    return newArra;
}

const posicion = (arrList, index) => {
  	let arrayList = listaAArray(arrList);
    let indexArray = arrayList[index];

    
    return indexArray;
}
//posicion version recursiva
function posicionRecursive(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }

const preceder = (value, list) => {

    return {value, rest: list};
}



//pruebas
console.log(arrayALista([10, 20,30]));
// → {valor: 10, resto: {valor: 20, resto: null}}
console.log(listaAArray(arrayALista([10, 20, 30])));
// → [10, 20, 30]
console.log(posicion(arrayALista([10, 20, 30]), 1));
// → 20
console.log(preceder(10, preceder(20, null)));
// → {valor: 10, resto: {valor: 20, resto: null}}