
let objeto = {aqui: {hay: "un"}, objeto: 2};

const igualdadProfunda = (objeto, objeto2 ) => {

    let prueba = (objeto[Object.keys(objeto)[0]] !== objeto2[Object.keys(objeto2)[0]])
    let objeto1prueba = objeto[Object.keys(objeto2)[0]]
    let objeto2prueba = objeto2[Object.keys(objeto2)[0]]
    console.log({prueba});

    if(typeof objeto == "object" && objeto != null) {
        let validBoolean = true;
        
        if(Object.keys(objeto).length !== Object.keys(objeto2).length) ( validBoolean = false);

        for(let i = 0; i <= Object.keys(objeto).length; i++){

            (Object.keys(objeto)[i] !== Object.keys(objeto2)[i]) && (validBoolean = false);
            (
                JSON.stringify(objeto[Object.keys(objeto)[i]]) !== 
                JSON.stringify(objeto2[Object.keys(objeto2)[i]])) && 
                (validBoolean = false);
            
        }

        return validBoolean;
    }
    
    return false;
}





console.log(igualdadProfunda(objeto, objeto));
// → true
console.log(igualdadProfunda(objeto, {aqui: 1, object: 2}));
// → false
console.log(igualdadProfunda(objeto, {aqui: {hay: "un"}, objeto: 2}));
// → true