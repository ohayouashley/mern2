//!DataTypes

var myVar = "my string";
var myNum = 10;
var myBool = true;

//?There are different updates to javascript that has introducted new syntax

//ES5 - ECMAScript 5 - still widely understood version of JS by all browsers
//But there are updates with more common syntax
//We will be using ES6 Mainly which uses let to declare variables instead of var
//let and const

//?let - declaring a mutable variable (can be changed)
//? const - declaring an immutable variable (cannot change)

let myString = "hellow world";

const string2 = "hello again";
//? = means assignment - we can reassign let by using it

myString = "goodbye world";

//!data structures

let arr = [3, "string", false, true, 201];

console.log(arr[4]);

//!objects

const obj = {
	name: "person",
	city: "somewhere",
	dev: true,
	languages: ["python", "java", "javascript"],
};

console.log(obj.languages[1]);

//? we're going to start working with nested objects. We could also
//? have an array inside an upjected.
//? you can also access something by the key name.
//? We'll be using const a lot in react.

obj.newField = "here is a new field";

console.log(newField);

const myArrowFuncrtion = (a, b) => {
	console.log(a * b);
};

myArrowFuncrtion(3, 100);

//////////

//! destructuring

//can't say name and city because they don't exist. Name only
//exists within the object -

//a way of pulling values out of an object and lets them be grabbed globally

const {} = obj; //this means we are pulling everything from obj and placing them into the curly brackets
//now they are all global

const { name, city, dev, languages } = obj;
console.log(name, city);
//

//?we can also destruture when it comes to arrays.

// if we wanted to pull values out we could do this

const [] = arr; //specify which array we are pulling arrays out of. We only have access to index positions
//where as object we are pulling keys out.

const [item1, item2] = arr; //they are just going to pull them out by index
