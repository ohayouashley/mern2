// setTimeout(function () {
// 	console.log("start");
// }, 3000);

const { example } = require("yargs");

// console.log("end");
//examine this function. What does it need? There are 2 parameters that it expects:
// 1. a function and 2. a number

//The number represents the delay in ML and the other is a function. whatever code we want to run after the ML delay.

//*This function parameter is called by setTimeout() like a function. It represents something that we conventionally
//*refer to as a "callbackfuncction" - a function that is passed into another function to be called by that function."

//todo - declare a variable and set it equal to a function and then call that function using the variable name

var exampleFunction = function (message) {
	console.log(message);
};

exampleFunction("hello from exampleFunction");

//todo - pass a function as a parameter into a parent function:

function parentFunction(callback) {
	callback("information from the parent function");
}

//todo call  the parent function

parentFunction(exampleFunction);
