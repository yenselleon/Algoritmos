

const fizz__buzz = (numberInput) => {

    for (let index = 0; index <= numberInput; index++) {
        let number = index;
        if (Number.isInteger(number / 5) && Number.isInteger(number / 3) ) {
            number = "FizzBuzz";
        }
        else if (Number.isInteger(number / 3)) {
            number = "Fizz";
        }
        else if (Number.isInteger(number / 5)) {
            number = "Buzz";
        }
        console.log(number)
    }

}

fizz__buzz(100);