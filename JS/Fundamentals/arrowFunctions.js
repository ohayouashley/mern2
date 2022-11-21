//!regular function
// let name = "Ashley";
var sayHello = function (name) {
	console.log("Hello " + name);
};

sayHello("Ashley");
//!arrow function

var sayHi = (names) => {
	console.log(`Hello ${names}`);
};

sayHi("Jazz");

//! shorter way

const greeting = (namee) => console.log(`Hi ${namee}`);

greeting("Donkey");

//todo create an arrow function that prints out "good job you are doing an arrow function"

const createAFunction = (nameHere) =>
	console.log(`great job ${nameHere} you are doing an arrow function`);

createAFunction("Shrek");

//todo create an arrow function that prints out the name of the plant you want this month"

const plantWish = (plantName) =>
	console.log(`This month I definitely want a ${plantName}`);
plantWish("Monstera Albo");

//todo create an arrow function that says what day of the week it is

const weekDay = (dayOfTheWeek) =>
	console.log(`Today is unquestionably ${dayOfTheWeek}`);

weekDay("Thursday");

//todo create an arrow function that tells me on a scale of 1 - 10 how badly my migranes suck

const migraineScale = (howBad) => console.log(`My migraines are a ${howBad}`);

migraineScale("10 out of 10 would not recommend");
//######################################################################################

//? turn these functions into arrow functions:

//?1.
function sum(a, b) {
	return a + b;
}
//* arrow function
let sum2 = (a, b) => {
	return a + b;
};
//*even shorter
let sum3 = (a, b) => a + b;

//?2.
function isPositive(number) {
	return number >= 0;
}
//* arrow function
let isPositive2 = (number) => number >= 0;

//?3.
function randomNumber() {
	return Math.random;
}
//* arrow function
let randomNumber = () => Math.random;

//?4.
document.addEventListener("click", function () {
	console.log("Click");
});
//* arrow function
document.addEventListener("click", () => console.log("Click"));
