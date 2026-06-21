

// //String declaration : "",'',``

// //String Literal // primitive datatype => stack memory

// let companyName = "Testleaf"  // 1000
// let firmName = "Testleaf"  // 1000

// console.log(companyName===firmName); // it is true snce both companyName and FirmName has same value , datatype as well same memory location


// //Object Literal // non primitive datatypes

// let companyName1 = new String("Testleaf") //1001 // companyName1 the address / reference of the value that is assigned
// let firmName1 = new String("Testleaf") // 1002

// console.log(companyName1);
// console.log(companyName1===firmName1) // it is false snce both companyName and FirmName has same value , datatype but the memory location is different 


// //Methods for string manipulation


// //Escape sequence : \n => newline and \t => tab ; \ backslash


// let esc = 'It\'s a JS \n session'
// console.log(esc);

// let dblquo = "It \t is a \"double quote\""
// console.log(dblquo);


// //Concatenation :

// //+ // Older JS way of concatenation

// let testCaseName ="Create a Lead";
// let testCaseNo =123;

// let resultPlus = testCaseName+" in salesforce application testcase number is "+testCaseNo // option1

// console.log(resultPlus);

// //concat() // Next came the concat()

// let concat = testCaseName.concat(testCaseNo) // option2
// console.log(concat); 


// //template litral => `` modern js concantenation

// let resultPlus1 = testCaseName+" in salesforce application testcase number is "+testCaseNo // option1

// let tempLiteral = `${testCaseName} in salesforce application testcase number is ${testCaseNo}` // option3
// console.log(tempLiteral);


//Order Id = "pancard.pdf"


//length property

let courseName = "Playwaright"

let courseNameLength = courseName.length

console.log(`The length of the courseName is ${courseNameLength}`);


//indexOf() method

let indexofa = courseName.indexOf("a") // for loop
console.log(`The index of the charcter a is ${indexofa}`);

//charAt() method 

let charAta = courseName.charAt(3,"a") // first part shoud be above the forat match of "a" which is 2

console.log(`The charAt of the index 2 is ${charAta}`);










