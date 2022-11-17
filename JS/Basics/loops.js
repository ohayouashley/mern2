//print numbers from 1-10
// for (initiate, condition, iteration)
//?The for statement in JS has the same syntax as in Java and C. It has three parts:
//*1. Initialization - initializes the iterator variable i. In this ex: we initialize i to 0 (can be 0 the number or the index of an array)
//*2. Condition - as long as the condition is met, the loop continues to execute. In this example we check that i is less than 3
//*3. Increment - a directive which increments the iterator. In this case we increment by 1 on every loop. (this is the ++)

for (let i = 0; i < 11; i++) {
	// console.log(i);
}

var i;

//?Add 1 to each number. Here it starts at 0 and terminates before it gets to the number 4. It will add 1 to every output.
for (i = 0; i < 4; i = i + 1) {
	// console.log(i);
}

//?Add 2 to each number starting at 2 and ending at 12

for (i = 2; i < 13; i = i + 2) {
	// console.log(i);
}

//?Subtract 3 from each number starting from 36 to 3.

for (i = 36; i > 2; i = i - 3) {
	// console.log(i);
}

//? Iterate over an array and print out all of its members. In this instance you need a variable that represents your array

var myArray = ["a", "b", "c"]; //! your a,b,c array is stored in variable myArray
for (var i = 0; i < myArray.length; i++) {
	//!
	// console.log("The member of myArray index " + i + " is " + myArray[i]);
}
//? Iterate over an array of days of the week and what number they are
//! Here we needed a variable for the array, the array itself, the loop, and the instructions (the console.log)
//! The .length is a function (a property) of an array that returns the number of members in the array so we know when to stop iterating.

var daysOfTheWeek = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];
for (var d = 0; d < daysOfTheWeek.length; d++) {
	// console.log(daysOfTheWeek[d] + " is the " + d + " day of the week");
}

//? The While Statement:
//? The while statement checks if an expression evaluates to true and runs as long as it stays true:
//* Syntax -= : x -= y is the same as x = x - y

let subNum = 5;

subNum -= 2;

console.log(subNum);

//! Here we declared the variable i. Used the while expression that states "if I is more than 0 keep running"
//!Then print out your variable plus the string "bottles of beer on the wall"

var i = 99;
while (i > 0) {
	console.log(i + " bottles of beer on the wall");
	i -= 1;
}

//? Write a while statement that
