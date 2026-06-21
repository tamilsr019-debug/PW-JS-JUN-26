
//var,let and const

const browserName = "chrome"; //global variable

function getBrowserName (){ //function

    if(browserName == "chrome"){ //condition
        let browserName = "chrome"; //local variable
        console.log(browserName); //Print inside the function
    }
    
}
getBrowserName();
