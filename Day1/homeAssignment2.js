const { log } = require("node:console");

//Understanding scoping in JS. 1.Female
const genderType = "female"; //global variable

function printGender(){ //function name specified
    let color ="brown"; //Inside the function to declare the color value is 1st

    if (genderType.startsWith("female")){ //create if condition startwith
        var age = 30; //declare the age inside the if function
        let color = "pink"; //create the block-scope to redeclared the color value is 2nd
        console.log(color); //print the value inside block
    }
    console.log(age); //print the value outside block

}
printGender(); //call function
console.log(genderType); //print gender globally

//Change the global gender as 'male'
//Checked that, i get the output are undefined and male.
