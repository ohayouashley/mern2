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
