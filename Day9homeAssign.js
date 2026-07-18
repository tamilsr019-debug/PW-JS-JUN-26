var environment;
(function (environment) {
    environment["process1"] = "LOCAL";
    environment["process2"] = "DEVELOPMENT";
    environment["process3"] = "STAGING";
    environment["process4"] = "PRODUCTION";
})(environment || (environment = {}));
function runTests(Environment) {
    console.log("The test execute in ".concat(Environment, " environment."));
}
runTests(environment.process1);
runTests(environment.process2);
runTests(environment.process3);
runTests(environment.process4);
