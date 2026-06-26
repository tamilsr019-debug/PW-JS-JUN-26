
//Step - 1 :create javascript function that accepts the string
function revereseString(input) {

//convert the input to characters
let chars = input.split(""); //Use split options

//empty string to store the reverse
let reversed = "";

//Loop in reverse direction
for (let i = chars.length - 1; i>=0; i--) {
    //concatenated the string
    reversed += chars[i];
    }
    // print the new string
    console.log("Reveresed:", reversed);
    //return reversed string    
    return reversed;
}

// Step - 2 : Write the palindrome functioins (Check give string and return string)

function isPalindrome(original){
    //Call the reverseString function
    let reversed = revereseString(original);
    return reversed === original;
}

// Step - 3 : Testing

let testValue = "javascript";
console.log("Is Palindrome: ", isPalindrome(testValue));
