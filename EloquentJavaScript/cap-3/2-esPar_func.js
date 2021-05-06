
//Recursive Arrow func 
const esPar = (num) => (num === 0 || num === 1) 
                       ? (num === 0) ? 'Es par' : 'Es Impar' 
                       : esPar(Math.abs(num) % 2);
    


console.log(esPar(-1))