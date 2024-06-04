// console.log(1+9);
function ret(){
    // alert("welcome")
}
// alert("welcome to Gomycode")
// prompt("How old are you?")
// confirm("Do you want to pay ?")  


//PRIMITIVE DATA TYPES
// //Numbers
// let age=30
// console.log(age);

// //string
// let name = ("mary")
// console.log(name);

// //Boolean
// let isMarried = true
// console.log(isMarried);

// //Null
// let data = null
// console.log(data);

// //Undefined
// let date 
// console.log(date);

//NON-PRIMITIVE
//Arrays are used to store multiple data inside of a variable.
// const colours =['white',"black",'red','blue']
// // console.log(colours.length);//total number of items in an array
// // console.log(colours[2]); // position of items in array
// // colours.push("violet")
// // console.log(colours);
// // colours.pop()
// // console.log(colours);
// // colours.unshift("green") 
// // console.log(colours);
// colours.shift()
// console.log(colours); 

//Object.

// const person = {
//     name: 'John',
//     age: 31,
//     isMarried: true,
//     info: null,
//     state: 'Benin',
//     profession: {
//         jobTittle:'Software Engineer',
//         company: 'Apple',
//         startDate:"20/5/2018",
//         endDate: '20/5/2020',
//         jD:{
//             task1:'Build App',
//             task2: 'Connect Database'
//         } 

//     }

// }
// console.log(person.name);
// console.log(person[info]);
// console.log(person.profession.startDate ,person.profession.endDate);
// console.log(person.profession.jD.task1);
// const properties =[
//     'iphone',
//     'shoes',
//     cars =['toyota camry','lamborghini', benz =['G-Wagon','AMG','Maybach']],
//     houses = ['boungalow','penthouse', 'Duplex'],
//     'shops',
//     companies=['Google', 'Facebook','Twitter','Gomycode']
// ]
// console.log(properties);
// console.log(properties[2][2][2]);
// console.log(properties[5][2]);
// console.log(properties[3][1]);


//ARRAY OF OBJECTS
// const players = [
//     {
//     name : 'lionel Mercy',
//     age: 36,
//     club: 'inter Mami',
//     country: 'Argentina'
//     },

//     {
//     name : 'cole palmer',
//     age: 21,
//     club: 'chelsea',
//     country: 'England'
//     },

//     {
//     name : 'Thiago silva ',
//     age: 39,
//     club: 'palmeria',
//     country: 'Brazil'
//     },

//     {
//     name : 'christiano Ronaldo',
//     age: 38,
//     club: 'AL Nasar',
//     country: 'portugal'
//     }

// ]
// console.log(players[0].name);
// console.log(players[0].club);

// console.log(players[2].country);
// console.log(players[2].age);

// const timetable = new Date().getDate()
// const time = new Date().getMonth() + 1
// const table = new Date().getFullYear()

// console.log(timetable + '/' + time + '/' + table);

//Arithmetic operators
// console.log(1 +4);
// console.log(5 - 3);
// console.log(12 / 3);
// console.log(4 * 4);
// console.log(10 % 3);// modulus operator
// console.log(10 ** 3);//exponential operator

//NAN
// console.log(0 / 0);
// console.log('some random' * 2);

// //INFINITY
// console.log(1 / 0);
// console.log(Infinity * Infinity);
// console.log(1e+309);

// // increment and decreement operators
// let num = 5
// num++ //increment operator
// console.log(num);

// num-- //decrement operators
// console.log(num);

//comparison operators
// let x = 5;

//STRING CONCATENATION (ADDING STRING WITH ADDIONAL SIGN TOGETHER)

// let computer ='i am ' + 'a window laptop.' + 'i can be used to write code'
// let school ='Gomycode'
// // TEMPLATE LITERAL
// let fullsentence = `${computer} A lot of people use me at ${school}`
// console.log(fullsentence);

// FUNCTIONS
// function james(x, y){
//     x = 12
//     y = 4
//     return console.log(x / y);
// }
// james()

//If statement;if statement will only execute the logic in its block of code if the condition is true.
// function checkscore(){
// let marks = prompt('Enter your score')
// if(marks <= 30){
//    alert(`you failed this test`);
// }
// else if(marks >30 && marks <= 50){
//    alert(`you passed this test`);
// }
// else if(marks >50 && marks <= 75){
//    alert(`you dd great`);
// }
// else if(marks >75 && marks <= 100){
//    alert(`you did excellently`);
// }
// else{
//    alert(`you did not write the test`);
// }
// }

// function decodeColor(color){
//     switch(color){
//         case 1: console.log('Red is your color');
//         break;
//         case 2: console.log('blue is your color');
//         break;
//         case "x": console.log('yellow is your color');
//         break;
//         case "y": console.log('Black is your color');
//         break;
//         default:
//             console.log('color is not defined');
//     }
// }
// decodeColor('y')

// chain ternary operators

// let number1 = 5;  //positive
// let number2 = -3  //negative
// let number3 = 0  //zero

// let result1 = number1 > 0 ? number1:
//             number1 < 0 ? number1:
//             0;

//  let result2 = number2 > 0 ? number2:
//                 number2 < 0 ? number2:
//                 0;
                
// let result3 = number3 > 0 ? number3:
//                 number3 < 0 ? number3:
//                 0;

//                 console.log(result1);
//                 console.log(result2);
//                 console.log(result3);

// // ernery operators
// let marks =60
// let result =(marks >50) ? 'You passed' : 'You failed'
// console.log(result);

// // chained ternary operators
// let num = 7
// let ans = (num < 0) ? 'negative' : (num > 0) ? 'positive' : 'equal number'
// console.log(ans);

// let phone = 'redmi'
// let selectedphone = (phone == 'redmi') ? 'redmi':(phone == 'samsung') ? 'samsung' : (phone == iphone) ? 'iphone' : 'phone not'

// console.log(selectedphone);

//Loops ;3 types of loop are;While loop,do while loop
// While loop:checks the condition before executing the logic in the block code
// Do while loop:executes the logic in the block of code atleast once before checking the condition.

//while loop:check conditions before executing the logic in the block of code if the condition is true
// const num =[31, 5, 7, 13, 42, 9, 24]
// let sum = 0;
// let i = 0
// do {
//     sum += num[i]
;//     i++;
// }
// while(i < num.length)
// console.log(sum);

//FOR LOOP;It is similar to the while loop and Allows us to write all the codes in one line.
// const num = [31, 5, 7, 13, 42, 9, 24]
// let sum = 0;
// for(let i = 0; i < num.length; i++){
//     sum += num[i]
// }
// console.log(sum);

