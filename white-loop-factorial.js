// function getFactorial ( number ) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= number ) {
//         factorial = factorial * i;
//          i++;
//     }
//     return factorial;
// }
//  const firstNumber = getFactorial(6);
//  console.log('Hello world', firstNumber);

//  const secondNumber = getFactorial(7);
//  console.log('Hello I m Programmer we can help you', secondNumber);


//  function getFactorial (number ) {
//     let factorial = 1;
//     let i = 1;
//     while ( i >= 1){
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
//  }
//   const firstName = getFactorial(7)
//   console.log('Hello World', firstName);


// for-loop

function getFactorial (number) {
    let factorial = 1;
    for ( let i = 1; i => number; i++){
       factorial = factorial * i;
       console.log(factorial)
    }
    return factorial;
}

const getNumber = getFactorial (7);
console.log('Hello world', getNumber);