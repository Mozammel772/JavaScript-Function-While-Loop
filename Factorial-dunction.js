function getFactorial (number) {
    let factorial = 1;
    for ( let i = 1; i <= number; i++) {
       factorial = factorial * i;
    }
    return factorial;
}

let firstName = getFactorial(10);
console.log('Hello World to khoem', firstName);

let secondname = getFactorial(15);
console.log('Hello world', secondname);