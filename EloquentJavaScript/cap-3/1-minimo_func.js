

function minNumber(...numbers) {

    let min = Math.min(...numbers);

    console.log(min)
}

minNumber(2,4,5,6,10,14,1)


//Arrow function
const minNumber2 = (...numbers) => console.log(Math.min(...numbers));


minNumber2((2,4,5,6,10,14,1,0.5));