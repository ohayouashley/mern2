const person = {
	firstName: "Bob",
	lastName: "Marley",
	email: "bob@marley.com",
	password: "password",
	userName: "barley",
	createdAt: 12549495969493,
};

const animals = ["horse", "dog", "fish", "cat", "bird"];

//?assume we want email from person and the first animal as standalone variables.

// const { email } = person;
// const [firstAnimal] = animals; //!notice here we are using square brackets instead of curly braces.
//*this is because we are creating a new variable. This will also only take the first index of the array. In order to
// console.log(email);
// console.log(firstAnimal);
// console.log(animals);

//?now try grabbing email and password and the first three strings from animlas

// var email = person.email;
// var password = person.password;
// var firstAnimal = animals[0];
// var secondAnimal = animals[1];
// var thirdAnimal = animals[2];

// console.log(thirdAnimal);

//?now with destructuring.

const { email, password } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;

console.log(email);
// console.log(animals);
