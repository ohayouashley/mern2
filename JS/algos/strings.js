//1.

// function removeBlanks(str) {
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] != " ") {
// 			newStr += str[i];
// 		}
// 	}
// 	return newStr;
// }

// console.log(removeBlanks("Pl ayTha tf u nkyM usi c"));
// console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));

//2.

// function getDigits(str) {
// 	let newNumStr = "";

// 	for (let char in str) {
// 		if (!isNan(str[char])) {
// 			newNumStr += str[char];
// 		}
// 	}
// 	return Number(newNumStr);
// }

// getDigits("0s1a3y5w7h9a2t4?6!8?0");

//3.

// function acronym(str) {
// 	let wordsArr = str.split(" ");
// 	let acronymStr = "";

// 	for (let word in wordsArr) {
// 		if (wordsArr[word].length > 0) {
// 			acronymStr += wordsArr[word][0].toUpperCase();
// 		}
// 	}
// 	console.log(wordsArr);
// 	return acronymStr;
// }

// acronym(" there's no free lunch - gotta pay yer way ");

//4.

// function countNonSpaces(str) {
// 	let counter = 0;

// 	for (let char in str) {
// 		if (str[char] != " ") {
// 			counter++;
// 		}
// 	}
// 	return counter;
// }

// console.log(countNonSpaces("Honey pie, you are driving me crazy"));
// console.log(countNonSpaces("Hello World!"));

//5.

// function removeShorterStrings(arr, len) {
// 	let newStrings = [];
// 	let nextIndex = 0;

// 	for (let value in arr) {
// 		if (arr[value].length >= len) {
// 			newStrings[nextIndex++] = arr[value];
// 		}
// 	}
// 	return newStrings;
// }

// console.log(
// 	removeShorterStrings(
// 		["Good morning", "sunshine", "the", "Earth", "says", "hello"],
// 		4
// 	)
// );

// console.log(
// 	removeShorterStrings(["There", "is", "a", "bug", "in", "the", "system"], 3)
// );
