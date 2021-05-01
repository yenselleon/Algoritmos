

function rango(num1,num2,stepValue) {
    let arr = [];
    if ((num1 < num2 && stepValue !== undefined)) for (let index = num1; index <= num2; index += stepValue ) arr.push(index)
    
    else if (num1 > num2 && stepValue !== undefined) for (let index = num1; index >= num2; index -= stepValue ) arr.push(index)
    
    if (num1 < num2 && stepValue === undefined) for (let index = num1; index <= num2; index++) arr.push(index)
                                                
    else if (num1 > num2 && stepValue === undefined) for (let index = num1; index >= num2; index-- ) arr.push(index)



    console.log({arr})
    return arr;
}

function suma([...num]) {
    let result = 0;
    for (let index = 0; index < num.length; index++) {
        result = result + num[index];
    }
    return result;
}

console.log(suma(rango(1,10)))