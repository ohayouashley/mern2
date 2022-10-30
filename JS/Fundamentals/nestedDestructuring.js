const person = {
	firstName: "Bob",
	lastName: "Marley",
	email: "bob@marley.com",
	password: "sekureP@ssw0rd9",
	username: "barley",
	addresses: [
		{
			address: "1600 Pennsylvania Avenue",
			city: "Washington, D.C.",
			zipcode: "20500",
		},
		{
			address: "221B Baker St.",
			city: "London",
			zipcode: "WC2N 5DU",
		},
	],
	createdAt: 1543945177623,
};

//if we want the individual addresses as variables we could certainly destructure addresses and then des

//?Try destructuring - grab the first address:

// const {
// 	addresses: [whiteHouse, sherlock],
// } = person;

const {
	addresses: [, { city: london }],
} = person;
console.log(london);

//leaving an 'empty' first position ( just a comma ) allows skipping that index and destructuring from the second address. Just be sure your content
//actually exists.
