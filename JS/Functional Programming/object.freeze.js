//!  using const and changing a variable that is an array or an object

const arr = [1, 2, 3, 4];
arr.push(300);
//!Even though declared as 'const' we can still push values onto the array.

//? If we want to prevent those types of chances we can use Object.freeze() to give our array or object immutability.

const arrr = Object.freeze([1, 2, 3, 4]);
arrr.push(300);
//!No longer allowed to change 'arrr'

//? lets say we have an immutable list of groceries.

const groceryList = Object.freeze([
	{ item: "broccoli", haveIngredient: false },
	{ item: "miso past", haveIngredient: false },
	{ item: "seaweed", haveIngredient: false },
	{ item: "tofu", haveIngredient: false },
	{ item: "kimchi", haveIngredient: true },
]);

//?If we need to add "sardines" to the list we can use spread to make a copy of the list and add "sardines".

const needSardines = [
	...groceryList,
	{ item: "sardines", haveIngredient: false },
];

//?The ...groceryList at the beginning is making a copy of the objects already in groceryList.
//? Then we follow with a comma as if we are declaring an array with a new "sardines" object.

//?We can also use .concat() which takes two arrays, glues them together and vies us back the new array.

const needTuna = groceryList.concat([{ item: "tuna", haveIngredient: false }]);

//?If we already have sardines and we want to set the "haveIngredient" to true, we can write this:

const gotTheSardines = [
	...needSardines.slice(0, 5),
	{ ...needSardines[5], haveIngredient: true },
];

//?Lets say you just wanted to remove sardines all together

const notNeeded = [...gotTheSardines(0, 2), ...gotTheSardines.slice(3)];

//?SORTING***********

const numbers = [10, 4, 3, 12, 22, 8];
numbers.sort();
//?this will return [10, 12, 22, 3, 5, 8 ]
//?since this is not the outcome you were expecting, there is a work around.

const fruit = ["banana", "orange", "strawberry", "kiwi"];
fruit.sort();
fruit.reverse();

console.log(fruit);

//? SORTING OBJECTS ****************

//?If you want to sort based off of is an attribute inside of an object we can do that by using the
//? callback function. Referring to grocery list, we can sort the ingredient objects based on the igredient name
//? using this:

const sortedGroceries = [...groceryList].sort((a, b) =>
	a.item > b.item ? 1 : -1
);
