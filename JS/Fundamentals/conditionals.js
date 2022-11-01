const age = 19;
const beverage = age >= 21 ? "beer" : "juice";

// console.log(beverage);

const fat = 150;
const weight =
	fat <= 125 ? "you're good girl" : "maybe you should lose some weight";

console.log(weight);

// const greeting = person => {
//     const name = person ? person.name : "stranger";
//     return 'howdy,  ${name}';
// };

// console.log(greeting({name : "Alice"}))

const greet = (person) => {
	const name = person ? person.name : "stranger";
	return `Howdy, ${name}`;
};

console.log(greet({ name: "Alice" })); // "Howdy, Alice"
console.log(greet(null)); // "Howdy, stranger"
