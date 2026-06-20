//Behaviour of var,let , const interms of scoping


// //Scoping while using var

// //Global 

// function add(){

// var a = 10;
// var b = 20;
// var c = a+b

// }

// console.log("Addition of a and b",c); // var is function scoped and cannot access the variables declared inside the function block

// add()



// //Scoping while using var

// //Global 

// function add(){

// let a = 10;
// let b = 20;
// let c = a+b

// }

// console.log("Addition of a and b",c); // let  is function scoped and cannot access the variables declared inside the function block

// add()


// //Scoping while using const

// //Global 

// function add(){

// const a = 10;
// const b = 20;
// const c = a+b

// }

// console.log("Addition of a and b",c); // const  is function scoped and cannot access the variables declared inside the function block

// add()

//c not defined it is not able to get / out of visibility



/* Conclusion
var,let and const are all function scoped */



//{} => block which is accompanied by the keyword called function then it is called function scope


//{}=>if , for , while => block



//BLOCK SCOPE

// if(true){

// var x=123 // initialization
    
// }

// console.log(x); //var can leak data out of the block scope 
// //is it reliable ==> NO


// if(true){

// let x=123 // initialization
    
// }

// console.log(x); // let declaration does not leak data and is reliable to be used inside a block


if(true){

const x=123 // initialization
    
}

console.log(x); // let declaration does not leak data and is reliable to be used inside a block


/* Conclusion :

1. var is function scoped but not block scoped
2. let is function scoped as well as block scoped
3. const is function scoped as well as block scoped*/