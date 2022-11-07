//? Common function to use is .map()
//? Makes a copy of an array and apply's our own twist. Using as callback function that takes in each element of the array returning
//? what we want to do with each element.

// const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
// const groceryList = groceries.map((item) => `<li>${item}</li>`);
//!when I save this the first item in my groceryList variable saves with another set of it's own parenthesis.

//? this will take al ist of items and then return an array of numbers.

// const values = [1, 2, 3, 4, 5];
// const cubes = values.map((val) => val ** 3);
//?this will create list of cubed numbers [1,8,27,64,125]

//?map is a function that applies a callback function to each item in an array and returns that new array.

//? .filter()

//? if you want to get an array with some of the values from the original array, we can provide a callback function that
//? returns either true or false for each element in the array. If true, the filter method will add it to the new array that will be reutnred in the end.
//? if false we do not want the element in the new array.

// const arr = [1, 3, 4, 6];
// const evens = arr.filter((val) => val % 2 === 0);
//*NOTE this will not modify the original array (arr).

//?this will create a list of only the even values. If we wanted odds we could get them by changing the === to a !==

//? if we want only the groceries that have the letter "o" we write:

const grocer = ["okonomiyaki sauce", "oil", "mushrooms", "eggs"];
const oFoods = [grocer.filter((item) => item.includes("o"))];

console.log(oFoods);
//*we can do anything with the callback function as long as it returns true or false. We can even chain filter and map together like this:

const nums = [1, 3, 22, 9, 2];
const oddCubes = nums.filter((val) => val % 2 !== 0).map((val) => val ** 3);
console.log(oddCubes);
