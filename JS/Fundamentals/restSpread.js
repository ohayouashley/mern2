//?Using rest
// const animals = ["horse", "dog", "fish", "cat", "bird"];
// const [firstAnimal, secondAnimal] = animals;
// console.log(animals);

// //if we want the remaining animals, we use a rest pattern at the end of the assignment.

// const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
// otherAnimals;

//!Cannot redeclare block-scoped variable 'secondAnimal'

//?Using spread

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

//grabbing firstName and lastName from person is easy alongwith assigning all other properties to a catchall

const { firstName, lastName, ...attributes } = person;

//using spread we can quickly make complete copies of objects or arrays.

const personCopy = { ...person };

//!The copy is shallow - complex or nested structures with objects references will point to same object.

//? user person objects to demonstrate:

// const personCopy = { ...person };
// personCopy === person
// => false
// personCopy.addresses === person.addresses
// => true
