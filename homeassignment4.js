//Task 4: Callback Function 
//Create a function named `getUserData` that takes a callback function as a parameter. I

function getUserData (callback){
    //simulate fetching data with `setTimeout`
    setTimeout(function(){
        //callback function 
        callback();
    }, 3000); //Wait for 3 seconds
}
function callbackFunction(){ // later print the log msg.
    console.log("“Call Back Function”");
}
//call the getuserdata function
getUserData(callbackFunction);


//Task 3: Anonymous Function  
setTimeout(function(){
    console.log("This message is delayed by 2 seconds");
},2000)


//Task 2: Arrow Function
function double (number){
    return number*2 //double its value
}
console.log(double(63));
console.log(double(13));


//Task 1: Function Declaration  

function userProfile(name){
   console.log("Hello," + name + "!");
}
userProfile("TamilRaji");