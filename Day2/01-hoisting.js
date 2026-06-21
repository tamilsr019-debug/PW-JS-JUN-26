


console.log(x); // print x value what is the value of x? Undefined

var x=10// Initilization

/* Interanally the declaration/ opening a memory location is moved to the top of the code

var x // declaration is moved to the top
console.log(x)


*/

/* 
in other programming language the below code will throw error
println(x) // 
int x=10 */

//let hoisting

// console.log(y); // Here in let the hoisting takes place but it is pointing to a temporal dead zone to get a reference error 

// let y=10// Initilization


//const hoisting

console.log(z); // Here in let the hoisting takes place but it is pointing to a temporal dead zone to get a reference error 

const z=10// Initilization

/* COnclusion :

1. var declaration hoisting happens and gives undefined as output
2. let and const also hoiring happens and gives a reference error*/