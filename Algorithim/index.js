//The formular to convert from celcius to fahrenheit is the tempertaure in celcius times 9/5, plus 32.
// you are given a variable celcius representing a temperature in celcius.
//use the variable fahrenheit already defined and assign it the farenheit
// temperature equivalent to the given celcius temperature.
//use the formular mentioned above to help convert the celcius temperature to fahrenheit

// function celcius  (temp){
//     let farenheit = (temp * 9/5) + 32;
//     return farenheit + 'F';

// }
// console.log(celcius(0));



// write a function that does the multiplication of a number up to 12
// and returns the result,having the number, its multiplier and the result

// function multiply (num){
//  for (let i = 1; i <=12; i++) {
//     let result = num * i
//      console.log(`${num} * ${i} = ${result}`);
//  }
// }
// multiply(2)

// Return the factorial of the provided integer.
// if the integer is represented with the letter n,a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! =  1 * 2 * 3 * 4 * 5 = 120
//Only integers greater than or equal to zero will be supplied to the function.
// will start the loopfrom the value of i

// function factorial (n){
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
   
// }
// console.log(factorial(5));


// Truncate a sring (first argument) if it is longer than a given maximun
// string length (second argument).Return the truncated string with a ... ending.


// function truncateString(str, num) {
//     if (str.length > num && num > 3) {
//         return str.slice(0, num - 3) + '...';
//     } else if (str.length > num && num <= 3) {
//         return str.slice(0, num) + '...';
//     } else {
//         return str;
//     }
// }

// console.log(truncateString("A-t", 4));
// OR
// function truncateString(str, num) {
//     return str.length > num ? str.slice(0, num) + '...' : str;
// }
// console.log(truncateString('Gomycode' , 5)); 

//check if a value is classified as a boolean primitive.Returns true or false.
// Boolean primitives are true or false.
// true = (true or false), false = (null, string, number, undefined)

// function isboolean (bool) {
//     return typeof bool === 'boolean';
// }
// console.log(isboolean('james'));


// Reverse a string
// Reverse the provided string.
// You may need to turn the string into an array before you can reserve it.
// your result must be a string.

// function ReverseableString(string) {
//     return string.split('').reverse().join('');
// }
// console.log(ReverseableString('reverse the process'));  

//Return true if the string in the first element of the array
// contains all the letters of the string in the second elementof the array.
// for example,['hello', 'HELLO', ], should return true because all of the 
// letters in the second string are present in the first,ignoring case.
// The arguement ['hello', 'hey'] should return false because the string hello does not contain a y.
// lastly, ['Alien' , 'line'], should return true because all of the letters in the line are present in the Alien.

// function checkAlphabets(arr) {
//     const test = arr [1].toLowerCase();
//     const target = arr[0].toLowerCase();
//     for (let i = 0; i < test.length; i++) {
//         if (target.indexOf(test[i]) < 0) return false;    
//     }
//     return true;
// }
// console.log(checkAlphabets(['jesus', 'USe']));



//Create a function that filters out negative numbers
//In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”

// function filterArray(arr) {
//     return arr.filter(num => num <= 0);

// }
// console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) 


// Return a Boolean if a number is divisible by 10
// Here, you’ll create a function that’ll give you a “true” or “false” Boolean as its output. The inputted number should only return a “true” if it’s divisible by 10. Otherwise, your program should return a “false” answer.


// function divi(num) {
//     return num % 10 === 0;

// }
// console.log(divi(20)); 


//Sort an array from lowest to highest
//You could create a function for this solution as well, but be sure to try your program with varying lengths and types of arrays.

// function arrSort(arr) {
// return arr.sort( (a, b ) => {
//     return (a - b)
// } 
// )

// }

// console.log(arrSort([7, 5, 3, 10, 13, 17, 2])); // [2, 3, 4, 5, 7, 10, 13, 17]


//OR 

// function sortArray(arr) {
//     for (let a = 0; a < arr.length; a++) {
//         for (let b = a + 1; b < arr.length; b++){
//             if (arr[a] > arr[b]) {
//                 let temp = arr[a];
//                 arr[a] = arr[b];
//                 arr[b] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(sortArray([12, 5,8,1,9,3]));



//Remove the spaces found in a string
//Yet another way to clean up data is to remove any errors or unnecessary spaces. This function will take in a string and then return it with all spaces removed.

// function removeSpaces(str) {
//     return str.split(' ').join('')
// }
// console.log(removeSpaces('life is good'));

//Implementation of Insertion Sort using JavaScript:

// Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands. Each time we take a new card we put it in the right place in our hand.


// Instructions
// Each time work only with the first i-1 element from of the array
// Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i - 1;

//         // Move elements of arr[0..i-1], that are greater than key,
//         // to one position ahead of their current position
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }
//     return arr;
// }

// // Example usage:
// let arr = [12, 11, 13, 5, 6];
// console.log("Sorted array: ", insertionSort(arr));

// var x = "hello"
// var y = "world"
// console.log(x +y);

// function checkIfNumber( x ){
//     if ( typeof x === 'number' ){
//         console.log( x + ' is a number.' ); 
//     }
// }







