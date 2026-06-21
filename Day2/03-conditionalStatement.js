
// function getBrowser(browserName) { // Named Function    

// //const browserName = "chrome"    here assiging the value and using it

// if (browserName==="chrome") { // false
    
//     console.log("This is a chrome browser");
    
// } else if(browserName==="msedge"){ // true

//     console.log("This is msedge browser");
    
// } else{
//     console.log("This is not a supported browser");   

// }
// }
// getBrowser("msedge") // call function using its name

/* Steps for Debugging in JS:
1. Add brekpoints
2.  Click on the bug symbol in the left panel of VS code the RUN and DEBUG panel opens click on Run and Debug\
and choose node.js


Method 2 :
1. Add brekpoints
2. CLick on Launch Profile in the right bottom on the terminal
3. CHoose the JavaScript Debug Terminal
4. We should move to the current folder by using the command called cd change directory */


function getVersion(browser) {
    
    switch (browser) {

        case "chrome":
            console.log("The version of chrome is 131");            
            break;

        case "msedge":
            console.log("The version of msedge 132");  
            break;          
    
        default:
            console.log("Unsupported Browser");
            
            break;
    }
}


getVersion("msedge")