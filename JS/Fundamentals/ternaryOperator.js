//basic if statement
// let canAfford = (itemPrice, accountBalance) => {
// 	if (itemPrice > accountBalance) {
// 		return "Cannot afford! You are $${itemPrice - accountBalance} short";
// 	} else {
// 		return "Can afford!";
// 	}
// };

//ternary statement

// let myBankAccountBalance = 1000;
// const drone = 1001;

// let droneOnSale = drone - drone * 0.03;

// let canDefAfford = (itemPrice, accountBalance) => {
// 	return itemPrice > accountBalance
// 		? "Cannot afford! You are $${itemPrice - accountBalance} short"
// 		: "Can afford!";
// };

//is the itemPrice > accountBalance
//yes? then return 'cannot afford'
//no then return can afford

function getFee(isMember) {
	return isMember ? "2.00" : "$10.00";
}

console.log(getFee(false));

function getCounceling(isStressed) {
	return isStressed
		? "Yes you're doing too much with too little"
		: "Just try a little harder Ash";
}

console.log(getCounceling(false));

//car rental
const age = 21;
const carRental = age <= 25 ? "Can't rent a car" : "Can rent a car";
console.log(carRental);

//Big O

function smallest(arr) {
	let min = arr[0];
	for (let element of arr) {
		if (element < min) {
			min = element;
		}
	}
	return min;
}

smallest([2, 5, 6, 12, 14, 28, 37, 41, 44, 45]);
