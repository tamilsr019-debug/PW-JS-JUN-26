
enum environment {
    "process1" = "LOCAL",
    "process2" = "DEVELOPMENT",
    "process3" = "STAGING",
    "process4" = "PRODUCTION",
}

function runTests (Environment : environment): void{
    console.log(`The test execute in ${Environment} environment.`);  
}
runTests(environment.process1);
runTests(environment.process2);
runTests(environment.process3);
runTests(environment.process4);