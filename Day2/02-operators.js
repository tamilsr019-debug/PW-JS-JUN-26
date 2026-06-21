


//Operators :


//+,-,/,%

let a=6%2; // 0
console.log("The modulus of 6 is",a);

//pre-increment , post-ncrement  and pre-decrement and post-decrement


// //post increment

// let x=10;
// console.log(x++); // this means print the x (x=10)value and then add 1 to the value 11
// console.log(x); //11

// // pre increment

// let y=10
// console.log(++y); //this means  add 1 to the value which turns to 11 and print the same
// console.log(y); //11


/* ********************************************************** */

//post decrement

let x=10;
console.log(x--); //10 this means print the x (x=10)value and then subtraction of 1 to the value 9
console.log(x); //9

// pre increment

let y=10
console.log(--y); //this means  subtract 1 to the value which turns to 9 and print the same
console.log(y); //9


//Strict Equality and Loose Equality


/* Strict Equality "===" 

1. Compare the value and
2. Compare the datatype



Loose Equality "==""

1. Compare the value and not the datatype
*/

1===1 // what does this return true

console.log(1===1); // true
console.log(1==="1"); // false
console.log(1=="1"); // true "1"===> 1

/* JavaScript has the mechanism called type coercion it will convert the string datatype to number  */


console.log("1"==true); // true //internally the "1"==> 1 and true will also be converted to number 1 for false will be converted to 0





