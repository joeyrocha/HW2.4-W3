/* Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.

Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz


function fizzBuzz(a) {
    if(a % 3 === 0 && a % 5 === 0){
        console.log("fizzBuzz")
    }else if(a % 5 === 0){
        console.log("Buzz")
    }else if(a % 3 === 0 ){
        console.log("fizz")
    }else{
        console.log("POP")
    }
}
fizzBuzz(49); //Pop

fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz
*/
/* Q2. Create a function called averager that gets the average of an array. 
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];


function averager(arr){
    const sum = arr.reduce((total,current) => total + current,0) // .reduce method total sums the values of the array while current counts the individual value items 
    const average = sum/arr.length

    return average
}// https://www.w3schools.com/jsref/jsref_reduce.asp
let result = averager(prices);
console.log(result);

*/

/* Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 
*/

// Function to convert Celsius to Fahrenheit
function celToFah(celsius) {
    // Formula for Celsius to Fahrenheit: (Celsius * 9/5) + 32
    const fahrenheit = (celsius * 9/5) + 32;
    return parseFloat(fahrenheit.toFixed(2)); // Round to two decimal places
}

  // Function to convert Celsius to Kelvin
function celToKel(celsius) {
    // Formula for Celsius to Kelvin: Celsius + 273.15
    const kelvin = celsius + 273.15;
    return parseFloat(kelvin.toFixed(2)); // Round to two decimal places
}

console.log(celToFah(37.5));
console.log(celToFah(-40));
console.log(celToFah(0));
console.log(celToFah(100));
console.log(celToKel(173.13));
console.log(celToKel(-13));


/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/
function pow(a,b){
    if (b === 0) {
        return 1;
}
    
    let result = 1;
    for (let i = 0; i < Math.abs(b); i++) {
        result *= a;
    }
    
    if (b < 0) {
        return 1 / result;
    }
    
    return result;
}
console.log(pow(2, 3)); // Output: 8
console.log(pow(5, 0)); // Output: 1
console.log(pow(3, -2)); // Output: 0.1111111111111111 (1/9)