// let sayHello = () => console.log(`Hello`);
// let sayBye = () => console.log(`Bye`);
// //sayHello(); // 'Hello' will be alerted
// // Let's create a function that takes an argument and call it as if it was a function

// let doSomething = somethingToDo => {
//     somethingToDo();
// };

// // now any function we send to 'doSomething()' function will be called right away
// doSomething(sayHello); // 'Hello' will be alerted
// doSomething(sayBye); // 'Bye' will be alerted


//find Array function
// const people = [{name: "max"},{name: "Jack"}, {name: "mary"}]
// //Javascript
// function findPerson(val){
//     for (let i = 0; i < people.length; i++) {
//         let person = people[i]
//         if(person.name == val){
//             console.log(person);
//         }
// }
// console.log(`cannot find ${val}`);
// }
// findPerson('john')


//Es6

// 

// for Each method 
// javascript 
// const people = [{name: 'max'}, {name: 'jack'}, {name: 'mary'}]
// function showEachOne(name) {
//     for (let i = 0; i < people.length; i++) {
//         console.log(people[i].name)
//     }
// }
// showEachOne()

// for Es6 Method
// const people = [{name: 'max'}, {name: 'jack'}, {name: 'mary'}]
// const showEachOne =name =>people.forEach(person => console.log(person.name));
// showEachOne()




// JavaScript
// Filter array function
// const products = [{name:"Milk", price: 15}, {name:"Water", price: 9}, {name:"Bread", price: 5}];
// function filterProducts() {
//  let cheapProducts = [];
//  for (let i = 0; i < products.length; i++) {
//    if (products[i].price < 10) cheapProducts.push(products[i]);
//  }
//  return cheapProducts;
// }
// console.log(filterProducts());

// ES6
// 


// Map method
// const products = [
//     { name: 'Milk', price: 15 },
//     { name: 'Water', price: 9 },
//     { name: 'Bread', price: 5 },
//    ]
   
// //    JavaScript

//    function changeProducts() {
//     for (let i = 0; i < products.length; i++) {
//       products[i].price -= products[i].price * 0.05
//     }
//     return products
//    }
//    console.log(changeProducts());
   
// ES6
// const products = [
//     { name: 'Milk', price: 15 },
//     { name: 'Water', price: 9 },
//     { name: 'Bread', price: 5 },
//    ]
//    const changeProducts = () =>
//     products.map(val => ({ ...val, price: val.price + 2 }));
//    console.log(changeProducts());
// //    console.log(products);

// let arr = [1,2,3,7]
// let arr2 = [4,5,6]
//Using Es6  spread operator
// arr = [...arr, ...arr2]
// console.log(arr);


// Let’s sum the values of a small array
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
// var sum = 0;

// // Using the for… in loop
// for ( var i in numbers) {
//     sum += numbers[i];
// }

// console.log(sum)
// // prints 115
// // Let’s sum the values of a small array
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
// var sum = 0;

// // Using the for… of loop
// for ( var value of numbers) {
//     sum += value;
// }
// console.log(sum)
// prints 115


//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.



//Create a function that takes length and width and finds the perimeter of a rectangle.

// function findPerimeter(length, width,) {
//     return 2 * (length + width);

// }
// console.log(findPerimeter(5 ,3));

// function countTrue(arr){
//     return arr.filter(Boolean).length;
// }
// console.log(countTrue([true, false, true, true, false, true]));
   
  


    // const fResult = f();
    // const gResult = g();
    // if (fResult > gResult) {
    //     return 'f';
    //      } e  
        
        
    

// }


// function count_digits(num){
//     return Math.abs(num).toString().length;

// }
// const numDigits = count_digits(12345);
// console.log(numDigits);


// function compareFunctions(f, g) {
//     const resultF = f();
//     const resultG = g();

//     if (resultF > resultG) {
//         return 'f';
//     } else if (resultG > resultF) {
//         return 'g';
//     } else {
//         return 'neither';
//     }
// }
//  function  func1(){
//     return 5;
//  }
//  function func2(){
//     return 10;
//  }
//  console.log(compareFunctions(func1, func2));
